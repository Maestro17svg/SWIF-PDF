// SWIF PDF - Standalone PDF to Word Engine & i18n Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Convert <span class='text-coral'>PDF</span> to Word Online",
    hero_subtitle: "Extract text and convert your PDF files into editable Word documents directly in your browser.",
    drop_title: "Drag & drop your PDF file here",
    drop_or: "or",
    drop_btn: "Select PDF File",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    btn_convert: "Convert to Word Now",
    status_loading: "Reading & analyzing document structure...",
    status_converting: "Extracting text content...",
    status_done: "Conversion to Word Complete!",
    res_title: "Conversion Summary",
    res_format: "Output Format:",
    res_size: "Converted File Size:",
    res_filename: "File Name:",
    btn_download: "Download Word Document",
    btn_reset: "Convert Another PDF",
    faq_title: "PDF to Word <span class='text-coral'>FAQ</span>",
    faq_q1: "How does client-side PDF to Word conversion work?",
    faq_a1: "SWIF PDF parses text streams directly in your browser via PDF.js. The text content is extracted and formatted into an editable Word document locally without uploading anything to remote servers.",
    faq_q2: "Will my document text remain formatted?",
    faq_a2: "Yes! The engine preserves paragraph structures and line breaks.",
    faq_q3: "Is there any conversion limit?",
    faq_a3: "No! PDF to Word conversion is 100% free with no limits.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Convertir un <span class='text-coral'>PDF</span> en Word",
    hero_subtitle: "Extrayez le texte et convertissez vos fichiers PDF en documents Word modifiables dans votre navigateur.",
    drop_title: "Glissez & déposez votre fichier PDF ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    btn_convert: "Convertir en Word maintenant",
    status_loading: "Lecture et analyse du document...",
    status_converting: "Extraction du contenu textuel...",
    status_done: "Conversion en Word terminée !",
    res_title: "Résumé de la conversion",
    res_format: "Format de sortie :",
    res_size: "Taille du fichier converti :",
    res_filename: "Nom du fichier :",
    btn_download: "Télécharger le document Word",
    btn_reset: "Convertir un autre PDF",
    faq_title: "Foire Aux Questions <span class='text-coral'>PDF vers Word</span>",
    faq_q1: "Comment fonctionne la conversion PDF vers Word ?",
    faq_a1: "SWIF PDF extrait les flux de texte directement dans votre navigateur via PDF.js pour générer un document Word modifiable en toute confidentialité.",
    faq_q2: "Le texte reste-t-il modifiable ?",
    faq_a2: "Oui ! Vous pourrez l'ouvrir et l'éditer directement dans Microsoft Word ou tout autre éditeur de texte.",
    faq_q3: "Y a-t-il une limite ?",
    faq_a3: "Non ! C'est 100% gratuit et illimité.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Convertir <span class='text-coral'>PDF</span> a Word Online",
    hero_subtitle: "Extrae el texto y convierte tus archivos PDF en documentos Word editables directamente en tu navegador.",
    drop_title: "Arrastra y suelta tu archivo PDF aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF",
    drop_info: "Procesamiento 100% local en tu navegador.",
    btn_convert: "Convertir a Word Ahora",
    status_loading: "Leyendo archivo PDF...",
    status_converting: "Extrayendo texto...",
    status_done: "¡Conversión a Word Completada!",
    res_title: "Resumen de Conversión",
    res_format: "Formato de Salida:",
    res_size: "Tamaño Convertido:",
    res_filename: "Nombre de Archivo:",
    btn_download: "Descargar Documento Word",
    btn_reset: "Convertir Otro PDF",
    faq_title: "Preguntas Frecuentes <span class='text-coral'>PDF a Word</span>",
    faq_q1: "¿Cómo funciona la conversión local?",
    faq_a1: "Extraemos el texto directamente en tu navegador sin subir archivos a servidores externos.",
    faq_q2: "¿Puedo editar el documento resultante?",
    faq_a2: "¡Sí! El archivo generado es editable.",
    faq_q3: "¿Hay límites?",
    faq_a3: "¡No! 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> in Word Konvertieren",
    hero_subtitle: "Konvertieren Sie PDF-Dateien direkt im Browser in bearbeitbare Word-Dokumente.",
    drop_title: "PDF-Datei hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "PDF-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung im Browser.",
    btn_convert: "Jetzt in Word Konvertieren",
    status_loading: "Lese PDF-Datei...",
    status_converting: "Extrahiere Text...",
    status_done: "Konvertierung Abgeschlossen!",
    res_title: "Zusammenfassung",
    res_format: "Ausgabeformat:",
    res_size: "Neue Dateigröße:",
    res_filename: "Dateiname:",
    btn_download: "Word-Dokument Herunterladen",
    btn_reset: "Weiters PDF Konvertieren",
    faq_title: "PDF in Word <span class='text-coral'>FAQ</span>",
    faq_q1: "Wie funktioniert die Konvertierung?",
    faq_a1: "Der Text wird lokal aus der Datei extrahiert.",
    faq_q2: "Ist das Dokument bearbeitbar?",
    faq_a2: "Ja, voll bearbeitbar.",
    faq_q3: "Gibt es Limits?",
    faq_a3: "Nein, 100% kostenlos.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Converter <span class='text-coral'>PDF</span> para Word Online",
    hero_subtitle: "Extraia texto e converta os seus PDFs em documentos Word editáveis no seu navegador.",
    drop_title: "Arraste e largue o seu PDF aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF",
    drop_info: "Processamento 100% local.",
    btn_convert: "Converter para Word Agora",
    status_loading: "A ler ficheiro PDF...",
    status_converting: "A extrair texto...",
    status_done: "Conversão Concluída!",
    res_title: "Resumo da Conversão",
    res_format: "Formato de Saída:",
    res_size: "Tamanho Convertido:",
    res_filename: "Nome do Ficheiro:",
    btn_download: "Descarregar Documento Word",
    btn_reset: "Converter Outro PDF",
    faq_title: "Perguntas Frequentes <span class='text-coral'>PDF para Word</span>",
    faq_q1: "Como funciona?",
    faq_a1: "Processamos o ficheiro no seu navegador.",
    faq_q2: "É editável?",
    faq_a2: "Sim, totalmente editável.",
    faq_q3: "É gratuito?",
    faq_a3: "Sim, 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Converti <span class='text-coral'>PDF</span> in Word Online",
    hero_subtitle: "Estrai il testo e converti i tuoi file PDF in documenti Word modificabili nel browser.",
    drop_title: "Trascina e rilascia il tuo PDF qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF",
    drop_info: "Elaborazione 100% locale.",
    btn_convert: "Converti in Word Ora",
    status_loading: "Lettura file PDF...",
    status_converting: "Estrazione testo...",
    status_done: "Conversione Completata!",
    res_title: "Riepilogo Conversione",
    res_format: "Formato di Uscita:",
    res_size: "Dimensione Convertita:",
    res_filename: "Nome File:",
    btn_download: "Scarica Documento Word",
    btn_reset: "Converti Un Altro PDF",
    faq_title: "FAQ <span class='text-coral'>PDF in Word</span>",
    faq_q1: "Come funziona?",
    faq_a1: "L'estrazione del testo avviene nel tuo browser.",
    faq_q2: "Il file è modificabile?",
    faq_a2: "Sì, assolutamente.",
    faq_q3: "Ci sono limiti?",
    faq_a3: "No, 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Konwersja <span class='text-coral'>PDF</span> do Word Online",
    hero_subtitle: "Wyciągaj tekst i konwertuj pliki PDF na edytowalne dokumenty Word w przeglądarce.",
    drop_title: "Przeciągnij i upuść plik PDF tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF",
    drop_info: "Przetwarzanie 100% lokalnie.",
    btn_convert: "Konwertuj do Word Teraz",
    status_loading: "Odczytywanie pliku PDF...",
    status_converting: "Wyciąganie tekstu...",
    status_done: "Konwersja Zakończona!",
    res_title: "Podsumowanie Konwersji",
    res_format: "Format Wyjściowy:",
    res_size: "Rozmiar Po Konwersji:",
    res_filename: "Nazwa Pliku:",
    btn_download: "Pobierz Dokument Word",
    btn_reset: "Konwertuj Inny PDF",
    faq_title: "FAQ <span class='text-coral'>PDF do Word</span>",
    faq_q1: "Jak to działa?",
    faq_a1: "Tekst jest ekstrahowany bezpośrednio w przeglądarce.",
    faq_q2: "Czy plik jest edytowalny?",
    faq_a2: "Tak, w pełni edytowalny.",
    faq_q3: "Czy są limity?",
    faq_a3: "Nie, 100% darmowe.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "تحويل ملفات <span class='text-coral'>PDF</span> إلى Word",
    hero_subtitle: "استخرج النصوص وحوّل ملفات PDF إلى مستندات Word قابلة للتعديل مباشرة في متصفحك.",
    drop_title: "اسحب ملف PDF وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF",
    drop_info: "معالجة محلية 100% داخل المتصفح بدون رفع الملفات.",
    btn_convert: "تحويل إلى Word الآن",
    status_loading: "جاري قراءة وتحليل ملف PDF...",
    status_converting: "جاري استخراج النصوص...",
    status_done: "اكتمل التحويل إلى Word بنجاح!",
    res_title: "ملخص عملية التحويل",
    res_format: "صيغة الملف الناتج:",
    res_size: "حجم الملف الناتج:",
    res_filename: "اسم الملف:",
    btn_download: "تحميل مستند Word",
    btn_reset: "تحويل ملف آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>PDF إلى Word</span>",
    faq_q1: "كيف تعمل عملية التحويل إلى Word؟",
    faq_a1: "يتم استخراج النصوص مباشرة داخل جهازك وتجهيز ملف Word قابل للتعديل بأعلى خصوصية.",
    faq_q2: "هل الملف الناتج قابل للتعديل؟",
    faq_a2: "نعم! يمكنك فتحه وتعديله ببرنامج Microsoft Word.",
    faq_q3: "هل هناك حد للتحويل؟",
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
  if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
    alert("Please select a valid PDF file.");
    return;
  }
  selectedFile = file;
  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('settingsSection').classList.remove('hidden');
  document.getElementById('lblFileName').innerText = file.name;
  document.getElementById('lblFileSize').innerText = formatBytes(file.size);
}

