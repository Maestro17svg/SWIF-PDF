// SWIF PDF - Standalone Targeted PDF Page Extraction Tool Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Extract & Split <span class='text-coral'>PDF Pages</span>",
    hero_subtitle: "Select specific pages from your PDF file and extract them into a clean, standalone PDF document.",
    drop_title: "Drag & drop your PDF file here",
    drop_or: "or",
    drop_btn: "Select PDF File to Extract Pages",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    select_all: "Select All",
    deselect_all: "Deselect All",
    custom_range_placeholder: "Page range (e.g. 1-5, 8, 11-15)",
    selection_count: "{selected} of {total} pages selected",
    btn_download_extracted: "Download Extracted PDF",
    status_loading: "Generating page thumbnail previews...",
    status_processing: "Extracting selected pages into new PDF...",
    status_done: "Extracted PDF document ready!",
    res_title: "PDF Pages Extracted Successfully",
    res_filename: "File Name:",
    res_count: "Total Pages Extracted:",
    btn_download: "Download Extracted PDF",
    btn_reset: "Extract From Another PDF",
    no_selection_err: "Please select at least one page to extract.",
    faq_title: "Page Extraction <span class='text-coral'>FAQ</span>",
    faq_q1: "Can I extract non-consecutive pages?",
    faq_a1: "Yes! You can click any combination of pages or type range intervals like '1-3, 7, 10-12'.",
    faq_q2: "Does extraction preserve PDF quality?",
    faq_a2: "Yes! PDF pages are extracted natively without vector quality or text layer loss.",
    faq_q3: "Is my document uploaded to a server?",
    faq_a3: "No! All page copying and extraction runs 100% locally in your web browser.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Extraire & Diviser les <span class='text-coral'>Pages PDF</span>",
    hero_subtitle: "Sélectionnez les pages de votre choix et extrayez-les instantanément dans un nouveau document PDF.",
    drop_title: "Glissez & déposez votre fichier PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF à diviser",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    select_all: "Tout sélectionner",
    deselect_all: "Tout désélectionner",
    custom_range_placeholder: "Intervalle de pages (ex: 1-5, 8, 11-15)",
    selection_count: "{selected} sur {total} pages sélectionnées",
    btn_download_extracted: "Télécharger le nouveau PDF",
    status_loading: "Génération des miniatures de pages...",
    status_processing: "Extraction des pages sélectionnées...",
    status_done: "Nouveau PDF extrait prêt !",
    res_title: "Pages extraites avec succès",
    res_filename: "Nom du fichier :",
    res_count: "Pages conservées :",
    btn_download: "Télécharger le nouveau PDF",
    btn_reset: "Extraire d'un autre PDF",
    no_selection_err: "Veuillez sélectionner au moins une page à extraire.",
    faq_title: "Foire Aux Questions <span class='text-coral'>Extraction de Pages</span>",
    faq_q1: "Puis-je extraire des pages non consécutives ?",
    faq_a1: "Oui ! Vous pouvez cliquer sur n'importe quelle combinaison de pages ou saisir des intervalles du type '1-3, 7, 10-12'.",
    faq_q2: "L'extraction préserve-t-elle la qualité du PDF ?",
    faq_a2: "Absolument ! Les pages sont extraites de manière vectorielle native sans aucune perte de netteté.",
    faq_q3: "Mon document est-il envoyé sur un serveur ?",
    faq_a3: "Non ! Tout le traitement d'extraction s'effectue à 100% dans votre navigateur.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Extraer y Dividir <span class='text-coral'>Páginas PDF</span>",
    hero_subtitle: "Selecciona páginas específicas de tu PDF y extráelas en un nuevo documento.",
    drop_title: "Arrastra y suelta tu archivo PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF",
    drop_info: "Procesamiento 100% local en tu navegador.",
    select_all: "Seleccionar Todo",
    deselect_all: "Deseleccionar Todo",
    custom_range_placeholder: "Rango de páginas (ej. 1-5, 8, 11-15)",
    selection_count: "{selected} de {total} páginas seleccionadas",
    btn_download_extracted: "Descargar Nuevo PDF",
    status_loading: "Generando miniaturas...",
    status_processing: "Extrayendo páginas seleccionadas...",
    status_done: "¡Nuevo PDF Listo!",
    res_title: "Páginas Extraídas Con Éxito",
    res_filename: "Nombre del archivo:",
    res_count: "Páginas conservadas:",
    btn_download: "Descargar Nuevo PDF",
    btn_reset: "Extraer de Otro PDF",
    no_selection_err: "Selecciona al menos una página.",
    faq_title: "FAQ <span class='text-coral'>Extracción de Páginas</span>",
    faq_q1: "¿Páginas no consecutivas?",
    faq_a1: "Sí, selecciona cualquier combinación.",
    faq_q2: "¿Calidad?",
    faq_a2: "100% calidad original.",
    faq_q3: "¿Privacidad?",
    faq_a3: "100% local en tu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF Seiten</span> Extrahieren",
    hero_subtitle: "Wählen Sie bestimmte Seiten aus und extrahieren Sie diese in ein neues PDF-Dokument.",
    drop_title: "PDF-Datei hierher ziehen",
    drop_or: "oder",
    drop_btn: "PDF-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung im Browser.",
    select_all: "Alle Auswählen",
    deselect_all: "Auswahl Aufheben",
    custom_range_placeholder: "Seitenbereich (z.B. 1-5, 8, 11-15)",
    selection_count: "{selected} von {total} Seiten ausgewählt",
    btn_download_extracted: "Neues PDF Herunterladen",
    status_loading: "Erstelle Vorschaubilder...",
    status_processing: "Extrahiere ausgewählte Seiten...",
    status_done: "Neues PDF Bereit!",
    res_title: "Seiten Erfolgreich Extrahiert",
    res_filename: "Dateiname:",
    res_count: "Behaltene Seiten:",
    btn_download: "Neues PDF Herunterladen",
    btn_reset: "Weitere Datei Verarbeiten",
    no_selection_err: "Bitte wählen Sie mindestens eine Seite aus.",
    faq_title: "Seiten Extrahieren <span class='text-coral'>FAQ</span>",
    faq_q1: "Nicht aufeinanderfolgende Seiten?",
    faq_a1: "Ja, beliebige Auswahl möglich.",
    faq_q2: "Qualitätsverlust?",
    faq_a2: "Nein, 100% Vektorqualität.",
    faq_q3: "Datenschutz?",
    faq_a3: "100% im Browser.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Extrair <span class='text-coral'>Páginas PDF</span>",
    hero_subtitle: "Selecione páginas específicas do seu PDF e extraia-as para um novo documento.",
    drop_title: "Arraste e largue o seu ficheiro PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF",
    drop_info: "Processamento 100% local no seu navegador.",
    select_all: "Selecionar Tudo",
    deselect_all: "Desmarcar Tudo",
    custom_range_placeholder: "Intervalo (ex: 1-5, 8, 11-15)",
    selection_count: "{selected} de {total} páginas selecionadas",
    btn_download_extracted: "Descarregar Novo PDF",
    status_loading: "A gerar miniaturas...",
    status_processing: "A extrair páginas selecionadas...",
    status_done: "Novo PDF Pronto!",
    res_title: "Páginas Extraídas com Sucesso",
    res_filename: "Nome do Ficheiro:",
    res_count: "Páginas mantidas:",
    btn_download: "Descarregar Novo PDF",
    btn_reset: "Extrair de Outro PDF",
    no_selection_err: "Selecione pelo menos uma página.",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Extração de Páginas</span>",
    faq_q1: "Páginas alternadas?",
    faq_a1: "Sim, selecione qualquer combinação.",
    faq_q2: "Preserva qualidade?",
    faq_a2: "Sim, 100% original.",
    faq_q3: "Seguro?",
    faq_a3: "100% no seu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Estrai <span class='text-coral'>Pagine PDF</span>",
    hero_subtitle: "Seleziona pagine specifiche del tuo PDF ed estraile in un nuovo documento.",
    drop_title: "Trascina e rilascia il tuo file PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF",
    drop_info: "Elaborazione 100% locale nel tuo browser.",
    select_all: "Seleziona Tutto",
    deselect_all: "Deseleziona Tutto",
    custom_range_placeholder: "Intervallo pagine (es. 1-5, 8, 11-15)",
    selection_count: "{selected} di {total} pagine selezionate",
    btn_download_extracted: "Scarica Nuovo PDF",
    status_loading: "Generazione anteprime...",
    status_processing: "Estrazione pagine selezionate...",
    status_done: "Nuovo PDF Pronto!",
    res_title: "Pagine Estratte con Successo",
    res_filename: "Nome File:",
    res_count: "Pagine mantenute:",
    btn_download: "Scarica Nuovo PDF",
    btn_reset: "Estrai da Un Altro PDF",
    no_selection_err: "Seleziona almeno una pagina.",
    faq_title: "FAQ <span class='text-coral'>Estrazione Pagine</span>",
    faq_q1: "Pagine non consecutive?",
    faq_a1: "Sì, seleziona qualsiasi combinazione.",
    faq_q2: "Qualità?",
    faq_a2: "100% qualità originale.",
    faq_q3: "Sicuro?",
    faq_a3: "100% nel tuo browser.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Wyciągaj <span class='text-coral'>Strony PDF</span>",
    hero_subtitle: "Wybierz określone strony z pliku PDF i wyciągnij je do nowego pliku.",
    drop_title: "Przeciągnij i upuść plik PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF",
    drop_info: "Przetwarzanie 100% lokalnie.",
    select_all: "Zaznacz Wszystko",
    deselect_all: "Odznacz Wszystko",
    custom_range_placeholder: "Zakres stron (np. 1-5, 8, 11-15)",
    selection_count: "{selected} z {total} stron zaznaczonych",
    btn_download_extracted: "Pobierz Nowy PDF",
    status_loading: "Generowanie miniaturek...",
    status_processing: "Wypakowywanie zaznaczonych stron...",
    status_done: "Nowy PDF Gotowy!",
    res_title: "Strony Wypakowane",
    res_filename: "Nazwa Pliku:",
    res_count: "Zachowane strony:",
    btn_download: "Pobierz Nowy PDF",
    btn_reset: "Wypakuj z Innego PDF",
    no_selection_err: "Zaznacz przynajmniej jedną stronę.",
    faq_title: "FAQ <span class='text-coral'>Wypakowywanie Stron</span>",
    faq_q1: "Dowolne strony?",
    faq_a1: "Tak, wybierz dowolną kombinację.",
    faq_q2: "Jakość?",
    faq_a2: "Oryginalna jakość PDF.",
    faq_q3: "Bezpieczeństwo?",
    faq_a3: "100% w przeglądarce.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "استخراج وتجزئة <span class='text-coral'>صفحات PDF</span>",
    hero_subtitle: "حدد صفحات معينة من ملف PDF واستخرجها في مستند جديد بحرية تامة.",
    drop_title: "اسحب ملف PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF لتجزئة الصفحات",
    drop_info: "معالجة محلية 100% داخل متصفحك.",
    select_all: "تحديد كافة الصفحات",
    deselect_all: "إلغاء تحديد الكل",
    custom_range_placeholder: "نطاق الصفحات (مثال: 1-5, 8, 11-15)",
    selection_count: "تم تحديد {selected} من إجمالي {total} صفحة",
    btn_download_extracted: "تحميل مستند PDF الجديد",
    status_loading: "جاري إنشاء المعاينات المصغرة...",
    status_processing: "جاري استخراج الصفحات المحددة...",
    status_done: "مستند PDF الجديد جاهز!",
    res_title: "تم استخراج الصفحات بنجاح",
    res_filename: "اسم الملف:",
    res_count: "الصفحات المستخرجة:",
    btn_download: "تحميل مستند PDF",
    btn_reset: "استخراج من مستند آخر",
    no_selection_err: "يرجى تحديد صفحة واحدة على الأقل للاستخراج.",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>استخراج الصفحات</span>",
    faq_q1: "هل يمكن استخراج صفحات غير متتالية؟",
    faq_a1: "نعم! يمكنك النقر على أي صفحة أو كتابة نطاقات مخصصة مثل '1-3, 7, 10-12'.",
    faq_q2: "هل يحافظ الاستخراج على الجودة؟",
    faq_a2: "نعم! يتم نسخ الصفحات بدقة نصوصها ورسوماتها الأصلية 100%.",
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
let totalPagesCount = 0;

