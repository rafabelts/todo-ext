import { getTasks } from "./getTasks.js";
import { renderTask } from "./renderTask.js";

export const addTask = (list, input) => {
    
    const tasks = getTasks();

    const taskObj = {
        id: `${input}-check`,
        title: input
    }

    tasks.push(taskObj);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask(list, taskObj.title, taskObj.id);
    
}
