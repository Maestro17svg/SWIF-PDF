// SWIF PDF - Standalone Electronic Signature & Stamp Tool Script (With Free Color Picker & Expanded Cursive Fonts)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Sign <span class='text-coral'>PDF</span> Electronically & Add Stamps",
    hero_subtitle: "Draw your signature, type in cursive font, upload a signature image or company stamp, and place it anywhere on your PDF.",
    drop_title: "Drag & drop your PDF document here",
    drop_or: "or",
    drop_btn: "Select PDF File to Sign",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    tab_draw: "Draw Signature",
    tab_type: "Type Name",
    tab_upload: "Upload Signature Image",
    tab_stamp: "Company Stamp / Seal",
    color_label: "Signature Color:",
    custom_color_label: "Custom Color:",
    font_label: "Handwriting Style:",
    btn_clear: "Clear Canvas",
    btn_add_sig: "Add Signature to Document",
    btn_add_stamp: "Add Stamp to Document",
    page_prev: "Previous Page",
    page_next: "Next Page",
    page_counter: "Page {current} of {total}",
    btn_apply: "Apply & Download Signed PDF",
    btn_reset: "Sign Another Document",
    status_processing: "Embedding signatures into PDF document...",
    status_done: "Signed PDF ready!",
    res_title: "Document Signed Successfully",
    res_filename: "File Name:",
    res_signatures_count: "Signatures Applied:",
    btn_download: "Download Signed PDF",
    faq_title: "PDF Signature <span class='text-coral'>FAQ</span>",
    faq_q1: "Are electronic signatures created with SWIF PDF legally binding?",
    faq_a1: "Yes! SWIF PDF embeds valid electronic signature overlays directly into your PDF structure in compliance with standard e-signature specifications.",
    faq_q2: "Can I add multiple signatures and stamps on different pages?",
    faq_a2: "Absolutely! You can place as many signatures and company stamps as you need across any page of your document.",
    faq_q3: "Is my signature saved on any server?",
    faq_a3: "No! All signature drawings and PDF processing happen 100% locally in your browser memory.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Signer un <span class='text-coral'>PDF</span> électroniquement & Ajouter un tampon",
    hero_subtitle: "Dessinez votre signature, tapez votre nom en écriture manuscrite, ou importez un tampon d'entreprise sur votre PDF.",
    drop_title: "Glissez & déposez votre document PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF à signer",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    tab_draw: "Dessiner à la main",
    tab_type: "Taper son nom",
    tab_upload: "Importer une signature",
    tab_stamp: "Tampon / Cachet",
    color_label: "Couleur de la signature :",
    custom_color_label: "Couleur personnalisée :",
    font_label: "Style manuscrit :",
    btn_clear: "Effacer le dessin",
    btn_add_sig: "Ajouter la signature au document",
    btn_add_stamp: "Ajouter le tampon au document",
    page_prev: "Page précédente",
    page_next: "Page suivante",
    page_counter: "Page {current} sur {total}",
    btn_apply: "Appliquer et télécharger le PDF signé",
    btn_reset: "Signer un autre document",
    status_processing: "Incrustation des signatures dans le PDF...",
    status_done: "PDF signé prêt !",
    res_title: "Document signé avec succès",
    res_filename: "Nom du fichier :",
    res_signatures_count: "Signatures appliquées :",
    btn_download: "Télécharger le PDF signé",
    faq_title: "Foire Aux Questions <span class='text-coral'>Signature PDF</span>",
    faq_q1: "Les signatures électroniques sont-elles valides ?",
    faq_a1: "Oui ! SWIF PDF incruste des éléments de signature électronique conformes aux normes standard de documents PDF.",
    faq_q2: "Puis-je signer à plusieurs endroits et sur différentes pages ?",
    faq_a2: "Absolument ! Vous pouvez ajouter autant de signatures et de tampons d'entreprise que vous le souhaitez.",
    faq_q3: "Ma signature est-elle enregistrée sur un serveur ?",
    faq_a3: "Non ! Tout le traitement s'effectue à 100% dans la mémoire locale de votre navigateur.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Firmar <span class='text-coral'>PDF</span> Electrónicamente y Añadir Sellos",
    hero_subtitle: "Dibuja tu firma, escribe tu nombre o importa el sello de tu empresa.",
    drop_title: "Arrastra y suelta tu documento PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF",
    drop_info: "Procesamiento 100% local.",
    tab_draw: "Dibujar a mano",
    tab_type: "Escribir nombre",
    tab_upload: "Subir imagen",
    tab_stamp: "Sello de empresa",
    color_label: "Color de firma:",
    custom_color_label: "Color personalizado:",
    font_label: "Estilo de letra:",
    btn_clear: "Borrar",
    btn_add_sig: "Añadir Firma al Documento",
    btn_add_stamp: "Añadir Sello al Documento",
    page_prev: "Página Anterior",
    page_next: "Página Siguiente",
    page_counter: "Página {current} de {total}",
    btn_apply: "Aplicar y Descargar PDF Firmado",
    btn_reset: "Firmar Otro Documento",
    status_processing: "Incrustando firmas...",
    status_done: "¡PDF Firmado Listo!",
    res_title: "Documento Firmado",
    res_filename: "Nombre del archivo:",
    res_signatures_count: "Firmas aplicadas:",
    btn_download: "Descargar PDF Firmado",
    faq_title: "FAQ <span class='text-coral'>Firma PDF</span>",
    faq_q1: "¿Es segura la firma?",
    faq_a1: "Sí, todo se procesa de forma 100% privada.",
    faq_q2: "¿Puedo añadir varias firmas?",
    faq_a2: "Sí, en cualquier página.",
    faq_q3: "¿Se guardan datos?",
    faq_a3: "No, todo ocurre en tu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Elektronisch Unterzeichnen & Stempeln",
    hero_subtitle: "Zeichnen Sie Ihre Unterschrift, tippen Sie Ihren Namen oder fügen Sie einen Firmenstempel ein.",
    drop_title: "PDF-Dokument hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "PDF-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung.",
    tab_draw: "Zeichnen",
    tab_type: "Name Tippen",
    tab_upload: "Bild Hochladen",
    tab_stamp: "Firmenstempel",
    color_label: "Unterschrift-Farbe:",
    custom_color_label: "Eigene Farbe:",
    font_label: "Schriftart:",
    btn_clear: "Löschen",
    btn_add_sig: "Unterschrift Einfügen",
    btn_add_stamp: "Stempel Einfügen",
    page_prev: "Vorherige Seite",
    page_next: "Nächste Seite",
    page_counter: "Seite {current} von {total}",
    btn_apply: "Signiertes PDF Herunterladen",
    btn_reset: "Weitere Datei Unterzeichnen",
    status_processing: "Betette Unterschriften ein...",
    status_done: "Signiertes PDF Bereit!",
    res_title: "Dokument Unterzeichnet",
    res_filename: "Dateiname:",
    res_signatures_count: "Eingefügte Unterschriften:",
    btn_download: "Signiertes PDF Herunterladen",
    faq_title: "PDF Signature <span class='text-coral'>FAQ</span>",
    faq_q1: "Sicher?",
    faq_a1: "Ja, 100% lokal im Browser.",
    faq_q2: "Mehrere Unterschriften?",
    faq_a2: "Ja, auf allen Seiten möglich.",
    faq_q3: "Datenschutz?",
    faq_a3: "Kein Upload auf Server.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Assinar <span class='text-coral'>PDF</span> Eletronicamente e Adicionar Selos",
    hero_subtitle: "Desenhe a sua assinatura, digite o seu nome em estilo manuscrito ou insira um carimbo.",
    drop_title: "Arraste e largue o seu documento PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF",
    drop_info: "Processamento 100% local.",
    tab_draw: "Desenhar",
    tab_type: "Digitar Nome",
    tab_upload: "Carregar Imagem",
    tab_stamp: "Carimbo de Empresa",
    color_label: "Cor da Assinatura:",
    custom_color_label: "Cor personalizada:",
    font_label: "Estilo:",
    btn_clear: "Limpar",
    btn_add_sig: "Adicionar Assinatura",
    btn_add_stamp: "Adicionar Carimbo",
    page_prev: "Página Anterior",
    page_next: "Página Seguinte",
    page_counter: "Página {current} de {total}",
    btn_apply: "Aplicar e Descarregar PDF Assinado",
    btn_reset: "Assinar Outro Ficheiro",
    status_processing: "A aplicar assinaturas...",
    status_done: "PDF Assinado Pronto!",
    res_title: "Documento Assinado",
    res_filename: "Nome do Ficheiro:",
    res_signatures_count: "Assinaturas aplicadas:",
    btn_download: "Descarregar PDF Assinado",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Assinatura PDF</span>",
    faq_q1: "É seguro?",
    faq_a1: "Sim, processamento 100% local.",
    faq_q2: "Múltiplas assinaturas?",
    faq_a2: "Sim, em qualquer página.",
    faq_q3: "Salva dados?",
    faq_a3: "Não, zero servidor.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Firma <span class='text-coral'>PDF</span> Elettronicamente & Aggiungi Timbri",
    hero_subtitle: "Disegna la tua firma, digita il tuo nome in corsivo o carica un timbro aziendale.",
    drop_title: "Trascina e rilascia il tuo documento PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF",
    drop_info: "Elaborazione 100% locale.",
    tab_draw: "Disegna",
    tab_type: "Digita Nome",
    tab_upload: "Carica Immagine",
    tab_stamp: "Timbro Aziendale",
    color_label: "Colore Firma:",
    custom_color_label: "Colore personalizzato:",
    font_label: "Stile Scrittura:",
    btn_clear: "Cancella",
    btn_add_sig: "Aggiungi Firma al Documento",
    btn_add_stamp: "Aggiungi Timbro al Documento",
    page_prev: "Pagina Precedente",
    page_next: "Pagina Successiva",
    page_counter: "Pagina {current} di {total}",
    btn_apply: "Applica e Scarica PDF Firmato",
    btn_reset: "Firma Un Altro Documento",
    status_processing: "Applicazione firme...",
    status_done: "PDF Firmato Pronto!",
    res_title: "Documento Firmato",
    res_filename: "Nome File:",
    res_signatures_count: "Firme applicate:",
    btn_download: "Scarica PDF Firmato",
    faq_title: "FAQ <span class='text-coral'>Firma PDF</span>",
    faq_q1: "Sicurezza?",
    faq_a1: "Elaborazione 100% locale.",
    faq_q2: "Più firme?",
    faq_a2: "Sì, su qualsiasi pagina.",
    faq_q3: "Salva su server?",
    faq_a3: "No, nessun server.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Podpisz <span class='text-coral'>PDF</span> Elektronicznie i Dodaj Pieczątki",
    hero_subtitle: "Narysuj swój podpis, wpisz nazwisko lub dodaj pieczątkę firmową.",
    drop_title: "Przeciągnij i upuść dokument PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF",
    drop_info: "Przetwarzanie 100% lokalnie.",
    tab_draw: "Rysuj",
    tab_type: "Wpisz Imię",
    tab_upload: "Wgraj Obraz",
    tab_stamp: "Pieczątka Firmowa",
    color_label: "Kolor Podpisu:",
    custom_color_label: "Własny kolor:",
    font_label: "Styl Czcionki:",
    btn_clear: "Wyczyść",
    btn_add_sig: "Dodaj Podpis",
    btn_add_stamp: "Dodaj Pieczątkę",
    page_prev: "Poprzednia Strona",
    page_next: "Następna Strona",
    page_counter: "Strona {current} z {total}",
    btn_apply: "Zastosuj i Pobierz Podpisany PDF",
    btn_reset: "Podpisz Inny Plik",
    status_processing: "Wklejanie podpisów...",
    status_done: "Podpisany PDF Gotowy!",
    res_title: "Dokument Podpisany",
    res_filename: "Nazwa Pliku:",
    res_signatures_count: "Zastosowane podpisy:",
    btn_download: "Pobierz Podpisany PDF",
    faq_title: "FAQ <span class='text-coral'>Podpis PDF</span>",
    faq_q1: "Czy to bezpieczne?",
    faq_a1: "Tak, 100% w przeglądarce.",
    faq_q2: "Wiele podpisów?",
    faq_a2: "Tak, na dowolnej stronie.",
    faq_q3: "Zero serwera?",
    faq_a3: "Tak, bez wysyłania.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "توقيع <span class='text-coral'>PDF</span> إلكترونياً وإضافة أختام",
    hero_subtitle: "ارسم توقيعك بيدك، اكتب اسمك بإنشاء خط يدي، أو أضف ختم الشركة الرسمي على وثيقتك.",
    drop_title: "اسحب مستند PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار مستند PDF للتوقيع",
    drop_info: "معالجة محلية 100% داخل المتصفح بدون رفع الملفات.",
    tab_draw: "رسم يدوي",
    tab_type: "كتابة الاسم",
    tab_upload: "رفع صورة التوقيع",
    tab_stamp: "ختم / شارة الشركة",
    color_label: "لون التوقيع:",
    custom_color_label: "لون مخصص:",
    font_label: "نمط الخط اليدوي:",
    btn_clear: "مسح الرسم",
    btn_add_sig: "إضافة التوقيع إلى المستند",
    btn_add_stamp: "إضافة الختم إلى المستند",
    page_prev: "الصفحة السابقة",
    page_next: "الصفحة التالية",
    page_counter: "صفحة {current} من {total}",
    btn_apply: "تطبيق وتحميل مستند PDF الموقع",
    btn_reset: "توقيع مستند آخر",
    status_processing: "جاري دمج التواقيع في المستند...",
    status_done: "مستند PDF الموقع جاهز!",
    res_title: "تم توقيع المستند بنجاح",
    res_filename: "اسم الملف:",
    res_signatures_count: "عدد التواقيع المضافة:",
    btn_download: "تحميل PDF الموقع",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>توقيع PDF</span>",
    faq_q1: "هل التواقيع الإلكترونية آمنة وقانونية؟",
    faq_a1: "نعم! يتم دمج التواقيع محلياً داخل بنية ملف PDF وفقاً للمواصفات الرسمية.",
    faq_q2: "هل يمكن إضافة عدة تواقيع وأختام على صفحات مختلفة؟",
    faq_a2: "بالتأكيد! يمكنك إضافة أي عدد من التواقيع والأختام عبر كل صفحات المستند.",
    faq_q3: "هل يتم حفظ التوقيع على أي خادم؟",
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

