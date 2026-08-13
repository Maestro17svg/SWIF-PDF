// SWIF PDF - Interactive 3D Flipbook Reader Engine
// 100% Client-Side Local PDF Processing & PageFlip 3D Renderer

// ==================== INTERNATIONALIZATION (i18n) ====================
const translations = {
  fr: {
    header_sub: "Lecteur Flipbook 3D",
    nav_home: "Retour à l'accueil",
    nav_tools: "Outils PDF",
    nav_about: "À propos",
    nav_login: "Se connecter",
    hero_title: "Lecteur Flipbook <span class='text-[#22C55E]'>3D</span> PDF",
    hero_subtitle: "Transformez n'importe quel document PDF en livre ou magazine virtuel interactif avec animation réaliste de tournage de page 3D.",
    drop_title: "Glissez & déposez votre fichier PDF ici",
    drop_or: "ou",
    drop_btn: "Choisir un fichier PDF",
    btn_sample: "Tester avec un exemple",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun document n'est envoyé sur un serveur.",
    loading_text: "Génération du Flipbook 3D en cours...",
    btn_change: "Changer de PDF",
    btn_prev: "Précédent",
    btn_next: "Suivant",
    page_label: "Page",
    hint_flip: "Cliquez sur les coins ou utilisez les flèches du clavier (← / →) pour tourner les pages.",
    feat_1_title: "Animation 3D Réaliste",
    feat_1_desc: "Algorithme de pliage et d'ombrage 3D simulant avec précision le toucher et la courbure d'un livre physique.",
    feat_2_title: "Rendu HD & Traitement Local",
    feat_2_desc: "Rendu ultra net vectoriel direct par PDF.js. Tout s'exécute dans votre navigateur sans téléverser vos fichiers.",
    feat_3_title: "Contrôles Complets & Tactiles",
    feat_3_desc: "Geste de glisser tactile sur mobile, mode plein écran, zoom interactif et bruitage réaliste de papier synthétisé.",
    faq_title: "Foire Aux <span class='text-[#22C55E]'>Questions</span>",
    faq_q1: "Qu'est-ce que le lecteur Flipbook 3D SWIF PDF ?",
    faq_a1: "C'est un outil interactif qui transforme vos fichiers PDF statiques en livres virtuels animés en 3D. Vous pouvez tourner les pages en les faisant glisser ou en cliquant sur les coins.",
    faq_q2: "Mes documents sont-ils confidentiels ?",
    faq_a2: "Oui, à 100%. Le rendu et la conversion sous forme de flipbook s'effectuent directement dans la mémoire de votre navigateur via PDF.js. Aucun fichier ne quitte votre appareil.",
    faq_q3: "Fonctionne-t-il sur mobile et tablette ?",
    faq_a3: "Absolument. Le Flipbook s'adapte automatiquement à la taille de votre écran et prend en charge le balayage tactile.",
    footer_desc: "La plateforme de gestion PDF rapide, sécurisée et 100% gratuite.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  en: {
    header_sub: "3D Flipbook Reader",
    nav_home: "Back to Home",
    nav_tools: "PDF Tools",
    nav_about: "About Us",
    nav_login: "Sign In",
    hero_title: "Interactive 3D <span class='text-[#22C55E]'>Flipbook</span> Reader",
    hero_subtitle: "Turn any PDF document into an interactive virtual 3D book or magazine with realistic page turning animations.",
    drop_title: "Drag & drop your PDF file here",
    drop_or: "or",
    drop_btn: "Choose PDF File",
    btn_sample: "Try with Sample PDF",
    drop_info: "100% local browser processing. Zero server upload.",
    loading_text: "Generating 3D Flipbook pages...",
    btn_change: "Change PDF",
    btn_prev: "Previous",
    btn_next: "Next",
    page_label: "Page",
    hint_flip: "Click page corners or use arrow keys (← / →) to flip pages.",
    feat_1_title: "Realistic 3D Animation",
    feat_1_desc: "Precise 3D mesh bending and dynamic shadow algorithms simulating paper feel and curvature.",
    feat_2_title: "HD Crisp Local Rendering",
    feat_2_desc: "High DPI vector rendering powered by PDF.js. Everything runs inside your browser memory.",
    feat_3_title: "Full Controls & Touch Ready",
    feat_3_desc: "Mobile swipe gestures, fullscreen mode, interactive zoom, and realistic synthesized paper sounds.",
    faq_title: "Frequently Asked <span class='text-[#22C55E]'>Questions</span>",
    faq_q1: "What is SWIF PDF 3D Flipbook Reader?",
    faq_a1: "It is an interactive web utility that converts static PDFs into realistic 3D animated flipbooks you can browse like a physical magazine.",
    faq_q2: "Are my PDF files safe?",
    faq_a2: "Yes, 100%. All processing and page rendering happens client-side inside your browser. No files are uploaded to any server.",
    faq_q3: "Does it work on smartphones and tablets?",
    faq_a3: "Yes! The 3D Flipbook is fully responsive and supports touch drag and swipe gestures on mobile devices.",
    footer_desc: "Fast, secure, and 100% free browser PDF platform.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  es: {
    header_sub: "Lector Flipbook 3D",
    nav_home: "Volver al inicio",
    nav_tools: "Herramientas PDF",
    nav_about: "Acerca de",
    nav_login: "Iniciar sesión",
    hero_title: "Lector Flipbook <span class='text-[#22C55E]'>3D</span> PDF",
    hero_subtitle: "Convierta cualquier documento PDF en un libro o revista virtual 3D interactivo con animación realista de paso de página.",
    drop_title: "Arrastre y suelte su archivo PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar archivo PDF",
    btn_sample: "Probar con ejemplo",
    drop_info: "Procesamiento 100% local en su navegador. Sin carga a servidores.",
    loading_text: "Generando páginas 3D...",
    btn_change: "Cambiar PDF",
    btn_prev: "Anterior",
    btn_next: "Siguiente",
    page_label: "Página",
    hint_flip: "Haga clic en las esquinas o use las flechas del teclado (← / →) para pasar páginas.",
    feat_1_title: "Animación 3D Realista",
    feat_1_desc: "Algoritmo 3D de sombras y curva de papel que simula una revista física.",
    feat_2_title: "Renderizado HD Local",
    feat_2_desc: "Imágenes de alta resolución generadas con PDF.js sin salir de su ordenador.",
    feat_3_title: "Controles Completos y Táctiles",
    feat_3_desc: "Gestos en móviles, pantalla completa, zoom y sonido de papel sintetizado.",
    faq_title: "Preguntas <span class='text-[#22C55E]'>Frecuentes</span>",
    faq_q1: "¿Qué es el lector Flipbook 3D?",
    faq_a1: "Es una herramienta interactiva para leer documentos PDF en formato de libro 3D.",
    faq_q2: "¿Mis archivos son privados?",
    faq_a2: "Sí, 100%. Todo el procesamiento es local en su navegador.",
    faq_q3: "¿Funciona en teléfonos y tabletas?",
    faq_a3: "Sí, es completamente compatible con pantallas táctiles.",
    footer_desc: "Plataforma PDF rápida, segura y 100% gratuita.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    header_sub: "3D-Flipbook-Reader",
    nav_home: "Zurück zur Startseite",
    nav_tools: "PDF-Werkzeuge",
    nav_about: "Über uns",
    nav_login: "Anmelden",
    hero_title: "Interaktiver 3D <span class='text-[#22C55E]'>Flipbook</span> Reader",
    hero_subtitle: "Verwandeln Sie jedes PDF-Dokument in ein virtuelles 3D-Buch mit realistischer Blätteranimation.",
    drop_title: "Ziehen Sie Ihre PDF-Datei hierher",
    drop_or: "oder",
    drop_btn: "PDF-Datei auswählen",
    btn_sample: "Mit Beispiel testen",
    drop_info: "100% lokale Verarbeitung im Browser. Kein Server-Upload.",
    loading_text: "3D-Seiten werden erstellt...",
    btn_change: "PDF ändern",
    btn_prev: "Zurück",
    btn_next: "Weiter",
    page_label: "Seite",
    hint_flip: "Klicken Sie auf die Ecken oder nutzen Sie die Pfeiltasten zum Umblättern.",
    feat_1_title: "Realistische 3D-Animation",
    feat_1_desc: "Präzises Umblättern mit echten Schatteneffekten.",
    feat_2_title: "HD-Rendering & Datenschutz",
    feat_2_desc: "Verarbeitung direkt im Browser ohne Datenübertragung.",
    feat_3_title: "Vollbild & Touch-Steuerung",
    feat_3_desc: "Unterstützt Wischgesten auf Mobilgeräten und Soundeffekte.",
    faq_title: "Häufig gestellte <span class='text-[#22C55E]'>Fragen</span>",
    faq_q1: "Was ist der SWIF PDF 3D Flipbook Reader?",
    faq_a1: "Ein Online-Tool zur interaktiven 3D-Anzeige von PDFs.",
    faq_q2: "Sind meine Dateien sicher?",
    faq_a2: "Ja, alle Daten verbleiben auf Ihrem lokalen Gerät.",
    faq_q3: "Funktioniert es auf Smartphones?",
    faq_a3: "Ja, volles Touch-Feedback auf allen mobilen Geräten.",
    footer_desc: "Die schnelle, sichere und 100% kostenlose PDF-Plattform.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    header_sub: "Leitor Flipbook 3D",
    nav_home: "Voltar ao início",
    nav_tools: "Ferramentas PDF",
    nav_about: "Sobre nós",
    nav_login: "Entrar",
    hero_title: "Leitor Flipbook <span class='text-[#22C55E]'>3D</span> PDF",
    hero_subtitle: "Transforme qualquer PDF em um livro 3D interativo com páginas virtuais realistas.",
    drop_title: "Arraste e solte seu arquivo PDF aqui",
    drop_or: "ou",
    drop_btn: "Escolher arquivo PDF",
    btn_sample: "Testar com exemplo",
    drop_info: "Processamento 100% local no seu navegador.",
    loading_text: "Gerando páginas 3D...",
    btn_change: "Mudar PDF",
    btn_prev: "Anterior",
    btn_next: "Próximo",
    page_label: "Página",
    hint_flip: "Clique nas pontas ou use as setas do teclado para folhear.",
    feat_1_title: "Animação 3D Realista",
    feat_1_desc: "Efeito 3D com sombras dinâmicas estilo revista física.",
    feat_2_title: "Renderização HD Local",
    feat_2_desc: "Renderização nativa por PDF.js sem upload de servidor.",
    feat_3_title: "Controles Completos",
    feat_3_desc: "Suporte a touch mobile, tela cheia e som de papel.",
    faq_title: "Perguntas <span class='text-[#22C55E]'>Frequentes</span>",
    faq_q1: "O que é o leitor Flipbook 3D?",
    faq_a1: "Ferramenta para visualizar PDFs como livros 3D interativos.",
    faq_q2: "Meus arquivos estão seguros?",
    faq_a2: "Sim, 100% processado localmente no dispositivo.",
    faq_q3: "Funciona em celulares?",
    faq_a3: "Sim, com navegação por gestos de toque.",
    footer_desc: "Plataforma PDF rápida, segura e 100% gratuita.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    header_sub: "Lettore Flipbook 3D",
    nav_home: "Torna alla home",
    nav_tools: "Strumenti PDF",
    nav_about: "Chi siamo",
    nav_login: "Accedi",
    hero_title: "Lettore Flipbook <span class='text-[#22C55E]'>3D</span> PDF",
    hero_subtitle: "Trasforma qualsiasi PDF in un libro 3D interattivo con sfoglio pagine reale.",
    drop_title: "Trascina qui il tuo file PDF",
    drop_or: "o",
    drop_btn: "Scegli file PDF",
    btn_sample: "Prova con un esempio",
    drop_info: "Elaborazione 100% locale nel browser.",
    loading_text: "Generazione pagine 3D in corso...",
    btn_change: "Cambia PDF",
    btn_prev: "Precedente",
    btn_next: "Successivo",
    page_label: "Pagina",
    hint_flip: "Clicca sugli angoli o usa le frecce della tastiera.",
    feat_1_title: "Animazione 3D Reale",
    feat_1_desc: "Effetto sfoglio 3D con ombreggiature dinamiche.",
    feat_2_title: "Resa HD e Privacy",
    feat_2_desc: "Renderizzato con PDF.js direttamente sul tuo dispositivo.",
    feat_3_title: "Controlli Completi",
    feat_3_desc: "Touch screen, schermo intero e suoni di carta sintetizzati.",
    faq_title: "Domande <span class='text-[#22C55E]'>Frequenti</span>",
    faq_q1: "Cos'è il lettore Flipbook 3D?",
    faq_a1: "Strumento per leggere PDF in modalità libro 3D.",
    faq_q2: "I miei file sono sicuri?",
    faq_a2: "Sì, 100% privato e locale.",
    faq_q3: "Funziona su smartphone?",
    faq_a3: "Sì, ottimizzato per schermi touch.",
    footer_desc: "Piattaforma PDF veloce, sicura e gratuita.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    header_sub: "Czytnik Flipbook 3D",
    nav_home: "Strona główna",
    nav_tools: "Narzędzia PDF",
    nav_about: "O nas",
    nav_login: "Zaloguj się",
    hero_title: "Czytnik Flipbook <span class='text-[#22C55E]'>3D</span> PDF",
    hero_subtitle: "Zmień dowolny plik PDF w interaktywną książkę 3D z realistycznym przewracaniem stron.",
    drop_title: "Przeciągnij i upuść plik PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz plik PDF",
    btn_sample: "Wypróbuj przykład",
    drop_info: "100% lokalne przetwarzanie w przeglądarce.",
    loading_text: "Generowanie stron 3D...",
    btn_change: "Zmień PDF",
    btn_prev: "Poprzednia",
    btn_next: "Następna",
    page_label: "Strona",
    hint_flip: "Klikaj rogi stron lub używaj strzałek klawiatury.",
    feat_1_title: "Realistyczna Animacja 3D",
    feat_1_desc: "Efekt zagięcia i cieniowania strony.",
    feat_2_title: "Renderowanie HD i Prywatność",
    feat_2_desc: "Brak wysyłania plików na serwery.",
    feat_3_title: "Pełna Kontrola",
    feat_3_desc: "Tryb pełnoekranowy, gesty dotykowe i dźwięk papieru.",
    faq_title: "Często Zadawane <span class='text-[#22C55E]'>Pytania</span>",
    faq_q1: "Czym jest czytnik Flipbook 3D?",
    faq_a1: "Narzędzie do interaktywnego przeglądania PDF jako książki 3D.",
    faq_q2: "Czy moje pliki są bezpieczne?",
    faq_a2: "Tak, w 100% przetwarzane lokalnie.",
    faq_q3: "Czy działa na telefonach?",
    faq_a3: "Tak, pełne wsparcie gestów dotykowych.",
    footer_desc: "Szybka i bezpieczna darmowa platforma PDF.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    header_sub: "قارئ الكتب ثلاثي الأبعاد",
    nav_home: "الرئيسية",
    nav_tools: "أدوات PDF",
    nav_about: "حول",
    nav_login: "تسجيل الدخول",
    hero_title: "قارئ PDF <span class='text-[#22C55E]'>ثلاثي الأبعاد</span> التفاعلي",
    hero_subtitle: "حول أي مستند PDF إلى كتاب أو مجلة ثلاثية الأبعاد تفاعلية مع حركات تقليب صفحات واقعية.",
    drop_title: "اسحب وأسقط ملف PDF هنا",
    drop_or: "أو",
    drop_btn: "اختر ملف PDF",
    btn_sample: "جرب ملف نموذج",
    drop_info: "معالجة محلياً 100% داخل متصفحك. بدون رفع للملفات.",
    loading_text: "جاري إنشاء الصفحات ثلاثية الأبعاد...",
    btn_change: "تغيير الملف",
    btn_prev: "السابق",
    btn_next: "التالي",
    page_label: "صفحة",
    hint_flip: "انقر على الزوايا أو استخدم أسهم الكيبورد لتقليب الصفحات.",
    feat_1_title: "حركة 3D واقعية",
    feat_1_desc: "محاكاة انحناء الظلال والورق بدقة 3D عالية.",
    feat_2_title: "عرض HD ومعالجة محلية",
    feat_2_desc: "عرض نقي جداً بواسطة PDF.js مع خصوصية كاملة.",
    feat_3_title: "تحكم كامل ولمس",
    feat_3_desc: "دعم الشاشات اللمسية وتكبير تفاعلي وصوت تقليب الورق.",
    faq_title: "الأسئلة <span class='text-[#22C55E]'>الشاعرية</span>",
    faq_q1: "ما هو قارئ Flipbook 3D؟",
    faq_a1: "أداة لتصفح ملفات PDF ككتب ثلاثية الأبعاد تفاعلية.",
    faq_q2: "هل ملفاتي آمنة؟",
    faq_a2: "نعم 100% المعالجة تتم محلياً دون رفع.",
    faq_q3: "هل يعمل على الهواتف؟",
    faq_a3: "نعم متوافق تماماً مع الهواتف والأجهزة اللوحية.",
    footer_desc: "منصة PDF سريعة وآمنة ومجانية 100%.",
    footer_rights: "© 2026 SWIF PDF. جميع الحقوق محفوظة."
  }
};

