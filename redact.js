// SWIF PDF - Standalone PDF Redaction & Blackout Tool Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Redact <span class='text-coral'>PDF</span> & Blackout Sensitive Info",
    hero_subtitle: "Black out sensitive text, personal data, and numbers on any PDF page with 100% client-side privacy.",
    drop_title: "Drag & drop your PDF document here",
    drop_or: "or",
    drop_btn: "Select PDF File to Redact",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    tool_draw_rect: "Draw Redaction Box",
    tool_add_strip: "Add Redaction Strip",
    color_label: "Blackout Mask Color:",
    btn_clear_page: "Clear Page Redactions",
    btn_clear_all: "Clear All Redactions",
    page_prev: "Previous Page",
    page_next: "Next Page",
    page_counter: "Page {current} of {total}",
    btn_apply: "Apply Redaction & Download PDF",
    btn_reset: "Redact Another Document",
    status_processing: "Burning redaction masks into PDF pages...",
    status_done: "Redacted PDF document ready!",
    res_title: "Document Redacted Successfully",
    res_filename: "File Name:",
    res_masks_count: "Redaction Masks Applied:",
    btn_download: "Download Redacted PDF",
    faq_title: "PDF Redaction <span class='text-coral'>FAQ</span>",
    faq_q1: "Is the redacted text permanently removed or covered?",
    faq_a1: "SWIF PDF permanently burns opaque blackout vector rectangles onto the PDF page structure, rendering the underlying text unreadable.",
    faq_q2: "Can I redact multiple pages in the same PDF document?",
    faq_a2: "Yes! You can navigate across all pages of your PDF and apply blackout masks wherever needed.",
    faq_q3: "Is my document uploaded to any server?",
    faq_a3: "No! All redaction processing is performed 100% locally in your web browser.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Masquage Confidentiel (Redaction) <span class='text-coral'>PDF</span>",
    hero_subtitle: "Masquez définitivement les données sensibles, textes et chiffres sur n'importe quelle page de votre PDF.",
    drop_title: "Glissez & déposez votre document PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF à masquer",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    tool_draw_rect: "Dessiner un rectangle de masquage",
    tool_add_strip: "Ajouter une bande de censure",
    color_label: "Couleur du masquage :",
    btn_clear_page: "Effacer les masques de la page",
    btn_clear_all: "Tout effacer",
    page_prev: "Page précédente",
    page_next: "Page suivante",
    page_counter: "Page {current} sur {total}",
    btn_apply: "Appliquer le masquage et télécharger",
    btn_reset: "Masquer un autre document",
    status_processing: "Incrustation définitive des masques dans le PDF...",
    status_done: "PDF masqué prêt !",
    res_title: "Document masqué avec succès",
    res_filename: "Nom du fichier :",
    res_masks_count: "Masques appliqués :",
    btn_download: "Télécharger le PDF masqué",
    faq_title: "Foire Aux Questions <span class='text-coral'>Masquage PDF</span>",
    faq_q1: "Le texte masqué est-il définitivement irrécupérable ?",
    faq_a1: "Oui ! SWIF PDF incruste des rectangles vectoriels opaques directement dans la structure binaire du document PDF.",
    faq_q2: "Puis-je masquer des zones sur plusieurs pages ?",
    faq_a2: "Absolument ! Naviguez simplement d'une page à l'autre et appliquez des bandes de censure.",
    faq_q3: "Mon document est-il envoyé sur un serveur ?",
    faq_a3: "Non ! Tout le traitement s'effectue à 100% dans votre navigateur.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Censurar <span class='text-coral'>PDF</span> y Ocultar Información Sensible",
    hero_subtitle: "Censura texto, datos personales y números en cualquier página de tu PDF.",
    drop_title: "Arrastra y suelta tu documento PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF",
    drop_info: "Procesamiento 100% local.",
    tool_draw_rect: "Dibujar caja de censura",
    tool_add_strip: "Añadir tira de censura",
    color_label: "Color de censura:",
    btn_clear_page: "Borrar página",
    btn_clear_all: "Borrar todo",
    page_prev: "Página Anterior",
    page_next: "Página Siguiente",
    page_counter: "Página {current} de {total}",
    btn_apply: "Aplicar Censura y Descargar PDF",
    btn_reset: "Censurar Otro Documento",
    status_processing: "Aplicando censuras...",
    status_done: "¡PDF Censurado Listo!",
    res_title: "Documento Censurado",
    res_filename: "Nombre del archivo:",
    res_masks_count: "Censuras aplicadas:",
    btn_download: "Descargar PDF Censurado",
    faq_title: "FAQ <span class='text-coral'>Censura PDF</span>",
    faq_q1: "¿Es permanente?",
    faq_a1: "Sí, las cajas negras se incrustan de forma permanente.",
    faq_q2: "¿Múltiples páginas?",
    faq_a2: "Sí, en cualquier página.",
    faq_q3: "¿Privacidad?",
    faq_a3: "100% en tu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Schwärzen & Vertrauliche Daten Verbergen",
    hero_subtitle: "Schwärzen Sie vertrauliche Texte und persönliche Daten auf jeder PDF-Seite.",
    drop_title: "PDF-Dokument hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "PDF-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung.",
    tool_draw_rect: "Schwärzungsfeld zeichnen",
    tool_add_strip: "Schwärzungsstreifen hinzufügen",
    color_label: "Schwärzungsfarbe:",
    btn_clear_page: "Seite zurücksetzen",
    btn_clear_all: "Alles löschen",
    page_prev: "Vorherige Seite",
    page_next: "Nächste Seite",
    page_counter: "Seite {current} von {total}",
    btn_apply: "Geschwärztes PDF Herunterladen",
    btn_reset: "Weitere Datei Schwärzen",
    status_processing: "Bette Schwärzungen ein...",
    status_done: "Geschwärztes PDF Bereit!",
    res_title: "Dokument Geschwärzt",
    res_filename: "Dateiname:",
    res_masks_count: "Eingefügte Schwärzungen:",
    btn_download: "Geschwärztes PDF Herunterladen",
    faq_title: "PDF Schwärzung <span class='text-coral'>FAQ</span>",
    faq_q1: "Dauerhaft?",
    faq_a1: "Ja, Vektorrechtecke werden dauerhaft eingebrannt.",
    faq_q2: "Mehrere Seiten?",
    faq_a2: "Ja, auf allen Seiten.",
    faq_q3: "Datenschutz?",
    faq_a3: "100% im Browser.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Ocultar <span class='text-coral'>PDF</span> e Ocultar Informação Sensível",
    hero_subtitle: "Oculte texto sensível e dados pessoais em qualquer página do seu PDF.",
    drop_title: "Arraste e largue o seu documento PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF",
    drop_info: "Processamento 100% local.",
    tool_draw_rect: "Desenhar caixa de ocultação",
    tool_add_strip: "Adicionar faixa de ocultação",
    color_label: "Cor da ocultação:",
    btn_clear_page: "Limpar página",
    btn_clear_all: "Limpar tudo",
    page_prev: "Página Anterior",
    page_next: "Página Seguinte",
    page_counter: "Página {current} de {total}",
    btn_apply: "Aplicar Ocultação e Descarregar PDF",
    btn_reset: "Ocultar Outro Ficheiro",
    status_processing: "A aplicar ocultações...",
    status_done: "PDF Ocultado Pronto!",
    res_title: "Documento Ocultado",
    res_filename: "Nome do Ficheiro:",
    res_masks_count: "Ocultações aplicadas:",
    btn_download: "Descarregar PDF Ocultado",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Ocultação PDF</span>",
    faq_q1: "É permanente?",
    faq_a1: "Sim, caixas pretas são fundidas no PDF.",
    faq_q2: "Múltiplas páginas?",
    faq_a2: "Sim, em qualquer página.",
    faq_q3: "Seguro?",
    faq_a3: "100% no seu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Oscura <span class='text-coral'>PDF</span> e Nascondi Dati Sensibili",
    hero_subtitle: "Oscura testo e informazioni personali su qualsiasi pagina del tuo PDF.",
    drop_title: "Trascina e rilascia il tuo documento PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF",
    drop_info: "Elaborazione 100% locale.",
    tool_draw_rect: "Disegna casella oscurante",
    tool_add_strip: "Aggiungi striscia oscurante",
    color_label: "Colore oscuramento:",
    btn_clear_page: "Cancella pagina",
    btn_clear_all: "Cancella tutto",
    page_prev: "Pagina Precedente",
    page_next: "Pagina Successiva",
    page_counter: "Pagina {current} di {total}",
    btn_apply: "Applica Oscuramento e Scarica PDF",
    btn_reset: "Oscura Un Altro Documento",
    status_processing: "Applicazione oscuramenti...",
    status_done: "PDF Oscurato Pronto!",
    res_title: "Documento Oscurato",
    res_filename: "Nome File:",
    res_masks_count: "Oscuramenti applicati:",
    btn_download: "Scarica PDF Oscurato",
    faq_title: "FAQ <span class='text-coral'>Oscuramento PDF</span>",
    faq_q1: "Permanente?",
    faq_a1: "Sì, rettangoli oscuranti incorporati nel PDF.",
    faq_q2: "Più pagine?",
    faq_a2: "Sì, su qualsiasi pagina.",
    faq_q3: "Sicuro?",
    faq_a3: "100% nel tuo browser.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Cenzuruj <span class='text-coral'>PDF</span> i Ukryj Poufne Dane",
    hero_subtitle: "Zasłoń poufny tekst i dane osobowe na dowolnej stronie PDF.",
    drop_title: "Przeciągnij i upuść dokument PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF",
    drop_info: "Przetwarzanie 100% lokalnie.",
    tool_draw_rect: "Rysuj pole cenzury",
    tool_add_strip: "Dodaj pasek cenzury",
    color_label: "Kolor cenzury:",
    btn_clear_page: "Wyczyść stronę",
    btn_clear_all: "Wyczyść wszystko",
    page_prev: "Poprzednia Strona",
    page_next: "Następna Strona",
    page_counter: "Strona {current} z {total}",
    btn_apply: "Zastosuj Cenzurę i Pobierz PDF",
    btn_reset: "Cenzuruj Inny Plik",
    status_processing: "Wklejanie cenzury...",
    status_done: "Cenzurowany PDF Gotowy!",
    res_title: "Dokument Cenzurowany",
    res_filename: "Nazwa Pliku:",
    res_masks_count: "Zastosowane cenzury:",
    btn_download: "Pobierz Cenzurowany PDF",
    faq_title: "FAQ <span class='text-coral'>Cenzura PDF</span>",
    faq_q1: "Trwałe?",
    faq_a1: "Tak, czarne prostokąty są trwale wklejane.",
    faq_q2: "Wiele stron?",
    faq_a2: "Tak, na dowolnej stronie.",
    faq_q3: "Bezpieczne?",
    faq_a3: "Tak, 100% w przeglądarce.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "تظليل وتعتيم <span class='text-coral'>PDF</span> وحجب البيانات الحساسة",
    hero_subtitle: "احجب النصوص الحساسة والبيانات الشخصية والأرقام على أي صفحة مستند PDF.",
    drop_title: "اسحب مستند PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار مستند PDF للحجب",
    drop_info: "معالجة محلية 100% داخل المتصفح بدون رفع الملفات.",
    tool_draw_rect: "رسم مربّع حجب",
    tool_add_strip: "إضافة شريط تعتيم",
    color_label: "لون الحجب والتعتيم:",
    btn_clear_page: "مسح حجب الصفحة",
    btn_clear_all: "مسح كافة الحجب",
    page_prev: "الصفحة السابقة",
    page_next: "الصفحة التالية",
    page_counter: "صفحة {current} من {total}",
    btn_apply: "تطبيق الحجب وتحميل مستند PDF",
    btn_reset: "حجب مستند آخر",
    status_processing: "جاري دمج مربعات التعتيم والحجب في المستند...",
    status_done: "مستند PDF المحجوب جاهز!",
    res_title: "تم حجب وتعتيم المستند بنجاح",
    res_filename: "اسم الملف:",
    res_masks_count: "عدد مربعات التعتيم المطبقة:",
    btn_download: "تحميل PDF المحجوب",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>حجب PDF</span>",
    faq_q1: "هل يتم حذف النص المحجوب بشكل دائم؟",
    faq_a1: "نعم! يتم دمج مستطيلات التعتيم في بنية PDF لمنع أي إمكانية لاستعادة النصوص المعتمة.",
    faq_q2: "هل يمكن حجب صفحات متعددة في نفس المستند؟",
    faq_a2: "بالتأكيد! يمكنك التنقل عبر كافة الصفحات وتظليل المناطق الحساسة.",
    faq_q3: "هل يتم رفع المستند إلى خادم؟",
    faq_a3: "لا! تتم المعالجة بالكامل 100% داخل ذاكرة متصفحك.",
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
let currentPageNum = 1;
let totalPagesCount = 1;
let pdfPageScale = 1.2;

