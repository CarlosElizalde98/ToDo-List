const createPage = (()=> {
    const body = document.querySelector('#content');

    const createNavBar = () => {
        const navBar = document.createElement('div');
        navBar.classList.add('navbar');

        const navBarText = document.createElement('div');
        navBarText.classList.add('navbar-text');
        const content = addNavBarText();

        navBarText.appendChild(content);
        navBar.appendChild(navBarText);
        body.appendChild(navBar);
    }

    const createSideBar = () => {
        const sideBar = document.createElement('div');
        sideBar.classList.add('sidebar-container');
        const sidebarContent = document.createElement('div');
        sidebarContent.classList.add('sidebar-content');

        const inbox = addTaskButton("Inbox");
        const today = addTaskButton("Today");
        const thisWeek = addTaskButton("This Week");

        const sidebarHeading = document.createElement('h2');
        sidebarHeading.textContent = "Projects";
        sidebarHeading.classList.add("inbox-header");

        const taskButton = addTaskButton("Add Project");
        taskButton.classList.add('add-sidebar-form');
        const form = createForms.createProjectForm();

        sidebarContent.appendChild(inbox);
        sidebarContent.appendChild(today);
        sidebarContent.appendChild(thisWeek);
        sidebarContent.appendChild(sidebarHeading);
        sidebarContent.appendChild(taskButton);
        sidebarContent.appendChild(form);

        sideBar.appendChild(sidebarContent);
        body.appendChild(sideBar);
    }

    const addSidebarItem = (item) => {
        const newItem = addTaskButton(item);
        const sidebarContent = document.querySelector('.sidebar-content');
        sidebarContent.appendChild(newItem);
    }
     
    const addInboxItem = (inbox, header) => {
        // const newItem = addInboxButton(item);
        // const inboxContent = document.querySelector(".inbox-container");
        // inboxContent.appendChild(newItem);

        const taskButton = addInboxButton("Add Task");
        taskButton.classList.add('add-taskform');
        const form = createForms.createTaskForm();

        inbox.appendChild(header);
        inbox.appendChild(taskButton);
        inbox.appendChild(form);
    }

    const createInbox = () => {
        const inbox = document.createElement('div');
        inbox.classList.add('inbox-container');
       
        const header = document.createElement('h1');
        header.classList.add('container-header');
        header.textContent = "Inbox";

        const taskButton = addInboxButton("Add Task");
        taskButton.classList.add('add-taskform');
        const form = createForms.createTaskForm();
        

        inbox.appendChild(header);
        inbox.appendChild(taskButton);
        inbox.appendChild(form);

        body.appendChild(inbox);
    }

    function addNavBarText() {
        const navbarText = document.createElement('h1');
        navbarText.textContent = "To-Do List";
        return navbarText;
    };

    function addTaskButton(heading) {
        const option = document.createElement('div');
        option.classList.add('sidebar-item');
        option.textContent = heading;

        return option;

    }

    function addInboxButton(heading) {
        const option = document.createElement('div');
        option.classList.add('inbox-item');
        option.textContent = heading;

        return option;
    }

    return { createNavBar, createSideBar, createInbox, addSidebarItem, addInboxItem };
})();

const switchTabs = (()=> {

    const switchTab = (item) => {
        const inbox = document.querySelector('.inbox-container');
            // inbox.innerHTML = "";
            if (item === "Inbox") {
                inbox.innerHTML = "";
                const header = document.createElement('h1');
                header.classList.add('container-header');
                header.textContent = item;
                // inbox.appendChild(header);
                // createPage.addInboxItem(item);
                createPage.addInboxItem(inbox, header);
            }
            inbox.innerHTML = "";
            inbox.textContent = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = item;
            inbox.appendChild(header);
            createPage.addInboxItem(inbox, header);
    }

    const assignLinks = () => {
        const items = document.querySelectorAll(".sidebar-item");
        items.forEach((item) => {item.addEventListener("click", () => {
            switchTabs.switchTab(item.textContent);
            addEventListeners();
        })});
    };

    function addEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskBtn = document.querySelector('.add-taskform');
        const taskForm = document.querySelector('.item-form-popup');
        const taskFormContainer = document.querySelector('.item-form-container');

        addTask.addEventListener('click', () => {
            taskBtn.classList.toggle("item-form-popup");
            taskForm.classList.toggle("item-form-popup-active");
        });

        const addProject = document.querySelector('.add-sidebar-form');
        addProject.addEventListener('click', () => {
            document.querySelector('.form-popup').style.display = "block";
        });

        const cancelbtn = document.querySelector(".cancel-btn");
        cancelbtn.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('.form-popup').style.display = "none";
        });

        const itemCancelBtn = document.querySelector(".item-cancel-btn");
        itemCancelBtn.addEventListener('click',(event) => {
            event.preventDefault();
            taskBtn.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");

        })

        const submitBtn = document.querySelector(".submit-btn");
        submitBtn.addEventListener('click', (event)=> {
            const form = document.querySelector('.form-text')
            event.preventDefault();
            createPage.addSidebarItem(form.value);
            document.querySelector('.form-popup').style.display = "none";
            switchTabs.assignLinks();
        })

        const itemSubmitBtn = document.querySelector(".item-submit-btn");
        itemSubmitBtn.addEventListener('click', (event)=> {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priorities").value;
            const newTask = toDo.createTask(title, description, dueDate, priority);
            console.log(newTask);
            taskFormContainer.reset()

        })
    }

    return { switchTab, assignLinks }
})();