let currentLang = 'en';

function initI18n() {
  const langDropdownBtn = document.getElementById('langDropdownBtn');
  const langDropdownMenu = document.getElementById('langDropdownMenu');
  const currentLangFlag = document.getElementById('currentLangFlag');
  const currentLangName = document.getElementById('currentLangName');

  if (langDropdownBtn && langDropdownMenu) {
    langDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      langDropdownMenu.classList.add('hidden');
    });

    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        langDropdownMenu.classList.add('hidden');
      });
    });
  }

  setLanguage(currentLang);
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;

  const flagMap = {
    en: '🇺🇸', fr: '🇫🇷', es: '🇪🇸', de: '🇩🇪',
    pt: '🇵🇹', it: '🇮🇹', pl: '🇵🇱', ar: '🇸🇦'
  };

  const nameMap = {
    en: 'English', fr: 'Français', es: 'Español', de: 'Deutsch',
    pt: 'Português', it: 'Italiano', pl: 'Polski', ar: 'العربية'
  };

  const flagEl = document.getElementById('currentLangFlag');
  const nameEl = document.getElementById('currentLangName');
  if (flagEl) flagEl.textContent = flagMap[lang] || '🇺🇸';
  if (nameEl) nameEl.textContent = nameMap[lang] || 'English';

  // RTL handling
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }

  // Update text nodes with data-i18n attribute
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
}