// Redaction masks state: Array of { id, pageNum, x, y, width, height, color }
let placedRedactions = [];
let maskColor = '#000000'; // Default blackout

let isDrawingBox = false;
let drawStartX = 0;
let drawStartY = 0;

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
  initRedactionTools();
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
  updatePageCounterText();
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

  try {
    const ab = await file.arrayBuffer();
    const pdfjsData = new Uint8Array(ab.slice(0));
    pdfDocObj = await pdfjsLib.getDocument({ data: pdfjsData }).promise;
    totalPagesCount = pdfDocObj.numPages;
    currentPageNum = 1;

    document.getElementById('dropzoneSection').classList.add('hidden');
    document.getElementById('editorSection').classList.remove('hidden');

    updatePageCounterText();
    renderPdfPage(currentPageNum);

  } catch (err) {
    console.error("Error opening PDF file:", err);
    alert("Could not load PDF document. Please try another file.");
  }
}

async function renderPdfPage(pageNum) {
  if (!pdfDocObj) return;

  const page = await pdfDocObj.getPage(pageNum);
  const pdfCanvas = document.getElementById('pdfCanvas');
  const overlayContainer = document.getElementById('overlayContainer');
  const ctx = pdfCanvas.getContext('2d');

  // Dual-Axis Adaptive Scale Calculation for Zero-Scroll Viewport Fitting
  const container = pdfCanvas.parentElement?.parentElement;
  const containerW = container ? (container.clientWidth - 24) : (window.innerWidth - 32);
  const containerH = window.innerHeight * 0.62;
  const unscaledViewport = page.getViewport({ scale: 1.0 });
  
  const scaleW = containerW > 0 ? (containerW / unscaledViewport.width) : 1.2;
  const scaleH = containerH > 0 ? (containerH / unscaledViewport.height) : 1.2;
  let scale = Math.max(0.35, Math.min(pdfPageScale, scaleW, scaleH));


  const viewport = page.getViewport({ scale: scale });
  pdfCanvas.width = viewport.width;
  pdfCanvas.height = viewport.height;
  overlayContainer.style.width = `${viewport.width}px`;
  overlayContainer.style.height = `${viewport.height}px`;

  await page.render({ canvasContext: ctx, viewport }).promise;

  refreshVisibleRedactions();
}


