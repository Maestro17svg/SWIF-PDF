// SWIF PDF - Standalone PDF Watermark Tool Script (With Silky-Smooth 60FPS Drag & Prepend Background PDF Layering)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Add <span class='text-coral'>Watermark</span> to PDF",
    hero_subtitle: "Add custom text or image watermarks to your PDF pages with full control over position, angle, opacity and page range.",
    mode_text: "Text Watermark",
    mode_image: "Image / Logo Watermark",
    text_input_label: "Watermark Text:",
    font_label: "Font Family:",
    text_color_label: "Text Color:",
    rotation_label: "Rotation Angle (0° to 360°):",
    opacity_label: "Watermark Opacity:",
    image_upload_label: "Upload Image / Logo (PNG/JPG):",
    pos_label: "Watermark Position:",
    pos_center: "Center (Filigree)",
    pos_custom: "Free Drag & Drop (Custom)",
    pos_tile: "Tile / Mosaic Grid",
    pos_top_right: "Top Right",
    pos_top_left: "Top Left",
    pos_bottom_right: "Bottom Right",
    pos_bottom_left: "Bottom Left",
    layer_label: "Watermark Layer:",
    layer_bg: "Background (Behind Page Content)",
    layer_fg: "Foreground (Above Page Content)",
    page_range_label: "Apply Watermark To:",
    range_all: "All Pages",
    range_first: "First Page Only",
    range_custom: "Custom Page Range (e.g. 2-5)",
    btn_apply: "Apply Watermark & Download PDF",
    preview_title: "Live Page Watermark Preview (Drag anywhere to move)",
    status_processing: "Applying watermark to PDF pages...",
    status_done: "Watermarked PDF document ready!",
    res_title: "Watermark Applied Successfully",
    res_filename: "File Name:",
    res_mode: "Watermark Mode:",
    btn_download: "Download Watermarked PDF",
    btn_reset: "Watermark Another PDF",
    faq_title: "PDF Watermark <span class='text-coral'>FAQ</span>",
    faq_q1: "Can I place the image/logo behind or above text?",
    faq_a1: "Yes! Choose 'Background' to place logos behind page text, or 'Foreground' to place over content.",
    faq_q2: "Is dragging smooth without image flickering?",
    faq_a2: "Yes! Image elements are pre-cached for 60 FPS silky-smooth drag movement.",
    faq_q3: "Is my document processed locally?",
    faq_a3: "Yes! All PDF watermark vector rendering is executed 100% locally in your browser memory.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Ajouter un <span class='text-coral'>Filigrane</span> sur un PDF",
    hero_subtitle: "Ajoutez un filigrane texte ou image personnalisé avec déplacement libre au glisser-déposer.",
    mode_text: "Filigrane Texte",
    mode_image: "Filigrane Image / Logo",
    text_input_label: "Texte du filigrane :",
    font_label: "Police d'écriture :",
    text_color_label: "Couleur du texte :",
    rotation_label: "Angle de rotation (0° à 360°) :",
    opacity_label: "Opacité (Transparence) :",
    image_upload_label: "Importer un Logo / Image (PNG/JPG) :",
    pos_label: "Position du filigrane :",
    pos_center: "Centré (Filigrane classique)",
    pos_custom: "Position libre (Glisser-Déposer)",
    pos_tile: "Mosaïque / Répété sur la page",
    pos_top_right: "Haut à droite",
    pos_top_left: "Haut à gauche",
    pos_bottom_right: "Bas à droite",
    pos_bottom_left: "Bas à gauche",
    layer_label: "Disposition de la couche :",
    layer_bg: "Arrière-plan (Derrière le texte du PDF)",
    layer_fg: "Premier plan (Au-dessus du texte / Tampon)",
    page_range_label: "Appliquer le filigrane sur :",
    range_all: "Toutes les pages",
    range_first: "Page de garde uniquement",
    range_custom: "Intervalle personnalisé (ex: 2-5)",
    btn_apply: "Appliquer le filigrane et télécharger",
    preview_title: "Aperçu (Glissez le filigrane à la souris pour le placer)",
    status_processing: "Incrustation du filigrane dans le PDF...",
    status_done: "PDF avec filigrane prêt !",
    res_title: "Filigrane appliqué avec succès",
    res_filename: "Nom du fichier :",
    res_mode: "Mode de filigrane :",
    btn_download: "Télécharger le PDF avec filigrane",
    btn_reset: "Traiter un autre PDF",
    faq_title: "Foire Aux Questions <span class='text-coral'>Filigrane PDF</span>",
    faq_q1: "Puis-je placer le logo derrière ou au-dessus du texte ?",
    faq_a1: "Oui ! Sélectionnez 'Arrière-plan' pour placer le logo sous le texte du PDF, ou 'Premier plan' pour le placer au-dessus.",
    faq_q2: "Le déplacement est-il fluide sans aucun clignotement ?",
    faq_a2: "Absolument ! L'image est pré-chargée en mémoire et le rendu est cadencé par requestAnimationFrame à 60 FPS.",
    faq_q3: "Mon document est-il envoyé sur un serveur ?",
    faq_a3: "Non ! Tout le traitement vectoriel du filigrane s'effectue à 100% dans votre navigateur.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Añadir <span class='text-coral'>Marca de Agua</span> a PDF",
    hero_subtitle: "Añade texto o imagen de marca de agua con arrastrar y soltar libre.",
    mode_text: "Marca de Agua de Texto",
    mode_image: "Marca de Agua de Imagen",
    text_input_label: "Texto de marca de agua:",
    font_label: "Fuente:",
    text_color_label: "Color del texto:",
    rotation_label: "Ángulo de rotación (0° a 360°):",
    opacity_label: "Opacidad:",
    image_upload_label: "Subir Imagen / Logo (PNG/JPG):",
    pos_label: "Posición:",
    pos_center: "Centro (Marca de agua)",
    pos_custom: "Arrastrar y Soltar Libre",
    pos_tile: "Mosaico / Repetido",
    pos_top_right: "Arriba derecha",
    pos_top_left: "Arriba izquierda",
    pos_bottom_right: "Abajo derecha",
    pos_bottom_left: "Abajo izquierda",
    layer_label: "Capa:",
    layer_bg: "Fondo (Detrás del texto)",
    layer_fg: "Primer plano (Sobre el texto)",
    page_range_label: "Aplicar marca de agua a:",
    range_all: "Todas las páginas",
    range_first: "Solo primera página",
    range_custom: "Rango personalizado (ej. 2-5)",
    btn_apply: "Aplicar Marca de Agua y Descargar",
    preview_title: "Vista Previa (Arrastra para mover la marca de agua)",
    status_processing: "Aplicando marca de agua...",
    status_done: "¡PDF con Marca de Agua Listo!",
    res_title: "Marca de Agua Aplicada",
    res_filename: "Nombre del archivo:",
    res_mode: "Modo:",
    btn_download: "Descargar PDF",
    btn_reset: "Procesar Otro PDF",
    faq_title: "FAQ <span class='text-coral'>Marca de Agua PDF</span>",
    faq_q1: "¿Capa fondo o primer plano?",
    faq_a1: "Puedes elegir si va detrás o delante del texto.",
    faq_q2: "¿Opacidad?",
    faq_a2: "Ajustable con fluidez 60 FPS.",
    faq_q3: "¿Privacidad?",
    faq_a3: "100% en tu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>Wasserzeichen</span> zu PDF Hinzufügen",
    hero_subtitle: "Wasserzeichen frei per Drag-and-Drop verschieben.",
    mode_text: "Text-Wasserzeichen",
    mode_image: "Bild- / Logo-Wasserzeichen",
    text_input_label: "Wasserzeichen Text:",
    font_label: "Schriftart:",
    text_color_label: "Textfarbe:",
    rotation_label: "Drehwinkel (0° bis 360°):",
    opacity_label: "Deckkraft (Transparenz):",
    image_upload_label: "Bild / Logo hochladen (PNG/JPG):",
    pos_label: "Position:",
    pos_center: "Zentriert (Wasserzeichen)",
    pos_custom: "Freies Drag-and-Drop",
    pos_tile: "Kacheln / Raster",
    pos_top_right: "Oben Rechts",
    pos_top_left: "Oben Links",
    pos_bottom_right: "Unten Rechts",
    pos_bottom_left: "Unten Links",
    layer_label: "Ebene:",
    layer_bg: "Hintergrund (Hinter dem Text)",
    layer_fg: "Vordergrund (Über dem Text)",
    page_range_label: "Wasserzeichen anwenden auf:",
    range_all: "Alle Seiten",
    range_first: "Nur erste Seite",
    range_custom: "Benutzerdefiniert (z.B. 2-5)",
    btn_apply: "Wasserzeichen Anwenden & PDF Herunterladen",
    preview_title: "Vorschau (Ziehen zum Verschieben)",
    status_processing: "Füge Wasserzeichen hinzu...",
    status_done: "PDF mit Wasserzeichen Bereit!",
    res_title: "Wasserzeichen Erfolgreich Angewendet",
    res_filename: "Dateiname:",
    res_mode: "Modus:",
    btn_download: "PDF Herunterladen",
    btn_reset: "Weitere Datei Verarbeiten",
    faq_title: "PDF Wasserzeichen <span class='text-coral'>FAQ</span>",
    faq_q1: "Hintergrund oder Vordergrund?",
    faq_a1: "Frei wählbar hinter oder über dem Inhalt.",
    faq_q2: "Flüssiges Ziehen?",
    faq_a2: "Ruckelfrei dank 60 FPS Caching.",
    faq_q3: "Datenschutz?",
    faq_a3: "100% im Browser.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Adicionar <span class='text-coral'>Marca de Água</span> ao PDF",
    hero_subtitle: "Mova a marca de água livremente com arrastar e largar.",
    mode_text: "Marca de Água de Texto",
    mode_image: "Marca de Água de Imagem",
    text_input_label: "Texto da marca de água:",
    font_label: "Fonte:",
    text_color_label: "Cor do texto:",
    rotation_label: "Ângulo de rotação (0° a 360°):",
    opacity_label: "Opacidade:",
    image_upload_label: "Carregar Imagem / Logo (PNG/JPG):",
    pos_label: "Posição:",
    pos_center: "Centro (Marca de água)",
    pos_custom: "Arrastar e Largar Livre",
    pos_tile: "Mosaico / Repetido",
    pos_top_right: "Topo Direita",
    pos_top_left: "Topo Esquerda",
    pos_bottom_right: "Inferior Direita",
    pos_bottom_left: "Inferior Esquerda",
    layer_label: "Camada:",
    layer_bg: "Fundo (Atrás do texto)",
    layer_fg: "Primeiro plano (Sobre o texto)",
    page_range_label: "Aplicar marca de água a:",
    range_all: "Todas as páginas",
    range_first: "Apenas primeira página",
    range_custom: "Intervalo personalizado (ex: 2-5)",
    btn_apply: "Aplicar Marca de Água e Descarregar",
    preview_title: "Pré-visualização (Arraste para mover)",
    status_processing: "A aplicar marca de água...",
    status_done: "PDF com Marca de Água Pronto!",
    res_title: "Marca de Água Aplicada com Sucesso",
    res_filename: "Nome do Ficheiro:",
    res_mode: "Modo:",
    btn_download: "Descarregar PDF",
    btn_reset: "Processar Outro PDF",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Marca de Água PDF</span>",
    faq_q1: "Camada fundo ou topo?",
    faq_a1: "Pode escolher fundo ou primeiro plano.",
    faq_q2: "Sem oscilação?",
    faq_a2: "Movimento 100% fluido a 60 FPS.",
    faq_q3: "Seguro?",
    faq_a3: "100% no seu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Aggiungi <span class='text-coral'>Filigrana</span> a PDF",
    hero_subtitle: "Sposta la filigrana liberamente con il trascinamento.",
    mode_text: "Filigrana di Testo",
    mode_image: "Filigrana Immagine / Logo",
    text_input_label: "Testo filigrana:",
    font_label: "Font:",
    text_color_label: "Colore testo:",
    rotation_label: "Angolo di rotazione (0° a 360°):",
    opacity_label: "Opacità:",
    image_upload_label: "Carica Immagine / Logo (PNG/JPG):",
    pos_label: "Posizione:",
    pos_center: "Centro (Filigrana)",
    pos_custom: "Trascina e Rilascia Libero",
    pos_tile: "Mosaico / Ripetuto",
    pos_top_right: "In alto a destra",
    pos_top_left: "In alto a sinistra",
    pos_bottom_right: "In basso a destra",
    pos_bottom_left: "In basso a sinistra",
    layer_label: "Livello:",
    layer_bg: "Sfondo (Dietro il testo)",
    layer_fg: "Primo piano (Sopra il testo)",
    page_range_label: "Applica filigrana a:",
    range_all: "Tutte le pagine",
    range_first: "Solo prima pagina",
    range_custom: "Intervallo personalizzato (es. 2-5)",
    btn_apply: "Applica Filigrana e Scarica",
    preview_title: "Anteprima (Trascina per spostare)",
    status_processing: "Applicazione filigrana...",
    status_done: "PDF con Filigrana Pronto!",
    res_title: "Filigrana Applicata con Successo",
    res_filename: "Nome File:",
    res_mode: "Modalità:",
    btn_download: "Scarica PDF",
    btn_reset: "Elabora Un Altro PDF",
    faq_title: "FAQ <span class='text-coral'>Filigrana PDF</span>",
    faq_q1: "Sfondo o primo piano?",
    faq_a1: "Scegli se posizionarla sotto o sopra il testo.",
    faq_q2: "Senza sfarfallio?",
    faq_a2: "Resa fluida a 60 FPS.",
    faq_q3: "Sicuro?",
    faq_a3: "100% nel tuo browser.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Dodaj <span class='text-coral'>Znak Wodny</span> do PDF",
    hero_subtitle: "Przesuwaj znak wodny swobodnie metodą przeciągnij i upuść.",
    mode_text: "Tekstowy Znak Wodny",
    mode_image: "Obrazkowy Znak Wodny / Logo",
    text_input_label: "Tekst znaku wodnego:",
    font_label: "Czcionka:",
    text_color_label: "Kolor tekstu:",
    rotation_label: "Kąt obrotu (0° do 360°):",
    opacity_label: "Przezroczystość:",
    image_upload_label: "Wgraj Obraz / Logo (PNG/JPG):",
    pos_label: "Pozycja:",
    pos_center: "Środek (Znak wodny)",
    pos_custom: "Swobodne Przeciąganie",
    pos_tile: "Mozaika / Powtórzony",
    pos_top_right: "Góra po prawej",
    pos_top_left: "Góra po lewej",
    pos_bottom_right: "Dół po prawej",
    pos_bottom_left: "Dół po lewej",
    layer_label: "Warstwa:",
    layer_bg: "Tło (Pod tekstem)",
    layer_fg: "Warstwa wierzchnia (Nad tekstem)",
    page_range_label: "Zastosuj znak wodny do:",
    range_all: "Wszystkie strony",
    range_first: "Tylko pierwsza strona",
    range_custom: "Zakres stron (np. 2-5)",
    btn_apply: "Zastosuj Znak Wodny i Pobierz",
    preview_title: "Podgląd (Przeciągnij myszką, aby przesunąć)",
    status_processing: "Stosowanie znaku wodnego...",
    status_done: "PDF ze Znakiem Wodnym Gotowy!",
    res_title: "Znak Wodny Zastosowany",
    res_filename: "Nazwa Pliku:",
    res_mode: "Tryb:",
    btn_download: "Pobierz PDF",
    btn_reset: "Przetwórz Inny PDF",
    faq_title: "FAQ <span class='text-coral'>Znak Wodny PDF</span>",
    faq_q1: "Warstwa pod czy nad tekstem?",
    faq_a1: "Wybierz tło pod tekstem lub warstwę wierzchnią.",
    faq_q2: "Płynność?",
    faq_a2: "Pre-load obrazu i 60 FPS.",
    faq_q3: "Bezpieczeństwo?",
    faq_a3: "100% w przeglądarce.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "إضافة <span class='text-coral'>علامة مائية</span> إلى مستند PDF",
    hero_subtitle: "حرك العلامة المائية بحرية عبر السحب والإفلات في أي مكان على الصفحة.",
    mode_text: "علامة مائية نصية",
    mode_image: "علامة مائية صورة / شعار",
    text_input_label: "نص العلامة المائية:",
    font_label: "خط النص:",
    text_color_label: "لون النص:",
    rotation_label: "زاوية الدوران (0° إلى 360°):",
    opacity_label: "درجة الشفافية (الوضوح):",
    image_upload_label: "رفع صورة / شعار (PNG/JPG):",
    pos_label: "موقع العلامة المائية:",
    pos_center: "الوسط (علامة مائية)",
    pos_custom: "سحب وإفلات حر (مخصص)",
    pos_tile: "فسيفساء / مكرر على الصفحة",
    pos_top_right: "أعلى اليمين",
    pos_top_left: "أعلى اليسار",
    pos_bottom_right: "أسفل اليمين",
    pos_bottom_left: "أسفل اليسار",
    layer_label: "طبقة العرض:",
    layer_bg: "خلفية (خلف نص المستند)",
    layer_fg: "مقدمة (فوق نص المستند)",
    page_range_label: "تطبيق العلامة المائية على:",
    range_all: "كافة الصفحات",
    range_first: "صفحة الغلاف فقط",
    range_custom: "نطاق صفحات مخصص (مثال: 2-5)",
    btn_apply: "تطبيق العلامة المائية وتحميل المستند",
    preview_title: "معاينة حية (اسحب العلامة المائية بالفأرة لتحريكها)",
    status_processing: "جاري دمج العلامة المائية في المستند...",
    status_done: "مستند PDF مع العلامة المائية جاهز!",
    res_title: "تم تطبيق العلامة المائية بنجاح",
    res_filename: "اسم الملف:",
    res_mode: "نمط العلامة المائية:",
    btn_download: "تحميل مستند PDF",
    btn_reset: "معالجة مستند آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>العلامة المائية</span>",
    faq_q1: "هل يمكن وضع الشعار خلف النص أو فوقه؟",
    faq_a1: "نعم! اختر 'خلفية' لوضع الشعار خلف النص، أو 'مقدمة' لوضعه فوق المستند.",
    faq_q2: "هل التحريك سلس بدون وميض؟",
    faq_a2: "بالتأكيد! يتم تخزين الصورة مسبقاً والتحريك يتم بسرعة 60 إطار بالثانية.",
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

