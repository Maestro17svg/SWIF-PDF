// SWIF PDF - Standalone Multi-Direction PDF Converter Engine & i18n Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    
    hero_title: "Convert <span class='text-coral'>PDF</span> Files Online",
    hero_subtitle: "Convert PDF to Word, PDF to Image, or Image to PDF directly in your browser with 100% privacy.",
    
    mode_pdf_word: "PDF to Word / Text",
    mode_pdf_img: "PDF to Image (PNG)",
    mode_img_pdf: "Image to PDF (JPG/PNG)",

    drop_title_pdf: "Drag & drop your PDF file here",
    drop_title_img: "Drag & drop your Image (JPG/PNG) file here",
    drop_or: "or",
    drop_btn_pdf: "Select PDF File",
    drop_btn_img: "Select Image File",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",

    btn_convert: "Convert Now",

    status_loading: "Reading & analyzing document structure...",
    status_converting: "Performing client-side conversion...",
    status_done: "Conversion Complete!",

    res_title: "Conversion Summary",
    res_format: "Output Format:",
    res_size: "Converted File Size:",
    res_filename: "File Name:",

    btn_download: "Download Converted File",
    btn_reset: "Convert Another File",

    faq_title: "Converter <span class='text-coral'>FAQ</span>",
    faq_q1: "How does client-side PDF conversion work?",
    faq_a1: "SWIF PDF parses text streams and renders page canvases directly in your browser via PDF.js and pdf-lib. The conversion runs entirely on your local machine without uploading anything to remote servers.",
    faq_q2: "Can I convert images (JPG, PNG) into a PDF?",
    faq_a2: "Yes! Select the 'Image to PDF' mode, select your JPG or PNG image, and SWIF PDF will instantly build a high-resolution PDF document.",
    faq_q3: "Is there any conversion limit?",
    faq_a3: "No! All conversion modes are 100% free with no usage caps or watermarks.",

    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Convertir des fichiers <span class='text-coral'>PDF</span> en ligne",
    hero_subtitle: "Convertissez vos PDF en Word, en Image PNG, ou vos Images en PDF directement dans votre navigateur.",
    mode_pdf_word: "PDF vers Word / Texte",
    mode_pdf_img: "PDF vers Image (PNG)",
    mode_img_pdf: "Image vers PDF (JPG/PNG)",
    drop_title_pdf: "Glissez & déposez votre fichier PDF ici",
    drop_title_img: "Glissez & déposez votre Image (JPG/PNG) ici",
    drop_or: "ou",
    drop_btn_pdf: "Sélectionner un fichier PDF",
    drop_btn_img: "Sélectionner une Image",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    btn_convert: "Convertir maintenant",
    status_loading: "Lecture et analyse de la structure du document...",
    status_converting: "Conversion en cours dans le navigateur...",
    status_done: "Conversion terminée !",
    res_title: "Résumé de la conversion",
    res_format: "Format de sortie :",
    res_size: "Taille du fichier converti :",
    res_filename: "Nom du fichier :",
    btn_download: "Télécharger le fichier converti",
    btn_reset: "Convertir un autre fichier",
    faq_title: "Foire Aux Questions <span class='text-coral'>Conversion</span>",
    faq_q1: "Comment fonctionne la conversion côté client ?",
    faq_a1: "SWIF PDF extrait le texte et génère les rendus visuels directement dans votre navigateur grâce à PDF.js et pdf-lib. Vos données restent 100% privées.",
    faq_q2: "Puis-je convertir des images (JPG, PNG) en PDF ?",
    faq_a2: "Oui ! Choisissez le mode 'Image vers PDF', sélectionnez votre image et SWIF PDF créera un document PDF haute résolution.",
    faq_q3: "Y a-t-il une limite de conversion ?",
    faq_a3: "Non ! Tous les modes de conversion sont 100% gratuits et sans aucune restriction.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Convertir Archivos <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Convierte PDF a Word, PDF a Imagen o Imagen a PDF directamente en tu navegador con total privacidad.",
    mode_pdf_word: "PDF a Word / Texto",
    mode_pdf_img: "PDF a Imagen (PNG)",
    mode_img_pdf: "Imagen a PDF (JPG/PNG)",
    drop_title_pdf: "Arrastra y suelta tu archivo PDF aquí",
    drop_title_img: "Arrastra y suelta tu Imagen (JPG/PNG) aquí",
    drop_or: "o",
    drop_btn_pdf: "Seleccionar Archivo PDF",
    drop_btn_img: "Seleccionar Imagen",
    drop_info: "Procesamiento 100% local en tu navegador.",
    btn_convert: "Convertir Ahora",
    status_loading: "Leyendo y analizando estructura...",
    status_converting: "Realizando conversión en el navegador...",
    status_done: "¡Conversión Completada!",
    res_title: "Resumen de Conversión",
    res_format: "Formato de Salida:",
    res_size: "Tamaño Convertido:",
    res_filename: "Nombre de Archivo:",
    btn_download: "Descargar Archivo Convertido",
    btn_reset: "Convertir Otro Archivo",
    faq_title: "Preguntas Frecuentes de <span class='text-coral'>Conversión</span>",
    faq_q1: "¿Cómo funciona la conversión local?",
    faq_a1: "SWIF PDF extrae texto e imágenes directamente en tu navegador sin enviar nada a servidores externos.",
    faq_q2: "¿Puedo convertir imágenes a PDF?",
    faq_a2: "¡Sí! Elige el modo 'Imagen a PDF' para generar un documento PDF al instante.",
    faq_q3: "¿Hay límites de conversión?",
    faq_a3: "¡No! Es 100% gratuito y sin límites.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Dateien Online Konvertieren",
    hero_subtitle: "Konvertieren Sie PDF in Word, PDF in Bild oder Bild in PDF direkt im Browser mit 100% Datenschutz.",
    mode_pdf_word: "PDF in Word / Text",
    mode_pdf_img: "PDF in Bild (PNG)",
    mode_img_pdf: "Bild in PDF (JPG/PNG)",
    drop_title_pdf: "PDF-Datei hierher ziehen & ablegen",
    drop_title_img: "Bild-Datei (JPG/PNG) hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn_pdf: "PDF-Datei Auswählen",
    drop_btn_img: "Bild-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung im Browser.",
    btn_convert: "Jetzt Konvertieren",
    status_loading: "Lese Dokumentstruktur...",
    status_converting: "Konvertierung im Browser läuft...",
    status_done: "Konvertierung Abgeschlossen!",
    res_title: "Zusammenfassung",
    res_format: "Ausgabeformat:",
    res_size: "Neue Dateigröße:",
    res_filename: "Dateiname:",
    btn_download: "Konvertierte Datei Herunterladen",
    btn_reset: "Weitere Datei Konvertieren",
    faq_title: "Konverter <span class='text-coral'>FAQ</span>",
    faq_q1: "Wie funktioniert die Konvertierung im Browser?",
    faq_a1: "Texte und Bilder werden lokal extrahiert und umgewandelt.",
    faq_q2: "Kann ich Bilder in PDF umwandeln?",
    faq_a2: "Ja! Wählen Sie 'Bild in PDF' für sofortige PDF-Erstellung.",
    faq_q3: "Gibt es Einschränkungen?",
    faq_a3: "Nein! 100% kostenlos ohne Limits.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Converter Ficheiros <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Converta PDF para Word, PDF para Imagem ou Imagem para PDF diretamente no navegador com total privacidade.",
    mode_pdf_word: "PDF para Word / Texto",
    mode_pdf_img: "PDF para Imagem (PNG)",
    mode_img_pdf: "Imagem para PDF (JPG/PNG)",
    drop_title_pdf: "Arraste e largue o seu PDF aqui",
    drop_title_img: "Arraste e largue a sua Imagem (JPG/PNG) aqui",
    drop_or: "ou",
    drop_btn_pdf: "Selecionar Ficheiro PDF",
    drop_btn_img: "Selecionar Imagem",
    drop_info: "Processamento 100% local no seu navegador.",
    btn_convert: "Converter Agora",
    status_loading: "A ler estrutura do documento...",
    status_converting: "A realizar conversão no navegador...",
    status_done: "Conversão Concluída!",
    res_title: "Resumo da Conversão",
    res_format: "Formato de Saída:",
    res_size: "Tamanho Convertido:",
    res_filename: "Nome do Ficheiro:",
    btn_download: "Descarregar Ficheiro Convertido",
    btn_reset: "Converter Outro Ficheiro",
    faq_title: "Perguntas Frequentes de <span class='text-coral'>Conversão</span>",
    faq_q1: "Como funciona a conversão local?",
    faq_a1: "O SWIF PDF extrai textos e imagens diretamente no seu navegador.",
    faq_q2: "Posso converter imagens em PDF?",
    faq_a2: "Sim! Escolha o modo 'Imagem para PDF' para gerar o documento.",
    faq_q3: "Existem limites?",
    faq_a3: "Não! É 100% gratuito e sem restrições.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Converti File <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Converti PDF in Word, PDF in Immagine o Immagine in PDF direttamente nel browser in totale privacy.",
    mode_pdf_word: "Da PDF a Word / Testo",
    mode_pdf_img: "Da PDF a Immagine (PNG)",
    mode_img_pdf: "Da Immagine a PDF (JPG/PNG)",
    drop_title_pdf: "Trascina e rilascia il tuo PDF qui",
    drop_title_img: "Trascina e rilascia la tua Immagine (JPG/PNG) qui",
    drop_or: "o",
    drop_btn_pdf: "Seleziona File PDF",
    drop_btn_img: "Seleziona Immagine",
    drop_info: "Elaborazione 100% locale nel browser.",
    btn_convert: "Converti Ora",
    status_loading: "Lettura struttura documento...",
    status_converting: "Conversione nel browser in corso...",
    status_done: "Conversione Completata!",
    res_title: "Riepilogo Conversione",
    res_format: "Formato di Uscita:",
    res_size: "Dimensione Convertita:",
    res_filename: "Nome File:",
    btn_download: "Scarica File Convertito",
    btn_reset: "Converti Un Altro File",
    faq_title: "FAQ <span class='text-coral'>Conversione</span>",
    faq_q1: "Come funziona la conversione locale?",
    faq_a1: "Testi ed anteprime vengono elaborati nel tuo browser via JS.",
    faq_q2: "Posso convertire immagini in PDF?",
    faq_a2: "Sì! Seleziona 'Da Immagine a PDF' per generare un file PDF.",
    faq_q3: "Ci sono limiti?",
    faq_a3: "No! 100% gratuito senza limiti.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Konwersja Plików <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Konwertuj PDF do Word, PDF do Obrazu lub Obraz do PDF bezpośrednio w przeglądarce.",
    mode_pdf_word: "PDF do Word / Tekstu",
    mode_pdf_img: "PDF do Obrazu (PNG)",
    mode_img_pdf: "Obraz do PDF (JPG/PNG)",
    drop_title_pdf: "Przeciągnij i upuść plik PDF tutaj",
    drop_title_img: "Przeciągnij i upuść Obraz (JPG/PNG) tutaj",
    drop_or: "lub",
    drop_btn_pdf: "Wybierz Plik PDF",
    drop_btn_img: "Wybierz Obraz",
    drop_info: "Przetwarzanie 100% lokalnie w przeglądarce.",
    btn_convert: "Konwertuj Teraz",
    status_loading: "Odczytywanie struktury dokumentu...",
    status_converting: "Trwa konwersja w przeglądarce...",
    status_done: "Konwersja Zakończona!",
    res_title: "Podsumowanie Konwersji",
    res_format: "Format Wyjściowy:",
    res_size: "Rozmiar Po Konwersji:",
    res_filename: "Nazwa Pliku:",
    btn_download: "Pobierz Skonwertowany Plik",
    btn_reset: "Konwertuj Inny Plik",
    faq_title: "FAQ <span class='text-coral'>Konwersji</span>",
    faq_q1: "Jak działa konwersja w przeglądarce?",
    faq_a1: "Tekst i obrazy są przetwarzane bezpośrednio na Twoim komputerze.",
    faq_q2: "Czy mogę zamienić obraz na PDF?",
    faq_a2: "Tak! Wybierz tryb 'Obraz do PDF', aby utworzyć plik PDF.",
    faq_q3: "Czy są ograniczenia?",
    faq_a3: "Nie! 100% darmowe bez limitów.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "تحويل ملفات <span class='text-coral'>PDF</span> عبر الإنترنت",
    hero_subtitle: "حوّل PDF إلى Word، PDF إلى صورة، أو صورة إلى PDF مباشرة داخل متصفحك بأعلى خصوصية.",
    mode_pdf_word: "PDF إلى Word / نصوص",
    mode_pdf_img: "PDF إلى صورة (PNG)",
    mode_img_pdf: "صورة إلى PDF (JPG/PNG)",
    drop_title_pdf: "اسحب ملف PDF وأسقطه هنا",
    drop_title_img: "اسحب الصورة (JPG/PNG) وأسقطها هنا",
    drop_or: "أو",
    drop_btn_pdf: "اختيار ملف PDF",
    drop_btn_img: "اختيار صورة",
    drop_info: "معالجة محلية 100% داخل المتصفح بدون رفع الملفات.",
    btn_convert: "بدء التحويل الآن",
    status_loading: "جاري قراءة وتحليل بنية المستند...",
    status_converting: "جاري التحويل محلياً داخل المتصفح...",
    status_done: "اكتمل التحويل بنجاح!",
    res_title: "ملخص عملية التحويل",
    res_format: "صيغة الملف الناتج:",
    res_size: "حجم الملف الناتج:",
    res_filename: "اسم الملف:",
    btn_download: "تحميل الملف المحول",
    btn_reset: "تحويل ملف آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>التحويل</span>",
    faq_q1: "كيف تعمل عملية التحويل داخل المتصفح؟",
    faq_a1: "يتم استخراج النصوص أو معالجة الصور محلياً داخل جهازك دون رفع أي بيانات.",
    faq_q2: "هل يمكنني تحويل الصور إلى PDF؟",
    faq_a2: "نعم! اختر نمط 'صورة إلى PDF' وسيقوم الموقع بتوليد مستند PDF عالي الدقة.",
    faq_q3: "هل هناك حد للتحويل؟",
    faq_a3: "لا! جميع أنماط التحويل مجانية 100% وبدون حدود.",
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
let activeConvertMode = 'pdf-to-word'; // 'pdf-to-word', 'pdf-to-img', 'img-to-pdf'
let selectedFile = null;
let convertedFileBlob = null;
let convertedFileName = "";
let outputFormatLabel = "Microsoft Word (.txt)";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initModeTabs();
  initDropzone();
  initFaqAccordion();
});

