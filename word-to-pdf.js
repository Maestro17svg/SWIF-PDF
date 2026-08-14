// SWIF PDF - Standalone Word (DOCX) to PDF Converter Tool Script (Using Mammoth.js + html2pdf.js)

let uploadedWordFile = null;
let convertedPdfBlob = null;
let convertedPdfFileName = "";

document.addEventListener('DOMContentLoaded', () => {
  initWordDropzone();
});

function initWordDropzone() {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('wordFileInput');
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
      loadWordFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      loadWordFile(e.target.files[0]);
    }
  });
}

async function loadWordFile(file) {
  if (!file || !/\.(docx)$/i.test(file.name)) {
    alert("Veuillez sélectionner un fichier Microsoft Word au format .docx valide.");
    return;
  }

  uploadedWordFile = file;

  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');

  progressBar.style.width = '20%';
  statusMsg.innerText = "Lecture du document Word (.docx)...";

  try {
    const arrayBuffer = await file.arrayBuffer();

    progressBar.style.width = '50%';
    statusMsg.innerText = "Conversion de la mise en page et des éléments...";

    // Parse .docx into structured HTML via Mammoth.js
    if (!window.mammoth) {
      throw new Error("Bibliothèque Mammoth.js non chargée.");
    }

    const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer });
    const htmlContent = result.value || "<p>Document vide.</p>";

    // Render HTML in containers
    const renderContainer = document.getElementById('wordRenderContainer');
    const previewContainer = document.getElementById('previewCard');

    if (renderContainer) renderContainer.innerHTML = htmlContent;
    if (previewContainer) previewContainer.innerHTML = htmlContent;

    progressBar.style.width = '80%';
    statusMsg.innerText = "Génération du fichier PDF final...";

    convertedPdfFileName = `${file.name.replace(/\.[^/.]+$/, "")}.pdf`;

    progressBar.style.width = '100%';

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = convertedPdfFileName;
      document.getElementById('resultSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);

  } catch (err) {
    console.error("Error converting Word to PDF:", err);
    alert(`Erreur lors de la conversion du fichier Word : ${err.message || err}`);
    resetWordToPdfTool();
  }
}

async function downloadConvertedPdf() {
  if (!uploadedWordFile) return;

  const element = document.getElementById('wordRenderContainer');
  if (!element || !window.html2pdf) {
    alert("Erreur du moteur de génération PDF. Veuillez ré-essayer.");
    return;
  }

  const opt = {
    margin: [12, 12, 12, 12],
    filename: convertedPdfFileName || 'word-converted.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (err) {
    console.error("html2pdf save error:", err);
    alert("Erreur lors de la création du fichier PDF.");
  }
}

function resetWordToPdfTool() {
  uploadedWordFile = null;
  convertedPdfBlob = null;
  convertedPdfFileName = "";

  const fileInput = document.getElementById('wordFileInput');
  if (fileInput) fileInput.value = "";

  const renderContainer = document.getElementById('wordRenderContainer');
  const previewContainer = document.getElementById('previewCard');
  if (renderContainer) renderContainer.innerHTML = "";
  if (previewContainer) previewContainer.innerHTML = "";

  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('dropzoneSection').classList.remove('hidden');
}
