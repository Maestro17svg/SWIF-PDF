// SWIF PDF - Standalone PDF Page Numbering Tool Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Add <span class='text-coral'>Page Numbers</span> to PDF",
    hero_subtitle: "Add customizable page numbers to your PDF document with full control over position, format, font, and cover page options.",
    format_label: "Numbering Format:",
    fmt_page_n: "Page {n}",
    fmt_n_total: "{n} / {total}",
    fmt_page_n_total: "Page {n} of {total}",
    fmt_n_only: "{n} (Number only)",
    pos_label: "Position on Page:",
    pos_bottom_center: "Bottom Center",
    pos_bottom_right: "Bottom Right",
    pos_bottom_left: "Bottom Left",
    pos_top_center: "Top Center",
    pos_top_right: "Top Right",
    pos_top_left: "Top Left",
    font_label: "Font Family:",
    font_size_label: "Font Size:",
    color_label: "Text Color:",
    start_page_label: "Start Numbering From Page:",
    skip_cover_label: "Skip Cover Page (Don't number page 1)",
    btn_apply: "Apply Page Numbers & Download PDF",
    preview_title: "Live Page Numbering Preview",
    status_processing: "Inserting page numbers into PDF document...",
    status_done: "Numbered PDF document ready!",
    res_title: "Page Numbers Added Successfully",
    res_filename: "File Name:",
    res_count: "Total Pages Numbered:",
    btn_download: "Download Numbered PDF",
    btn_reset: "Number Another PDF",
    faq_title: "Page Numbers <span class='text-coral'>FAQ</span>",
    faq_q1: "Can I skip numbering the cover page?",
    faq_a1: "Yes! You can choose to start numbering from page 2 or any custom starting page.",
    faq_q2: "What formats are supported?",
    faq_a2: "You can select 'Page X', 'X / Y', 'Page X of Y', or simple numbers.",
    faq_q3: "Is my document uploaded to a server?",
    faq_a3: "No! All vector page numbering is inserted 100% locally in your browser.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Ajouter la <span class='text-coral'>Numérotation</span> sur un PDF",
    hero_subtitle: "Insérez des numéros de page personnalisés avec contrôle complet du format, de la position, de la typographie et des options de page de garde.",
    format_label: "Format du texte :",
    fmt_page_n: "Page {n}",
    fmt_n_total: "{n} / {total}",
    fmt_page_n_total: "Page {n} sur {total}",
    fmt_n_only: "{n} (Chiffre seul)",
    pos_label: "Position sur la page :",
    pos_bottom_center: "Bas - Centre",
    pos_bottom_right: "Bas - Droite",
    pos_bottom_left: "Bas - Gauche",
    pos_top_center: "Haut - Centre",
    pos_top_right: "Haut - Droite",
    pos_top_left: "Haut - Gauche",
    font_label: "Police d'écriture :",
    font_size_label: "Taille du texte :",
    color_label: "Couleur du texte :",
    start_page_label: "Commencer la numérotation à la page :",
    skip_cover_label: "Masquer sur la page de garde (Ne pas numéroter la page 1)",
    btn_apply: "Appliquer la numérotation et télécharger",
    preview_title: "Aperçu en direct de la numérotation",
    status_processing: "Insertion des numéros de page dans le PDF...",
    status_done: "PDF numéroté prêt !",
    res_title: "Numérotation appliquée avec succès",
    res_filename: "Nom du fichier :",
    res_count: "Pages numérotées :",
    btn_download: "Télécharger le PDF numéroté",
    btn_reset: "Numéroter un autre PDF",
    faq_title: "Foire Aux Questions <span class='text-coral'>Numérotation PDF</span>",
    faq_q1: "Puis-je ignorer la première page (page de garde) ?",
    faq_a1: "Oui ! Vous pouvez démarrer la numérotation dès la page 2 ou à partir de n'importe quelle page de votre choix.",
    faq_q2: "Quels formats de texte sont disponibles ?",
    faq_a2: "Vous avez le choix entre 'Page X', 'X / Y', 'Page X sur Y' ou juste le numéro 'X'.",
    faq_q3: "Mon document est-il envoyé sur un serveur ?",
    faq_a3: "Non ! L'insertion vectorielle des numéros s'effectue à 100% dans votre navigateur.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Añadir <span class='text-coral'>Números de Página</span> a PDF",
    hero_subtitle: "Inserta números de página personalizables con control total de formato, posición y tipografía.",
    format_label: "Formato de texto:",
    fmt_page_n: "Página {n}",
    fmt_n_total: "{n} / {total}",
    fmt_page_n_total: "Página {n} de {total}",
    fmt_n_only: "{n} (Solo número)",
    pos_label: "Posición:",
    pos_bottom_center: "Abajo - Centro",
    pos_bottom_right: "Abajo - Derecha",
    pos_bottom_left: "Abajo - Izquierda",
    pos_top_center: "Arriba - Centro",
    pos_top_right: "Arriba - Derecha",
    pos_top_left: "Arriba - Izquierda",
    font_label: "Fuente:",
    font_size_label: "Tamaño de texto:",
    color_label: "Color de texto:",
    start_page_label: "Empezar numeración desde página:",
    skip_cover_label: "Omitir portada (No numerar página 1)",
    btn_apply: "Aplicar Numeración y Descargar",
    preview_title: "Vista Previa de la Numeración",
    status_processing: "Insertando números de página...",
    status_done: "¡PDF Numerado Listo!",
    res_title: "Números Aplicados Con Éxito",
    res_filename: "Nombre del archivo:",
    res_count: "Páginas numeradas:",
    btn_download: "Descargar PDF",
    btn_reset: "Procesar Otro PDF",
    faq_title: "FAQ <span class='text-coral'>Numeración PDF</span>",
    faq_q1: "¿Puedo saltar la portada?",
    faq_a1: "Sí, puedes empezar desde la página 2.",
    faq_q2: "¿Qué formatos hay?",
    faq_a2: "Admite 'Página X', 'X / Y', etc.",
    faq_q3: "¿Privacidad?",
    faq_a3: "100% en tu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>Seitenzahlen</span> zu PDF Hinzufügen",
    hero_subtitle: "Fügen Sie anpassbare Seitenzahlen mit vollständiger Kontrolle über Format und Position hinzu.",
    format_label: "Textformat:",
    fmt_page_n: "Seite {n}",
    fmt_n_total: "{n} / {total}",
    fmt_page_n_total: "Seite {n} von {total}",
    fmt_n_only: "{n} (Nur Zahl)",
    pos_label: "Position:",
    pos_bottom_center: "Unten - Mitte",
    pos_bottom_right: "Unten - Rechts",
    pos_bottom_left: "Unten - Links",
    pos_top_center: "Oben - Mitte",
    pos_top_right: "Oben - Rechts",
    pos_top_left: "Oben - Links",
    font_label: "Schriftart:",
    font_size_label: "Schriftgröße:",
    color_label: "Textfarbe:",
    start_page_label: "Seitennummerierung beginnen ab Seite:",
    skip_cover_label: "Deckblatt überspringen (Seite 1 nicht nummerieren)",
    btn_apply: "Seitenzahlen Anwenden & PDF Herunterladen",
    preview_title: "Vorschau der Seitennummerierung",
    status_processing: "Füge Seitenzahlen ein...",
    status_done: "Nummeriertes PDF Bereit!",
    res_title: "Seitenzahlen Erfolgreich Hinzugefügt",
    res_filename: "Dateiname:",
    res_count: "Nummerierte Seiten:",
    btn_download: "PDF Herunterladen",
    btn_reset: "Weitere Datei Verarbeiten",
    faq_title: "Seitenzahlen <span class='text-coral'>FAQ</span>",
    faq_q1: "Deckblatt überspringen?",
    faq_a1: "Ja, Sie können ab Seite 2 beginnen.",
    faq_q2: "Welche Formate?",
    faq_a2: "Unterstützt 'Seite X', 'X / Y' uvm.",
    faq_q3: "Datenschutz?",
    faq_a3: "100% im Browser.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Adicionar <span class='text-coral'>Números de Página</span> ao PDF",
    hero_subtitle: "Insira números de página personalizáveis com controlo de formato e posição.",
    format_label: "Formato do texto:",
    fmt_page_n: "Página {n}",
    fmt_n_total: "{n} / {total}",
    fmt_page_n_total: "Página {n} de {total}",
    fmt_n_only: "{n} (Apenas número)",
    pos_label: "Posição na página:",
    pos_bottom_center: "Inferior - Centro",
    pos_bottom_right: "Inferior - Direita",
    pos_bottom_left: "Inferior - Esquerda",
    pos_top_center: "Superior - Centro",
    pos_top_right: "Superior - Direita",
    pos_top_left: "Superior - Esquerda",
    font_label: "Fonte:",
    font_size_label: "Tamanho do texto:",
    color_label: "Cor do texto:",
    start_page_label: "Iniciar numeração na página:",
    skip_cover_label: "Omitir capa (Não numerar página 1)",
    btn_apply: "Aplicar Numeração e Descarregar",
    preview_title: "Pré-visualização",
    status_processing: "A inserir números de página...",
    status_done: "PDF Numerado Pronto!",
    res_title: "Números Aplicados com Sucesso",
    res_filename: "Nome do Ficheiro:",
    res_count: "Páginas numeradas:",
    btn_download: "Descarregar PDF",
    btn_reset: "Processar Outro PDF",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Numeração PDF</span>",
    faq_q1: "Omitir a capa?",
    faq_a1: "Sim, pode começar na página 2.",
    faq_q2: "Formatos?",
    faq_a2: "Admite 'Página X', 'X / Y', etc.",
    faq_q3: "Seguro?",
    faq_a3: "100% no seu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Aggiungi <span class='text-coral'>Numeri di Pagina</span> a PDF",
    hero_subtitle: "Inserisci numeri di pagina personalizzabili con controllo di formato e posizione.",
    format_label: "Formato testo:",
    fmt_page_n: "Pagina {n}",
    fmt_n_total: "{n} / {total}",
    fmt_page_n_total: "Pagina {n} di {total}",
    fmt_n_only: "{n} (Solo numero)",
    pos_label: "Posizione:",
    pos_bottom_center: "In basso - Centro",
    pos_bottom_right: "In basso - Destra",
    pos_bottom_left: "In basso - Sinistra",
    pos_top_center: "In alto - Centro",
    pos_top_right: "In alto - Destra",
    pos_top_left: "In alto - Sinistra",
    font_label: "Font:",
    font_size_label: "Dimensione testo:",
    color_label: "Colore testo:",
    start_page_label: "Inizia numerazione dalla pagina:",
    skip_cover_label: "Salta copertina (Non numerare pagina 1)",
    btn_apply: "Applica Numerazione e Scarica",
    preview_title: "Anteprima",
    status_processing: "Inserimento numeri di pagina...",
    status_done: "PDF Numerato Pronto!",
    res_title: "Numeri di Pagina Applicati",
    res_filename: "Nome File:",
    res_count: "Pagine numerate:",
    btn_download: "Scarica PDF",
    btn_reset: "Elabora Un Altro PDF",
    faq_title: "FAQ <span class='text-coral'>Numerazione PDF</span>",
    faq_q1: "Saltare la copertina?",
    faq_a1: "Sì, puoi iniziare dalla pagina 2.",
    faq_q2: "Format disponibili?",
    faq_a2: "Supporta 'Pagina X', 'X / Y', ecc.",
    faq_q3: "Sicuro?",
    faq_a3: "100% nel tuo browser.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Dodaj <span class='text-coral'>Numerację Stron</span> do PDF",
    hero_subtitle: "Wstawiaj numery stron z pełną kontrolą formatu, pozycji i czcionki.",
    format_label: "Format tekstu:",
    fmt_page_n: "Strona {n}",
    fmt_n_total: "{n} / {total}",
    fmt_page_n_total: "Strona {n} z {total}",
    fmt_n_only: "{n} (Tylko numer)",
    pos_label: "Pozycja na stronie:",
    pos_bottom_center: "Dół - Środek",
    pos_bottom_right: "Dół - Prawo",
    pos_bottom_left: "Dół - Lewo",
    pos_top_center: "Góra - Środek",
    pos_top_right: "Góra - Prawo",
    pos_top_left: "Góra - Lewo",
    font_label: "Czcionka:",
    font_size_label: "Rozmiar tekstu:",
    color_label: "Kolor tekstu:",
    start_page_label: "Rozpocznij numerację od strony:",
    skip_cover_label: "Pomiń stronę tytułową (Nie numeruj strony 1)",
    btn_apply: "Zastosuj Numerację i Pobierz",
    preview_title: "Podgląd Numeracji",
    status_processing: "Wstawianie numerów stron...",
    status_done: "PDF z Numeracją Gotowy!",
    res_title: "Numeracja Zastosowana",
    res_filename: "Nazwa Pliku:",
    res_count: "Ponumerowane strony:",
    btn_download: "Pobierz PDF",
    btn_reset: "Przetwórz Inny PDF",
    faq_title: "FAQ <span class='text-coral'>Numeracja PDF</span>",
    faq_q1: "Pomijanie okładki?",
    faq_a1: "Tak, możesz zacząć od strony 2.",
    faq_q2: "Formaty?",
    faq_a2: "Dostępne 'Strona X', 'X / Y' itp.",
    faq_q3: "Bezpieczeństwo?",
    faq_a3: "100% w przeglądarce.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "إضافة <span class='text-coral'>أرقام الصفحات</span> إلى مستند PDF",
    hero_subtitle: "أضف أرقام صفحات مخصصة مع تحكم كامل بالصيغة والموقع والخط وتخطي الغلاف.",
    format_label: "صيغة الرقم والعبارة:",
    fmt_page_n: "صفحة {n}",
    fmt_n_total: "{n} / {total}",
    fmt_page_n_total: "صفحة {n} من {total}",
    fmt_n_only: "{n} (الرقم فقط)",
    pos_label: "الموقع في الصفحة:",
    pos_bottom_center: "أسفل - الوسط",
    pos_bottom_right: "أسفل - اليمين",
    pos_bottom_left: "أسفل - اليسار",
    pos_top_center: "أعلى - الوسط",
    pos_top_right: "أعلى - اليمين",
    pos_top_left: "أعلى - اليسار",
    font_label: "خط النص:",
    font_size_label: "حجم الخط:",
    color_label: "لون الخط:",
    start_page_label: "بدء الترقيم من الصفحة:",
    skip_cover_label: "تخطي صفحة الغلاف (عدم ترقيم الصفحة الأولى)",
    btn_apply: "تطبيق الترقيم وتحميل المستند",
    preview_title: "معاينة الترقيم الحية",
    status_processing: "جاري إدراج أرقام الصفحات في المستند...",
    status_done: "مستند PDF المرقّم جاهز!",
    res_title: "تم إضافة أرقام الصفحات بنجاح",
    res_filename: "اسم الملف:",
    res_count: "إجمالي الصفحات المرقّمة:",
    btn_download: "تحميل مستند PDF",
    btn_reset: "معالجة مستند آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>ترقيم الصفحات</span>",
    faq_q1: "هل يمكنني تخطي صفحة الغلاف؟",
    faq_a1: "نعم! يمكنك اختيار بدء الترقيم من الصفحة الثانية أو أي صفحة تحددها.",
    faq_q2: "ما هي الصيغ المتاحة؟",
    faq_a2: "تتضمن 'صفحة X'، 'X / Y'، 'صفحة X من Y' أو الرقم بمفرده.",
    faq_q3: "هل يتم رفع المستند إلى خادم؟",
    faq_a3: "لا! المعالجة بالكامل تتم 100% داخل متصفحك.",
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
let totalPagesCount = 1;

