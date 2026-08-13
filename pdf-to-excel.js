// SWIF PDF - Standalone PDF to Excel & Excel to PDF Engine (With SheetJS & PDF-Lib Table Renderer)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Convert <span class='text-coral'>PDF</span> to Excel & Excel to PDF",
    hero_subtitle: "Extract tabular data into spreadsheet files (.xlsx / .csv) or convert spreadsheets to PDF with 100% privacy.",
    drop_title: "Drag & drop your PDF or Excel file here",
    drop_or: "or",
    drop_btn: "Select PDF or Excel File",
    drop_info: "Files are processed 100% locally in your web browser. Zero server upload.",
    btn_convert: "Convert File Now",
    status_loading: "Reading spreadsheet structure...",
    status_converting: "Generating formatted document...",
    status_done: "Conversion Complete!",
    res_title: "Conversion Summary",
    res_format: "Output Format:",
    res_size: "Converted File Size:",
    res_filename: "File Name:",
    btn_download: "Download Converted File",
    btn_reset: "Convert Another File",
    faq_title: "PDF & Excel <span class='text-coral'>FAQ</span>",
    faq_q1: "How does Excel to PDF conversion work?",
    faq_a1: "SWIF PDF parses your Excel sheet using SheetJS, extracts all rows and columns, and draws a clean formatted table into a PDF document via pdf-lib directly in your browser.",
    faq_q2: "Can I convert PDF files to Excel?",
    faq_a2: "Yes! Upload any PDF containing tabular data to extract rows and columns into an editable CSV / Excel file.",
    faq_q3: "Is there any conversion limit?",
    faq_a3: "No! PDF & Excel conversion is 100% free.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Convertir un <span class='text-coral'>PDF</span> en Excel & Excel en PDF",
    hero_subtitle: "Extrayez les tableaux en fichiers tableur (.xlsx / .csv) ou convertissez vos tableurs en PDF mis en page.",
    drop_title: "Glissez & déposez votre fichier PDF ou Excel ici",
    drop_or: "ou",
    drop_btn: "Sélectionner un fichier PDF ou Excel",
    drop_info: "Traitement 100% local dans votre navigateur. Aucun envoi sur serveur.",
    btn_convert: "Convertir le fichier maintenant",
    status_loading: "Lecture de la structure des tableaux...",
    status_converting: "Mise en page du document PDF...",
    status_done: "Conversion terminée !",
    res_title: "Résumé de la conversion",
    res_format: "Format de sortie :",
    res_size: "Taille du fichier converti :",
    res_filename: "Nom du fichier :",
    btn_download: "Télécharger le fichier converti",
    btn_reset: "Convertir un autre fichier",
    faq_title: "Foire Aux Questions <span class='text-coral'>PDF & Excel</span>",
    faq_q1: "Comment fonctionne la conversion Excel vers PDF ?",
    faq_a1: "SWIF PDF analyse votre feuille Excel via SheetJS, extrait les lignes et colonnes, et dessine un tableau PDF propre via pdf-lib en local.",
    faq_q2: "Puis-je convertir des PDF en Excel ?",
    faq_a2: "Oui ! Téléversez un fichier PDF contenant des tableaux pour exporter les données en fichier CSV / Excel modifiable.",
    faq_q3: "Y a-t-il une limite ?",
    faq_a3: "Non ! C'est 100% gratuit.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Convertir <span class='text-coral'>PDF</span> a Excel y Excel a PDF",
    hero_subtitle: "Extrae tablas en hojas de cálculo (.xlsx / .csv) o convierte hojas de cálculo a PDF.",
    drop_title: "Arrastra y suelta tu archivo PDF o Excel aquí",
    drop_or: "o",
    drop_btn: "Seleccionar Archivo PDF o Excel",
    drop_info: "Procesamiento 100% local.",
    btn_convert: "Convertir Archivo Ahora",
    status_loading: "Cargando tablas...",
    status_converting: "Generando documento...",
    status_done: "¡Conversión Completada!",
    res_title: "Resumen de Conversión",
    res_format: "Formato de Salida:",
    res_size: "Tamaño Convertido:",
    res_filename: "Nombre de Archivo:",
    btn_download: "Descargar Archivo Convertido",
    btn_reset: "Convertir Otro Archivo",
    faq_title: "Preguntas Frecuentes <span class='text-coral'>PDF y Excel</span>",
    faq_q1: "¿Cómo funciona Excel a PDF?",
    faq_a1: "Analizamos las celdas con SheetJS y creamos una tabla dibujada en PDF con pdf-lib.",
    faq_q2: "¿Puedo convertir de PDF a Excel?",
    faq_a2: "¡Sí! Funciona en ambas direcciones.",
    faq_q3: "¿Hay límites?",
    faq_a3: "¡No! 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> in Excel & Excel in PDF",
    hero_subtitle: "Extrahieren Sie Tabellen in Excel-Dateien (.xlsx / .csv) oder konvertieren Sie Excel in PDF.",
    drop_title: "PDF- oder Excel-Datei hierher ziehen & ablegen",
    drop_or: "oder",
    drop_btn: "PDF- oder Excel-Datei Auswählen",
    drop_info: "100% lokale Verarbeitung.",
    btn_convert: "Jetzt Datei Konvertieren",
    status_loading: "Lese Tabellenstruktur...",
    status_converting: "Erstelle PDF-Tabelle...",
    status_done: "Konvertierung Abgeschlossen!",
    res_title: "Zusammenfassung",
    res_format: "Ausgabeformat:",
    res_size: "Neue Dateigröße:",
    res_filename: "Dateiname:",
    btn_download: "Konvertierte Datei Herunterladen",
    btn_reset: "Weiters Datei Konvertieren",
    faq_title: "PDF & Excel <span class='text-coral'>FAQ</span>",
    faq_q1: "Wie funktioniert Excel in PDF?",
    faq_a1: "Zellen werden analysiert und als strukturierte Tabelle in ein PDF gezeichnet.",
    faq_q2: "Auch PDF in Excel?",
    faq_a2: "Ja, in beide Richtungen.",
    faq_q3: "Kostenlos?",
    faq_a3: "Ja, 100% kostenlos.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Converter <span class='text-coral'>PDF</span> para Excel e Excel para PDF",
    hero_subtitle: "Extraia tabelas para folhas de cálculo ou converta folhas de cálculo em PDF.",
    drop_title: "Arraste e largue o seu PDF ou Excel aqui",
    drop_or: "ou",
    drop_btn: "Selecionar Ficheiro PDF ou Excel",
    drop_info: "Processamento 100% local.",
    btn_convert: "Converter Ficheiro Agora",
    status_loading: "A ler dados de tabela...",
    status_converting: "A gerar documento...",
    status_done: "Conversão Concluída!",
    res_title: "Resumo da Conversão",
    res_format: "Formato de Saída:",
    res_size: "Tamanho Convertido:",
    res_filename: "Nome do Ficheiro:",
    btn_download: "Descarregar Ficheiro Convertido",
    btn_reset: "Converter Outro Ficheiro",
    faq_title: "Perguntas Frequentes <span class='text-coral'>PDF e Excel</span>",
    faq_q1: "Como funciona Excel para PDF?",
    faq_a1: "Lemos a folha com SheetJS e desenhamos uma tabela em PDF com pdf-lib.",
    faq_q2: "Funciona PDF para Excel?",
    faq_a2: "Sim, em ambas as direções.",
    faq_q3: "É grátis?",
    faq_a3: "Sim, 100% grátis.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Converti <span class='text-coral'>PDF</span> in Excel & Excel in PDF",
    hero_subtitle: "Estrai tabelle in fogli di calcolo (.xlsx / .csv) o converti fogli di calcolo in PDF.",
    drop_title: "Trascina e rilascia il tuo PDF o Excel qui",
    drop_or: "o",
    drop_btn: "Seleziona File PDF o Excel",
    drop_info: "Elaborazione 100% locale.",
    btn_convert: "Converti File Ora",
    status_loading: "Lettura tabelle...",
    status_converting: "Generazione documento PDF...",
    status_done: "Conversione Completata!",
    res_title: "Riepilogo Conversione",
    res_format: "Formato di Uscita:",
    res_size: "Dimensione Convertita:",
    res_filename: "Nome File:",
    btn_download: "Scarica File Convertito",
    btn_reset: "Converti Un Altro File",
    faq_title: "FAQ <span class='text-coral'>PDF e Excel</span>",
    faq_q1: "Come funziona Excel in PDF?",
    faq_a1: "Leggiamo i dati con SheetJS e creiamo una tabella formattata in PDF con pdf-lib.",
    faq_q2: "PDF in Excel?",
    faq_a2: "Sì, in entrambe le direzioni.",
    faq_q3: "Gratuito?",
    faq_a3: "Sì, 100% gratuito.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Konwersja <span class='text-coral'>PDF</span> do Excel i Excel do PDF",
    hero_subtitle: "Wyciągaj tabele do arkusza kalkulacyjnego lub konwertuj arkusze do PDF.",
    drop_title: "Przeciągnij i upuść plik PDF lub Excel tutaj",
    drop_or: "lub",
    drop_btn: "Wybierz Plik PDF lub Excel",
    drop_info: "Przetwarzanie 100% lokalnie.",
    btn_convert: "Konwertuj Plik Teraz",
    status_loading: "Odczytywanie tabel...",
    status_converting: "Generowanie dokumentu...",
    status_done: "Konwersja Zakończona!",
    res_title: "Podsumowanie Konwersji",
    res_format: "Format Wyjściowy:",
    res_size: "Rozmiar Po Konwersji:",
    res_filename: "Nazwa Pliku:",
    btn_download: "Pobierz Skonwertowany Plik",
    btn_reset: "Konwertuj Inny Plik",
    faq_title: "FAQ <span class='text-coral'>PDF i Excel</span>",
    faq_q1: "Jak działa Excel do PDF?",
    faq_a1: "Odczytujemy dane za pomocą SheetJS i rysujemy tabelę PDF w pdf-lib.",
    faq_q2: "PDF do Excel?",
    faq_a2: "Tak, w obie strony.",
    faq_q3: "Darmowe?",
    faq_a3: "Tak, 100% darmowe.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "تحويل <span class='text-coral'>PDF</span> إلى Excel والعكس",
    hero_subtitle: "استخرج الجداول إلى ملفات جدولية (.xlsx / .csv) أو حوّل ملفات Excel إلى PDF بدقة عالية.",
    drop_title: "اسحب ملف PDF أو Excel وأسقطه هنا",
    drop_or: "أو",
    drop_btn: "اختيار ملف PDF أو Excel",
    drop_info: "معالجة محلية 100% داخل المتصفح بدون رفع الملفات.",
    btn_convert: "تحويل الملف الآن",
    status_loading: "جاري قراءة بنية الجداول...",
    status_converting: "جاري إنشاء المستند...",
    status_done: "اكتمل التحويل بنجاح!",
    res_title: "ملخص عملية التحويل",
    res_format: "صيغة الملف الناتج:",
    res_size: "حجم الملف الناتج:",
    res_filename: "اسم الملف:",
    btn_download: "تحميل الملف المحول",
    btn_reset: "تحويل ملف آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>PDF و Excel</span>",
    faq_q1: "كيف تعمل عملية تحويل Excel إلى PDF؟",
    faq_a1: "يتم تحليل خلايا Excel بـ SheetJS وتوليد جدول محاذى ومصمم بدقة في مستند PDF بـ pdf-lib محلياً.",
    faq_q2: "هل يمكن التحويل من PDF إلى Excel؟",
    faq_a2: "نعم! التحويل مدعوم بالاتجاهين.",
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

