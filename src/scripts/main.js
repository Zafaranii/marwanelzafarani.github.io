/**
 * Main Portfolio Application
 * Author: Marwan Elzafarani
 * Description: Core functionality for portfolio website
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  Utils.init();
  Sidebar.init();
  Navigation.init();  // Navigation module now has minimal functionality
  
  // Initialize section-specific modules if they exist in this page
  if (typeof ProjectFilter !== 'undefined') ProjectFilter.init();
  if (typeof ProjectModal !== 'undefined') ProjectModal.init();
  if (typeof AchievementModal !== 'undefined') AchievementModal.init();
  if (typeof BlogSorter !== 'undefined') BlogSorter.init();
  if (typeof FormValidation !== 'undefined') FormValidation.init();
});