// Pages state: Array of { pageNum: 1, selected: true, canvasDataUrl: "" }
let pagesList = [];

let processedPdfBlob = null;
let processedFileName = "";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
  initCustomRangeInput();
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

  progressBar.style.width = '15%';
  statusMsg.innerText = dict.status_loading;

  try {
    const ab = await file.arrayBuffer();
    const pdfjsData = new Uint8Array(ab.slice(0));
    pdfDocObj = await pdfjsLib.getDocument({ data: pdfjsData }).promise;
    totalPagesCount = pdfDocObj.numPages;

    pagesList = [];

    // Render thumbnails for every page
    for (let i = 1; i <= totalPagesCount; i++) {
      const page = await pdfDocObj.getPage(i);
      const viewport = page.getViewport({ scale: 0.4 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport }).promise;

      pagesList.push({
        pageNum: i,
        selected: true,
        canvasDataUrl: canvas.toDataURL('image/png')
      });

      const pct = Math.round(15 + (i / totalPagesCount) * 80);
      progressBar.style.width = `${pct}%`;
    }

    progressBar.style.width = '100%';

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('editorSection').classList.remove('hidden');
      renderThumbnailGrid();
    }, 400);

  } catch (err) {
    console.error("Error opening PDF file:", err);
    alert("Could not load PDF document. Please try another file.");
    resetTool();
  }
}

