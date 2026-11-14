// Lucide SVG Fallback in case of offline preview
const svgIcons = {
  'menu': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  'x': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  'star': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  'arrow-up-right': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
  'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  'clock': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'award': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  'info': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  'image': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  'calendar': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
  'message-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
  'phone': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  'phone-call': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>',
  'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
  'navigation': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',
  'external-link': '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  'check': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  'coffee': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>',
  'copy': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  'calculator': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
  'help-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  'cookie': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>',
  'heart': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>'
};

function renderFallbackIcons() {
  document.querySelectorAll('[data-lucide]').forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    if (svgIcons[iconName]) {
      el.outerHTML = svgIcons[iconName];
    }
  });
}

if (typeof lucide === 'undefined') {
  renderFallbackIcons();
}

// OSNOVA Manicure Studio - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll State (Frosted Glass on scroll, transparent at top) & Scroll Progress Indicator
  const mainHeader = document.getElementById('mainHeader');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const scrollProgressContainer = document.getElementById('scrollProgressContainer');
  let currentProgress = 0;
  let targetProgress = 0;
  let isTicking = false;

  function updateHeaderState(scrollTop) {
    if (scrollTop > 8) {
      if (mainHeader && !mainHeader.classList.contains('header-scrolled')) {
        mainHeader.classList.add('header-scrolled');
      }
      if (scrollProgressContainer) {
        scrollProgressContainer.classList.remove('opacity-0');
        scrollProgressContainer.classList.add('opacity-100');
      }
    } else {
      if (mainHeader && mainHeader.classList.contains('header-scrolled')) {
        mainHeader.classList.remove('header-scrolled');
      }
      if (scrollProgressContainer) {
        scrollProgressContainer.classList.add('opacity-0');
        scrollProgressContainer.classList.remove('opacity-100');
      }
    }
  }

  function onScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    updateHeaderState(scrollTop);

    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    targetProgress = docHeight > 0 ? scrollTop / docHeight : 0;
    targetProgress = Math.min(1, Math.max(0, targetProgress));

    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(renderProgress);
    }
  }

  function renderProgress() {
    const diff = targetProgress - currentProgress;
    if (Math.abs(diff) < 0.0005) {
      currentProgress = targetProgress;
      isTicking = false;
    } else {
      currentProgress += diff * 0.14; // Ultra-smooth fluid spring glide
      requestAnimationFrame(renderProgress);
    }
    if (scrollProgressBar) {
      scrollProgressBar.style.transform = `scaleX(${currentProgress})`;
    }
  }

  window.addEventListener('scroll', onScrollProgress, { passive: true });
  onScrollProgress();

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    mobileBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.add('translate-x-full');
    mobileBackdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // 3. Service Accordion Toggle (Clean, no overlapping)
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const panel = item.querySelector('.accordion-panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains('active');

      // Close other accordions in the same category group
      const parentContainer = item.closest('.services-category-group');
      if (parentContainer) {
        parentContainer.querySelectorAll('.accordion-item.active').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('active');
            const openPanel = openItem.querySelector('.accordion-panel');
            if (openPanel) {
              openPanel.style.maxHeight = '0px';
              openPanel.style.opacity = '0';
              openPanel.style.marginTop = '0px';
            }
            const openTrigger = openItem.querySelector('.accordion-trigger');
            if (openTrigger) openTrigger.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (isOpen) {
        item.classList.remove('active');
        panel.style.maxHeight = '0px';
        panel.style.opacity = '0';
        panel.style.marginTop = '0px';
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        panel.style.marginTop = '12px';
        panel.style.maxHeight = (panel.scrollHeight + 30) + 'px';
        panel.style.opacity = '1';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 4. Service Category Tabs (Soft Light Pill Style, No Black!)
  const categoryTabs = document.querySelectorAll('.service-tab-btn');
  const categoryGroups = document.querySelectorAll('.services-category-group');

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetCategory = tab.getAttribute('data-category');

      categoryTabs.forEach(t => {
        t.classList.remove('active-light-pill');
        t.classList.add('text-[#75675E]');
      });
      tab.classList.add('active-light-pill');
      tab.classList.remove('text-[#75675E]');

      categoryGroups.forEach(group => {
        if (targetCategory === 'all' || group.getAttribute('data-category') === targetCategory) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // 5. Booking Modal
  const bookingModal = document.getElementById('bookingModal');
  const openModalBtns = document.querySelectorAll('[data-open-booking]');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalServiceSelect = document.getElementById('modalServiceSelect');
  const bookingForm = document.getElementById('bookingForm');
  const toastSuccess = document.getElementById('toastSuccess');

  function openBookingModal(preselectedService = '') {
    if (!bookingModal) return;
    if (preselectedService && modalServiceSelect) {
      modalServiceSelect.value = preselectedService;
    }
    bookingModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || '';
      openBookingModal(serviceName);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeBookingModal);

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeBookingModal();
      }
    });
  }

  // Handle Booking Form Submit
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'Гость';
      const phone = document.getElementById('clientPhone')?.value || '';
      const service = modalServiceSelect?.value || 'Консультация';

      closeBookingModal();

      // Show toast
      if (toastSuccess) {
        const toastMsg = toastSuccess.querySelector('.toast-msg');
        if (toastMsg) {
          toastMsg.textContent = `Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone} для подтверждения записи на «${service}».`;
        }
        toastSuccess.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
        setTimeout(() => {
          toastSuccess.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
        }, 5000);
      }
      bookingForm.reset();
    });
  }

  // Global Keyboard Navigation (ESC to close modals)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeMobileMenu();
    }
  });

  // 6. Mobile Floating Booking Bar Visibility
  const mobileFloatingBar = document.getElementById('mobileFloatingBar');
  const heroSection = document.getElementById('hero');

  if (mobileFloatingBar && heroSection) {
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 100) {
        mobileFloatingBar.classList.remove('translate-y-28', 'opacity-0', 'pointer-events-none');
      } else {
        mobileFloatingBar.classList.add('translate-y-28', 'opacity-0', 'pointer-events-none');
      }
    }, { passive: true });
  }

  // 7. Navbar Active State on Scroll (Soft Light Pill Style, No Black!)
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active-light-pill');
      link.classList.add('text-[#4A3E39]');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active-light-pill');
        link.classList.remove('text-[#4A3E39]');
      }
    });
  }, { passive: true });

  // 8. Quick Copy to Clipboard (Phone & Address) with Toast Feedback
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-copy-label') || 'Данные';

      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          if (toastSuccess) {
            const toastMsg = toastSuccess.querySelector('.toast-msg');
            if (toastMsg) {
              toastMsg.textContent = `${label} скопирован в буфер обмена: ${textToCopy}`;
            }
            toastSuccess.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
            setTimeout(() => {
              toastSuccess.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
            }, 4000);
          }
        });
      }
    });
  });

  // 9. Cookie Consent Banner (Luxury floating card with localStorage memory)
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAcceptAllBtn = document.getElementById('cookieAcceptAllBtn');
  const cookieEssentialOnlyBtn = document.getElementById('cookieEssentialOnlyBtn');
  const cookieCloseBtn = document.getElementById('cookieCloseBtn');

  function hideCookieBanner() {
    if (cookieBanner) {
      cookieBanner.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
      cookieBanner.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
    }
  }

  function acceptCookies() {
    try {
      localStorage.setItem('osnova_cookie_consent', 'accepted');
    } catch (e) {}
    hideCookieBanner();
  }

  if (cookieAcceptAllBtn) cookieAcceptAllBtn.addEventListener('click', acceptCookies);
  if (cookieEssentialOnlyBtn) cookieEssentialOnlyBtn.addEventListener('click', acceptCookies);
  if (cookieCloseBtn) cookieCloseBtn.addEventListener('click', hideCookieBanner);

  // Show banner smoothly on initial page load if not accepted yet
  try {
    const isConsentGiven = localStorage.getItem('osnova_cookie_consent');
    if (!isConsentGiven && cookieBanner) {
      setTimeout(() => {
        cookieBanner.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
        cookieBanner.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      }, 900);
    }
  } catch (e) {
    if (cookieBanner) {
      setTimeout(() => {
        cookieBanner.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
        cookieBanner.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      }, 900);
    }
  }

  // 10. Legal Documents Modal with Tab Switching
  const legalModal = document.getElementById('legalModal');
  const closeLegalModalBtn = document.getElementById('closeLegalModalBtn');
  const closeLegalModalBtnBottom = document.getElementById('closeLegalModalBtnBottom');
  const openLegalButtons = document.querySelectorAll('[data-open-legal]');
  const legalTabButtons = document.querySelectorAll('[data-legal-tab]');
  const legalTabContents = {
    privacy: document.getElementById('legalTabPrivacy'),
    terms: document.getElementById('legalTabTerms'),
    consent: document.getElementById('legalTabConsent'),
    guarantee: document.getElementById('legalTabGuarantee')
  };

  function switchLegalTab(tabName) {
    legalTabButtons.forEach(btn => {
      if (btn.getAttribute('data-legal-tab') === tabName) {
        btn.classList.add('active');
        btn.classList.remove('text-[#75675E]');
      } else {
        btn.classList.remove('active');
        btn.classList.add('text-[#75675E]');
      }
    });

    Object.keys(legalTabContents).forEach(key => {
      const el = legalTabContents[key];
      if (el) {
        if (key === tabName) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      }
    });
  }

  function openLegalModal(targetTab = 'privacy') {
    switchLegalTab(targetTab);
    if (legalModal) {
      legalModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLegalModal() {
    if (legalModal) {
      legalModal.classList.remove('open');
      const bookingModal = document.getElementById('bookingModal');
      if (!bookingModal || !bookingModal.classList.contains('open')) {
        document.body.style.overflow = '';
      }
    }
  }

  openLegalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-open-legal') || 'privacy';
      openLegalModal(tab);
    });
  });

  legalTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-legal-tab');
      if (tab) switchLegalTab(tab);
    });
  });

  if (closeLegalModalBtn) closeLegalModalBtn.addEventListener('click', closeLegalModal);
  if (closeLegalModalBtnBottom) closeLegalModalBtnBottom.addEventListener('click', closeLegalModal);
  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) closeLegalModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (legalModal && legalModal.classList.contains('open')) {
        closeLegalModal();
      }
    }
  });
});
