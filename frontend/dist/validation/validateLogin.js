"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateLogin(user, password) {
    if (user === 'admin' && password === 'admin') {
        return true;
    }
    return false;
}
exports.default = validateLogin;
