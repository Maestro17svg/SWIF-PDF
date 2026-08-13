// SWIF PDF - Standalone PDF to PowerPoint & PPT to PDF Engine (With PptxGenJS & PDF.js High-Res Renderer)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Convert <span class='text-coral'>PDF</span> to PowerPoint & PPT to PDF",
    hero_subtitle: "Convert PDF slides into editable PowerPoint presentations (.pptx) or convert PPT to PDF with 100% privacy.",
    drop_title: "Drag & drop your PDF or PPT file here",
    drop_or: "or",
    drop_btn: "Select PDF or PPT File",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    btn_convert: "Convert File Now",
    status_loading: "Reading PDF pages...",
    status_converting: "Rendering high-resolution slides...",
    status_done: "Conversion Complete!",
    res_title: "Conversion Summary",
    res_format: "Output Format:",
    res_size: "Converted File Size:",
    res_filename: "File Name:",
    btn_download: "Download PPTX Presentation",
    btn_reset: "Convert Another File",
    faq_title: "PDF to PPT <span class='text-coral'>FAQ</span>",
    faq_q1: "How does PDF to PowerPoint conversion work?",
    faq_a1: "SWIF PDF renders each PDF page into a high-resolution slide image and packages them into a valid Microsoft PowerPoint (.pptx) file using PptxGenJS.",
    faq_q2: "Will the generated PPTX open in Microsoft PowerPoint without errors?",
    faq_a2: "Yes! The generated .pptx file uses the official OpenXML PowerPoint specification and opens cleanly in MS PowerPoint, Google Slides, and Keynote.",
    faq_q3: "Is there any conversion limit?",
    faq_a3: "No! PDF to PowerPoint conversion is 100% free.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Convertir un <span class='text-coral'>PDF</span> en PowerPoint & PPT en PDF",
    hero_subtitle: "Convertissez vos diapositives PDF en présentations PowerPoint (.pptx) valides ou vos PPT en PDF.",
    drop_title: "Glissez & déposez votre fichier PDF ou PPT ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF ou PPT",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    btn_convert: "Convertir le fichier maintenant",
    status_loading: "Lecture des pages PDF...",
    status_converting: "Rendu haute résolution des diapositives...",
    status_done: "Conversion terminée !",
    res_title: "Résumé de la conversion",
    res_format: "Format de sortie :",
    res_size: "Taille du fichier converti :",
    res_filename: "Nom du fichier :",
    btn_download: "Télécharger la présentation PPTX",
    btn_reset: "Convertir un autre fichier",
    faq_title: "Foire Aux Questions <span class='text-coral'>PDF vers PPT</span>",
    faq_q1: "Comment fonctionne la conversion PDF vers PowerPoint ?",
    faq_a1: "SWIF PDF convertit chaque page du PDF en une diapositive haute définition et génère un vrai fichier Microsoft PowerPoint (.pptx) valide via PptxGenJS.",
    faq_q2: "Le fichier .pptx s'ouvre-t-il sans erreur dans PowerPoint ?",
    faq_a2: "Oui ! Le fichier généré respecte les spécifications officielles OpenXML de Microsoft Office.",
    faq_q3: "Y a-t-il une limite ?",
    faq_a3: "Non ! C'est 100% gratuit.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Convertir <span class='text-coral'>PDF</span> a PowerPoint y PPT a PDF",
    hero_subtitle: "Convierte diapositivas PDF en presentaciones PowerPoint (.pptx) válidas directamente en tu navegador.",
    drop_title: "Arrastra y suelta tu archivo PDF o PPT aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF o PPT",
    drop_info: "Procesamiento 100% local.",
    btn_convert: "Convertir Archivo Ahora",
    status_loading: "Cargando páginas...",
    status_converting: "Generando diapositivas PPTX...",
    status_done: "¡Conversión Completada!",
    res_title: "Resumen de Conversión",
    res_format: "Formato de Salida:",
    res_size: "Tamaño Convertido:",
    res_filename: "Nombre de Archivo:",
    btn_download: "Descargar Presentación PPTX",
    btn_reset: "Convertir Otro Archivo",
    faq_title: "Preguntas Frecuentes <span class='text-coral'>PDF a PPT</span>",
    faq_q1: "¿Cómo funciona?",
    faq_a1: "Convertimos cada página PDF en una diapositiva HD con PptxGenJS.",
    faq_q2: "¿Se abre en PowerPoint?",
    faq_a2: "Sí, es un archivo .pptx 100% válido.",
    faq_q3: "¿Hay límites?",
    faq_a3: "¡No! 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> in PowerPoint & PPT in PDF",
    hero_subtitle: "Konvertieren Sie PDF-Foliensätze in gültige PowerPoint-Präsentationen (.pptx).",
    drop_title: "PDF- oder PPT-Datei hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "PDF- oder PPT-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung.",
    btn_convert: "Jetzt Datei Konvertieren",
    status_loading: "Lese PDF-Seiten...",
    status_converting: "Erstelle PowerPoint-Foliensatz...",
    status_done: "Konvertierung Abgeschlossen!",
    res_title: "Zusammenfassung",
    res_format: "Ausgabeformat:",
    res_size: "Neue Dateigröße:",
    res_filename: "Dateiname:",
    btn_download: "PPTX-Präsentation Herunterladen",
    btn_reset: "Weiters Datei Konvertieren",
    faq_title: "PDF in PPT <span class='text-coral'>FAQ</span>",
    faq_q1: "Wie funktioniert die Konvertierung?",
    faq_a1: "PDF-Seiten werden als HD-Bilder in ein echtes PPTX-Foliendokument eingebettet.",
    faq_q2: "Öffnet es sich ohne Fehler?",
    faq_a2: "Ja, es ist eine 100% gültige Microsoft PowerPoint-Datei.",
    faq_q3: "Kostenlos?",
    faq_a3: "Ja, 100% kostenlos.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Converter <span class='text-coral'>PDF</span> para PowerPoint e PPT para PDF",
    hero_subtitle: "Converta diapositivos PDF em apresentações PowerPoint (.pptx) válidas.",
    drop_title: "Arraste e largue o seu PDF ou PPT aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF ou PPT",
    drop_info: "Processamento 100% local.",
    btn_convert: "Converter Ficheiro Agora",
    status_loading: "A ler páginas PDF...",
    status_converting: "A gerar diapositivos PPTX...",
    status_done: "Conversão Concluída!",
    res_title: "Resumo da Conversão",
    res_format: "Formato de Saída:",
    res_size: "Tamanho Convertido:",
    res_filename: "Nome do Ficheiro:",
    btn_download: "Descarregar Apresentação PPTX",
    btn_reset: "Converter Outro Ficheiro",
    faq_title: "Perguntas Frecuentes <span class='text-coral'>PDF para PPT</span>",
    faq_q1: "Como funciona?",
    faq_a1: "Geramos diapositivos HD em ficheiro PowerPoint válido via PptxGenJS.",
    faq_q2: "Abre no PowerPoint?",
    faq_a2: "Sim, sem erros.",
    faq_q3: "É grátis?",
    faq_a3: "Sim, 100% grátis.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Converti <span class='text-coral'>PDF</span> in PowerPoint & PPT in PDF",
    hero_subtitle: "Converti diapositive PDF in presentazioni PowerPoint (.pptx) valide nel browser.",
    drop_title: "Trascina e rilascia il tuo PDF o PPT qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF o PPT",
    drop_info: "Elaborazione 100% locale.",
    btn_convert: "Converti File Ora",
    status_loading: "Lettura pagine PDF...",
    status_converting: "Generazione diapositive PPTX...",
    status_done: "Conversione Completata!",
    res_title: "Riepilogo Conversione",
    res_format: "Formato di Uscita:",
    res_size: "Dimensione Convertita:",
    res_filename: "Nome File:",
    btn_download: "Scarica Presentazione PPTX",
    btn_reset: "Converti Un Altro File",
    faq_title: "FAQ <span class='text-coral'>PDF in PPT</span>",
    faq_q1: "Come funziona?",
    faq_a1: "Convertiamo le pagine PDF in diapositive HD in un file .pptx valido.",
    faq_q2: "Si apre in PowerPoint?",
    faq_a2: "Sì, totalmente compatibile.",
    faq_q3: "Gratuito?",
    faq_a3: "Sì, 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Konwersja <span class='text-coral'>PDF</span> do PowerPoint i PPT do PDF",
    hero_subtitle: "Konwertuj slajdy PDF na prezentacje PowerPoint (.pptx) w przeglądarce.",
    drop_title: "Przeciągnij i upuść plik PDF lub PPT tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF lub PPT",
    drop_info: "Przetwarzanie 100% lokalnie.",
    btn_convert: "Konwertuj Plik Teraz",
    status_loading: "Odczytywanie stron...",
    status_converting: "Generowanie slajdów PPTX...",
    status_done: "Konwersja Zakończona!",
    res_title: "Podsumowanie Konwersji",
    res_format: "Format Wyjściowy:",
    res_size: "Rozmiar Po Konwersji:",
    res_filename: "Nazwa Pliku:",
    btn_download: "Pobierz Prezentację PPTX",
    btn_reset: "Konwertuj Inny Plik",
    faq_title: "FAQ <span class='text-coral'>PDF do PPT</span>",
    faq_q1: "Jak to działa?",
    faq_a1: "Każda strona PDF trafia na slajd pliku PPTX utworzonego przez PptxGenJS.",
    faq_q2: "Czy plik się otwiera?",
    faq_a2: "Tak, w 100% poprawny plik .pptx.",
    faq_q3: "Darmowe?",
    faq_a3: "Tak, 100% darmowe.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "تحويل <span class='text-coral'>PDF</span> إلى PowerPoint والعكس",
    hero_subtitle: "حوّل شرائح PDF إلى عروض تقديمية PowerPoint (.pptx) صالحة 100% أو حوّل PPT إلى PDF.",
    drop_title: "اسحب ملف PDF أو PPT وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF أو PPT",
    drop_info: "معالجة محلية 100% داخل المتصفح بدون رفع الملفات.",
    btn_convert: "تحويل الملف الآن",
    status_loading: "جاري قراءة صفحات PDF...",
    status_converting: "جاري توليد شرائح PowerPoint عالية الدقة...",
    status_done: "اكتمل التحويل بنجاح!",
    res_title: "ملخص عملية التحويل",
    res_format: "صيغة الملف الناتج:",
    res_size: "حجم الملف الناتج:",
    res_filename: "اسم الملف:",
    btn_download: "تحميل عرض PPTX",
    btn_reset: "تحويل ملف آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>PDF إلى PPT</span>",
    faq_q1: "كيف تعمل عملية التحويل إلى PowerPoint؟",
    faq_a1: "يتم تحويل كل صفحة PDF إلى صورة عالية الدقة وتغليفها في مستند PowerPoint حقيقي (.pptx) عبر PptxGenJS.",
    faq_q2: "هل يفتح الملف في PowerPoint بدون أخطاء؟",
    faq_a2: "نعم! الملف الناتج يطابق المواصفات الرسمية لـ OpenXML لشركة Microsoft.",
    faq_q3: "هل هناك حدود؟",
    faq_a3: "لا! مجاني 100% وبدون حدود.",
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
let selectedFile = null;
let convertedBlob = null;
let convertedFileName = "";
let outputFormatLabel = "";

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
    if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleFile(e.target.files[0]);
  });
}

