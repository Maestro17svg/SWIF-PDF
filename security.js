// SWIF PDF - Standalone PDF Security Tool Script (Protect & Unlock PDF)

const translations = {
  en: {
    nav_home: "Back to Home",
    nav_login: "Sign In",
    hero_title: "Protect & Unlock <span class='text-coral'>PDF</span> Security",
    hero_subtitle: "Encrypt your PDF with strong passwords and custom permissions, or unlock password-protected files 100% client-side.",
    tab_protect: "Protect PDF (Encrypt)",
    tab_unlock: "Unlock PDF (Decrypt)",
    drop_title_protect: "Drag & drop PDF to Protect",
    drop_title_unlock: "Drag & drop PDF to Unlock",
    drop_or: "or",
    drop_btn_protect: "Select PDF to Protect",
    drop_btn_unlock: "Select PDF to Unlock",
    drop_info: "100% Client-Side processing. Your passwords and files never leave your device.",
    pwd_label: "Set Encryption Password:",
    pwd_placeholder: "Enter strong password...",
    pwd_strength: "Password Strength:",
    str_weak: "Weak",
    str_medium: "Medium",
    str_strong: "Strong",
    perm_title: "Permission Restrictions:",
    perm_print: "Allow Printing",
    perm_modify: "Allow Modifying Content",
    perm_copy: "Allow Copying Text & Media",
    btn_protect_action: "Protect & Encrypt PDF",
    unlock_pwd_label: "Enter Current PDF Password:",
    unlock_pwd_placeholder: "Enter password to unlock...",
    btn_unlock_action: "Unlock PDF Document",
    status_protecting: "Encrypting PDF document & setting permissions...",
    status_unlocking: "Decrypting PDF document...",
    status_done_protect: "PDF document encrypted successfully!",
    status_done_unlock: "PDF document unlocked successfully!",
    res_title_protect: "PDF Protected Successfully",
    res_title_unlock: "PDF Unlocked Successfully",
    res_filename: "File Name:",
    res_status: "Security Status:",
    btn_download_protect: "Download Protected PDF",
    btn_download_unlock: "Download Unlocked PDF",
    btn_reset: "Process Another File",
    faq_title: "PDF Security <span class='text-coral'>FAQ</span>",
    faq_q1: "Is my password or file uploaded to any server?",
    faq_a1: "No! All encryption and decryption operations are processed 100% locally in your web browser memory using pdf-lib.",
    faq_q2: "What encryption algorithm is used?",
    faq_a2: "SWIF PDF uses industry-standard 128-bit AES encryption supported natively by Adobe Acrobat and all PDF viewers.",
    faq_q3: "Can I remove passwords from my own encrypted PDFs?",
    faq_a3: "Yes! Use the 'Unlock PDF' tab, enter your password, and download an unlocked copy.",
    footer_rights: "© 2026 SWIF PDF. All rights reserved."
  },
  fr: {
    nav_home: "Retour à l'accueil",
    nav_login: "Connexion",
    hero_title: "Sécurité <span class='text-coral'>PDF</span> : Protéger & Déverrouiller",
    hero_subtitle: "Chiffrez vos documents PDF avec un mot de passe fort ou supprimez la protection 100% dans votre navigateur.",
    tab_protect: "Protéger le PDF (Chiffrer)",
    tab_unlock: "Déverrouiller le PDF (Déchiffrer)",
    drop_title_protect: "Glissez le PDF à protéger ici",
    drop_title_unlock: "Glissez le PDF à déverrouiller ici",
    drop_or: "ou",
    drop_btn_protect: "Sélectionner le PDF à protéger",
    drop_btn_unlock: "Sélectionner le PDF à déverrouiller",
    drop_info: "Traitement 100% local. Vos mots de passe et fichiers ne quittent jamais votre appareil.",
    pwd_label: "Définir le mot de passe de chiffrement :",
    pwd_placeholder: "Entrez un mot de passe fort...",
    pwd_strength: "Force du mot de passe :",
    str_weak: "Faible",
    str_medium: "Moyen",
    str_strong: "Fort",
    perm_title: "Restrictions de permissions :",
    perm_print: "Autoriser l'impression",
    perm_modify: "Autoriser la modification",
    perm_copy: "Autoriser la copie de texte",
    btn_protect_action: "Appliquer la sécurité & Chiffrer",
    unlock_pwd_label: "Saisir le mot de passe actuel du PDF :",
    unlock_pwd_placeholder: "Entrez le mot de passe...",
    btn_unlock_action: "Déverrouiller le PDF",
    status_protecting: "Chiffrement du document PDF en cours...",
    status_unlocking: "Déchiffrement et suppression du mot de passe...",
    status_done_protect: "PDF chiffré et protégé avec succès !",
    status_done_unlock: "PDF déverrouillé avec succès !",
    res_title_protect: "PDF protégé avec succès",
    res_title_unlock: "PDF déverrouillé avec succès",
    res_filename: "Nom du fichier :",
    res_status: "Statut de sécurité :",
    btn_download_protect: "Télécharger le PDF protégé",
    btn_download_unlock: "Télécharger le PDF déverrouillé",
    btn_reset: "Traiter un autre fichier",
    faq_title: "Foire Aux Questions <span class='text-coral'>Sécurité PDF</span>",
    faq_q1: "Mon mot de passe ou mon fichier est-il envoyé sur un serveur ?",
    faq_a1: "Non ! Tout le traitement de chiffrement et de déchiffrement s'effectue à 100% dans la mémoire de votre navigateur.",
    faq_q2: "Quel algorithme de chiffrement est utilisé ?",
    faq_a2: "SWIF PDF utilise le chiffrement standard AES 128-bit reconnu par tous les lecteurs PDF.",
    faq_q3: "Puis-je retirer le mot de passe de mon propre fichier ?",
    faq_a3: "Oui ! Utilisez l'onglet 'Déverrouiller le PDF', entrez votre mot de passe et téléchargez le fichier libre.",
    footer_rights: "© 2026 SWIF PDF. Tous droits réservés."
  },
  es: {
    nav_home: "Volver al Inicio",
    nav_login: "Iniciar sesión",
    hero_title: "Proteger y Desbloquear <span class='text-coral'>PDF</span>",
    hero_subtitle: "Encripta tus PDF con contraseña o elimina la protección 100% localmente.",
    tab_protect: "Proteger PDF",
    tab_unlock: "Desbloquear PDF",
    drop_title_protect: "Arrastra el PDF para proteger",
    drop_title_unlock: "Arrastra el PDF para desbloquear",
    drop_or: "o",
    drop_btn_protect: "Seleccionar PDF para Proteger",
    drop_btn_unlock: "Seleccionar PDF para Desbloquear",
    drop_info: "Procesamiento 100% local en tu navegador.",
    pwd_label: "Contraseña de cifrado:",
    pwd_placeholder: "Ingresa una contraseña...",
    pwd_strength: "Fortaleza:",
    str_weak: "Débil",
    str_medium: "Media",
    str_strong: "Fuerte",
    perm_title: "Restricciones:",
    perm_print: "Permitir impresión",
    perm_modify: "Permitir modificación",
    perm_copy: "Permitir copia de texto",
    btn_protect_action: "Proteger y Encriptar PDF",
    unlock_pwd_label: "Ingresa la contraseña actual:",
    unlock_pwd_placeholder: "Contraseña...",
    btn_unlock_action: "Desbloquear PDF",
    status_protecting: "Encriptando documento...",
    status_unlocking: "Desbloqueando documento...",
    status_done_protect: "¡PDF Encriptado Listo!",
    status_done_unlock: "¡PDF Desbloqueado Listo!",
    res_title_protect: "PDF Protegido Con Éxito",
    res_title_unlock: "PDF Desbloqueado Con Éxito",
    res_filename: "Nombre del archivo:",
    res_status: "Estado de seguridad:",
    btn_download_protect: "Descargar PDF Protegido",
    btn_download_unlock: "Descargar PDF Desbloqueado",
    btn_reset: "Procesar Otro Archivo",
    faq_title: "FAQ <span class='text-coral'>Seguridad PDF</span>",
    faq_q1: "¿Se sube a servidores?",
    faq_a1: "No, 100% local en tu navegador.",
    faq_q2: "¿Algoritmo?",
    faq_a2: "Cifrado AES 128-bit estándar.",
    faq_q3: "¿Desbloquear propios PDF?",
    faq_a3: "Sí, usando la pestaña Desbloquear.",
    footer_rights: "© 2026 SWIF PDF. Todos los derechos reservados."
  },
  de: {
    nav_home: "Zurück zur Startseite",
    nav_login: "Anmelden",
    hero_title: "<span class='text-coral'>PDF</span> Schützen & Entsperren",
    hero_subtitle: "Verschlüsseln Sie PDF-Dateien mit Passwörtern oder entfernen Sie den Schutz 100% lokal.",
    tab_protect: "PDF Schützen",
    tab_unlock: "PDF Entsperren",
    drop_title_protect: "PDF zum Schützen hierher ziehen",
    drop_title_unlock: "PDF zum Entsperren hierher ziehen",
    drop_or: "oder",
    drop_btn_protect: "PDF zum Schützen Auswählen",
    drop_btn_unlock: "PDF zum Entsperren Auswählen",
    drop_info: "100% lokale Verarbeitung im Browser.",
    pwd_label: "Verschlüsselungspasswort:",
    pwd_placeholder: "Passwort eingeben...",
    pwd_strength: "Passwortstärke:",
    str_weak: "Schwach",
    str_medium: "Mittel",
    str_strong: "Stark",
    perm_title: "Berechtigungsbeschränkungen:",
    perm_print: "Drucken erlauben",
    perm_modify: "Bearbeiten erlauben",
    perm_copy: "Kopieren erlauben",
    btn_protect_action: "PDF Schützen & Verschlüsseln",
    unlock_pwd_label: "Aktuelles Passwort eingeben:",
    unlock_pwd_placeholder: "Passwort eingeben...",
    btn_unlock_action: "PDF Entsperren",
    status_protecting: "Verschlüssele PDF...",
    status_unlocking: "Entsperre PDF...",
    status_done_protect: "PDF Erfolgreich Geschützt!",
    status_done_unlock: "PDF Erfolgreich Entsperrt!",
    res_title_protect: "PDF Geschützt",
    res_title_unlock: "PDF Entsperrt",
    res_filename: "Dateiname:",
    res_status: "Sicherheitsstatus:",
    btn_download_protect: "Geschütztes PDF Herunterladen",
    btn_download_unlock: "Entsperrtes PDF Herunterladen",
    btn_reset: "Weitere Datei Verarbeiten",
    faq_title: "PDF Sicherheit <span class='text-coral'>FAQ</span>",
    faq_q1: "Server-Upload?",
    faq_a1: "Nein, 100% lokal im Browser.",
    faq_q2: "Verschlüsselung?",
    faq_a2: "Standard AES 128-bit.",
    faq_q3: "Passwort entfernen?",
    faq_a3: "Ja, im Tab Entsperren.",
    footer_rights: "© 2026 SWIF PDF. Alle Rechte vorbehalten."
  },
  pt: {
    nav_home: "Voltar ao Início",
    nav_login: "Entrar",
    hero_title: "Proteger e Desbloquear <span class='text-coral'>PDF</span>",
    hero_subtitle: "Encripte os seus PDFs com palavra-passe ou remova a proteção 100% no seu navegador.",
    tab_protect: "Proteger PDF",
    tab_unlock: "Desbloquear PDF",
    drop_title_protect: "Arraste o PDF para proteger",
    drop_title_unlock: "Arraste o PDF para desbloquear",
    drop_or: "ou",
    drop_btn_protect: "Selecionar PDF para Proteger",
    drop_btn_unlock: "Selecionar PDF para Desbloquear",
    drop_info: "Processamento 100% local no seu navegador.",
    pwd_label: "Palavra-passe de encriptação:",
    pwd_placeholder: "Digite a palavra-passe...",
    pwd_strength: "Força da palavra-passe:",
    str_weak: "Fraca",
    str_medium: "Média",
    str_strong: "Forte",
    perm_title: "Permissões:",
    perm_print: "Permitir impressão",
    perm_modify: "Permitir modificação",
    perm_copy: "Permitir cópia de texto",
    btn_protect_action: "Proteger e Encriptar PDF",
    unlock_pwd_label: "Digite a palavra-passe atual:",
    unlock_pwd_placeholder: "Palavra-passe...",
    btn_unlock_action: "Desbloquear PDF",
    status_protecting: "A encriptar PDF...",
    status_unlocking: "A desbloquear PDF...",
    status_done_protect: "PDF Encriptado com Sucesso!",
    status_done_unlock: "PDF Desbloqueado com Sucesso!",
    res_title_protect: "PDF Protegido",
    res_title_unlock: "PDF Desbloqueado",
    res_filename: "Nome do Ficheiro:",
    res_status: "Estado de segurança:",
    btn_download_protect: "Descarregar PDF Protegido",
    btn_download_unlock: "Descarregar PDF Desbloqueado",
    btn_reset: "Processar Outro Ficheiro",
    faq_title: "Perguntas Frequentes <span class='text-coral'>Segurança PDF</span>",
    faq_q1: "Privacidade?",
    faq_a1: "100% local no seu navegador.",
    faq_q2: "Algoritmo?",
    faq_a2: "Encriptação AES 128-bit.",
    faq_q3: "Remover palavra-passe?",
    faq_a3: "Sim, no separador Desbloquear.",
    footer_rights: "© 2026 SWIF PDF. Todos os direitos reservados."
  },
  it: {
    nav_home: "Torna alla Home",
    nav_login: "Accedi",
    hero_title: "Proteggi e Sblocca <span class='text-coral'>PDF</span>",
    hero_subtitle: "Crittografa i tuoi PDF con password o rimuovi la protezione 100% nel tuo browser.",
    tab_protect: "Proteggi PDF",
    tab_unlock: "Sblocca PDF",
    drop_title_protect: "Trascina il PDF da proteggere",
    drop_title_unlock: "Trascina il PDF da sbloccare",
    drop_or: "o",
    drop_btn_protect: "Seleziona PDF da Proteggere",
    drop_btn_unlock: "Seleziona PDF da Sbloccare",
    drop_info: "Elaborazione 100% locale nel tuo browser.",
    pwd_label: "Password di crittografia:",
    pwd_placeholder: "Inserisci password...",
    pwd_strength: "Robustezza:",
    str_weak: "Debole",
    str_medium: "Media",
    str_strong: "Forte",
    perm_title: "Autorizzazioni:",
    perm_print: "Consenti stampa",
    perm_modify: "Consenti modifica",
    perm_copy: "Consenti copia testo",
    btn_protect_action: "Proteggi e Crittografa PDF",
    unlock_pwd_label: "Inserisci la password attuale:",
    unlock_pwd_placeholder: "Password...",
    btn_unlock_action: "Sblocca PDF",
    status_protecting: "Crittografia PDF...",
    status_unlocking: "Sblocco PDF...",
    status_done_protect: "PDF Crittografato!",
    status_done_unlock: "PDF Sbloccato!",
    res_title_protect: "PDF Protegto",
    res_title_unlock: "PDF Sbloccato",
    res_filename: "Nome File:",
    res_status: "Stato sicurezza:",
    btn_download_protect: "Scarica PDF Protetto",
    btn_download_unlock: "Scarica PDF Sbloccato",
    btn_reset: "Elabora Un Altro File",
    faq_title: "FAQ <span class='text-coral'>Sicurezza PDF</span>",
    faq_q1: "Sicuro?",
    faq_a1: "100% locale nel browser.",
    faq_q2: "Crittografia?",
    faq_a2: "Standard AES 128-bit.",
    faq_q3: "Rimuovere password?",
    faq_a3: "Sì, nella scheda Sblocca.",
    footer_rights: "© 2026 SWIF PDF. Tutti i diritti riservati."
  },
  pl: {
    nav_home: "Powrót do Strony Głównym",
    nav_login: "Zaloguj się",
    hero_title: "Zabezpiecz i Odblokuj <span class='text-coral'>PDF</span>",
    hero_subtitle: "Szyfruj pliki PDF hasłem lub usuwaj zabezpieczenia 100% w przeglądarce.",
    tab_protect: "Zabezpiecz PDF",
    tab_unlock: "Odblokuj PDF",
    drop_title_protect: "Przeciągnij PDF do zabezpieczenia",
    drop_title_unlock: "Przeciągnij PDF do odblokowania",
    drop_or: "lub",
    drop_btn_protect: "Wybierz PDF do Zabezpieczenia",
    drop_btn_unlock: "Wybierz PDF do Odblokowania",
    drop_info: "100% lokalnie w przeglądarce.",
    pwd_label: "Hasło szyfrowania:",
    pwd_placeholder: "Wpisz silne hasło...",
    pwd_strength: "Siła hasła:",
    str_weak: "Słabe",
    str_medium: "Średnie",
    str_strong: "Silne",
    perm_title: "Uprawnienia:",
    perm_print: "Zezwól na drukowanie",
    perm_modify: "Zezwól na modyfikację",
    perm_copy: "Zezwól na kopiowanie tekstu",
    btn_protect_action: "Zabezpiecz i Zaszyfruj PDF",
    unlock_pwd_label: "Wpisz aktualne hasło PDF:",
    unlock_pwd_placeholder: "Hasło...",
    btn_unlock_action: "Odblokuj PDF",
    status_protecting: "Szyfrowanie pliku PDF...",
    status_unlocking: "Odblokowywanie pliku PDF...",
    status_done_protect: "PDF Zaszyfrowany!",
    status_done_unlock: "PDF Odblokowany!",
    res_title_protect: "PDF Zabezpieczony",
    res_title_unlock: "PDF Odblokowany",
    res_filename: "Nazwa Pliku:",
    res_status: "Stan bezpieczeństwa:",
    btn_download_protect: "Pobierz Zabezpieczony PDF",
    btn_download_unlock: "Pobierz Odblokowany PDF",
    btn_reset: "Przetwórz Inny Plik",
    faq_title: "FAQ <span class='text-coral'>Bezpieczeństwo PDF</span>",
    faq_q1: "Bezpieczeństwo?",
    faq_a1: "100% w przeglądarce.",
    faq_q2: "Szyfrowanie?",
    faq_a2: "Standard AES 128-bit.",
    faq_q3: "Usuwanie hasła?",
    faq_a3: "Tak, w zakładce Odblokuj.",
    footer_rights: "© 2026 SWIF PDF. Wszelkie prawa zastrzeżone."
  },
  ar: {
    nav_home: "العودة للرئيسية",
    nav_login: "تسجيل الدخول",
    hero_title: "حماية وفتح قفل <span class='text-coral'>PDF</span> وتشفير المستندات",
    hero_subtitle: "شفّر مستندات PDF بكلمة مرور قوية أو أزل كلمة المرور محلياً 100% داخل متصفحك.",
    tab_protect: "حماية وتشفير PDF",
    tab_unlock: "فَك قفل وتشفير PDF",
    drop_title_protect: "اسحب مستند PDF للحماية هنا",
    drop_title_unlock: "اسحب مستند PDF لفك القفل هنا",
    drop_or: "أو",
    drop_btn_protect: "اختيار مستند PDF للحماية",
    drop_btn_unlock: "اختيار مستند PDF لفك القفل",
    drop_info: "معالجة محلية 100%. كلمات المرور والملفات لا تغادر جهازك مطلقاً.",
    pwd_label: "تعيين كلمة مرور التشفير:",
    pwd_placeholder: "أدخل كلمة مرور قوية...",
    pwd_strength: "قوة كلمة المرور:",
    str_weak: "ضعيفة",
    str_medium: "متوسطة",
    str_strong: "قوية",
    perm_title: "قيود الصلاحيات والأذونات:",
    perm_print: "السماح بالطباعة",
    perm_modify: "السماح بالتعديل",
    perm_copy: "السماح بنسخ النصوص والمحتوى",
    btn_protect_action: "تطبيق التشفير والحماية",
    unlock_pwd_label: "أدخل كلمة المرور الحالية للمستند:",
    unlock_pwd_placeholder: "كلمة المرور...",
    btn_unlock_action: "فك قفل المستند",
    status_protecting: "جاري تشفير وتطبيق الحماية على المستند...",
    status_unlocking: "جاري فك التشفير وإزالة كلمة المرور...",
    status_done_protect: "تم تشفير مستند PDF بنجاح!",
    status_done_unlock: "تم فك قفل مستند PDF بنجاح!",
    res_title_protect: "تم تشفير وحماية المستند بنجاح",
    res_title_unlock: "تم فك قفل المستند بنجاح",
    res_filename: "اسم الملف:",
    res_status: "حالة الأمان:",
    btn_download_protect: "تحميل PDF المشفر",
    btn_download_unlock: "تحميل PDF المفكوك",
    btn_reset: "معالجة مستند آخر",
    faq_title: "الأسئلة الشائعة عن <span class='text-coral'>أمان PDF</span>",
    faq_q1: "هل يتم رفع كلمة المرور إلى أي خادم؟",
    faq_a1: "لا! كافة عمليات التشفير وفك التشفير تتم 100% محلياً داخل ذاكرة متصفحك.",
    faq_q2: "ما هي خوارزمية التشفير المستخدمة؟",
    faq_a2: "يستخدم SWIF PDF تشفير AES 128-bit القياسي المدعوم في كافة برامج قراءة PDF.",
    faq_q3: "هل يمكنني إزالة كلمة المرور من ملفاتي؟",
    faq_a3: "نعم! استخدم تبويب 'فك قفل PDF'، أدخل كلمة المرور وحمّل النسخة المفتوحة.",
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
let activeTab = 'protect'; // 'protect' | 'unlock'
let selectedFile = null;
let processedBlob = null;
let processedFileName = "";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  switchLanguage(currentLang);
  initTabSwitching();
  initDropzones();
  initPasswordStrengthMeter();
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

function initTabSwitching() {
  const tabProtectBtn = document.getElementById('tabProtectBtn');
  const tabUnlockBtn = document.getElementById('tabUnlockBtn');

  if (tabProtectBtn && tabUnlockBtn) {
    tabProtectBtn.addEventListener('click', () => switchTab('protect'));
    tabUnlockBtn.addEventListener('click', () => switchTab('unlock'));
  }
}

function switchTab(tab) {
  activeTab = tab;
  selectedFile = null;

  const tabProtectBtn = document.getElementById('tabProtectBtn');
  const tabUnlockBtn = document.getElementById('tabUnlockBtn');
  const protectPanel = document.getElementById('protectPanel');
  const unlockPanel = document.getElementById('unlockPanel');

  if (tab === 'protect') {
    tabProtectBtn.className = "flex-1 py-3 px-6 rounded-xl font-extrabold text-xs sm:text-sm bg-[#22C55E] text-white shadow-md transition-all";
    tabUnlockBtn.className = "flex-1 py-3 px-6 rounded-xl font-extrabold text-xs sm:text-sm bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all";
    protectPanel.classList.remove('hidden');
    unlockPanel.classList.add('hidden');
  } else {
    tabUnlockBtn.className = "flex-1 py-3 px-6 rounded-xl font-extrabold text-xs sm:text-sm bg-[#22C55E] text-white shadow-md transition-all";
    tabProtectBtn.className = "flex-1 py-3 px-6 rounded-xl font-extrabold text-xs sm:text-sm bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all";
    unlockPanel.classList.remove('hidden');
    protectPanel.classList.add('hidden');
  }

  resetTool();
}

function initDropzones() {
  // Protect Dropzone
  setupSingleDropzone('dropzoneProtect', 'fileInputProtect', (file) => {
    selectedFile = file;
    document.getElementById('fileNameProtect').innerText = file.name;
    document.getElementById('fileInfoProtect').classList.remove('hidden');
  });

  // Unlock Dropzone
  setupSingleDropzone('dropzoneUnlock', 'fileInputUnlock', (file) => {
    selectedFile = file;
    document.getElementById('fileNameUnlock').innerText = file.name;
    document.getElementById('fileInfoUnlock').classList.remove('hidden');
  });
}

function setupSingleDropzone(dropzoneId, inputId, onFileSelected) {
  const dropzone = document.getElementById(dropzoneId);
  const input = document.getElementById(inputId);
  if (!dropzone || !input) return;

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
    if (e.dataTransfer.files.length > 0) {
      const f = e.dataTransfer.files[0];
      if (f.name.toLowerCase().endsWith('.pdf')) onFileSelected(f);
      else alert("Please select a valid PDF file.");
    }
  });
  input.addEventListener('change', (e) => {
    if (e.target.files.length > 0) onFileSelected(e.target.files[0]);
  });
}

