import { NavLink } from "react-router-dom";
import ValidaLogin from "./ValidaLogin";
import "./MyStyle.css";

const Login = () => {

  function handleSubmit(event) {
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

    if ( ValidaLogin(user, password) ) {

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

  return (
    <div className="container">
      <div className="left-side">
        <header className="top-container">
          <h1 className="top-title" id="top-title-login">
            Olá,
          </h1>
          <p className="top-text" id="top-text-login">
            Para continuar navegando de forma segura, efetue o login
          </p>
        </header>

        <form className="form-container" onSubmit={handleSubmit}>
          <h1 className="form-title">Login</h1>

          <div className="form-div-style" id="user-border">
            <input
              className="input-style"
              type="text"
              name="user"
              placeholder="Usuário"
            />

            <span className="input-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
          </div>

          <div className="form-div-style" id="password-border">
            <input
              className="input-style"
              type="password"
              name="password"
              placeholder="Senha"
            />
            <span className="input-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>
          </div>
          <span className="error-message" id="login-error"></span>

          <input className="submit-button" type="submit" value="Logar-se" />

          <p className="ending-text">
            Novo por aqui?{" "}
            <NavLink to="/" className="ending-text-redirect">
              Registre-se
            </NavLink>
          </p>
        </form>
      </div>

      <div className="right-side"></div>
    </div>
  );
};

export default Login;
