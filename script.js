// Basic Validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Stop form from submitting immediately

      // Clear error and success messages
      document.querySelectorAll(".text-danger").forEach(e => e.textContent = "");
      document.getElementById("successMessage").textContent = "";

      let isValid = true;
      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validate Full Name
      if (name === "") {
        document.getElementById("nameError").textContent = "Full name is required.";
        isValid = false;
      }
      

      // Validate Email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email === "") {
        document.getElementById("emailError").textContent = "Email address is required.";
        isValid = false;
      } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
      }

      // Validate Subject
      if (subject === "") {
        document.getElementById("subjectError").textContent = "Subject is required.";
        isValid = false;
      }

      // Validate Message
      if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        isValid = false;
      }

      // Success Message
      if (isValid) {
        const success = document.getElementById("successMessage");
        success.textContent = "✅ Thank you! Your message has been sent successfully.";
        document.getElementById("contactForm").reset();

        setTimeout(() => {
          success.textContent = "";
        }, 3000);
      }
    });