// Offscreen Static Cached PDF Canvas
let cachedPdfCanvas = null;

// Page Numbering State
let numberFormat = "Page {n}"; // 'Page {n}' | '{n} / {total}' | 'Page {n} of {total}' | '{n}'
let numberPosition = "bottom-center"; // 'bottom-center' | 'bottom-right' | 'bottom-left' | 'top-center' | 'top-right' | 'top-left'
let numberFont = "Helvetica";
let numberFontSize = 11;
let numberColor = "#1E2029";
let startFromPage = 1;
let skipCoverPage = false;

let processedPdfBlob = null;
let processedFileName = "";

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

    await cachePdfPageBackgroundOnce();

    document.getElementById('dropzoneSection').classList.add('hidden');
    document.getElementById('editorSection').classList.remove('hidden');

    updateLiveCanvasPreview();

  } catch (err) {
    console.error("Error opening PDF file:", err);
    alert("Could not load PDF document. Please try another file.");
  }
}

async function cachePdfPageBackgroundOnce() {
  if (!pdfDocObj) return;

  const page = await pdfDocObj.getPage(1);
  const containerW = window.innerWidth < 768 ? (window.innerWidth - 64) : 480;
  const containerH = window.innerHeight * 0.58;
  const unscaledViewport = page.getViewport({ scale: 1.0 });
  
  const scaleW = containerW > 0 ? (containerW / unscaledViewport.width) : 0.75;
  const scaleH = containerH > 0 ? (containerH / unscaledViewport.height) : 0.75;
  let scale = Math.max(0.35, Math.min(0.75, scaleW, scaleH));


  const viewport = page.getViewport({ scale });

  cachedPdfCanvas = document.createElement('canvas');
  cachedPdfCanvas.width = viewport.width;
  cachedPdfCanvas.height = viewport.height;

  const ctx = cachedPdfCanvas.getContext('2d');
  await page.render({ canvasContext: ctx, viewport }).promise;
}


