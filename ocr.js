// SWIF PDF - Standalone PDF Text Extraction & OCR Tool Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Extract Text & <span class='text-coral'>OCR</span> PDF",
    hero_subtitle: "Convert scanned PDFs and documents into editable, searchable text directly in your browser.",
    drop_title: "Drag & drop your PDF file here",
    drop_or: "or",
    drop_btn: "Select PDF File for OCR Text Extraction",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    ocr_lang_label: "Document Language for OCR:",
    lang_fra: "French (Français)",
    lang_eng: "English",
    lang_spa: "Spanish (Español)",
    lang_deu: "German (Deutsch)",
    lang_por: "Portuguese (Português)",
    lang_ita: "Italian (Italiano)",
    lang_pol: "Polish (Polski)",
    lang_ara: "Arabic (العربية)",
    page_range_label: "Page Selection:",
    range_all: "All Pages",
    range_custom: "Custom Page Range (e.g. 1-3, 5)",
    btn_start_ocr: "Start OCR & Text Extraction",
    status_loading_pdf: "Loading PDF document pages...",
    status_processing_ocr: "Performing Optical Character Recognition (OCR)...",
    status_done: "Text extraction & OCR complete!",
    res_title: "Extracted Editable Text",
    btn_copy: "Copy to Clipboard",
    btn_download_txt: "Download Text (.TXT)",
    btn_download_doc: "Download Doc (.DOCX)",
    btn_reset: "Extract Text From Another PDF",
    copied_toast: "Copied to clipboard!",
    no_text: "No text or characters could be recognized in the selected pages.",
    faq_title: "PDF OCR <span class='text-coral'>FAQ</span>",
    faq_q1: "Can it extract text from scanned images inside PDF?",
    faq_a1: "Yes! SWIF PDF uses Tesseract.js Optical Character Recognition (OCR) to convert scanned images into editable text.",
    faq_q2: "Is my document uploaded to an external server?",
    faq_a2: "No! All OCR text recognition algorithms execute 100% locally inside your web browser.",
    faq_q3: "Does language selection improve accuracy?",
    faq_a3: "Yes! Selecting your document's primary language significantly increases character recognition precision.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Extraction de Texte & <span class='text-coral'>OCR</span> PDF",
    hero_subtitle: "Transformez vos PDF scannés et images en texte éditable et recherchable directement dans votre navigateur.",
    drop_title: "Glissez & déposez votre fichier PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF à analyser (OCR)",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    ocr_lang_label: "Langue du document pour l'OCR :",
    lang_fra: "Français",
    lang_eng: "Anglais (English)",
    lang_spa: "Espagnol (Español)",
    lang_deu: "Allemand (Deutsch)",
    lang_por: "Portugais (Português)",
    lang_ita: "Italien (Italiano)",
    lang_pol: "Polonais (Polski)",
    lang_ara: "Arabe (العربية)",
    page_range_label: "Sélection des pages :",
    range_all: "Toutes les pages",
    range_custom: "Intervalle personnalisé (ex: 1-3, 5)",
    btn_start_ocr: "Lancer l'extraction de texte & OCR",
    status_loading_pdf: "Chargement des pages du document PDF...",
    status_processing_ocr: "Reconnaissance optique des caractères (OCR) en cours...",
    status_done: "Extraction de texte & OCR terminée !",
    res_title: "Texte éditable extrait",
    btn_copy: "Copier dans le presse-papier",
    btn_download_txt: "Télécharger en Texte (.TXT)",
    btn_download_doc: "Télécharger en Word (.DOCX)",
    btn_reset: "Extraire le texte d'un autre PDF",
    copied_toast: "Copié dans le presse-papier !",
    no_text: "Aucun texte n'a pu être reconnu dans les pages sélectionnées.",
    faq_title: "Foire Aux Questions <span class='text-coral'>OCR PDF</span>",
    faq_q1: "Peut-il extraire le texte de documents scannés ?",
    faq_a1: "Oui ! SWIF PDF intègre Tesseract.js pour effectuer une reconnaissance optique de caractères (OCR) sur les PDF numérisés.",
    faq_q2: "Mon document est-il envoyé sur un serveur ?",
    faq_a2: "Non ! Tout le traitement d'OCR s'effectue à 100% dans la mémoire de votre navigateur.",
    faq_q3: "Le choix de la langue améliore-t-il la précision ?",
    faq_a3: "Absolument ! Sélectionner la langue principale du document augmente significativement la précision de la reconnaissance.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Extracción de Texto y <span class='text-coral'>OCR</span> PDF",
    hero_subtitle: "Convierte PDF escaneados en texto editable directamente en tu navegador.",
    drop_title: "Arrastra y suelta tu archivo PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF para OCR",
    drop_info: "Procesamiento 100% local en tu navegador.",
    ocr_lang_label: "Idioma del documento:",
    lang_fra: "Francés (Français)",
    lang_eng: "Inglés (English)",
    lang_spa: "Español",
    lang_deu: "Alemán (Deutsch)",
    lang_por: "Portugués (Português)",
    lang_ita: "Italiano",
    lang_pol: "Polaco (Polski)",
    lang_ara: "Árabe (العربية)",
    page_range_label: "Selección de páginas:",
    range_all: "Todas las páginas",
    range_custom: "Rango personalizado (ej. 1-3, 5)",
    btn_start_ocr: "Iniciar OCR y Extracción",
    status_loading_pdf: "Cargando documento...",
    status_processing_ocr: "Realizando reconocimiento óptico (OCR)...",
    status_done: "¡Extracción de texto completada!",
    res_title: "Texto Editable Extraído",
    btn_copy: "Copiar al portapapeles",
    btn_download_txt: "Descargar Texto (.TXT)",
    btn_download_doc: "Descargar Doc (.DOCX)",
    btn_reset: "Extraer Texto de Otro PDF",
    copied_toast: "¡Copiado al portapapeles!",
    no_text: "No se encontró texto reconocido.",
    faq_title: "FAQ <span class='text-coral'>OCR PDF</span>",
    faq_q1: "¿Funciona en PDF escaneados?",
    faq_a1: "Sí, mediante OCR con Tesseract.js.",
    faq_q2: "¿Privacidad?",
    faq_a2: "100% local en tu navegador.",
    faq_q3: "¿El idioma ayuda?",
    faq_a3: "Sí, mejora la precisión.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "Text Extrahieren & <span class='text-coral'>OCR</span> PDF",
    hero_subtitle: "Wandeln Sie gescannte PDFs in bearbeitbaren Text direkt im Browser um.",
    drop_title: "PDF-Datei hierher ziehen",
    drop_or: "oder",
    drop_btn: "PDF-Datei für OCR Auswählen",
    drop_info: "100% lokale Verarbeitung im Browser.",
    ocr_lang_label: "Dokumentensprache:",
    lang_fra: "Französisch (Français)",
    lang_eng: "Englisch (English)",
    lang_spa: "Spanisch (Español)",
    lang_deu: "Deutsch",
    lang_por: "Portugiesisch (Português)",
    lang_ita: "Italienisch (Italiano)",
    lang_pol: "Polnisch (Polski)",
    lang_ara: "Arabisch (العربية)",
    page_range_label: "Seitenauswahl:",
    range_all: "Alle Seiten",
    range_custom: "Benutzerdefiniert (z.B. 1-3, 5)",
    btn_start_ocr: "OCR & Text-Extraktion Starten",
    status_loading_pdf: "Lade PDF-Seiten...",
    status_processing_ocr: "Führe Zeichenerkennung (OCR) aus...",
    status_done: "Text-Extraktion abgeschlossen!",
    res_title: "Bearbeitbarer Text",
    btn_copy: "In Zwischenablage kopieren",
    btn_download_txt: "Text Herunterladen (.TXT)",
    btn_download_doc: "Word Herunterladen (.DOCX)",
    btn_reset: "Weiteren Text Extrahieren",
    copied_toast: "In Zwischenablage kopiert!",
    no_text: "Kein Text erkannt.",
    faq_title: "PDF OCR <span class='text-coral'>FAQ</span>",
    faq_q1: "Gescannte PDFs?",
    faq_a1: "Ja, mit Tesseract.js OCR.",
    faq_q2: "Datenschutz?",
    faq_a2: "100% lokal im Browser.",
    faq_q3: "Sprache wichtig?",
    faq_a3: "Ja, erhöht die Genauigkeit.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Extrair Texto e <span class='text-coral'>OCR</span> PDF",
    hero_subtitle: "Converta PDFs digitalizados em texto editável diretamente no seu navegador.",
    drop_title: "Arraste e largue o seu ficheiro PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF para OCR",
    drop_info: "Processamento 100% local no seu navegador.",
    ocr_lang_label: "Idioma do documento:",
    lang_fra: "Francês (Français)",
    lang_eng: "Inglês (English)",
    lang_spa: "Espanhol (Español)",
    lang_deu: "Alemão (Deutsch)",
    lang_por: "Português",
    lang_ita: "Italiano",
    lang_pol: "Polaco (Polski)",
    lang_ara: "Árabe (العربية)",
    page_range_label: "Seleção de páginas:",
    range_all: "Todas as páginas",
    range_custom: "Intervalo personalizado (ex: 1-3, 5)",
    btn_start_ocr: "Iniciar OCR e Extração",
    status_loading_pdf: "A carregar PDF...",
    status_processing_ocr: "A realizar reconhecimento OCR...",
    status_done: "Extração de texto concluída!",
    res_title: "Texto Editável Extraído",
    btn_copy: "Copiar para a área de transferência",
    btn_download_txt: "Descarregar Texto (.TXT)",
    btn_download_doc: "Descarregar Doc (.DOCX)",
    btn_reset: "Extrair Texto de Outro PDF",
    copied_toast: "Copiado para a área de transferência!",
    no_text: "Nenhum texto reconhecido.",
    faq_title: "Perguntas Frequentes <span class='text-coral'>OCR PDF</span>",
    faq_q1: "PDFs digitalizados?",
    faq_a1: "Sim, usando OCR Tesseract.js.",
    faq_q2: "Seguro?",
    faq_a2: "100% no seu navegador.",
    faq_q3: "Idioma ajuda?",
    faq_a3: "Sim, melhora a precisão.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Estrai Testo e <span class='text-coral'>OCR</span> PDF",
    hero_subtitle: "Converti PDF scansionati in testo modificabile direttamente nel tuo browser.",
    drop_title: "Trascina e rilascia il tuo file PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF per OCR",
    drop_info: "Elaborazione 100% locale nel tuo browser.",
    ocr_lang_label: "Lingua del documento:",
    lang_fra: "Francese (Français)",
    lang_eng: "Inglese (English)",
    lang_spa: "Spagnolo (Español)",
    lang_deu: "Tedesco (Deutsch)",
    lang_por: "Portoghese (Português)",
    lang_ita: "Italiano",
    lang_pol: "Polacco (Polski)",
    lang_ara: "Arabo (العربية)",
    page_range_label: "Selezione pagine:",
    range_all: "Tutte le pagine",
    range_custom: "Intervallo personalizzato (es. 1-3, 5)",
    btn_start_ocr: "Avvia OCR ed Estrazione",
    status_loading_pdf: "Caricamento pagine PDF...",
    status_processing_ocr: "Riconoscimento caratteri (OCR)...",
    status_done: "Estrazione testo completata!",
    res_title: "Testo Modificabile Estratto",
    btn_copy: "Copia negli appunti",
    btn_download_txt: "Scarica Testo (.TXT)",
    btn_download_doc: "Scarica Doc (.DOCX)",
    btn_reset: "Estrai Testo da Un Altro PDF",
    copied_toast: "Copiato negli appunti!",
    no_text: "Nessun testo riconosciuto.",
    faq_title: "FAQ <span class='text-coral'>OCR PDF</span>",
    faq_q1: "PDF scansionati?",
    faq_a1: "Sì, con Tesseract.js OCR.",
    faq_q2: "Sicuro?",
    faq_a2: "100% nel tuo browser.",
    faq_q3: "Lingua importante?",
    faq_a3: "Sì, migliora l'accuratezza.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Wypakuj Tekst i <span class='text-coral'>OCR</span> PDF",
    hero_subtitle: "Zamieniaj zeskanowane pliki PDF w edytowalny tekst w przeglądarce.",
    drop_title: "Przeciągnij i upuść plik PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF do OCR",
    drop_info: "Przetwarzanie 100% lokalnie.",
    ocr_lang_label: "Język dokumentu:",
    lang_fra: "Francuski (Français)",
    lang_eng: "Angielski (English)",
    lang_spa: "Hiszpański (Español)",
    lang_deu: "Niemiecki (Deutsch)",
    lang_por: "Portugalski (Português)",
    lang_ita: "Włoski (Italiano)",
    lang_pol: "Polski",
    lang_ara: "Arabski (العربية)",
    page_range_label: "Wybór stron:",
    range_all: "Wszystkie strony",
    range_custom: "Zakres stron (np. 1-3, 5)",
    btn_start_ocr: "Uruchom OCR i Wypakuj Tekst",
    status_loading_pdf: "Wczytywanie PDF...",
    status_processing_ocr: "Rozpoznawanie znaków (OCR)...",
    status_done: "Wypakowywanie tekstu zakończone!",
    res_title: "Wypakowany Tekst Edytowalny",
    btn_copy: "Kopiuj do schowka",
    btn_download_txt: "Pobierz Tekst (.TXT)",
    btn_download_doc: "Pobierz Doc (.DOCX)",
    btn_reset: "Wypakuj Tekst z Innego PDF",
    copied_toast: "Skopiowano do schowka!",
    no_text: "Nie rozpoznano tekstu.",
    faq_title: "FAQ <span class='text-coral'>OCR PDF</span>",
    faq_q1: "Zeskanowane pliki?",
    faq_a1: "Tak, za pomocą OCR Tesseract.js.",
    faq_q2: "Bezpieczeństwo?",
    faq_a2: "100% w przeglądarce.",
    faq_q3: "Język ma znaczenie?",
    faq_a3: "Tak, zwiększa dokładność.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "استخراج النصوص والتعرف الضوئي <span class='text-coral'>OCR</span>",
    hero_subtitle: "حوّل مستندات PDF الممسوحة ضوئياً إلى نصوص قابلة للتحرير والنسخ مباشرة في متصفحك.",
    drop_title: "اسحب ملف PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF لاستخراج النصوص (OCR)",
    drop_info: "معالجة محلية 100% داخل متصفحك.",
    ocr_lang_label: "لغة المستند للتعرف الضوئي:",
    lang_fra: "الفرنسية (Français)",
    lang_eng: "الإنجليزية (English)",
    lang_spa: "الإسبانية (Español)",
    lang_deu: "الألمانية (Deutsch)",
    lang_por: "البرتغالية (Português)",
    lang_ita: "الإيطالية (Italiano)",
    lang_pol: "البولندية (Polski)",
    lang_ara: "العربية",
    page_range_label: "تحديد الصفحات:",
    range_all: "كافة الصفحات",
    range_custom: "نطاق صفحات مخصص (مثال: 1-3, 5)",
    btn_start_ocr: "بدء التعرف الضوئي واستخراج النص",
    status_loading_pdf: "جاري تحميل صفحات المستند...",
    status_processing_ocr: "جاري التعرف الضوئي على الحروف والرموز (OCR)...",
    status_done: "اكتمل استخراج النصوص والتعرف الضوئي!",
    res_title: "النص القابل للتحرير والنسخ",
    btn_copy: "نسخ إلى الحافظة",
    btn_download_txt: "تحميل ملف نصي (.TXT)",
    btn_download_doc: "تحميل مستند Word (.DOCX)",
    btn_reset: "استخراج نص من مستند آخر",
    copied_toast: "تم النسخ إلى الحافظة!",
    no_text: "لم يتم التعرف على أي نص في الصفحات المحددة.",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>OCR PDF</span>",
    faq_q1: "هل يعمل على المستندات الممسوحة ضوئياً؟",
    faq_a1: "نعم! يستخدم SWIF PDF محرك Tesseract.js للتعرف الضوئي على النصوص داخل الصور والماسحات الضوئية.",
    faq_q2: "هل يتم رفع المستند إلى خادم؟",
    faq_a2: "لا! التوليد والمعالجة بالكامل تتم 100% داخل ذاكرة متصفحك.",
    faq_q3: "هل اختيار اللغة يزيد الدقة؟",
    faq_a3: "بالتأكيد! تحديد لغة المستند يرفع دقة التمييز واستخراج الكلمات بشكل كبير.",
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
let pdfDocObj = null;
let totalPagesCount = 0;
let extractedFullText = "";

