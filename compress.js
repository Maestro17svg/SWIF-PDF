// SWIF PDF - Standalone PDF Compression Engine & i18n Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    
    hero_title: "Compress <span class='text-coral'>PDF</span> File Online",
    hero_subtitle: "Reduce PDF file size significantly directly in your web browser with 100% privacy.",
    
    drop_title: "Drag & drop your PDF file here",
    drop_or: "or",
    drop_btn: "Choose PDF File",
    drop_info: "Files are processed 100% locally on your computer. Zero server upload.",

    level_title: "Compression Level",
    level_rec: "Recommended Compression",
    level_rec_desc: "Optimal balance between size reduction and visual quality.",
    level_ext: "Extreme Compression",
    level_ext_desc: "Maximum file size reduction with acceptable quality.",
    level_low: "Low Compression",
    level_low_desc: "Minor reduction with highest resolution preservation.",

    btn_compress: "Compress PDF Now",

    status_analyzing: "Analyzing PDF streams & pages...",
    status_compressing: "Optimizing PDF objects & data streams...",
    status_done: "Compression Complete!",

    comp_title: "Compression Summary",
    comp_original: "Original Size:",
    comp_reduced: "Compressed Size:",
    comp_saved: "Total Reduction:",
    comp_filename: "File Name:",
    comp_pages: "Pages:",

    btn_download: "Download Compressed PDF",
    btn_reset: "Compress Another File",

    faq_title: "Compression <span class='text-coral'>FAQ</span>",
    faq_q1: "How does client-side PDF compression work?",
    faq_a1: "SWIF PDF uses WebAssembly and JS object stream compression to rebuild your PDF file structure locally inside your browser, stripping unnecessary data streams without uploading files to any external server.",
    faq_q2: "Will my PDF lose quality?",
    faq_a2: "Our recommended compression mode preserves text crispness and image clarity while removing redundant metadata and optimizing internal PDF streams.",
    faq_q3: "Is there any file size limit?",
    faq_a3: "No! Since processing runs on your local machine, you can compress files of any size for free.",

    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Compresser un fichier <span class='text-coral'>PDF</span> en ligne",
    hero_subtitle: "Réduisez significativement la taille de vos PDF directement dans votre navigateur en toute confidentialité.",
    drop_title: "Glissez & déposez votre fichier PDF ici",
    drop_or: "ou",
    drop_btn: "Choisir un fichier PDF",
    drop_info: "Traitement 100% local sur votre ordinateur. Zéro envoi sur serveur.",
    level_title: "Niveau de compression",
    level_rec: "Compression Recommandée",
    level_rec_desc: "Équilibre optimal entre réduction de taille et qualité visuelle.",
    level_ext: "Compression Extrême",
    level_ext_desc: "Réduction maximale de la taille de fichier.",
    level_low: "Compression Faible",
    level_low_desc: "Légère réduction en préservant la plus haute qualité.",
    btn_compress: "Compresser le PDF maintenant",
    status_analyzing: "Analyse des objets et des pages du PDF...",
    status_compressing: "Optimisation des flux de données du PDF...",
    status_done: "Compression terminée !",
    comp_title: "Résumé de la compression",
    comp_original: "Taille initiale :",
    comp_reduced: "Taille compressée :",
    comp_saved: "Réduction totale :",
    comp_filename: "Nom du fichier :",
    comp_pages: "Pages :",
    btn_download: "Télécharger le PDF compressé",
    btn_reset: "Compresser un autre fichier",
    faq_title: "Foire Aux Questions <span class='text-coral'>Compression</span>",
    faq_q1: "Comment fonctionne la compression côté client ?",
    faq_a1: "SWIF PDF réorganise et optimise la structure du PDF directement dans votre navigateur via WebAssembly et JS, éliminant les métadonnées inutiles sans téléverser vos fichiers.",
    faq_q2: "Le PDF va-t-il perdre en qualité ?",
    faq_a2: "Le mode recommandé préserve la netteté du texte et des images tout en éliminant les données redondantes.",
    faq_q3: "Y a-t-il une limite de taille ?",
    faq_a3: "Non ! Comme le traitement utilise la mémoire de votre ordinateur, vous pouvez compresser des fichiers sans limite de taille.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Comprimir Archivo <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Reduce el tamaño de tus PDF directamente en tu navegador con total privacidad.",
    drop_title: "Arrastra y suelta tu archivo PDF aquí",
    drop_or: "o",
    drop_btn: "Elegir Archivo PDF",
    drop_info: "Procesamiento 100% local en tu ordenador. Sin subir archivos.",
    level_title: "Nivel de Compresión",
    level_rec: "Compresión Recomendada",
    level_rec_desc: "Equilibrio óptimo entre reducción y calidad.",
    level_ext: "Compresión Extrema",
    level_ext_desc: "Máxima reducción del tamaño.",
    level_low: "Compresión Baja",
    level_low_desc: "Menor reducción con máxima resolución.",
    btn_compress: "Comprimir PDF Ahora",
    status_analyzing: "Analizando estructura del PDF...",
    status_compressing: "Optimizando objetos y datos del PDF...",
    status_done: "¡Compresión Completada!",
    comp_title: "Resumen de Compresión",
    comp_original: "Tamaño Inicial:",
    comp_reduced: "Tamaño Comprimido:",
    comp_saved: "Reducción Total:",
    comp_filename: "Nombre de Archivo:",
    comp_pages: "Páginas:",
    btn_download: "Descargar PDF Comprimido",
    btn_reset: "Comprimir Otro Archivo",
    faq_title: "Preguntas Frecuentes de <span class='text-coral'>Compresión</span>",
    faq_q1: "¿Cómo funciona la compresión en el navegador?",
    faq_a1: "SWIF PDF optimiza la estructura del archivo localmente en tu navegador sin enviar nada a servidores externos.",
    faq_q2: "¿Perderá calidad mi documento?",
    faq_a2: "El modo recomendado mantiene la nitidez del texto e imágenes.",
    faq_q3: "¿Hay límite de tamaño?",
    faq_a3: "¡No! Puedes procesar archivos sin límites.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Datei Online Komprimieren",
    hero_subtitle: "Reduzieren Sie die PDF-Dateigröße direkt im Browser mit 100% Datenschutz.",
    drop_title: "PDF-Datei hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "PDF-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung auf Ihrem Computer.",
    level_title: "Komprimierungsstufe",
    level_rec: "Empfohlene Komprimierung",
    level_rec_desc: "Optimales Verhältnis von Größe und Qualität.",
    level_ext: "Extreme Komprimierung",
    level_ext_desc: "Maximale Größenreduzierung.",
    level_low: "Geringe Komprimierung",
    level_low_desc: "Geringe Reduzierung bei höchster Qualität.",
    btn_compress: "Jetzt PDF Komprimieren",
    status_analyzing: "Analysiere PDF-Struktur...",
    status_compressing: "Optimiere Datenströme...",
    status_done: "Komprimierung Abgeschlossen!",
    comp_title: "Zusammenfassung",
    comp_original: "Ursprüngliche Größe:",
    comp_reduced: "Komprimierte Größe:",
    comp_saved: "Einsparung:",
    comp_filename: "Dateiname:",
    comp_pages: "Seiten:",
    btn_download: "Komprimiertes PDF Herunterladen",
    btn_reset: "Weitere Datei Komprimieren",
    faq_title: "Komprimierung <span class='text-coral'>FAQ</span>",
    faq_q1: "Wie funktioniert die lokale Komprimierung?",
    faq_a1: "SWIF PDF optimiert Objekte direkt in Ihrem Browser via JS & WebAssembly.",
    faq_q2: "Geht Qualität verloren?",
    faq_a2: "Die empfohlene Stufe behält Text- und Bildschärfe bei.",
    faq_q3: "Gibt es Größenbeschränkungen?",
    faq_a3: "Nein! Keine Limits.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Comprimir Ficheiro <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Reduza o tamanho do seu PDF diretamente no navegador com total privacidade.",
    drop_title: "Arraste e largue o seu PDF aqui",
    drop_or: "ou",
    drop_btn: "Escolher Ficheiro PDF",
    drop_info: "Processamento 100% local no seu computador.",
    level_title: "Nível de Compressão",
    level_rec: "Compressão Recomendada",
    level_rec_desc: "Equilíbrio ideal entre tamanho e qualidade.",
    level_ext: "Compressão Extrema",
    level_ext_desc: "Redução máxima do tamanho.",
    level_low: "Compressão Baixa",
    level_low_desc: "Menor redução mantendo resolução máxima.",
    btn_compress: "Comprimir PDF Agora",
    status_analyzing: "A analisar ficheiro PDF...",
    status_compressing: "A otimizar estrutura e objetos...",
    status_done: "Compressão Concluída!",
    comp_title: "Resumo da Compressão",
    comp_original: "Tamanho Inicial:",
    comp_reduced: "Tamanho Comprimido:",
    comp_saved: "Redução Total:",
    comp_filename: "Nome do Ficheiro:",
    comp_pages: "Páginas:",
    btn_download: "Descarregar PDF Comprimido",
    btn_reset: "Comprimir Outro Ficheiro",
    faq_title: "Perguntas Frequentes de <span class='text-coral'>Compressão</span>",
    faq_q1: "Como funciona a compressão no navegador?",
    faq_a1: "O SWIF PDF otimiza a estrutura do ficheiro localmente no seu navegador.",
    faq_q2: "Vou perder qualidade?",
    faq_a2: "O modo recomendado mantém a nitidez dos textos e imagens.",
    faq_q3: "Existe limite de tamanho?",
    faq_a3: "Não! Sem limites de tamanho.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Comprimi File <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Riduci le dimensioni dei tuoi PDF direttamente nel browser in totale privacy.",
    drop_title: "Trascina e rilascia il tuo PDF qui",
    drop_or: "o",
    drop_btn: "Scegli File PDF",
    drop_info: "Elaborazione 100% locale sul tuo computer.",
    level_title: "Livello di Compressione",
    level_rec: "Compressione Consigliata",
    level_rec_desc: "Bilanciamento ottimale tra dimensioni e qualità.",
    level_ext: "Compressione Estrema",
    level_ext_desc: "Massima riduzione delle dimensioni.",
    level_low: "Compressione Bassa",
    level_low_desc: "Piccola riduzione con qualità massima.",
    btn_compress: "Comprimi PDF Ora",
    status_analyzing: "Analisi della struttura del PDF...",
    status_compressing: "Ottimizzazione dei dati in corso...",
    status_done: "Compressione Completata!",
    comp_title: "Riepilogo Compressione",
    comp_original: "Dimensione Iniziale:",
    comp_reduced: "Dimensione Compressa:",
    comp_saved: "Riduzione Totale:",
    comp_filename: "Nome File:",
    comp_pages: "Pagine:",
    btn_download: "Scarica PDF Compresso",
    btn_reset: "Comprimi Un Altro File",
    faq_title: "FAQ <span class='text-coral'>Compressione</span>",
    faq_q1: "Come funziona la compressione locale?",
    faq_a1: "Il file viene riorganizzato ed elaborato nel tuo browser tramite JS.",
    faq_q2: "Ci sarà perdita di qualità?",
    faq_a2: "La modalità consigliata mantiene il testo chiaro ed nitido.",
    faq_q3: "Ci sono limiti di dimensione?",
    faq_a3: "No! Nessun limite di dimensione.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Kompresuj Plik <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Zmniejsz rozmiar pliku PDF bezpośrednio w przeglądarce w zachowaniem pełnej prywatności.",
    drop_title: "Przeciągnij i upuść plik PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF",
    drop_info: "Przetwarzanie 100% lokalnie na Twoim komputerze.",
    level_title: "Poziom Kompresji",
    level_rec: "Zalecana Kompresja",
    level_rec_desc: "Optymalna równowaga między rozmiarem a jakością.",
    level_ext: "Ekstremalna Kompresja",
    level_ext_desc: "Maksymalne zmniejszenie rozmiaru.",
    level_low: "Niska Kompresja",
    level_low_desc: "Niewielkie zmniejszenie z najwyższą jakością.",
    btn_compress: "Kompresuj PDF Teraz",
    status_analyzing: "Analizowanie struktury pliku PDF...",
    status_compressing: "Optymalizowanie obiektów...",
    status_done: "Kompresja Zakończona!",
    comp_title: "Podsumowanie Kompresji",
    comp_original: "Rozmiar Początkowy:",
    comp_reduced: "Rozmiar Po Kompresji:",
    comp_saved: "Całkowita Redukcja:",
    comp_filename: "Nazwa Pliku:",
    comp_pages: "Strony:",
    btn_download: "Pobierz Skompresowany PDF",
    btn_reset: "Kompresuj Inny Plik",
    faq_title: "FAQ <span class='text-coral'>Kompresji</span>",
    faq_q1: "Jak działa kompresja w przeglądarce?",
    faq_a1: "Struktura PDF jest optymalizowana bezpośrednio na Twoim urządzeniu.",
    faq_q2: "Czy jakość ulegnie pogorszeniu?",
    faq_a2: "Zalecany tryb zachowuje pełną czytelność tekstu i grafik.",
    faq_q3: "Czy są ograniczenia rozmiaru?",
    faq_a3: "Nie! Brak jakichkolwiek limitów.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "ضغط ملفات <span class='text-coral'>PDF</span> عبر الإنترنت",
    hero_subtitle: "قلل حجم ملف PDF مباشرة في متصفحك بأعلى مستويات الخصوصية.",
    drop_title: "اسحب ملف PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF",
    drop_info: "معالجة محلية 100% على جهازك بدون رفع الملفات.",
    level_title: "مستوى الضغط",
    level_rec: "ضغط موصى به",
    level_rec_desc: "توازن مثالي بين حجم الملف وجودته.",
    level_ext: "ضغط أقصى",
    level_ext_desc: "أكبر تخفيض ممكن للحجم.",
    level_low: "ضغط خفيف",
    level_low_desc: "تقليل بسيط مع الحفاظ على أعلى جودة.",
    btn_compress: "بدء ضغط PDF الآن",
    status_analyzing: "جاري تحليل صفحات وبنية المستند...",
    status_compressing: "جاري تحسين ضغط البيانات والكائنات...",
    status_done: "اكتمل الضغط بنجاح!",
    comp_title: "ملخص نتائج الضغط",
    comp_original: "الحجم الأصلي:",
    comp_reduced: "الحجم بعد الضغط:",
    comp_saved: "نسبة التخفيض:",
    comp_filename: "اسم الملف:",
    comp_pages: "عدد الصفحات:",
    btn_download: "تحميل ملف PDF المضغوط",
    btn_reset: "ضغط ملف آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>الضغط</span>",
    faq_q1: "كيف تعمل عملية الضغط في المتصفح؟",
    faq_a1: "يتم تحسين بنية المستند محلياً داخل جهازك باستخدام JavaScript وWebAssembly.",
    faq_q2: "هل سيفقد المستند جودته؟",
    faq_a2: "النمط الموصى به يحافظ على وضوح النصوص والدقة مع حذف البيانات غير الضرورية.",
    faq_q3: "هل هناك حد لحجم الملف؟",
    faq_a3: "لا! يمكنك ضغط أي ملف بأي حجم مجاناً.",
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
let selectedFile = null;
let compressedPdfBlob = null;
let compressedPdfFileName = "";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
  initCompressionLevels();
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
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  const langMenu = document.getElementById('langDropdownMenu');
  if (langMenu) langMenu.classList.add('hidden');
}