function initFormControls() {
  const fmtSelect = document.getElementById('numberFormatSelect');
  if (fmtSelect) {
    fmtSelect.addEventListener('change', (e) => {
      numberFormat = e.target.value;
      updateLiveCanvasPreview();
    });
  }

  const posSelect = document.getElementById('positionSelect');
  if (posSelect) {
    posSelect.addEventListener('change', (e) => {
      numberPosition = e.target.value;
      updateLiveCanvasPreview();
    });
  }

  const fontSelect = document.getElementById('fontSelect');
  if (fontSelect) {
    fontSelect.addEventListener('change', (e) => {
      numberFont = e.target.value;
      updateLiveCanvasPreview();
    });
  }

  const sizeInput = document.getElementById('fontSizeInput');
  const sizeText = document.getElementById('fontSizeText');
  if (sizeInput) {
    sizeInput.addEventListener('input', (e) => {
      numberFontSize = parseInt(e.target.value) || 11;
      if (sizeText) sizeText.innerText = `${numberFontSize} pt`;
      updateLiveCanvasPreview();
    });
  }

  const colorInput = document.getElementById('numberColorInput');
  if (colorInput) {
    colorInput.addEventListener('input', (e) => {
      numberColor = e.target.value;
      updateLiveCanvasPreview();
    });
  }

  const startInput = document.getElementById('startPageInput');
  if (startInput) {
    startInput.addEventListener('input', (e) => {
      startFromPage = parseInt(e.target.value) || 1;
      updateLiveCanvasPreview();
    });
  }

  const skipCheckbox = document.getElementById('skipCoverCheckbox');
  if (skipCheckbox) {
    skipCheckbox.addEventListener('change', (e) => {
      skipCoverPage = e.target.checked;
      updateLiveCanvasPreview();
    });
  }
}

