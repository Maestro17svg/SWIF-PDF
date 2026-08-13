// SWIF PDF - Standalone PDF Page Rotation Tool Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Rotate <span class='text-coral'>PDF</span> Pages Online",
    hero_subtitle: "Rotate individual PDF pages or all pages at once 90°, 180° or 270° with 100% client-side privacy.",
    drop_title: "Drag & drop your PDF file here",
    drop_or: "or",
    drop_btn: "Select PDF File to Rotate",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    bulk_left: "Rotate All Left 90°",
    bulk_right: "Rotate All Right 90°",
    bulk_reset: "Reset All",
    btn_save: "Download Rotated PDF",
    status_rotating: "Applying page rotations & saving PDF...",
    status_done: "Rotated PDF document ready!",
    res_title: "PDF Rotated Successfully",
    res_filename: "File Name:",
    res_pages_count: "Total Pages:",
    btn_download: "Download Rotated PDF",
    btn_reset: "Rotate Another PDF",
    faq_title: "PDF Rotation <span class='text-coral'>FAQ</span>",
    faq_q1: "Is the PDF page rotation permanent?",
    faq_a1: "Yes! SWIF PDF updates the internal PDF page rotation metadata and saves a new vector PDF file.",
    faq_q2: "Can I rotate individual pages differently?",
    faq_a2: "Yes! Each page thumbnail has individual 90° left and right rotation buttons.",
    faq_q3: "Is my document uploaded to any server?",
    faq_a3: "No! All rotation processing is performed 100% locally in your web browser memory.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Pivoter & Tourner des Pages <span class='text-coral'>PDF</span>",
    hero_subtitle: "Faites pivoter des pages individuelles ou tout le document à 90°, 180° ou 270° gratuitement en 1 clic.",
    drop_title: "Glissez & déposez votre fichier PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF à pivoter",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    bulk_left: "Tout pivoter vers la gauche (90°)",
    bulk_right: "Tout pivoter vers la droite (90°)",
    bulk_reset: "Réinitialiser tout",
    btn_save: "Télécharger le nouveau PDF",
    status_rotating: "Application des rotations et génération du fichier PDF...",
    status_done: "PDF pivoté prêt !",
    res_title: "PDF pivoté avec succès",
    res_filename: "Nom du fichier :",
    res_pages_count: "Nombre de pages :",
    btn_download: "Télécharger le PDF pivoté",
    btn_reset: "Pivoter un autre PDF",
    faq_title: "Foire Aux Questions <span class='text-coral'>Rotation PDF</span>",
    faq_q1: "La rotation des pages est-elle permanente ?",
    faq_a1: "Oui ! SWIF PDF incruste les métadonnées de rotation dans la structure du document vectoriel.",
    faq_q2: "Puis-je pivoter des pages individuellement ?",
    faq_a2: "Absolument ! Chaque miniature possède ses propres boutons de rotation vers la gauche et la droite.",
    faq_q3: "Mon document est-il envoyé sur un serveur ?",
    faq_a3: "Non ! Tout le traitement s'effectue à 100% dans la mémoire de votre navigateur.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Rotar Páginas de <span class='text-coral'>PDF</span>",
    hero_subtitle: "Rota páginas individuales o todas a la vez 90°, 180° o 270°.",
    drop_title: "Arrastra y suelta tu archivo PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF",
    drop_info: "Procesamiento 100% local.",
    bulk_left: "Rotar Todo Izquierda (90°)",
    bulk_right: "Rotar Todo Derecha (90°)",
    bulk_reset: "Restablecer Todo",
    btn_save: "Descargar Nuevo PDF",
    status_rotating: "Aplicando rotaciones...",
    status_done: "¡PDF Rotado Listo!",
    res_title: "PDF Rotado Con Éxito",
    res_filename: "Nombre del archivo:",
    res_pages_count: "Total de páginas:",
    btn_download: "Descargar PDF Rotado",
    btn_reset: "Rotar Otro PDF",
    faq_title: "FAQ <span class='text-coral'>Rotación PDF</span>",
    faq_q1: "¿Es permanente?",
    faq_a1: "Sí, guarda las rotaciones en el PDF.",
    faq_q2: "¿Páginas individuales?",
    faq_a2: "Sí, cada miniatura tiene controles.",
    faq_q3: "¿Privacidad?",
    faq_a3: "100% en tu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Seiten Drehen",
    hero_subtitle: "Drehen Sie einzelne PDF-Seiten oder das gesamte Dokument um 90°, 180° oder 270°.",
    drop_title: "PDF-Datei hierher ziehen",
    drop_or: "oder",
    drop_btn: "PDF-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung im Browser.",
    bulk_left: "Alle nach Links drehen (90°)",
    bulk_right: "Alle nach Rechts drehen (90°)",
    bulk_reset: "Zurücksetzen",
    btn_save: "Neues PDF Herunterladen",
    status_rotating: "Wende Seitendrehungen an...",
    status_done: "Gedrehtes PDF Bereit!",
    res_title: "PDF Erfolgreich Gedreht",
    res_filename: "Dateiname:",
    res_pages_count: "Seitenanzahl:",
    btn_download: "Gedrehtes PDF Herunterladen",
    btn_reset: "Weitere Datei Drehen",
    faq_title: "PDF Drehen <span class='text-coral'>FAQ</span>",
    faq_q1: "Dauerhaft?",
    faq_a1: "Ja, speichert neue Drehungen im PDF.",
    faq_q2: "Einzelne Seiten?",
    faq_a2: "Ja, mit eigenen Buttons.",
    faq_q3: "Datenschutz?",
    faq_a3: "100% im Browser.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Rodar Páginas de <span class='text-coral'>PDF</span>",
    hero_subtitle: "Rode páginas individuais ou todas de uma vez a 90°, 180° ou 270°.",
    drop_title: "Arraste e largue o seu ficheiro PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF",
    drop_info: "Processamento 100% local no seu navegador.",
    bulk_left: "Rodar Tudo para a Esquerda (90°)",
    bulk_right: "Rodar Tudo para a Direita (90°)",
    bulk_reset: "Repor Tudo",
    btn_save: "Descarregar Novo PDF",
    status_rotating: "A aplicar rotações...",
    status_done: "PDF Rodado Pronto!",
    res_title: "PDF Rodado com Sucesso",
    res_filename: "Nome do Ficheiro:",
    res_pages_count: "Total de páginas:",
    btn_download: "Descarregar PDF Rodado",
    btn_reset: "Rodar Outro PDF",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Rotação PDF</span>",
    faq_q1: "É permanente?",
    faq_a1: "Sim, guarda a nova rotação no PDF.",
    faq_q2: "Páginas individuais?",
    faq_a2: "Sim, cada miniatura tem controlos.",
    faq_q3: "Seguro?",
    faq_a3: "100% no seu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Ruota Pagine <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Ruota singole pagine PDF o l'intero documento di 90°, 180° o 270°.",
    drop_title: "Trascina e rilascia il tuo file PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF",
    drop_info: "Elaborazione 100% locale nel tuo browser.",
    bulk_left: "Ruota Tutti a Sinistra (90°)",
    bulk_right: "Ruota Tutti a Destra (90°)",
    bulk_reset: "Ripristina Tutto",
    btn_save: "Scarica Nuovo PDF",
    status_rotating: "Applicazione rotazioni...",
    status_done: "PDF Ruotato Pronto!",
    res_title: "PDF Ruotato con Successo",
    res_filename: "Nome File:",
    res_pages_count: "Totale pagine:",
    btn_download: "Scarica PDF Ruotato",
    btn_reset: "Ruota Un Altro PDF",
    faq_title: "FAQ <span class='text-coral'>Rotazione PDF</span>",
    faq_q1: "Permanente?",
    faq_a1: "Sì, salva la nuova rotazione nel PDF.",
    faq_q2: "Pagine singole?",
    faq_a2: "Sì, ogni miniatura ha i suoi pulsanti.",
    faq_q3: "Sicuro?",
    faq_a3: "100% nel tuo browser.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Obracaj Strony <span class='text-coral'>PDF</span> Online",
    hero_subtitle: "Obracaj pojedyncze strony PDF lub cały dokument o 90°, 180° lub 270°.",
    drop_title: "Przeciągnij i upuść plik PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF",
    drop_info: "Przetwarzanie 100% lokalnie.",
    bulk_left: "Obróć Wszystko w Lewo (90°)",
    bulk_right: "Obróć Wszystko w Prawo (90°)",
    bulk_reset: "Resetuj Wszystko",
    btn_save: "Pobierz Nowy PDF",
    status_rotating: "Stosowanie obrotów...",
    status_done: "Obrócony PDF Gotowy!",
    res_title: "PDF Obrócony",
    res_filename: "Nazwa Pliku:",
    res_pages_count: "Liczba stron:",
    btn_download: "Pobierz Obrócony PDF",
    btn_reset: "Obróć Inny Plik",
    faq_title: "FAQ <span class='text-coral'>Obracanie PDF</span>",
    faq_q1: "Trwałe?",
    faq_a1: "Tak, zapisuje nowy obrót w PDF.",
    faq_q2: "Pojedyncze strony?",
    faq_a2: "Tak, każda miniaturka ma własne przyciski.",
    faq_q3: "Bezpieczne?",
    faq_a3: "100% w przeglądarce.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "تدوير صفحات <span class='text-coral'>PDF</span> أونلاين",
    hero_subtitle: "قُم بتدوير صفحات PDF فردية أو كافة الصفحات بـ 90° أو 180° أو 270° محلياً 100%.",
    drop_title: "اسحب ملف PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF للتدوير",
    drop_info: "معالجة محلية 100% داخل متصفحك.",
    bulk_left: "تدوير الكل لليسار (90°)",
    bulk_right: "تدوير الكل لليمين (90°)",
    bulk_reset: "إعادة ضبط الكل",
    btn_save: "تحميل مستند PDF الجديد",
    status_rotating: "جاري تطبيق التدوير وتوليد ملف PDF...",
    status_done: "مستند PDF المدور جاهز!",
    res_title: "تم تدوير صفحات PDF بنجاح",
    res_filename: "اسم الملف:",
    res_pages_count: "إجمالي الصفحات:",
    btn_download: "تحميل PDF المدور",
    btn_reset: "تدوير مستند آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>تدوير PDF</span>",
    faq_q1: "هل التدوير دائم في المستند؟",
    faq_a1: "نعم! يحفظ SWIF PDF زوايا التدوير الجديدة في بنية المستند الأساسية.",
    faq_q2: "هل يمكن تدوير صفحات فردية؟",
    faq_a2: "بالتأكيد! تحوي كل صورة مصغرة أزرار تدوير خاصة بها.",
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

