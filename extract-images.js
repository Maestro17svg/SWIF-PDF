// SWIF PDF - Standalone PDF Image Extraction Tool Script (With Smart 5-Image Direct Download Threshold)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Extract <span class='text-coral'>Images</span> from PDF Documents",
    hero_subtitle: "Automatically extract all embedded images, photos and graphics from any PDF file with 100% client-side privacy.",
    drop_title: "Drag & drop your PDF file here",
    drop_or: "or",
    drop_btn: "Select PDF File to Extract Images",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    select_all: "Select All Images",
    deselect_all: "Deselect All",
    selection_count: "{selected} of {total} images selected",
    btn_download_direct: "Download {count} Images Directly",
    btn_download_zip: "Download {count} Images (.ZIP)",
    status_extracting: "Scanning PDF and extracting embedded images...",
    status_downloading_direct: "Triggering direct downloads for selected images...",
    status_zipping: "Compressing images into ZIP archive...",
    status_done: "Extracted images ready!",
    res_title: "Images Processed Successfully",
    res_filename: "Download Type:",
    res_count: "Images Downloaded:",
    btn_download: "Download Images",
    btn_reset: "Extract From Another PDF",
    no_images: "No embedded images found in this PDF file.",
    faq_title: "Image Extraction <span class='text-coral'>FAQ</span>",
    faq_q1: "Does image extraction reduce the image quality?",
    faq_a1: "No! Images are extracted at their full native resolution directly from the PDF stream.",
    faq_q2: "How does the download threshold work?",
    faq_a2: "For 1 to 5 images, files are downloaded directly to your device. For more than 5 images, SWIF PDF automatically bundles them into a ZIP archive for convenience.",
    faq_q3: "Is my PDF uploaded to any server?",
    faq_a3: "No! All image extraction and packaging is done 100% locally in your browser memory.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Extraire les <span class='text-coral'>Images</span> d'un Document PDF",
    hero_subtitle: "Extrayez automatiquement toutes les images, photos et graphiques incorporés dans votre PDF.",
    drop_title: "Glissez & déposez votre fichier PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF à analyser",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    select_all: "Tout sélectionner",
    deselect_all: "Tout désélectionner",
    selection_count: "{selected} sur {total} images sélectionnées",
    btn_download_direct: "Télécharger les {count} images directement",
    btn_download_zip: "Télécharger les {count} images (.ZIP)",
    status_extracting: "Analyse du PDF et extraction des images en cours...",
    status_downloading_direct: "Lancement des téléchargements directs...",
    status_zipping: "Compression des images dans l'archive ZIP...",
    status_done: "Images extraites prêtes !",
    res_title: "Images traitées avec succès",
    res_filename: "Type de téléchargement :",
    res_count: "Images téléchargées :",
    btn_download: "Télécharger les images",
    btn_reset: "Extraire d'un autre PDF",
    no_images: "Aucune image incorporée n'a été trouvée dans ce document PDF.",
    faq_title: "Foire Aux Questions <span class='text-coral'>Extraction d'Images</span>",
    faq_q1: "L'extraction réduit-elle la qualité des images ?",
    faq_a1: "Non ! Les images sont extraites dans leur résolution d'origine directement depuis le fichier PDF.",
    faq_q2: "Comment fonctionne le seuil de téléchargement ?",
    faq_a2: "De 1 à 5 images, les téléchargements se lancent directement. Au-delà de 5 images, l'outil regroupe automatiquement les fichiers dans une archive ZIP.",
    faq_q3: "Mon document est-il envoyé sur un serveur ?",
    faq_a3: "Non ! Tout le traitement s'effectue à 100% dans votre navigateur.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Extraer <span class='text-coral'>Imágenes</span> de Documentos PDF",
    hero_subtitle: "Extrae automáticamente todas las imágenes incorporadas en tus archivos PDF.",
    drop_title: "Arrastra y suelta tu archivo PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF",
    drop_info: "Procesamiento 100% local en tu navegador.",
    select_all: "Seleccionar Todo",
    deselect_all: "Deseleccionar Todo",
    selection_count: "{selected} de {total} imágenes seleccionadas",
    btn_download_direct: "Descargar {count} imágenes directamente",
    btn_download_zip: "Descargar {count} imágenes (.ZIP)",
    status_extracting: "Extrayendo imágenes...",
    status_downloading_direct: "Iniciando descargas directas...",
    status_zipping: "Comprimiendo archivo ZIP...",
    status_done: "¡Imágenes Listas!",
    res_title: "Imágenes Procesadas Con Éxito",
    res_filename: "Tipo de descarga:",
    res_count: "Total de imágenes:",
    btn_download: "Descargar Imágenes",
    btn_reset: "Extraer de Otro PDF",
    no_images: "No se encontraron imágenes en este PDF.",
    faq_title: "FAQ <span class='text-coral'>Extracción de Imágenes</span>",
    faq_q1: "¿Se pierde calidad?",
    faq_a1: "No, se extraen a resolución original.",
    faq_q2: "¿Umbral de descarga?",
    faq_a2: "Hasta 5 imágenes se descargan directamente. Más de 5 se empaquetan en ZIP.",
    faq_q3: "¿Privacidad?",
    faq_a3: "100% en tu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>Bilder</span> aus PDF Dokumenten Extrahieren",
    hero_subtitle: "Extrahieren Sie automatisch alle eingebetteten Bilder und Grafiken aus jeder PDF-Datei.",
    drop_title: "PDF-Datei hierher ziehen",
    drop_or: "oder",
    drop_btn: "PDF-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung im Browser.",
    select_all: "Alle Auswählen",
    deselect_all: "Auswahl Aufheben",
    selection_count: "{selected} von {total} Bildern ausgewählt",
    btn_download_direct: "{count} Bilder direkt herunterladen",
    btn_download_zip: "{count} Bilder herunterladen (.ZIP)",
    status_extracting: "Extrahiere Bilder...",
    status_downloading_direct: "Starte direkte Downloads...",
    status_zipping: "Erstelle ZIP-Archiv...",
    status_done: "Extrahierte Bilder Bereit!",
    res_title: "Bilder Erfolgreich Verarbeitet",
    res_filename: "Download-Typ:",
    res_count: "Extrahierte Bilder:",
    btn_download: "Bilder Herunterladen",
    btn_reset: "Aus Anderer Datei Extrahieren",
    no_images: "Keine eingebetteten Bilder in dieser PDF-Datei gefunden.",
    faq_title: "Bilder Extrahieren <span class='text-coral'>FAQ</span>",
    faq_q1: "Qualitätsverlust?",
    faq_a1: "Nein, in Originalauflösung.",
    faq_q2: "Download-Regel?",
    faq_a2: "1-5 Bilder werden direkt heruntergeladen, mehr als 5 als ZIP-Archiv.",
    faq_q3: "Datenschutz?",
    faq_a3: "100% im Browser.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Extrair <span class='text-coral'>Imagens</span> de Documentos PDF",
    hero_subtitle: "Extraia automaticamente todas as imagens incorporadas nos seus PDFs.",
    drop_title: "Arraste e largue o seu ficheiro PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF",
    drop_info: "Processamento 100% local no seu navegador.",
    select_all: "Selecionar Tudo",
    deselect_all: "Desmarcar Tudo",
    selection_count: "{selected} de {total} imagens selecionadas",
    btn_download_direct: "Descarregar {count} imagens diretamente",
    btn_download_zip: "Descarregar {count} imagens (.ZIP)",
    status_extracting: "A extrair imagens...",
    status_downloading_direct: "A iniciar descargas diretas...",
    status_zipping: "A criar ficheiro ZIP...",
    status_done: "Imagens Extraídas Prontas!",
    res_title: "Imagens Processadas com Sucesso",
    res_filename: "Tipo de descarregamento:",
    res_count: "Total de imagens:",
    btn_download: "Descarregar Imagens",
    btn_reset: "Extrair de Outro PDF",
    no_images: "Nenhuma imagem encontrada neste PDF.",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Extração de Imagens</span>",
    faq_q1: "Perda de qualidade?",
    faq_a1: "Não, extraídas na resolução original.",
    faq_q2: "Regra de descarregamento?",
    faq_a2: "Até 5 imagens são descarregadas diretamente. Mais de 5 num ficheiro ZIP.",
    faq_q3: "Seguro?",
    faq_a3: "100% no seu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Estrai <span class='text-coral'>Immagini</span> da Documenti PDF",
    hero_subtitle: "Estrai automaticamente tutte le immagini e foto incorporate in qualsiasi PDF.",
    drop_title: "Trascina e rilascia il tuo file PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF",
    drop_info: "Elaborazione 100% locale nel tuo browser.",
    select_all: "Seleziona Tutto",
    deselect_all: "Deseleziona Tutto",
    selection_count: "{selected} di {total} immagini selezionate",
    btn_download_direct: "Scarica {count} immagini direttamente",
    btn_download_zip: "Scarica {count} immagini (.ZIP)",
    status_extracting: "Estrazione immagini in corso...",
    status_downloading_direct: "Avvio download diretti...",
    status_zipping: "Creazione archivio ZIP...",
    status_done: "Immagini Estratte Pronte!",
    res_title: "Immagini Elaborate con Successo",
    res_filename: "Tipo download:",
    res_count: "Totale immagini:",
    btn_download: "Scarica Immagini",
    btn_reset: "Estrai da Un Altro PDF",
    no_images: "Nessuna immagine trovata in questo PDF.",
    faq_title: "FAQ <span class='text-coral'>Estrazione Immagini</span>",
    faq_q1: "Perdita di qualità?",
    faq_a1: "No, estratte alla risoluzione originale.",
    faq_q2: "Soglia download?",
    faq_a2: "Fino a 5 immagini download diretto, oltre 5 in archivio ZIP.",
    faq_q3: "Sicuro?",
    faq_a3: "100% nel tuo browser.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Wyciągaj <span class='text-coral'>Obrazy</span> z Dokumentów PDF",
    hero_subtitle: "Automatycznie wypakowuj wszystkie obrazki i zdjęcia z plików PDF.",
    drop_title: "Przeciągnij i upuść plik PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF",
    drop_info: "Przetwarzanie 100% lokalnie.",
    select_all: "Zaznacz Wszystko",
    deselect_all: "Odznacz Wszystko",
    selection_count: "{selected} z {total} obrazów zaznaczonych",
    btn_download_direct: "Pobierz {count} obrazów bezpośrednio",
    btn_download_zip: "Pobierz {count} obrazów (.ZIP)",
    status_extracting: "Wypakowywanie obrazów...",
    status_downloading_direct: "Rozpoczynanie pobierania bezpośredniego...",
    status_zipping: "Pakowanie do archiwum ZIP...",
    status_done: "Wypakowane Obrazy Gotowe!",
    res_title: "Obrazy Przetworzone",
    res_filename: "Typ pobierania:",
    res_count: "Liczba obrazów:",
    btn_download: "Pobierz Obrazy",
    btn_reset: "Wypakuj z Innego PDF",
    no_images: "Nie znaleziono obrazów w tym pliku PDF.",
    faq_title: "FAQ <span class='text-coral'>Wypakowywanie Obrazów</span>",
    faq_q1: "Jakość?",
    faq_a1: "Oryginalna rozdzielczość.",
    faq_q2: "Reguła pobierania?",
    faq_a2: "Do 5 obrazów bezpośrednio, powyżej 5 w archiwum ZIP.",
    faq_q3: "Bezpieczeństwo?",
    faq_a3: "100% w przeglądarce.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "استخراج <span class='text-coral'>الصور</span> من مستندات PDF",
    hero_subtitle: "استخرج كافة الصور والرسوميات المدمجة داخل مستندات PDF تلقائياً وبخصوصية 100%.",
    drop_title: "اسحب ملف PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF لاستخراج الصور",
    drop_info: "معالجة محلية 100% داخل متصفحك.",
    select_all: "تحديد كافة الصور",
    deselect_all: "إلغاء تحديد الكل",
    selection_count: "تم تحديد {selected} من إجمالي {total} صورة",
    btn_download_direct: "تحميل {count} صور مباشرة",
    btn_download_zip: "تحميل {count} صور (.ZIP)",
    status_extracting: "جاري فحص المستند واستخراج الصور المدمجة...",
    status_downloading_direct: "جاري بدء التحميل المباشر للصور...",
    status_zipping: "جاري ضغط الصور في أرشيف ZIP...",
    status_done: "الصور المستخرجة جاهزة!",
    res_title: "تم معالجة الصور بنجاح",
    res_filename: "نوع التحميل:",
    res_count: "إجمالي الصور:",
    btn_download: "تحميل الصور",
    btn_reset: "استخراج من مستند آخر",
    no_images: "لم يتم العثور على أي صور مدمجة داخل هذا المستند.",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>استخراج الصور</span>",
    faq_q1: "هل يقلل الاستخراج من دقة الصور؟",
    faq_a1: "لا! يتم استخراج الصور بدقتها الأصلية المدمجة داخل المستند.",
    faq_q2: "كيف تعمل قاعدة التحميل؟",
    faq_a2: "من 1 إلى 5 صور يتم التحميل المباشر. لأكثر من 5 صور يتم تجميعها تلقائياً داخل ملف مضغوط ZIP.",
    faq_q3: "هل يتم رفع المستند إلى خادم؟",
    faq_a3: "لا! المعالجة بالكامل تتم 100% محلياً داخل متصفحك.",
    footer_rights: "© 2026 SWIF PDF. جميع الحقوق محفوظة."
  }
};