/* ==================== 100% STABLE FAST LIVE PREVIEW ==================== */
function updateLiveCanvasPreview() {
  if (!cachedPdfCanvas) return;

  const canvas = document.getElementById('previewCanvas');
  if (!canvas) return;

  canvas.width = cachedPdfCanvas.width;
  canvas.height = cachedPdfCanvas.height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(cachedPdfCanvas, 0, 0);

  const w = canvas.width;
  const h = canvas.height;

  // Render Sample Page Number Text
  const sampleNum = 1;
  const pageNumText = generatePageNumberString(sampleNum, totalPagesCount);

  ctx.save();
  ctx.fillStyle = numberColor;
  ctx.font = `bold ${numberFontSize * 1.2}px ${numberFont}, sans-serif`;

  let posX = w / 2;
  let posY = h - 25;
  let textAlign = 'center';

  if (numberPosition === 'bottom-center') { posX = w / 2; posY = h - 25; textAlign = 'center'; }
  else if (numberPosition === 'bottom-right') { posX = w - 35; posY = h - 25; textAlign = 'right'; }
  else if (numberPosition === 'bottom-left') { posX = 35; posY = h - 25; textAlign = 'left'; }
  else if (numberPosition === 'top-center') { posX = w / 2; posY = 35; textAlign = 'center'; }
  else if (numberPosition === 'top-right') { posX = w - 35; posY = 35; textAlign = 'right'; }
  else if (numberPosition === 'top-left') { posX = 35; posY = 35; textAlign = 'left'; }

  ctx.textAlign = textAlign;
  ctx.fillText(pageNumText, posX, posY);

  // Highlight Box on Preview
  ctx.strokeStyle = '#22C55E';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]);
  const metrics = ctx.measureText(pageNumText);
  const textWidth = metrics.width + 16;
  const textHeight = (numberFontSize * 1.2) + 10;

  let rectX = posX - textWidth / 2;
  if (textAlign === 'right') rectX = posX - textWidth;
  if (textAlign === 'left') rectX = posX;

  ctx.strokeRect(rectX, posY - textHeight / 1.4, textWidth, textHeight);
  ctx.restore();
}