// Language Switcher Logic
function initLanguageSwitcher() {
  const langBtn = document.getElementById('langDropdownBtn');
  const langMenu = document.getElementById('langDropdownMenu');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      langMenu.classList.add('hidden');
    });
  }

  const langItems = document.querySelectorAll('.lang-option');
  langItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = item.getAttribute('data-lang');
      if (selectedLang && translations[selectedLang]) {
        switchLanguage(selectedLang);
      }
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
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const langMenu = document.getElementById('langDropdownMenu');
  if (langMenu) langMenu.classList.add('hidden');
}

// Mode Selection Pills (PDF to Word / PDF to Image / Image to PDF)
function initModeTabs() {
  const modeBtns = document.querySelectorAll('.mode-tab');
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active', 'bg-[#22C55E]', 'text-white'));
      modeBtns.forEach(b => b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200'));
      btn.classList.add('active', 'bg-[#22C55E]', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');

      activeConvertMode = btn.getAttribute('data-mode');
      updateDropzoneForMode();
    });
  });
}

function updateDropzoneForMode() {
  const fileInput = document.getElementById('fileInput');
  const dropTitle = document.getElementById('dropTitle');
  const dropBtnText = document.getElementById('dropBtnText');
  const dict = translations[currentLang];

  if (activeConvertMode === 'img-to-pdf') {
    fileInput.accept = ".jpg,.jpeg,.png,.webp";
    if (dropTitle) dropTitle.innerHTML = dict.drop_title_img;
    if (dropBtnText) dropBtnText.innerHTML = dict.drop_btn_img;
  } else {
    fileInput.accept = ".pdf";
    if (dropTitle) dropTitle.innerHTML = dict.drop_title_pdf;
    if (dropBtnText) dropBtnText.innerHTML = dict.drop_btn_pdf;
  }

  resetConvertTool();
}

