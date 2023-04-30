import validateRegister from "../validation/validateRegister";

interface MyFormValues {
  name: { value: string };
  user: { value: string };
  birthday: { value: string };
  email: { value: string };
  password: { value: string };
  passwordconf: { value: string };
}

export default function handleSubmitRegistro(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const values = (event.target as HTMLFormElement).elements;
  const formData: MyFormValues = {
    name: { value: (values.namedItem('name') as HTMLInputElement).value },
    user: { value: (values.namedItem('user') as HTMLInputElement).value },
    birthday: { value: (values.namedItem('birthday') as HTMLInputElement).value },
    email: { value: (values.namedItem('email') as HTMLInputElement).value },
    password: { value: (values.namedItem('password') as HTMLInputElement).value },
    passwordconf: { value: (values.namedItem('passwordconf') as HTMLInputElement).value },
  };

  interface FormErrors {
    [key: string]: any;
  }

  const errors: FormErrors = validateRegister(formData);

  const errorElements = document.querySelectorAll(".error-message");

    errorElements.forEach((element: Element) => {
      (element as HTMLElement).style.display = "none";
    });

    const divElements = document.querySelectorAll(".form-div-style");

    divElements.forEach((divElement: Element) => {
      (divElement as HTMLElement).style.border = "2px solid #f5f5f5";
    });

    if (Object.keys(errors).length === 0) {

      alert("Cadastro bem-sucedido");
      
    } else {
      
      for (const fieldName in errors) {
        if (Object.prototype.hasOwnProperty.call(errors, fieldName)) {
          const errorMessage = errors[fieldName];
      
          const fieldElement = document.getElementById(`${fieldName}-error`);
          if(fieldElement) {
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