// SWIF PDF - Standalone PDF Page Splitter & Organizer Engine (With Debugging & ArrayBuffer Detach Fix)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    
    hero_title: "Split & Organize <span class='text-coral'>PDF</span> Pages Online",
    hero_subtitle: "Rearrange, delete unwanted pages, or extract specific pages from your PDF with 100% privacy.",
    
    drop_title: "Drag & drop your PDF file here",
    drop_or: "or",
    drop_btn: "Select PDF File",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",

    list_title: "Organize Pages",
    list_count: "pages remaining",
    btn_select_all: "Reset Pages",
    btn_clear_all: "Remove All",

    btn_download_new: "Download New PDF",

    status_loading: "Generating page thumbnail previews...",
    status_exporting: "Rebuilding PDF with selected pages...",
    status_done: "PDF Export Complete!",

    res_title: "Page Organization Summary",
    res_pages: "Remaining Pages:",
    res_removed: "Pages Removed:",
    res_size: "New File Size:",

    btn_download: "Download New PDF",
    btn_reset: "Organize Another PDF",

    faq_title: "Page Organizer <span class='text-coral'>FAQ</span>",
    faq_q1: "How does client-side PDF page organization work?",
    faq_a1: "SWIF PDF renders page thumbnails directly in your browser using PDF.js. When you delete or reorder pages, pdf-lib copies only your selected page indices in your specified sequence locally without uploading anything to remote servers.",
    faq_q2: "Can I delete multiple pages at once?",
    faq_a2: "Yes! Simply click the trash icon (🗑️) on any page thumbnail card to remove it from the final document.",
    faq_q3: "How do I reorder pages?",
    faq_a3: "Use the Move Left (⬅️) and Move Right (➡️) arrow buttons on each page card to shift pages into your desired position.",

    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Diviser et Gérer les Pages <span class='text-coral'>PDF</span>",
    hero_subtitle: "Réorganisez, supprimez les pages inutiles ou extrayez vos pages directement dans votre navigateur.",
    drop_title: "Glissez & déposez votre fichier PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    list_title: "Organiser les pages",
    list_count: "pages restantes",
    btn_select_all: "Réinitialiser",
    btn_clear_all: "Tout supprimer",
    btn_download_new: "Télécharger le nouveau PDF",
    status_loading: "Génération des vignettes d'aperçu des pages...",
    status_exporting: "Reconstruction du PDF avec les pages choisies...",
    status_done: "Exportation du PDF terminée !",
    res_title: "Résumé de la gestion des pages",
    res_pages: "Pages restantes :",
    res_removed: "Pages supprimées :",
    res_size: "Nouvelle taille :",
    btn_download: "Télécharger le nouveau PDF",
    btn_reset: "Organiser un autre PDF",
    faq_title: "Foire Aux Questions <span class='text-coral'>Gestion des Pages</span>",
    faq_q1: "Comment fonctionne la gestion des pages côté client ?",
    faq_a1: "SWIF PDF génère des vignettes d'aperçu dans votre navigateur via PDF.js. Lorsque vous réorganisez ou supprimez des pages, pdf-lib reconstruit le document localement sans téléverser vos fichiers.",
    faq_q2: "Puis-je supprimer plusieurs pages ?",
    faq_a2: "Oui ! Cliquez simplement sur l'icône de corbeille (🗑️) sur n'importe quelle vignette de page pour la retirer du PDF final.",
    faq_q3: "Comment réorganiser l'ordre des pages ?",
    faq_a3: "Utilisez les flèches Gauche (⬅️) et Droite (➡️) sur chaque vignette pour ajuster la position des pages.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Dividir y Organizar Páginas <span class='text-coral'>PDF</span>",
    hero_subtitle: "Reorganiza, elimina páginas no deseadas o extrae secciones directamente en tu navegador.",
    drop_title: "Arrastra y suelta tu archivo PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF",
    drop_info: "Procesamiento 100% local en tu navegador.",
    list_title: "Organizar Páginas",
    list_count: "páginas restantes",
    btn_select_all: "Restablecer",
    btn_clear_all: "Eliminar Todo",
    btn_download_new: "Descargar Nuevo PDF",
    status_loading: "Generando vistas previas de páginas...",
    status_exporting: "Reconstruyendo PDF con las páginas seleccionadas...",
    status_done: "¡Exportación Completada!",
    res_title: "Resumen de Organización",
    res_pages: "Páginas Restantes:",
    res_removed: "Páginas Eliminadas:",
    res_size: "Nuevo Tamaño:",
    btn_download: "Descargar Nuevo PDF",
    btn_reset: "Organizar Otro PDF",
    faq_title: "Preguntas Frecuentes de <span class='text-coral'>Páginas</span>",
    faq_q1: "¿Cómo funciona la organización local?",
    faq_a1: "SWIF PDF genera miniaturas locales y compila las páginas seleccionadas sin subir datos a servidores.",
    faq_q2: "¿Puedo eliminar páginas específicas?",
    faq_a2: "¡Sí! Haz clic en el icono de papelera (🗑️) en cualquier miniatura.",
    faq_q3: "¿Cómo cambio el orden?",
    faq_a3: "Usa las flechas Izquierda (⬅️) y Derecha (➡️) para mover la página.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Seiten Teilen & Organisieren",
    hero_subtitle: "Seiten neu anordnen, löschen oder extrahieren direkt im Browser mit 100% Datenschutz.",
    drop_title: "PDF-Datei hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "PDF-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung im Browser.",
    list_title: "Seiten Organisieren",
    list_count: "Verbleibende Seiten",
    btn_select_all: "Zurücksetzen",
    btn_clear_all: "Alle Löschen",
    btn_download_new: "Neues PDF Herunterladen",
    status_loading: "Erstelle Seitenvorschauen...",
    status_exporting: "Erstelle neues PDF mit ausgewählten Seiten...",
    status_done: "Export Abgeschlossen!",
    res_title: "Zusammenfassung",
    res_pages: "Verbleibende Seiten:",
    res_removed: "Gelöschte Seiten:",
    res_size: "Neue Dateigröße:",
    btn_download: "Neues PDF Herunterladen",
    btn_reset: "Weiters PDF Organisieren",
    faq_title: "Seiten-Organisator <span class='text-coral'>FAQ</span>",
    faq_q1: "Wie funktioniert die Seitenteilung im Browser?",
    faq_a1: "Vorschauen werden lokal gerendert und ausgewählte Seiten zu einem neuen PDF kombiniert.",
    faq_q2: "Kann ich einzelne Seiten löschen?",
    faq_a2: "Ja! Klicken Sie auf das Mülleimer-Symbol (🗑️).",
    faq_q3: "Wie ändere ich die Reihenfolge?",
    faq_a3: "Nutzen Sie die Pfeiltasten (⬅️/➡️) auf der jeweiligen Karte.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Dividir e Organizar Páginas <span class='text-coral'>PDF</span>",
    hero_subtitle: "Reorganize, elimine páginas indesejadas ou extraia secções no seu navegador.",
    drop_title: "Arraste e largue o seu PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF",
    drop_info: "Processamento 100% local no seu navegador.",
    list_title: "Organizar Páginas",
    list_count: "páginas restantes",
    btn_select_all: "Repor",
    btn_clear_all: "Eliminar Tudo",
    btn_download_new: "Descarregar Novo PDF",
    status_loading: "A gerar miniaturas das páginas...",
    status_exporting: "A reconstruir PDF com páginas selecionadas...",
    status_done: "Exportação Concluída!",
    res_title: "Resumo da Organização",
    res_pages: "Páginas Restantes:",
    res_removed: "Páginas Eliminadas:",
    res_size: "Novo Tamanho:",
    btn_download: "Descarregar Novo PDF",
    btn_reset: "Organizar Outro PDF",
    faq_title: "Perguntas Frequentes de <span class='text-coral'>Páginas</span>",
    faq_q1: "Como funciona a organização local?",
    faq_a1: "As páginas são pré-visualizadas e compiladas localmente no seu navegador.",
    faq_q2: "Posso eliminar páginas?",
    faq_a2: "Sim! Clique no ícone do lixo (🗑️) em qualquer página.",
    faq_q3: "Como reordeno páginas?",
    faq_a3: "Use as setas Esquerda (⬅️) e Direita (➡️) em cada cartão.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Dividi e Organizza Pagine <span class='text-coral'>PDF</span>",
    hero_subtitle: "Riordina, elimina le pagine indesiderate o estrai sezioni direttamente nel browser.",
    drop_title: "Trascina e rilascia il tuo PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF",
    drop_info: "Elaborazione 100% locale nel browser.",
    list_title: "Organizza Pagine",
    list_count: "pagine rimanenti",
    btn_select_all: "Ripristina",
    btn_clear_all: "Elimina Tutto",
    btn_download_new: "Scarica Nuovo PDF",
    status_loading: "Generazione anteprime pagine in corso...",
    status_exporting: "Ricostruzione PDF con le pagine scelte...",
    status_done: "Esportazione Completata!",
    res_title: "Riepilogo Organizzazione",
    res_pages: "Pagine Rimanenti:",
    res_removed: "Pagine Eliminate:",
    res_size: "Nuova Dimensione:",
    btn_download: "Scarica Nuovo PDF",
    btn_reset: "Organizza Un Altro PDF",
    faq_title: "FAQ <span class='text-coral'>Pagine</span>",
    faq_q1: "Come funziona l'organizzazione locale?",
    faq_a1: "PDF.js genera le anteprime e pdf-lib compila solo le pagine desiderate nel browser.",
    faq_q2: "Posso eliminare pagine specifiche?",
    faq_a2: "Sì! Clicca sull'icona del cestino (🗑️) sulla scheda della pagina.",
    faq_q3: "Come cambio l'ordine?",
    faq_a3: "Usa le frecce Sinistra (⬅️) e Destra (➡️) su ciascuna scheda.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Dzielenie i Organizacja Stron <span class='text-coral'>PDF</span>",
    hero_subtitle: "Zmieniaj kolejność, usuwaj niepotrzebne strony lub wyciągaj sekcje w przeglądarce.",
    drop_title: "Przeciągnij i upuść plik PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF",
    drop_info: "Przetwarzanie 100% lokalnie w przeglądarce.",
    list_title: "Organizuj Strony",
    list_count: "pozostałych stron",
    btn_select_all: "Resetuj",
    btn_clear_all: "Usuń Wszystko",
    btn_download_new: "Pobierz Nowy PDF",
    status_loading: "Generowanie podglądu stron...",
    status_exporting: "Tworzenie nowego pliku PDF z wybranymi stronami...",
    status_done: "Eksport Zakończony!",
    res_title: "Podsumowanie Organizacji",
    res_pages: "Pozostałe Strony:",
    res_removed: "Usunięte Strony:",
    res_size: "Nowy Rozmiar:",
    btn_download: "Pobierz Nowy PDF",
    btn_reset: "Organizuj Inny PDF",
    faq_title: "FAQ <span class='text-coral'>Stron</span>",
    faq_q1: "Jak działa organizacja stron w przeglądarce?",
    faq_a1: "Podgląd stron powstaje lokalnie, a plik wyjściowy zawiera tylko wybrane strony.",
    faq_q2: "Czy mogę usuwać pojedyncze strony?",
    faq_a2: "Tak! Kliknij ikonę kosza (🗑️) przy danej stronie.",
    faq_q3: "Jak zmienić kolejność stron?",
    faq_a3: "Użyj strzałek W lewo (⬅️) i W prawo (➡️) przy karcie strony.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "تقسيم وإدارة صفحات <span class='text-coral'>PDF</span>",
    hero_subtitle: "أعد ترتيب الصفحات، احذف الصفحات غير المرغوبة، أو استخرج أجزاء محددة محلياً.",
    drop_title: "اسحب ملف PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF",
    drop_info: "معالجة محلية 100% داخل المتصفح بدون رفع الملفات.",
    list_title: "إدارة وترتيب الصفحات",
    list_count: "صفحات متبقية",
    btn_select_all: "إعادة ضبط",
    btn_clear_all: "حذف الكل",
    btn_download_new: "تحميل ملف PDF الجديد",
    status_loading: "جاري توليد الصور المصغرة لمعاينة الصفحات...",
    status_exporting: "جاري إعادة بناء الملف بالصفحات المحددة...",
    status_done: "اكتمل تصدير الملف بنجاح!",
    res_title: "ملخص تنظيم الصفحات",
    res_pages: "الصفحات المتبقية:",
    res_removed: "الصفحات المحذوفة:",
    res_size: "الحجم الجديد:",
    btn_download: "تحميل ملف PDF الجديد",
    btn_reset: "تنظيم ملف آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>إدارة الصفحات</span>",
    faq_q1: "كيف تعمل إدارة الصفحات في المتصفح؟",
    faq_a1: "يتم توليد معاينات الصفحات محلياً وتجميع الصفحات المختارة بالترتيب المحدد بدون رفع المستند.",
    faq_q2: "هل يمكنني حذف صفحات محددة؟",
    faq_a2: "نعم! اضغط على أيقونة السلة (🗑️) الموجودة على بطاقة الصفحة لحذفها.",
    faq_q3: "كيف أعد ترتيب الصفحات؟",
    faq_a3: "استخدم أسهم الترتيب لليسار (⬅️) ولليمين (➡️) لنقل الصفحة لمكانها المطلوب.",
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

