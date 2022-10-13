import { switchTabs } from "./switchTabs.js";
import { toDo } from "./toDoConstructor.js";

const createPage = (() => {
  const body = document.querySelector("#content");

  const createNavBar = () => {
    const navBar = document.createElement("div");
    navBar.classList.add("navbar");

    const navBarText = document.createElement("div");
    navBarText.classList.add("navbar-text");
    const content = addNavBarText();

    navBarText.appendChild(content);
    navBar.appendChild(navBarText);
    body.appendChild(navBar);
  };

  const createSideBar = () => {
    const sideBar = document.createElement("div");
    sideBar.classList.add("sidebar-container");
    const sidebarContent = document.createElement("div");
    sidebarContent.classList.add("sidebar-content");

    const inbox = addProjectButton("Inbox");
    const today = addProjectButton("Today");
    const thisWeek = addProjectButton("This Week");

    switchTabs.addSwitchTabListener(inbox);
    switchTabs.addSwitchTabListener(today);
    switchTabs.addSwitchTabListener(thisWeek);

    const projects = createProjectSection();
    sidebarContent.appendChild(inbox);
    sidebarContent.appendChild(today);
    sidebarContent.appendChild(thisWeek);

    sideBar.appendChild(sidebarContent);
    sideBar.appendChild(projects);
    body.appendChild(sideBar);

    populateProjects(toDo.checkProjectLocalStorage(), projects);
    switchTabs.addProjectListeners();
  };

  const createProjectSection = () => {
    const form = createForms.createProjectForm();
    const projects = document.createElement("section");
    projects.classList.add("project-content");
    const sidebarHeading = document.createElement("h2");
    sidebarHeading.textContent = "Projects";
    sidebarHeading.classList.add("inbox-header");

    const taskButton = addProjectButton("Add Project");
    taskButton.setAttribute("id", "add-sidebar-form");

    projects.appendChild(sidebarHeading);
    projects.appendChild(taskButton);
    projects.appendChild(form);

    return projects;
  };

  const createInbox = () => {
    const inbox = document.createElement("div");
    inbox.classList.add("inbox-container");

    const header = document.createElement("h1");
    header.classList.add("container-header");
    header.setAttribute("id", "container-header");
    header.textContent = "Inbox";

    const taskButton = addInboxButton("Add Task");
    taskButton.classList.add("add-taskform");

    inbox.appendChild(header);
    inbox.appendChild(taskButton);

    body.appendChild(inbox);
    populateInbox(toDo.checkCardLocalStorage());
  };

  const addSidebarItem = (item) => {
    const newItem = addProjectButton(item);
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-project-button");
    removeBtn.setAttribute("id", item);
    removeBtn.textContent = "X";
    const newItemName = newItem.getAttribute("name");
    newItem.appendChild(removeBtn);

    const addTask = document.getElementById("add-sidebar-form");
    newItem.addEventListener("click", () => {
      switchTabs.switchTab(newItemName);
    });

    addTask.parentNode.insertBefore(newItem, addTask);
  };

  const addDefaultInboxItem = (inbox, header) => {
    const taskButton = addInboxButton("Add Task");
    taskButton.classList.add("add-taskform");
    inbox.appendChild(header);

    let tasks = toDo.checkCardLocalStorage();
    if (tasks.length > 0) {
      tasks.map((task) => {
        let taskCard = createTaskCard(task);
        inbox.appendChild(taskCard);
      });
      switchTabs.removeCardListener();
    }
    inbox.appendChild(taskButton);
  };

  const addScheduledItems = (inbox, header) => {
    inbox.appendChild(header);
    let title = header.textContent;
    for (let i = 0; i < localStorage.length; i++) {
      let taskObject = toDo.getTaskData(localStorage.key(i));
      if (taskObject.hasOwnProperty("dueDate")) {
        const result = toDo.checkTaskCardDate(title, taskObject);
        if (result != null) {
          const card = createTaskCard(result);
          addScheduledCard(inbox, card);
        }
      }
    }
  };

  const addScheduledCard = (inbox, taskCard) => {
    inbox.appendChild(taskCard);
    switchTabs.removeCardListener();
  };

  const addDefaultTaskCard = (taskCard) => {
    const inbox = document.querySelector(".inbox-container");
    const taskFormButton = document.querySelector(".add-taskform");
    inbox.insertBefore(taskCard, taskFormButton);
    switchTabs.removeCardListener();
  };

  function addProjectButton(heading) {
    const option = document.createElement("div");
    option.classList.add("sidebar-item");
    option.setAttribute("name", heading);
    const optionText = document.createElement("p");
    optionText.classList.add("sidebar-item-heading");
    optionText.textContent = heading;
    option.appendChild(optionText);

    return option;
  }

  function addInboxButton(heading) {
    const option = document.createElement("div");
    option.classList.add("inbox-item");
    option.textContent = heading;

    return option;
  }

  function createProjectCard(projectObj) {
    const option = document.createElement("div");
    option.classList.add("sidebar-item");
    option.setAttribute("name", projectObj.title);
    const optionText = document.createElement("p");
    optionText.classList.add("sidebar-item-heading");
    optionText.textContent = projectObj.id;
    option.appendChild(optionText);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-project-button");
    removeBtn.setAttribute("id", projectObj.id);
    removeBtn.textContent = "X";
    option.appendChild(removeBtn);

    return option;
  }

  function createTaskCard(taskObject) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card-container");

    const leftPanel = document.createElement("div");
    leftPanel.classList.add("left-panel");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "completed-check");

    const taskCardTitle = document.createElement("h1");
    taskCardTitle.classList.add("taskcard-title");
    taskCardTitle.setAttribute("id", taskObject.title);
    taskCardTitle.textContent = taskObject.title;

    const taskCardDesc = document.createElement("p");
    taskCardDesc.classList.add("taskcard-description");
    // taskCardDesc.setAttribute('id', taskObject.description);
    taskCardDesc.textContent = taskObject.description;

    const rightPanel = document.createElement("div");
    rightPanel.classList.add("right-panel");
    const taskCardDate = document.createElement("p");
    taskCardDate.classList.add("taskcard-date");
    taskCardDate.textContent = taskObject.dueDate;

    const taskCardPriority = document.createElement("p");
    taskCardPriority.classList.add("taskcard-priority");
    taskCardPriority.textContent = taskObject.priority;

    const removeTaskCardBtn = document.createElement("button");
    removeTaskCardBtn.classList.add("remove-card-btn");
    removeTaskCardBtn.setAttribute("type", "submit");
    removeTaskCardBtn.setAttribute("value", taskObject.title);
    removeTaskCardBtn.textContent = "X";

    leftPanel.appendChild(checkBox);
    leftPanel.appendChild(taskCardTitle);
    leftPanel.appendChild(taskCardDesc);
    taskCard.appendChild(leftPanel);

    rightPanel.appendChild(taskCardDate);
    rightPanel.appendChild(taskCardPriority);
    rightPanel.appendChild(removeTaskCardBtn);
    taskCard.appendChild(rightPanel);
    // taskCard.appendChild(taskCardDate);
    // taskCard.appendChild(taskCardPriority);
    // taskCard.appendChild(removeTaskCardBtn);

    return taskCard;
  }

  function addNavBarText() {
    const navbarText = document.createElement("h1");
    navbarText.textContent = "To-Do List";
    return navbarText;
  }

  const addUserProject = (projectObj, section) => {
    const newItem = createProjectCard(projectObj);
    const removeBtn = newItem.children[1];
    switchTabs.addSwitchTabListener(newItem.children[0]);
    switchTabs.addRemoveProjectListener(section, removeBtn);
    section.appendChild(newItem);
  };

  const showProjectFormPopup = () => {
    document.querySelector(".form-popup").style.display = "block";
    document.getElementById("add-sidebar-form").style.display = "none";
  };

  const hideProjectFormPopup = () => {
    document.querySelector(".form-popup").style.display = "none";
    document.getElementById("add-sidebar-form").style.display = "block";
  };

  const populateProjects = (projects, section) => {
    projects.forEach((project) => {
      addUserProject(project, section);
    });
  };

  const populateInbox = (items) => {
    items.forEach((item) => {
      let taskCard = createTaskCard(item);
      addDefaultTaskCard(taskCard);
    });
  };

  const resetSection = (section, callback) => {
    section.innerText = "";
    callback();
  };

  return {
    createNavBar,
    createSideBar,
    createProjectSection,
    createInbox,
    addSidebarItem,
    addDefaultInboxItem,
    addDefaultTaskCard,
    addScheduledItems,
    createProjectCard,
    createTaskCard,
    addUserProject,
    showProjectFormPopup,
    hideProjectFormPopup,
    populateProjects,
    resetSection,
  };
})();