// Offscreen Static Cached PDF Canvas (prevents PDF.js re-render flickering during mouse drag!)
let cachedPdfCanvas = null;

// Pre-cached HTMLImageElement for zero-flicker 60 FPS image logo drag
let loadedImageElement = null;

// Watermark Options State
let watermarkMode = 'text'; // 'text' | 'image'
let watermarkText = "CONFIDENTIAL";
let watermarkFont = "Helvetica";
let watermarkColor = "#22C55E";
let watermarkRotation = 315; // -45 deg
let watermarkOpacity = 0.35;

// Free Drag Normalized Position Coordinates (0.0 to 1.0)
let customPosXRatio = 0.5; // Center X
let customPosYRatio = 0.5; // Center Y

let isDraggingWatermark = false;
let animFrameRequested = false;

let uploadedImageDataUrl = null;
let watermarkPosition = 'center'; // 'center' | 'custom' | 'tile' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
let watermarkLayer = 'bg'; // 'bg' (Background) | 'fg' (Foreground)
let pageRangeType = 'all';

let processedPdfBlob = null;
let processedFileName = "";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
  initFormControls();
  initCanvasDragListeners();
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
  const modeTextBtn = document.getElementById('modeTextBtn');
  const modeImageBtn = document.getElementById('modeImageBtn');
  const textOptionsBox = document.getElementById('textOptionsBox');
  const imageOptionsBox = document.getElementById('imageOptionsBox');

  if (modeTextBtn && modeImageBtn) {
    modeTextBtn.addEventListener('click', () => {
      watermarkMode = 'text';
      modeTextBtn.className = "flex-1 py-2.5 px-4 rounded-xl font-extrabold text-xs bg-[#22C55E] text-white shadow-md transition-all";
      modeImageBtn.className = "flex-1 py-2.5 px-4 rounded-xl font-extrabold text-xs bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all";
      textOptionsBox.classList.remove('hidden');
      imageOptionsBox.classList.add('hidden');
      updateLiveCanvasPreview();
    });
    modeImageBtn.addEventListener('click', () => {
      watermarkMode = 'image';
      modeImageBtn.className = "flex-1 py-2.5 px-4 rounded-xl font-extrabold text-xs bg-[#22C55E] text-white shadow-md transition-all";
      modeTextBtn.className = "flex-1 py-2.5 px-4 rounded-xl font-extrabold text-xs bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all";
      imageOptionsBox.classList.remove('hidden');
      textOptionsBox.classList.add('hidden');
      updateLiveCanvasPreview();
    });
  }

  const txtInput = document.getElementById('watermarkTextInput');
  if (txtInput) {
    txtInput.addEventListener('input', (e) => {
      watermarkText = e.target.value || "CONFIDENTIAL";
      updateLiveCanvasPreview();
    });
  }

  const fontSelect = document.getElementById('fontSelect');
  if (fontSelect) {
    fontSelect.addEventListener('change', (e) => {
      watermarkFont = e.target.value;
      updateLiveCanvasPreview();
    });
  }

  const colorInput = document.getElementById('textColorInput');
  if (colorInput) {
    colorInput.addEventListener('input', (e) => {
      watermarkColor = e.target.value;
      updateLiveCanvasPreview();
    });
  }

  const rotRange = document.getElementById('rotationRange');
  const rotText = document.getElementById('rotationValueText');
  if (rotRange) {
    rotRange.addEventListener('input', (e) => {
      watermarkRotation = parseInt(e.target.value);
      if (rotText) rotText.innerText = `${watermarkRotation}°`;
      updateLiveCanvasPreview();
    });
  }

  const opacityRange = document.getElementById('opacityRange');
  const opacityText = document.getElementById('opacityValueText');
  if (opacityRange) {
    opacityRange.addEventListener('input', (e) => {
      watermarkOpacity = parseFloat(e.target.value);
      if (opacityText) opacityText.innerText = `${Math.round(watermarkOpacity * 100)}%`;
      updateLiveCanvasPreview();
    });
  }

  // Pre-load and cache HTMLImageElement for zero-flicker drag!
  const imageInput = document.getElementById('imageFileInput');
  if (imageInput) {
    imageInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          uploadedImageDataUrl = ev.target.result;
          document.getElementById('imagePreviewImg').src = uploadedImageDataUrl;
          document.getElementById('imagePreviewBox').classList.remove('hidden');
          
          const img = new Image();
          img.onload = () => {
            loadedImageElement = img;
            updateLiveCanvasPreview();
          };
          img.src = uploadedImageDataUrl;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }

  const posSelect = document.getElementById('positionSelect');
  if (posSelect) {
    posSelect.addEventListener('change', (e) => {
      watermarkPosition = e.target.value;
      
      if (watermarkPosition === 'center') { customPosXRatio = 0.5; customPosYRatio = 0.5; }
      else if (watermarkPosition === 'top-right') { customPosXRatio = 0.82; customPosYRatio = 0.08; }
      else if (watermarkPosition === 'top-left') { customPosXRatio = 0.18; customPosYRatio = 0.08; }
      else if (watermarkPosition === 'bottom-right') { customPosXRatio = 0.82; customPosYRatio = 0.92; }
      else if (watermarkPosition === 'bottom-left') { customPosXRatio = 0.18; customPosYRatio = 0.92; }

      updateLiveCanvasPreview();
    });
  }

  const layerSelect = document.getElementById('layerSelect');
  if (layerSelect) {
    layerSelect.addEventListener('change', (e) => {
      watermarkLayer = e.target.value;
      updateLiveCanvasPreview();
    });
  }

  const rangeSelect = document.getElementById('pageRangeSelect');
  const customBox = document.getElementById('customRangeBox');
  if (rangeSelect) {
    rangeSelect.addEventListener('change', (e) => {
      pageRangeType = e.target.value;
      if (pageRangeType === 'custom') customBox?.classList.remove('hidden');
      else customBox?.classList.add('hidden');
    });
  }
}

