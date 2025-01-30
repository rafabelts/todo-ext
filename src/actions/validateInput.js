/*
    made by: rafabelts on January 28 2025
 
    validates whether the input is empty. If the user doesn't provide any text,
    an error message will be displayed.

    params:
        input - the HTML input element whose value needs to be validated   
        errorParagraph - the element where the error message will be displayed.
*/

export function validateInput(input, errorParagraph) {
  const inputValue = input.value.trim();
  if (inputValue.length === 0) {
    errorParagraph.textContent = "Por favor, ingresa un artículo";
    errorParagraph.classList.add("show");
  }

}
