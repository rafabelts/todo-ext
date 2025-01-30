import { getTasks } from "./getTasks.js";
import { renderTask } from "./renderTask.js";

export const mapTasks = (list) => {
    
    getTasks().forEach(task => {   
        renderTask(list, task.title, task.id)
    });


}