const createForms = (() => {

    function createProjectForm() {
        // Create Form Popup container
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-popup');

        // Creates Form Container
        const form = document.createElement('form');
        form.classList.add('form-container');

        // Creates Form Contents
        const input = document.createElement('input');
        input.setAttribute('type', "text");
        input.setAttribute('name', 'item-name');
        input.classList.add('form-text')
        const submitBtn = document.createElement('input');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = "Submit";
        submitBtn.setAttribute('type', "submit");
        submitBtn.setAttribute('value', "Submit");
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute('value', "Cancel");
        cancelBtn.classList.add('cancel-btn');

        // Appends to DOM
        form.appendChild(input);
        form.appendChild(submitBtn);
        form.appendChild(cancelBtn);
        formContainer.appendChild(form);

        return formContainer;
    }

    function createTaskForm() {
        // Creates Form Popup Container
        const taskFormContainer = document.createElement('div');
        taskFormContainer.classList.add('item-form-popup');
        
        const taskForm = document.createElement('form');
        taskForm.classList.add('item-form-container');

        //Manages Title input area
        const taskInput = document.createElement('input');
        taskInput.setAttribute('type', "text");
        taskInput.setAttribute('name', "item-name");
        taskInput.setAttribute('id', "title");
        taskInput.setAttribute('placeholder', "Title");
        taskInput.classList.add('item-form-text');

        //Manages Description Input Area
        const taskDescInput = document.createElement('input');
        taskDescInput.setAttribute('type', "text");
        taskDescInput.setAttribute('name', "description");
        taskDescInput.setAttribute('id', "description");
        taskDescInput.setAttribute('placeholder', "Description (Optional)")
        taskDescInput.classList.add('item-form-text');

        //Manages Priority Datalist area
        const priorityInput = document.createElement('input');
        priorityInput.setAttribute('list', "priorities");
        priorityInput.setAttribute('placeholder', "Priority")
        priorityInput.setAttribute('id', "priorities")
        const priorityInputList = document.createElement("datalist");
        priorityInputList.setAttribute('id', "priorities-datalist")
        const lowPriority = document.createElement("option");
        lowPriority.setAttribute("value", "Low");
        const medPriority = document.createElement("option");
        medPriority.setAttribute('value', "Medium");
        const highPriority = document.createElement("option");
        highPriority.setAttribute('value',"High");
        priorityInputList.appendChild(lowPriority);
        priorityInputList.appendChild(medPriority);
        priorityInputList.appendChild(highPriority);
        
        
        //Manages Data Area
        const taskDate = document.createElement('input');
        taskDate.setAttribute('type', "date");
        taskDate.setAttribute('name', "due-date");
        taskDate.setAttribute('id', "dueDate");

        // Manages button creation for Form
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('item-submit-btn');
        submitBtn.textContent = "Submit";
        submitBtn.setAttribute('type', "submit");
        submitBtn.setAttribute('value', "Submit");
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute('value', "Cancel");
        cancelBtn.classList.add('item-cancel-btn');

        taskForm.appendChild(taskInput);
        taskForm.appendChild(taskDescInput);
        taskForm.appendChild(priorityInput);
        taskForm.appendChild(priorityInputList);
        taskForm.appendChild(taskDate);
        taskForm.appendChild(submitBtn);
        taskForm.appendChild(cancelBtn);

        taskFormContainer.appendChild(taskForm);
        return taskFormContainer;
    }
    return {createProjectForm, createTaskForm};
})();

export { createPage, switchTabs }