// Array holding rotation angles per page index: [0, 90, 180, 270, ...]
let pageRotations = [];

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initDropzone();
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

    // Initialize rotations array with 0 degrees for each page
    pageRotations = new Array(totalPagesCount).fill(0);

    document.getElementById('dropzoneSection').classList.add('hidden');
    document.getElementById('editorSection').classList.remove('hidden');

    renderAllThumbnails();

  } catch (err) {
    console.error("Error opening PDF file:", err);
    alert("Could not load PDF document. Please try another file.");
  }
}

async function renderAllThumbnails() {
  const gridContainer = document.getElementById('thumbnailsGrid');
  gridContainer.innerHTML = "";

  for (let i = 1; i <= totalPagesCount; i++) {
    const pageCard = document.createElement('div');
    pageCard.className = "bg-white p-4 rounded-2xl border border-slate-200 shadow-md space-y-3 flex flex-col items-center hover:shadow-lg transition-all";
    pageCard.setAttribute('data-page-index', i - 1);

    pageCard.innerHTML = `
      <div class="w-full flex items-center justify-between text-xs font-extrabold text-slate-700 pb-2 border-b border-slate-100">
        <span>Page ${i}</span>
        <span class="angle-badge px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px]">0°</span>
      </div>
      
      <div class="thumb-canvas-wrapper w-full h-[220px] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden p-2">
        <canvas id="thumbCanvas_${i}" class="max-w-full max-h-full object-contain transition-transform duration-300 shadow-sm"></canvas>
      </div>

      <div class="flex items-center gap-2 w-full pt-1">
        <button onclick="rotateSinglePage(${i - 1}, -90)" type="button" class="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1 shadow-sm">
          <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
          <span>-90°</span>
        </button>
        <button onclick="rotateSinglePage(${i - 1}, 90)" type="button" class="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1 shadow-sm">
          <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i>
          <span>+90°</span>
        </button>
      </div>
    `;

    gridContainer.appendChild(pageCard);
    renderSingleThumbnailCanvas(i);
  }

  if (window.lucide) lucide.createIcons();
}

