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

        const inbox = addSidebarContent("Inbox");
        const today = addSidebarContent("Today");
        const thisWeek = addSidebarContent("This Week");

        const sidebarHeading = document.createElement('h2');
        sidebarHeading.textContent = "Projects";
        sidebarHeading.classList.add("inbox-header");

        const addTaskButton = addSidebarContent("Add Project");
        addTaskButton.classList.add('add-form');
        const form = createForm();

        sidebarContent.appendChild(inbox);
        sidebarContent.appendChild(today);
        sidebarContent.appendChild(thisWeek);
        sidebarContent.appendChild(sidebarHeading);
        sidebarContent.appendChild(addTaskButton);
        sidebarContent.appendChild(form);

        sideBar.appendChild(sidebarContent);
        body.appendChild(sideBar);
    }

    const addSidebarItem = (item) => {
        const newItem = addSidebarContent(item);
        const sidebarContent = document.querySelector('.sidebar-content');
        sidebarContent.appendChild(newItem);
    }

    const createInbox = () => {
        const inbox = document.createElement('div');
        inbox.classList.add('inbox-container');
       
        const header = document.createElement('h1');
        header.classList.add('container-header');
        header.textContent = "Inbox";
        inbox.appendChild(header);

        body.appendChild(inbox);
    }

    function addNavBarText() {
        const navbarText = document.createElement('h1');
        navbarText.textContent = "To-Do List";
        return navbarText;
    };

    function addSidebarContent(heading) {
        const option = document.createElement('div');
        option.classList.add('inbox-item');
        option.textContent = heading;

        return option;

    }

    function createForm() {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-popup');

        const form = document.createElement('form');
        form.classList.add('form-container');
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

        form.appendChild(input);
        form.appendChild(submitBtn);
        form.appendChild(cancelBtn);
        formContainer.appendChild(form);

        return formContainer;
    }


    return { createNavBar, createSideBar, createInbox, addSidebarItem };
})();

const switchTabs = (()=> {

    const switchTab = (item) => {
        const inbox = document.querySelector('.inbox-container');
            inbox.innerHTML = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = item;
            inbox.appendChild(header);
    }

    return { switchTab }
})()

export { createPage, switchTabs }
