// SWIF PDF - PDF Paw Style Internationalization & Interactive Script

const translations = {
  en: {
    // Header
    nav_tools: "PDF Tools",
    nav_compress: "Compress",
    nav_sign: "Sign & Edit",
    nav_about: "About",
    nav_login: "Sign In",
    
    // Hero Section
    hero_title: "All-In-One PDF <span class='text-[#22C55E]'>Conversion</span> Tool",
    hero_subtitle: "Easily convert, compress, sign, redact and organize your documents in just a few clicks.",
    hero_bullet1: "Upload Your PDF Document",
    hero_bullet2: "Select Tool or Output Format",
    hero_bullet3: "Edit, Convert, Save & Download",
    hero_reviews: "12.5k users • ★★★★★ 1,640 reviews",
    hero_drop_title: "Drop your file here",
    hero_drop_or: "or",
    hero_cta: "Upload The PDF To Edit",

    // Tools Section
    tools_heading: "PDF <span class='text-[#22C55E]'>Converter</span> Tools",
    tools_subheading: "Quick and easy browser utilities in a compact modern layout.",
    search_placeholder: "Search tools (e.g. Compress, Word, Lined Paper)...",
    tab_all: "All Tools",
    tab_compress: "Compress & Merge",
    tab_sign: "Sign & Edit",
    tab_organize: "Organize",
    tab_generators: "Generators & Security",

    // Tool Cards
    tool_compress_title: "Compress PDF",
    tool_compress_desc: "Reduce PDF file size while keeping quality",
    tool_pdf_word_title: "PDF to Word",
    tool_pdf_word_desc: "Convert PDF to editable DOCX",
    tool_pdf_jpg_title: "PDF to JPG / PNG",
    tool_pdf_jpg_desc: "Extract high-resolution images",
    tool_img_pdf_title: "JPG / Image to PDF",
    tool_img_pdf_desc: "Convert images to PDF document",
    tool_pdf_excel_title: "PDF to Excel",
    tool_pdf_excel_desc: "Extract PDF tables to spreadsheet",
    tool_excel_pdf_title: "Excel to PDF",
    tool_excel_pdf_desc: "Convert spreadsheets to PDF",
    tool_pdf_ppt_title: "PDF to PowerPoint",
    tool_pdf_ppt_desc: "Convert PDF slides to PPTX",
    tool_ppt_pdf_title: "PowerPoint to PDF",
    tool_ppt_pdf_desc: "Convert presentations to PDF",
    tool_merge_title: "Merge PDFs",
    tool_merge_desc: "Combine multiple files into one",
    tool_split_title: "Split & Organize PDF",
    tool_split_desc: "Separate & reorder pages",
    tool_sign_title: "Sign PDF",
    tool_sign_desc: "Sign documents electronically",
    tool_redact_title: "Redact PDF",
    tool_redact_desc: "Black out sensitive text",
    tool_lines_title: "Lined Page Generator",
    tool_protect_title: "Protect PDF",
    tool_flipbook_title: "3D Flipbook Reader",
    tool_flipbook_desc: "Read PDF as interactive 3D book",

    // How To Convert
    how_title: "How To <span class='text-[#22C55E]'>Convert</span> A File",
    how_subtitle: "Quick and easy PDF conversion in a few simple steps.",
    step1_title: "1. Choose Output Format",
    step1_desc: "Pick the format or tool you need—PDF, Word, Compress, or Sign.",
    step2_title: "2. Upload Your PDF",
    step2_desc: "Drag & drop a file from your device to open it instantly.",
    step3_title: "3. Convert & Download",
    step3_desc: "Process your document and save the result immediately.",

    // Benefits (PDF Paw style)
    ben_heading: "Everything You Need To <span class='text-[#22C55E]'>Convert</span> PDFs",
    ben_subheading: "From documents to images—manage your PDFs however you need.",
    ben_1_title: "No Installation Needed",
    ben_1_desc: "Use our tools directly in your browser—no downloads or setup required.",
    ben_2_title: "Fast and User-Friendly",
    ben_2_desc: "Complete, sign, convert and save your documents in just a few clicks.",
    ben_3_title: "Works on Any Device",
    ben_3_desc: "Access and edit files from your phone, tablet, or computer seamless.",
    ben_4_title: "Secure and Private",
    ben_4_desc: "Your data is protected with 100% client-side local browser processing.",
    ben_5_title: "Wide Range of Tools",
    ben_5_desc: "Easily switch between compression, signatures, lines, and PDF formats.",
    ben_6_title: "100% Free Forever",
    ben_6_desc: "Enjoy full features for free—no paid tiers or hidden subscriptions.",

    // Why Free Section
    free_badge: "100% Free • Open Access",
    free_title: "Why is SWIF PDF Completely Free?",
    free_desc1: "SWIF PDF operates entirely inside your web browser using WebAssembly technology.",
    free_desc2: "Because your computer handles the document processing locally, we incur no server hosting costs and offer SWIF PDF completely free to everyone.",
    free_point1: "Zero server uploads — 100% document confidentiality.",
    free_point2: "No registration, credit card, or email required.",
    free_point3: "No document watermarks or artificial limits.",

    // FAQ Section
    faq_title: "Frequently Asked <span class='text-[#22C55E]'>Questions</span>",
    faq_q1: "What is SWIF PDF?",
    faq_a1: "SWIF PDF is an online document platform designed to help users manage files with ease directly in the browser—fast, secure, and without installations.",
    faq_q2: "Is any installation needed?",
    faq_a2: "No! All tools run directly in your web browser with zero software downloads required.",
    faq_q3: "Are my files safe?",
    faq_a3: "Yes, 100%. All processing happens locally on your computer via WebAssembly. Files are never uploaded to any remote server.",
    faq_q4: "How does the Lined Page Generator work?",
    faq_a4: "Choose line spacing, colors, margin options, and dot/ruled grids, then download or print your template instantly.",

    // Modals
    modal_lined_title: "Interactive Lined Page Generator",
    modal_lined_subtitle: "Customize your ruled, grid, or dot-grid paper and download or print.",
    lbl_pattern: "Pattern Style:",
    lbl_spacing: "Line Spacing:",
    lbl_color: "Line Color:",
    lbl_margin: "Red Margin Line:",
    btn_download_png: "Download Image",
    btn_print: "Print / Export PDF",
    close_btn: "Close",

    modal_compress_title: "PDF Compression Demo",
    modal_compress_drop: "Drop your PDF file here to simulate compression",
    modal_compress_info: "Compression ratio: ~65% size reduction without quality loss.",
    btn_simulate: "Start Compression Demo",

    // SEO Section
    seo_badge: "Complete PDF Guide & Reference",
    seo_title: "Everything About Online <span class='text-[#22C55E]'>PDF Conversion</span> & Management",
    seo_sub: "Discover how SWIF PDF simplifies document editing, conversion, and security in total privacy.",
    seo_c1_title: "Lossless PDF Compression",
    seo_c1_desc: "Compressing PDF files is essential for easily sharing large documents via email or web forms. Our online PDF compressor reorganizes file structures and optimizes images without compromising text crispness.",
    seo_c2_title: "Interactive 3D Flipbook Reader",
    seo_c2_desc: "Turn any magazine, catalog, or PDF book into an immersive reading experience. Our 3D Flipbook reader simulates realistic page flipping with dynamic shading and paper acoustics.",
    seo_c3_title: "PDF Page Merge & Split",
    seo_c3_desc: "Combine multiple reports into one structured file or extract only relevant pages. Easily reorder and organize your documents in just a few clicks.",
    seo_c4_title: "100% Client-Side Local Security",
    seo_c4_desc: "Your data is precious. SWIF PDF runs entirely inside your device's browser via WebAssembly. Your bank statements, IDs, and contracts remain private and are never stored on third-party servers.",

    // Footer
    footer_desc: "The fast, secure, and 100% free PDF management platform with local browser processing.",
    footer_nav_heading: "Navigation",
    footer_nav_home: "Home Page",
    footer_nav_flipbook: "3D Flipbook Reader",
    footer_nav_compress: "Compress PDF",
    footer_nav_merge: "Merge PDFs",
    footer_legal_heading: "Information & Legal",
    footer_legal_terms: "Terms of Service (CGU)",
    footer_legal_privacy: "Privacy Policy",
    footer_legal_contact: "Contact Us",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_tools: "Outils PDF",
    nav_compress: "Compresser",
    nav_sign: "Signer & Éditer",
    nav_about: "À propos",
    nav_login: "Connexion",

    hero_title: "Simplifiez la gestion de vos <span class='text-[#22C55E]'>fichiers PDF</span>",
    hero_subtitle: "Compressez, fusionnez, signez, masquez et organisez vos documents PDF en quelques clics seulement.",
    hero_bullet1: "Téléversez votre document PDF",
    hero_bullet2: "Sélectionnez l'outil ou le format souhaité",
    hero_bullet3: "Modifiez, compressez et téléchargez instantanément",
    hero_reviews: "12.5k utilisateurs • ★★★★★ 1,640 avis",
    hero_drop_title: "Glissez votre fichier ici",
    hero_drop_or: "ou",
    hero_cta: "Téléverser le PDF à traiter",

    tools_heading: "Outils <span class='text-[#22C55E]'>PDF</span>",
    tools_subheading: "Des utilitaires PDF rapides et intuitifs dans une présentation compacte et moderne.",
    search_placeholder: "Rechercher un outil (ex: Compression, Word, Page lignée)...",
    tab_all: "Tous les outils",
    tab_compress: "Compresser & Fusionner",
    tab_sign: "Signer & Éditer",
    tab_organize: "Organiser",
    tab_generators: "Générateurs & Sécurité",

    tool_compress_title: "Compresser PDF",
    tool_compress_desc: "Réduire la taille du fichier PDF",
    tool_pdf_word_title: "PDF vers Word",
    tool_pdf_word_desc: "Convertir un PDF en DOCX modifiable",
    tool_pdf_jpg_title: "PDF vers JPG / PNG",
    tool_pdf_jpg_desc: "Extraire des images haute résolution",
    tool_img_pdf_title: "JPG / Image vers PDF",
    tool_img_pdf_desc: "Convertir vos images en document PDF",
    tool_pdf_excel_title: "PDF vers Excel",
    tool_pdf_excel_desc: "Extraire les tableaux en tableur XLS",
    tool_excel_pdf_title: "Excel vers PDF",
    tool_excel_pdf_desc: "Convertir vos tableurs en PDF",
    tool_pdf_ppt_title: "PDF vers PowerPoint",
    tool_pdf_ppt_desc: "Convertir un PDF en diapositives PPTX",
    tool_ppt_pdf_title: "PowerPoint vers PDF",
    tool_ppt_pdf_desc: "Convertir des présentations en PDF",
    tool_merge_title: "Fusionner PDF",
    tool_merge_desc: "Assembler plusieurs fichiers en un seul",
    tool_split_title: "Diviser & Gérer PDF",
    tool_split_desc: "Réorganiser et supprimer des pages",
    tool_sign_title: "Signer PDF",
    tool_sign_desc: "Signer électroniquement vos PDF",
    tool_redact_title: "Biffer PDF",
    tool_redact_desc: "Masquer les informations sensibles",

    how_title: "Comment <span class='text-[#22C55E]'>Traiter</span> Un Fichier",
    how_subtitle: "Traitement PDF simple et rapide en 3 étapes.",
    step1_title: "1. Choisissez l'outil",
    step1_desc: "Sélectionnez la fonction dont vous avez besoin : compresseur, signature, conversion.",
    step2_title: "2. Glissez votre fichier",
    step2_desc: "Téléversez votre document PDF directement depuis votre appareil.",
    step3_title: "3. Enregistrez",
    step3_desc: "Téléchargez immédiatement votre fichier finalisé.",

    ben_heading: "Tout Ce Dont Vous Avez Besoin Pour Vos <span class='text-[#22C55E]'>PDF</span>",
    ben_subheading: "Des documents aux images, gérez vos PDF en toute simplicité.",
    ben_1_title: "Aucune Installation Requise",
    ben_1_desc: "Utilisez tous les outils directement sur le Web sans aucun logiciel.",
    ben_2_title: "Rapide et Ergonomique",
    ben_2_desc: "Complétez, signez et enregistrez vos fichiers en quelques clics.",
    ben_3_title: "Multi-plateforme",
    ben_3_desc: "Accédez à vos outils sur votre téléphone, tablette ou ordinateur.",
    ben_4_title: "Sécurisé et Confidentiel",
    ben_4_desc: "Traitement 100% local dans votre navigateur sans envoi sur serveur.",
    ben_5_title: "Large Choix d'Outils",
    ben_5_desc: "Passez facilement de la compression à la signature ou aux feuilles lignées.",
    ben_6_title: "100% Gratuit Toujours",
    ben_6_desc: "Profitez de toutes les fonctionnalités gratuitement sans aucun abonnement.",

    free_badge: "Accès Libre & Gratuit",
    free_title: "Pourquoi SWIF PDF est totalement gratuit ?",
    free_desc1: "SWIF PDF fonctionne entièrement dans votre navigateur grâce à la technologie WebAssembly.",
    free_desc2: "Le traitement étant réalisé par votre ordinateur, nous n'avons aucun coût d'hébergement serveur et offrons SWIF PDF gratuitement à tous.",
    free_point1: "Zéro envoi sur serveur — confidentialité documentaire absolue.",
    free_point2: "Aucune inscription ni carte bancaire requise.",
    free_point3: "Aucun filigrane ni restriction.",

    faq_title: "Foire Aux <span class='text-[#22C55E]'>Questions</span>",
    faq_q1: "Qu'est-ce que SWIF PDF ?",
    faq_a1: "SWIF PDF est une plateforme d'outils PDF en ligne permettant de gérer vos documents rapidement et en toute sécurité directement dans le navigateur.",
    faq_q2: "Faut-il installer un logiciel ?",
    faq_a2: "Non ! Tous les outils fonctionnent directement dans votre navigateur web sans aucun téléchargement.",
    faq_q3: "Mes fichiers sont-ils en sécurité ?",
    faq_a3: "Oui, à 100%. Le traitement se fait localement sur votre ordinateur. Vos fichiers ne quittent jamais votre navigateur.",
    faq_q4: "Comment fonctionne le générateur de feuilles lignées ?",
    faq_a4: "Personnalisez l'espacement des lignes, les couleurs, la marge rouge et imprimez ou téléchargez votre feuille.",

    modal_lined_title: "Générateur de pages lignées interactif",
    modal_lined_subtitle: "Personnalisez votre papier ligné, quadrillé ou à points et téléchargez-le.",
    lbl_pattern: "Style de motif :",
    lbl_spacing: "Espacement :",
    lbl_color: "Couleur des lignes :",
    lbl_margin: "Ligne de marge rouge :",
    btn_download_png: "Télécharger l'image",
    btn_print: "Imprimer / Exporter PDF",
    close_btn: "Fermer",

    modal_compress_title: "Démonstration Compression PDF",
    modal_compress_drop: "Déposez votre fichier PDF ici pour simuler la compression",
    modal_compress_info: "Taux de compression : ~65% de réduction sans perte de lisibilité.",
    btn_simulate: "Lancer la démonstration",

    // SEO Section
    seo_badge: "Guide Complet & Référentiel PDF",
    seo_title: "Tout Savoir sur la Gestion et la Conversion de <span class='text-[#22C55E]'>PDF en Ligne</span>",
    seo_sub: "Découvrez comment SWIF PDF simplifie l'édition, la conversion et la sécurisation de vos documents professionnels en toute confidentialité.",
    seo_c1_title: "Compression PDF Sans Perte de Qualité",
    seo_c1_desc: "La compression de fichiers PDF est essentielle pour partager facilement des documents volumineux par email ou via des formulaires web. Notre outil de compression PDF en ligne réorganise la structure interne de votre document et optimise les images sans altérer la netteté du texte.",
    seo_c2_title: "Lecteur Flipbook 3D Interactif",
    seo_c2_desc: "Transformez n'importe quel magazine, catalogue commercial ou livre PDF en une expérience de lecture immersive. Notre lecteur Flipbook 3D simule l'animation réaliste de tournage de page avec ombrage dynamique et bruitage de papier.",
    seo_c3_title: "Fusion et Découpage de Pages PDF",
    seo_c3_desc: "Rassemblez plusieurs rapports en un seul fichier structuré ou extrayez uniquement les pages pertinentes. Avec nos outils de fusion PDF et de découpage de pages, vous réorganisez vos documents en quelques clics.",
    seo_c4_title: "Sécurité et Traitement 100% Client-Side",
    seo_c4_desc: "Vos données sont précieuses. SWIF PDF s'exécute intégralement dans le navigateur de votre appareil via WebAssembly. Vos relevés bancaires, pièces d'identité et contrats restent confidentiels et ne sont jamais stockés sur des serveurs tiers.",

    // Footer
    footer_desc: "La plateforme d'édition PDF rapide, sécurisée et 100% gratuite avec traitement local dans votre navigateur.",
    footer_nav_heading: "Navigation",
    footer_nav_home: "Page d'accueil",
    footer_nav_flipbook: "Flipbook 3D PDF",
    footer_nav_compress: "Compresser PDF",
    footer_nav_merge: "Fusionner PDFs",
    footer_legal_heading: "Informations & Légal",
    footer_legal_terms: "Conditions Générales (CGU)",
    footer_legal_privacy: "Politique de Confidentialité",
    footer_legal_contact: "Nous Contacter",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_tools: "Herramientas PDF",
    nav_compress: "Comprimir",
    nav_sign: "Firmar y Editar",
    nav_about: "Acerca de",
    nav_login: "Iniciar sesión",
    hero_title: "Herramienta de <span class='text-[#22C55E]'>Conversión</span> de PDF Todo en Uno",
    hero_subtitle: "Comprime, combina, firma, oculta y organiza tus archivos PDF en pocos clics.",
    hero_bullet1: "Sube tu documento PDF",
    hero_bullet2: "Selecciona la herramienta o formato",
    hero_bullet3: "Edita, convierte y descarga al instante",
    hero_reviews: "12.5k usuarios • ★★★★★ 1,640 opiniones",
    hero_drop_title: "Arrastra tu archivo aquí",
    hero_drop_or: "o",
    hero_cta: "Subir PDF para Editar",
    tools_heading: "Herramientas <span class='text-[#22C55E]'>PDF</span>",
    tools_subheading: "Utilidades rápidas y sencillas en una cuadrícula compacta y moderna.",
    search_placeholder: "Buscar herramientas (ej. Compresión, Word, Hojas rayadas)...",
    tab_all: "Todas",
    tab_compress: "Comprimir y Combinar",
    tab_sign: "Firmar y Editar",
    tab_organize: "Organizar",
    tab_generators: "Generadores y Seguridad",
    tool_compress_title: "Compresión PDF",
    tool_word_title: "PDF a Word",
    tool_sign_title: "Firma PDF",
    tool_redact_title: "Ocultar Texto PDF",
    tool_lines_title: "Generador de Hojas Rayadas",
    tool_merge_title: "Combinar PDF",
    tool_split_title: "Dividir PDF",
    tool_image_title: "PDF a Imagen",
    tool_protect_title: "Proteger PDF",
    how_title: "Cómo <span class='text-[#22C55E]'>Convertir</span> Un Archivo",
    how_subtitle: "Conversión rápida y fácil en 3 pasos.",
    step1_title: "1. Elige la Herramienta",
    step1_desc: "Selecciona la función que necesitas.",
    step2_title: "2. Sube tu PDF",
    step2_desc: "Arrastra tu archivo directamente a la pantalla.",
    step3_title: "3. Descarga",
    step3_desc: "Guarda el resultado en tu dispositivo de inmediato.",
    ben_heading: "Todo Lo Que Necesitas Para Tus <span class='text-[#22C55E]'>PDF</span>",
    ben_subheading: "Gestiona tus documentos e imágenes como quieras.",
    ben_1_title: "Sin Instalación Necesaria",
    ben_1_desc: "Usa las herramientas en tu navegador sin descargas.",
    ben_2_title: "Rápido y Fácil",
    ben_2_desc: "Completa y guarda tus archivos en pocos clics.",
    ben_3_title: "Funciona en Todo Dispositivo",
    ben_3_desc: "Accede desde tu móvil, tablet o PC.",
    ben_4_title: "Seguro y Privado",
    ben_4_desc: "Procesamiento 100% local en tu navegador.",
    ben_5_title: "Variedad de Herramientas",
    ben_5_desc: "Cambia fácilmente entre compresión, firma u hojas rayadas.",
    ben_6_title: "100% Gratis Siempre",
    ben_6_desc: "Disfruta de todas las funciones sin suscripciones.",
    free_badge: "Acceso Libre y Gratuito",
    free_title: "¿Por qué SWIF PDF es totalmente gratuito?",
    free_desc1: "SWIF PDF funciona en tu navegador gracias a WebAssembly.",
    free_desc2: "Al no tener costes de servidor, ofrecemos la plataforma gratis a todos.",
    free_point1: "Sin subidas a servidor — confidencialidad total.",
    free_point2: "Sin registro ni tarjeta requerida.",
    free_point3: "Sin marcas de agua ni restricciones.",
    faq_title: "Preguntas <span class='text-[#22C55E]'>Frecuentes</span>",
    faq_q1: "¿Qué es SWIF PDF?",
    faq_a1: "Es una plataforma online para gestionar documentos PDF directamente en tu navegador de forma rápida y segura.",
    faq_q2: "¿Requiere instalación?",
    faq_a2: "¡No! Funciona directamente online.",
    faq_q3: "¿Es seguro?",
    faq_a3: "Sí, tus archivos no salen de tu ordenador.",
    faq_q4: "¿Cómo funciona el generador de hojas?",
    faq_a4: "Personaliza líneas, colores y descarga la plantilla lista para imprimir.",
    modal_lined_title: "Generador de Hojas Rayadas Interactivo",
    modal_lined_subtitle: "Personaliza tus hojas pautadas o cuadriculadas.",
    lbl_pattern: "Estilo:",
    lbl_spacing: "Espaciado:",
    lbl_color: "Color:",
    lbl_margin: "Margen rojo:",
    btn_download_png: "Descargar Imagen",
    btn_print: "Imprimir / Exportar PDF",
    close_btn: "Cerrar",
    modal_compress_title: "Demo Compresión PDF",
    modal_compress_drop: "Arrastra tu PDF aquí para simular",
    modal_compress_info: "Reducción estimada: ~65%.",
    btn_simulate: "Iniciar Demo",
    // SEO Section
    seo_badge: "Guía Completa y Referencia PDF",
    seo_title: "Todo sobre la Gestión y Conversión de <span class='text-[#22C55E]'>PDF en Línea</span>",
    seo_sub: "Descubre cómo SWIF PDF simplifica la edición, conversión y seguridad de tus documentos con total privacidad.",
    seo_c1_title: "Compresión PDF Sin Pérdida de Calidad",
    seo_c1_desc: "Comprimir archivos PDF es fundamental para compartir documentos pesados por email o formularios web. Nuestra herramienta optimiza el flujo interno de datos preservando la claridad del texto.",
    seo_c2_title: "Lector Flipbook 3D Interactivo",
    seo_c2_desc: "Convierte cualquier revista o libro PDF en una experiencia de lectura 3D inmersiva con animación de paso de página y sombras dinámicas.",
    seo_c3_title: "Unir y Dividir Páginas PDF",
    seo_c3_desc: "Combina varios informes en un solo documento organizado o extrae solo las páginas que necesites en pocos clics.",
    seo_c4_title: "Seguridad y Procesamiento 100% Local",
    seo_c4_desc: "Tus datos son privados. SWIF PDF se ejecuta completamente en tu navegador mediante WebAssembly. Tus archivos nunca se suben a ningún servidor externo.",

    // Footer
    footer_desc: "La plataforma de herramientas PDF rápida, segura y 100% gratuita con procesamiento local en tu navegador.",
    footer_nav_heading: "Navegación",
    footer_nav_home: "Página de Inicio",
    footer_nav_flipbook: "Lector Flipbook 3D",
    footer_nav_compress: "Comprimir PDF",
    footer_nav_merge: "Unir PDFs",
    footer_legal_heading: "Información y Legal",
    footer_legal_terms: "Términos de Servicio (CGU)",
    footer_legal_privacy: "Política de Privacidad",
    footer_legal_contact: "Contacto",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_tools: "PDF-Werkzeuge",
    nav_compress: "Komprimieren",
    nav_sign: "Signieren & Bearbeiten",
    nav_about: "Über uns",
    nav_login: "Anmelden",
    hero_title: "All-in-One PDF <span class='text-[#22C55E]'>Konvertierungs</span> Tool",
    hero_subtitle: "Komprimieren, zusammenfügen, signieren und organisieren Sie PDFs mit wenigen Klicks.",
    hero_bullet1: "Laden Sie Ihr PDF hoch",
    hero_bullet2: "Wählen Sie das Werkzeug oder Format",
    hero_bullet3: "Bearbeiten und sofort herunterladen",
    hero_reviews: "12.5k Nutzer • ★★★★★ 1.640 Bewertungen",
    hero_drop_title: "Datei hier ablegen",
    hero_drop_or: "oder",
    hero_cta: "PDF zum Bearbeiten hochladen",
    tools_heading: "PDF <span class='text-[#22C55E]'>Converter</span> Werkzeuge",
    tools_subheading: "Schnelle Werkzeuge in einem kompakten, modernen Layout.",
    search_placeholder: "Werkzeug suchen (z.B. Komprimieren, Word, Liniertes Papier)...",
    tab_all: "Alle Werkzeuge",
    tab_compress: "Komprimieren & Zusammenfügen",
    tab_sign: "Signieren & Bearbeiten",
    tab_organize: "Organisieren",
    tab_generators: "Generatoren & Sicherheit",
    tool_compress_title: "PDF Komprimierung",
    tool_word_title: "PDF in Word",
    tool_sign_title: "PDF Signatur",
    tool_redact_title: "PDF Schwärzen",
    tool_lines_title: "Liniertes Papier Generator",
    tool_merge_title: "PDFs Zusammenfügen",
    tool_split_title: "PDF Teilen",
    tool_image_title: "PDF in Bild",
    tool_protect_title: "PDF Schützen",
    how_title: "So <span class='text-[#22C55E]'>Konvertieren</span> Sie eine Datei",
    how_subtitle: "Schnelle Konvertierung in 3 einfachen Schritten.",
    step1_title: "1. Werkzeug wählen",
    step1_desc: "Wählen Sie Komprimieren, Signieren oder Word.",
    step2_title: "2. PDF hochladen",
    step2_desc: "Ziehen Sie Ihre Datei per Drag & Drop hinein.",
    step3_title: "3. Herunterladen",
    step3_desc: "Speichern Sie das Dokument sofort ab.",
    ben_heading: "Alles was Sie für Ihre <span class='text-[#22C55E]'>PDFs</span> brauchen",
    ben_subheading: "Verwalten Sie Ihre Dokumente genau wie Sie es benötigen.",
    ben_1_title: "Keine Installation nötig",
    ben_1_desc: "Nutzung direkt im Browser ohne Software-Download.",
    ben_2_title: "Schnell und einfach",
    ben_2_desc: "Dokumente in wenigen Klicks bearbeiten.",
    ben_3_title: "Auf allen Geräten",
    ben_3_desc: "Nutzen Sie SWIF PDF auf Handy, Tablet oder PC.",
    ben_4_title: "Sicher und Privat",
    ben_4_desc: "Dateien werden 100% lokal verarbeitet.",
    ben_5_title: "Große Auswahl",
    ben_5_desc: "Wechseln Sie leicht zwischen verschiedenen Werkzeugen.",
    ben_6_title: "100% Dauerhaft Kostenlos",
    ben_6_desc: "Alle Funktionen ohne Abos oder versteckte Kosten.",
    free_badge: "Kostenloser Zugang",
    free_title: "Warum ist SWIF PDF kostenlos?",
    free_desc1: "SWIF PDF arbeitet direkt in Ihrem Browser über WebAssembly.",
    free_desc2: "Ohne Serverkosten stellen wir SWIF PDF für alle kostenlos zur Verfügung.",
    free_point1: "Keine Server-Uploads — absolute Vertraulichkeit.",
    free_point2: "Keine Registrierung erforderlich.",
    free_point3: "Keine Wasserzeichen.",
    faq_title: "Häufig gestellte <span class='text-[#22C55E]'>Fragen</span>",
    faq_q1: "Was ist SWIF PDF?",
    faq_a1: "Eine sichere Online-Plattform zur schnellen PDF-Bearbeitung direkt im Browser.",
    faq_q2: "Brauche ich Software?",
    faq_a2: "Nein, alles läuft direkt im Webbrowser.",
    faq_q3: "Sind meine Dateien sicher?",
    faq_a3: "Ja, zu 100% auf Ihrem Gerät.",
    faq_q4: "Wie funktioniert der Linien-Generator?",
    faq_a4: "Passen Sie Linienabstand und Farben an und drucken Sie die Vorlage aus.",
    modal_lined_title: "Interaktiver Papier-Generator",
    modal_lined_subtitle: "Erstellen Sie liniertes oder kariertes Papier.",
    lbl_pattern: "Muster:",
    lbl_spacing: "Abstand:",
    lbl_color: "Farbe:",
    lbl_margin: "Roter Rand:",
    btn_download_png: "Bild herunterladen",
    btn_print: "Drucken / PDF Export",
    close_btn: "Schließen",
    modal_compress_title: "PDF Komprimierung Demo",
    modal_compress_drop: "PDF hierher ziehen",
    modal_compress_info: "Erwartete Reduzierung: ~65%.",
    btn_simulate: "Demo starten",
    // SEO Section
    seo_badge: "Vollständiger PDF-Leitfaden",
    seo_title: "Alles über Online-<span class='text-[#22C55E]'>PDF-Konvertierung</span> & Verwaltung",
    seo_sub: "Erfahren Sie, wie SWIF PDF die Bearbeitung, Konvertierung und Sicherheit Ihrer Dokumente lokal vereinfacht.",
    seo_c1_title: "Verlustfreie PDF-Komprimierung",
    seo_c1_desc: "Die Komprimierung von PDF-Dateien ist ideal für den schnellen E-Mail-Versand. Unser Online-Tool reduziert die Dateigröße bei perfekter Textschärfe.",
    seo_c2_title: "Interaktiver 3D-Flipbook-Reader",
    seo_c2_desc: "Verwandeln Sie Magazine und PDF-Bücher in ein realistisches 3D-Leseerlebnis mit dynamischen Umblätteranimationen.",
    seo_c3_title: "PDF Seiten Zusammenfügen & Teilen",
    seo_c3_desc: "Kombinieren Sie mehrere Berichte oder extrahieren Sie einzelne Seiten mit wenigen Klicks.",
    seo_c4_title: "100% Lokale Browser-Sicherheit",
    seo_c4_desc: "Ihre Daten bleiben geschützt. SWIF PDF läuft direkt in Ihrem Browser via WebAssembly ohne Server-Upload.",

    // Footer
    footer_desc: "Die schnelle und 100% kostenlose PDF-Plattform mit lokaler Verarbeitung.",
    footer_nav_heading: "Navigation",
    footer_nav_home: "Startseite",
    footer_nav_flipbook: "3D Flipbook Reader",
    footer_nav_compress: "PDF Komprimieren",
    footer_nav_merge: "PDFs Zusammenfügen",
    footer_legal_heading: "Informationen & Rechtliches",
    footer_legal_terms: "Nutzungsbedingungen (AGB)",
    footer_legal_privacy: "Datenschutzerklärung",
    footer_legal_contact: "Kontakt",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_tools: "Ferramentas PDF",
    nav_compress: "Comprimir",
    nav_sign: "Assinar & Editar",
    nav_about: "Sobre",
    nav_login: "Entrar",
    hero_title: "Ferramenta de <span class='text-[#22C55E]'>Conversão</span> PDF Tudo-em-Um",
    hero_subtitle: "Comprima, junte, assine, oculte e organize os seus PDFs em poucos cliques.",
    hero_bullet1: "Carregue o seu documento PDF",
    hero_bullet2: "Selecione a ferramenta ou formato",
    hero_bullet3: "Edite, converta e descarregue instantaneamente",
    hero_reviews: "12.5k utilizadores • ★★★★★ 1,640 avaliações",
    hero_drop_title: "Arraste o seu ficheiro aqui",
    hero_drop_or: "ou",
    hero_cta: "Carregar PDF para Editar",
    tools_heading: "Ferramentas <span class='text-[#22C55E]'>PDF</span>",
    tools_subheading: "Utilitários rápidos numa grelha compacta e moderna.",
    search_placeholder: "Procurar ferramenta (ex: Compressão, Word, Folha pautada)...",
    tab_all: "Todas",
    tab_compress: "Comprimir e Juntar",
    tab_sign: "Assinar e Editar",
    tab_organize: "Organizar",
    tab_generators: "Geradores e Segurança",
    tool_compress_title: "Compressão PDF",
    tool_word_title: "PDF para Word",
    tool_sign_title: "Assinatura PDF",
    tool_redact_title: "Ocultação de PDF",
    tool_lines_title: "Gerador de Páginas Pautadas",
    tool_merge_title: "Juntar PDFs",
    tool_split_title: "Dividir PDF",
    tool_image_title: "PDF para Imagem",
    tool_protect_title: "Proteger PDF",
    how_title: "Como <span class='text-[#22C55E]'>Converter</span> Um Ficheiro",
    how_subtitle: "Conversão rápida em 3 passos simples.",
    step1_title: "1. Escolha a Ferramenta",
    step1_desc: "Selecione a funcionalidade pretendida.",
    step2_title: "2. Carregue o PDF",
    step2_desc: "Arraste o documento diretamente para o ecrã.",
    step3_title: "3. Descarregue",
    step3_desc: "Guarde o resultado instantaneamente.",
    ben_heading: "Tudo O Que Precisa Para Os Seus <span class='text-[#22C55E]'>PDFs</span>",
    ben_subheading: "Gira os seus ficheiros como preferir.",
    ben_1_title: "Sem Instalação",
    ben_1_desc: "Use no navegador sem transferir programas.",
    ben_2_title: "Rápido e Simples",
    ben_2_desc: "Conclua e guarde ficheiros em poucos cliques.",
    ben_3_title: "Funciona em Qualquer Dispositivo",
    ben_3_desc: "Aceda no telemóvel, tablet ou PC.",
    ben_4_title: "Seguro e Privado",
    ben_4_desc: "Processamento 100% local no seu navegador.",
    ben_5_title: "Variedade de Opções",
    ben_5_desc: "Alterne entre compressão, assinatura ou pautas.",
    ben_6_title: "100% Grátis Para Sempre",
    ben_6_desc: "Acesso completo sem subscrições.",
    free_badge: "Acesso Livre e Gratuito",
    free_title: "Porquê o SWIF PDF é totalmente gratuito?",
    free_desc1: "O SWIF PDF funciona no seu navegador com tecnologia WebAssembly.",
    free_desc2: "Sem custos de servidores, oferecemos a plataforma grátis.",
    free_point1: "Sem envios para servidores — confidencialidade total.",
    free_point2: "Sem registo nem cartão de crédito.",
    free_point3: "Sem marcas de água.",
    faq_title: "Perguntas <span class='text-[#22C55E]'>Frequentes</span>",
    faq_q1: "O que é o SWIF PDF?",
    faq_a1: "Uma plataforma online para gerir documentos PDF diretamente no navegador.",
    faq_q2: "Preciso de instalar programas?",
    faq_a2: "Não, tudo funciona online.",
    faq_q3: "Os meus ficheiros estão seguros?",
    faq_a3: "Sim, 100% no seu dispositivo.",
    faq_q4: "Como funciona o gerador de papel?",
    faq_a4: "Personalize as linhas e descarregue a folha pronta a imprimir.",
    modal_lined_title: "Gerador de Páginas Pautadas Interativo",
    modal_lined_subtitle: "Personalize a sua folha de papel.",
    lbl_pattern: "Estilo:",
    lbl_spacing: "Espaçamento:",
    lbl_color: "Cor:",
    lbl_margin: "Margem vermelha:",
    btn_download_png: "Descarregar Imagem",
    btn_print: "Imprimir / Exportar PDF",
    close_btn: "Fechar",
    modal_compress_title: "Demonstração de Compressão",
    modal_compress_drop: "Arraste o PDF aqui",
    modal_compress_info: "Redução estimada: ~65%.",
    btn_simulate: "Iniciar Simulação",
    // SEO Section
    seo_badge: "Guia Completo e Referência PDF",
    seo_title: "Tudo sobre Gestão e Conversão de <span class='text-[#22C55E]'>PDF Online</span>",
    seo_sub: "Descubra como o SWIF PDF simplifica a edição, conversão e segurança dos seus documentos com privacidade total.",
    seo_c1_title: "Compressão PDF Sem Perda de Qualidade",
    seo_c1_desc: "Comprimir arquivos PDF é essencial para compartilhar documentos pesados. Nossa ferramenta otimiza o arquivo mantendo o texto nítido.",
    seo_c2_title: "Leitor Flipbook 3D Interativo",
    seo_c2_desc: "Transforme revistas e livros PDF em uma experiência 3D com páginas folheadas de forma realista.",
    seo_c3_title: "Juntar e Dividir Páginas PDF",
    seo_c3_desc: "Combine múltiplos relatórios num único arquivo ou extraia apenas as páginas necessárias em poucos cliques.",
    seo_c4_title: "Segurança 100% Processada no Navegador",
    seo_c4_desc: "Seus dados estão protegidos. O SWIF PDF executa via WebAssembly no seu navegador sem enviar arquivos para servidores.",

    // Footer
    footer_desc: "A plataforma de ferramentas PDF rápida e 100% gratuita com processamento local.",
    footer_nav_heading: "Navegação",
    footer_nav_home: "Página Inicial",
    footer_nav_flipbook: "Leitor Flipbook 3D",
    footer_nav_compress: "Comprimir PDF",
    footer_nav_merge: "Juntar PDFs",
    footer_legal_heading: "Informações e Legal",
    footer_legal_terms: "Termos de Serviço (CGU)",
    footer_legal_privacy: "Política de Privacidade",
    footer_legal_contact: "Contacto",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_tools: "Strumenti PDF",
    nav_compress: "Comprimi",
    nav_sign: "Firma e Modifica",
    nav_about: "Informazioni",
    nav_login: "Accedi",
    hero_title: "Strumento di <span class='text-[#22C55E]'>Conversione</span> PDF Tutto-in-Uno",
    hero_subtitle: "Comprimi, unisci, firma, nascondi testo e organizza i tuoi PDF in pochi clic.",
    hero_bullet1: "Carica il tuo documento PDF",
    hero_bullet2: "Seleziona lo strumento o il formato",
    hero_bullet3: "Modifica, converti e scarica subito",
    hero_reviews: "12.5k utenti • ★★★★★ 1,640 recensioni",
    hero_drop_title: "Trascina il tuo file qui",
    hero_drop_or: "o",
    hero_cta: "Carica PDF da Modificare",
    tools_heading: "Strumenti <span class='text-[#22C55E]'>PDF</span>",
    tools_subheading: "Utility veloci in un layout compatto e moderno.",
    search_placeholder: "Cerca strumenti (es. Compressione, Word, Fogli a righe)...",
    tab_all: "Tutti",
    tab_compress: "Comprimi e Unisci",
    tab_sign: "Firma e Modifica",
    tab_organize: "Organizza",
    tab_generators: "Generatori e Sicurezza",
    tool_compress_title: "Compressione PDF",
    tool_word_title: "Da PDF a Word",
    tool_sign_title: "Firma PDF",
    tool_redact_title: "Oscuramento PDF",
    tool_lines_title: "Generatore di Fogli a Righe",
    tool_merge_title: "Unisci PDF",
    tool_split_title: "Dividi PDF",
    tool_image_title: "Da PDF a Immagine",
    tool_protect_title: "Proteggi PDF",
    how_title: "Come <span class='text-[#22C55E]'>Convertire</span> Un File",
    how_subtitle: "Conversione rapida in 3 semplici passaggi.",
    step1_title: "1. Scegli lo Strumento",
    step1_desc: "Seleziona la funzione desiderata.",
    step2_title: "2. Carica il PDF",
    step2_desc: "Trascina il file nello schermo.",
    step3_title: "3. Scarica",
    step3_desc: "Salva subito il file finale.",
    ben_heading: "Tutto Ciò Di Cui Hai Bisogno Per I Tuoi <span class='text-[#22C55E]'>PDF</span>",
    ben_subheading: "Gestisci i tuoi documenti facilmente.",
    ben_1_title: "Nessuna Installazione",
    ben_1_desc: "Usa gli strumenti direttamente nel browser.",
    ben_2_title: "Veloce e Intuitivo",
    ben_2_desc: "Completa i tuoi file in pochi clic.",
    ben_3_title: "Funziona su Qualsiasi Dispositivo",
    ben_3_desc: "Accedi da smartphone, tablet o PC.",
    ben_4_title: "Sicuro e Privato",
    ben_4_desc: "Elaborazione 100% locale nel browser.",
    ben_5_title: "Ampia Scelta",
    ben_5_desc: "Passa facilmente da uno strumento all'altro.",
    ben_6_title: "100% Gratis Per Sempre",
    ben_6_desc: "Tutte le funzioni senza costi nascosti.",
    free_badge: "Accesso Libero e Gratuito",
    free_title: "Perché SWIF PDF è completamente gratuito?",
    free_desc1: "SWIF PDF funziona nel browser tramite WebAssembly.",
    free_desc2: "Senza costi di server, offriamo il servizio gratis.",
    free_point1: "Nessun caricamento server — riservatezza assoluta.",
    free_point2: "Nessuna registrazione richiesta.",
    free_point3: "Senza filigrane.",
    faq_title: "Domande <span class='text-[#22C55E]'>Frequenti</span>",
    faq_q1: "Cos'è SWIF PDF?",
    faq_a1: "Una piattaforma online per gestire file PDF in sicurezza nel browser.",
    faq_q2: "Serve installare un software?",
    faq_a2: "No, funziona tutto online.",
    faq_q3: "I miei file sono al sicuro?",
    faq_a3: "Sì, al 100% sul tuo computer.",
    faq_q4: "Come funziona il generatore di fogli?",
    faq_a4: "Scegli le righe e scarica la pagina pronta da stampare.",
    modal_lined_title: "Generatore di Fogli a Righe Interattivo",
    modal_lined_subtitle: "Personalizza il tuo foglio.",
    lbl_pattern: "Stile:",
    lbl_spacing: "Spaziatura:",
    lbl_color: "Colore:",
    lbl_margin: "Margine rosso:",
    btn_download_png: "Scarica Immagine",
    btn_print: "Stampa / Esporta PDF",
    close_btn: "Chiudi",
    modal_compress_title: "Demo Compressione PDF",
    modal_compress_drop: "Trascina il PDF qui",
    modal_compress_info: "Riduzione stimata: ~65%.",
    btn_simulate: "Avvia Simulazione",
    footer_desc: "La piattaforma di strumenti PDF veloce e 100% gratuita.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_tools: "Narzędzia PDF",
    nav_compress: "Kompresuj",
    nav_sign: "Podpis i Edycja",
    nav_about: "O nas",
    nav_login: "Zaloguj się",
    hero_title: "Wszystko w jednym narzędzie do <span class='text-[#22C55E]'>Konwersji</span> PDF",
    hero_subtitle: "Kompresuj, łącz, podpisuj, ukrywaj tekst i organizuj pliki PDF za pomocą kilku kliknięć.",
    hero_bullet1: "Prześlij swój dokument PDF",
    hero_bullet2: "Wybierz narzędzie lub format",
    hero_bullet3: "Edytuj, konwertuj i pobieraj natychmiast",
    hero_reviews: "12.5k użytkowników • ★★★★★ 1 640 opinii",
    hero_drop_title: "Upuść plik tutaj",
    hero_drop_or: "lub",
    hero_cta: "Prześlij PDF do Edycji",
    tools_heading: "Narzędzia <span class='text-[#22C55E]'>PDF</span>",
    tools_subheading: "Szybkie i proste narzędzia w kompaktowym układzie.",
    search_placeholder: "Szukaj narzędzi (np. Kompresja, Word, Papier w linie)...",
    tab_all: "Wszystkie",
    tab_compress: "Kompresja i Łączenie",
    tab_sign: "Podpis i Edycja",
    tab_organize: "Organizacja",
    tab_generators: "Generatory i Bezpieczeństwo",
    tool_compress_title: "Kompresja PDF",
    tool_word_title: "PDF do Word",
    tool_sign_title: "Podpis PDF",
    tool_redact_title: "Anonimizacja PDF",
    tool_lines_title: "Generator Papieru w Linie",
    tool_merge_title: "Łączenie PDF",
    tool_split_title: "Dzielenie PDF",
    tool_image_title: "PDF do Obrazu",
    tool_protect_title: "Ochrona PDF",
    how_title: "Jak <span class='text-[#22C55E]'>Przetworzyć</span> Plik",
    how_subtitle: "Szybka konwersja w 3 prostych krokach.",
    step1_title: "1. Wybierz Narzędzie",
    step1_desc: "Wybierz potrzebną funkcję.",
    step2_title: "2. Prześlij PDF",
    step2_desc: "Przeciągnij plik na ekran.",
    step3_title: "3. Pobierz",
    step3_desc: "Zapisz gotowy plik natychmiast.",
    ben_heading: "Wszystko Czego Potrzebujesz Do <span class='text-[#22C55E]'>PDF</span>",
    ben_subheading: "Zarządzaj swoimi dokumentami tak, jak chcesz.",
    ben_1_title: "Bez Instalacji",
    ben_1_desc: "Używaj w przeglądarce bez pobierania programów.",
    ben_2_title: "Szybko i Prosto",
    ben_2_desc: "Edytuj i zapisuj pliki w kilka kliknięć.",
    ben_3_title: "Na Każdym Urządzeniu",
    ben_3_desc: "Korzystaj na telefonie, tablecie i PC.",
    ben_4_title: "Bezpiecznie i Prywatnie",
    ben_4_desc: "Przetwarzanie 100% lokalnie w przeglądarce.",
    ben_5_title: "Szeroki Wybór",
    ben_5_desc: "Łatwo przełączaj się między narzędziami.",
    ben_6_title: "100% Darmowe Na Zawsze",
    ben_6_desc: "Wszystkie funkcje bez opłat i subskrypcji.",
    free_badge: "Darmowy Dostęp",
    free_title: "Dlaczego SWIF PDF jest całkowicie darmowy?",
    free_desc1: "SWIF PDF działa w Twojej przeglądarce dzięki WebAssembly.",
    free_desc2: "Brak kosztów serwerowych pozwala oferować usługę za darmo.",
    free_point1: "Brak przesyłania na serwery — pełna poufność.",
    free_point2: "Brak wymogu rejestracji.",
    free_point3: "Brak znaków wodnych.",
    faq_title: "Często Zadawane <span class='text-[#22C55E]'>Pytania</span>",
    faq_q1: "Czym jest SWIF PDF?",
    faq_a1: "To bezpieczna platforma online do szybkiego zarządzania plikami PDF.",
    faq_q2: "Czy muszę instalować program?",
    faq_a2: "Nie, wszystko działa bezpośrednio w przeglądarce.",
    faq_q3: "Czy moje pliki są bezpieczne?",
    faq_a3: "Tak, w 100% na Twoim komputerze.",
    faq_q4: "Jak działa generator papieru?",
    faq_a4: "Dostosuj linie i pobierz arkusz do druku.",
    modal_lined_title: "Interaktywny Generator Papieru w Linie",
    modal_lined_subtitle: "Dostosuj papier i pobierz go.",
    lbl_pattern: "Wzór:",
    lbl_spacing: "Odstęp:",
    lbl_color: "Kolor:",
    lbl_margin: "Czerwony margines:",
    btn_download_png: "Pobierz obraz",
    btn_print: "Drukuj / Eksportuj PDF",
    close_btn: "Zamknij",
    modal_compress_title: "Demonstracja Kompresji PDF",
    modal_compress_drop: "Upuść plik PDF tutaj",
    modal_compress_info: "Szacowane zmniejszenie: ~65%.",
    btn_simulate: "Uruchom symulację",
    footer_desc: "Szybka i w 100% darmowa platforma do plików PDF.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_tools: "أدوات PDF",
    nav_compress: "الضغط",
    nav_sign: "التوقيع والتعديل",
    nav_about: "حول الخدمة",
    nav_login: "تسجيل الدخول",
    hero_title: "أداة <span class='text-[#22C55E]'>تحويل</span> وتعديل PDF الشاملة",
    hero_subtitle: "اَضغط، ادمج، وقّع، اخفِ النصوص، ونظّم ملفات PDF في خطوات بسيطة.",
    hero_bullet1: "اختر أو اسحب ملف PDF",
    hero_bullet2: "حدد الأداة أو التنسيق المطلوب",
    hero_bullet3: "عدّل، حوّل واحفظ فوراً",
    hero_reviews: "+12.5 ألف مستخدم • ★★★★★ 1,640 تقييم",
    hero_drop_title: "اسحب ملفك هنا",
    hero_drop_or: "أو",
    hero_cta: "تحميل ملف PDF للتعديل",
    tools_heading: "أدوات <span class='text-[#22C55E]'>PDF</span>",
    tools_subheading: "أدوات سريعة بتصميم حديث ومدمج في شبكة أنيقة.",
    search_placeholder: "ابحث عن أداة (مثال: الضغط، Word، ورق مسطر)...",
    tab_all: "جميع الأدوات",
    tab_compress: "الضغط والدمج",
    tab_sign: "التوقيع والتعديل",
    tab_organize: "التنظيم",
    tab_generators: "المولدات والأمان",
    tool_compress_title: "ضغط PDF",
    tool_word_title: "PDF إلى Word",
    tool_sign_title: "توقيع PDF",
    tool_redact_title: "حجب النصوص",
    tool_lines_title: "مولد الصفحات المسطرة",
    tool_merge_title: "دمج ملفات PDF",
    tool_split_title: "تقسيم PDF",
    tool_image_title: "PDF إلى صورة",
    tool_protect_title: "حماية PDF",
    how_title: "كيفية <span class='text-[#22C55E]'>تحويل</span> الملفات",
    how_subtitle: "معالجة سريعة في 3 خطوات بسيطة.",
    step1_title: "1. اختر الأداة",
    step1_desc: "حدد الوظيفة التي تحتاجها بسهولة.",
    step2_title: "2. اسحب ملفك",
    step2_desc: "ارفع المستند مباشرة من جهازك.",
    step3_title: "3. حمّل المستند",
    step3_desc: "احفظ النتيجة النهائية فوراً.",
    ben_heading: "كل ما تحتاجه لملفات <span class='text-[#22C55E]'>PDF</span>",
    ben_subheading: "إدارة متكاملة لملفاتك ومستنداتك بأعلى كفاءة.",
    ben_1_title: "بدون تثبيت برامج",
    ben_1_desc: "استخدم الأدوات مباشرة في متصفحك.",
    ben_2_title: "سريع وسهل الاستخدام",
    ben_2_desc: "أنجز مستنداتك وحفظها بضغطة زر.",
    ben_3_title: "يعمل على جميع الأجهزة",
    ben_3_desc: "استخدم الموقع من الهاتف أو الكمبيوتر.",
    ben_4_title: "آمن وخصوصية مطلقة",
    ben_4_desc: "معالجة محلياً 100% داخل متصفحك.",
    ben_5_title: "تنوع واسع في الأدوات",
    ben_5_desc: "تنقل بمرونة بين الضغط والتوقيع والتسطير.",
    ben_6_title: "مجاني 100% مدى الحياة",
    ben_6_desc: "استمتع بجميع الميزات بدون أي اشتراكات.",
    free_badge: "وصول مفتوح ومجاني",
    free_title: "لماذا موقع SWIF PDF مجاني بالكامل؟",
    free_desc1: "يعمل SWIF PDF مباشرة داخل متصفحك بتقنية WebAssembly.",
    free_desc2: "بدون تكاليف سيرفرات مرتفعة، نتيح موقعنا مجاناً للجميع حول العالم.",
    free_point1: "بدون رفع الملفات — سرية تامة لمستنداتك.",
    free_point2: "لا يتطلب التسجيل أو إدخال بطاقة.",
    free_point3: "بدون أي علامة مائية.",
    faq_title: "الأسئلة <span class='text-[#22C55E]'>الشائعة</span>",
    faq_q1: "ما هو SWIF PDF؟",
    faq_a1: "منصة إلكترونية آمنة لإدارة ملفات PDF بسهولة وسرعة داخل المتصفح.",
    faq_q2: "هل أحتاج إلى تثبيت برنامج؟",
    faq_a2: "لا، جميع الأدوات تعمل مباشرة عبر الإنترنت.",
    faq_q3: "هل ملفاتي آمنة؟",
    faq_a3: "نعم، 100% على جهازك محلياً.",
    faq_q4: "كيف تعمل أداة الصفحات المسطرة؟",
    faq_a4: "حدد المسافات والألوان واطبع ورقتك المسطرة فوراً.",
    modal_lined_title: "مولد الصفحات المسطرة التفاعلي",
    modal_lined_subtitle: "خصص ورقتك المسطرة واطبعها أو حمّلها.",
    lbl_pattern: "نمط التسطير:",
    lbl_spacing: "المسافة:",
    lbl_color: "اللون:",
    lbl_margin: "الخط الأحمر:",
    btn_download_png: "تحميل كصورة",
    btn_print: "طباعة / تصدير PDF",
    close_btn: "إغلاق",
    modal_compress_title: "تجربة أداة ضغط PDF",
    modal_compress_drop: "اسحب ملف PDF هنا للتجربة",
    modal_compress_info: "التخفيض المتوقع: ~65%.",
    btn_simulate: "بدء التجربة",
    footer_desc: "منصة أدوات PDF الأسرع والأكثر أماناً والمجانية 100%.",
    footer_rights: "© 2026 SWIF PDF. جميع الحقوق محفوظة."
  }
};

