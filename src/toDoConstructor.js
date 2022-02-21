const toDo = (() => {
    
    const toDoItem = (title, description, dueDate, priority) => {
        
        return {title, description, dueDate, priority};
    };

    const createTask = (title, description, dueDate, priority) => {
        const item = toDoItem(title, description, dueDate, priority);

    }

    return {createTask};
})();
export { toDo };