// ==================== STATE MANAGEMENT ====================
let pdfDoc = null;
let totalPages = 0;
let currentPage = 1;
let currentZoom = 1.0;
let pageFlipInstance = null;
let renderedPageCanvases = [];
let isSoundEnabled = true;
let isAutoplayRunning = false;
let autoplayTimer = null;
let audioCtx = null;

// Configure PDF.js Worker
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  setupDropzone();
  setupControls();
  setupFaqAccordion();

  // Keyboard shortcut navigation
  document.addEventListener('keydown', (e) => {
    const viewerSection = document.getElementById('viewerSection');
    if (!viewerSection || viewerSection.classList.contains('hidden')) return;

    if (e.key === 'ArrowLeft') {
      prevPage();
    } else if (e.key === 'ArrowRight') {
      nextPage();
    } else if (e.key === 'Home') {
      goToPage(1);
    } else if (e.key === 'End') {
      goToPage(totalPages);
    }
  });

  // Hotspots navigation
  const hsLeft = document.getElementById('hotspotLeft');
  const hsRight = document.getElementById('hotspotRight');
  if (hsLeft) hsLeft.addEventListener('click', () => prevPage());
  if (hsRight) hsRight.addEventListener('click', () => nextPage());
});

// ==================== DROPZONE & FILE HANDLING ====================
function setupDropzone() {
  const dropzone = document.getElementById('dropzoneSection');
  const fileInput = document.getElementById('fileInput');

  if (!dropzone || !fileInput) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('border-[#22C55E]', 'bg-[#F0FDF4]/30');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('border-[#22C55E]', 'bg-[#F0FDF4]/30');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      if (files[0].type === 'application/pdf' || files[0].name.toLowerCase().endsWith('.pdf')) {
        handleSelectedFile(files[0]);
      } else {
        alert("Veuillez sélectionner un fichier PDF valide.");
      }
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (fileInput.files && fileInput.files.length > 0) {
      handleSelectedFile(fileInput.files[0]);
    }
  });
}

