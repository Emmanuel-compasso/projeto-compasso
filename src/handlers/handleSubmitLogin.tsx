import validateLogin from "../validation/validateLogin";

export default function handleSubmitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const values = (event.target as HTMLFormElement).elements;
    const user = (values.namedItem("user") as HTMLInputElement).value;
    const password = (values.namedItem("password") as HTMLInputElement).value;

    const errorElements = document.querySelectorAll(".error-message");

    errorElements.forEach((element: Element) => {
      (element as HTMLElement).style.display = "none";
    });

    const divElements = document.querySelectorAll(".form-div-style");

    divElements.forEach((divElement: Element) => {
      (divElement as HTMLElement).style.border = "2px solid #f5f5f5";
    });

    if ( validateLogin(user, password) ) {

      alert("Login bem-sucedido");

    } else {

        const fieldElement = document.getElementById(`login-error`);
        (fieldElement as HTMLElement).innerHTML = 'Usuário e/ou Senha inválidos.<br>Por favor, tente novamente!';
        (fieldElement as HTMLElement).style.display = "block";

        let divElement = document.getElementById(`user-border`);
        (divElement as HTMLElement).style.border = "2px solid #E9B425";

        divElement = document.getElementById(`password-border`);
        (divElement as HTMLElement).style.border = "2px solid #E9B425";

    }
  }