// Drag & Drop & File Selection
function initDropzone() {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');

  if (!dropzone || !fileInput) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('border-[#22C55E]', 'bg-[#F0FDF4]');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('border-[#22C55E]', 'bg-[#F0FDF4]');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files && files.length > 0) {
      handleSelectedFile(files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleSelectedFile(e.target.files[0]);
    }
  });
}

function handleSelectedFile(file) {
  selectedFile = file;

  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('settingsSection').classList.remove('hidden');

  document.getElementById('lblFileName').innerText = file.name;
  document.getElementById('lblOriginalSizeHeader').innerText = formatBytes(file.size);
}

// Client-Side Conversion Processor Engine
async function startConversion() {
  if (!selectedFile) return;

  document.getElementById('settingsSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '15%';
  statusMsg.innerText = dict.status_loading;

  try {
    if (activeConvertMode === 'pdf-to-word') {
      await processPdfToWord(progressBar, statusMsg);
    } else if (activeConvertMode === 'pdf-to-img') {
      await processPdfToImage(progressBar, statusMsg);
    } else if (activeConvertMode === 'img-to-pdf') {
      await processImageToPdf(progressBar, statusMsg);
    }

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      renderConversionResults(convertedFileBlob.size, convertedFileName);
    }, 500);

  } catch (err) {
    console.error("Conversion error:", err);
    alert(`An error occurred during conversion: ${err.message || err}`);
    resetConvertTool();
  }
}

