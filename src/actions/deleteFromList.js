import { deleteTask } from "./deleteTask.js";

export const deleteFromList = (tasks, list, taskTotal) => {
    tasks.forEach((task) => {
        const input = document.getElementById(task.id);

        input.addEventListener("change", () => deleteTask(task, list, taskTotal, input, tasks))
    });
}