function handleSelectedFile(file) {
  document.getElementById('pdfFileName').textContent = file.name;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const arrayBuffer = e.target.result;
    processPdfArrayBuffer(arrayBuffer);
  };
  reader.readAsArrayBuffer(file);
}

// ==================== SAMPLE PDF GENERATION ====================
async function loadSamplePdf() {
  showLoading("Génération du document exemple SWIF PDF...", 10);
  try {
    const pdfDoc = await PDFLib.PDFDocument.create();
    const font = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
    const regularFont = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

    const colors = [
      { bg: [1, 0.337, 0.208], title: "SWIF PDF Magazine 3D", sub: "Édition Spéciale - Flipbook Interactif" },
      { bg: [0.95, 0.96, 0.98], title: "Sommaire & Fonctionnalités", sub: "1. Animation 3D fluide\n2. Traitement local et privé\n3. Contrôles complets & Tactiles" },
      { bg: [0.98, 0.98, 0.98], title: "Graphismes & Rendu HD", sub: "Toutes vos pages PDF sont rendues en haute résolution directement par votre carte graphique via Canvas HTML5." },
      { bg: [0.98, 0.98, 0.98], title: "Traitement 100% Local", sub: "Votre vie privée est garantie : aucun document ne quitte jamais la mémoire vive de votre navigateur." },
      { bg: [0.98, 0.98, 0.98], title: "Compatibilité Multi-écrans", sub: "Profitez d'un confort de lecture inégalé sur smartphone, tablette et ordinateur de bureau." },
      { bg: [0.12, 0.13, 0.16], title: "SWIF PDF Paw Edition", sub: "Merci d'utiliser SWIF PDF !\nwww.swifpdf.com" }
    ];

    colors.forEach((pageConfig, idx) => {
      const page = pdfDoc.addPage([550, 750]);
      const { width, height } = page.getSize();
      
      // Background fill
      page.drawRectangle({
        x: 0,
        y: 0,
        width,
        height,
        color: PDFLib.rgb(...pageConfig.bg)
      });

      const textColor = idx === 0 || idx === 5 ? PDFLib.rgb(1, 1, 1) : PDFLib.rgb(0.12, 0.13, 0.16);

      // Title
      page.drawText(pageConfig.title, {
        x: 40,
        y: height - 100,
        size: 26,
        font: font,
        color: textColor
      });

      // Subtitle
      page.drawText(pageConfig.sub, {
        x: 40,
        y: height - 180,
        size: 15,
        font: regularFont,
        color: textColor,
        lineHeight: 22
      });

      // Decorative elements
      page.drawRectangle({
        x: 40,
        y: height - 120,
        width: 120,
        height: 4,
        color: idx === 0 ? PDFLib.rgb(1, 1, 1) : PDFLib.rgb(1, 0.337, 0.208)
      });

      page.drawText(`Page ${idx + 1} sur ${colors.length}`, {
        x: width - 120,
        y: 30,
        size: 11,
        font: regularFont,
        color: textColor
      });
    });

    const pdfBytes = await pdfDoc.save();
    document.getElementById('pdfFileName').textContent = "SWIF_PDF_Sample_Magazine.pdf";
    processPdfArrayBuffer(pdfBytes.buffer);
  } catch (err) {
    console.error("Failed to generate sample PDF:", err);
    alert("Erreur lors de la création du PDF exemple.");
    hideLoading();
  }
}