// Mode 1: PDF to Word / Text Extraction
async function processPdfToWord(progressBar, statusMsg) {
  const ab = await selectedFile.arrayBuffer();
  const pdfjsData = new Uint8Array(ab.slice(0));

  const loadingTask = pdfjsLib.getDocument({ data: pdfjsData });
  const pdfDoc = await loadingTask.promise;
  const numPages = pdfDoc.numPages;

  let extractedText = `==================================================\n`;
  extractedText += `SWIF PDF CONVERTED DOCUMENT\n`;
  extractedText += `Source: ${selectedFile.name}\n`;
  extractedText += `Total Pages: ${numPages}\n`;
  extractedText += `==================================================\n\n`;

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const percent = Math.floor(20 + (pageNum / numPages) * 70);
    progressBar.style.width = `${percent}%`;

    const page = await pdfDoc.getPage(pageNum);
    const textContent = await page.getTextContent();
    
    extractedText += `--- PAGE ${pageNum} ---\n\n`;
    
    let lastY = null;
    let pageLines = [];
    let currentLine = "";

    textContent.items.forEach(item => {
      if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
        pageLines.push(currentLine);
        currentLine = "";
      }
      currentLine += item.str + " ";
      lastY = item.transform[5];
    });
    if (currentLine) pageLines.push(currentLine);

    extractedText += pageLines.join("\n") + "\n\n";
  }

  convertedFileBlob = new Blob([extractedText], { type: 'text/plain;charset=utf-8' });
  convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}.txt`;
  outputFormatLabel = "Document Text (.txt / Word editable)";
}

// Mode 2: PDF to Image (PNG Canvas Render)
async function processPdfToImage(progressBar, statusMsg) {
  const ab = await selectedFile.arrayBuffer();
  const pdfjsData = new Uint8Array(ab.slice(0));

  const loadingTask = pdfjsLib.getDocument({ data: pdfjsData });
  const pdfDoc = await loadingTask.promise;

  progressBar.style.width = '60%';

  // Render Page 1 high resolution
  const page = await pdfDoc.getPage(1);
  const viewport = page.getViewport({ scale: 2.0 }); // High DPI scale

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({ canvasContext: ctx, viewport: viewport }).promise;

  const dataUrl = canvas.toDataURL('image/png');
  const res = await fetch(dataUrl);
  convertedFileBlob = await res.blob();

  convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-page1.png`;
  outputFormatLabel = "PNG Image (.png)";
}