/* ==================== SILKY-SMOOTH 60 FPS DRAG & DROP LISTENERS ==================== */
function initCanvasDragListeners() {
  const canvas = document.getElementById('previewCanvas');
  if (!canvas) return;

  const handleStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    isDraggingWatermark = true;
    canvas.style.cursor = 'grabbing';
    updatePositionFromMouse(clientX - rect.left, clientY - rect.top, canvas.width, canvas.height);
  };

  const handleMove = (e) => {
    if (!isDraggingWatermark) return;
    e.preventDefault();
    e.stopPropagation();
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    updatePositionFromMouse(clientX - rect.left, clientY - rect.top, canvas.width, canvas.height);
  };

  const handleEnd = (e) => {
    if (isDraggingWatermark) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      isDraggingWatermark = false;
      canvas.style.cursor = 'grab';
    }
  };

  canvas.addEventListener('mousedown', handleStart);
  window.addEventListener('mousemove', handleMove, { passive: false });
  window.addEventListener('mouseup', handleEnd);

  canvas.addEventListener('touchstart', handleStart, { passive: false });
  window.addEventListener('touchmove', handleMove, { passive: false });
  window.addEventListener('touchend', handleEnd);

  canvas.addEventListener('mouseenter', () => { canvas.style.cursor = 'grab'; });
}

