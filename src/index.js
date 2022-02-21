import './style.css';
import {createPage, switchTabs } from './DOMconstructor.js';
import { toDo } from './toDoConstructor.js';

function constructPage() {
    createPage.createNavBar();
    createPage.createSideBar();
    createPage.createInbox();

    const items = document.querySelectorAll(".inbox-item");
    items.forEach((item) => {item.addEventListener("click", (event) => {
        switchTabs.switchTab(item.textContent);
        console.log(item.textContent);
    })});
};



constructPage();