let loadedFileType = 'pdf'; // 'pdf' or 'image'
let imageFile = null;

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
  initFormControls();
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
}

function initFormControls() {
  const rangeSelect = document.getElementById('pageRangeSelect');
  const customRangeBox = document.getElementById('customRangeBox');
  if (rangeSelect && customRangeBox) {
    rangeSelect.addEventListener('change', (e) => {
      if (e.target.value === 'custom') {
        customRangeBox.classList.remove('hidden');
      } else {
        customRangeBox.classList.add('hidden');
      }
    });
  }
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
    if (e.dataTransfer.files.length > 0) loadInputFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) loadInputFile(e.target.files[0]);
  });
}

async function loadInputFile(file) {
  if (!file) return;
  const filename = file.name.toLowerCase();
  const isImage = file.type.startsWith('image/') || /\.(png|jpg|jpeg|webp|bmp)$/.test(filename);
  const isPdf = filename.endsWith('.pdf');

  if (!isImage && !isPdf) {
    alert("Veuillez sélectionner un fichier PDF ou une Image valide (.pdf, .png, .jpg, .jpeg, .webp).");
    return;
  }

  pdfFile = file;

  if (isImage) {
    loadedFileType = 'image';
    imageFile = file;
    pdfDocObj = null;

    document.getElementById('dropzoneSection').classList.add('hidden');
    document.getElementById('editorSection').classList.remove('hidden');

    const pageRangeContainer = document.getElementById('pageRangeSelect')?.parentElement;
    if (pageRangeContainer) pageRangeContainer.classList.add('hidden');

    document.getElementById('docPagesInfoText').innerText = `${file.name} (Image PNG/JPG)`;
    return;
  }

  // Handle PDF file
  loadedFileType = 'pdf';
  imageFile = null;
  const pageRangeContainer = document.getElementById('pageRangeSelect')?.parentElement;
  if (pageRangeContainer) pageRangeContainer.classList.remove('hidden');

  try {
    const ab = await file.arrayBuffer();
    const pdfjsData = new Uint8Array(ab.slice(0));
    pdfDocObj = await pdfjsLib.getDocument({ data: pdfjsData }).promise;
    totalPagesCount = pdfDocObj.numPages;

    document.getElementById('dropzoneSection').classList.add('hidden');
    document.getElementById('editorSection').classList.remove('hidden');

    document.getElementById('docPagesInfoText').innerText = `${file.name} (${totalPagesCount} pages)`;

  } catch (err) {
    console.error("Error opening PDF file:", err);
    if (window.showGlobalErrorToast) {
      window.showGlobalErrorToast("Impossible de lire ce fichier PDF. Le document est peut-être corrompu ou protégé par un mot de passe.");
    } else {
      alert("Impossible de lire ce fichier PDF. Le document est peut-être corrompu.");
    }
  }
}

