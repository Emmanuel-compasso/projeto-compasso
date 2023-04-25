import { NavLink } from "react-router-dom";
import handleSubmitLogin from "../handlers/handleSubmitLogin";
import "../App.css";
import React from "react";

const Login = () => {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    handleSubmitLogin(event);
  }

  return (
    <div className="container">
      <section className="left-side">
        <article className="top-container">
          <h1 className="top-title" id="top-title-login">
            Olá,
          </h1>
          <p className="top-text" id="top-text-login">
            Para continuar navegando de forma segura, efetue o login
          </p>
        </article>

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
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
      </section>

      <section className="right-side"></section>
    </div>
  );
};

export default Login;