// Set worker src for pdf.js
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

let currentLang = 'en';
let sourcePdfFile = null;
let sourceArrayBuffer = null;
let originalTotalPages = 0;
let pageQueue = []; // Array of { id, originalPageIndex, thumbnailDataUrl }
let newPdfBlob = null;
let newFileName = "swif-organized-document.pdf";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
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

// Drag & Drop & PDF File Select
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
      handleSelectedPdf(files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleSelectedPdf(e.target.files[0]);
    }
  });
}

// Parse PDF & Render Page Canvas Thumbnails via PDF.js
async function handleSelectedPdf(file) {
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    alert("Please select a valid PDF file.");
    return;
  }

  sourcePdfFile = file;
  console.log("PDF File selected:", file.name, "Size:", file.size, "bytes");

  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '10%';
  statusMsg.innerText = dict.status_loading;

  try {
    sourceArrayBuffer = await file.arrayBuffer();
    console.log("Source ArrayBuffer loaded. ByteLength:", sourceArrayBuffer.byteLength);

    // Pass a fresh slice copy to PDF.js so main ArrayBuffer is NOT detached by WebWorker
    const pdfjsData = new Uint8Array(sourceArrayBuffer.slice(0));
    const loadingTask = pdfjsLib.getDocument({ data: pdfjsData });
    const pdfDoc = await loadingTask.promise;
    originalTotalPages = pdfDoc.numPages;
    console.log("PDF.js document loaded successfully. Total pages:", originalTotalPages);

    pageQueue = [];

    for (let pageNum = 1; pageNum <= originalTotalPages; pageNum++) {
      const percent = Math.floor(10 + (pageNum / originalTotalPages) * 85);
      progressBar.style.width = `${percent}%`;

      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 0.35 });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport: viewport }).promise;

      pageQueue.push({
        id: 'pg_' + pageNum + '_' + Date.now(),
        originalPageIndex: pageNum - 1, // 0-indexed for pdf-lib
        thumbnailDataUrl: canvas.toDataURL('image/png')
      });
    }

    progressBar.style.width = '100%';
    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('workspaceSection').classList.remove('hidden');
      renderPageGrid();
    }, 400);

  } catch (err) {
    console.error("PDF.js render error:", err);
    alert("Could not load PDF page previews. Rebuilding document directly.");
    resetSplitTool();
  }
}