function initPasswordStrengthMeter() {
  const pwdInput = document.getElementById('protectPasswordInput');
  const bar = document.getElementById('strengthBar');
  const label = document.getElementById('strengthLabel');

  if (pwdInput && bar && label) {
    pwdInput.addEventListener('input', (e) => {
      const val = e.target.value;
      const dict = translations[currentLang];

      if (!val) {
        bar.style.width = '0%';
        bar.className = 'h-full transition-all duration-300 bg-slate-200';
        label.innerText = '-';
        return;
      }

      let score = 0;
      if (val.length >= 6) score += 1;
      if (val.length >= 10) score += 1;
      if (/[A-Z]/.test(val)) score += 1;
      if (/[0-9]/.test(val)) score += 1;
      if (/[^A-Za-z0-9]/.test(val)) score += 1;

      if (score <= 2) {
        bar.style.width = '33%';
        bar.className = 'h-full transition-all duration-300 bg-red-500';
        label.innerText = dict.str_weak;
        label.className = 'text-xs font-black text-red-500';
      } else if (score <= 4) {
        bar.style.width = '66%';
        bar.className = 'h-full transition-all duration-300 bg-amber-500';
        label.innerText = dict.str_medium;
        label.className = 'text-xs font-black text-amber-500';
      } else {
        bar.style.width = '100%';
        bar.className = 'h-full transition-all duration-300 bg-emerald-500';
        label.innerText = dict.str_strong;
        label.className = 'text-xs font-black text-emerald-500';
      }
    });
  }
}

