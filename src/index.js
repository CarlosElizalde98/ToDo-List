import './style.css';
import {createPage} from './DOMconstructor.js';

function constructPage() {
    createPage.createNavBar();
    createPage.createSideBar();
    createPage.createInbox();
};

constructPage();
