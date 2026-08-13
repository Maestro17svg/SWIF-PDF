// SWIF PDF - Standalone Lined Paper & Notebook Generator Script (With Paper Formats A4/A5/Letter/Legal & Portrait/Landscape Orientation)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Generate <span class='text-coral'>PDF</span> Lined Paper & Notebooks",
    hero_subtitle: "Create custom lined paper, grid graph paper, bullet journal dotted pages, or blank notebooks up to 250 pages.",
    paper_template_label: "Page Template:",
    tpl_lines: "Horizontal Lines",
    tpl_grid: "Grid / Graph Paper (5mm)",
    tpl_dots: "Bullet Journal (Dotted)",
    tpl_blank: "Blank Pages",
    pages_count_label: "Number of Pages (1 to 250):",
    date_header_label: "Add Date Header",
    date_pos_label: "Date Position:",
    pos_right: "Top Right",
    pos_center: "Top Center",
    pos_left: "Top Left",
    page_numbers_label: "Add Page Numbers",
    line_color_label: "Line / Dot Color:",
    btn_generate: "Generate & Download PDF Notebook",
    preview_title: "Live Notebook Page Preview",
    status_generating: "Generating your custom PDF notebook pages...",
    status_done: "PDF notebook ready!",
    res_title: "Notebook Generated Successfully",
    res_filename: "File Name:",
    res_pages_count: "Total Pages:",
    btn_download: "Download PDF Notebook",
    btn_reset: "Create Another Notebook",
    
    // Advanced Settings
    advanced_title: "Advanced Settings & Custom Watermark",
    paper_format_label: "Paper Format Size:",
    fmt_a4: "A4 (210 x 297 mm)",
    fmt_a5: "A5 (148 x 210 mm)",
    fmt_letter: "US Letter (8.5 x 11 in)",
    fmt_legal: "US Legal (8.5 x 14 in)",
    orientation_label: "Page Orientation:",
    ori_portrait: "Portrait (Vertical)",
    ori_landscape: "Landscape (Horizontal)",
    spacing_label: "Line / Grid Spacing (mm):",
    logo_label: "Upload Custom Logo / Watermark:",
    logo_opacity_label: "Logo Opacity:",
    logo_rule_label: "Apply Logo To:",
    rule_all: "All Pages",
    rule_first: "First Page Only",
    logo_pos_label: "Logo Position:",
    pos_center_watermark: "Center (Filigree / Watermark)",
    pos_bottom_right: "Bottom Right",

    faq_title: "Lined Paper <span class='text-coral'>FAQ</span>",
    faq_q1: "Can I print the generated PDF paper notebook?",
    faq_a1: "Yes! All generated pages use standard vector layouts with millimeter precision for A4, A5, Letter and Legal sizes.",
    faq_q2: "Is there any limit to the number of pages?",
    faq_a2: "You can generate notebooks up to 250 pages in a single click 100% for free.",
    faq_q3: "Are my notebook pages generated locally?",
    faq_a3: "Yes! The entire PDF generation runs 100% locally in your browser memory.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Générateur de <span class='text-coral'>PDF</span> Ligné, Quadrillé & Bullet Journal",
    hero_subtitle: "Créez du papier ligné, quadrillé, à pointillés ou des carnets de notes vierges jusqu'à 250 pages en 1 clic.",
    paper_template_label: "Modèle de page :",
    tpl_lines: "Lignes horizontales",
    tpl_grid: "Quadrillage (Grille 5mm)",
    tpl_dots: "Pointillés (Bullet Journal)",
    tpl_blank: "Pages blanches",
    pages_count_label: "Nombre de pages (1 à 250) :",
    date_header_label: "Ajouter un champ Date",
    date_pos_label: "Position de la Date :",
    pos_right: "Haut à droite",
    pos_center: "Haut au centre",
    pos_left: "Haut à gauche",
    page_numbers_label: "Numéroter automatiquement les pages",
    line_color_label: "Couleur des lignes ou points :",
    btn_generate: "Générer le carnet PDF",
    preview_title: "Aperçu de la page du carnet",
    status_generating: "Génération des pages de votre carnet PDF...",
    status_done: "Carnet PDF prêt !",
    res_title: "Carnet généré avec succès",
    res_filename: "Nom du fichier :",
    res_pages_count: "Nombre de pages :",
    btn_download: "Télécharger le carnet PDF",
    btn_reset: "Créer un autre carnet",

    // Paramètres Avancés
    advanced_title: "Paramètres Avancés & Format Papier",
    paper_format_label: "Format physique du papier :",
    fmt_a4: "A4 (210 x 297 mm)",
    fmt_a5: "A5 (148 x 210 mm)",
    fmt_letter: "Lettre US (8.5 x 11 pouces)",
    fmt_legal: "Légal US (8.5 x 14 pouces)",
    orientation_label: "Orientation de la page :",
    ori_portrait: "Portrait (Vertical)",
    ori_landscape: "Paysage (Horizontal)",
    spacing_label: "Espacement des lignes / carreaux (mm) :",
    logo_label: "Importer un Logo / Filigrane :",
    logo_opacity_label: "Opacité du logo :",
    logo_rule_label: "Appliquer le logo sur :",
    rule_all: "Toutes les pages",
    rule_first: "Première page uniquement",
    logo_pos_label: "Position du logo :",
    pos_center_watermark: "Au centre (Filigrane)",
    pos_bottom_right: "Bas à droite",

    faq_title: "Foire Aux Questions <span class='text-coral'>Générateur de Papier</span>",
    faq_q1: "Puis-je imprimer le carnet PDF généré ?",
    faq_a1: "Oui ! Toutes les pages respectent les formats vectoriels A4, A5, Lettre ou Légal au millimètre près.",
    faq_q2: "Y a-t-il une limite du nombre de pages ?",
    faq_a2: "Vous pouvez générer des carnets allant jusqu'à 250 pages en 1 clic 100% gratuitement.",
    faq_q3: "Mon carnet est-il généré en local ?",
    faq_a3: "Oui ! Toute la création du document s'effectue à 100% dans la mémoire de votre navigateur.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Generador de <span class='text-coral'>PDF</span> Líneas, Cuadrículas y Puntos",
    hero_subtitle: "Crea cuadernos personalizados con líneas, cuadrículas o puntos hasta 250 páginas.",
    paper_template_label: "Plantilla de página:",
    tpl_lines: "Líneas horizontales",
    tpl_grid: "Cuadrícula (5mm)",
    tpl_dots: "Puntos (Bullet Journal)",
    tpl_blank: "Páginas en blanco",
    pages_count_label: "Número de páginas (1 a 250):",
    date_header_label: "Añadir campo de Fecha",
    date_pos_label: "Posición de Fecha:",
    pos_right: "Arriba derecha",
    pos_center: "Arriba centro",
    pos_left: "Arriba izquierda",
    page_numbers_label: "Numerar páginas",
    line_color_label: "Color de líneas o puntos:",
    btn_generate: "Generar Cuaderno PDF",
    preview_title: "Vista Previa de la Página",
    status_generating: "Generando páginas PDF...",
    status_done: "¡Cuaderno PDF Listo!",
    res_title: "Cuaderno Generado",
    res_filename: "Nombre del archivo:",
    res_pages_count: "Total de páginas:",
    btn_download: "Descargar Cuaderno PDF",
    btn_reset: "Crear Otro Cuaderno",
    advanced_title: "Ajustes Avanzados y Formato de Papel",
    paper_format_label: "Tamaño de papel:",
    fmt_a4: "A4 (210 x 297 mm)",
    fmt_a5: "A5 (148 x 210 mm)",
    fmt_letter: "Carta US (8.5 x 11 pulg)",
    fmt_legal: "Legal US (8.5 x 14 pulg)",
    orientation_label: "Orientación:",
    ori_portrait: "Retrato (Vertical)",
    ori_landscape: "Paisaje (Horizontal)",
    spacing_label: "Espaciado (mm):",
    logo_label: "Subir Logo / Marca de agua:",
    logo_opacity_label: "Opacidad del logo:",
    logo_rule_label: "Aplicar logo a:",
    rule_all: "Todas las páginas",
    rule_first: "Solo la primera página",
    logo_pos_label: "Posición del logo:",
    pos_center_watermark: "Centro (Marca de agua)",
    pos_bottom_right: "Abajo derecha",
    faq_title: "FAQ <span class='text-coral'>Generador de Papel</span>",
    faq_q1: "¿Se puede imprimir?",
    faq_a1: "Sí, perfecto para A4, A5, Carta o Legal.",
    faq_q2: "¿Límite de páginas?",
    faq_a2: "Hasta 250 páginas de una vez.",
    faq_q3: "¿Privacidad?",
    faq_a3: "100% en tu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Liniertes & Kariertes Papier Generieren",
    hero_subtitle: "Erstellen Sie liniertes, kariertes oder gepunktetes Papier bis zu 250 Seiten.",
    paper_template_label: "Papiervorlage:",
    tpl_lines: "Horizontale Linien",
    tpl_grid: "Kariert (5mm)",
    tpl_dots: "Gepunktet (Bullet Journal)",
    tpl_blank: "Blanko Seiten",
    pages_count_label: "Seitenanzahl (1 bis 250):",
    date_header_label: "Datumsfeld hinzufügen",
    date_pos_label: "Datumsposition:",
    pos_right: "Oben Rechts",
    pos_center: "Oben Mitte",
    pos_left: "Oben Links",
    page_numbers_label: "Seitenzahlen automatisch hinzufügen",
    line_color_label: "Linien- / Punktfarbe:",
    btn_generate: "PDF-Notizbuch Generieren",
    preview_title: "Vorschau",
    status_generating: "Erstelle PDF-Seiten...",
    status_done: "PDF-Notizbuch Bereit!",
    res_title: "Notizbuch Erstellt",
    res_filename: "Dateiname:",
    res_pages_count: "Seitenanzahl:",
    btn_download: "PDF-Notizbuch Herunterladen",
    btn_reset: "Weiters Notizbuch Erstellen",
    advanced_title: "Erweiterte Einstellungen & Papierformat",
    paper_format_label: "Papierformat:",
    fmt_a4: "A4 (210 x 297 mm)",
    fmt_a5: "A5 (148 x 210 mm)",
    fmt_letter: "US Letter (8.5 x 11 Zoll)",
    fmt_legal: "US Legal (8.5 x 14 Zoll)",
    orientation_label: "Ausrichtung:",
    ori_portrait: "Hochformat (Vertikal)",
    ori_landscape: "Querformat (Horizontal)",
    spacing_label: "Linienabstand (mm):",
    logo_label: "Logo / Wasserzeichen hochladen:",
    logo_opacity_label: "Logo-Deckkraft:",
    logo_rule_label: "Logo anwenden auf:",
    rule_all: "Alle Seiten",
    rule_first: "Nur erste Seite",
    logo_pos_label: "Logo-Position:",
    pos_center_watermark: "Zentriert (Wasserzeichen)",
    pos_bottom_right: "Unten rechts",
    faq_title: "Papier-Generator <span class='text-coral'>FAQ</span>",
    faq_q1: "Druckbar?",
    faq_a1: "Ja, für A4, A5, Letter und Legal.",
    faq_q2: "Seitenlimit?",
    faq_a2: "Bis zu 250 Seiten auf einmal.",
    faq_q3: "Datenschutz?",
    faq_a3: "100% lokal im Browser.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Gerador de <span class='text-coral'>PDF</span> Papel Pautado e Quadriculado",
    hero_subtitle: "Crie cadernos personalizados pautados, quadriculados ou pontilhados até 250 páginas.",
    paper_template_label: "Modelo de página:",
    tpl_lines: "Linhas horizontais",
    tpl_grid: "Quadriculado (5mm)",
    tpl_dots: "Pontilhado (Bullet Journal)",
    tpl_blank: "Páginas em branco",
    pages_count_label: "Número de páginas (1 a 250):",
    date_header_label: "Adicionar campo de Data",
    date_pos_label: "Posição da Data:",
    pos_right: "Topo Direita",
    pos_center: "Topo Centro",
    pos_left: "Topo Esquerda",
    page_numbers_label: "Numerar páginas",
    line_color_label: "Cor das linhas ou pontos:",
    btn_generate: "Gerar Caderno PDF",
    preview_title: "Pré-visualização",
    status_generating: "A gerar páginas do caderno...",
    status_done: "Caderno PDF Pronto!",
    res_title: "Caderno Gerado",
    res_filename: "Nome do Ficheiro:",
    res_pages_count: "Total de páginas:",
    btn_download: "Descarregar Caderno PDF",
    btn_reset: "Criar Outro Caderno",
    advanced_title: "Definições Avançadas e Formato de Papel",
    paper_format_label: "Tamanho do papel:",
    fmt_a4: "A4 (210 x 297 mm)",
    fmt_a5: "A5 (148 x 210 mm)",
    fmt_letter: "Carta US (8.5 x 11 pol)",
    fmt_legal: "Legal US (8.5 x 14 pol)",
    orientation_label: "Orientação:",
    ori_portrait: "Retrato (Vertical)",
    ori_landscape: "Paisagem (Horizontal)",
    spacing_label: "Espaçamento (mm):",
    logo_label: "Carregar Logo / Marca de água:",
    logo_opacity_label: "Opacidade do logo:",
    logo_rule_label: "Aplicar logo a:",
    rule_all: "Todas as páginas",
    rule_first: "Apenas primeira página",
    logo_pos_label: "Posição do logo:",
    pos_center_watermark: "Centro (Marca de água)",
    pos_bottom_right: "Inferior direita",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Gerador de Papel</span>",
    faq_q1: "Imprimível?",
    faq_a1: "Sim, formato A4, A5, Carta ou Legal.",
    faq_q2: "Limite de páginas?",
    faq_a2: "Até 250 páginas.",
    faq_q3: "Seguro?",
    faq_a3: "100% no seu navegador.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Generatore di <span class='text-coral'>PDF</span> Carta Righe e Quadretti",
    hero_subtitle: "Crea quaderni personalizzati a righe, quadretti o puntinati fino a 250 pagine.",
    paper_template_label: "Modello pagina:",
    tpl_lines: "Righe orizzontali",
    tpl_grid: "Quadretti (5mm)",
    tpl_dots: "Puntinato (Bullet Journal)",
    tpl_blank: "Pagine bianche",
    pages_count_label: "Numero di pagine (1 a 250):",
    date_header_label: "Aggiungi campo Data",
    date_pos_label: "Posizione Data:",
    pos_right: "In alto a destra",
    pos_center: "In alto al centro",
    pos_left: "In alto a sinistra",
    page_numbers_label: "Numera pagine",
    line_color_label: "Colore righe o punti:",
    btn_generate: "Genera Quaderno PDF",
    preview_title: "Anteprima Pagina",
    status_generating: "Generazione pagine PDF...",
    status_done: "Quaderno PDF Pronto!",
    res_title: "Quaderno Generato",
    res_filename: "Nome File:",
    res_pages_count: "Totale pagine:",
    btn_download: "Scarica Quaderno PDF",
    btn_reset: "Crea Un Altro Quaderno",
    advanced_title: "Impostazioni Avanzate e Formato Carta",
    paper_format_label: "Formato carta:",
    fmt_a4: "A4 (210 x 297 mm)",
    fmt_a5: "A5 (148 x 210 mm)",
    fmt_letter: "Lettera US (8.5 x 11 pollici)",
    fmt_legal: "Legale US (8.5 x 14 pollici)",
    orientation_label: "Orientamento:",
    ori_portrait: "Ritratto (Verticale)",
    ori_landscape: "Paesaggio (Orizzontale)",
    spacing_label: "Spaziatura (mm):",
    logo_label: "Carica Logo / Filigrana:",
    logo_opacity_label: "Opacità logo:",
    logo_rule_label: "Applica logo a:",
    rule_all: "Tutte le pagine",
    rule_first: "Solo prima pagina",
    logo_pos_label: "Posizione logo:",
    pos_center_watermark: "Centro (Filigrana)",
    pos_bottom_right: "In basso a destra",
    faq_title: "FAQ <span class='text-coral'>Generatore Carta</span>",
    faq_q1: "Stampabile?",
    faq_a1: "Sì, per A4, A5, Lettera e Legale.",
    faq_q2: "Limite pagine?",
    faq_a2: "Fino a 250 pagine.",
    faq_q3: "Sicuro?",
    faq_a3: "100% locale nel browser.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Generator <span class='text-coral'>PDF</span> Papieru w Linie i Kratkę",
    hero_subtitle: "Twórz własny papier w linie, kratkę lub kropki do 250 stron za jednym kliknięciem.",
    paper_template_label: "Szablon strony:",
    tpl_lines: "Linie poziome",
    tpl_grid: "Kratka (5mm)",
    tpl_dots: "Kropki (Bullet Journal)",
    tpl_blank: "Czyste strony",
    pages_count_label: "Liczba stron (1 do 250):",
    date_header_label: "Dodaj pole Daty",
    date_pos_label: "Pozycja Daty:",
    pos_right: "Góra po prawej",
    pos_center: "Góra pośrodku",
    pos_left: "Góra po lewej",
    page_numbers_label: "Numeruj strony",
    line_color_label: "Kolor linii lub kropek:",
    btn_generate: "Generuj Zeszyt PDF",
    preview_title: "Podgląd Strony",
    status_generating: "Generowanie stron zeszytu...",
    status_done: "Zeszyt PDF Gotowy!",
    res_title: "Zeszyt Wygenerowany",
    res_filename: "Nazwa Pliku:",
    res_pages_count: "Liczba stron:",
    btn_download: "Pobierz Zeszyt PDF",
    btn_reset: "Stwórz Inny Zeszyt",
    advanced_title: "Zaawansowane Ustawienia i Format Papieru",
    paper_format_label: "Format papieru:",
    fmt_a4: "A4 (210 x 297 mm)",
    fmt_a5: "A5 (148 x 210 mm)",
    fmt_letter: "US Letter (8.5 x 11 cali)",
    fmt_legal: "US Legal (8.5 x 14 cali)",
    orientation_label: "Orientacja:",
    ori_portrait: "Pionowa (Portrait)",
    ori_landscape: "Pozioma (Landscape)",
    spacing_label: "Odstępy (mm):",
    logo_label: "Wgraj Logo / Znak wodny:",
    logo_opacity_label: "Przezroczystość logo:",
    logo_rule_label: "Zastosuj logo do:",
    rule_all: "Wszystkie strony",
    rule_first: "Tylko pierwsza strona",
    logo_pos_label: "Pozycja logo:",
    pos_center_watermark: "Środek (Znak wodny)",
    pos_bottom_right: "Dół po prawej",
    faq_title: "FAQ <span class='text-coral'>Generator Papieru</span>",
    faq_q1: "Czy można drukować?",
    faq_a1: "Tak, formaty A4, A5, Letter i Legal.",
    faq_q2: "Limit stron?",
    faq_a2: "Do 250 stron.",
    faq_q3: "Bezpieczeństwo?",
    faq_a3: "100% w przeglądarce.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "مولّد <span class='text-coral'>PDF</span> أوراق مسطرة ومربعة ومثقبة",
    hero_subtitle: "أنشئ دفتر أوراق مسطرة أو مربعة أو منقطة للبوليت جورنال حتى 250 صفحة بنقرة واحدة.",
    paper_template_label: "نموذج الصفحة:",
    tpl_lines: "سطور أفقية",
    tpl_grid: "مربعات (شبكة 5 مم)",
    tpl_dots: "نقاط (بوليت جورنال)",
    tpl_blank: "صفحات بيضاء",
    pages_count_label: "عدد الصفحات (من 1 إلى 250):",
    date_header_label: "إضافة حقل التاريخ",
    date_pos_label: "موقع التاريخ:",
    pos_right: "أعلى اليمين",
    pos_center: "أعلى الوسط",
    pos_left: "أعلى اليسار",
    page_numbers_label: "ترقيم الصفحات تلقائياً",
    line_color_label: "لون السطور أو النقاط:",
    btn_generate: "توليد دفتر PDF",
    preview_title: "معاينة الصفحة",
    status_generating: "جاري توليد صفحات الدفتر...",
    status_done: "دفتر PDF جاهز!",
    res_title: "تم إنشاء الدفتر بنجاح",
    res_filename: "اسم الملف:",
    res_pages_count: "إجمالي الصفحات:",
    btn_download: "تحميل دفتر PDF",
    btn_reset: "إنشاء دفتر آخر",
    advanced_title: "الإعدادات المتقدمة وحجم الورق",
    paper_format_label: "حجم الورق الفيزيائي:",
    fmt_a4: "A4 (210 x 297 مم)",
    fmt_a5: "A5 (148 x 210 مم)",
    fmt_letter: "رسالة US Letter (8.5 × 11 بوصة)",
    fmt_legal: "قانوني US Legal (8.5 × 14 بوصة)",
    orientation_label: "اتجاه الصفحة:",
    ori_portrait: "عمودي (Portrait)",
    ori_landscape: "أفقي (Landscape)",
    spacing_label: "المسافة بين السطور/المربعات (مم):",
    logo_label: "رفع شعار / علامة مائية:",
    logo_opacity_label: "شفافية الشعار:",
    logo_rule_label: "تطبيق الشعار على:",
    rule_all: "كافة الصفحات",
    rule_first: "الصفحة الأولى فقط",
    logo_pos_label: "موقع الشعار:",
    pos_center_watermark: "الوسط (علامة مائية)",
    pos_bottom_right: "أسفل اليمين",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>مولّد الورق</span>",
    faq_q1: "هل يمكن طباعة الدفتر المحمل؟",
    faq_a1: "نعم! كافة الصفحات مصممة وفقاً لأحجام A4 وA5 وLetter وLegal القياسية.",
    faq_q2: "هل هناك حد لعدد الصفحات؟",
    faq_a2: "يمكنك إنشاء دفاتر حتى 250 صفحة بنقرة واحدة مجاناً 100%.",
    faq_q3: "هل المعالجة محلية؟",
    faq_a3: "نعم! التوليد بالكامل يتم 100% داخل ذاكرة متصفحك.",
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

