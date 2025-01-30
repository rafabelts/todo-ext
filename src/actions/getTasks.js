export const getTasks = () => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}
