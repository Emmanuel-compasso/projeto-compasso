import { NavLink } from "react-router-dom";
import handleSubmitRegister from "../handlers/handleSubmitRegister";
import "../App.css";
import React from "react";

const Registro = () => {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    handleSubmitRegister(event);
  }

  return (
    <div className="container">
      <section className="left-side">
        <article className="top-container">
          <h1 className="top-title">Olá,</h1>
          <p className="top-text">Por favor, registre-se para continuar</p>
        </article>

        <form className="form-container" onSubmit={handleSubmit}>
          <h1 className="form-title">Registro</h1>

          <div className="form-div-style" id="name-border">
            <input
              className="input-style"
              type="text"
              id="name"
              placeholder="Nome"
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
          <span className="error-message" id="name-error"></span>

          <div className="form-div-style" id="user-border">
            <input
              className="input-style"
              type="text"
              id="user"
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
                  d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                />
              </svg>
            </span>
          </div>
          <span className="error-message" id="user-error"></span>

          <div className="form-div-style" id="birthday-border">
            <input
              className="input-style"
              type="date"
              id="birthday"
              placeholder="Nascimento"
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
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                />
              </svg>
            </span>
          </div>
          <span className="error-message" id="birthday-error"></span>

          <div className="form-div-style" id="email-border">
            <input
              className="input-style"
              type="email"
              id="email"
              placeholder="Email"
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
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </span>
          </div>
          <span className="error-message" id="email-error"></span>

          <div className="form-div-style" id="password-border">
            <input
              className="input-style"
              type="password"
              id="password"
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
          <span className="error-message" id="password-error"></span>

          <div className="form-div-style" id="passwordconf-border">
            <input
              className="input-style"
              type="password"
              id="passwordconf"
              placeholder="Confirmar Senha"
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
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </span>
          </div>
          <span className="error-message" id="passwordconf-error"></span>

          <input className="submit-button" type="submit" value="Registrar-se" />

          <p className="ending-text">
            Já possui uma conta?
            <NavLink to="/login" className="ending-text-redirect">
              Faça Login
            </NavLink>
          </p>
        </form>
      </section>

      <section className="right-side"></section>
    </div>
  );
};

export default Registro;
