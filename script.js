const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  if (!email) return;

  // Ejemplo: aquí podrías enviar a backend o API
  console.log("Email enviado:", email);

  alert("Mensaje enviado correctamente");

  this.reset();
});
