import { debounce } from './debounce.js';

export const deleteTask = debounce((task, list, taskTotal, input, tasks) =>  {

    const taskItem = document.getElementById(`${task.title.trim()}-item`)

    if (taskItem) {
        list.removeChild(taskItem);

        const taskIndex = tasks.indexOf(task)

        if (taskIndex > -1) tasks.splice(taskIndex, 1);
        taskTotal.textContent = tasks.length;

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    input.removeEventListener("change", () => deleteTask(task, list, taskTotal, input, tasks))

}, 500)