const languageMeta = {
  en: { name: "English", flag: "🇺🇸", dir: "ltr" },
  fr: { name: "Français", flag: "🇫🇷", dir: "ltr" },
  es: { name: "Español", flag: "🇪🇸", dir: "ltr" },
  de: { name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  pt: { name: "Português", flag: "🇵🇹", dir: "ltr" },
  it: { name: "Italiano", flag: "🇮🇹", dir: "ltr" },
  pl: { name: "Polski", flag: "🇵🇱", dir: "ltr" },
  ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" }
};

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

let currentLang = 'en';
let pdfFile = null;

// Extracted images array: Array of { id, dataUrl, width, height, format, selected }
let extractedImagesList = [];

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
  initFaqAccordion();
});

function initLanguageSwitcher() {
  const langBtn = document.getElementById('langDropdownBtn');
  const langMenu = document.getElementById('langDropdownMenu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => langMenu.classList.add('hidden'));
  }
  document.querySelectorAll('.lang-option').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = item.getAttribute('data-lang');
      if (selectedLang && translations[selectedLang]) switchLanguage(selectedLang);
    });
  });
}

function switchLanguage(lang) {
  currentLang = lang;
  const meta = languageMeta[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = meta.dir;

  const currentFlag = document.getElementById('currentLangFlag');
  const currentName = document.getElementById('currentLangName');
  if (currentFlag) currentFlag.innerText = meta.flag;
  if (currentName) currentName.innerText = meta.name;

  if (window.mergeSeoIntoCommonFooter) window.mergeSeoIntoCommonFooter();
  const seoDict = (window.getSeoDictionary) ? window.getSeoDictionary(null, lang) : {};
  const common = (window.commonFooter && window.commonFooter[lang]) ? window.commonFooter[lang] : {};
  const dict = Object.assign({}, common, seoDict, translations[lang] || {});
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  updateSelectionCounterText();
}

function initDropzone() {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
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
    if (e.dataTransfer.files.length > 0) loadPdfFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) loadPdfFile(e.target.files[0]);
  });
}