const createForms = (() => {
  function createProjectForm() {
    // Create Form Popup container
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-popup");

    // Creates Form Container
    const form = document.createElement("form");
    form.classList.add("form-container");

    // Creates Form Contents
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "item-name");
    input.setAttribute("id", "project-title");
    input.classList.add("form-text");
    const submitBtn = document.createElement("input");
    submitBtn.classList.add("submit-btn");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Submit");
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("value", "Cancel");
    cancelBtn.classList.add("cancel-btn");

    // Appends to DOM
    form.appendChild(input);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);
    formContainer.appendChild(form);

    return formContainer;
  }

  function createTaskForm() {
    // Creates Form Popup Container
    const taskFormContainer = document.createElement("div");
    taskFormContainer.classList.add("item-form-popup");

    const taskForm = document.createElement("form");
    taskForm.classList.add("item-form-container");

    //Manages Title input area
    const taskInput = document.createElement("input");
    taskInput.setAttribute("type", "text");
    taskInput.setAttribute("name", "item-name");
    taskInput.setAttribute("id", "title");
    taskInput.setAttribute("placeholder", "Title");
    taskInput.classList.add("item-form-text");

    //Manages Description Input Area
    const taskDescInput = document.createElement("input");
    taskDescInput.setAttribute("type", "text");
    taskDescInput.setAttribute("name", "description");
    taskDescInput.setAttribute("id", "description");
    taskDescInput.setAttribute("placeholder", "Description (Optional)");
    taskDescInput.classList.add("item-form-text");

    //Manages Priority Datalist area

    const priorityInputList = document.createElement("select");
    priorityInputList.setAttribute("id", "priorities-datalist");
    const lowPriority = document.createElement("option");
    lowPriority.setAttribute("value", "Low");
    lowPriority.textContent = "Low";
    const medPriority = document.createElement("option");
    medPriority.setAttribute("value", "Medium");
    medPriority.textContent = "Medium";
    const highPriority = document.createElement("option");
    highPriority.setAttribute("value", "High");
    highPriority.textContent = "High";
    priorityInputList.appendChild(lowPriority);
    priorityInputList.appendChild(medPriority);
    priorityInputList.appendChild(highPriority);

    //Manages Date Area
    const taskDate = document.createElement("input");
    taskDate.setAttribute("type", "date");
    taskDate.setAttribute("name", "due-date");
    taskDate.setAttribute("id", "dueDate");

    // Manages button creation for Form
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("item-submit-btn");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Submit");
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("value", "Cancel");
    cancelBtn.classList.add("item-cancel-btn");

    taskForm.appendChild(taskInput);
    taskForm.appendChild(taskDescInput);
    taskForm.appendChild(priorityInputList);
    taskForm.appendChild(taskDate);
    taskForm.appendChild(submitBtn);
    taskForm.appendChild(cancelBtn);

    taskFormContainer.appendChild(taskForm);
    return taskFormContainer;
  }
  return { createProjectForm, createTaskForm };
})();

export { createPage, createForms };