// Drawing Canvas State
let isDrawing = false;
let sigCanvasCtx = null;

// Placed Overlays State
let placedOverlays = [];

// Custom signature settings
let selectedColor = '#1E2029';
let uploadedSigImage = null;
let uploadedStampImage = null;

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
  initSigTabs();
  initDrawingCanvas();
  initColorPickers();
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

  refreshVisibleOverlays();
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

/* ==================== COLOR PICKERS & PRESETS ==================== */
function initColorPickers() {
  const customColorInput = document.getElementById('customColorInput');

  // Preset color dots
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('ring-4', 'ring-orange-400', 'scale-110'));
      dot.classList.add('ring-4', 'ring-orange-400', 'scale-110');
      selectedColor = dot.getAttribute('data-color');

      if (customColorInput) customColorInput.value = selectedColor;
      applySelectedColorToActiveTools();
    });
  });

  // Universal Color Picker Input
  if (customColorInput) {
    customColorInput.addEventListener('input', (e) => {
      selectedColor = e.target.value;
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('ring-4', 'ring-orange-400', 'scale-110'));
      applySelectedColorToActiveTools();
    });
  }
}

function applySelectedColorToActiveTools() {
  // Update stroke style for drawing canvas
  if (sigCanvasCtx) {
    sigCanvasCtx.strokeStyle = selectedColor;
  }
  // Update typed preview font color
  updateTypedSignaturePreview();
}

