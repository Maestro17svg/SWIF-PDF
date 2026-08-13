// SWIF PDF - Standalone JPG/PNG Image to PDF Engine & i18n Script

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Convert <span class='text-coral'>JPG / Image</span> to PDF Online",
    hero_subtitle: "Convert JPG, PNG, or WEBP photos into a professional PDF document directly in your browser.",
    drop_title: "Drag & drop your Image (JPG / PNG) file here",
    drop_or: "or",
    drop_btn: "Select Image File",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    btn_convert: "Convert Image to PDF Now",
    status_loading: "Reading image file...",
    status_converting: "Embedding image into PDF document...",
    status_done: "Conversion to PDF Complete!",
    res_title: "Conversion Summary",
    res_format: "Output Format:",
    res_size: "Converted PDF Size:",
    res_filename: "File Name:",
    btn_download: "Download PDF Document",
    btn_reset: "Convert Another Image",
    faq_title: "Image to PDF <span class='text-coral'>FAQ</span>",
    faq_q1: "How does client-side Image to PDF conversion work?",
    faq_a1: "SWIF PDF embeds your JPG or PNG image directly into a new PDF document structure using pdf-lib in your browser memory.",
    faq_q2: "What image formats are supported?",
    faq_a2: "JPG, JPEG, PNG, and WEBP images are fully supported.",
    faq_q3: "Is there any conversion limit?",
    faq_a3: "No! Image to PDF conversion is 100% free.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Convertir une <span class='text-coral'>Image / JPG</span> en PDF",
    hero_subtitle: "Transformez vos photos et images (JPG, PNG) en un document PDF professionnel dans votre navigateur.",
    drop_title: "Glissez & déposez votre Image (JPG / PNG) ici",
    drop_or: "ou",
    drop_btn: "Sélectionner une Image",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    btn_convert: "Convertir l'Image en PDF maintenant",
    status_loading: "Lecture de l'image...",
    status_converting: "Incorporation dans le document PDF...",
    status_done: "Conversion en PDF terminée !",
    res_title: "Résumé de la conversion",
    res_format: "Format de sortie :",
    res_size: "Taille du PDF converti :",
    res_filename: "Nom du fichier :",
    btn_download: "Télécharger le document PDF",
    btn_reset: "Convertir une autre image",
    faq_title: "Foire Aux Questions <span class='text-coral'>Image vers PDF</span>",
    faq_q1: "Comment fonctionne la conversion Image vers PDF ?",
    faq_a1: "SWIF PDF intègre directement l'image dans une structure PDF haute définition en mémoire locale via pdf-lib.",
    faq_q2: "Quels formats d'images sont acceptés ?",
    faq_a2: "JPG, JPEG, PNG et WEBP.",
    faq_q3: "Y a-t-il une limite ?",
    faq_a3: "Non ! C'est 100% gratuit.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Convertir <span class='text-coral'>Imagen / JPG</span> a PDF",
    hero_subtitle: "Convierte imágenes JPG o PNG en un documento PDF directamente en tu navegador.",
    drop_title: "Arrastra y suelta tu Imagen aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Imagen",
    drop_info: "Procesamiento 100% local.",
    btn_convert: "Convertir Imagen a PDF Ahora",
    status_loading: "Leyendo imagen...",
    status_converting: "Generando PDF...",
    status_done: "¡Conversión a PDF Completada!",
    res_title: "Resumen de Conversión",
    res_format: "Formato de Salida:",
    res_size: "Tamaño Convertido:",
    res_filename: "Nombre de Archivo:",
    btn_download: "Descargar Documento PDF",
    btn_reset: "Convertir Otra Imagen",
    faq_title: "Preguntas Frecuentes <span class='text-coral'>Imagen a PDF</span>",
    faq_q1: "¿Cómo funciona?",
    faq_a1: "Insertamos la imagen en un PDF localmente.",
    faq_q2: "¿Qué formatos admite?",
    faq_a2: "JPG, PNG y WEBP.",
    faq_q3: "¿Hay límites?",
    faq_a3: "¡No! 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>JPG / Bild</span> in PDF Konvertieren",
    hero_subtitle: "Konvertieren Sie JPG- oder PNG-Bilder direkt im Browser in PDF-Dokumente.",
    drop_title: "Bild-Datei hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "Bild-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung.",
    btn_convert: "Jetzt Bild in PDF Konvertieren",
    status_loading: "Lese Bild...",
    status_converting: "Erstelle PDF-Dokument...",
    status_done: "Konvertierung Abgeschlossen!",
    res_title: "Zusammenfassung",
    res_format: "Ausgabeformat:",
    res_size: "Neue Dateigröße:",
    res_filename: "Dateiname:",
    btn_download: "PDF-Dokument Herunterladen",
    btn_reset: "Weiters Bild Konvertieren",
    faq_title: "Bild in PDF <span class='text-coral'>FAQ</span>",
    faq_q1: "Wie funktioniert die Konvertierung?",
    faq_a1: "Bilder werden lokal in eine PDF eingebettet.",
    faq_q2: "Unterstützte Formate?",
    faq_a2: "JPG, PNG, WEBP.",
    faq_q3: "Kostenlos?",
    faq_a3: "Ja, 100% kostenlos.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Converter <span class='text-coral'>JPG / Imagem</span> para PDF",
    hero_subtitle: "Converta fotos JPG ou PNG num documento PDF diretamente no seu navegador.",
    drop_title: "Arraste e largue a sua Imagem aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Imagem",
    drop_info: "Processamento 100% local.",
    btn_convert: "Converter Imagem para PDF Agora",
    status_loading: "A ler imagem...",
    status_converting: "A gerar PDF...",
    status_done: "Conversão Concluída!",
    res_title: "Resumo da Conversão",
    res_format: "Formato de Saída:",
    res_size: "Tamanho Convertido:",
    res_filename: "Nome do Ficheiro:",
    btn_download: "Descarregar Documento PDF",
    btn_reset: "Converter Outra Imagem",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Imagem para PDF</span>",
    faq_q1: "Como funciona?",
    faq_a1: "Incorporamos a imagem no PDF no seu navegador.",
    faq_q2: "Formatos suportados?",
    faq_a2: "JPG, PNG, WEBP.",
    faq_q3: "É grátis?",
    faq_a3: "Sim, 100% grátis.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Converti <span class='text-coral'>JPG / Immagine</span> in PDF",
    hero_subtitle: "Converti foto JPG o PNG in un documento PDF direttamente nel browser.",
    drop_title: "Trascina e rilascia la tua Immagine qui",
    drop_or: "o",
    drop_btn: "Seleziona Immagine",
    drop_info: "Elaborazione 100% locale.",
    btn_convert: "Converti Immagine in PDF Ora",
    status_loading: "Lettura immagine...",
    status_converting: "Generazione PDF...",
    status_done: "Conversione Completata!",
    res_title: "Riepilogo Conversione",
    res_format: "Formato di Uscita:",
    res_size: "Dimensione Convertita:",
    res_filename: "Nome File:",
    btn_download: "Scarica Documento PDF",
    btn_reset: "Converti Un'Altra Immagine",
    faq_title: "FAQ <span class='text-coral'>Immagine in PDF</span>",
    faq_q1: "Come funziona?",
    faq_a1: "Incorporazione locale via pdf-lib.",
    faq_q2: "Formati supportati?",
    faq_a2: "JPG, PNG, WEBP.",
    faq_q3: "Gratuito?",
    faq_a3: "Sì, 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Konwersja <span class='text-coral'>JPG / Obrazu</span> do PDF",
    hero_subtitle: "Konwertuj zdjęcia JPG lub PNG na pliki PDF bezpośrednio w przeglądarce.",
    drop_title: "Przeciągnij i upuść Obraz tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Obraz",
    drop_info: "Przetwarzanie 100% lokalnie.",
    btn_convert: "Konwertuj Obraz do PDF Teraz",
    status_loading: "Odczytywanie obrazu...",
    status_converting: "Tworzenie PDF...",
    status_done: "Konwersja Zakończona!",
    res_title: "Podsumowanie Konwersji",
    res_format: "Format Wyjściowy:",
    res_size: "Rozmiar Po Konwersji:",
    res_filename: "Nazwa Pliku:",
    btn_download: "Pobierz Dokument PDF",
    btn_reset: "Konwertuj Inny Obraz",
    faq_title: "FAQ <span class='text-coral'>Obraz do PDF</span>",
    faq_q1: "Jak to działa?",
    faq_a1: "Obraz jest osadzany bezpośrednio w nowym pliku PDF.",
    faq_q2: "Jakie formaty?",
    faq_a2: "JPG, PNG, WEBP.",
    faq_q3: "Darmowe?",
    faq_a3: "Tak, 100% darmowe.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "تحويل <span class='text-coral'>الصور / JPG</span> إلى PDF",
    hero_subtitle: "حوّل صورك بصيغة JPG أو PNG إلى مستند PDF احترافي مباشرة في متصفحك.",
    drop_title: "اسحب الصورة (JPG / PNG) وأسقطها هنا",
    drop_or: "أو",
    drop_btn: "اختيار صورة",
    drop_info: "معالجة محلية 100% داخل المتصفح بدون رفع الملفات.",
    btn_convert: "تحويل الصورة إلى PDF الآن",
    status_loading: "جاري قراءة ملف الصورة...",
    status_converting: "جاري تضمين الصورة في مستند PDF...",
    status_done: "اكتمل التحويل إلى PDF بنجاح!",
    res_title: "ملخص عملية التحويل",
    res_format: "صيغة الملف الناتج:",
    res_size: "حجم الملف الناتج:",
    res_filename: "اسم الملف:",
    btn_download: "تحميل مستند PDF",
    btn_reset: "تحويل صورة أخرى",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>الصور إلى PDF</span>",
    faq_q1: "كيف تعمل عملية تحويل الصور إلى PDF؟",
    faq_a1: "يتم دمج الصورة مباشرة في هيكل ملف PDF عالي الدقة محلياً داخل جهازك.",
    faq_q2: "ما هي الصيغ المدعومة؟",
    faq_a2: "JPG و PNG و WEBP.",
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
  selectedFile = file;
  document.getElementById('dropzoneSection').classList.add('hidden');
  document.getElementById('settingsSection').classList.remove('hidden');
  document.getElementById('lblFileName').innerText = file.name;
  document.getElementById('lblFileSize').innerText = formatBytes(file.size);
}