// ==================== PDF PROCESSING & PAGE RENDERING ====================
async function processPdfArrayBuffer(arrayBuffer) {
  showLoading("Analyse du document PDF...", 25);
  renderedPageCanvases = [];
  currentPage = 1;
  currentZoom = 1.0;

  try {
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    pdfDoc = await loadingTask.promise;
    totalPages = pdfDoc.numPages;

    document.getElementById('totalPagesBadge').textContent = totalPages;
    document.getElementById('jumpPageInput').max = totalPages;
    document.getElementById('jumpPageInput').value = 1;

    showLoading(`Rendu vectoriel de ${totalPages} pages...`, 40);

    // Render each page to an offscreen Canvas
    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: ctx,
        viewport: viewport
      }).promise;

      renderedPageCanvases.push(canvas);

      const progress = 40 + Math.round((pageNum / totalPages) * 50);
      updateLoadingProgress(progress, `Page ${pageNum} / ${totalPages} générée`);
    }

    showLoading("Initialisation du Flipbook 3D...", 95);
    setTimeout(() => {
      // Reveal viewer section FIRST so layout dimensions can be measured properly!
      document.getElementById('dropzoneSection').classList.add('hidden');
      document.getElementById('loadingSection').classList.add('hidden');
      document.getElementById('viewerSection').classList.remove('hidden');

      buildFlipbookStage();
      lucide.createIcons();
    }, 300);

  } catch (err) {
    console.error("PDF Processing error:", err);
    alert("Impossible de lire ce fichier PDF. Vérifiez que le fichier n'est pas protégé par un mot de passe non pris en charge.");
    hideLoading();
  }
}