// Drag & Drop & File Select
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
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    alert("Please select a valid PDF file.");
    return;
  }

  selectedFile = file;

  // Show Selected File info & Settings Card
  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('settingsSection').classList.remove('hidden');

  document.getElementById('lblFileName').innerText = file.name;
  document.getElementById('lblOriginalSizeHeader').innerText = formatBytes(file.size);
}

// Compression Level Selection Cards
function initCompressionLevels() {
  const levelCards = document.querySelectorAll('.level-card');
  levelCards.forEach(card => {
    card.addEventListener('click', () => {
      levelCards.forEach(c => c.classList.remove('border-[#22C55E]', 'ring-2', 'ring-emerald-500/20', 'bg-[#F0FDF4]'));
      card.classList.add('border-[#22C55E]', 'ring-2', 'ring-emerald-500/20', 'bg-[#F0FDF4]');
      card.querySelector('input[type="radio"]').checked = true;
    });
  });
}

// High-Efficiency Aggressive PDF Compression Processor (Targeted XObject Image Engine + Object Streams)
async function startPdfCompression() {
  if (!selectedFile) return;

  const levelRadio = document.querySelector('input[name="compLevel"]:checked')?.value || 'recommended';

  // Show Progress Card
  document.getElementById('settingsSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang] || translations.fr;

  progressBar.style.width = '10%';
  statusMsg.innerText = dict.status_analyzing || "Analyse du PDF et des images incorporées...";

  // Quality & Scale settings based on selected level
  let jpegQuality = 0.60;
  let maxDimension = 1600;

  if (levelRadio === 'extreme') {
    jpegQuality = 0.45;
    maxDimension = 1200;
  } else if (levelRadio === 'low') {
    jpegQuality = 0.72;
    maxDimension = 2000;
  }

  try {
    const arrayBuffer = await selectedFile.arrayBuffer();
    const originalBytesLength = arrayBuffer.byteLength;

    let bestBytes = null;
    let totalPages = 1;

    if (window.PDFLib) {
      const { PDFDocument, PDFName } = PDFLib;

      // Load main PDF document
      const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      totalPages = pdfDoc.getPageCount();
      document.getElementById('resPageCount').innerText = totalPages;

      const pages = pdfDoc.getPages();
      const processedRefKeys = new Set();

      // Traverse all pages and inspect XObject resources for embedded images
      for (let i = 0; i < pages.length; i++) {
        const pct = Math.round(15 + ((i + 1) / pages.length) * 70);
        progressBar.style.width = `${pct}%`;
        statusMsg.innerText = `${dict.status_compressing || "Compression du PDF..."} (${i + 1}/${pages.length})`;

        // Yield main thread periodically on long documents (like 282 pages)
        if (i % 5 === 0) {
          await new Promise(r => setTimeout(r, 0));
        }

        try {
          const page = pages[i];
          const { node } = page;
          const resources = node ? node.Resources() : null;

          if (resources) {
            const xObject = resources.get(PDFName.of('XObject'));
            if (xObject) {
              const xObjectDict = pdfDoc.context.lookup(xObject);
              if (xObjectDict && xObjectDict.entries) {
                const entries = xObjectDict.entries();

                for (const [key, ref] of entries) {
                  try {
                    const refKey = ref ? ref.toString() : null;
                    if (refKey && processedRefKeys.has(refKey)) continue;
                    if (refKey) processedRefKeys.add(refKey);

                    const xSubObject = pdfDoc.context.lookup(ref);
                    if (!xSubObject || !xSubObject.dict) continue;

                    const subtype = xSubObject.dict.get(PDFName.of('Subtype'));
                    if (subtype === PDFName.of('Image')) {
                      const width = xSubObject.dict.get(PDFName.of('Width'))?.numberValue || 800;
                      const height = xSubObject.dict.get(PDFName.of('Height'))?.numberValue || 600;
                      const filter = xSubObject.dict.get(PDFName.of('Filter'));

                      let jpegBytes = null;
                      const isDCT = filter === PDFName.of('DCTDecode') || (Array.isArray(filter?.array) && filter.array.includes(PDFName.of('DCTDecode')));

                      if (isDCT && xSubObject.contents && width <= maxDimension && height <= maxDimension && jpegQuality >= 0.70) {
                        continue; // Skip already optimal JPEG image
                      }

                      // Re-encode image XObject into compressed JPEG stream
                      if (xSubObject.contents) {
                        jpegBytes = await recompressImageStreamToJpeg(xSubObject.contents, isDCT, width, height, maxDimension, jpegQuality);
                      }

                      if (jpegBytes && jpegBytes.byteLength > 0 && jpegBytes.byteLength < (xSubObject.contents?.byteLength || Infinity)) {
                        const newJpg = await pdfDoc.embedJpg(jpegBytes);
                        pdfDoc.context.assign(ref, newJpg.ref);
                      }
                    }
                  } catch (imgErr) {
                    console.warn(`Skipping uncompressed XObject image on page ${i + 1}:`, imgErr);
                  }
                }
              }
            }
          }
        } catch (pageErr) {
          console.warn(`Error inspecting resources on page ${i + 1}:`, pageErr);
        }
      }

      // Compact object streams & metadata for 282+ page documents
      progressBar.style.width = '90%';
      statusMsg.innerText = "Finalisation de la structure PDF et compactage des métadonnées...";

      bestBytes = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
        updateFieldAppearances: false
      });
    }

    // SAFETY FALLBACK RULE:
    // If the compressed output size is greater than or equal to original size,
    // KEEP THE ORIGINAL FILE intact so size never inflates!
    let isAlreadyOptimized = false;
    if (!bestBytes || bestBytes.byteLength >= originalBytesLength) {
      bestBytes = new Uint8Array(arrayBuffer);
      isAlreadyOptimized = true;
    }

    compressedPdfBlob = new Blob([bestBytes], { type: 'application/pdf' });
    compressedPdfFileName = `swif-compressed-${selectedFile.name}`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done || "PDF compressé prêt !";

    setTimeout(() => {
      renderBeforeAfterResults(originalBytesLength, bestBytes.byteLength, selectedFile.name, isAlreadyOptimized);
    }, 400);

  } catch (err) {
    console.error("PDF Processing error:", err);
    compressedPdfBlob = new Blob([selectedFile], { type: 'application/pdf' });
    compressedPdfFileName = `swif-compressed-${selectedFile.name}`;
    renderBeforeAfterResults(selectedFile.size, selectedFile.size, selectedFile.name, true);
  }
}

