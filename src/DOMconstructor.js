import { switchTabs } from './switchTabs.js';
import {toDo} from './toDoConstructor.js';


const createPage = (()=> {
    const body = document.querySelector('#content');

    const createNavBar = () => {
        const navBar = document.createElement('div');
        navBar.classList.add('navbar');

        const navBarText = document.createElement('div');
        navBarText.classList.add('navbar-text');
        const content = addNavBarText();

        navBarText.appendChild(content);
        navBar.appendChild(navBarText);
        body.appendChild(navBar);
    }

    const createSideBar = () => {
        const sideBar = document.createElement('div');
        sideBar.classList.add('sidebar-container');
        const sidebarContent = document.createElement('div');
        sidebarContent.classList.add('sidebar-content');

        const inbox = addProjectButton("Inbox");
        const today = addProjectButton("Today");
        const thisWeek = addProjectButton("This Week");

        const sidebarHeading = document.createElement('h2');
        sidebarHeading.textContent = "Projects";
        sidebarHeading.classList.add("inbox-header");

        const taskButton = addProjectButton("Add Project");
        taskButton.classList.add('add-sidebar-form');
    
        sidebarContent.appendChild(inbox);
        sidebarContent.appendChild(today);
        sidebarContent.appendChild(thisWeek);
        sidebarContent.appendChild(sidebarHeading);
        sidebarContent.appendChild(taskButton);
      
        sideBar.appendChild(sidebarContent);
        body.appendChild(sideBar);

        checkProjectLocalStorage();
    }

    const createInbox = () => {
        const inbox = document.createElement('div');
        inbox.classList.add('inbox-container');
       
        const header = document.createElement('h1');
        header.classList.add('container-header');
        header.textContent = "Inbox";

        const taskButton = addInboxButton("Add Task");
        taskButton.classList.add('add-taskform');
      
        inbox.appendChild(header);
        inbox.appendChild(taskButton);

        body.appendChild(inbox);

        checkCardLocalStorage();
    }

    const addSidebarItem = (item) => {
        
        const newItem = addProjectButton(item);
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-project-button');
        removeBtn.setAttribute('id', item);
        removeBtn.textContent = "X";
        const newItemName = newItem.getAttribute('name');
        newItem.appendChild(removeBtn);
        const sidebarContent = document.querySelector('.sidebar-content');
        const addTask = document.querySelector('.add-sidebar-form');
        newItem.addEventListener('click', () => {
            switchTabs.switchTab(newItemName);
        });
       
        sidebarContent.insertBefore(newItem, addTask);
    }
     
    const addDefaultInboxItem = (inbox, header) => {

        const taskButton = addInboxButton("Add Task");
        taskButton.classList.add('add-taskform');

        inbox.appendChild(header);
        inbox.appendChild(taskButton);

        if(!(header.textContent.includes("Project"))) {
            checkCardLocalStorage();
        }
    }

    const addScheduledItems = (inbox, header) => {
        inbox.appendChild(header);
        let title = header.textContent;
        for (let i = 0; i < localStorage.length; i++){
            let taskObject = toDo.getTaskData(localStorage.key(i));
            if (taskObject.hasOwnProperty("dueDate")){
                const result = toDo.checkTaskCardDate(title, taskObject);
                if (result != null) {
                    const card = toDo.createTaskCard(result);
                    addScheduledCard(inbox, card);
                }
            } 
        }
    }

    const addScheduledCard = (inbox, taskCard) => {
        inbox.appendChild(taskCard);
        switchTabs.removeCardListener();
    }

    const addDefaultTaskCard = (taskCard) => {
        const inbox = document.querySelector('.inbox-container');
        const taskFormButton = document.querySelector('.add-taskform');
        inbox.insertBefore(taskCard, taskFormButton);
        switchTabs.removeCardListener();
    }

    function addProjectButton(heading) {
        const option = document.createElement('div');
        option.classList.add('sidebar-item');
        option.setAttribute('name', heading);
        const optionText = document.createElement('p');
        optionText.classList.add('sidebar-item-heading');
        optionText.textContent = heading;
        option.appendChild(optionText);

        return option;

    }

    function addInboxButton(heading) {
        const option = document.createElement('div');
        option.classList.add('inbox-item');
        option.textContent = heading;

        return option;
    }

    const checkCardLocalStorage = () => {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++){
                if (!(localStorage.key(i).includes("Project"))) {
                    let task = toDo.getTaskData(localStorage.key(i));
                    let taskObject = toDo.createTaskCard(task, i);
                    addDefaultTaskCard(taskObject); 
                } 
            } 
        }
    }

    const checkProjectLocalStorage = () => {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i).includes("Project")){
                    addSidebarItem(localStorage.key(i));
                }
            }
        }
    };

    function addNavBarText() {
        const navbarText = document.createElement('h1');
        navbarText.textContent = "To-Do List";
        return navbarText;
    };

    function addUserProject(projectObj){
       const newItem = toDo.createProjectCard(projectObj);
       console.log(newItem);
       const sidebarContent = document.querySelector('.sidebar-content');
        const addTask = document.querySelector('.add-sidebar-form');
        newItem.addEventListener('click', () => {
            switchTabs.switchTab(projectObj.id);
        });
       
        sidebarContent.insertBefore(newItem, addTask);
    }


    return { createNavBar, createSideBar, createInbox, 
        addSidebarItem, addDefaultInboxItem, addDefaultTaskCard, addScheduledItems, checkProjectLocalStorage, addUserProject};
})();