// ==================== FLIPBOOK STAGE BUILDER ====================
function buildFlipbookStage() {
  const container = document.getElementById('flipbookContainer');
  if (!container) return;
  container.innerHTML = '';

  if (pageFlipInstance) {
    try {
      pageFlipInstance.destroy();
    } catch (e) {
      console.warn("Error destroying previous pageFlip instance:", e);
    }
    pageFlipInstance = null;
  }

  // Ensure viewer section is visible before measuring dimensions
  const viewerSection = document.getElementById('viewerSection');
  if (viewerSection) {
    viewerSection.classList.remove('hidden');
  }

  const stageWrapper = document.getElementById('flipbookStageWrapper');
  const viewportWidth = stageWrapper ? Math.max(300, stageWrapper.clientWidth - 48) : window.innerWidth - 60;
  const isMobile = window.innerWidth < 768;

  const sampleCanvas = renderedPageCanvases[0];
  const pageAspect = sampleCanvas && sampleCanvas.width > 0 ? (sampleCanvas.height / sampleCanvas.width) : 1.414;

  let basePageWidth;
  if (isMobile) {
    basePageWidth = Math.min(Math.max(260, viewportWidth - 20), 420);
  } else {
    basePageWidth = Math.min(Math.max(300, Math.floor((viewportWidth - 40) / 2)), 520);
  }
  let basePageHeight = Math.floor(basePageWidth * pageAspect);

  // Check max height constraints
  const maxAllowedHeight = Math.max(380, window.innerHeight - 260);
  if (basePageHeight > maxAllowedHeight) {
    basePageHeight = maxAllowedHeight;
    basePageWidth = Math.floor(basePageHeight / pageAspect);
  }

  // Build page HTML elements
  const pageElements = [];

  renderedPageCanvases.forEach((pageCanvas, index) => {
    const pageCard = document.createElement('div');
    pageCard.className = 'page-card';
    pageCard.setAttribute('data-density', index === 0 || index === totalPages - 1 ? 'hard' : 'soft');

    // Clone canvas content
    const cardCanvas = document.createElement('canvas');
    cardCanvas.width = pageCanvas.width;
    cardCanvas.height = pageCanvas.height;
    const ctx = cardCanvas.getContext('2d');
    ctx.drawImage(pageCanvas, 0, 0);

    pageCard.appendChild(cardCanvas);

    // Spine shadow gradient overlay
    const spine = document.createElement('div');
    spine.className = `book-spine-shadow ${index % 2 === 0 ? 'spine-left' : 'spine-right'}`;
    pageCard.appendChild(spine);

    // Page Number Badge
    const badge = document.createElement('div');
    badge.className = 'page-number-badge';
    badge.textContent = `${index + 1}`;
    pageCard.appendChild(badge);

    container.appendChild(pageCard);
    pageElements.push(pageCard);
  });

  // Detect St.PageFlip constructor
  const PageFlipConstructor = (window.St && window.St.PageFlip) || (window.PageFlip && window.PageFlip.PageFlip);

  if (PageFlipConstructor && pageElements.length > 0) {
    try {
      pageFlipInstance = new PageFlipConstructor(container, {
        width: basePageWidth,
        height: basePageHeight,
        size: "stretch",
        minWidth: 240,
        maxWidth: 650,
        minHeight: 340,
        maxHeight: 950,
        drawShadow: true,
        maxShadowOpacity: 0.85, // Deep 3D paper curl shadow
        showCover: true,
        usePortrait: isMobile,
        startPage: 0,
        flippingTime: 900, // Smooth 3D animation duration
        mobileScrollSupport: false,
        clickEventForward: true
      });

      pageFlipInstance.loadFromHTML(pageElements);

      pageFlipInstance.on('flip', (e) => {
        currentPage = e.data + 1;
        updateControlsState();
        playPaperTurnSound();
      });

      pageFlipInstance.on('changeState', (e) => {
        if (e.data === 'flipping' || e.data === 'user_fold') {
          playPaperTurnSound();
        }
      });

      console.log("StPageFlip 3D Engine initialized successfully with", pageElements.length, "pages.");

    } catch (err) {
      console.warn("StPageFlip initialization failed, activating CSS 3D Fallback Engine:", err);
      setupAdvanced3dCssFallback(container, pageElements, basePageWidth, basePageHeight);
    }
  } else {
    console.warn("StPageFlip library not loaded, activating CSS 3D Fallback Engine.");
    setupAdvanced3dCssFallback(container, pageElements, basePageWidth, basePageHeight);
  }

  updateControlsState();
}

// ==================== ADVANCED CSS 3D FALLBACK ENGINE ====================
let fallbackPageWidth = 400;
let fallbackPageHeight = 560;

function setupAdvanced3dCssFallback(container, pageElements, width, height) {
  fallbackPageWidth = width || 380;
  fallbackPageHeight = height || 540;

  const isMobile = window.innerWidth < 768;

  container.className = 'css3d-book';
  container.style.width = isMobile ? `${fallbackPageWidth}px` : `${fallbackPageWidth * 2}px`;
  container.style.height = `${fallbackPageHeight}px`;
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.position = 'relative';
  container.style.perspective = '2500px';

  renderCss3dSpread(currentPage);
}