/* ==================== THUMBNAIL GRID & SELECTION HANDLERS ==================== */
function renderThumbnailGrid() {
  const grid = document.getElementById('thumbnailGrid');
  grid.innerHTML = "";

  pagesList.forEach((pObj) => {
    const card = document.createElement('div');
    card.className = `page-card relative bg-white p-3 rounded-2xl border-2 transition-all cursor-pointer select-none group shadow-md hover:shadow-xl ${pObj.selected ? 'border-[#22C55E] bg-[#F0FDF4]/30 ring-2 ring-orange-400/30' : 'border-slate-200 hover:border-slate-300'}`;
    card.setAttribute('data-page', pObj.pageNum);

    card.innerHTML = `
      <div class="absolute top-4 left-4 z-10">
        <input type="checkbox" ${pObj.selected ? 'checked' : ''} class="w-5 h-5 rounded-lg text-[#22C55E] focus:ring-emerald-500 cursor-pointer pointer-events-none">
      </div>
      <div class="w-full h-[220px] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden p-2">
        <img src="${pObj.canvasDataUrl}" class="max-w-full max-h-full object-contain shadow-sm group-hover:scale-105 transition-transform duration-300">
      </div>
      <div class="pt-3 text-center text-xs font-extrabold text-slate-800">
        <span>Page ${pObj.pageNum}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      pObj.selected = !pObj.selected;
      renderThumbnailGrid();
    });

    grid.appendChild(card);
  });

  updateSelectionCounterText();
  if (window.lucide) lucide.createIcons();
}

function selectAllPages() {
  pagesList.forEach(p => p.selected = true);
  renderThumbnailGrid();
}

function deselectAllPages() {
  pagesList.forEach(p => p.selected = false);
  renderThumbnailGrid();
}

function updateSelectionCounterText() {
  const dict = translations[currentLang];
  const countEl = document.getElementById('selectionCountText');
  const selectedCount = pagesList.filter(p => p.selected).length;

  if (countEl && dict) {
    countEl.innerText = dict.selection_count
      .replace('{selected}', selectedCount)
      .replace('{total}', pagesList.length);
  }
}

function initCustomRangeInput() {
  const input = document.getElementById('customRangeInput');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (!val) return;

    const selectedPages = new Set();
    const parts = val.split(',');
    parts.forEach(part => {
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(n => parseInt(n.trim()));
        if (start && end) {
          for (let p = Math.min(start, end); p <= Math.max(start, end); p++) {
            if (p >= 1 && p <= totalPagesCount) selectedPages.add(p);
          }
        }
      } else {
        const p = parseInt(part.trim());
        if (p >= 1 && p <= totalPagesCount) selectedPages.add(p);
      }
    });

    pagesList.forEach(p => {
      p.selected = selectedPages.has(p.pageNum);
    });

    renderThumbnailGrid();
  });
}

/* ==================== CLIENT-SIDE VECTOR PDF PAGE EXTRACTION ENGINE ==================== */
async function extractSelectedPagesAndDownload() {
  const selectedPages = pagesList.filter(p => p.selected).map(p => p.pageNum);
  if (selectedPages.length === 0) {
    const dict = translations[currentLang];
    alert(dict.no_selection_err);
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
    const { PDFDocument } = PDFLib;

    const srcDoc = await PDFDocument.load(ab);
    const newDoc = await PDFDocument.create();

    // 0-indexed page indices for pdf-lib copyPages
    const pageIndices = selectedPages.map(p => p - 1);

    progressBar.style.width = '60%';
    const copiedPages = await newDoc.copyPages(srcDoc, pageIndices);
    copiedPages.forEach(page => newDoc.addPage(page));

    progressBar.style.width = '90%';
    const pdfBytes = await newDoc.save({ useObjectStreams: true });

    processedPdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    processedFileName = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-extracted.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = processedFileName;
      document.getElementById('resCountText').innerText = `${selectedPages.length} pages`;

      const downloadBtn = document.getElementById('downloadExtractedBtn');
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(processedPdfBlob);
        link.download = processedFileName;
        link.click();
      };
    }, 500);

  } catch (err) {
    console.error("Error extracting PDF pages:", err);
    alert(`Could not extract PDF pages: ${err.message || err}`);
    resetTool();
  }
}

function resetTool() {
  pdfFile = null;
  pdfDocObj = null;
  pagesList = [];
  processedPdfBlob = null;

  const fileInput = document.getElementById('fileInput');
  if (fileInput) fileInput.value = "";
  const rangeInput = document.getElementById('customRangeInput');
  if (rangeInput) rangeInput.value = "";

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
