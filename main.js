// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMsg");

  if(name && email && message) {
    msg.textContent = "✅ Thank you, " + name + "! Your message has been sent.";
    msg.style.color = "green";
    this.reset();
  } else {
    msg.textContent = "⚠️ Please fill out all fields.";
    msg.style.color = "red";
  }
});
