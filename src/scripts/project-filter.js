/**
 * Project Filter Module
 * Handles project filtering functionality
 */

const ProjectFilter = {
  filterBtns: null,
  projectItems: null,
  select: null,
  selectItems: null,
  selectValue: null,

  init() {
    this.filterBtns = document.querySelectorAll('[data-filter-btn]');
    this.projectItems = document.querySelectorAll('.project-item');
    this.select = document.querySelector('[data-select]');
    this.selectItems = document.querySelectorAll('[data-select-item]');
    this.selectValue = document.querySelector('[data-selecct-value]');

    this.bindFilterEvents();
    this.bindSelectEvents();
  },

  bindFilterEvents() {
    if (this.filterBtns.length > 0) {
      this.filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.handleFilterClick(e.target);
        });
      });
    }
  },

  bindSelectEvents() {
    if (this.select) {
      this.select.addEventListener('click', () => {
        Utils.elementToggleFunc(this.select);
      });

      this.selectItems.forEach(item => {
        item.addEventListener('click', () => {
          const selectedValue = item.textContent.trim();
          this.selectValue.textContent = selectedValue;
          this.select.classList.remove('active');
          
          // Trigger filter
          this.filterBtns.forEach(btn => {
            if (btn.textContent.trim() === selectedValue) {
              this.handleFilterClick(btn);
            }
          });
        });
      });
    }
  },

  handleFilterClick(button) {
    const filterValue = button.textContent.toLowerCase().trim();
    
    this.filterBtns.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    this.projectItems.forEach(item => {
      const category = item.getAttribute('data-category').toLowerCase();
      if (filterValue === 'all' || category.includes(filterValue)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
};