// Helper: Re-compress raw image stream bytes into a compressed JPEG Uint8Array
async function recompressImageStreamToJpeg(rawBytes, isDCT, origWidth, origHeight, maxDimension, quality) {
  try {
    let imgBlob = null;
    if (isDCT) {
      imgBlob = new Blob([rawBytes], { type: 'image/jpeg' });
    } else {
      imgBlob = new Blob([rawBytes], { type: 'image/png' });
    }

    const imgUrl = URL.createObjectURL(imgBlob);
    const img = new Image();

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = imgUrl;
    });

    const w = img.width || origWidth;
    const h = img.height || origHeight;

    let targetW = w;
    let targetH = h;

    if (w > maxDimension || h > maxDimension) {
      if (w > h) {
        targetW = maxDimension;
        targetH = Math.round((h / w) * maxDimension);
      } else {
        targetH = maxDimension;
        targetW = Math.round((w / h) * maxDimension);
      }
    }

    const canvas = document.createElement('canvas');
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, targetW, targetH);

    URL.revokeObjectURL(imgUrl);

    const jpegDataUrl = canvas.toDataURL('image/jpeg', quality);
    const base64Data = jpegDataUrl.split(',')[1];
    const compressedBytes = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

    // Release canvas memory
    canvas.width = 0;
    canvas.height = 0;

    return compressedBytes;
  } catch (err) {
    console.warn("recompressImageStreamToJpeg fallback failed:", err);
    return null;
  }
}