function prevPage() {
  if (currentPageNum > 1) {
    currentPageNum--;
    updatePageCounterText();
    renderPdfPage(currentPageNum);
  }
}

function nextPage() {
  if (currentPageNum < totalPagesCount) {
    currentPageNum++;
    updatePageCounterText();
    renderPdfPage(currentPageNum);
  }
}

function updatePageCounterText() {
  const dict = translations[currentLang];
  const counterEl = document.getElementById('pageCounterText');
  if (counterEl && dict) {
    counterEl.innerText = dict.page_counter
      .replace('{current}', currentPageNum)
      .replace('{total}', totalPagesCount);
  }
}

/* ==================== REDACTION MASK TOOLS ==================== */
function initRedactionTools() {
  const maskColorInput = document.getElementById('maskColorInput');
  if (maskColorInput) {
    maskColorInput.addEventListener('input', (e) => {
      maskColor = e.target.value;
    });
  }

  // Draw redaction box via mouse & touch drag on overlay container
  const overlayContainer = document.getElementById('overlayContainer');
  let tempBox = null;
  let isTouchDrawing = false;

  // Mouse Down / Drawing
  overlayContainer.addEventListener('mousedown', (e) => {
    if (e.target !== overlayContainer && e.target.id !== 'pdfCanvas') return;
    isDrawingBox = true;
    const rect = overlayContainer.getBoundingClientRect();
    drawStartX = e.clientX - rect.left;
    drawStartY = e.clientY - rect.top;

    tempBox = document.createElement('div');
    tempBox.className = "absolute border-2 border-red-500 bg-black/60 pointer-events-none z-30";
    tempBox.style.left = `${drawStartX}px`;
    tempBox.style.top = `${drawStartY}px`;
    tempBox.style.width = '0px';
    tempBox.style.height = '0px';
    overlayContainer.appendChild(tempBox);
  });

  overlayContainer.addEventListener('mousemove', (e) => {
    if (!isDrawingBox || !tempBox) return;
    const rect = overlayContainer.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    const width = Math.abs(currentX - drawStartX);
    const height = Math.abs(currentY - drawStartY);
    const left = Math.min(currentX, drawStartX);
    const top = Math.min(currentY, drawStartY);

    tempBox.style.left = `${left}px`;
    tempBox.style.top = `${top}px`;
    tempBox.style.width = `${width}px`;
    tempBox.style.height = `${height}px`;
  });

  overlayContainer.addEventListener('mouseup', () => {
    if (isDrawingBox && tempBox) {
      isDrawingBox = false;
      const finalW = parseInt(tempBox.style.width || '0');
      const finalH = parseInt(tempBox.style.height || '0');
      const finalX = parseInt(tempBox.style.left || '0');
      const finalY = parseInt(tempBox.style.top || '0');

      tempBox.remove();
      tempBox = null;

      if (finalW > 15 && finalH > 10) {
        addRedactionBox(finalX, finalY, finalW, finalH);
      }
    }
  });

  // Touch Start / Drawing for Mobile Smartphones
  overlayContainer.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length > 0 && (e.target === overlayContainer || e.target.id === 'pdfCanvas')) {
      e.preventDefault();
      isTouchDrawing = true;
      const touch = e.touches[0];
      const rect = overlayContainer.getBoundingClientRect();
      drawStartX = touch.clientX - rect.left;
      drawStartY = touch.clientY - rect.top;

      tempBox = document.createElement('div');
      tempBox.className = "absolute border-2 border-red-500 bg-black/70 pointer-events-none z-30";
      tempBox.style.left = `${drawStartX}px`;
      tempBox.style.top = `${drawStartY}px`;
      tempBox.style.width = '0px';
      tempBox.style.height = '0px';
      overlayContainer.appendChild(tempBox);
    }
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    if (isTouchDrawing && tempBox && e.touches && e.touches.length > 0) {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = overlayContainer.getBoundingClientRect();
      const currentX = touch.clientX - rect.left;
      const currentY = touch.clientY - rect.top;

      const width = Math.abs(currentX - drawStartX);
      const height = Math.abs(currentY - drawStartY);
      const left = Math.min(currentX, drawStartX);
      const top = Math.min(currentY, drawStartY);

      tempBox.style.left = `${left}px`;
      tempBox.style.top = `${top}px`;
      tempBox.style.width = `${width}px`;
      tempBox.style.height = `${height}px`;
    }
  }, { passive: false });

  document.addEventListener('touchend', () => {
    if (isTouchDrawing && tempBox) {
      isTouchDrawing = false;
      const finalW = parseInt(tempBox.style.width || '0');
      const finalH = parseInt(tempBox.style.height || '0');
      const finalX = parseInt(tempBox.style.left || '0');
      const finalY = parseInt(tempBox.style.top || '0');

      tempBox.remove();
      tempBox = null;

      if (finalW > 15 && finalH > 10) {
        addRedactionBox(finalX, finalY, finalW, finalH);
      } else {
        // If tap without drag on mobile, drop a default redaction box centered on tap
        addRedactionBox(Math.max(10, drawStartX - 80), Math.max(10, drawStartY - 20), 160, 40);
      }
    }
  });
}