async function loadPdfFile(file) {
  if (!file || !file.name.toLowerCase().endsWith('.pdf')) {
    alert("Please select a valid PDF file.");
    return;
  }
  pdfFile = file;

  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '20%';
  statusMsg.innerText = dict.status_extracting;

  try {
    const ab = await file.arrayBuffer();
    extractedImagesList = await extractEmbeddedImagesFromPdf(ab, (pct) => {
      progressBar.style.width = `${Math.min(90, 20 + pct * 0.7)}%`;
    });

    progressBar.style.width = '100%';

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      if (extractedImagesList.length === 0) {
        alert(dict.no_images);
        resetTool();
      } else {
        document.getElementById('editorSection').classList.remove('hidden');
        renderImageGallery();
      }
    }, 400);

  } catch (err) {
    console.error("Error extracting images:", err);
    alert(`Could not extract images from PDF: ${err.message || err}`);
    resetTool();
  }
}

/* ==================== CLIENT-SIDE PDF IMAGE EXTRACTION ENGINE ==================== */
async function extractEmbeddedImagesFromPdf(arrayBuffer, progressCallback) {
  const { PDFDocument, PDFName } = PDFLib;
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();
  const imageList = [];
  let count = 0;

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const { node } = page;

    if (progressCallback) progressCallback(((i + 1) / pages.length) * 100);

    const resources = node.Resources();
    if (!resources) continue;

    const xObject = resources.get(PDFName.of('XObject'));
    if (!xObject) continue;

    const xObjectDict = pdfDoc.context.lookup(xObject);
    if (!xObjectDict || !xObjectDict.entries) continue;

    const entries = xObjectDict.entries();

    for (const [key, ref] of entries) {
      const xSubObject = pdfDoc.context.lookup(ref);
      if (!xSubObject || !xSubObject.dict) continue;

      const subtype = xSubObject.dict.get(PDFName.of('Subtype'));
      if (subtype === PDFName.of('Image')) {
        count++;
        const width = xSubObject.dict.get(PDFName.of('Width'))?.numberValue || 800;
        const height = xSubObject.dict.get(PDFName.of('Height'))?.numberValue || 600;
        const filter = xSubObject.dict.get(PDFName.of('Filter'));

        let imgFormat = 'png';
        let dataUrl = null;

        if (filter === PDFName.of('DCTDecode') || (Array.isArray(filter?.array) && filter.array.includes(PDFName.of('DCTDecode')))) {
          imgFormat = 'jpg';
          const rawBytes = xSubObject.contents;
          const blob = new Blob([rawBytes], { type: 'image/jpeg' });
          dataUrl = await blobToDataURL(blob);
        } else {
          dataUrl = await renderPdfPageImageToDataUrl(arrayBuffer, i + 1);
        }

        if (dataUrl) {
          imageList.push({
            id: `img_${count}_${Date.now()}`,
            dataUrl,
            width,
            height,
            format: imgFormat,
            selected: true
          });
        }
      }
    }
  }

  if (imageList.length === 0) {
    const pdfjsData = new Uint8Array(arrayBuffer.slice(0));
    const pdfjsDoc = await pdfjsLib.getDocument({ data: pdfjsData }).promise;
    for (let pageNum = 1; pageNum <= pdfjsDoc.numPages; pageNum++) {
      const page = await pdfjsDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport }).promise;

      imageList.push({
        id: `img_page_${pageNum}`,
        dataUrl: canvas.toDataURL('image/png'),
        width: Math.round(viewport.width),
        height: Math.round(viewport.height),
        format: 'png',
        selected: true
      });
    }
  }

  return imageList;
}