/* ==================== SIGNATURE CREATION TABS ==================== */
function initSigTabs() {
  const tabBtns = document.querySelectorAll('.sig-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active', 'border-[#22C55E]', 'text-[#22C55E]', 'bg-[#F0FDF4]'));
      btn.classList.add('active', 'border-[#22C55E]', 'text-[#22C55E]', 'bg-[#F0FDF4]');

      const targetTab = btn.getAttribute('data-tab');
      document.querySelectorAll('.sig-tab-content').forEach(c => c.classList.add('hidden'));
      const activeContent = document.getElementById(`tabContent_${targetTab}`);
      if (activeContent) activeContent.classList.remove('hidden');
    });
  });

  // Type signature inputs
  const typeInput = document.getElementById('typeInput');
  const typeFontSelect = document.getElementById('typeFontSelect');
  if (typeInput) typeInput.addEventListener('input', updateTypedSignaturePreview);
  if (typeFontSelect) typeFontSelect.addEventListener('change', updateTypedSignaturePreview);

  // File upload inputs
  const sigImgInput = document.getElementById('sigImageInput');
  if (sigImgInput) {
    sigImgInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          uploadedSigImage = ev.target.result;
          document.getElementById('sigImagePreview').src = uploadedSigImage;
          document.getElementById('sigImagePreviewBox').classList.remove('hidden');
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }

  const stampImgInput = document.getElementById('stampImageInput');
  if (stampImgInput) {
    stampImgInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          uploadedStampImage = ev.target.result;
          document.getElementById('stampImagePreview').src = uploadedStampImage;
          document.getElementById('stampImagePreviewBox').classList.remove('hidden');
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }
}