async function renderSingleThumbnailCanvas(pageNumber) {
  if (!pdfDocObj) return;

  const page = await pdfDocObj.getPage(pageNumber);
  const canvas = document.getElementById(`thumbCanvas_${pageNumber}`);
  if (!canvas) return;

  const viewport = page.getViewport({ scale: 0.4 });
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  const ctx = canvas.getContext('2d');
  await page.render({ canvasContext: ctx, viewport }).promise;
}

function rotateSinglePage(index, deltaAngle) {
  let currentAngle = pageRotations[index] || 0;
  currentAngle = (currentAngle + deltaAngle) % 360;
  if (currentAngle < 0) currentAngle += 360;
  pageRotations[index] = currentAngle;

  updateThumbnailRotationUI(index);
}

function rotateAllPages(deltaAngle) {
  for (let i = 0; i < pageRotations.length; i++) {
    let currentAngle = pageRotations[i] || 0;
    currentAngle = (currentAngle + deltaAngle) % 360;
    if (currentAngle < 0) currentAngle += 360;
    pageRotations[i] = currentAngle;
    updateThumbnailRotationUI(i);
  }
}

function resetAllRotations() {
  pageRotations = new Array(totalPagesCount).fill(0);
  for (let i = 0; i < totalPagesCount; i++) {
    updateThumbnailRotationUI(i);
  }
}

