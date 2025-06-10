/**
 * Blog Sorter Module
 * Handles sorting of blog posts by date
 */

const BlogSorter = {
  init() {
    this.sortBlogPosts();
  },

  sortBlogPosts() {
    const blogList = document.querySelector('.blog-posts-list');
    if (!blogList) return;

    // Convert NodeList to array for sorting
    const blogItems = Array.from(blogList.querySelectorAll('.blog-post-item'));

    blogItems.sort((a, b) => {
      const dateA = new Date(a.querySelector('time').getAttribute('datetime'));
      const dateB = new Date(b.querySelector('time').getAttribute('datetime'));
      // Descending order (newest first)
      return dateB - dateA;
    });

    // Remove all items and re-append in sorted order
    blogItems.forEach(item => blogList.appendChild(item));
  }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BlogSorter;
}