function renderCss3dSpread(pageNum) {
  const cards = document.querySelectorAll('.page-card');
  if (!cards || cards.length === 0) return;

  const isMobile = window.innerWidth < 768;

  cards.forEach((card, idx) => {
    const cardPageNum = idx + 1;
    card.style.position = 'absolute';
    card.style.width = `${fallbackPageWidth}px`;
    card.style.height = `${fallbackPageHeight}px`;
    card.style.transition = 'transform 0.75s cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 0.75s ease';
    card.style.backfaceVisibility = 'hidden';
    card.style.webkitBackfaceVisibility = 'hidden';

    if (isMobile) {
      if (cardPageNum === pageNum) {
        card.style.display = 'flex';
        card.style.left = '0px';
        card.style.zIndex = '10';
        card.style.transform = 'rotateY(0deg)';
      } else {
        card.style.display = 'none';
      }
    } else {
      // 2-page book spread
      if (pageNum === 1) {
        // Cover page on the right side
        if (cardPageNum === 1) {
          card.style.display = 'flex';
          card.style.left = `${fallbackPageWidth}px`;
          card.style.zIndex = '10';
          card.style.transform = 'rotateY(0deg)';
          card.style.transformOrigin = 'left center';
        } else {
          card.style.display = 'none';
        }
      } else {
        // Double page spread
        const leftPageNum = pageNum % 2 === 0 ? pageNum : pageNum - 1;
        const rightPageNum = leftPageNum + 1;

        if (cardPageNum === leftPageNum) {
          card.style.display = 'flex';
          card.style.left = '0px';
          card.style.zIndex = '5';
          card.style.transform = 'rotateY(0deg)';
          card.style.transformOrigin = 'right center';
        } else if (cardPageNum === rightPageNum && cardPageNum <= totalPages) {
          card.style.display = 'flex';
          card.style.left = `${fallbackPageWidth}px`;
          card.style.zIndex = '5';
          card.style.transform = 'rotateY(0deg)';
          card.style.transformOrigin = 'left center';
        } else {
          card.style.display = 'none';
        }
      }
    }
  });
}

function animate3dCssFlip(targetPage, direction) {
  if (targetPage < 1 || targetPage > totalPages) return;

  const cards = document.querySelectorAll('.page-card');
  const currentCard = cards[currentPage - 1];
  const targetCard = cards[targetPage - 1];

  if (!currentCard) {
    currentPage = targetPage;
    renderCss3dSpread(currentPage);
    updateControlsState();
    return;
  }

  playPaperTurnSound();

  if (direction === 'next') {
    currentCard.style.transformOrigin = 'left center';
    currentCard.style.zIndex = '20';
    currentCard.style.transform = 'rotateY(-180deg)';
  } else {
    if (targetCard) {
      targetCard.style.display = 'flex';
      targetCard.style.transformOrigin = 'right center';
      targetCard.style.transform = 'rotateY(180deg)';
      targetCard.style.zIndex = '20';
      
      requestAnimationFrame(() => {
        targetCard.style.transform = 'rotateY(0deg)';
      });
    }
  }

  setTimeout(() => {
    currentPage = targetPage;
    renderCss3dSpread(currentPage);
    updateControlsState();
  }, 750);
}

// ==================== NAVIGATION & CONTROLS ====================
function setupControls() {
  document.getElementById('btnPrevPage').addEventListener('click', prevPage);
  document.getElementById('btnNextPage').addEventListener('click', nextPage);
  document.getElementById('btnFirstPage').addEventListener('click', () => goToPage(1));
  document.getElementById('btnLastPage').addEventListener('click', () => goToPage(totalPages));
  document.getElementById('btnChangePdf').addEventListener('click', resetToDropzone);

  const jumpInput = document.getElementById('jumpPageInput');
  jumpInput.addEventListener('change', () => {
    let target = parseInt(jumpInput.value, 10);
    if (isNaN(target)) target = 1;
    target = Math.max(1, Math.min(totalPages, target));
    goToPage(target);
  });

  // Zoom controls
  document.getElementById('btnZoomIn').addEventListener('click', () => adjustZoom(0.15));
  document.getElementById('btnZoomOut').addEventListener('click', () => adjustZoom(-0.15));
  document.getElementById('btnZoomReset').addEventListener('click', () => {
    currentZoom = 1.0;
    applyZoom();
  });

  // Sound toggle
  document.getElementById('btnToggleSound').addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    const icon = document.getElementById('soundIcon');
    const btn = document.getElementById('btnToggleSound');

    if (isSoundEnabled) {
      btn.className = 'p-2 rounded-xl bg-[#F0FDF4] text-[#22C55E] hover:bg-orange-100 transition-colors';
      icon.setAttribute('data-lucide', 'volume-2');
    } else {
      btn.className = 'p-2 rounded-xl bg-slate-100 text-slate-400 hover:bg-slate-200 transition-colors';
      icon.setAttribute('data-lucide', 'volume-x');
    }
    lucide.createIcons();
  });

  // Autoplay slideshow
  document.getElementById('btnToggleAutoplay').addEventListener('click', toggleAutoplay);

  // Fullscreen
  document.getElementById('btnToggleFullscreen').addEventListener('click', toggleFullscreen);

  // Download PDF
  document.getElementById('btnDownloadPdf').addEventListener('click', () => {
    alert("Votre document PDF est ouvert dans votre navigateur.");
  });
}

