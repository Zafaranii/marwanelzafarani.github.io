/**
 * Sidebar Module
 * Handles sidebar functionality for mobile navigation
 */

const Sidebar = {
  sidebar: null,
  sidebarBtn: null,

  init() {
    this.sidebar = document.querySelector("[data-sidebar]");
    this.sidebarBtn = document.querySelector("[data-sidebar-btn]");

    this.bindEvents();
  },

  bindEvents() {
    if (this.sidebarBtn) {
      this.sidebarBtn.addEventListener("click", () => {
        Utils.elementToggleFunc(this.sidebar);
      });
    }
  }
};