function addPresetRedactionStrip() {
  addRedactionBox(60, 100, 220, 35);
}

function addRedactionBox(x, y, width, height) {
  const id = 'red_' + Date.now() + Math.random().toString(36).substring(2, 5);
  const pdfCanvas = document.getElementById('pdfCanvas');
  placedRedactions.push({
    id,
    pageNum: currentPageNum,
    x,
    y,
    width,
    height,
    color: maskColor,
    pageRenderWidth: pdfCanvas ? pdfCanvas.width : 0,
    pageRenderHeight: pdfCanvas ? pdfCanvas.height : 0
  });
  refreshVisibleRedactions();
}

function refreshVisibleRedactions() {
  const overlayContainer = document.getElementById('overlayContainer');
  overlayContainer.innerHTML = "";

  const pageRedactions = placedRedactions.filter(r => r.pageNum === currentPageNum);

  pageRedactions.forEach(red => {
    const div = document.createElement('div');
    div.id = red.id;
    div.className = "absolute group cursor-move border-2 border-red-500 rounded p-0.5 shadow-md select-none z-20";
    div.style.left = `${red.x}px`;
    div.style.top = `${red.y}px`;
    div.style.width = `${red.width}px`;
    div.style.height = `${red.height}px`;
    div.style.backgroundColor = red.color || '#000000';
    div.style.boxSizing = 'border-box';
    div.style.touchAction = 'none';

    div.innerHTML = `
      <button onclick="removeRedaction('${red.id}')" class="absolute -top-3.5 -right-3.5 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-lg hover:bg-red-700">
        &times;
      </button>
      <div class="resize-handle absolute -bottom-2 -right-2 w-4.5 h-4.5 bg-red-600 rounded-full cursor-se-resize shadow-lg border-2 border-white"></div>
    `;

    makeDraggableAndResizable(div, red);
    overlayContainer.appendChild(div);
  });
}

