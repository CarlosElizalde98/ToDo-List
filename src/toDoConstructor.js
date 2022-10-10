import { isToday, isThisWeek, parse } from "date-fns";

const toDo = (() => {
  const toDoItem = (title, description, dueDate, priority, location) => {
    return { title, description, dueDate, priority, location };
  };

  const project = (title, id) => {
    return { title, id };
  };

  function createTask(title, description, dueDate, priority, location) {
    const item = toDoItem(title, description, dueDate, priority, location);
    return item;
  }

  function createProject(title, id) {
    const newProject = project(title, id);
    return newProject;
  }

  const checkCardLocalStorage = () => {
    let cardArray = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (!localStorage.key(i).includes("Project")) {
          let key = localStorage.key(i);
          cardArray.push(getTaskData(key));
        }
      }
    }
    return cardArray;
  };

  const checkProjectLocalStorage = () => {
    let projArray = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).includes("Project")) {
          let key = localStorage.key(i);
          projArray.push(getTaskData(key));
        }
      }
    }
    return projArray;
  };

  const setTaskData = (title, taskCard) => {
    localStorage.setItem(title, JSON.stringify(taskCard));
  };

  function getTaskData(title) {
    const myTaskCard = JSON.parse(localStorage.getItem(title));
    return myTaskCard;
  }

  function removeTaskData(title) {
    console.log(title);
    localStorage.removeItem(title);
  }

  function checkTaskCardDate(title, taskObject) {
    if (title === "Today") {
      let date = parse(taskObject.dueDate, "yyyy-MM-dd", new Date());
      if (isToday(date)) {
        let todaysCard = taskObject;
        return todaysCard;
      }
    } else if (title === "This Week") {
      let date = parse(taskObject.dueDate, "yyyy-MM-dd", new Date());
      if (isThisWeek(date)) {
        let thisWeek = taskObject;
        return thisWeek;
      }
    } else {
      return null;
    }
  }

  return {
    createTask,
    createProject,
    checkProjectLocalStorage,
    setTaskData,
    getTaskData,
    removeTaskData,
    checkTaskCardDate,
    checkCardLocalStorage,
  };
})();
export { toDo };
