function formValidaton() {
  const emailRegExp = /!@#$%/;

  const form = document.querySelector("#form");
  const emailInput = document.querySelector("#email");
  const nameInput = document.querySelector("#name");
  const passwordInput = document.querySelector("#password");
  const ageInput = document.querySelector("#age");

  const showErrorMessage = (input, message) => {
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };

  const isNameValid = () => {
    console.log(nameInput.value);
    const val = nameInput.value.trim();
    if (val === "") {
      nameInput.closest(".form-group").classList.remove("success");
      nameInput.closest(".form-group").classList.add("error");
      showErrorMessage(nameInput, "Name is required");
    } else {
      nameInput.closest(".form-group").classList.remove("error");
      nameInput.closest(".form-group").classList.add("success");

      showErrorMessage(nameInput, "Name is valid");
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    isNameValid();
  });
}

formValidaton();