function updatePositionFromMouse(mouseX, mouseY, canvasW, canvasH) {
  customPosXRatio = Math.max(0.05, Math.min(0.95, mouseX / canvasW));
  customPosYRatio = Math.max(0.05, Math.min(0.95, mouseY / canvasH));

  watermarkPosition = 'custom';
  const posSelect = document.getElementById('positionSelect');
  if (posSelect) posSelect.value = 'custom';

  if (!animFrameRequested) {
    animFrameRequested = true;
    requestAnimationFrame(() => {
      updateLiveCanvasPreview();
      animFrameRequested = false;
    });
  }
}

/* ==================== SILKY-SMOOTH 60 FPS LIVE PREVIEW ==================== */
function updateLiveCanvasPreview() {
  if (!cachedPdfCanvas) return;

  const canvas = document.getElementById('previewCanvas');
  if (!canvas) return;

  canvas.width = cachedPdfCanvas.width;
  canvas.height = cachedPdfCanvas.height;

  const ctx = canvas.getContext('2d');

  // Copy static PDF background instantaneously with ZERO flickering!
  ctx.drawImage(cachedPdfCanvas, 0, 0);

  const w = canvas.width;
  const h = canvas.height;

  let curX = customPosXRatio * w;
  let curY = customPosYRatio * h;

  ctx.save();
  ctx.globalAlpha = watermarkOpacity;

  if (watermarkMode === 'text') {
    ctx.fillStyle = watermarkColor;
    ctx.font = `bold 28px ${watermarkFont}, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (watermarkPosition === 'tile') {
      const stepX = 160;
      const stepY = 120;
      for (let x = 40; x < w; x += stepX) {
        for (let y = 40; y < h; y += stepY) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((watermarkRotation * Math.PI) / 180);
          ctx.fillText(watermarkText, 0, 0);
          ctx.restore();
        }
      }
    } else {
      ctx.translate(curX, curY);
      ctx.rotate((watermarkRotation * Math.PI) / 180);
      ctx.fillText(watermarkText, 0, 0);

      // Draw Drag Handle Outline on Preview
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = '#22C55E';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(curX - 80, curY - 25, 160, 50);

      ctx.fillStyle = '#22C55E';
      ctx.beginPath();
      ctx.arc(curX, curY, 5, 0, Math.PI * 2);
      ctx.fill();
    }

  } else if (watermarkMode === 'image' && loadedImageElement) {
    const imgW = 120;
    const imgH = (loadedImageElement.height / loadedImageElement.width) * imgW;

    if (watermarkPosition === 'tile') {
      for (let x = 30; x < w; x += 150) {
        for (let y = 30; y < h; y += 150) {
          ctx.drawImage(loadedImageElement, x, y, imgW * 0.7, imgH * 0.7);
        }
      }
    } else {
      ctx.drawImage(loadedImageElement, curX - imgW / 2, curY - imgH / 2, imgW, imgH);

      ctx.restore();
      ctx.save();
      ctx.strokeStyle = '#22C55E';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(curX - imgW / 2 - 4, curY - imgH / 2 - 4, imgW + 8, imgH + 8);
    }
  }

  ctx.restore();
}

function parseTargetPages() {
  if (pageRangeType === 'all') {
    return Array.from({ length: totalPagesCount }, (_, i) => i + 1);
  }
  if (pageRangeType === 'first') {
    return [1];
  }
  const inputVal = document.getElementById('customRangeInput')?.value.trim();
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

/* ==================== VECTOR PDF WATERMARK ENGINE VIA PDF-LIB ==================== */
async function applyWatermarkAndDownload() {
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
    const { PDFDocument, StandardFonts, rgb, degrees } = PDFLib;

    const pdfDoc = await PDFDocument.load(ab);
    const pages = pdfDoc.getPages();
    const targetPages = parseTargetPages();

    progressBar.style.width = '50%';

    let embeddedFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    if (watermarkFont === 'TimesRoman') embeddedFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    if (watermarkFont === 'Courier') embeddedFont = await pdfDoc.embedFont(StandardFonts.Courier);

    let embeddedImage = null;
    if (watermarkMode === 'image' && uploadedImageDataUrl) {
      const imgBytes = await fetch(uploadedImageDataUrl).then(res => res.arrayBuffer());
      embeddedImage = await pdfDoc.embedPng(imgBytes).catch(() => pdfDoc.embedJpg(imgBytes));
    }

    const hex = watermarkColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255 || 0.9;
    const g = parseInt(hex.substring(2, 4), 16) / 255 || 0.3;
    const b = parseInt(hex.substring(4, 6), 16) / 255 || 0.2;
    const fontRgb = rgb(r, g, b);

    // Prepend option for PDF background vs foreground layering
    const isPrepended = (watermarkLayer === 'bg');

    for (let i = 0; i < pages.length; i++) {
      const pageNum = i + 1;
      if (!targetPages.includes(pageNum)) continue;

      const page = pages[i];
      const { width: pW, height: pH } = page.getSize();

      const pdfTargetX = customPosXRatio * pW;
      const pdfTargetY = (1.0 - customPosYRatio) * pH;

      if (watermarkMode === 'text') {
        const textSize = 42;
        const textWidth = embeddedFont.widthOfTextAtSize(watermarkText, textSize);

        if (watermarkPosition === 'tile') {
          for (let x = 60; x < pW; x += 200) {
            for (let y = 60; y < pH; y += 180) {
              page.drawText(watermarkText, {
                x,
                y,
                size: 28,
                font: embeddedFont,
                color: fontRgb,
                opacity: watermarkOpacity,
                rotate: degrees(watermarkRotation),
                prepend: isPrepended
              });
            }
          }
        } else {
          page.drawText(watermarkText, {
            x: pdfTargetX - textWidth / 2,
            y: pdfTargetY,
            size: textSize,
            font: embeddedFont,
            color: fontRgb,
            opacity: watermarkOpacity,
            rotate: degrees(watermarkRotation),
            prepend: isPrepended
          });
        }

      } else if (watermarkMode === 'image' && embeddedImage) {
        const imgDims = embeddedImage.scale(0.4);
        const iW = Math.min(220, imgDims.width);
        const iH = (imgDims.height / imgDims.width) * iW;

        if (watermarkPosition === 'tile') {
          for (let x = 40; x < pW; x += 180) {
            for (let y = 40; y < pH; y += 180) {
              page.drawImage(embeddedImage, {
                x,
                y,
                width: iW * 0.6,
                height: iH * 0.6,
                opacity: watermarkOpacity,
                prepend: isPrepended
              });
            }
          }
        } else {
          page.drawImage(embeddedImage, {
            x: pdfTargetX - iW / 2,
            y: pdfTargetY - iH / 2,
            width: iW,
            height: iH,
            opacity: watermarkOpacity,
            prepend: isPrepended
          });
        }
      }
    }

    progressBar.style.width = '90%';
    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    processedPdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    processedFileName = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-watermarked.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = processedFileName;
      document.getElementById('resModeText').innerText = watermarkMode === 'text' ? 'Text Watermark' : 'Image Logo Watermark';

      const downloadBtn = document.getElementById('downloadWatermarkedBtn');
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(processedPdfBlob);
        link.download = processedFileName;
        link.click();
      };
    }, 500);

  } catch (err) {
    console.error("Error applying watermark:", err);
    alert(`Could not apply watermark: ${err.message || err}`);
    resetTool();
  }
}

function removeUploadedImage() {
  uploadedImageDataUrl = null;
  loadedImageElement = null;
  const input = document.getElementById('imageFileInput');
  if (input) input.value = "";
  document.getElementById('imagePreviewBox')?.classList.add('hidden');
  updateLiveCanvasPreview();
}

function resetTool() {
  pdfFile = null;
  pdfDocObj = null;
  cachedPdfCanvas = null;
  loadedImageElement = null;
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
