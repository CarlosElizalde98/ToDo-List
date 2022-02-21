import './style.css';
import {createPage, switchTabs } from './DOMconstructor.js';
import { toDo } from './toDoConstructor.js';

function constructPage() {
    createPage.createNavBar();
    createPage.createSideBar();
    createPage.createInbox();

    const items = document.querySelectorAll(".inbox-item");
    items.forEach((item) => {item.addEventListener("click", () => {
        switchTabs.switchTab(item.textContent);
    })});

    const addTask = document.querySelector('.add-form');
    addTask.addEventListener('click', () => {
        document.querySelector('.form-popup').style.display = "block";
    });

    const cancelbtn = document.querySelector(".cancel-btn");
    cancelbtn.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.form-popup').style.display = "none";
    });
};



constructPage();
