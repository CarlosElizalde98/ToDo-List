import { createPage, createForms } from "./DOMconstructor.js";
import { toDo } from "./toDoConstructor.js";

const switchTabs = (() => {
  const switchTab = (item) => {
    const inbox = document.querySelector(".inbox-container");

    if (item == "Inbox") {
      inbox.textContent = "";
      const inboxHeader = document.createElement("h1");
      inboxHeader.classList.add("container-header");
      inboxHeader.setAttribute("id", "container-header");
      inboxHeader.textContent = item;
      createPage.addDefaultInboxItem(inbox, inboxHeader);
      addTaskEventListener();
    } else if (item == "Today" || item == "This Week") {
      inbox.textContent = "";
      const inboxHeader = document.createElement("h1");
      inboxHeader.classList.add("container-header");
      inboxHeader.setAttribute("id", "container-header");
      inboxHeader.textContent = item;
      createPage.addScheduledItems(inbox, inboxHeader);
    } else {
      inbox.textContent = "";
      const header = document.createElement("h1");
      header.classList.add("container-header");
      header.setAttribute("id", "container-header");
      header.textContent = item;
      createPage.addDefaultInboxItem(inbox, header);
      addTaskEventListener();
    }
  };

  const assignLinks = () => {
    const items = document.querySelectorAll(".sidebar-item");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        switchTab(item.childNodes[0].textContent);
      });
    });
    addSidebarEventListeners();
  };

  function addSidebarEventListeners() {
    const sidebar = document.querySelector(".sidebar-content");
    // Listens for Add Project Button being pressed.
    const addProject = document.querySelector(".add-sidebar-form");
    addProject.addEventListener("click", () => {
      addProjectListeners();
    });

    const removeBtn = document.querySelectorAll(".remove-project-button");
    if (removeBtn) {
      removeBtn.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          event.preventDefault();
          handleProjectRemoval(sidebar, btn);
        });
      });
    }
  }

  function addProjectListeners() {
    const sidebar = document.querySelector(".sidebar-content");
    const form = createForms.createProjectForm();
    sidebar.appendChild(form);
    const projectForm = document.querySelector(".form-popup");
    const addProject = document.querySelector(".add-sidebar-form");
    projectForm.classList.toggle("form-popup-active");
    addProject.classList.toggle("form-popup");

    const projCancelBtn = document.querySelector(".cancel-btn");
    const projSubmitBtn = document.querySelector(".submit-btn");

    projCancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      projectForm.remove();
      addProject.classList.toggle("form-popup");
    });

    projSubmitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const title = document.getElementById("project-title").value;
      const id = title + " Project";
      const newProject = toDo.createProject(title, id);
      toDo.setTaskData(id, newProject);
      sidebar.removeChild(sidebar.lastChild);
      addProject.classList.toggle("form-popup");
      createPage.addUserProject(toDo.getTaskData(id));
    });
  }

  function addTaskEventListener() {
    const inbox = document.querySelector(".inbox-container");
    const addTask = document.querySelector(".add-taskform");

    addTask.addEventListener("click", () => {
      const form = createForms.createTaskForm();
      inbox.appendChild(form);
      const taskForm = document.querySelector(".item-form-popup");
      addTask.classList.toggle("item-form-popup");
      taskForm.classList.toggle("item-form-popup-active");
      const itemCancelBtn = document.querySelector(".item-cancel-btn");

      itemCancelBtn.addEventListener("click", (event) => {
        event.preventDefault();
        inbox.removeChild(inbox.lastElementChild);
        addTask.classList.toggle("item-form-popup");
      });
      addCardEventListeners();
    });
  }

  function addCardEventListeners() {
    const addTask = document.querySelector(".add-taskform");
    const taskFormContainer = document.querySelector(".item-form-container");
    const taskForm = document.querySelector(".item-form-popup");
    const inbox = document.querySelector(".inbox-container");
    // Listens for Task Submit Button being pressed.
    const itemSubmitBtn = document.querySelector(".item-submit-btn");
    itemSubmitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      submitTaskInfo(addTask, taskForm, inbox);
    });
  }

  function removeCardListener() {
    const removeCardBtn = document.querySelectorAll(".remove-card-btn");

    removeCardBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        btn.classList.add("active");
        let btnIndexPlace = btn.getAttribute("value");
        const currentPage = document.querySelector(".container-header");
        toDo.removeTaskData(btnIndexPlace);
        switchTabs.switchTab(currentPage.textContent);
      });
    });
  }

  function submitTaskInfo(addTask, taskForm, inbox) {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priorities-datalist").value;
    const location = document.getElementById("container-header").value;
    console.log(location);

    const newTask = toDo.createTask(
      title,
      description,
      dueDate,
      priority,
      location
    );

    inbox.removeChild(inbox.lastElementChild);
    addTask.classList.toggle("item-form-popup");

    toDo.setTaskData(title, newTask);
    const taskCard = toDo.createTaskCard(newTask);
    // taskFormContainer.reset()
    addTask.classList.remove("item-form-popup");
    taskForm.classList.remove("item-form-popup-active");
    createPage.addDefaultTaskCard(taskCard);
  }

  function handleProjectRemoval(sidebar, removeBtn) {
    const indexPlace = removeBtn.getAttribute("id");
    toDo.removeTaskData(indexPlace);
    sidebar.textContent = "";
    createPage.createSideBar();
    assignLinks();
    switchTabs.switchTab("Inbox");
  }

  return {
    switchTab,
    assignLinks,
    addTaskEventListener,
    removeCardListener,
  };
})();

export { switchTabs };