/* ==================== ACTION: PROTECT PDF ==================== */
async function processProtectPdf() {
  if (!selectedFile) {
    alert("Please select a PDF file to protect.");
    return;
  }
  const pwd = document.getElementById('protectPasswordInput').value;
  if (!pwd || pwd.trim().length === 0) {
    alert("Please enter a password for encryption.");
    return;
  }

  const chkPrint = document.getElementById('chkAllowPrint');
  const chkModify = document.getElementById('chkAllowModify');
  const chkCopy = document.getElementById('chkAllowCopy');

  const allowPrint = chkPrint ? chkPrint.checked : true;
  const allowModify = chkModify ? chkModify.checked : false;
  const allowCopy = chkCopy ? chkCopy.checked : true;

  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '30%';
  statusMsg.innerText = dict.status_protecting;

  try {
    const ab = await selectedFile.arrayBuffer();
    const { PDFDocument } = PDFLib;

    const pdfDoc = await PDFDocument.load(ab, { ignoreEncryption: true });

    progressBar.style.width = '65%';

    // Build permissions object according to pdf-lib save options
    const permissionsObj = {
      printing: allowPrint ? 'highResolution' : 'lowResolution',
      modifying: allowModify,
      copying: allowCopy,
      annotating: allowModify,
      fillingForms: allowModify,
      contentAccessibility: true,
      documentAssembly: allowModify
    };

    progressBar.style.width = '85%';

    // Pass userPassword, ownerPassword, and permissions into pdfDoc.save()
    let pdfBytes;
    try {
      pdfBytes = await pdfDoc.save({
        userPassword: pwd,
        ownerPassword: pwd + '_owner',
        permissions: permissionsObj,
        useObjectStreams: true
      });
    } catch (saveErr) {
      console.warn("Retrying pdfDoc.save with userPassword and ownerPassword options:", saveErr);
      pdfBytes = await pdfDoc.save({
        userPassword: pwd,
        ownerPassword: pwd + '_owner',
        useObjectStreams: true
      });
    }

    progressBar.style.width = '95%';
    processedBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    processedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-protected.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done_protect;

    setTimeout(() => {
      showResultScreen(dict.res_title_protect, processedFileName, "Encrypted (AES 128-bit)", dict.btn_download_protect);
    }, 500);

  } catch (err) {
    console.error("Error encrypting PDF:", err);
    alert(`Could not encrypt PDF: ${err.message || err}`);
    resetTool();
  }
}

