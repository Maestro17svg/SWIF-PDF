// SWIF PDF - Standalone PDF Merging Engine & i18n Script (With Grid/List View Toggle)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    
    hero_title: "Merge <span class='text-coral'>PDF</span> Files Online",
    hero_subtitle: "Combine multiple PDF documents into a single organized file directly in your browser.",
    
    drop_title: "Drag & drop multiple PDF files here",
    drop_or: "or",
    drop_btn: "Select PDF Files",
    drop_info: "Select multiple files at once. Files are processed 100% locally in your browser.",

    list_title: "Files to Merge",
    list_count: "files selected",
    view_grid: "Grid",
    view_list: "List",
    btn_add_more: "+ Add More Files",
    btn_clear_all: "Clear All",

    btn_merge: "Merge PDFs Now",

    status_loading: "Loading & parsing PDF documents...",
    status_merging: "Combining pages into a single document...",
    status_done: "Merging Complete!",

    res_title: "Merge Summary",
    res_files: "Files Merged:",
    res_pages: "Total Pages:",
    res_size: "Combined Size:",

    btn_download: "Download Merged PDF",
    btn_reset: "Merge Other Files",

    faq_title: "PDF Merge <span class='text-coral'>FAQ</span>",
    faq_q1: "How does client-side PDF merging work?",
    faq_a1: "SWIF PDF reads your selected documents locally via WebAssembly & JS, copies the pages from each PDF in your exact specified order, and packages them into a single file without uploading anything to remote servers.",
    faq_q2: "Can I change the order of files before merging?",
    faq_a2: "Yes! You can use the Move Up (⬆️) and Move Down (⬇️) buttons on any file card to arrange the exact page sequence you want.",
    faq_q3: "Is there a limit on how many PDFs I can combine?",
    faq_a3: "No! Since processing uses your computer's memory, you can merge as many PDF files as you need for free.",

    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Fusionner des fichiers <span class='text-coral'>PDF</span> en ligne",
    hero_subtitle: "Assemblez plusieurs documents PDF en un seul fichier organisé directement dans votre navigateur.",
    drop_title: "Glissez & déposez vos fichiers PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner des fichiers PDF",
    drop_info: "Sélectionnez plusieurs fichiers simultanément. Traitement 100% local dans votre navigateur.",
    list_title: "Fichiers à fusionner",
    list_count: "fichiers sélectionnés",
    view_grid: "Grille",
    view_list: "Liste",
    btn_add_more: "+ Ajouter d'autres fichiers",
    btn_clear_all: "Tout effacer",
    btn_merge: "Fusionner les PDF maintenant",
    status_loading: "Chargement et analyse des documents PDF...",
    status_merging: "Assemblage des pages dans un fichier unique...",
    status_done: "Fusion terminée !",
    res_title: "Résumé de la fusion",
    res_files: "Fichiers fusionnés :",
    res_pages: "Pages totales :",
    res_size: "Taille combinée :",
    btn_download: "Télécharger le PDF fusionné",
    btn_reset: "Fusionner d'autres fichiers",
    faq_title: "Foire Aux Questions <span class='text-coral'>Fusion</span>",
    faq_q1: "Comment fonctionne la fusion côté client ?",
    faq_a1: "SWIF PDF lit vos documents localement dans votre navigateur, copie les pages dans l'ordre exact que vous avez défini et génère un fichier unique sans téléverser vos documents.",
    faq_q2: "Puis-je modifier l'ordre des fichiers avant de fusionner ?",
    faq_a2: "Oui ! Utilisez les boutons Monter (⬆️) et Descendre (⬇️) sur chaque carte pour ajuster l'ordre exact de vos fichiers.",
    faq_q3: "Y a-t-il une limite du nombre de fichiers ?",
    faq_a3: "Non ! Vous pouvez assembler autant de fichiers PDF que vous le souhaitez gratuitement.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Unir Archivos <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Combina varios documentos PDF en un solo archivo ordenado directamente en tu navegador.",
    drop_title: "Arrastra y suelta varios archivos PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivos PDF",
    drop_info: "Selecciona varios archivos a la vez. Procesamiento 100% local.",
    list_title: "Archivos a Unir",
    list_count: "archivos seleccionados",
    view_grid: "Cuadrícula",
    view_list: "Lista",
    btn_add_more: "+ Añadir Más Archivos",
    btn_clear_all: "Borrar Todo",
    btn_merge: "Unir PDF Ahora",
    status_loading: "Cargando y analizando documentos PDF...",
    status_merging: "Combinando páginas en un solo archivo...",
    status_done: "¡Unión Completada!",
    res_title: "Resumen de la Unión",
    res_files: "Archivos Unidos:",
    res_pages: "Páginas Totales:",
    res_size: "Tamaño Combinado:",
    btn_download: "Descargar PDF Unido",
    btn_reset: "Unir Otros Archivos",
    faq_title: "Preguntas Frecuentes de <span class='text-coral'>Unión</span>",
    faq_q1: "¿Cómo funciona la unión local?",
    faq_a1: "SWIF PDF combina las páginas directamente en tu navegador sin enviar nada a servidores externos.",
    faq_q2: "¿Puedo cambiar el orden de los archivos?",
    faq_a2: "¡Sí! Usa los botones Subir (⬆️) y Bajar (⬇️) para reordenar los archivos.",
    faq_q3: "¿Hay límite de archivos?",
    faq_a3: "¡No! Puedes combinar tantos archivos como necesites.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Dateien Online Zusammenfügen",
    hero_subtitle: "Kombinieren Sie mehrere PDF-Dokumente direkt im Browser zu einer Datei.",
    drop_title: "Mehrere PDF-Dateien hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "PDF-Dateien Auswählen",
    drop_info: "Wählen Sie mehrere Dateien aus. 100% lokale Verarbeitung im Browser.",
    list_title: "Dateien zum Zusammenfügen",
    list_count: "Dateien ausgewählt",
    view_grid: "Raster",
    view_list: "Liste",
    btn_add_more: "+ Weitere Dateien Hinzufügen",
    btn_clear_all: "Alle Löschen",
    btn_merge: "Jetzt PDFs Zusammenfügen",
    status_loading: "Lade und analysiere PDF-Dokumente...",
    status_merging: "Kombiniere Seiten in eine Datei...",
    status_done: "Zusammenfügen Abgeschlossen!",
    res_title: "Zusammenfassung",
    res_files: "Dateien Zusammengefügt:",
    res_pages: "Gesamtseiten:",
    res_size: "Gesamtzahl Größe:",
    btn_download: "Zusammengefügtes PDF Herunterladen",
    btn_reset: "Weitere Dateien Zusammenfügen",
    faq_title: "Zusammenfügen <span class='text-coral'>FAQ</span>",
    faq_q1: "Wie funktioniert das Zusammenfügen im Browser?",
    faq_a1: "Die Seiten werden lokal in Ihrem Browser kopiert und zu einer neuen Datei gebündelt.",
    faq_q2: "Kann ich die Reihenfolge ändern?",
    faq_a2: "Ja! Nutzen Sie die Pfeiltasten (⬆️/⬇️) auf den Dateikarten.",
    faq_q3: "Gibt es ein Limit?",
    faq_a3: "Nein! Keine Einschränkungen.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Juntar Ficheiros <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Combine múltiplos documentos PDF num único ficheiro organizado diretamente no navegador.",
    drop_title: "Arraste e largue vários ficheiros PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiros PDF",
    drop_info: "Selecione vários ficheiros de uma vez. Processamento 100% local.",
    list_title: "Ficheiros a Juntar",
    list_count: "ficheiros selecionados",
    view_grid: "Grelha",
    view_list: "Lista",
    btn_add_more: "+ Adicionar Mais Ficheiros",
    btn_clear_all: "Limpar Tudo",
    btn_merge: "Juntar PDFs Agora",
    status_loading: "A carregar documentos PDF...",
    status_merging: "A combinar páginas num único documento...",
    status_done: "Junção Concluída!",
    res_title: "Resumo da Junção",
    res_files: "Ficheiros Juntados:",
    res_pages: "Total de Páginas:",
    res_size: "Tamanho Combinado:",
    btn_download: "Descarregar PDF Juntado",
    btn_reset: "Juntar Outros Ficheiros",
    faq_title: "Perguntas Frequentes de <span class='text-coral'>Junção</span>",
    faq_q1: "Como funciona a junção local?",
    faq_a1: "O SWIF PDF junta as páginas diretamente no seu navegador sem enviar dados para servidores.",
    faq_q2: "Posso alterar a ordem dos ficheiros?",
    faq_a2: "Sim! Use os botões Subir (⬆️) e Descer (⬇️) para reordenar.",
    faq_q3: "Existe limite de ficheiros?",
    faq_a3: "Não! Junte quantos ficheiros precisar.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Unisci File <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Combina più documenti PDF in un unico file ordinato direttamente nel browser.",
    drop_title: "Trascina e rilascia più file PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF",
    drop_info: "Seleziona più file insieme. Elaborazione 100% locale.",
    list_title: "File da Unire",
    list_count: "file selezionati",
    view_grid: "Griglia",
    view_list: "Elenco",
    btn_add_more: "+ Aggiungi Altri File",
    btn_clear_all: "Cancella Tutto",
    btn_merge: "Unisci PDF Ora",
    status_loading: "Caricamento e analisi dei documenti PDF...",
    status_merging: "Unione delle pagine in un unico file...",
    status_done: "Unione Completata!",
    res_title: "Riepilogo Unione",
    res_files: "File Uniti:",
    res_pages: "Pagine Totali:",
    res_size: "Dimensione Combinata:",
    btn_download: "Scarica PDF Unito",
    btn_reset: "Unisci Altri File",
    faq_title: "FAQ <span class='text-coral'>Unione</span>",
    faq_q1: "Come funziona l'unione nel browser?",
    faq_a1: "Le pagine vengono copiate ed elaborate localmente nel tuo browser.",
    faq_q2: "Posso modificare l'ordine dei file?",
    faq_a2: "Sì! Usa i pulsanti Su (⬆️) e Giù (⬇️) su ogni scheda file.",
    faq_q3: "Ci sono limiti di file?",
    faq_a3: "No! Puoi unire tutti i file che desideri.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Łączenie Plików <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Połącz kilka dokumentów PDF w jeden uporządkowany plik bezpośrednio w przeglądarce.",
    drop_title: "Przeciągnij i upuść pliki PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Pliki PDF",
    drop_info: "Wybierz wiele plików naraz. Przetwarzanie 100% lokalnie.",
    list_title: "Pliki do Połączenia",
    list_count: "wybranych plików",
    view_grid: "Siatka",
    view_list: "Lista",
    btn_add_more: "+ Dodaj Więcej Plików",
    btn_clear_all: "Wyczyść Wszystko",
    btn_merge: "Połącz PDF Teraz",
    status_loading: "Wczytywanie i analiza plików PDF...",
    status_merging: "Łączenie stron w jeden plik...",
    status_done: "Łączenie Zakończone!",
    res_title: "Podsumowanie Łączenia",
    res_files: "Połączonych Plików:",
    res_pages: "Razem Stron:",
    res_size: "Łączny Rozmiar:",
    btn_download: "Pobierz Połączony PDF",
    btn_reset: "Połącz Inne Pliki",
    faq_title: "FAQ <span class='text-coral'>Łączenia</span>",
    faq_q1: "Jak działa łączenie w przeglądarce?",
    faq_a1: "Strony są kopiowane i pakowane bezpośrednio na Twoim komputerze.",
    faq_q2: "Czy mogę zmienić kolejność plików?",
    faq_a2: "Tak! Użyj przycisków W górę (⬆️) i W dół (⬇️), aby ustalić kolejność.",
    faq_q3: "Czy są ograniczenia ilości plików?",
    faq_a3: "Nie! Możesz łączyć dowolną liczbę plików.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "دمج ملفات <span class='text-coral'>PDF</span> عبر الإنترنت",
    hero_subtitle: "اجمع عدة مستندات PDF في ملف واحد منظم مباشرة داخل متصفحك.",
    drop_title: "اسحب عدة ملفات PDF وأسقطها هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملفات PDF",
    drop_info: "اختر عدة ملفات دفعة واحدة. معالجة محلية 100% داخل المتصفح.",
    list_title: "الملفات المحددة للدمج",
    list_count: "ملفات محددة",
    view_grid: "شبكة",
    view_list: "قائمة",
    btn_add_more: "+ إضافة المزيد من الملفات",
    btn_clear_all: "مسح الكل",
    btn_merge: "بدء دمج ملفات PDF",
    status_loading: "جاري تحميل وتحليل بنية المستندات...",
    status_merging: "جاري تجميع الصفحات في مستند واحد...",
    status_done: "اكتمل الدمج بنجاح!",
    res_title: "ملخص عملية الدمج",
    res_files: "الملفات المدمجة:",
    res_pages: "إجمالي الصفحات:",
    res_size: "الحجم الإجمالي:",
    btn_download: "تحميل ملف PDF المدمج",
    btn_reset: "دمج ملفات أخرى",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>الدمج</span>",
    faq_q1: "كيف تعمل عملية الدمج داخل المتصفح؟",
    faq_a1: "يتم نسخ صفحات المستندات وتجميعها بالترتيب المحدد محلياً على جهازك بدون رفع الملفات.",
    faq_q2: "هل يمكنني تغيير ترتيب الملفات قبل الدمج؟",
    faq_a2: "نعم! يمكنك استخدام أسهم الترتيب لأعلى (⬆️) ولأسفل (⬇️) لضبط الترتيب بدقة.",
    faq_q3: "هل هناك حد لعدد الملفات؟",
    faq_a3: "لا! يمكنك دمج أي عدد من الملفات مجاناً.",
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