function removeRedaction(id) {
  placedRedactions = placedRedactions.filter(r => r.id !== id);
  refreshVisibleRedactions();
}

function clearPageRedactions() {
  placedRedactions = placedRedactions.filter(r => r.pageNum !== currentPageNum);
  refreshVisibleRedactions();
}

function clearAllRedactions() {
  placedRedactions = [];
  refreshVisibleRedactions();
}

function makeDraggableAndResizable(element, redObj) {
  let isDragging = false;
  let isResizing = false;
  let startX, startY, startW, startH, startLeft, startTop;

  const handle = element.querySelector('.resize-handle');
  if (handle) handle.style.touchAction = 'none';

  element.addEventListener('mousedown', (e) => {
    if (e.target === handle) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseInt(element.style.left || '0', 10);
    startTop = parseInt(element.style.top || '0', 10);
    e.stopPropagation();
  });

  if (handle) {
    handle.addEventListener('mousedown', (e) => {
      isResizing = true;
      startX = e.clientX;
      startY = e.clientY;
      startW = element.offsetWidth;
      startH = element.offsetHeight;
      e.stopPropagation();
    });
  }

  element.addEventListener('touchstart', (e) => {
    if (e.target === handle) return;
    if (e.touches && e.touches.length > 0) {
      e.preventDefault();
      e.stopPropagation();
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startLeft = parseInt(element.style.left || '0', 10);
      startTop = parseInt(element.style.top || '0', 10);
    }
  }, { passive: false });

  if (handle) {
    handle.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startW = element.offsetWidth;
        startH = element.offsetHeight;
      }
    }, { passive: false });
  }

  document.addEventListener('mousemove', (e) => {
    const pdfCanvas = document.getElementById('pdfCanvas');
    if (isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const newLeft = Math.max(0, startLeft + dx);
      const newTop = Math.max(0, startTop + dy);
      element.style.left = `${newLeft}px`;
      element.style.top = `${newTop}px`;
      redObj.x = newLeft;
      redObj.y = newTop;
      if (pdfCanvas) {
        redObj.pageRenderWidth = pdfCanvas.width;
        redObj.pageRenderHeight = pdfCanvas.height;
      }
    } else if (isResizing) {
      const dw = e.clientX - startX;
      const dh = e.clientY - startY;
      const newW = Math.max(20, startW + dw);
      const newH = Math.max(15, startH + dh);
      element.style.width = `${newW}px`;
      element.style.height = `${newH}px`;
      redObj.width = newW;
      redObj.height = newH;
      if (pdfCanvas) {
        redObj.pageRenderWidth = pdfCanvas.width;
        redObj.pageRenderHeight = pdfCanvas.height;
      }
    }
  });

  document.addEventListener('touchmove', (e) => {
    if ((isDragging || isResizing) && e.touches && e.touches.length > 0) {
      e.preventDefault();
      const touch = e.touches[0];
      const pdfCanvas = document.getElementById('pdfCanvas');
      if (isDragging) {
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        const newLeft = Math.max(0, startLeft + dx);
        const newTop = Math.max(0, startTop + dy);
        element.style.left = `${newLeft}px`;
        element.style.top = `${newTop}px`;
        redObj.x = newLeft;
        redObj.y = newTop;
        if (pdfCanvas) {
          redObj.pageRenderWidth = pdfCanvas.width;
          redObj.pageRenderHeight = pdfCanvas.height;
        }
      } else if (isResizing) {
        const dw = touch.clientX - startX;
        const dh = touch.clientY - startY;
        const newW = Math.max(20, startW + dw);
        const newH = Math.max(15, startH + dh);
        element.style.width = `${newW}px`;
        element.style.height = `${newH}px`;
        redObj.width = newW;
        redObj.height = newH;
        if (pdfCanvas) {
          redObj.pageRenderWidth = pdfCanvas.width;
          redObj.pageRenderHeight = pdfCanvas.height;
        }
      }
    }
  }, { passive: false });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    isResizing = false;
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
    isResizing = false;
  });
}

