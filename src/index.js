import "./style.css";
import { createPage } from "./DOMconstructor.js";
import { switchTabs } from "./switchTabs.js";
// import { toDo } from './toDoConstructor.js';

const constructPage = (() => {
  createPage.createNavBar();
  createPage.createSideBar();
  createPage.createInbox();

  // switchTabs.switchTab('Inbox');
  switchTabs.assignLinks();

  switchTabs.addTaskEventListener();
})();