// Paper Format Physical Specifications in PDF Points (1 pt = 1/72 inch)
const PAPER_FORMATS = {
  a4: { name: 'A4', wPt: 595.28, hPt: 841.89 },
  a5: { name: 'A5', wPt: 419.53, hPt: 595.28 },
  letter: { name: 'US Letter', wPt: 612.00, hPt: 792.00 },
  legal: { name: 'US Legal', wPt: 612.00, hPt: 1008.00 }
};

let currentLang = 'en';

// State options
let selectedTemplate = 'lines';
let pageCount = 10;
let enableDateHeader = true;
let datePosition = 'right';
let enablePageNumbers = true;
let lineColor = '#D1D5DB';

// Format & Orientation State
let selectedFormatKey = 'a4';
let isLandscape = false;

// Advanced settings state
let spacingMm = 8.0;
let uploadedLogoDataUrl = null;
let logoOpacity = 0.35;
let logoRule = 'all';
let logoPosition = 'center';

let generatedNotebookBlob = null;
let generatedNotebookFileName = "";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initFormControls();
  initAdvancedAccordion();
  initFaqAccordion();
  updateLivePreview();
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

function initFormControls() {
  const tplSelect = document.getElementById('templateSelect');
  if (tplSelect) {
    tplSelect.addEventListener('change', (e) => {
      selectedTemplate = e.target.value;
      if (selectedTemplate === 'lines') spacingMm = 8.0;
      if (selectedTemplate === 'grid') spacingMm = 5.0;
      if (selectedTemplate === 'dots') spacingMm = 5.0;

      const spacingRange = document.getElementById('spacingMmRange');
      const spacingInput = document.getElementById('spacingMmInput');
      if (spacingRange) spacingRange.value = spacingMm;
      if (spacingInput) spacingInput.value = spacingMm;

      updateLivePreview();
    });
  }

  // Page Count Range & Number Input Sync
  const countRange = document.getElementById('pageCountRange');
  const countInput = document.getElementById('pageCountInput');
  if (countRange && countInput) {
    countRange.addEventListener('input', (e) => {
      pageCount = parseInt(e.target.value) || 1;
      countInput.value = pageCount;
    });
    countInput.addEventListener('input', (e) => {
      pageCount = Math.max(1, Math.min(250, parseInt(e.target.value) || 1));
      countRange.value = pageCount;
    });
  }

  // Date Checkbox & Position
  const chkDate = document.getElementById('enableDateCheckbox');
  const datePosSelect = document.getElementById('datePositionSelect');
  if (chkDate) {
    chkDate.addEventListener('change', (e) => {
      enableDateHeader = e.target.checked;
      updateLivePreview();
    });
  }
  if (datePosSelect) {
    datePosSelect.addEventListener('change', (e) => {
      datePosition = e.target.value;
      updateLivePreview();
    });
  }

  // Page Numbers Checkbox
  const chkPageNum = document.getElementById('enablePageNumCheckbox');
  if (chkPageNum) {
    chkPageNum.addEventListener('change', (e) => {
      enablePageNumbers = e.target.checked;
      updateLivePreview();
    });
  }

  // Color Inputs
  const colorInput = document.getElementById('lineColorInput');
  if (colorInput) {
    colorInput.addEventListener('input', (e) => {
      lineColor = e.target.value;
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('ring-4', 'ring-orange-400', 'scale-110'));
      updateLivePreview();
    });
  }

  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('ring-4', 'ring-orange-400', 'scale-110'));
      dot.classList.add('ring-4', 'ring-orange-400', 'scale-110');
      lineColor = dot.getAttribute('data-color');
      if (colorInput) colorInput.value = lineColor;
      updateLivePreview();
    });
  });

  // Paper Format & Orientation Selectors
  const fmtSelect = document.getElementById('paperFormatSelect');
  if (fmtSelect) {
    fmtSelect.addEventListener('change', (e) => {
      selectedFormatKey = e.target.value;
      updateLivePreview();
    });
  }

  const oriPortraitBtn = document.getElementById('oriPortraitBtn');
  const oriLandscapeBtn = document.getElementById('oriLandscapeBtn');
  if (oriPortraitBtn && oriLandscapeBtn) {
    oriPortraitBtn.addEventListener('click', () => {
      isLandscape = false;
      oriPortraitBtn.classList.add('border-[#22C55E]', 'text-[#22C55E]', 'bg-[#F0FDF4]');
      oriLandscapeBtn.classList.remove('border-[#22C55E]', 'text-[#22C55E]', 'bg-[#F0FDF4]');
      updateLivePreview();
    });
    oriLandscapeBtn.addEventListener('click', () => {
      isLandscape = true;
      oriLandscapeBtn.classList.add('border-[#22C55E]', 'text-[#22C55E]', 'bg-[#F0FDF4]');
      oriPortraitBtn.classList.remove('border-[#22C55E]', 'text-[#22C55E]', 'bg-[#F0FDF4]');
      updateLivePreview();
    });
  }

  // Advanced Spacing Controls
  const spacingRange = document.getElementById('spacingMmRange');
  const spacingInput = document.getElementById('spacingMmInput');
  if (spacingRange && spacingInput) {
    spacingRange.addEventListener('input', (e) => {
      spacingMm = parseFloat(e.target.value) || 5.0;
      spacingInput.value = spacingMm;
      updateLivePreview();
    });
    spacingInput.addEventListener('input', (e) => {
      spacingMm = Math.max(2.0, Math.min(30.0, parseFloat(e.target.value) || 5.0));
      spacingRange.value = spacingMm;
      updateLivePreview();
    });
  }

  // Logo & Watermark Inputs
  const logoFileInput = document.getElementById('logoFileInput');
  if (logoFileInput) {
    logoFileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          uploadedLogoDataUrl = ev.target.result;
          document.getElementById('logoPreviewImg').src = uploadedLogoDataUrl;
          document.getElementById('logoPreviewBox').classList.remove('hidden');
          updateLivePreview();
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }

  const opacityRange = document.getElementById('logoOpacityRange');
  if (opacityRange) {
    opacityRange.addEventListener('input', (e) => {
      logoOpacity = parseFloat(e.target.value);
      const opacityTxt = document.getElementById('opacityLabelText');
      if (opacityTxt) opacityTxt.innerText = `${Math.round(logoOpacity * 100)}%`;
      updateLivePreview();
    });
  }

  const logoRuleSelect = document.getElementById('logoRuleSelect');
  if (logoRuleSelect) {
    logoRuleSelect.addEventListener('change', (e) => {
      logoRule = e.target.value;
      updateLivePreview();
    });
  }

  const logoPosSelect = document.getElementById('logoPosSelect');
  if (logoPosSelect) {
    logoPosSelect.addEventListener('change', (e) => {
      logoPosition = e.target.value;
      updateLivePreview();
    });
  }
}

