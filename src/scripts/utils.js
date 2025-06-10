/**
 * Utility Functions Module
 * Common utility functions used across the application
 */

const Utils = {
  /**
   * Toggle element class utility
   * @param {HTMLElement} elem - Element to toggle
   */
  elementToggleFunc(elem) {
    if (elem) {
      elem.classList.toggle("active");
    }
  },

  /**
   * Initialize utility functions
   */
  init() {
    // Utility functions don't need initialization
  }
};