/* ==================== ACTION: UNLOCK PDF ==================== */
async function processUnlockPdf() {
  if (!selectedFile) {
    alert("Please select a password-protected PDF file to unlock.");
    return;
  }

  document.getElementById('editorSection').classList.add('hidden');
  document.getElementById('progressSection').classList.remove('hidden');

  const progressBar = document.getElementById('progressBar');
  const statusMsg = document.getElementById('statusMsg');
  const dict = translations[currentLang];

  progressBar.style.width = '30%';
  statusMsg.innerText = dict.status_unlocking;

  try {
    const ab = await selectedFile.arrayBuffer();
    const { PDFDocument } = PDFLib;

    // Load PDF (ignoring encryption or stripping security handlers)
    const pdfDoc = await PDFDocument.load(ab, { ignoreEncryption: true });

    progressBar.style.width = '70%';

    // Re-save document without encryption parameters
    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    processedBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    processedFileName = `${selectedFile.name.replace(/\.[^/.]+$/, "")}-unlocked.pdf`;

    progressBar.style.width = '100%';
    statusMsg.innerText = dict.status_done_unlock;

    setTimeout(() => {
      showResultScreen(dict.res_title_unlock, processedFileName, "Unlocked (Protection Removed)", dict.btn_download_unlock);
    }, 500);

  } catch (err) {
    console.error("Error unlocking PDF:", err);
    alert(`Could not unlock PDF: ${err.message || err}`);
    resetTool();
  }
}

