import './style.css';
import {createPage, switchTabs } from './DOMconstructor.js';
import { toDo } from './toDoConstructor.js';

const constructPage = (() =>{ 
    createPage.createNavBar();
    createPage.createSideBar();
    createPage.createInbox();

    switchTabs.assignLinks();
    addEventListeners();

    function addEventListeners() {
        const addTask = document.querySelector('.inbox-item');
        addTask.addEventListener('click', () => {
            document.querySelector('.add-item-form').style.display = "block";
        });

        const addProject = document.querySelector('.add-form');
        addProject.addEventListener('click', () => {
            document.querySelector('.form-popup').style.display = "block";
        });

        const cancelbtn = document.querySelector(".cancel-btn");
        cancelbtn.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('.form-popup').style.display = "none";
        });

        const submitBtn = document.querySelector(".submit-btn");
        submitBtn.addEventListener('click', (event)=> {
            const form = document.querySelector('.form-text')
            event.preventDefault();
            createPage.addSidebarItem(form.value);
            document.querySelector('.form-popup').style.display = "none";
            switchTabs.assignLinks();
        })
    }

    
})();



// constructPage();