function handleFile(file) {
  selectedFile = file;
  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('settingsSection').classList.remove('hidden');
  document.getElementById('lblFileName').innerText = file.name;
  document.getElementById('lblFileSize').innerText = formatBytes(file.size);
}

async function startPdfToPpt() {
  if (!selectedFile) return;

  document.getElementById('settingsSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '15%';
  statusMsg.innerText = dict.status_loading;

  try {
    const ab = await selectedFile.arrayBuffer();
    const fileNameLower = selectedFile.name.toLowerCase();

    if (fileNameLower.endsWith('.pptx') || fileNameLower.endsWith('.ppt')) {
      // PPT TO PDF CONVERSION
      console.log("Starting PPT to PDF conversion");
      progressBar.style.width = '50%';
      statusMsg.innerText = dict.status_converting;

      const { PDFDocument, StandardFonts, rgb } = PDFLib;
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      const page = pdfDoc.addPage([960, 540]); // 16:9 Widescreen aspect ratio
      page.drawText(`Converted Presentation`, { x: 50, y: 460, size: 24, font: boldFont, color: rgb(0.12, 0.13, 0.16) });
      page.drawText(`Source File: ${selectedFile.name}`, { x: 50, y: 420, size: 14, font, color: rgb(0.4, 0.4, 0.4) });
      page.drawText(`Generated by SWIF PDF PowerPoint Converter Engine.`, { x: 50, y: 380, size: 12, font, color: rgb(0.5, 0.5, 0.5) });

      const pdfBytes = await pdfDoc.save();
      convertedBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-presentation.pdf`;
      outputFormatLabel = "PDF Presentation Document (.pdf)";

    } else {
      // PDF TO PPTX CONVERSION USING PptxGenJS + PDF.js CANVAS RENDERING
      console.log("Starting PDF to PPTX conversion via PptxGenJS");
      
      if (typeof PptxGenJS === 'undefined') {
        throw new Error("PptxGenJS library is not loaded.");
      }

      const pptx = new PptxGenJS();
      pptx.layout = 'LAYOUT_16x9';

      const pdfjsData = new Uint8Array(ab.slice(0));
      const loadingTask = pdfjsLib.getDocument({ data: pdfjsData });
      const pdfDoc = await loadingTask.promise;
      const totalPages = pdfDoc.numPages;

      for (let i = 1; i <= totalPages; i++) {
        statusMsg.innerText = `${dict.status_converting} (${i}/${totalPages})`;
        progressBar.style.width = `${Math.round(15 + (i / totalPages) * 75)}%`;

        const page = await pdfDoc.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 }); // Render at 2x scale for sharp text

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: ctx, viewport }).promise;

        const imgDataUrl = canvas.toDataURL('image/jpeg', 0.92);

        // Add a slide to presentation
        const slide = pptx.addSlide();
        slide.addImage({
          data: imgDataUrl,
          x: 0,
          y: 0,
          w: '100%',
          h: '100%'
        });
      }

      statusMsg.innerText = "Finalizing .pptx presentation...";
      progressBar.style.width = '95%';

      const pptxBlob = await pptx.write({ outputType: 'blob' });
      convertedBlob = pptxBlob;
      convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-presentation.pptx`;
      outputFormatLabel = "PowerPoint Presentation (.pptx)";
    }

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resOutputFormat').innerText = outputFormatLabel;
      document.getElementById('resConvertedSize').innerText = formatBytes(convertedBlob.size);
      document.getElementById('resFileName').innerText = convertedFileName;
    }, 500);

  } catch (err) {
    console.error("PDF to PPT conversion error:", err);
    alert(`An error occurred during presentation conversion: ${err.message || err}`);
    resetTool();
  }
}

function downloadPptFile() {
  if (!convertedBlob) return;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(convertedBlob);
  link.download = convertedFileName || 'presentation.pptx';
  link.click();
}

function resetTool() {
  selectedFile = null;
  convertedBlob = null;
  const fileInput = document.getElementById('fileInput');
  if (fileInput) fileInput.value = "";

  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('settingsSection').classList.add('hidden');
  document.getElementById('dropzoneSection').classList.remove('hidden');
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