// Mode 3: Image (JPG/PNG) to PDF via pdf-lib
async function processImageToPdf(progressBar, statusMsg) {
  const imageBytes = await selectedFile.arrayBuffer();
  const { PDFDocument } = PDFLib;

  const pdfDoc = await PDFDocument.create();
  let embeddedImage;

  progressBar.style.width = '50%';

  if (selectedFile.type.includes('png') || selectedFile.name.toLowerCase().endsWith('.png')) {
    embeddedImage = await pdfDoc.embedPng(imageBytes);
  } else {
    embeddedImage = await pdfDoc.embedJpg(imageBytes);
  }

  const page = pdfDoc.addPage([embeddedImage.width, embeddedImage.height]);
  page.drawImage(embeddedImage, {
    x: 0,
    y: 0,
    width: embeddedImage.width,
    height: embeddedImage.height,
  });

  progressBar.style.width = '90%';
  const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
  convertedFileBlob = new Blob([pdfBytes], { type: 'application/pdf' });

  convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-converted.pdf`;
  outputFormatLabel = "PDF Document (.pdf)";
}

// Render Results Dashboard
function renderConversionResults(convertedSizeBytes, fileName) {
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');

  document.getElementById('resOutputFormat').innerText = outputFormatLabel;
  document.getElementById('resConvertedSize').innerText = formatBytes(convertedSizeBytes);
  document.getElementById('resFileName').innerText = fileName;
}

// Download Converted Blob
function downloadConvertedFile() {
  if (!convertedFileBlob) return;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(convertedFileBlob);
  link.download = convertedFileName || 'converted-file';
  link.click();
}

// Reset Tool State
function resetConvertTool() {
  selectedFile = null;
  convertedFileBlob = null;

  const fileInput = document.getElementById('fileInput');
  if (fileInput) fileInput.value = "";

  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('settingsSection').classList.add('hidden');
  document.getElementById('dropzoneSection').classList.remove('hidden');
}

// Helper Utilities
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
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