function parseTargetPages() {
  const rangeType = document.getElementById('pageRangeSelect').value;
  if (rangeType === 'all') {
    return Array.from({ length: totalPagesCount }, (_, i) => i + 1);
  }
  const inputVal = document.getElementById('customRangeInput').value.trim();
  if (!inputVal) return Array.from({ length: totalPagesCount }, (_, i) => i + 1);

  const pagesSet = new Set();
  const parts = inputVal.split(',');
  parts.forEach(part => {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(n => parseInt(n.trim()));
      if (start && end) {
        for (let p = Math.min(start, end); p <= Math.max(start, end); p++) {
          if (p >= 1 && p <= totalPagesCount) pagesSet.add(p);
        }
      }
    } else {
      const p = parseInt(part.trim());
      if (p >= 1 && p <= totalPagesCount) pagesSet.add(p);
    }
  });

  return Array.from(pagesSet).sort((a, b) => a - b);
}

/* ==================== CLIENT-SIDE OCR EXTRACTION ENGINE (PDF & IMAGE) ==================== */
async function processOcrTextExtraction() {
  const selectedOcrLang = document.getElementById('ocrLangSelect').value || 'fra';

  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '15%';
  statusMsg.innerText = dict.status_processing_ocr;

  let combinedTextResult = "";
  let worker = null;

  try {
    // 1. Image OCR Execution
    if (loadedFileType === 'image' && imageFile) {
      if (window.Tesseract) {
        progressBar.style.width = '40%';
        worker = await Tesseract.createWorker(selectedOcrLang);
        
        progressBar.style.width = '70%';
        const { data } = await worker.recognize(imageFile);
        if (data && data.text) {
          combinedTextResult = data.text.trim();
        }
        await worker.terminate();
      }
    }
    // 2. PDF OCR Execution
    else if (pdfDocObj) {
      const targetPages = parseTargetPages();
      
      // Native text extraction attempt
      for (let idx = 0; idx < targetPages.length; idx++) {
        const pageNum = targetPages[idx];
        const page = await pdfDocObj.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ').trim();

        if (pageText.length > 20) {
          combinedTextResult += `--- Page ${pageNum} ---\n${pageText}\n\n`;
        }
      }

      // If native text layer was sparse (scanned PDF), run Tesseract.js OCR
      if (combinedTextResult.trim().length < 50 && window.Tesseract) {
        statusMsg.innerText = dict.status_processing_ocr;
        progressBar.style.width = '25%';

        worker = await Tesseract.createWorker(selectedOcrLang);

        for (let idx = 0; idx < targetPages.length; idx++) {
          const pageNum = targetPages[idx];
          const page = await pdfDocObj.getPage(pageNum);
          
          const viewport = page.getViewport({ scale: 2.0 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d');
          await page.render({ canvasContext: ctx, viewport }).promise;

          const pct = Math.round(25 + ((idx + 1) / targetPages.length) * 70);
          progressBar.style.width = `${pct}%`;
          statusMsg.innerText = `${dict.status_processing_ocr} (${idx + 1}/${targetPages.length})`;

          const { data } = await worker.recognize(canvas);
          if (data && data.text) {
            combinedTextResult += `--- Page ${pageNum} ---\n${data.text.trim()}\n\n`;
          }
        }

        await worker.terminate();
      }
    }

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;
    extractedFullText = combinedTextResult.trim() || dict.no_text;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');

      const textarea = document.getElementById('ocrOutputTextarea');
      textarea.value = extractedFullText;
    }, 500);

  } catch (err) {
    console.error("Error during OCR text extraction:", err);
    if (worker) await worker.terminate().catch(() => {});
    alert(`Une erreur est survenue lors de l'OCR : ${err.message || err}`);
    resetTool();
  }
}