// Flags dictionary for header selector
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

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initToolFilters();
  initFaqAccordion();
  initLinedPaperCanvas();
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

  const dict = translations[lang];
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

  drawLinedPaper();
}

// Tool Filters & Search
function initToolFilters() {
  const searchInput = document.getElementById('toolSearchInput');
  const filterBtns = document.querySelectorAll('.filter-pill');
  const toolCards = document.querySelectorAll('.tool-card-paw');

  let activeCategory = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-[#22C55E]', 'text-white'));
      filterBtns.forEach(b => b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200'));
      btn.classList.add('active', 'bg-[#22C55E]', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');

      activeCategory = btn.getAttribute('data-tab');
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterCards();
    });
  }

  function filterCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    toolCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const cardTitle = card.querySelector('.tool-title') ? card.querySelector('.tool-title').innerText.toLowerCase() : '';

      const matchesCat = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = !query || cardTitle.includes(query);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }
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

// Canvas Lined Paper Generator
let canvas, ctx;

function initLinedPaperCanvas() {
  canvas = document.getElementById('paperCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  const patternSelect = document.getElementById('optPattern');
  const spacingSelect = document.getElementById('optSpacing');
  const colorSelect = document.getElementById('optColor');
  const marginCheck = document.getElementById('optMargin');

  [patternSelect, spacingSelect, colorSelect, marginCheck].forEach(ctrl => {
    if (ctrl) {
      ctrl.addEventListener('change', drawLinedPaper);
    }
  });

  drawLinedPaper();
}

function openLinedPaperModal() {
  const modal = document.getElementById('linedModal');
  if (modal) {
    modal.classList.remove('hidden');
    drawLinedPaper();
  }
}

function closeLinedPaperModal() {
  const modal = document.getElementById('linedModal');
  if (modal) modal.classList.add('hidden');
}

function drawLinedPaper() {
  if (!canvas || !ctx) return;

  const width = canvas.width = 600;
  const height = canvas.height = 750;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const pattern = document.getElementById('optPattern')?.value || 'ruled';
  const spacing = parseInt(document.getElementById('optSpacing')?.value || '28', 10);
  const color = document.getElementById('optColor')?.value || '#cbd5e1';
  const showMargin = document.getElementById('optMargin')?.checked;

  ctx.lineWidth = 1;
  ctx.strokeStyle = color;

  if (pattern === 'ruled') {
    for (let y = 60; y < height - 30; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(30, y);
      ctx.lineTo(width - 30, y);
      ctx.stroke();
    }
  } else if (pattern === 'grid') {
    for (let x = 30; x < width - 30; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 40);
      ctx.lineTo(x, height - 30);
      ctx.stroke();
    }
    for (let y = 40; y < height - 30; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(30, y);
      ctx.lineTo(width - 30, y);
      ctx.stroke();
    }
  } else if (pattern === 'dots') {
    ctx.fillStyle = color;
    for (let x = 40; x < width - 30; x += spacing) {
      for (let y = 50; y < height - 30; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  if (showMargin) {
    const isRtl = document.documentElement.dir === 'rtl';
    const marginX = isRtl ? width - 90 : 90;

    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(marginX, 30);
    ctx.lineTo(marginX, height - 20);
    ctx.stroke();
  }
}

function downloadPaperImage() {
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = 'swif-pdf-lined-page.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function printPaperCanvas() {
  if (!canvas) return;
  const win = window.open('', '_blank');
  win.document.write(`
    <html>
      <head>
        <title>Print SWIF PDF Lined Page</title>
        <style>
          body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
          img { max-width: 100%; height: auto; }
        </style>
      </head>
      <body>
        <img src="${canvas.toDataURL('image/png')}" />
        <script>
          window.onload = function() { window.print(); window.close(); }
        </script>
      </body>
    </html>
  `);
  win.document.close();
}

// Compress Modal Simulation
function openCompressModal() {
  const modal = document.getElementById('compressModal');
  if (modal) modal.classList.remove('hidden');
}

function closeCompressModal() {
  const modal = document.getElementById('compressModal');
  if (modal) modal.classList.add('hidden');
}

function runCompressSimulation() {
  const bar = document.getElementById('compressProgressBar');
  const status = document.getElementById('compressStatus');
  const btn = document.getElementById('btnStartSim');

  if (!bar || !status) return;

  btn.disabled = true;
  bar.style.width = '0%';
  status.innerText = "Analyzing PDF structure...";

  setTimeout(() => {
    bar.style.width = '50%';
    status.innerText = "Compressing stream objects & images...";
  }, 800);

  setTimeout(() => {
    bar.style.width = '100%';
    status.innerText = "Complete! Saved 65% space.";
    btn.disabled = false;
  }, 1800);
}

// Blog navigation helper
function navigateToBlog() {
  window.location.href = 'blog.html';
}

// Global Preventive Security Suite
function sanitizeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validatePdfFile(file) {
  if (!file) return { valid: false, error: "Aucun fichier sélectionné." };
  const isPdfExt = file.name.toLowerCase().endsWith('.pdf');
  
  if (!isPdfExt) {
    return { valid: false, error: "Format invalide : Veuillez sélectionner un fichier PDF valide (.pdf)." };
  }
  if (file.size > 250 * 1024 * 1024) {
    return { valid: false, error: "Fichier trop volumineux : La taille maximale autorisée est de 250 Mo." };
  }
  return { valid: true };
}

function validateImageFile(file) {
  if (!file) return { valid: false, error: "Aucun fichier sélectionné." };
  const validExts = ['.jpg', '.jpeg', '.png', '.webp'];
  const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
  
  if (!validExts.includes(ext)) {
    return { valid: false, error: "Format non supporté : Seuls les fichiers JPG, PNG et WEBP sont acceptés." };
  }
  return { valid: true };
}

function showGlobalErrorToast(message) {
  let toastContainer = document.getElementById('globalErrorToast');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'globalErrorToast';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl bg-red-600 text-white font-bold text-xs shadow-2xl transition-all duration-300 flex items-center gap-3 transform translate-y-0';
    document.body.appendChild(toastContainer);
  }

  toastContainer.innerHTML = `
    <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
    <span>${sanitizeHtml(message)}</span>
  `;
  toastContainer.classList.remove('hidden');

  setTimeout(() => {
    if (toastContainer) toastContainer.classList.add('hidden');
  }, 6000);
}

// Mobile Hamburger Navigation Drawer Controller
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('mobileMenuIcon');

  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (icon) icon.setAttribute('data-lucide', 'x');
    } else {
      menu.classList.add('hidden');
      if (icon) icon.setAttribute('data-lucide', 'menu');
    }
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  });

  // Close menu when clicking on any link inside mobile drawer
  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      if (icon) icon.setAttribute('data-lucide', 'menu');
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.add('hidden');
      if (icon) icon.setAttribute('data-lucide', 'menu');
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
  initMobileMenu();
}



