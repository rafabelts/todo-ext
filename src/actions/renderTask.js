export const renderTask = (list, input, inputId) => {

    const task = document.createElement("li");

    task.id = `${input.trim()}-item`;

    list.appendChild(task);


    const taskInput = document.createElement("input");

    taskInput.id = inputId;
    taskInput.type = "checkbox";
    taskInput.value = input.trim();

    const label = document.createElement("label");

    // assigns the input to the label
    label.setAttribute("for", inputId);

    // displays the task
    label.textContent = input;

    task.appendChild(taskInput);
    task.appendChild(label);
}
