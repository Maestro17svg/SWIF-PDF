// SWIF PDF - Standalone Image Compression Tool Script (Canvas Client-Side Compression + Multi-Image & ZIP)

let uploadedImagesList = [];
let currentQuality = 0.70; // Default 70% quality

document.addEventListener('DOMContentLoaded', () => {
  initImageDropzone();
  initQualitySlider();
});

function initImageDropzone() {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('imageFileInput');
  if (!dropzone || !fileInput) return;

  ['dragenter', 'dragover'].forEach(ev => {
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropzone.classList.add('border-[#22C55E]', 'bg-[#F0FDF4]');
    });
  });

  ['dragleave', 'drop'].forEach(ev => {
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropzone.classList.remove('border-[#22C55E]', 'bg-[#F0FDF4]');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    if (e.dataTransfer.files.length > 0) {
      loadUploadedImages(Array.from(e.dataTransfer.files));
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      loadUploadedImages(Array.from(e.target.files));
    }
  });
}

function initQualitySlider() {
  const slider = document.getElementById('qualityRange');
  const textVal = document.getElementById('qualityValText');

  if (slider && textVal) {
    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      currentQuality = val / 100;
      textVal.innerText = `${val}%`;
      recompressAllImages();
    });
  }
}

async function loadUploadedImages(files) {
  const validFiles = files.filter(f => f.type.startsWith('image/') || /\.(jpg|jpeg|png|webp)$/i.test(f.name));
  if (validFiles.length === 0) {
    alert("Veuillez sélectionner au moins un fichier image valide (JPG, PNG, WebP).");
    return;
  }

  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');

  progressBar.style.width = '20%';
  statusMsg.innerText = "Chargement et analyse des images...";

  uploadedImagesList = [];

  for (let i = 0; i < validFiles.length; i++) {
    const file = validFiles[i];
    const pct = Math.round(20 + ((i + 1) / validFiles.length) * 70);
    progressBar.style.width = `${pct}%`;

    try {
      const compressedData = await compressSingleImage(file, currentQuality);
      uploadedImagesList.push({
        id: `img_${i}_${Date.now()}`,
        file,
        name: file.name,
        originalSize: file.size,
        compressedBlob: compressedData.blob,
        compressedSize: compressedData.blob.size,
        previewUrl: compressedData.dataUrl,
        mimeType: compressedData.mimeType,
        width: compressedData.width,
        height: compressedData.height
      });
    } catch (err) {
      console.warn(`Erreur lors de la compression de ${file.name}:`, err);
    }
  }

  progressBar.style.width = '100%';

  setTimeout(() => {
    document.getElementById('progressSection').classList.add('hidden');
    if (uploadedImagesList.length === 0) {
      alert("Impossible de compresser les images sélectionnées.");
      resetImageCompressor();
    } else {
      document.getElementById('editorSection').classList.remove('hidden');
      document.getElementById('editorSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      renderImagesGallery();
    }
  }, 400);
}

// Re-compress images dynamically when slider value changes
async function recompressAllImages() {
  if (uploadedImagesList.length === 0) return;

  for (let item of uploadedImagesList) {
    try {
      const compressedData = await compressSingleImage(item.file, currentQuality);
      item.compressedBlob = compressedData.blob;
      item.compressedSize = compressedData.blob.size;
      item.previewUrl = compressedData.dataUrl;
    } catch (e) {
      console.warn("Re-compression error:", e);
    }
  }

  renderImagesGallery();
}

// Core Canvas Compression Function
function compressSingleImage(file, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const w = img.width;
        const h = img.height;

        // Cap max dimension to 2400px for reasonable file sizes
        let targetW = w;
        let targetH = h;
        const maxDim = 2400;

        if (w > maxDim || h > maxDim) {
          if (w > h) {
            targetW = maxDim;
            targetH = Math.round((h / w) * maxDim);
          } else {
            targetH = maxDim;
            targetW = Math.round((w / h) * maxDim);
          }
        }

        canvas.width = targetW;
        canvas.height = targetH;

        const ctx = canvas.getContext('2d');
        // Fill white background for PNG transparency conversion
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, targetW, targetH);
        ctx.drawImage(img, 0, 0, targetW, targetH);

        // Determine target export format
        let mimeType = 'image/jpeg';
        if (file.type === 'image/webp') mimeType = 'image/webp';

        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas toBlob failed"));
            return;
          }

          // Safety Fallback: If compressed blob is larger than original file, use original file!
          let finalBlob = blob;
          if (blob.size >= file.size) {
            finalBlob = file;
          }

          const dataUrl = canvas.toDataURL(mimeType, quality);

          resolve({
            blob: finalBlob,
            dataUrl,
            mimeType,
            width: targetW,
            height: targetH
          });

          canvas.width = 0;
          canvas.height = 0;
        }, mimeType, quality);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderImagesGallery() {
  const grid = document.getElementById('imagesGalleryGrid');
  if (!grid) return;

  grid.innerHTML = "";

  let totalOriginal = 0;
  let totalCompressed = 0;

  uploadedImagesList.forEach((item, idx) => {
    totalOriginal += item.originalSize;
    totalCompressed += item.compressedSize;

    const savedBytes = Math.max(0, item.originalSize - item.compressedSize);
    const savedPct = item.originalSize > 0 ? Math.round((savedBytes / item.originalSize) * 100) : 0;

    const card = document.createElement('div');
    card.className = "bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-4";

    card.innerHTML = `
      <div class="w-full h-48 bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-2 border border-slate-100">
        <img src="${item.previewUrl}" class="max-w-full max-h-full object-contain">
      </div>
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs font-bold text-slate-800">
          <span class="truncate max-w-[180px]">${item.name}</span>
          <span class="px-2.5 py-0.5 rounded-full ${savedPct > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'} font-extrabold text-[11px]">
            ${savedPct > 0 ? `-${savedPct}%` : 'Original'}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-2 text-[11px] font-semibold text-center pt-2 border-t border-slate-100">
          <div class="bg-slate-50 p-2 rounded-lg">
            <span class="text-slate-400 block text-[10px] uppercase">Avant</span>
            <span class="text-slate-700 font-bold">${formatBytes(item.originalSize)}</span>
          </div>
          <div class="bg-[#F0FDF4] p-2 rounded-lg text-[#15803D]">
            <span class="text-emerald-600 block text-[10px] uppercase">Après</span>
            <span class="font-bold">${formatBytes(item.compressedSize)}</span>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Total summary card update
  const totalSaved = Math.max(0, totalOriginal - totalCompressed);
  const totalPct = totalOriginal > 0 ? Math.round((totalSaved / totalOriginal) * 100) : 0;

  const summaryEl = document.getElementById('totalSavingsSummary');
  if (summaryEl) {
    summaryEl.innerText = `${uploadedImagesList.length} image(s) : ${formatBytes(totalOriginal)} ➔ ${formatBytes(totalCompressed)} (-${totalPct}%)`;
  }

  const btnTextEl = document.getElementById('downloadBtnText');
  if (btnTextEl) {
    if (uploadedImagesList.length === 1) {
      btnTextEl.innerText = "Télécharger l'image";
    } else {
      btnTextEl.innerText = `Télécharger ${uploadedImagesList.length} images (.ZIP)`;
    }
  }

  if (window.lucide) lucide.createIcons();
}

async function downloadCompressedImages() {
  if (uploadedImagesList.length === 0) return;

  if (uploadedImagesList.length === 1) {
    // Single image direct download
    const item = uploadedImagesList[0];
    const link = document.createElement('a');
    link.href = URL.createObjectURL(item.compressedBlob);
    link.download = `swif-compressed-${item.name.replace(/\.[^/.]+$/, "")}.jpg`;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => link.remove(), 1000);
  } else {
    // Multi-image JSZip download
    if (!window.JSZip) {
      alert("Erreur de la bibliothèque ZIP. Téléchargement direct...");
      uploadedImagesList.forEach(item => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(item.compressedBlob);
        link.download = `swif-compressed-${item.name.replace(/\.[^/.]+$/, "")}.jpg`;
        document.body.appendChild(link);
        link.click();
      });
      return;
    }

    const zip = new JSZip();
    uploadedImagesList.forEach((item, idx) => {
      const ext = item.mimeType === 'image/webp' ? 'webp' : 'jpg';
      const fileName = `swif-compressed-${idx + 1}-${item.name.replace(/\.[^/.]+$/, "")}.${ext}`;
      zip.file(fileName, item.compressedBlob);
    });

    const zipContent = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipContent);
    link.download = `swif-compressed-images.zip`;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => link.remove(), 1000);
  }
}

function resetImageCompressor() {
  uploadedImagesList = [];
  currentQuality = 0.70;
  const fileInput = document.getElementById('imageFileInput');
  if (fileInput) fileInput.value = "";
  const slider = document.getElementById('qualityRange');
  if (slider) slider.value = 70;
  const textVal = document.getElementById('qualityValText');
  if (textVal) textVal.innerText = '70%';

  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('dropzoneSection').classList.remove('hidden');
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Octets';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Octets', 'Ko', 'Mo', 'Go'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
