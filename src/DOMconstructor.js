const createPage = (()=> {
    const body = document.querySelector('#content');

    const createNavBar = () => {
        const navBar = document.createElement('div');
        navBar.classList.add('navbar');

        const navBarText = document.createElement('h1');
        navBarText.classList.add('navbar-text');

        navBar.appendChild(navBarText);
        body.appendChild(navBar);
    }

    const createSideBar = () => {
        const sideBar = document.createElement('div');
        sideBar.classList.add('sidebar-container');


        body.appendChild(sideBar);
    }

    const createInbox= () => {
        const inbox = document.createElement('div');
        inbox.classList.add('inbox-container');

        body.appendChild(inbox);
    }

    return { createNavBar, createSideBar, createInbox };
})();

export { createPage }