function updateThumbnailRotationUI(index) {
  const pageNumber = index + 1;
  const canvas = document.getElementById(`thumbCanvas_${pageNumber}`);
  const angle = pageRotations[index] || 0;

  if (canvas) {
    canvas.style.transform = `rotate(${angle}deg)`;
  }

  const card = document.querySelector(`[data-page-index="${index}"]`);
  if (card) {
    const badge = card.querySelector('.angle-badge');
    if (badge) {
      badge.innerText = `${angle}°`;
      if (angle !== 0) {
        badge.className = "angle-badge px-2 py-0.5 rounded-full bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black";
      } else {
        badge.className = "angle-badge px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px]";
      }
    }
  }
}

/* ==================== SAVE & DOWNLOAD ROTATED PDF VIA PDF-LIB ==================== */
async function applyRotationsAndDownload() {
  if (!pdfFile) return;

  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '30%';
  statusMsg.innerText = dict.status_rotating;

  try {
    const ab = await pdfFile.arrayBuffer();
    const { PDFDocument, degrees } = PDFLib;

    const pdfDoc = await PDFDocument.load(ab);
    progressBar.style.width = '60%';

    const pages = pdfDoc.getPages();

    pages.forEach((page, i) => {
      const addedAngle = pageRotations[i] || 0;
      if (addedAngle !== 0) {
        const existingAngle = page.getRotation().angle;
        const newAngle = (existingAngle + addedAngle) % 360;
        page.setRotation(degrees(newAngle));
      }
    });

    progressBar.style.width = '90%';
    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    const rotatedBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const rotatedFileName = `${pdfFile.name.replace(/\.[^/.]+$/, "")}-rotated.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = rotatedFileName;
      document.getElementById('resPagesCount').innerText = `${totalPagesCount} pages`;

      const downloadBtn = document.getElementById('downloadRotatedBtn');
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(rotatedBlob);
        link.download = rotatedFileName;
        link.click();
      };
    }, 500);

  } catch (err) {
    console.error("Error saving rotated PDF:", err);
    alert(`An error occurred while saving rotated PDF: ${err.message || err}`);
    resetTool();
  }
}

function resetTool() {
  pdfFile = null;
  pdfDocObj = null;
  pageRotations = [];
  totalPagesCount = 0;

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