let currentLang = 'en';
let currentViewMode = 'list'; // 'list' or 'grid'
let fileQueue = []; // Array of { id, file, name, size, pageCount }
let mergedPdfBlob = null;
let mergedFileName = "swif-merged-document.pdf";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
  initViewToggle();
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

// View Toggle Logic (Grid vs List)
function initViewToggle() {
  const btnList = document.getElementById('btnViewList');
  const btnGrid = document.getElementById('btnViewGrid');

  if (btnList && btnGrid) {
    btnList.addEventListener('click', () => {
      setViewMode('list');
    });
    btnGrid.addEventListener('click', () => {
      setViewMode('grid');
    });
  }
}

function setViewMode(mode) {
  currentViewMode = mode;
  const btnList = document.getElementById('btnViewList');
  const btnGrid = document.getElementById('btnViewGrid');

  if (mode === 'grid') {
    btnGrid.classList.add('bg-[#22C55E]', 'text-white');
    btnGrid.classList.remove('bg-white', 'text-slate-600');
    btnList.classList.remove('bg-[#22C55E]', 'text-white');
    btnList.classList.add('bg-white', 'text-slate-600');
  } else {
    btnList.classList.add('bg-[#22C55E]', 'text-white');
    btnList.classList.remove('bg-white', 'text-slate-600');
    btnGrid.classList.remove('bg-[#22C55E]', 'text-white');
    btnGrid.classList.add('bg-white', 'text-slate-600');
  }

  renderFileList();
}