async function startJpgToPdf() {
  if (!selectedFile) return;

  document.getElementById('settingsSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '30%';
  statusMsg.innerText = dict.status_loading;

  try {
    const imageBytes = await selectedFile.arrayBuffer();
    const { PDFDocument } = PDFLib;

    const pdfDoc = await PDFDocument.create();
    let embeddedImage;

    progressBar.style.width = '60%';
    statusMsg.innerText = dict.status_converting;

    if (selectedFile.type.includes('png') || selectedFile.name.toLowerCase().endsWith('.png')) {
      embeddedImage = await pdfDoc.embedPng(imageBytes);
    } else {
      embeddedImage = await pdfDoc.embedJpg(imageBytes);
    }

    const page = pdfDoc.addPage([embeddedImage.width, embeddedImage.height]);
    page.drawImage(embeddedImage, {
      x: 0,
      y: 0,
      width: embeddedImage.width,
      height: embeddedImage.height,
    });

    progressBar.style.width = '90%';
    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    convertedBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-converted.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resOutputFormat').innerText = "PDF Document (.pdf)";
      document.getElementById('resConvertedSize').innerText = formatBytes(convertedBlob.size);
      document.getElementById('resFileName').innerText = convertedFileName;
    }, 500);

  } catch (err) {
    console.error("Image to PDF error:", err);
    alert("Error converting Image to PDF.");
    resetTool();
  }
}

function downloadPdfFile() {
  if (!convertedBlob) return;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(convertedBlob);
  link.download = convertedFileName || 'converted-document.pdf';
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
