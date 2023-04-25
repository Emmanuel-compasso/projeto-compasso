"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateRegister(values) {
    const { name, user, birthday, email, password, passwordconf } = values;
    const errors = {};
    if (!name.value) {
        errors.name = 'Por favor, informe um nome.';
    }
    if (!user.value) {
        errors.user = 'Por favor, informe um usuário.';
    }
    if (!birthday.value) {
        errors.birthday = 'Por favor, informe um nascimento.';
    }
    if (!email.value) {
        errors.email = 'Por favor, informe um email.';
    }
    if (!password.value) {
        errors.password = 'Por favor, informe uma senha.';
    }
    if (!passwordconf.value) {
        errors.passwordconf = 'Por favor, confirme a senha.';
    }
    else if (password.value !== passwordconf.value) {
        errors.passwordconf = 'As senhas não correspondem!';
    }
    return errors;
}
exports.default = validateRegister;
