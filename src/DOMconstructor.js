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

        const addTaskButton = addSidebarContent("Add Task");

        sidebarContent.appendChild(inbox);
        sidebarContent.appendChild(today);
        sidebarContent.appendChild(thisWeek);
        sidebarContent.appendChild(sidebarHeading);
        sidebarContent.appendChild(addTaskButton);

        sideBar.appendChild(sidebarContent);
        body.appendChild(sideBar);
    }

    const createInbox= () => {
        const inbox = document.createElement('div');
        inbox.classList.add('inbox-container');

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


    return { createNavBar, createSideBar, createInbox };
})();

const switchTabs = (()=> {
    const switchTab = (item) => {
        const inbox = document.querySelector('.inbox-container');
        if (item === "Inbox") {
            inbox.innerHTML = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = "Inbox";
            inbox.appendChild(header);
        }
        else if (item === "Today") {
            inbox.innerHTML = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = "Today";
            inbox.appendChild(header);
        }
        else if (item === "This Week"){
            inbox.innerHTML = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = "This Week";
            inbox.appendChild(header);
        }
    }

    return { switchTab }
})()

export { createPage, switchTabs }