// Drag & Drop & Multi-File Select
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
      appendFilesToQueue(files);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      appendFilesToQueue(e.target.files);
    }
  });
}

// Append PDF Files to Queue
async function appendFilesToQueue(files) {
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    if (f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')) {
      let pages = 1;
      try {
        if (window.PDFLib) {
          const ab = await f.arrayBuffer();
          const doc = await PDFLib.PDFDocument.load(ab, { ignoreEncryption: true });
          pages = doc.getPageCount();
        }
      } catch (e) {
        console.warn("Could not read page count for", f.name);
      }

      fileQueue.push({
        id: 'pdf_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        file: f,
        name: f.name,
        size: f.size,
        pageCount: pages
      });
    }
  }

  if (fileQueue.length > 0) {
    document.getElementById('dropzoneSection').classList.add('hidden');
    document.getElementById('listSection').classList.remove('hidden');
    renderFileList();
  }
}

// Render File List Manager (Supports BOTH Grid & List Views)
function renderFileList() {
  const container = document.getElementById('fileListContainer');
  const countBadge = document.getElementById('lblFileCount');
  if (!container) return;

  container.innerHTML = '';
  if (countBadge) countBadge.innerText = `${fileQueue.length} ${translations[currentLang].list_count}`;

  if (currentViewMode === 'grid') {
    container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-1";

    fileQueue.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = "p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#22C55E] transition-all flex flex-col justify-between space-y-3 relative group";

      card.innerHTML = `
        <!-- Cover Preview Tile -->
        <div class="h-32 rounded-xl bg-[#F0FDF4] border border-emerald-100 flex flex-col items-center justify-center p-3 relative overflow-hidden">
          <span class="absolute top-2 left-2 w-6 h-6 rounded-md bg-[#22C55E] text-white font-black text-[11px] flex items-center justify-center shadow-sm">
            ${index + 1}
          </span>
          <div class="w-10 h-10 rounded-lg bg-white text-[#22C55E] flex items-center justify-center mb-1 shadow-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-[#22C55E] bg-white px-2 py-0.5 rounded-full shadow-sm">
            ${item.pageCount} ${item.pageCount === 1 ? 'Page' : 'Pages'}
          </span>
        </div>

        <!-- Details -->
        <div>
          <p class="text-xs font-bold text-slate-900 truncate" title="${escapeHtml(item.name)}">${escapeHtml(item.name)}</p>
          <p class="text-[11px] text-slate-500 font-medium">${formatBytes(item.size)}</p>
        </div>

        <!-- Controls Bar -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <div class="flex items-center gap-1">
            <!-- Move Left / Up Button -->
            <button onclick="moveFileUp(${index})" ${index === 0 ? 'disabled class="opacity-30 p-1.5 text-slate-400 cursor-not-allowed"' : 'class="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#22C55E] transition-colors"'} title="Move Left / Up">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <!-- Move Right / Down Button -->
            <button onclick="moveFileDown(${index})" ${index === fileQueue.length - 1 ? 'disabled class="opacity-30 p-1.5 text-slate-400 cursor-not-allowed"' : 'class="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#22C55E] transition-colors"'} title="Move Right / Down">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <!-- Delete Button -->
          <button onclick="removeFile(${index})" class="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors" title="Delete File">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      `;

      container.appendChild(card);
    });

  } else {
    // List View Layout
    container.className = "space-y-3 max-h-[500px] overflow-y-auto pr-1";

    fileQueue.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = "flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#22C55E] transition-all";

      card.innerHTML = `
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-8 h-8 rounded-lg bg-[#F0FDF4] text-[#22C55E] font-black text-xs flex items-center justify-center shrink-0">
            ${index + 1}
          </div>
          <div class="min-w-0">
            <p class="text-sm font-bold text-slate-900 truncate max-w-xs sm:max-w-md">${escapeHtml(item.name)}</p>
            <p class="text-[11px] text-slate-500 font-medium">${formatBytes(item.size)} &bull; ${item.pageCount} ${item.pageCount === 1 ? 'page' : 'pages'}</p>
          </div>
        </div>

        <div class="flex items-center gap-1.5 shrink-0">
          <!-- Move Up Button -->
          <button onclick="moveFileUp(${index})" ${index === 0 ? 'disabled class="opacity-30 p-2 text-slate-400 cursor-not-allowed"' : 'class="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#22C55E] transition-colors"'} title="Move Up">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
          </button>

          <!-- Move Down Button -->
          <button onclick="moveFileDown(${index})" ${index === fileQueue.length - 1 ? 'disabled class="opacity-30 p-2 text-slate-400 cursor-not-allowed"' : 'class="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#22C55E] transition-colors"'} title="Move Down">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>

          <!-- Delete Button -->
          <button onclick="removeFile(${index})" class="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors" title="Delete File">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      `;

      container.appendChild(card);
    });
  }

  if (window.lucide) lucide.createIcons();
}

