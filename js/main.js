/**
 * ARIJIT KOLEY - PORTFOLIO & FREELANCE WEB APPLICATION
 * Core Client-Side Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. THEME MANAGEMENT (Dark / Light Mode)
  // =========================================================================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

  // Initialize theme from localStorage or default to dark
  const savedTheme = localStorage.getItem('arijit_portfolio_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');

      if (isLight) {
        if (themeIcon) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('arijit_portfolio_theme', 'light');
      } else {
        if (themeIcon) {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('arijit_portfolio_theme', 'dark');
      }
    });
  }

  // =========================================================================
  // 2. STICKY HEADER & ACTIVE SCROLLSPY
  // =========================================================================
  const siteHeader = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    // ScrollSpy active link update
    const scrollPosition = window.scrollY + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // =========================================================================
  // 3. MOBILE HAMBURGER DRAWER
  // =========================================================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navDrawer = document.getElementById('mobile-nav-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    hamburgerBtn?.classList.add('active');
    hamburgerBtn?.setAttribute('aria-expanded', 'true');
    navDrawer?.classList.add('open');
    drawerBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    hamburgerBtn?.classList.remove('active');
    hamburgerBtn?.setAttribute('aria-expanded', 'false');
    navDrawer?.classList.remove('open');
    drawerBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navDrawer?.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  drawerBackdrop?.addEventListener('click', closeDrawer);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // =========================================================================
  // 4. PROJECTS DATA & MODAL SYSTEM
  // =========================================================================
  const projectsData = {
    visittrack: {
      id: 'visittrack',
      title: 'VisitTrack — Laravel Visitor Management System',
      category: 'Laravel Application / Enterprise Tool',
      tag: 'laravel',
      image: 'images/visittrack.png',
      summary: 'A secure web-based visitor management application designed to replace paper visitor logbooks with an automated digital workflow.',
      description: 'VisitTrack is a full-stack Laravel application that modernizes visitor registration, check-in, and tracking for corporate offices and educational institutions. It provides a multi-step check-in pipeline with OTP verification, entry/exit time logging, and an administrative control panel for approval workflows.',
      features: [
        'Secure visitor check-in and check-out with time stamped logging',
        'OTP-based visitor mobile verification for authentic record keeping',
        'Administrator approval and pass generation workflow',
        'Digital visitor history, search, and date-range reporting',
        'Role-based dashboard for receptionists and security administrators'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap', 'Eloquent ORM'],
      github: 'https://github.com/arja1998/VisitTrack',
      live: null
    },

    blogify: {
      id: 'blogify',
      title: 'Blogify — Laravel Multi-Role Blog Management Platform',
      category: 'Laravel Application / Content Platform',
      tag: 'laravel',
      image: 'images/blogify.png',
      summary: 'A role-based content management platform featuring custom permission workflows for Readers, Authors, and Administrators.',
      description: 'Blogify is built with Laravel and MySQL to support structured content publishing. It enforces strict role-based access control, allowing authors to draft and manage articles while administrators oversee category taxonomy, post moderation, and user management.',
      features: [
        'Role-based access control (Admin, Author, User permissions)',
        'Full post CRUD with rich formatting and category/tag associations',
        'Author dashboard for draft management and publication status',
        'Admin moderation panel for reviewing posts and managing users',
        'Responsive reader interface with search and category filtering'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Authentication', 'Middleware'],
      github: 'https://github.com/arja1998/Blogify',
      live: null
    },

    employee: {
      id: 'employee',
      title: 'Employee Management System — Laravel Enterprise Portal',
      category: 'Laravel Application / HR Portal',
      tag: 'laravel',
      image: 'images/employee-management-system.png',
      summary: 'A centralized employee management web application featuring role-based authorization, departmental tracking, and CRUD operations.',
      description: 'Built according to MVC architecture in Laravel, this system streamlines organizational employee records. It features route protection via custom middleware, secure authentication, and Eloquent ORM relationships between employees, departments, and roles.',
      features: [
        'Complete Employee CRUD (Create, Read, Update, Delete) workflows',
        'Role-based authorization and custom middleware route security',
        'Department and designation categorization with Eloquent relationships',
        'Dynamic search, filtering, and server-side pagination',
        'Flash message alerts and robust server-side validation'
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Middleware', 'Eloquent ORM'],
      github: 'https://github.com/arja1998/Employee-Management-System',
      live: null
    },

    crm: {
      id: 'crm',
      title: 'CRM Application — Customer Relationship Management',
      category: 'Business System / Web Application',
      tag: 'php',
      image: 'images/crm.png',
      summary: 'A web-based CRM application designed to help businesses manage customer interactions, leads, quotes, and support tickets.',
      description: 'This CRM system provides a centralized repository for customer data, tracking communication history, managing quotes, and handling customer support tickets. Built with PHP and MySQL, it enables small businesses to organize sales leads and client communication efficiently.',
      features: [
        'Customer profile directory and contact interaction logging',
        'Sales lead tracking and pipeline status updates',
        'Support ticket management with priority levels and resolution states',
        'Quote generation and client history overview',
        'Admin dashboard with key interaction statistics'
      ],
      tech: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'HTML5'],
      github: 'https://github.com/arja1998/CRM',
      live: null
    },

    restaurant: {
      id: 'restaurant',
      title: 'Restaurant Table Booking System — Online Reservation Portal',
      category: 'Booking System / Web Application',
      tag: 'booking',
      image: 'images/rtbs.png',
      summary: 'A full-stack table reservation application allowing customers to search dining spots and book tables online.',
      description: 'The Restaurant Table Booking System simplifies online reservations for dining establishments. Customers can search available restaurants, select table sizes and time slots, and receive booking status updates. The back-office module gives restaurant managers full control over reservation queues and availability.',
      features: [
        'Interactive restaurant search and availability filtering',
        'Table reservation booking form with date, time, and guest count',
        'Real-time booking status tracking (Pending, Confirmed, Cancelled)',
        'Admin control panel to manage incoming reservations and table slots',
        'Responsive layout optimized for mobile and desktop diners'
      ],
      tech: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL', 'CSS3'],
      github: 'https://github.com/arja1998/Resturant-table-booking-system',
      live: null
    },

    ecommerce: {
      id: 'ecommerce',
      title: 'E-Commerce Platform — Full-Featured Multi-Role Store',
      category: 'E-Commerce / Full-Stack Platform',
      tag: 'ecommerce',
      image: 'images/e-commerce.png',
      summary: 'A complete e-commerce solution with customer, vendor, and admin roles, inventory controls, order tracking, and cart management.',
      description: 'A comprehensive online shopping platform built with PHP and MySQL. The system supports full customer lifecycle from product discovery, cart, coupon application, to order placement. The administrative backend provides catalog management, stock alerts, order dispatch tracking, and customer review moderation.',
      features: [
        'Multi-role architecture for Customers, Vendors, and Store Admins',
        'Product catalogue with categories, attributes, pricing, and image galleries',
        'Dynamic search, price filtering, and shopping cart operations',
        'Coupon/discount code engine and order lifecycle management',
        'Inventory tracking with automated low-stock warnings and customer reviews'
      ],
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/arja1998/E-commerce-Website',
      live: null
    }
  };

  // --- Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      projectCards.forEach(card => {
        const cardTag = card.dataset.category;
        if (filterValue === 'all' || cardTag === filterValue || (filterValue === 'php' && (cardTag === 'php' || cardTag === 'booking' || cardTag === 'ecommerce'))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Project Modal Popup ---
  const projectModal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modal-image');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalFeatures = document.getElementById('modal-features');
  const modalTechContainer = document.getElementById('modal-tech-tags');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project || !projectModal) return;

    if (modalImage) {
      modalImage.src = project.image;
      modalImage.alt = project.title;
    }
    if (modalBadge) modalBadge.textContent = project.category;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDesc) modalDesc.textContent = project.description;

    if (modalFeatures) {
      modalFeatures.innerHTML = '';
      project.features.forEach(feat => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${feat}</span>`;
        modalFeatures.appendChild(li);
      });
    }

    if (modalTechContainer) {
      modalTechContainer.innerHTML = '';
      project.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = t;
        modalTechContainer.appendChild(span);
      });
    }

    if (modalGithubLink) {
      modalGithubLink.href = project.github;
    }

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-project-modal').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.dataset.project;
      openProjectModal(projectId);
    });
  });

  modalCloseBtn?.addEventListener('click', closeProjectModal);
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  // Global Escape Key Listener for Modals & Drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeDrawer();
    }
  });

  // =========================================================================
  // 5. TOAST NOTIFICATION UTILITY
  // =========================================================================
  const toastElement = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  function showToast(message, duration = 3500) {
    if (!toastElement || !toastMessage) return;
    toastMessage.textContent = message;
    toastElement.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastElement.classList.remove('show');
    }, duration);
  }

  // =========================================================================
  // 6. COPY TO CLIPBOARD HANDLERS
  // =========================================================================
  document.querySelectorAll('.copy-data-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.dataset.copy;
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }).catch(() => {
        // Fallback
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      });
    });
  });

  // =========================================================================
  // 7. CONTACT FORM VALIDATION & INTERACTION FLOW
  // =========================================================================
  const contactForm = document.getElementById('project-contact-form');
  const formStatus = document.getElementById('form-status-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const nameInput = this.querySelector('input[name="name"]');
      const emailInput = this.querySelector('input[name="email"]');
      const phoneInput = this.querySelector('input[name="phone"]');
      const serviceInput = this.querySelector('select[name="service"]');
      const detailsInput = this.querySelector('textarea[name="details"]');
      const submitBtn = this.querySelector('button[type="submit"]');

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();
      const phone = phoneInput?.value.trim() || 'Not specified';
      const service = serviceInput?.value || 'Custom Web Development';
      const details = detailsInput?.value.trim();

      // Basic client-side validation
      if (!name || !email || !details) {
        if (formStatus) {
          formStatus.className = 'form-status-alert error';
          formStatus.textContent = 'Please fill in all required fields (Name, Email, and Project Details).';
        }
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (formStatus) {
          formStatus.className = 'form-status-alert error';
          formStatus.textContent = 'Please enter a valid email address.';
        }
        return;
      }

      // UI Loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparing Enquiry...';
      }

      // Simulate preparation & provide dual-channel submit (direct alert + mailto trigger)
      setTimeout(() => {
        if (formStatus) {
          formStatus.className = 'form-status-alert success';
          formStatus.innerHTML = `
            <strong>Thank you, ${name}!</strong> Your project enquiry for <em>${service}</em> has been prepared.
            <br>Direct email link opened to <strong>arjakoley@gmail.com</strong>. You can also reach me directly at <strong>(+91) 8910007940</strong>.
          `;
        }

        // Open user's default email client with structured pre-filled subject and body
        const mailSubject = encodeURIComponent(`Project Enquiry: ${service} — ${name}`);
        const mailBody = encodeURIComponent(
          `Hi Arijit,\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Service Requested: ${service}\n\n` +
          `Project Details:\n${details}\n\n` +
          `Looking forward to hearing from you!`
        );

        window.location.href = `mailto:arjakoley@gmail.com?subject=${mailSubject}&body=${mailBody}`;

        showToast('Enquiry prepared & email client triggered!');
        contactForm.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Project Enquiry';
        }
      }, 700);
    });
  }

  // Pre-select service in contact form when clicked from a service card
  document.querySelectorAll('.select-service-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.dataset.service;
      const serviceSelect = document.getElementById('service-select');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
    });
  });

  // =========================================================================
  // 8. SCROLL TO TOP HELPER
  // =========================================================================
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