function blobToDataURL(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

async function renderPdfPageImageToDataUrl(arrayBuffer, pageNum) {
  const pdfjsData = new Uint8Array(arrayBuffer.slice(0));
  const pdfjsDoc = await pdfjsLib.getDocument({ data: pdfjsData }).promise;
  const page = await pdfjsDoc.getPage(pageNum);
  const viewport = page.getViewport({ scale: 2.0 });
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext('2d');
  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvas.toDataURL('image/png');
}

/* ==================== GALLERY & SELECTION MANAGEMENT ==================== */
function renderImageGallery() {
  const galleryGrid = document.getElementById('imageGalleryGrid');
  galleryGrid.innerHTML = "";

  extractedImagesList.forEach((imgObj, idx) => {
    const card = document.createElement('div');
    card.className = `image-card relative bg-white p-3 rounded-2xl border-2 transition-all cursor-pointer select-none group shadow-md hover:shadow-xl ${imgObj.selected ? 'border-[#22C55E] bg-[#F0FDF4]/30 ring-2 ring-orange-400/30' : 'border-slate-200 hover:border-slate-300'}`;
    card.setAttribute('data-id', imgObj.id);

    card.innerHTML = `
      <div class="absolute top-4 left-4 z-10">
        <input type="checkbox" ${imgObj.selected ? 'checked' : ''} class="w-5 h-5 rounded-lg text-[#22C55E] focus:ring-emerald-500 cursor-pointer pointer-events-none">
      </div>
      <div class="w-full h-[200px] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden p-2">
        <img src="${imgObj.dataUrl}" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300">
      </div>
      <div class="pt-3 flex items-center justify-between text-xs font-extrabold text-slate-700">
        <span>Image #${idx + 1}</span>
        <span class="text-[10px] uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-bold">${imgObj.width}x${imgObj.height} ${imgObj.format}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      imgObj.selected = !imgObj.selected;
      renderImageGallery();
      updateSelectionCounterText();
    });

    galleryGrid.appendChild(card);
  });

  updateSelectionCounterText();
  if (window.lucide) lucide.createIcons();
}

function toggleSelectAllImages() {
  const allSelected = extractedImagesList.every(img => img.selected);
  extractedImagesList.forEach(img => img.selected = !allSelected);
  renderImageGallery();
}

function updateSelectionCounterText() {
  const dict = translations[currentLang];
  const countEl = document.getElementById('selectionCountText');
  const btnTextEl = document.getElementById('downloadBtnDynamicText');
  const btnIconEl = document.getElementById('downloadBtnDynamicIcon');
  
  const selectedImages = extractedImagesList.filter(img => img.selected);
  const selectedCount = selectedImages.length;

  if (countEl && dict) {
    countEl.innerText = dict.selection_count
      .replace('{selected}', selectedCount)
      .replace('{total}', extractedImagesList.length);
  }

  // Update Download Button Label & Icon dynamically based on 5-image threshold rule
  if (btnTextEl && dict) {
    if (selectedCount <= 5) {
      btnTextEl.innerText = (dict.btn_download_direct || "Download {count} Images Directly").replace('{count}', selectedCount);
      if (btnIconEl) btnIconEl.setAttribute('data-lucide', 'download');
    } else {
      btnTextEl.innerText = (dict.btn_download_zip || "Download {count} Images (.ZIP)").replace('{count}', selectedCount);
      if (btnIconEl) btnIconEl.setAttribute('data-lucide', 'file-archive');
    }
  }

  if (window.lucide) lucide.createIcons();
}

/* ==================== SMART DOWNLOAD LOGIC (THRESHOLD = 5) ==================== */
async function downloadSelectedImages() {
  const selectedImages = extractedImagesList.filter(img => img.selected);
  const count = selectedImages.length;

  if (count === 0) {
    alert("Please select at least one image to download.");
    return;
  }

  const dict = translations[currentLang];

  // THRESHOLD RULE 1: If 1 to 5 images selected -> DIRECT INDIVIDUAL DOWNLOADS
  if (count <= 5) {
    document.getElementById('editorSection').classList.add('hidden');
    document.getElementById('progressSection').classList.remove('hidden');

    const progressBar = document.getElementById('progressBar');
    const statusMsg = document.getElementById('statusMsg');

    progressBar.style.width = '40%';
    statusMsg.innerText = dict.status_downloading_direct;

    // Trigger individual downloads sequentially with 250ms spacing
    for (let i = 0; i < count; i++) {
      const img = selectedImages[i];
      const link = document.createElement('a');
      link.href = img.dataUrl;
      link.download = `extracted_image_${i + 1}.${img.format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      progressBar.style.width = `${40 + Math.round(((i + 1) / count) * 55)}%`;
      await new Promise(r => setTimeout(r, 250));
    }

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = "Direct Individual Downloads";
      document.getElementById('resCountText').innerText = `${count} images`;

      const downloadBtn = document.getElementById('downloadZipBtn');
      downloadBtn.onclick = () => {
        // Re-trigger direct download if user clicks again
        selectedImages.forEach((img, idx) => {
          const link = document.createElement('a');
          link.href = img.dataUrl;
          link.download = `extracted_image_${idx + 1}.${img.format}`;
          link.click();
        });
      };
    }, 400);

  } else {
    // THRESHOLD RULE 2: If > 5 images selected -> PACK INTO ZIP ARCHIVE
    document.getElementById('editorSection').classList.add('hidden');
    document.getElementById('progressSection').classList.remove('hidden');

    const progressBar = document.getElementById('progressBar');
    const statusMsg = document.getElementById('statusMsg');

    progressBar.style.width = '30%';
    statusMsg.innerText = dict.status_zipping;

    try {
      const zip = new JSZip();
      const folder = zip.folder("extracted-images");

      for (let i = 0; i < count; i++) {
        const img = selectedImages[i];
        const base64Data = img.dataUrl.split(',')[1];
        const filename = `image_${i + 1}.${img.format}`;
        folder.file(filename, base64Data, { base64: true });

        const pct = Math.round(30 + ((i + 1) / count) * 60);
        progressBar.style.width = `${pct}%`;
      }

      progressBar.style.width = '95%';
      const zipContent = await zip.generateAsync({ type: "blob" });
      const zipFileName = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-extracted-images.zip`;

      progressBar.style.width = '100%';
      statusMsg.innerText = dict.status_done;

      setTimeout(() => {
        document.getElementById('progressSection').classList.add('hidden');
        document.getElementById('resultSection').classList.remove('hidden');
        document.getElementById('resFileName').innerText = zipFileName;
        document.getElementById('resCountText').innerText = `${count} images (ZIP Archive)`;

        const downloadBtn = document.getElementById('downloadZipBtn');
        downloadBtn.onclick = () => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(zipContent);
          link.download = zipFileName;
          link.click();
        };
      }, 400);

    } catch (err) {
      console.error("Error creating ZIP archive:", err);
      alert(`Could not create ZIP archive: ${err.message || err}`);
      resetTool();
    }
  }
}

function resetTool() {
  pdfFile = null;
  extractedImagesList = [];
  const fileInput = document.getElementById('fileInput');
  if (fileInput) fileInput.value = "";

  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('dropzoneSection').classList.remove('hidden');
}

function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');
    if (header && content) {
      header.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');
        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });
}