function generatePageNumberString(pageNum, total) {
  let str = numberFormat;
  str = str.replace('{n}', pageNum);
  str = str.replace('{total}', total);
  return str;
}

/* ==================== VECTOR PDF PAGE NUMBERING ENGINE VIA PDF-LIB ==================== */
async function applyPageNumbersAndDownload() {
  if (!pdfFile) return;

  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '30%';
  statusMsg.innerText = dict.status_processing;

  try {
    const ab = await pdfFile.arrayBuffer();
    const { PDFDocument, StandardFonts, rgb } = PDFLib;

    const pdfDoc = await PDFDocument.load(ab);
    const pages = pdfDoc.getPages();
    const total = pages.length;

    progressBar.style.width = '50%';

    let embeddedFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    if (numberFont === 'TimesRoman') embeddedFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    if (numberFont === 'Courier') embeddedFont = await pdfDoc.embedFont(StandardFonts.Courier);

    const hex = numberColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255 || 0.1;
    const g = parseInt(hex.substring(2, 4), 16) / 255 || 0.1;
    const b = parseInt(hex.substring(4, 6), 16) / 255 || 0.1;
    const fontRgb = rgb(r, g, b);

    let numberedPagesCount = 0;

    for (let i = 0; i < total; i++) {
      const pageNum = i + 1;

      // Skip cover page check
      if (skipCoverPage && pageNum === 1) continue;

      // Check start page threshold
      if (pageNum < startFromPage) continue;

      const page = pages[i];
      const { width: pW, height: pH } = page.getSize();

      const numberValue = skipCoverPage ? (pageNum - 1) : pageNum;
      const numStr = generatePageNumberString(numberValue, total);
      const textWidth = embeddedFont.widthOfTextAtSize(numStr, numberFontSize);

      let targetX = (pW - textWidth) / 2;
      let targetY = 30;

      if (numberPosition === 'bottom-center') { targetX = (pW - textWidth) / 2; targetY = 30; }
      else if (numberPosition === 'bottom-right') { targetX = pW - textWidth - 40; targetY = 30; }
      else if (numberPosition === 'bottom-left') { targetX = 40; targetY = 30; }
      else if (numberPosition === 'top-center') { targetX = (pW - textWidth) / 2; targetY = pH - 40; }
      else if (numberPosition === 'top-right') { targetX = pW - textWidth - 40; targetY = pH - 40; }
      else if (numberPosition === 'top-left') { targetX = 40; targetY = pH - 40; }

      page.drawText(numStr, {
        x: targetX,
        y: targetY,
        size: numberFontSize,
        font: embeddedFont,
        color: fontRgb,
        opacity: 1.0
      });

      numberedPagesCount++;
    }

    progressBar.style.width = '90%';
    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    processedPdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    processedFileName = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-numbered.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = processedFileName;
      document.getElementById('resCountText').innerText = `${numberedPagesCount} pages`;

      const downloadBtn = document.getElementById('downloadNumberedBtn');
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(processedPdfBlob);
        link.download = processedFileName;
        link.click();
      };
    }, 500);

  } catch (err) {
    console.error("Error applying page numbers:", err);
    alert(`Could not insert page numbers: ${err.message || err}`);
    resetTool();
  }
}

function resetTool() {
  pdfFile = null;
  pdfDocObj = null;
  cachedPdfCanvas = null;
  processedPdfBlob = null;

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