function prevPage() {
  if (pageFlipInstance) {
    pageFlipInstance.flipPrev();
  } else {
    if (currentPage > 1) {
      const isMobile = window.innerWidth < 768;
      const targetPage = isMobile ? currentPage - 1 : (currentPage % 2 === 0 ? currentPage - 2 : currentPage - 1);
      animate3dCssFlip(Math.max(1, targetPage), 'prev');
    }
  }
}

function nextPage() {
  if (pageFlipInstance) {
    pageFlipInstance.flipNext();
  } else {
    if (currentPage < totalPages) {
      const isMobile = window.innerWidth < 768;
      const targetPage = isMobile ? currentPage + 1 : (currentPage === 1 ? 2 : currentPage + 2);
      animate3dCssFlip(Math.min(totalPages, targetPage), 'next');
    }
  }
}

function goToPage(pageNum) {
  pageNum = Math.max(1, Math.min(totalPages, pageNum));
  if (pageFlipInstance) {
    pageFlipInstance.turnToPage(pageNum - 1);
  } else {
    const direction = pageNum > currentPage ? 'next' : 'prev';
    animate3dCssFlip(pageNum, direction);
  }
}

function updateControlsState() {
  document.getElementById('jumpPageInput').value = currentPage;
  
  const prevBtn = document.getElementById('btnPrevPage');
  const nextBtn = document.getElementById('btnNextPage');

  if (currentPage <= 1) {
    prevBtn.classList.add('opacity-50', 'pointer-events-none');
  } else {
    prevBtn.classList.remove('opacity-50', 'pointer-events-none');
  }

  if (currentPage >= totalPages) {
    nextBtn.classList.add('opacity-50', 'pointer-events-none');
  } else {
    nextBtn.classList.remove('opacity-50', 'pointer-events-none');
  }
}

function adjustZoom(delta) {
  currentZoom = Math.max(0.6, Math.min(2.2, currentZoom + delta));
  applyZoom();
}

function applyZoom() {
  const container = document.getElementById('flipbookContainer');
  if (container) {
    container.style.transform = `scale(${currentZoom})`;
  }
  const badge = document.getElementById('zoomLevelBadge');
  if (badge) {
    badge.textContent = `${Math.round(currentZoom * 100)}%`;
  }
}

function toggleAutoplay() {
  isAutoplayRunning = !isAutoplayRunning;
  const icon = document.getElementById('playIcon');
  const btn = document.getElementById('btnToggleAutoplay');

  if (isAutoplayRunning) {
    btn.className = 'p-2 rounded-xl bg-[#22C55E] text-white hover:bg-[#16A34A] transition-colors';
    icon.setAttribute('data-lucide', 'pause');
    autoplayTimer = setInterval(() => {
      if (currentPage >= totalPages) {
        goToPage(1);
      } else {
        nextPage();
      }
    }, 3000);
  } else {
    btn.className = 'p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors';
    icon.setAttribute('data-lucide', 'play');
    if (autoplayTimer) clearInterval(autoplayTimer);
  }
  lucide.createIcons();
}

function toggleFullscreen() {
  const wrapper = document.getElementById('flipbookStageWrapper');
  if (!document.fullscreenElement) {
    if (wrapper.requestFullscreen) wrapper.requestFullscreen();
    else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

function resetToDropzone() {
  if (isAutoplayRunning) toggleAutoplay();
  document.getElementById('viewerSection').classList.add('hidden');
  document.getElementById('dropzoneSection').classList.remove('hidden');
  document.getElementById('fileInput').value = '';
}

// ==================== AUDIO SYNTHESIS FOR PAPER TURN SOUND ====================
function playPaperTurnSound() {
  if (!isSoundEnabled) return;

  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Synthesize realistic paper rustle with noise buffer + filter decay
    const bufferSize = audioCtx.sampleRate * 0.12;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, audioCtx.currentTime);
    filter.Q.setValueAtTime(1.5, audioCtx.currentTime);

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start();
    noise.stop(audioCtx.currentTime + 0.12);
  } catch (e) {
    console.warn("Audio synthesis ignored:", e);
  }
}

// ==================== LOADING UI HELPERS ====================
function showLoading(text, progressPercent) {
  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('viewerSection').classList.add('hidden');
  
  const loadingSec = document.getElementById('loadingSection');
  loadingSec.classList.remove('hidden');
  
  document.getElementById('loadingText').textContent = text;
  document.getElementById('loadingProgress').style.width = `${progressPercent}%`;
}

function updateLoadingProgress(percent, statusText) {
  document.getElementById('loadingProgress').style.width = `${percent}%`;
  document.getElementById('loadingStatus').textContent = statusText;
}

function hideLoading() {
  document.getElementById('loadingSection').classList.add('hidden');
}

// ==================== FAQ ACCORDION ====================
function setupFaqAccordion() {
  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.faq-icon');
      
      content.classList.toggle('hidden');
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    });
  });
}

// ==================== RESPONSIVE RESIZE HANDLER ====================
let resizeTimer = null;
window.addEventListener('resize', () => {
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const viewerSection = document.getElementById('viewerSection');
    if (viewerSection && !viewerSection.classList.contains('hidden') && renderedPageCanvases.length > 0) {
      buildFlipbookStage();
      if (pageFlipInstance) {
        try {
          pageFlipInstance.turnToPage(Math.max(0, currentPage - 1));
        } catch (e) {}
      }
    }
  }, 250);
});