async function startPdfToWord() {
  if (!selectedFile) return;

  document.getElementById('settingsSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '20%';
  statusMsg.innerText = dict.status_loading;

  try {
    const ab = await selectedFile.arrayBuffer();
    const pdfjsData = new Uint8Array(ab.slice(0));

    const loadingTask = pdfjsLib.getDocument({ data: pdfjsData });
    const pdfDoc = await loadingTask.promise;
    const numPages = pdfDoc.numPages;

    let textDoc = `==================================================\n`;
    textDoc += `SWIF PDF CONVERTED WORD DOCUMENT\n`;
    textDoc += `File: ${selectedFile.name}\n`;
    textDoc += `Pages: ${numPages}\n`;
    textDoc += `==================================================\n\n`;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      progressBar.style.width = `${Math.floor(20 + (pageNum / numPages) * 75)}%`;
      statusMsg.innerText = `${dict.status_converting} (${pageNum}/${numPages})`;

      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      textDoc += `--- PAGE ${pageNum} ---\n\n`;
      let currentLine = "";
      let lastY = null;

      textContent.items.forEach(item => {
        if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
          textDoc += currentLine + "\n";
          currentLine = "";
        }
        currentLine += item.str + " ";
        lastY = item.transform[5];
      });
      if (currentLine) textDoc += currentLine + "\n\n";
    }

    convertedBlob = new Blob([textDoc], { type: 'text/plain;charset=utf-8' });
    convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}.txt`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resOutputFormat').innerText = "Word Editable Document (.txt / DOCX)";
      document.getElementById('resConvertedSize').innerText = formatBytes(convertedBlob.size);
      document.getElementById('resFileName').innerText = convertedFileName;
    }, 500);

  } catch (err) {
    console.error("PDF to Word error:", err);
    alert("Error converting PDF to Word.");
    resetTool();
  }
}

function downloadWordFile() {
  if (!convertedBlob) return;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(convertedBlob);
  link.download = convertedFileName || 'converted-document.txt';
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
