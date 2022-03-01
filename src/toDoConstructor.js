
const toDo = (() => {
    
    const toDoItem = (title, description, dueDate, priority) => {
        
        return {title, description, dueDate, priority};
    };

    const project = (title) => {
        return {title};
    };

    function createTask (title, description, dueDate, priority) {
        const item = toDoItem(title, description, dueDate, priority);
        return item;

    }

    function createProject (title) {
        const newProject = project(title);
        return newProject;
    }

    function createTaskCard(taskObject) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card-container');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type',"checkbox");
        checkBox.setAttribute('id',"completed-check");

        const taskCardTitle = document.createElement('h1');
        taskCardTitle.classList.add('taskcard-title');
        taskCardTitle.setAttribute('id', taskObject.title);
        taskCardTitle.textContent = taskObject.title;

        const taskCardDesc = document.createElement('p');
        taskCardDesc.classList.add('taskcard-description');
        // taskCardDesc.setAttribute('id', taskObject.description);
        taskCardDesc.textContent = taskObject.description;

        const taskCardDate = document.createElement('p');
        taskCardDate.classList.add('taskcard-date');
        taskCardDate.textContent = taskObject.dueDate;

        const taskCardPriority = document.createElement('p');
        taskCardPriority.classList.add('taskcard-priority');
        taskCardPriority.textContent = taskObject.priority;

        const removeTaskCardBtn = document.createElement('button');
        removeTaskCardBtn.classList.add('remove-card-btn');
        removeTaskCardBtn.setAttribute('type', "submit");
        removeTaskCardBtn.setAttribute('value', taskObject.title);
        removeTaskCardBtn.textContent = "X";

        taskCard.appendChild(checkBox);
        taskCard.appendChild(taskCardTitle);
        taskCard.appendChild(taskCardDesc);
        taskCard.appendChild(taskCardDate);
        taskCard.appendChild(taskCardPriority);
        taskCard.appendChild(removeTaskCardBtn);

        return taskCard;
    }

    const setTaskData = (title, taskCard) => {
        localStorage.setItem(title, JSON.stringify(taskCard));
    }

    function getTaskData(title) {
        const myTaskCard = JSON.parse(localStorage.getItem(title));
        return myTaskCard;
    }

    function removeTaskData(title) {
        localStorage.removeItem(title);
    }

    return {createTask, createProject, createTaskCard, setTaskData, getTaskData, removeTaskData};
})();
export { toDo };