// Render Page Grid Cards
function renderPageGrid() {
  const container = document.getElementById('pageGridContainer');
  const countBadge = document.getElementById('lblPageCount');
  if (!container) return;

  container.innerHTML = '';
  if (countBadge) countBadge.innerText = `${pageQueue.length} ${translations[currentLang].list_count}`;

  pageQueue.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = "p-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#22C55E] transition-all flex flex-col justify-between space-y-3 relative group";

    card.innerHTML = `
      <!-- Thumbnail Header Badge -->
      <div class="flex items-center justify-between">
        <span class="w-6 h-6 rounded-md bg-[#22C55E] text-white font-black text-[11px] flex items-center justify-center shadow-sm">
          ${index + 1}
        </span>
        <span class="text-[10px] text-slate-400 font-bold uppercase">
          Orig. p.${item.originalPageIndex + 1}
        </span>
      </div>

      <!-- Thumbnail Canvas Image Preview -->
      <div class="h-44 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center p-1 overflow-hidden shadow-inner">
        <img src="${item.thumbnailDataUrl}" alt="Page ${index + 1}" class="max-h-full max-w-full object-contain rounded shadow-sm">
      </div>

      <!-- Card Action Controls: Move Left/Up, Move Right/Down, Delete -->
      <div class="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
        <div class="flex items-center gap-1">
          <!-- Move Left / Up -->
          <button onclick="movePageLeft(${index})" ${index === 0 ? 'disabled class="opacity-30 p-1.5 text-slate-400 cursor-not-allowed"' : 'class="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#22C55E] transition-colors"'} title="Move Left">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <!-- Move Right / Down -->
          <button onclick="movePageRight(${index})" ${index === pageQueue.length - 1 ? 'disabled class="opacity-30 p-1.5 text-slate-400 cursor-not-allowed"' : 'class="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#22C55E] transition-colors"'} title="Move Right">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        <!-- Delete Page Button -->
        <button onclick="deletePage(${index})" class="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors" title="Delete Page">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// Reordering & Deletion Logic
function movePageLeft(index) {
  if (index <= 0) return;
  const temp = pageQueue[index];
  pageQueue[index] = pageQueue[index - 1];
  pageQueue[index - 1] = temp;
  renderPageGrid();
}

function movePageRight(index) {
  if (index >= pageQueue.length - 1) return;
  const temp = pageQueue[index];
  pageQueue[index] = pageQueue[index + 1];
  pageQueue[index + 1] = temp;
  renderPageGrid();
}

function deletePage(index) {
  pageQueue.splice(index, 1);
  if (pageQueue.length === 0) {
    alert("At least one page is required.");
    resetSplitTool();
  } else {
    renderPageGrid();
  }
}

async function resetAllPages() {
  if (sourcePdfFile) {
    handleSelectedPdf(sourcePdfFile);
  }
}

function clearAllPages() {
  pageQueue = [];
  resetSplitTool();
}

// Client-Side PDF Rebuilding Engine using pdf-lib (With Debugging & Fresh ArrayBuffer Read)
async function exportOrganizedPdf() {
  console.log("=== EXPORT ORGANIZED PDF STARTED ===");
  console.log("Current pageQueue length:", pageQueue.length);

  if (pageQueue.length === 0) {
    console.warn("Export cancelled: pageQueue is empty.");
    return;
  }

  if (!window.PDFLib) {
    console.error("PDFLib library is missing!");
    alert("PDF-Lib library failed to load. Please refresh the page and try again.");
    return;
  }

  document.getElementById('workspaceSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '30%';
  statusMsg.innerText = dict.status_exporting;

  try {
    // Read FRESH ArrayBuffer from sourcePdfFile to prevent detached buffer errors
    let freshBuffer;
    if (sourcePdfFile) {
      console.log("Reading fresh ArrayBuffer from sourcePdfFile:", sourcePdfFile.name);
      freshBuffer = await sourcePdfFile.arrayBuffer();
    } else if (sourceArrayBuffer && sourceArrayBuffer.byteLength > 0) {
      console.log("Using sliced copy of sourceArrayBuffer");
      freshBuffer = sourceArrayBuffer.slice(0);
    } else {
      throw new Error("Source PDF file data is unavailable or detached.");
    }

    console.log("Fresh ArrayBuffer loaded successfully. ByteLength:", freshBuffer.byteLength);

    const { PDFDocument } = PDFLib;
    const srcDoc = await PDFDocument.load(freshBuffer, { ignoreEncryption: true });
    const srcPageCount = srcDoc.getPageCount();
    console.log("PDFLib loaded source document. Page count:", srcPageCount);

    const newPdf = await PDFDocument.create();

    // Map 0-indexed page positions and filter valid indices
    const selectedIndices = pageQueue.map(p => Number(p.originalPageIndex));
    console.log("Requested original page indices sequence:", selectedIndices);

    const validIndices = selectedIndices.filter(idx => idx >= 0 && idx < srcPageCount);
    console.log("Validated page indices to copy:", validIndices);

    if (validIndices.length === 0) {
      throw new Error("No valid page indices found to copy.");
    }

    progressBar.style.width = '60%';
    console.log("Copying pages into new PDFDocument...");
    const copiedPages = await newPdf.copyPages(srcDoc, validIndices);
    
    copiedPages.forEach(p => newPdf.addPage(p));
    console.log("Copied pages added to newPdf. Total pages in new PDF:", newPdf.getPageCount());

    progressBar.style.width = '90%';
    console.log("Saving new PDF document with object streams compression...");
    const newPdfBytes = await newPdf.save({ useObjectStreams: true });
    console.log("New PDF bytes generated successfully. Size:", newPdfBytes.byteLength, "bytes");

    newPdfBlob = new Blob([newPdfBytes], { type: 'application/pdf' });
    newFileName = sourcePdfFile ? `swif-organized-${sourcePdfFile.name}` : `swif-organized-document.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      renderExportResults(pageQueue.length, Math.max(0, originalTotalPages - pageQueue.length), newPdfBytes.byteLength);
    }, 500);

  } catch (err) {
    console.error("=== PDF EXPORT FAILED ===", err);
    alert(`An error occurred while building your new PDF: ${err.message || err}`);
    resetSplitTool();
  }
}

// Render Results Dashboard
function renderExportResults(remainingPages, removedPagesCount, finalSizeBytes) {
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');

  document.getElementById('resRemainingPages').innerText = `${remainingPages} ${remainingPages === 1 ? 'Page' : 'Pages'}`;
  document.getElementById('resRemovedPages').innerText = `${removedPagesCount} ${removedPagesCount === 1 ? 'Page' : 'Pages'}`;
  document.getElementById('resFinalSize').innerText = formatBytes(finalSizeBytes);
}

// Download Exported Blob
function downloadNewPdf() {
  if (!newPdfBlob) return;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(newPdfBlob);
  link.download = newFileName || 'swif-organized-document.pdf';
  link.click();
}

// Reset Tool State
function resetSplitTool() {
  sourcePdfFile = null;
  sourceArrayBuffer = null;
  pageQueue = [];
  newPdfBlob = null;

  const fileInput = document.getElementById('fileInput');
  if (fileInput) fileInput.value = "";

  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('workspaceSection').classList.add('hidden');
  document.getElementById('dropzoneSection').classList.remove('hidden');
}

// Utility: Format Bytes
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