/* ==================== EXPORT & COPY HANDLERS ==================== */
function copyExtractedTextToClipboard() {
  const textarea = document.getElementById('ocrOutputTextarea');
  if (!textarea || !textarea.value) return;

  navigator.clipboard.writeText(textarea.value).then(() => {
    const dict = translations[currentLang];
    const toast = document.getElementById('copyToast');
    if (toast) {
      toast.innerText = dict.copied_toast || "Copied to clipboard!";
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 2500);
    }
  }).catch(() => {
    textarea.select();
    document.execCommand('copy');
  });
}

function downloadExtractedTextTxt() {
  const textarea = document.getElementById('ocrOutputTextarea');
  const text = textarea ? textarea.value : extractedFullText;
  if (!text) return;

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-extracted-text.txt`;
  link.click();
}

function downloadExtractedTextDocx() {
  const textarea = document.getElementById('ocrOutputTextarea');
  const text = textarea ? textarea.value : extractedFullText;
  if (!text) return;

  // Format as plain text doc file readable by MS Word / LibreOffice
  const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Extracted Text</title></head><body>";
  const footer = "</body></html>";
  const safeSanitize = (typeof sanitizeHtml === 'function') ? sanitizeHtml : (str => String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;'));
  const body = text.split('\n').map(line => `<p style='font-family: Arial, sans-serif; font-size: 11pt;'>${safeSanitize(line)}</p>`).join('');

  const blob = new Blob([header + body + footer], { type: 'application/msword' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-extracted-text.doc`;
  link.click();
}

function resetTool() {
  pdfFile = null;
  pdfDocObj = null;
  totalPagesCount = 0;
  extractedFullText = "";

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
