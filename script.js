const contactForm = document.getElementById("contactForm");

// Create a div to show messages
const formMessage = document.createElement("div");
formMessage.style.marginTop = "15px";
formMessage.style.fontWeight = "bold";
formMessage.style.textAlign = "center";
contactForm.appendChild(formMessage);

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  formMessage.textContent = "Sending...";
  formMessage.style.color = "#58a6ff";

  const formData = new FormData(contactForm);

  try {
    const response = await fetch("https://formspree.io/f/movgdlrd", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formMessage.textContent = "✅ Message sent successfully!";
      formMessage.style.color = "#0f0";
      contactForm.reset();
    } else {
      formMessage.textContent = "❌ There was a problem sending your message.";
      formMessage.style.color = "#f00";
    }
  } catch (error) {
    formMessage.textContent = "❌ Error: " + error.message;
    formMessage.style.color = "#f00";
  }
});
