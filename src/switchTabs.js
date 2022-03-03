import { add } from 'date-fns';
import {createPage, createForms } from './DOMconstructor.js';
import {toDo} from './toDoConstructor.js';

const switchTabs = (()=> {

    const switchTab = (item) => {
        const inbox = document.querySelector('.inbox-container');
        
            if (item == "Inbox") {
                inbox.innerHTML = "";
                const inboxHeader = document.createElement('h1');
                inboxHeader.classList.add('container-header');
                inboxHeader.textContent = item;
                createPage.addInboxItem(inbox, inboxHeader);
                addTaskEventListener();
            }

            else if (item == "Today"){
                inbox.innerHTML = "";
                const inboxHeader = document.createElement('h1');
                inboxHeader.classList.add('container-header');
                inboxHeader.textContent = item;
                createPage.addTodayItems(inbox, inboxHeader );
            }
            else {
            inbox.innerHTML = "";
            inbox.textContent = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = item;
            createPage.addInboxItem(inbox, header);
            addTaskEventListener();
            }
    }

    const assignLinks = () => {

        const items = document.querySelectorAll(".sidebar-item");
        items.forEach((item) => {item.addEventListener("click", () => {
            switchTab(item.childNodes[0].textContent);
        })});

        addSidebarEventListeners();

    };

    function addSidebarEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskForm = document.querySelector('.item-form-popup');
        const taskFormContainer = document.querySelector('.item-form-container');
        const sidebar = document.querySelector(".sidebar-content");

        // Listens for Add Project Button being pressed.
        const addProject = document.querySelector('.add-sidebar-form');
        const projectFormContainer = document.querySelector('.form-container');
        addProject.addEventListener('click', function() {
    
            const form = createForms.createProjectForm();
            sidebar.appendChild(form);
            const projectForm = document.querySelector('.form-popup');
            projectForm.classList.toggle('form-popup-active');
            addProject.classList.toggle('form-popup');

            const projCancelBtn = document.querySelector('.cancel-btn');
            const projSubmitBtn = document.querySelector('.submit-btn');

            projCancelBtn.addEventListener('click', function(event) {
                event.preventDefault();
                projectForm.remove();
                addProject.classList.toggle('form-popup');
            });

            projSubmitBtn.addEventListener('click', function(event) {
                event.preventDefault();
                const title = document.getElementById('project-title').value;
                const id = "Project " + title;
                const newProject = toDo.createProject(title, id);
                toDo.setTaskData(id, newProject);

            });
        });
    };

    function addTaskEventListener() {
       
        const inbox = document.querySelector('.inbox-container');
        const addTask = document.querySelector('.add-taskform');

        addTask.addEventListener('click', () => {

            const form = createForms.createTaskForm();
            inbox.appendChild(form);
            const taskForm = document.querySelector('.item-form-popup');
            addTask.classList.toggle("item-form-popup");
            taskForm.classList.toggle("item-form-popup-active");
            const itemCancelBtn = document.querySelector(".item-cancel-btn");

            itemCancelBtn.addEventListener('click', function(event) {
                event.preventDefault();
                inbox.removeChild(inbox.lastElementChild);
                addTask.classList.toggle("item-form-popup");
            });
            addCardEventListeners();
        });

    }

    function addCardEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskFormContainer = document.querySelector('.item-form-container');
        const taskForm = document.querySelector('.item-form-popup');
        const inbox = document.querySelector('.inbox-container');
      
        // Listens for Task Submit Button being pressed.
        
        const itemSubmitBtn = document.querySelector(".item-submit-btn");
        itemSubmitBtn.addEventListener('click', (event)=> {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priorities").value;
            
            const newTask = toDo.createTask(title, description, dueDate, priority);
           
            inbox.removeChild(inbox.lastElementChild);
            addTask.classList.toggle("item-form-popup");
            
            toDo.setTaskData(title, newTask);
            const taskCard = toDo.createTaskCard(newTask);
            taskFormContainer.reset()
            addTask.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");
            createPage.addTaskCard(taskCard);
        })
    };
        
    function removeCardListener () {
            const removeCardBtn = document.querySelectorAll('.remove-card-btn');
            removeCardBtn.forEach((btn) => {btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.classList.add('active');
                let btnIndexPlace = btn.getAttribute('value');
             
                toDo.removeTaskData(btnIndexPlace);
                switchTabs.switchTab('Inbox');
        })});
    };

    function addRemoveProjectListener () {
        const removeBtn = document.querySelectorAll(".remove-project-button");
        removeBtn.forEach((btn) => {btn.addEventListener('click', (event) => {
            event.preventDefault();
            const indexPlace = btn.getAttribute('id');
            toDo.removeTaskData(indexPlace);
        })});
    }
    
        


    return { switchTab, assignLinks, addTaskEventListener, removeCardListener, addRemoveProjectListener };
})();

export {switchTabs};