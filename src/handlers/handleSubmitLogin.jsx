import validateLogin from "../validation/validateLogin";

export default function handleSubmitLogin(event) {
    event.preventDefault();

    const values = event.target;
    const user = values.elements.user.value;
    const password = values.elements.password.value;

    const errorElements = document.querySelectorAll(".error-message");

    errorElements.forEach((element) => {
      element.style.display = "none";
    });

    const divElements = document.querySelectorAll(".form-div-style");

    divElements.forEach((divElement) => {
      divElement.style.border = "2px solid #f5f5f5";
    });

    if ( validateLogin(user, password) ) {

      alert("Login bem-sucedido");

    } else {

        const fieldElement = document.getElementById(`login-error`);
        fieldElement.innerHTML = 'Usuário e/ou Senha inválidos.<br>Por favor, tente novamente!';
        fieldElement.style.display = "block";

        let divElement = document.getElementById(`user-border`);
        divElement.style.border = "2px solid #E9B425";

        divElement = document.getElementById(`password-border`);
        divElement.style.border = "2px solid #E9B425";

    }
  }