const createForms = (() => {

    function createProjectForm() {
        // Create Form Popup container
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-popup');

        // Creates Form Container
        const form = document.createElement('form');
        form.classList.add('form-container');

        // Creates Form Contents
        const input = document.createElement('input');
        input.setAttribute('type', "text");
        input.setAttribute('name', 'item-name');
        input.setAttribute('id', "project-title");
        input.classList.add('form-text')
        const submitBtn = document.createElement('input');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = "Submit";
        submitBtn.setAttribute('type', "submit");
        submitBtn.setAttribute('value', "Submit");
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute('value', "Cancel");
        cancelBtn.classList.add('cancel-btn');

        // Appends to DOM
        form.appendChild(input);
        form.appendChild(submitBtn);
        form.appendChild(cancelBtn);
        formContainer.appendChild(form);

        return formContainer;
    }

    function createTaskForm() {
        // Creates Form Popup Container
        const taskFormContainer = document.createElement('div');
        taskFormContainer.classList.add('item-form-popup');
        
        const taskForm = document.createElement('form');
        taskForm.classList.add('item-form-container');

        //Manages Title input area
        const taskInput = document.createElement('input');
        taskInput.setAttribute('type', "text");
        taskInput.setAttribute('name', "item-name");
        taskInput.setAttribute('id', "title");
        taskInput.setAttribute('placeholder', "Title");
        taskInput.classList.add('item-form-text');

        //Manages Description Input Area
        const taskDescInput = document.createElement('input');
        taskDescInput.setAttribute('type', "text");
        taskDescInput.setAttribute('name', "description");
        taskDescInput.setAttribute('id', "description");
        taskDescInput.setAttribute('placeholder', "Description (Optional)")
        taskDescInput.classList.add('item-form-text');

        //Manages Priority Datalist area
        const priorityInput = document.createElement('input');
        priorityInput.setAttribute('list', "priorities");
        priorityInput.setAttribute('placeholder', "Priority")
        priorityInput.setAttribute('id', "priorities")
        const priorityInputList = document.createElement("datalist");
        priorityInputList.setAttribute('id', "priorities-datalist")
        const lowPriority = document.createElement("option");
        lowPriority.setAttribute("value", "Low");
        const medPriority = document.createElement("option");
        medPriority.setAttribute('value', "Medium");
        const highPriority = document.createElement("option");
        highPriority.setAttribute('value',"High");
        priorityInputList.appendChild(lowPriority);
        priorityInputList.appendChild(medPriority);
        priorityInputList.appendChild(highPriority);
        
        
        //Manages Date Area
        const taskDate = document.createElement('input');
        taskDate.setAttribute('type', "date");
        taskDate.setAttribute('name', "due-date");
        taskDate.setAttribute('id', "dueDate");

        // Manages button creation for Form
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('item-submit-btn');
        submitBtn.textContent = "Submit";
        submitBtn.setAttribute('type', "submit");
        submitBtn.setAttribute('value', "Submit");
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute('value', "Cancel");
        cancelBtn.classList.add('item-cancel-btn');

        taskForm.appendChild(taskInput);
        taskForm.appendChild(taskDescInput);
        taskForm.appendChild(priorityInput);
        taskForm.appendChild(priorityInputList);
        taskForm.appendChild(taskDate);
        taskForm.appendChild(submitBtn);
        taskForm.appendChild(cancelBtn);

        taskFormContainer.appendChild(taskForm);
        return taskFormContainer;
    }
    return {createProjectForm, createTaskForm};
})();

export { createPage, createForms }
