"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateLogin_1 = __importDefault(require("../validation/validateLogin"));
function handleSubmitLogin(event) {
    event.preventDefault();
    const values = event.target.elements;
    const user = values.namedItem("user").value;
    const password = values.namedItem("password").value;
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.style.display = "none";
    });
    const divElements = document.querySelectorAll(".form-div-style");
    divElements.forEach((divElement) => {
        divElement.style.border = "2px solid #f5f5f5";
    });
    if ((0, validateLogin_1.default)(user, password)) {
        alert("Login bem-sucedido");
    }
    else {
        const fieldElement = document.getElementById(`login-error`);
        fieldElement.innerHTML = 'Usuário e/ou Senha inválidos.<br>Por favor, tente novamente!';
        fieldElement.style.display = "block";
        let divElement = document.getElementById(`user-border`);
        divElement.style.border = "2px solid #E9B425";
        divElement = document.getElementById(`password-border`);
        divElement.style.border = "2px solid #E9B425";
    }
}
exports.default = handleSubmitLogin;
