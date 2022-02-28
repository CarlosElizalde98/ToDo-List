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

    function addCardEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskFormContainer = document.querySelector('.item-form-container');
        const itemCancelBtn = document.querySelector(".item-cancel-btn");
        const taskForm = document.querySelector('.item-form-popup');

        // Listens for Add Task Button being pressed
        addTask.addEventListener('click', () => {
            addTask.classList.toggle("item-form-popup");
            taskForm.classList.toggle("item-form-popup-active");
        });

        itemCancelBtn.addEventListener('click',(event) => {
            event.preventDefault();
            addTask.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");

        })
        // Listens for Task Submit Button being pressed.
        let indexPlace = 0;
        const itemSubmitBtn = document.querySelector(".item-submit-btn");
        itemSubmitBtn.addEventListener('click', (event)=> {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priorities").value;
            const newTask = toDo.createTask(title, description, dueDate, priority);
            

            toDo.setTaskData(title, newTask);
            const taskCard = toDo.createTaskCard(newTask, indexPlace);
            
            taskFormContainer.reset()
            addTask.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");
            createPage.addTaskCard(taskCard);
            indexPlace++;
        })

        // Listens for Task Card Remove Button to be pressed.
        const removeCardBtn = document.querySelectorAll('.remove-card-btn');
        removeCardBtn.forEach((btn) => {btn.addEventListener('click', (e) => {
            btn.classList.add('active');
            let btnIndexPlace = btn.getAttribute('value');
            toDo.removeTaskData(localStorage.key(btnIndexPlace));
            switchTabs.switchTab('Inbox');
        })});
    

    };

    return { switchTab, assignLinks }
})();

export {switchTabs};