// Login Password Eye Toggler

const eyeToggler = document.querySelector(".fa-eye-slash");
const password = document.querySelector("#password");

eyeToggler.addEventListener("click", () => {
  eyeToggler.classList.toggle("fa-eye");

  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