/* ==================== DRAWING CANVAS ==================== */
function initDrawingCanvas() {
  const canvas = document.getElementById('drawCanvas');
  if (!canvas) return;
  sigCanvasCtx = canvas.getContext('2d');

  function startDraw(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    sigCanvasCtx.beginPath();
    sigCanvasCtx.moveTo(x, y);
    sigCanvasCtx.strokeStyle = selectedColor;
    sigCanvasCtx.lineWidth = 3;
    sigCanvasCtx.lineCap = 'round';
    sigCanvasCtx.lineJoin = 'round';
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
    sigCanvasCtx.lineTo(x, y);
    sigCanvasCtx.stroke();
  }

  function stopDraw() {
    isDrawing = false;
  }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);

  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', stopDraw);
}

function clearDrawingCanvas() {
  const canvas = document.getElementById('drawCanvas');
  if (canvas && sigCanvasCtx) {
    sigCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function updateTypedSignaturePreview() {
  const text = document.getElementById('typeInput').value.trim() || 'John Doe';
  const font = document.getElementById('typeFontSelect').value;
  const preview = document.getElementById('typedPreviewText');
  if (preview) {
    preview.style.fontFamily = font;
    preview.style.color = selectedColor;
    preview.innerText = text;
  }
}

/* ==================== ADDING SIGNATURE TO OVERLAY ==================== */
function addDrawnSignature() {
  const canvas = document.getElementById('drawCanvas');
  const dataUrl = canvas.toDataURL('image/png');
  createOverlayElement(dataUrl, 'sig', 180, 70);
}

async function addTypedSignature() {
  const text = document.getElementById('typeInput').value.trim() || 'John Doe';
  const font = document.getElementById('typeFontSelect').value;

  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = 600;
  tempCanvas.height = 180;
  const ctx = tempCanvas.getContext('2d');

  try {
    // Wait for Google Font to be ready
    const fontNameOnly = font.split(',')[0].replace(/['"]/g, '');
    await document.fonts.load(`56px ${fontNameOnly}`);
  } catch (e) {
    console.log("Font load fallback:", e);
  }

  ctx.font = `56px ${font}`;
  ctx.fillStyle = selectedColor;
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 20, 90);

  const dataUrl = tempCanvas.toDataURL('image/png');
  createOverlayElement(dataUrl, 'sig', 200, 75);
}

function addUploadedSignature() {
  if (!uploadedSigImage) {
    alert("Please upload a signature image first.");
    return;
  }
  createOverlayElement(uploadedSigImage, 'sig', 180, 80);
}

function addStampImage() {
  if (!uploadedStampImage) {
    alert("Please upload a stamp or seal image first.");
    return;
  }
  createOverlayElement(uploadedStampImage, 'stamp', 120, 120);
}

function createOverlayElement(dataUrl, type, defaultW, defaultH) {
  const id = 'ov_' + Date.now() + Math.random().toString(36).substring(2, 5);

  const overlayObj = {
    id,
    pageNum: currentPageNum,
    x: 80,
    y: 100,
    width: defaultW,
    height: defaultH,
    dataUrl,
    type
  };

  placedOverlays.push(overlayObj);
  refreshVisibleOverlays();
}

function refreshVisibleOverlays() {
  const overlayContainer = document.getElementById('overlayContainer');
  overlayContainer.innerHTML = "";

  const pageOverlays = placedOverlays.filter(o => o.pageNum === currentPageNum);

  pageOverlays.forEach(ov => {
    const div = document.createElement('div');
    div.id = ov.id;
    div.className = "absolute group cursor-move border-2 border-dashed border-orange-400 rounded-lg p-1 bg-white/40 backdrop-blur-[2px] shadow-lg select-none";
    div.style.left = `${ov.x}px`;
    div.style.top = `${ov.y}px`;
    div.style.width = `${ov.width}px`;
    div.style.height = `${ov.height}px`;

    div.innerHTML = `
      <img src="${ov.dataUrl}" class="w-full h-full object-contain pointer-events-none" />
      <button onclick="removeOverlay('${ov.id}')" class="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-md hover:bg-red-700">
        &times;
      </button>
      <div class="resize-handle absolute -bottom-2 -right-2 w-4 h-4 bg-orange-600 rounded-full cursor-se-resize shadow-md"></div>
    `;

    makeDraggableAndResizable(div, ov);
    overlayContainer.appendChild(div);
  });
}

function removeOverlay(id) {
  placedOverlays = placedOverlays.filter(o => o.id !== id);
  refreshVisibleOverlays();
}

function makeDraggableAndResizable(element, ovObj) {
  let isDragging = false;
  let isResizing = false;
  let startX, startY, startW, startH, startLeft, startTop;

  const handle = element.querySelector('.resize-handle');

  // Mouse Handlers
  element.addEventListener('mousedown', (e) => {
    if (e.target === handle) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseInt(element.style.left || '0');
    startTop = parseInt(element.style.top || '0');
    e.stopPropagation();
  });

  handle.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startW = element.offsetWidth;
    startH = element.offsetHeight;
    e.stopPropagation();
  });

  // Touch Handlers for Mobile Devices
  element.addEventListener('touchstart', (e) => {
    if (e.target === handle) return;
    if (e.touches && e.touches.length > 0) {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startLeft = parseInt(element.style.left || '0');
      startTop = parseInt(element.style.top || '0');
      e.stopPropagation();
    }
  }, { passive: false });

  handle.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length > 0) {
      isResizing = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startW = element.offsetWidth;
      startH = element.offsetHeight;
      e.stopPropagation();
    }
  }, { passive: false });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const newLeft = Math.max(0, startLeft + dx);
      const newTop = Math.max(0, startTop + dy);
      element.style.left = `${newLeft}px`;
      element.style.top = `${newTop}px`;
      ovObj.x = newLeft;
      ovObj.y = newTop;
    } else if (isResizing) {
      const dw = e.clientX - startX;
      const dh = e.clientY - startY;
      const newW = Math.max(40, startW + dw);
      const newH = Math.max(30, startH + dh);
      element.style.width = `${newW}px`;
      element.style.height = `${newH}px`;
      ovObj.width = newW;
      ovObj.height = newH;
    }
  });

  document.addEventListener('touchmove', (e) => {
    if ((isDragging || isResizing) && e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      if (isDragging) {
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        const newLeft = Math.max(0, startLeft + dx);
        const newTop = Math.max(0, startTop + dy);
        element.style.left = `${newLeft}px`;
        element.style.top = `${newTop}px`;
        ovObj.x = newLeft;
        ovObj.y = newTop;
      } else if (isResizing) {
        const dw = touch.clientX - startX;
        const dh = touch.clientY - startY;
        const newW = Math.max(40, startW + dw);
        const newH = Math.max(30, startH + dh);
        element.style.width = `${newW}px`;
        element.style.height = `${newH}px`;
        ovObj.width = newW;
        ovObj.height = newH;
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


/* ==================== MERGE SIGNATURES & DOWNLOAD PDF ==================== */
async function applySignaturesAndDownload() {
  if (!pdfFile || placedOverlays.length === 0) {
    alert("Please place at least one signature or stamp on the document.");
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
    const pdfDoc = await PDFDocument.load(ab);

    progressBar.style.width = '60%';

    const pdfCanvas = document.getElementById('pdfCanvas');
    const displayW = pdfCanvas.width;
    const displayH = pdfCanvas.height;

    for (let i = 0; i < placedOverlays.length; i++) {
      const ov = placedOverlays[i];
      const pageIndex = ov.pageNum - 1;
      const pdfPage = pdfDoc.getPage(pageIndex);
      const { width: pdfW, height: pdfH } = pdfPage.getSize();

      const scaleX = pdfW / displayW;
      const scaleY = pdfH / displayH;

      const pdfOverlayW = ov.width * scaleX;
      const pdfOverlayH = ov.height * scaleY;
      const pdfOverlayX = ov.x * scaleX;
      const pdfOverlayY = pdfH - (ov.y * scaleY) - pdfOverlayH;

      const imageBytes = await fetch(ov.dataUrl).then(res => res.arrayBuffer());
      const embeddedImage = await pdfDoc.embedPng(imageBytes);

      pdfPage.drawImage(embeddedImage, {
        x: pdfOverlayX,
        y: pdfOverlayY,
        width: pdfOverlayW,
        height: pdfOverlayH
      });
    }

    progressBar.style.width = '90%';
    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    const signedBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const signedFileName = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-signed.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = signedFileName;
      document.getElementById('resSignaturesCount').innerText = `${placedOverlays.length} signatures/stamps`;

      const downloadBtn = document.getElementById('downloadSignedBtn');
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(signedBlob);
        link.download = signedFileName;
        link.click();
      };
    }, 500);

  } catch (err) {
    console.error("Error applying signatures:", err);
    alert(`An error occurred while building signed PDF: ${err.message || err}`);
    resetTool();
  }
}

function resetTool() {
  pdfFile = null;
  pdfDocObj = null;
  placedOverlays = [];
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