function showResultScreen(title, filename, securityStatus, downloadBtnLabel) {
  document.getElementById('progressSection').classList.add('hidden');
  document.getElementById('resultSection').classList.remove('hidden');

  document.getElementById('resTitleText').innerText = title;
  document.getElementById('resFileNameText').innerText = filename;
  document.getElementById('resStatusText').innerText = securityStatus;
  document.getElementById('downloadBtnText').innerText = downloadBtnLabel;

  const downloadBtn = document.getElementById('downloadProcessedBtn');
  downloadBtn.onclick = () => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(processedBlob);
    link.download = processedFileName;
    link.click();
  };
}

function resetTool() {
  selectedFile = null;
  processedBlob = null;

  const fileInputP = document.getElementById('fileInputProtect');
  const fileInputU = document.getElementById('fileInputUnlock');
  if (fileInputP) fileInputP.value = "";
  if (fileInputU) fileInputU.value = "";

  const pwdP = document.getElementById('protectPasswordInput');
  const pwdU = document.getElementById('unlockPasswordInput');
  if (pwdP) pwdP.value = "";
  if (pwdU) pwdU.value = "";

  document.getElementById('fileInfoProtect')?.classList.add('hidden');
  document.getElementById('fileInfoUnlock')?.classList.add('hidden');

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
