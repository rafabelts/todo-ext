// made by: rafabelts on January 28 2025

/*
    validates whether the input is empty. If the user doesn't provide any text,
    an error message will be displayed.

    params:
        input - the HTML input element whose value needs to be validated   
        errorParagraph - the element where the error message will be displayed.
*/
const validateInput = (input, errorParagraph) => {
  const inputValue = input.value.trim();
  if (inputValue.length === 0) {
    errorParagraph.textContent = "Por favor, ingresa un artículo";
    errorParagraph.classList.add("show");
  }

  const clearError = () => {
    if (errorParagraph.textContent !== "") {
      errorParagraph.classList.remove("show");

      errorParagraph.textContent = "";

      input.removeEventListener("input", clearError); // remove listener when error is cleared
    }
  };

  // ensure that multiples event arent added
  input.removeEventListener("input", clearError);
  input.addEventListener("input", clearError);
};

const renderArticle = (list, input) => {
  const newListElement = document.createElement("li");
  newListElement.id = `${input}-list-element`;

  list.appendChild(newListElement);

  const inputId = `${input}-checkbox`;

  const articleInput = document.createElement("input");

  // add the checkbox value to the list
  articleInput.type = "checkbox";
  articleInput.id = inputId;

  const inputLabel = document.createElement("label");

  inputLabel.setAttribute("for", inputId);
  inputLabel.textContent = input;

  newListElement.appendChild(articleInput);
  newListElement.appendChild(inputLabel);
};

const getArticles = () => {
  return JSON.parse(localStorage.getItem("articles")) || [];
};

const addArticle = (list, input) => {
  const articles = getArticles();

  articles.push(input);
  localStorage.setItem("articles", JSON.stringify(articles));
  renderArticle(list, input);
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("items-form");

  // parent for the articles created
  const list = document.getElementById("article-list");

  getArticles().forEach((article) => {
    renderArticle(list, article);
  });

  const addToList = (list) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // get the input for the value
      const input = document.getElementById("items-input");
      // where the error is going to be shown
      const errorParagraph = document.getElementById("error-message");

      // function for validate that the values arent empty
      validateInput(input, errorParagraph);

      if (errorParagraph.textContent === "") {
        addArticle(list, input.value);
        input.value = ""; // clear input only if no error
      }
    });
  };

  addToList(list);
});
