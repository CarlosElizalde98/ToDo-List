import { createPage, createForms } from "./DOMconstructor.js";
import { toDo, project } from "./toDoConstructor.js";

const switchTabs = (() => {
  const switchTab = (item) => {
    const inbox = document.querySelector(".inbox-container");

    if (
      item === "Inbox" ||
      (item !== "Inbox" && item !== "Today" && item !== "This Week")
    ) {
      const inboxHeader = resetDefaultInboxHeader(inbox, item);
      createPage.addDefaultInboxItem(inbox, inboxHeader);
      addTaskEventListener();
    } else if (item == "Today" || item == "This Week") {
      const inboxHeader = resetDefaultInboxHeader(inbox, item);
      createPage.addDefaultInboxItem(inbox, inboxHeader);
    } else {
      return;
    }
  };

  function resetDefaultInboxHeader(inbox, item) {
    inbox.textContent = "";
    const inboxHeader = document.createElement("h1");
    inboxHeader.classList.add("container-header");
    inboxHeader.setAttribute("id", "container-header");
    inboxHeader.textContent = item;
    return inboxHeader;
  }

  function addProjectListeners() {
    const projCancelBtn = document.querySelector(".cancel-btn");
    const projSubmitBtn = document.querySelector(".submit-btn");
    const addProjectBtn = document.getElementById("add-sidebar-form");
    const projectSection = document.querySelector(".project-content");

    addProjectBtn.addEventListener("click", (event) => {
      event.preventDefault();
      createPage.showProjectFormPopup();
    });

    projCancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      createPage.hideProjectFormPopup();
    });

    projSubmitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const projectTitle = document.getElementById("project-title");
      handleSubmit(projectTitle.value, projectSection);
      projectTitle.value = "";
    });
  }

  const addSwitchTabListener = (item) => {
    item.addEventListener("click", () => {
      switchTab(item.innerText);
    });
  };

  const addRemoveProjectListener = (projects, button) => {
    button.addEventListener("click", () => {
      _handleProjectRemoval(projects, button);
    });
  };

  function handleSubmit(projectTitle, section) {
    const id = projectTitle + " Project";
    const tasks = [];
    const newProject = project.createProject(projectTitle, id, tasks);
    toDo.setTaskData(id, newProject);
    createPage.hideProjectFormPopup();
    createPage.addUserProject(toDo.getTaskData(id), section);
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
      _addCardEventListeners();
    });
  }

  function _addCardEventListeners() {
    const addTask = document.querySelector(".add-taskform");
    const taskForm = document.querySelector(".item-form-popup");
    const inbox = document.querySelector(".inbox-container");
    // Listens for Task Submit Button being pressed.
    const itemSubmitBtn = document.querySelector(".item-submit-btn");
    itemSubmitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      _submitTaskInfo(addTask, taskForm, inbox);
    });
  }

  function removeCardListener() {
    const removeCardBtn = document.querySelectorAll(".remove-card-btn");
    const currentPage = document.querySelector(".container-header").textContent;
    removeCardBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        btn.classList.add("active");
        let btnIndexPlace = btn.getAttribute("value");
        let task = project.getProjectTask(
          btnIndexPlace,
          project.getProject(currentPage)
        );
        let selectedProj = project.getProject(currentPage);
        project.removeTask(task, selectedProj);
        switchTabs.switchTab(currentPage);
      });
    });
  }

  function _submitTaskInfo(addTask, taskForm, inbox) {
    let projectName = document.querySelector(".container-header").textContent;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priorities-datalist").value;
    const location = document.getElementById("container-header").value;

    const newTask = toDo.createTask(
      title,
      description,
      dueDate,
      priority,
      location
    );

    inbox.removeChild(inbox.lastElementChild);
    addTask.classList.toggle("item-form-popup");
    project.checkTasks(newTask);
    project.addTaskToProject(newTask, project.getProject(projectName));
    const taskCard = createPage.createTaskCard(newTask);
    // taskFormContainer.reset()
    addTask.classList.remove("item-form-popup");
    taskForm.classList.remove("item-form-popup-active");
    createPage.addDefaultTaskCard(taskCard);
  }

  function _handleProjectRemoval(sidebar, removeBtn) {
    const indexPlace = removeBtn.getAttribute("id");

    project.removeProject(project.getProject(indexPlace));
    createPage.resetSection(sidebar, createPage.createSideBar);
    switchTab("Inbox");
  }

  return {
    switchTab,
    addTaskEventListener,
    removeCardListener,
    addProjectListeners,
    addRemoveProjectListener,
    addSwitchTabListener,
  };
})();

export { switchTabs };
