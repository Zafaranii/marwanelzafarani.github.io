/**
 * Form Validation Module
 * Handles contact form validation and AJAX submission
 */

const FormValidation = {
  form: null,
  formInputs: null,
  formBtn: null,
  formspreeEndpoint: 'https://formspree.io/f/mldnrnoq',

  init() {
    this.form = document.querySelector("[data-form]");
    this.formInputs = document.querySelectorAll("[data-form-input]");
    this.formBtn = document.querySelector("[data-form-btn]");
    this.successMessage = document.querySelector(".form-success-message");
    this.errorMessage = document.querySelector(".form-error-message");

    this.bindEvents();
  },

  bindEvents() {
    if (this.formInputs.length > 0) {
      this.formInputs.forEach(input => {
        input.addEventListener("input", () => {
          this.validateForm();
        });
      });
    }

    if (this.form) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.submitForm();
      });
    }
  },

  validateForm() {
    if (this.form && this.formBtn) {
      // check form validation
      if (this.form.checkValidity()) {
        this.formBtn.removeAttribute("disabled");
      } else {
        this.formBtn.setAttribute("disabled", "");
      }
    }
  },

  submitForm() {
    // Disable the submit button and show loading state
    this.formBtn.setAttribute("disabled", "");
    this.formBtn.classList.add("submitting");
    
    // Hide any previous messages
    if (this.successMessage) this.successMessage.classList.add('hide');
    if (this.errorMessage) this.errorMessage.classList.add('hide');
    
    // Get form data
    const formData = new FormData(this.form);
    
    // Send AJAX request to Formspree
    fetch(this.formspreeEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Show success message and reset form
        this.showSuccessMessage();
        this.resetForm();
      } else {
        // Show error message
        this.showErrorMessage();
      }
      return response.json();
    })
    .catch(error => {
      this.showErrorMessage();
      console.error("Error:", error);
    })
    .finally(() => {
      // Remove loading state
      this.formBtn.classList.remove("submitting");
    });
  },

  showSuccessMessage() {
    if (this.successMessage) {
      // Show the success message
      this.successMessage.classList.remove('hide');
      
      // Hide the success message after 5 seconds
      setTimeout(() => {
        this.successMessage.classList.add('hide');
      }, 5000);
    }
  },

  showErrorMessage() {
    if (this.errorMessage) {
      // Show the error message
      this.errorMessage.classList.remove('hide');
      
      // Hide the error message after 5 seconds
      setTimeout(() => {
        this.errorMessage.classList.add('hide');
      }, 5000);
    }
    
    // Re-enable the submit button
    this.formBtn.removeAttribute("disabled");
  },

  resetForm() {
    this.form.reset();
    this.formBtn.setAttribute("disabled", "");
  }
};