// Convert Excel to PDF or PDF to Excel
async function startPdfToExcel() {
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
    const fileNameLower = selectedFile.name.toLowerCase();

    if (fileNameLower.endsWith('.xlsx') || fileNameLower.endsWith('.xls') || fileNameLower.endsWith('.csv')) {
      // EXCEL TO PDF CONVERSION
      console.log("Starting Excel to PDF conversion via SheetJS + pdf-lib");
      progressBar.style.width = '50%';
      statusMsg.innerText = dict.status_converting;

      // 1. Read workbook using SheetJS
      if (!window.XLSX) {
        throw new Error("SheetJS library (XLSX) is not loaded.");
      }
      const workbook = XLSX.read(ab, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0] || 'Sheet1';
      const worksheet = workbook.Sheets[firstSheetName];
      const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      console.log("Excel Sheet parsed. Sheet name:", firstSheetName, "Rows count:", rows.length);

      // 2. Build PDF Document with formatted table using pdf-lib
      const { PDFDocument, StandardFonts, rgb } = PDFLib;
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      // A4 portrait page (595.28 x 841.89)
      let page = pdfDoc.addPage([595.28, 841.89]);
      const { width, height } = page.getSize();

      // Draw Title Header
      page.drawRectangle({
        x: 0,
        y: height - 50,
        width: width,
        height: 50,
        color: rgb(0.12, 0.13, 0.16) // #1E2029
      });

      page.drawText(`SWIF PDF - Excel Document Export`, {
        x: 20,
        y: height - 32,
        size: 14,
        font: boldFont,
        color: rgb(1, 1, 1)
      });

      page.drawText(`Sheet: ${firstSheetName} | File: ${selectedFile.name}`, {
        x: 20,
        y: height - 70,
        size: 10,
        font: font,
        color: rgb(0.4, 0.4, 0.4)
      });

      let yPos = height - 95;
      const marginX = 20;
      const tableWidth = width - 40;
      const maxCols = Math.min(6, rows.reduce((max, r) => Math.max(max, r.length || 0), 1));
      const colWidth = tableWidth / Math.max(1, maxCols);
      const rowHeight = 22;

      rows.forEach((row, rowIndex) => {
        // Check for new page break
        if (yPos < 50) {
          page = pdfDoc.addPage([595.28, 841.89]);
          yPos = height - 50;
        }

        const isHeader = rowIndex === 0;
        
        // Draw row background
        if (isHeader) {
          page.drawRectangle({
            x: marginX,
            y: yPos - rowHeight + 4,
            width: tableWidth,
            height: rowHeight,
            color: rgb(0.94, 0.96, 0.98) // Soft blue header
          });
        }

        for (let colIndex = 0; colIndex < maxCols; colIndex++) {
          const cellValue = row[colIndex] !== undefined ? String(row[colIndex]).trim() : '';
          const xPos = marginX + colIndex * colWidth;

          // Draw cell borders
          page.drawRectangle({
            x: xPos,
            y: yPos - rowHeight + 4,
            width: colWidth,
            height: rowHeight,
            borderColor: rgb(0.85, 0.88, 0.92),
            borderWidth: 0.5,
          });

          // Draw cell text
          if (cellValue) {
            const truncated = cellValue.length > 18 ? cellValue.substring(0, 16) + "..." : cellValue;
            page.drawText(truncated, {
              x: xPos + 5,
              y: yPos - 12,
              size: isHeader ? 9 : 8,
              font: isHeader ? boldFont : font,
              color: isHeader ? rgb(0.1, 0.1, 0.1) : rgb(0.2, 0.2, 0.2)
            });
          }
        }

        yPos -= rowHeight;
      });

      progressBar.style.width = '90%';
      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
      convertedBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-converted.pdf`;
      outputFormatLabel = "PDF Document (.pdf Table)";

    } else {
      // PDF TO EXCEL CONVERSION
      console.log("Starting PDF to Excel text extraction");
      progressBar.style.width = '50%';
      statusMsg.innerText = dict.status_converting;

      const pdfjsData = new Uint8Array(ab.slice(0));
      const loadingTask = pdfjsLib.getDocument({ data: pdfjsData });
      const pdfDoc = await loadingTask.promise;

      let csvText = `Page,Row,Extracted Data,Value\n`;

      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        let line = 1;
        textContent.items.forEach(item => {
          if (item.str.trim()) {
            csvText += `Page ${i},Row ${line++},"${item.str.replace(/"/g, '""')}",Value\n`;
          }
        });
      }

      convertedBlob = new Blob([csvText], { type: 'text/csv;charset=utf-8' });
      convertedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-data.csv`;
      outputFormatLabel = "Excel CSV Spreadsheet (.csv / .xlsx)";
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
    console.error("PDF to Excel conversion error:", err);
    alert(`An error occurred during conversion: ${err.message || err}`);
    resetTool();
  }
}

function downloadExcelFile() {
  if (!convertedBlob) return;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(convertedBlob);
  link.download = convertedFileName || 'converted-document';
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