function initAdvancedAccordion() {
  const btn = document.getElementById('advancedToggleBtn');
  const content = document.getElementById('advancedContent');
  const icon = document.getElementById('advancedIcon');

  if (btn && content) {
    btn.addEventListener('click', () => {
      const isHidden = content.classList.contains('hidden');
      if (isHidden) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  }
}

function getActivePageDimensions() {
  const fmt = PAPER_FORMATS[selectedFormatKey] || PAPER_FORMATS.a4;
  let w = fmt.wPt;
  let h = fmt.hPt;
  if (isLandscape) {
    const temp = w;
    w = h;
    h = temp;
  }
  return { wPt: w, hPt: h, name: fmt.name };
}

/* ==================== LIVE HTML5 CANVAS PREVIEW ==================== */
function updateLivePreview() {
  const canvas = document.getElementById('previewCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dims = getActivePageDimensions();

  // Adjust canvas width & height to match aspect ratio of selected format and orientation
  const previewMaxW = 380;
  const aspectRatio = dims.hPt / dims.wPt;
  
  canvas.width = previewMaxW;
  canvas.height = Math.round(previewMaxW * aspectRatio);

  const w = canvas.width;
  const h = canvas.height;

  // Clear page background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, w, h);

  const marginX = 24;
  const marginY = 48;

  // Render Watermark Logo on Preview if available
  if (uploadedLogoDataUrl) {
    const img = new Image();
    img.onload = () => {
      ctx.save();
      ctx.globalAlpha = logoOpacity;
      if (logoPosition === 'center') {
        const logoW = 130;
        const logoH = (img.height / img.width) * logoW;
        ctx.drawImage(img, (w - logoW) / 2, (h - logoH) / 2, logoW, logoH);
      } else {
        const logoW = 60;
        const logoH = (img.height / img.width) * logoW;
        ctx.drawImage(img, w - logoW - 20, h - logoH - 25, logoW, logoH);
      }
      ctx.restore();
    };
    img.src = uploadedLogoDataUrl;
  }

  // Draw Date Header
  if (enableDateHeader) {
    ctx.strokeStyle = lineColor;
    ctx.fillStyle = '#4B5563';
    ctx.font = '11px sans-serif';
    ctx.lineWidth = 1;

    let dateX = w - 130;
    if (datePosition === 'center') dateX = (w / 2) - 45;
    if (datePosition === 'left') dateX = marginX;

    ctx.fillText("Date: ____ / ____ / 20__", dateX, 28);
  }

  // Draw Page Template with exact millimeter spacing scaling
  ctx.strokeStyle = lineColor;
  ctx.fillStyle = lineColor;

  const pxPerMm = (w / (dims.wPt / 2.83465));
  const spacingPx = Math.max(4, spacingMm * pxPerMm);

  if (selectedTemplate === 'lines') {
    ctx.lineWidth = 1;
    for (let y = marginY; y < h - 35; y += spacingPx) {
      ctx.beginPath();
      ctx.moveTo(marginX, y);
      ctx.lineTo(w - marginX, y);
      ctx.stroke();
    }
  } else if (selectedTemplate === 'grid') {
    ctx.lineWidth = 0.6;
    for (let x = marginX; x <= w - marginX; x += spacingPx) {
      ctx.beginPath();
      ctx.moveTo(x, marginY);
      ctx.lineTo(x, h - 35);
      ctx.stroke();
    }
    for (let y = marginY; y <= h - 35; y += spacingPx) {
      ctx.beginPath();
      ctx.moveTo(marginX, y);
      ctx.lineTo(w - marginX, y);
      ctx.stroke();
    }
  } else if (selectedTemplate === 'dots') {
    for (let x = marginX; x <= w - marginX; x += spacingPx) {
      for (let y = marginY; y <= h - 35; y += spacingPx) {
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Draw Page Number
  if (enablePageNumbers) {
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("Page 1", w / 2, h - 14);
    ctx.textAlign = 'start';
  }
}

/* ==================== MULTI-PAGE VECTOR PDF GENERATION VIA PDF-LIB ==================== */
async function generatePdfNotebook() {
  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '20%';
  statusMsg.innerText = dict.status_generating;

  try {
    const { PDFDocument, StandardFonts, rgb } = PDFLib;
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Convert hex color to PDFLib RGB
    const hex = lineColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255 || 0.8;
    const g = parseInt(hex.substring(2, 4), 16) / 255 || 0.8;
    const b = parseInt(hex.substring(4, 6), 16) / 255 || 0.8;
    const lineRgb = rgb(r, g, b);

    // Get Active Physical Page Dimensions (in PDF points)
    const dims = getActivePageDimensions();
    const pageW = dims.wPt;
    const pageH = dims.hPt;

    const marginX = 45;
    const marginY = 65;

    // Convert Millimeters to PDF points (1 mm = 2.83465 pt)
    const spacingPts = spacingMm * 2.83465;

    // Embed logo image if provided
    let embeddedLogo = null;
    if (uploadedLogoDataUrl) {
      const logoBytes = await fetch(uploadedLogoDataUrl).then(res => res.arrayBuffer());
      embeddedLogo = await pdfDoc.embedPng(logoBytes).catch(() => pdfDoc.embedJpg(logoBytes));
    }

    for (let pageIdx = 1; pageIdx <= pageCount; pageIdx++) {
      const page = pdfDoc.addPage([pageW, pageH]);

      // Progress update
      if (pageIdx % 5 === 0 || pageIdx === pageCount) {
        const pct = Math.round(20 + (pageIdx / pageCount) * 75);
        progressBar.style.width = `${pct}%`;
        statusMsg.innerText = `${dict.status_generating} (${pageIdx}/${pageCount})`;
      }

      // Draw Logo Watermark if rule matches
      const shouldDrawLogo = embeddedLogo && (logoRule === 'all' || (logoRule === 'first' && pageIdx === 1));
      if (shouldDrawLogo) {
        const logoDims = embeddedLogo.scale(0.35);
        if (logoPosition === 'center') {
          const lW = Math.min(220, logoDims.width);
          const lH = (logoDims.height / logoDims.width) * lW;
          page.drawImage(embeddedLogo, {
            x: (pageW - lW) / 2,
            y: (pageH - lH) / 2,
            width: lW,
            height: lH,
            opacity: logoOpacity
          });
        } else {
          const lW = Math.min(100, logoDims.width);
          const lH = (logoDims.height / logoDims.width) * lW;
          page.drawImage(embeddedLogo, {
            x: pageW - lW - marginX,
            y: 40,
            width: lW,
            height: lH,
            opacity: logoOpacity
          });
        }
      }

      // Draw Date Header
      if (enableDateHeader) {
        let dateX = pageW - 190;
        if (datePosition === 'center') dateX = (pageW / 2) - 60;
        if (datePosition === 'left') dateX = marginX;

        page.drawText("Date: ____ / ____ / 20__", {
          x: dateX,
          y: pageH - 45,
          size: 11,
          font,
          color: rgb(0.3, 0.3, 0.3)
        });
      }

      // Draw Template Patterns with Millimeter Spacing
      if (selectedTemplate === 'lines') {
        for (let y = pageH - marginY; y >= 60; y -= spacingPts) {
          page.drawLine({
            start: { x: marginX, y },
            end: { x: pageW - marginX, y },
            thickness: 0.75,
            color: lineRgb
          });
        }
      } else if (selectedTemplate === 'grid') {
        for (let x = marginX; x <= pageW - marginX; x += spacingPts) {
          page.drawLine({
            start: { x, y: 60 },
            end: { x, y: pageH - marginY },
            thickness: 0.5,
            color: lineRgb
          });
        }
        for (let y = 60; y <= pageH - marginY; y += spacingPts) {
          page.drawLine({
            start: { x: marginX, y },
            end: { x: pageW - marginX, y },
            thickness: 0.5,
            color: lineRgb
          });
        }
      } else if (selectedTemplate === 'dots') {
        for (let x = marginX; x <= pageW - marginX; x += spacingPts) {
          for (let y = 60; y <= pageH - marginY; y += spacingPts) {
            page.drawCircle({
              x,
              y,
              size: 1.2,
              color: lineRgb
            });
          }
        }
      }

      // Draw Page Number
      if (enablePageNumbers) {
        const pageText = `Page ${pageIdx}`;
        const textWidth = font.widthOfTextAtSize(pageText, 9);
        page.drawText(pageText, {
          x: (pageW - textWidth) / 2,
          y: 30,
          size: 9,
          font,
          color: rgb(0.5, 0.5, 0.5)
        });
      }
    }

    progressBar.style.width = '95%';
    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    generatedNotebookBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    generatedNotebookFileName = `SWIF-PDF-${selectedTemplate}-${dims.name.replace(/\s+/g, '')}-${isLandscape ? 'Landscape' : 'Portrait'}-${pageCount}pages.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done;

    setTimeout(() => {
      document.getElementById('progressSection').classList.add('hidden');
      document.getElementById('resultSection').classList.remove('hidden');
      document.getElementById('resFileName').innerText = generatedNotebookFileName;
      document.getElementById('resPagesCount').innerText = `${pageCount} pages (${dims.name} ${isLandscape ? 'Landscape' : 'Portrait'}, ${spacingMm}mm spacing)`;

      const downloadBtn = document.getElementById('downloadNotebookBtn');
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(generatedNotebookBlob);
        link.download = generatedNotebookFileName;
        link.click();
      };
    }, 500);

  } catch (err) {
    console.error("Error generating notebook:", err);
    alert(`An error occurred while generating PDF notebook: ${err.message || err}`);
    resetTool();
  }
}

function removeUploadedLogo() {
  uploadedLogoDataUrl = null;
  const input = document.getElementById('logoFileInput');
  if (input) input.value = "";
  document.getElementById('logoPreviewBox').classList.add('hidden');
  updateLivePreview();
}

function resetTool() {
  generatedNotebookBlob = null;
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('editorSection').classList.remove('hidden');
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
