function formValidaton() {
  const form = document.querySelector("#form");
  const emailInput = document.querySelector("#email");
  const nameInput = document.querySelector("#name");
  const passwordInput = document.querySelector("#password");
  const ageInput = document.querySelector("#age");
  const confirm = document.querySelector("#ConfPassword");
  const personal = document.querySelector("#personal-number");
  const mobile = document.querySelector("#mobile-number");

  const showErrorMessage = (input, message) => {
    input.closest(".form-group").classList.remove("success");
    input.closest(".form-group").classList.add("error");
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };
  const showSuccessMessage = (input, message) => {
    input.closest(".form-group").classList.remove("error");
    input.closest(".form-group").classList.add("success");
    input.closest(".form-group").querySelector(".error-message").textContent =
      message;
  };

  const isNameValid = () => {
    const val = nameInput.value.trim();
    if (val === "") {
      showErrorMessage(nameInput, "Name is required");
      return false;
    } else if (val.length < 3) {
      showErrorMessage(nameInput, "Name is too short");
      return false;
    } else {
      showSuccessMessage(nameInput, "Name is valid");
      return true;
    }
  };

  const isEmailValid = () => {
    const val = emailInput.value.trim();
    const emailRegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (val === "") {
      showErrorMessage(emailInput, "Email is required");
      return false;
    } else if (!emailRegExp.test(val)) {
      showErrorMessage(emailInput, "Email is not correct format");
      return false;
    } else if (!/@gmail\.com$/.test(val)) {
      showErrorMessage(emailInput, "Email must be gmail.com");
      return false;
    } else {
      showSuccessMessage(emailInput, "Email is valid");
      return true;
    }
  };

  const isAgeValid = () => {
    const val = ageInput.value.trim();
    if (Number(val) < 0 || Number(val) > 10) {
      showErrorMessage(ageInput, "Age must be between 0 and 10");
      return false;
    } else {
      showSuccessMessage(ageInput, "Age is valid");
      return true;
    }
  };

  const isPasswordValid = () => {
    const val = passwordInput.value.trim();
    if (val.length <= 6) {
      showErrorMessage(passwordInput, "Password must be min 6 characters");
      return false;
    } else {
      showSuccessMessage(passwordInput, "Password is valid");
      return true;
    }
  };

  const isConfPassword = () => {
    const val = confirm.value.trim();
    if (val === "") {
      showErrorMessage(confirm, "Confirm-Password is valid");
      return false;
    } else if (val !== confirm.value) {
      showErrorMessage(confirm, "Confirm-Password must be same as Password ");
      return false;
    } else {
      showSuccessMessage(passwordInput, "Password is valid");
      return true;
    }
  };

  const isPersonalValid = () => {
    const val = personal.value.trim();
    const numberRegExp = /^\d{11}$/;
    if (val === "") {
      showErrorMessage(personal, "Personal-number is required");
      return false;
    } else if (val.length !== 11) {
      showErrorMessage(personal, "Personal-Number must be min 6 characters");
      return false;
    } else if (!numberRegExp.test(val)) {
      showErrorMessage(personal, "Only numbers");
      return false;
    } else {
      showSuccessMessage(passwordInput, "Personal-number is valid");
      return true;
    }
  };

  const isMobileValid = () => {
    const val = mobile.value.trim();
    const numberRegExp = /^\d{9}$/;
    if (val === "") {
      showErrorMessage(mobile, "Mobile-Number is required");
      return false;
    } else if (val.length !== 9) {
      showErrorMessage(mobile, "Mobile number must consist of 9 characters.");
      return false;
    } else if (!numberRegExp.test(val)) {
      showErrorMessage(mobile, "Only numbers");
      return false;
    } else {
      showSuccessMessage(mobile, "Mobile-Number is valid");
      return true;
    }
  };

  nameInput.addEventListener("input", isNameValid);
  emailInput.addEventListener("input", isEmailValid);
  ageInput.addEventListener("input", isAgeValid);
  passwordInput.addEventListener("input", isPasswordValid);
  confirm.addEventListener("input", isConfPassword);
  personal.addEventListener("input", isPersonalValid);
  mobile.addEventListener("input", isMobileValid);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValid = isNameValid();
    const emailValid = isEmailValid();
    const ageValid = isAgeValid();
    const passwordValid = isPasswordValid();
    const confirmpass = isConfPassword();
    const Personal = isPersonalValid();
    const mobileValid = isMobileValid();

    if (
      nameValid &&
      emailValid &&
      ageValid &&
      passwordValid &&
      confirmpass &&
      Personal &&
      mobileValid
    ) {
      console.log("form is valid");
    }
  });
}

formValidaton();