// Before / After Comparison Dashboard Rendering
function renderBeforeAfterResults(originalSize, compressedSize, fileName, isAlreadyOptimized = false) {
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');
  document.getElementById('resultSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const savedBytes = Math.max(0, originalSize - compressedSize);
  const percentageSaved = originalSize > 0 ? Math.round((savedBytes / originalSize) * 100) : 0;

  document.getElementById('resOriginalSize').innerText = formatBytes(originalSize);
  document.getElementById('resCompressedSize').innerText = formatBytes(compressedSize);
  document.getElementById('resFileName').innerText = fileName;

  const badgeEl = document.getElementById('resSavingsBadge');
  if (isAlreadyOptimized || percentageSaved <= 0) {
    badgeEl.className = "px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 font-extrabold text-xs sm:text-sm border border-slate-200";
    badgeEl.innerText = `0% - Fichier Déjà Optimisé`;
  } else {
    badgeEl.className = "px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs sm:text-sm";
    badgeEl.innerText = `-${percentageSaved}% Réduit`;
  }
}

// Mobile-Compatible PDF Download Handler
function downloadCompressedPdf() {
  if (!compressedPdfBlob) return;
  const url = URL.createObjectURL(compressedPdfBlob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = compressedPdfFileName || 'compressed-document.pdf';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    if (document.body.contains(link)) {
      document.body.removeChild(link);
    }
    URL.revokeObjectURL(url);
  }, 1000);
}

// Reset Tool State
function resetCompressTool() {
  selectedFile = null;
  compressedPdfBlob = null;
  compressedPdfFileName = "";

  document.getElementById('fileInput').value = "";
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('settingsSection').classList.add('hidden');
  document.getElementById('dropzoneSection').classList.remove('hidden');
}

// Utility: Bytes Formatter
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
