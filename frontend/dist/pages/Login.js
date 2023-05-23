"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const handleSubmitLogin_1 = __importDefault(require("../handlers/handleSubmitLogin"));
require("../App.css");
const react_1 = __importDefault(require("react"));
const Login = () => {
    function handleSubmit(event) {
        (0, handleSubmitLogin_1.default)(event);
    }
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("section", { className: "left-side" },
            react_1.default.createElement("article", { className: "top-container" },
                react_1.default.createElement("h1", { className: "top-title", id: "top-title-login" }, "Ol\u00E1,"),
                react_1.default.createElement("p", { className: "top-text", id: "top-text-login" }, "Para continuar navegando de forma segura, efetue o login")),
            react_1.default.createElement("form", { className: "form-container", onSubmit: handleSubmit },
                react_1.default.createElement("h1", { className: "form-title" }, "Login"),
                react_1.default.createElement("div", { className: "form-div-style", id: "user-border" },
                    react_1.default.createElement("input", { className: "input-style", type: "text", name: "user", placeholder: "Usu\u00E1rio" }),
                    react_1.default.createElement("span", { className: "input-image" },
                        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6" },
                            react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" })))),
                react_1.default.createElement("div", { className: "form-div-style", id: "password-border" },
                    react_1.default.createElement("input", { className: "input-style", type: "password", name: "password", placeholder: "Senha" }),
                    react_1.default.createElement("span", { className: "input-image" },
                        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6" },
                            react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" })))),
                react_1.default.createElement("span", { className: "error-message", id: "login-error" }),
                react_1.default.createElement("input", { className: "submit-button", type: "submit", value: "Logar-se" }),
                react_1.default.createElement("p", { className: "ending-text" },
                    "Novo por aqui?",
                    " ",
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: "ending-text-redirect" }, "Registre-se")))),
        react_1.default.createElement("section", { className: "right-side" })));
};
exports.default = Login;