/* ==================== MERGE REDACTIONS & DOWNLOAD PDF ==================== */
async function applyRedactionAndDownload() {
  if (!pdfFile || placedRedactions.length === 0) {
    alert("Please add at least one blackout redaction mask onto the document.");
    return;
  }

  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '30%';
  statusMsg.innerText = dict.status_processing;

  try {
    const ab = await pdfFile.arrayBuffer();
    const { PDFDocument, rgb } = PDFLib;
    const pdfDoc = await PDFDocument.load(ab);

    progressBar.style.width = '60%';

    const pdfCanvas = document.getElementById('pdfCanvas');

    for (let i = 0; i < placedRedactions.length; i++) {
      const red = placedRedactions[i];
      const pageIndex = red.pageNum - 1;
      const pdfPage = pdfDoc.getPage(pageIndex);
      const { width: pdfW, height: pdfH } = pdfPage.getSize();

      const displayW = red.pageRenderWidth || (pdfCanvas ? pdfCanvas.width : 600);
      const displayH = red.pageRenderHeight || (pdfCanvas ? pdfCanvas.height : 800);

      const scaleX = pdfW / displayW;
      const scaleY = pdfH / displayH;

      const rawX = red.x * scaleX;
      const rawY = red.y * scaleY;
      const rawW = red.width * scaleX;
      const rawH = red.height * scaleY;

      // Clamped bottom-left origin PDF coordinates to prevent any overflow
      const pdfRedX = Math.max(0, Math.min(pdfW - 2, rawX));
      const pdfRedW = Math.max(1, Math.min(pdfW - pdfRedX, rawW));

      const topY = Math.max(0, Math.min(pdfH - 2, rawY));
      const pdfRedH = Math.max(1, Math.min(pdfH - topY, rawH));
      const pdfRedY = Math.max(0, pdfH - topY - pdfRedH);

      // Convert hex color to PDFLib RGB
      const hex = (red.color || '#000000').replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16) / 255 || 0;
      const g = parseInt(hex.substring(2, 4), 16) / 255 || 0;
      const b = parseInt(hex.substring(4, 6), 16) / 255 || 0;

      // Permanently draw opaque blackout vector rectangle on PDF page
      pdfPage.drawRectangle({
        x: pdfRedX,
        y: pdfRedY,
        width: pdfRedW,
        height: pdfRedH,
        color: rgb(r, g, b)
      });
    }

    progressBar.style.width = '90%';
    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    const redactedBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const redactedFileName = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-redacted.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = redactedFileName;
      document.getElementById('resMasksCount').innerText = `${placedRedactions.length} blackout masks`;
      document.getElementById('resultSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });

      const downloadBtn = document.getElementById('downloadRedactedBtn');
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(redactedBlob);
        link.download = redactedFileName;
        link.click();
      };
    }, 500);

  } catch (err) {
    console.error("Error applying redactions:", err);
    alert(`An error occurred while burning redactions: ${err.message || err}`);
    resetTool();
  }
}

function resetTool() {
  pdfFile = null;
  pdfDocObj = null;
  placedRedactions = [];
  currentPageNum = 1;
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
