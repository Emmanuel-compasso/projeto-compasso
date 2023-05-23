interface FormValues {
  name: { value: string };
  user: { value: string };
  birthday: { value: string };
  email: { value: string };
  password: { value: string };
  passwordconf: { value: string };
}

interface FormErrors {
  name?: string;
  user?: string;
  birthday?: string;
  email?: string;
  password?: string;
  passwordconf?: string;
}

export default function validateRegister(values: FormValues): FormErrors {

  const { name, user, birthday, email, password, passwordconf } = values;

  const errors: FormErrors = {};

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
  } else if (password.value !== passwordconf.value) {
    errors.passwordconf = 'As senhas não correspondem!';
  }

  return errors;
}