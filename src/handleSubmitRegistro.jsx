import ValidaRegistro from "./ValidaRegistro";

export default function handleSubmitRegistro(event) {
    event.preventDefault();

    const values = event.target.elements;
    const errors = ValidaRegistro(values);

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
      
    } else {
      for (const fieldName in errors) {
        const errorMessage = errors[fieldName];

        const fieldElement = document.getElementById(`${fieldName}-error`);
        fieldElement.innerHTML = errorMessage;
        fieldElement.style.display = "block";

        const divElement = document.getElementById(`${fieldName}-border`);
        if (divElement) {
          divElement.style.border = "2px solid #E9B425";
        }
      }
    }
}