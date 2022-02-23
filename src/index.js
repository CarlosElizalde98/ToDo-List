import './style.css';
import {createPage} from './DOMconstructor.js';
import {switchTabs} from './switchTabs.js';
import { toDo } from './toDoConstructor.js';

const constructPage = (() =>{ 
    createPage.createNavBar();
    createPage.createSideBar();
    createPage.createInbox();

    switchTabs.assignLinks();
    // addEventListeners();

    // function addEventListeners() {
    //     const addTask = document.querySelector('.add-taskform');
    //     const taskBtn = document.querySelector('.add-taskform');
    //     const taskForm = document.querySelector('.item-form-popup');
    //     const taskFormContainer = document.querySelector('.item-form-container');

    //     addTask.addEventListener('click', () => {
    //         taskBtn.classList.toggle("item-form-popup");
    //         taskForm.classList.toggle("item-form-popup-active");
    //     });

    //     const addProject = document.querySelector('.add-sidebar-form');
    //     addProject.addEventListener('click', () => {
    //         document.querySelector('.form-popup').style.display = "block";
    //     });

    //     const cancelbtn = document.querySelector(".cancel-btn");
    //     cancelbtn.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         document.querySelector('.form-popup').style.display = "none";
    //     });

    //     const itemCancelBtn = document.querySelector(".item-cancel-btn");
    //     itemCancelBtn.addEventListener('click',(event) => {
    //         event.preventDefault();
    //         taskBtn.classList.remove("item-form-popup");
    //         taskForm.classList.remove("item-form-popup-active");

    //     })

    //     const submitBtn = document.querySelector(".submit-btn");
    //     submitBtn.addEventListener('click', (event)=> {
    //         const form = document.querySelector('.form-text')
    //         event.preventDefault();
    //         createPage.addSidebarItem(form.value);
    //         document.querySelector('.form-popup').style.display = "none";
    //         switchTabs.assignLinks();
    //     })

    //     const itemSubmitBtn = document.querySelector(".item-submit-btn");
    //     itemSubmitBtn.addEventListener('click', (event)=> {
    //         event.preventDefault();
    //         const title = document.getElementById("title").value;
    //         const description = document.getElementById("description").value;
    //         const dueDate = document.getElementById("dueDate").value;
    //         const priority = document.getElementById("priorities").value;
    //         const newTask = toDo.createTask(title, description, dueDate, priority);
    //         console.log(newTask);
    //         taskFormContainer.reset()

    //     })
    // }

    
})();


