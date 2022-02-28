import { add } from 'date-fns';
import {createPage } from './DOMconstructor.js';
import {toDo} from './toDoConstructor.js';

const switchTabs = (()=> {

    const switchTab = (item) => {
        const inbox = document.querySelector('.inbox-container');
        // addSidebarEventListeners();
        // addCardEventListeners();
            if (item == "Inbox") {
                inbox.innerHTML = "";
                const inboxHeader = document.createElement('h1');
                inboxHeader.classList.add('container-header');
                inboxHeader.textContent = item;
                createPage.addInboxItem(inbox, inboxHeader);
                addSidebarEventListeners();
                addCardEventListeners();
                addTaskEventListener();
            }
            else {
            inbox.innerHTML = "";
            inbox.textContent = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = item;
            inbox.appendChild(header);
    
            }
    }

    const assignLinks = () => {

        // addSidebarEventListeners();
        // addCardEventListeners();
        
        const items = document.querySelectorAll(".sidebar-item");
        items.forEach((item) => {item.addEventListener("click", () => {
            switchTab(item.textContent);
        })});

        addSidebarEventListeners();
        addCardEventListeners();
        addTaskEventListener();
    };

    function addSidebarEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskForm = document.querySelector('.item-form-popup');
        const taskFormContainer = document.querySelector('.item-form-container');

        // Listens for Add Project Button being pressed.
        const addProject = document.querySelector('.add-sidebar-form');
        addProject.addEventListener('click', () => {
            document.querySelector('.form-popup').style.display = "block";
        });

        // Listens for Cancel Button being pressed
        const cancelbtn = document.querySelector(".cancel-btn");
        cancelbtn.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('.form-popup').style.display = "none";
        });

        // Listens for Project Form Submit button being pressed
        const submitBtn = document.querySelector(".submit-btn");
        submitBtn.addEventListener('click', (event)=> {
            const form = document.querySelector('.form-text')
            event.preventDefault();
            createPage.addSidebarItem(form.value);
            document.querySelector('.form-popup').style.display = "none";
        })
    };

    function addTaskEventListener() {
        const itemCancelBtn = document.querySelector(".item-cancel-btn");
        const taskForm = document.querySelector('.item-form-popup');
    
        const addTask = document.querySelector('.add-taskform');

        addTask.addEventListener('click', () => {
            addTask.classList.toggle("item-form-popup");
            taskForm.classList.toggle("item-form-popup-active");
        });

        itemCancelBtn.addEventListener('click',(event) => {
            event.preventDefault();
            addTask.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");

        })
    }
    function addCardEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskFormContainer = document.querySelector('.item-form-container');
        const taskForm = document.querySelector('.item-form-popup');

    
        // Listens for Task Submit Button being pressed.
        
        const itemSubmitBtn = document.querySelector(".item-submit-btn");
        itemSubmitBtn.addEventListener('click', (event)=> {
            event.preventDefault();
            let indexPlace = 0;
            if (localStorage.length > 0) {
                indexPlace = localStorage.length;
            }
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priorities").value;
            const newTask = toDo.createTask(title, description, dueDate, priority);
            

            toDo.setTaskData(title, newTask);
            const taskCard = toDo.createTaskCard(newTask, indexPlace);
            console.log(localStorage.length);
            taskFormContainer.reset()
            addTask.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");
            createPage.addTaskCard(taskCard);
        })

        // // Listens for Task Card Remove Button to be pressed.
        // const removeCardBtn = document.querySelectorAll('.remove-card-btn');
        // removeCardBtn.forEach((btn) => {btn.addEventListener('click', (e) => {
        //     btn.classList.add('active');
        //     let btnIndexPlace = btn.getAttribute('value');
        //     toDo.removeTaskData(localStorage.key(btnIndexPlace));
        //     switchTabs.switchTab('Inbox');
        // })});
    };
        
    function removeCardListener () {
            const removeCardBtn = document.querySelectorAll('.remove-card-btn');
            removeCardBtn.forEach((btn) => {btn.addEventListener('click', (e) => {
            btn.classList.add('active');
            let btnIndexPlace = btn.getAttribute('value');
            toDo.removeTaskData(localStorage.key(btnIndexPlace));
            switchTabs.switchTab('Inbox');
        })});
    };
    
        


    return { switchTab, assignLinks, addCardEventListeners, removeCardListener };
})();

export {switchTabs};