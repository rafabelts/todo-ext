// made by: rafabelts on January 28 2025
import { addToList, clearError, mapTasks, getTasks, deleteFromList } from './src/actions/index.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("items-form");

    // parent for the articles created
    const list = document.getElementById("article-list");
 
    // get the input for the value
    const input = document.getElementById("items-input");

    // where the error is going to be shown
    const errorParagraph = document.getElementById("error-message");

    // displays the task total
    const taskTotal = document.getElementById("task-total");

    mapTasks(list);

    const tasks = getTasks();

    taskTotal.textContent = tasks.length;

    addToList(form, input, errorParagraph, list);

    if (errorParagraph !== "") input.addEventListener("input", () => clearError(input, errorParagraph))

    deleteFromList(tasks, list, taskTotal);

});
