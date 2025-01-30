import { addTask } from "./addTask.js";
import { validateInput } from "./validateInput.js";

export const addToList = (form, input, errorParagraph, list) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // function for validate that the values arent empty
        validateInput(input, errorParagraph);

        if (errorParagraph.textContent === "") {
            addTask(list, input.value);
            input.value = ""; // clear input only if no error
        }
    });
};

