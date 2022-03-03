import {isToday, isThisWeek, parse} from 'date-fns';

const toDo = (() => {
    
    const toDoItem = (title, description, dueDate, priority) => {
        
        return {title, description, dueDate, priority};
    };

    const project = (title, id) => {
        return {title, id};
    };

    function createTask (title, description, dueDate, priority) {
        const item = toDoItem(title, description, dueDate, priority);
        return item;

    }

    function createProject (title, id) {
        const newProject = project(title, id);
        return newProject;
    }

    function createProjectCard(projectObj){
        const option = document.createElement('div');
        option.classList.add('sidebar-item');
        option.setAttribute('name', projectObj.title);
        const optionText = document.createElement('p');
        optionText.classList.add('sidebar-item-heading');
        optionText.textContent = projectObj.id;
        option.appendChild(optionText);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-project-button');
        removeBtn.setAttribute('id', projectObj.title);
        removeBtn.textContent = "X";
        option.appendChild(removeBtn);

        return option;
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
        console.log(taskCard);
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

    function checkTaskCardDate (title, taskObject) {
        if (title === "Today"){
            let date = parse(taskObject.dueDate, 'yyyy-MM-dd', new Date());
            if(isToday(date)) {
                let todaysCard = taskObject
                return todaysCard;
            }
        }
        else if (title === "This Week"){
            let date = parse(taskObject.dueDate, 'yyyy-MM-dd', new Date());
            if (isThisWeek(date)){
                let thisWeek = taskObject;
                console.log(thisWeek);
                return thisWeek;
            }
        }
        else {
            return null;
        }
    };

    return {createTask, createProject, createTaskCard, setTaskData, getTaskData, removeTaskData, 
        checkTaskCardDate, createProjectCard};
})();
export { toDo };