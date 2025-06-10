/**
 * Project Modal Module
 * Handles project modal functionality
 */

const ProjectModal = {
  modalContainer: null,
  overlay: null,
  closeBtn: null,
  modalImg: null,
  modalTitle: null,
  modalCategory: null,
  modalDescription: null,
  projectLink: null,

  init() {
    this.modalContainer = document.querySelector('[data-project-modal-container]');
    this.overlay = document.querySelector('[data-project-overlay]');
    this.closeBtn = document.querySelector('[data-project-modal-close-btn]');
    this.modalImg = document.querySelector('[data-project-modal-img]');
    this.modalTitle = document.querySelector('[data-project-modal-title]');
    this.modalCategory = document.querySelector('[data-project-modal-category]');
    this.modalDescription = document.querySelector('[data-project-modal-description]');
    this.projectLink = document.querySelector('[data-project-link]');

    this.bindEvents();
  },

  bindEvents() {
    // Open project modal events
    const projectOpenElements = document.querySelectorAll('[data-project-open]');
    projectOpenElements.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal(item);
      });
    });

    // Close modal events
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.toggleModal());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.toggleModal());
    }

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalContainer?.classList.contains('active')) {
        this.toggleModal();
      }
    });
  },

  openModal(item) {
    const projectId = item.querySelector('img').alt.toLowerCase().replace(/\s+/g, '');
    const project = ProjectData[projectId] || {
      title: item.querySelector('.project-title').textContent,
      category: item.querySelector('.project-category').textContent,
      description: '<p>No detailed description available for this project.</p>',
      imgSrc: item.querySelector('img').src,
      link: item.href
    };

    this.populateModal(project);
    this.toggleModal();
    this.addReadMoreFunctionality();
  },

  populateModal(project) {
    if (this.modalTitle) this.modalTitle.textContent = project.title;
    if (this.modalCategory) this.modalCategory.textContent = project.category;
    if (this.modalDescription) this.modalDescription.innerHTML = project.description;
    if (this.modalImg) {
      this.modalImg.src = project.imgSrc;
      this.modalImg.alt = project.title;
    }
    if (this.projectLink) this.projectLink.href = project.link;
  },

  toggleModal() {
    if (this.modalContainer) this.modalContainer.classList.toggle('active');
    if (this.overlay) this.overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

    // Clean up read more buttons
    const existingBtn = document.querySelector('.project-read-more');
    if (existingBtn) existingBtn.remove();
  },

  addReadMoreFunctionality() {
    setTimeout(() => {
      // Remove any existing read more buttons
      const existingBtn = document.querySelector('.project-read-more');
      if (existingBtn) existingBtn.remove();

      // Set initial collapsed state
      if (this.modalDescription) {
        this.modalDescription.classList.remove('expanded');

        // Create read more button
        const readMoreBtn = document.createElement('button');
        readMoreBtn.className = 'read-more-btn project-read-more';
        readMoreBtn.textContent = 'Read More';

        readMoreBtn.onclick = () => {
          const isExpanded = this.modalDescription.classList.contains('expanded');
          
          if (isExpanded) {
            this.modalDescription.classList.remove('expanded');
            readMoreBtn.textContent = 'Read More';
          } else {
            this.modalDescription.classList.add('expanded');
            readMoreBtn.textContent = 'Read Less';
          }
        };

        this.modalDescription.after(readMoreBtn);
      }
    }, 100);
  }
};
