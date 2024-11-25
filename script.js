document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  // Add interactivity to the Bongo Cat
document.querySelector('.bongo-cat').addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
  
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission
  
      // Show the success message
      successMessage.classList.remove("hidden");
      successMessage.classList.add("visible");
  
      // Optionally clear the form fields
      contactForm.reset();
  
      // Hide the success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove("visible");
        successMessage.classList.add("hidden");
      }, 5000); // 5000ms = 5 seconds
    });
  });
  