// Reordering Logic
function moveFileUp(index) {
  if (index <= 0) return;
  const temp = fileQueue[index];
  fileQueue[index] = fileQueue[index - 1];
  fileQueue[index - 1] = temp;
  renderFileList();
}

function moveFileDown(index) {
  if (index >= fileQueue.length - 1) return;
  const temp = fileQueue[index];
  fileQueue[index] = fileQueue[index + 1];
  fileQueue[index + 1] = temp;
  renderFileList();
}

function removeFile(index) {
  fileQueue.splice(index, 1);
  if (fileQueue.length === 0) {
    resetMergeTool();
  } else {
    renderFileList();
  }
}

function clearAllFiles() {
  fileQueue = [];
  resetMergeTool();
}

// Client-Side PDF Merging Engine using pdf-lib
async function startPdfMerge() {
  if (fileQueue.length === 0) return;

  document.getElementById('listSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '15%';
  statusMsg.innerText = dict.status_loading;

  try {
    const { PDFDocument } = PDFLib;
    const mergedPdf = await PDFDocument.create();

    let totalMergedPages = 0;
    let totalBytes = 0;

    for (let i = 0; i < fileQueue.length; i++) {
      const item = fileQueue[i];
      const progressPercent = Math.floor(20 + ((i + 1) / fileQueue.length) * 70);
      progressBar.style.width = `${progressPercent}%`;
      statusMsg.innerText = `${dict.status_merging} (${i + 1}/${fileQueue.length})`;

      const ab = await item.file.arrayBuffer();
      totalBytes += item.file.size;

      const srcDoc = await PDFDocument.load(ab, { ignoreEncryption: true });
      const copiedPages = await mergedPdf.copyPages(srcDoc, srcDoc.getPageIndices());
      
      copiedPages.forEach(page => {
        mergedPdf.addPage(page);
        totalMergedPages++;
      });
    }

    progressBar.style.width = '95%';
    const mergedPdfBytes = await mergedPdf.save({ useObjectStreams: true });
    mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    mergedFileName = `swif-merged-${Date.now()}.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      renderMergeResults(fileQueue.length, totalMergedPages, mergedPdfBytes.byteLength);
    }, 500);

  } catch (err) {
    console.error("PDF Merging error:", err);
    alert("An error occurred while merging your PDF files. Please verify the files are valid PDFs.");
    resetMergeTool();
  }
}

// Render Results Dashboard
function renderMergeResults(filesCount, totalPages, finalSizeBytes) {
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');

  document.getElementById('resFilesCount').innerText = `${filesCount} PDFs`;
  document.getElementById('resTotalPages').innerText = `${totalPages} ${totalPages === 1 ? 'Page' : 'Pages'}`;
  document.getElementById('resFinalSize').innerText = formatBytes(finalSizeBytes);
}

// Download Merged PDF Blob
function downloadMergedPdf() {
  if (!mergedPdfBlob) return;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(mergedPdfBlob);
  link.download = mergedFileName || 'swif-merged-document.pdf';
  link.click();
}

// Reset Tool State
function resetMergeTool() {
  fileQueue = [];
  mergedPdfBlob = null;

  const fileInput = document.getElementById('fileInput');
  if (fileInput) fileInput.value = "";

  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('listSection').classList.add('hidden');
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

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
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
