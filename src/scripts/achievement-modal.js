/**
 * Achievement Modal Module
 * Handles achievement modal functionality
 */

const AchievementModal = {
  modalContainer: null,
  overlay: null,
  closeBtn: null,
  modalImg: null,
  modalTitle: null,
  modalCategory: null,
  modalDescription: null,
  achievementLink: null,

  init() {
    this.modalContainer = document.querySelector('[data-achievement-modal-container]');
    this.overlay = document.querySelector('[data-achievement-overlay]');
    this.closeBtn = document.querySelector('[data-achievement-modal-close-btn]');
    this.modalImg = document.querySelector('[data-achievement-modal-img]');
    this.modalTitle = document.querySelector('[data-achievement-modal-title]');
    this.modalCategory = document.querySelector('[data-achievement-modal-category]');
    this.modalDescription = document.querySelector('[data-achievement-modal-description]');
    this.achievementLink = document.querySelector('[data-achievement-link]');

    this.bindEvents();
  },

  bindEvents() {
    // Open achievement modal events
    const achievementItems = document.querySelectorAll('[data-achievement-open]');
    achievementItems.forEach(item => {
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
    const achievementId = item.closest('[data-achievement-item]').getAttribute('data-achievement-item');
    const achievement = AchievementData[achievementId] || {
      title: item.querySelector('.achievement-title')?.textContent || 'Achievement',
      category: item.querySelector('.achievement-category')?.textContent || '',
      description: '<p>No detailed description available for this achievement.</p>',
      imgSrc: item.querySelector('img')?.src || '',
      link: '#'
    };

    this.populateModal(achievement);
    this.toggleModal();
    this.addReadMoreFunctionality();
  },

  populateModal(achievement) {
    if (this.modalTitle) this.modalTitle.textContent = achievement.title;
    if (this.modalCategory) this.modalCategory.textContent = achievement.category;
    if (this.modalDescription) this.modalDescription.innerHTML = achievement.description;
    if (this.modalImg) {
      this.modalImg.src = achievement.imgSrc;
      this.modalImg.alt = achievement.title;
    }
    if (this.achievementLink) this.achievementLink.href = achievement.link;
  },

  toggleModal() {
    if (this.modalContainer) this.modalContainer.classList.toggle('active');
    if (this.overlay) this.overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

    // Clean up read more buttons
    const existingBtn = document.querySelector('.achievement-read-more');
    if (existingBtn) existingBtn.remove();
  },

  addReadMoreFunctionality() {
    setTimeout(() => {
      // Remove any existing read more buttons
      const existingBtn = document.querySelector('.achievement-read-more');
      if (existingBtn) existingBtn.remove();

      // Set initial collapsed state
      if (this.modalDescription) {
        this.modalDescription.classList.remove('expanded');

        // Create read more button
        const readMoreBtn = document.createElement('button');
        readMoreBtn.className = 'read-more-btn achievement-read-more';
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
