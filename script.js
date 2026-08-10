document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', !isOpen);
      // Toggle burger menu icon
      menuToggle.innerHTML = isOpen 
        ? `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`
        : `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
      });
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question-button');
    const answer = item.querySelector('.faq-answer');

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 4. Assembly Guide Step Selector
  const stepCards = document.querySelectorAll('.step-card');
  const previewContainer = document.querySelector('.assembly-graphic-container');
  const previewCaption = document.querySelector('.assembly-preview-caption');

  // Assembly steps SVGs markup mapping
  const stepGraphics = {
    1: `
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" rx="16" fill="#F1EEE9" />
        <!-- Flat Folded Cajon panel profile -->
        <rect x="70" y="80" width="160" height="40" rx="4" fill="#D9863B" stroke="#2D3130" stroke-width="2"/>
        <line x1="70" y1="93" x2="230" y2="93" stroke="#2D3130" stroke-width="2" stroke-dasharray="4 4" />
        <line x1="70" y1="107" x2="230" y2="107" stroke="#2D3130" stroke-width="2" stroke-dasharray="4 4" />
        <!-- Arrows showing slide/unfold action -->
        <path d="M150 50 L150 25 M150 25 L142 33 M150 25 L158 33" stroke="#C2593F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M150 150 L150 175 M150 175 L142 167 M150 175 L158 167" stroke="#C2593F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="150" y="14" fill="#2D3130" font-family="Plus Jakarta Sans" font-weight="700" font-size="11" text-anchor="middle">UNZIP CARRY BAG & LAY FLAT</text>
      </svg>
    `,
    2: `
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" rx="16" fill="#F1EEE9" />
        <!-- Hinges unfold representation -->
        <rect x="110" y="60" width="80" height="80" rx="4" fill="#E5E0D8" stroke="#2D3130" stroke-width="2"/>
        <line x1="150" y1="60" x2="150" y2="140" stroke="#2D3130" stroke-width="2" />
        <!-- Arrow arc showing fold out -->
        <path d="M130 110 A 20 20 0 0 1 170 110" stroke="#C2593F" stroke-width="2" stroke-linecap="round" fill="none"/>
        <polygon points="170,110 167,105 174,107" fill="#C2593F"/>
        <!-- Brass hardware / hinge highlights -->
        <circle cx="150" cy="75" r="3" fill="#D9863B" stroke="#2D3130" stroke-width="1"/>
        <circle cx="150" cy="125" r="3" fill="#D9863B" stroke="#2D3130" stroke-width="1"/>
        <text x="150" y="24" fill="#2D3130" font-family="Plus Jakarta Sans" font-weight="700" font-size="11" text-anchor="middle">SWING SIDES OUT 90 DEGREES</text>
      </svg>
    `,
    3: `
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" rx="16" fill="#F1EEE9" />
        <!-- Front and back face snaps -->
        <rect x="90" y="50" width="120" height="100" rx="6" fill="#FAF8F5" stroke="#2D3130" stroke-width="2"/>
        <rect x="90" y="50" width="120" height="15" rx="2" fill="#D9863B" stroke="#2D3130" stroke-width="2"/>
        <!-- Tensioning thumb screw/latch details -->
        <circle cx="115" cy="110" r="8" fill="#5E7265" stroke="#2D3130" stroke-width="2"/>
        <circle cx="185" cy="110" r="8" fill="#5E7265" stroke="#2D3130" stroke-width="2"/>
        <line x1="115" y1="102" x2="115" y2="118" stroke="#FAF8F5" stroke-width="2"/>
        <line x1="185" y1="102" x2="185" y2="118" stroke="#FAF8F5" stroke-width="2"/>
        <text x="150" y="28" fill="#2D3130" font-family="Plus Jakarta Sans" font-weight="700" font-size="11" text-anchor="middle">ENGAGE TENSION FIXINGS & TIGHTEN</text>
      </svg>
    `,
    4: `
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" rx="16" fill="#EBF3EF" />
        <!-- Fully assembled playing cajon isometric representation -->
        <path d="M150 40 L210 65 L150 90 L90 65 Z" fill="#D9863B" stroke="#2D3130" stroke-width="2" stroke-linejoin="round"/>
        <path d="M90 65 L150 90 L150 160 L90 135 Z" fill="#FAF8F5" stroke="#2D3130" stroke-width="2" stroke-linejoin="round"/>
        <path d="M150 90 L210 65 L210 135 L150 160 Z" fill="#C2593F" stroke="#2D3130" stroke-width="2" stroke-linejoin="round"/>
        <!-- Sound hole on front tapa (symbolic) -->
        <circle cx="120" cy="100" r="12" fill="#2D3130"/>
        <!-- Snare adjustment dial visual -->
        <circle cx="180" cy="95" r="4" fill="#2D3130"/>
        <!-- Happy checkmark indicating full safety/assembly -->
        <circle cx="250" cy="40" r="16" fill="#5E7265"/>
        <path d="M243 40 L248 45 L257 34" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="150" y="185" fill="#2D3130" font-family="Plus Jakarta Sans" font-weight="700" font-size="11" text-anchor="middle">READY TO SIT & PLAY SECURELY</text>
      </svg>
    `
  };

  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      const stepIndex = card.dataset.step;
      
      // Update active state class
      stepCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Update graphic preview inside stepGraphics
      if (stepGraphics[stepIndex]) {
        // Fade out
        previewContainer.style.opacity = 0;
        previewContainer.style.transform = 'scale(0.96)';
        
        setTimeout(() => {
          previewContainer.innerHTML = stepGraphics[stepIndex];
          previewCaption.textContent = card.querySelector('h3').textContent;
          // Fade back in
          previewContainer.style.opacity = 1;
          previewContainer.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });

  // Initialize preview with first step on load
  if (stepCards.length > 0) {
    stepCards[0].classList.add('active');
    previewContainer.innerHTML = stepGraphics[1];
    previewCaption.textContent = stepCards[0].querySelector('h3').textContent;
  }
});
