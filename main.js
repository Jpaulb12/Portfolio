/* ==========================================================================
   PORTFOLIO INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Navigation & Scroll Highlighting (Intersection Observer) ---
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the primary viewport window
    threshold: 0
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // --- Header Sticky Visual Transition ---
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '0.5rem 0';
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.padding = '1rem 0';
      header.style.boxShadow = 'none';
    }
  });

  // --- Modal Case Study Logic ---
  const modal = document.getElementById('case-study-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');
  const projectCards = document.querySelectorAll('.project-card');
  const scrollArea = document.querySelector('.modal-scroll-area');
  let lastActiveElement = null; // Store trigger element to restore keyboard focus
  
  // Modal Data Elements
  const mImg = document.getElementById('modal-project-img');
  const mTitle = document.getElementById('modal-project-title');
  const mSubtitle = document.getElementById('modal-project-subtitle');
  const mRole = document.getElementById('modal-project-role');
  const mTimeline = document.getElementById('modal-project-timeline');
  const mTags = document.getElementById('modal-project-tags');
  const mChallenge = document.getElementById('modal-project-challenge');
  const mDesign = document.getElementById('modal-project-design');
  const mEngineering = document.getElementById('modal-project-engineering');
  const mResults = document.getElementById('modal-project-results');
  const mDemoLink = document.getElementById('modal-link-demo');
  const mCodeLink = document.getElementById('modal-link-code');

  const openModal = (projectId) => {
    // Find project details in projects.js array
    if (typeof projects === 'undefined') return;
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    // Save last focused element for accessibility
    lastActiveElement = document.activeElement;
    
    // Populate Modal Content
    mImg.src = project.image;
    mImg.alt = `${project.title} screenshot`;
    mTitle.textContent = project.title;
    mSubtitle.textContent = project.subtitle;
    mRole.textContent = project.role;
    mTimeline.textContent = project.timeline;
    
    // Populate Tags
    mTags.innerHTML = '';
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      mTags.appendChild(span);
    });
    
    // Populate Narratives
    mChallenge.textContent = project.challenge;
    mDesign.textContent = project.design;
    mEngineering.textContent = project.engineering;
    mResults.textContent = project.results;
    
    // Populate Links
    mDemoLink.href = project.demoUrl;
    mCodeLink.href = project.githubUrl;
    
    // Reset modal scroll position to top
    if (scrollArea) scrollArea.scrollTop = 0;
    
    // Show Modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    
    // Set focus on close button for accessibility
    setTimeout(() => {
      closeBtn.focus();
    }, 100);
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    
    // Restore focus
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  // Attach card clicks
  projectCards.forEach(card => {
    // Make cards keyboard-navigable trigger anchors
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    
    const projectId = card.getAttribute('data-project-id');
    
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on child links if any
      if (e.target.tagName === 'A') return;
      openModal(projectId);
    });
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(projectId);
      }
    });
  });

  // Attach close events
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  
  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

});
