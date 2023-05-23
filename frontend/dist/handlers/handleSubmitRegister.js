"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateRegister_1 = __importDefault(require("../validation/validateRegister"));
function handleSubmitRegistro(event) {
    event.preventDefault();
    const values = event.target.elements;
    const formData = {
        name: { value: values.namedItem('name').value },
        user: { value: values.namedItem('user').value },
        birthday: { value: values.namedItem('birthday').value },
        email: { value: values.namedItem('email').value },
        password: { value: values.namedItem('password').value },
        passwordconf: { value: values.namedItem('passwordconf').value },
    };
    const errors = (0, validateRegister_1.default)(formData);
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.style.display = "none";
    });
    const divElements = document.querySelectorAll(".form-div-style");
    divElements.forEach((divElement) => {
        divElement.style.border = "2px solid #f5f5f5";
    });
    if (Object.keys(errors).length === 0) {
        alert("Cadastro bem-sucedido");
    }
    else {
        const errors = {
            field1: 'Erro 1',
            field2: 'Erro 2',
        };
        for (const fieldName in errors) {
            if (Object.prototype.hasOwnProperty.call(errors, fieldName)) {
                const errorMessage = errors[fieldName];
                const fieldElement = document.getElementById(`${fieldName}-error`);
                if (fieldElement) {
                    fieldElement.innerHTML = errorMessage;
                    fieldElement.style.display = "block";
                }
                const divElement = document.getElementById(`${fieldName}-border`);
                if (divElement) {
                    divElement.style.border = "2px solid #E9B425";
                }
            }
        }
    }
}
exports.default = handleSubmitRegistro;
