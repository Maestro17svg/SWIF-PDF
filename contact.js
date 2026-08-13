// SWIF PDF - Contact Form & Robust FAQ Accordion Script

function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  if (!name || !email || !message) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  // Show Toast Success
  const toast = document.getElementById('contactToast');
  if (toast) {
    toast.classList.remove('hidden');
    toast.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Reset form
  document.getElementById('contactForm').reset();

  setTimeout(() => {
    if (toast) {
      toast.classList.add('hidden');
    }
  }, 8000);
}

function initFaqAccordions() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      
      const faqItem = header.closest('.faq-item');
      if (!faqItem) return;

      const content = faqItem.querySelector('.faq-content');
      const icon = faqItem.querySelector('.faq-icon');

      if (content) {
        const isHidden = content.classList.contains('hidden');
        
        // Optional: Close other open FAQ items for a clean accordion effect
        document.querySelectorAll('.faq-content').forEach(otherContent => {
          if (otherContent !== content) {
            otherContent.classList.add('hidden');
          }
        });
        document.querySelectorAll('.faq-icon').forEach(otherIcon => {
          if (otherIcon !== icon) {
            otherIcon.classList.remove('rotate-180');
          }
        });

        // Toggle target content
        if (isHidden) {
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        } else {
          content.classList.add('hidden');
          if (icon) icon.classList.remove('rotate-180');
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordions();
});
