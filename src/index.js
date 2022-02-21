import './style.css';
import {createPage} from './DOMconstructor.js';
import { toDo } from './toDoConstructor.js';

function constructPage() {
    createPage.createNavBar();
    createPage.createSideBar();
    createPage.createInbox();
};

constructPage();
