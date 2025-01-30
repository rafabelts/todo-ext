import { debounce } from './debounce.js';

import { updateTaskTotal } from './updateTaskTotal.js';

export const deleteTask = debounce((task, list, taskTotal, input, tasks) =>  {

    const taskItem = document.getElementById(`${task.title.trim()}-item`)

    if (taskItem) {
        list.removeChild(taskItem);

        const taskIndex = tasks.findIndex(t => t.title === task.title);

        if (taskIndex > -1) tasks.splice(taskIndex, 1);

        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        updateTaskTotal(taskTotal, tasks)
    }

    input.removeEventListener("change", () => deleteTask(task, list, taskTotal, input, tasks))

}, 500)
