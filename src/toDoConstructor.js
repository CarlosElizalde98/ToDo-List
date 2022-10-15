import { isToday, isThisWeek, parse } from "date-fns";

const toDo = (() => {
  const toDoItem = (title, description, dueDate, priority, location) => {
    return { title, description, dueDate, priority, location };
  };

  // const project = (title, id) => {
  //   return { title, id };
  // };

  function createTask(title, description, dueDate, priority, location) {
    const item = toDoItem(title, description, dueDate, priority, location);
    return item;
  }

  // function createProject(title, id) {
  //   const newProject = project(title, id);
  //   return newProject;
  // }

  // const checkCardLocalStorage = () => {
  //   let cardArray = [];
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (!localStorage.key(i).includes("Project")) {
  //         let key = localStorage.key(i);
  //         cardArray.push(getTaskData(key));
  //       }
  //     }
  //   }
  //   return cardArray;
  // };

  // const checkProjectLocalStorage = () => {
  //   let projArray = [];
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i).includes("Project")) {
  //         let key = localStorage.key(i);
  //         projArray.push(getTaskData(key));
  //       }
  //     }
  //   }
  //   return projArray;
  // };

  const setTaskData = (title, taskCard) => {
    localStorage.setItem(title, JSON.stringify(taskCard));
  };

  function getTaskData(title) {
    if (localStorage.getItem(title) !== null) {
      const myTaskCard = JSON.parse(localStorage.getItem(title));
      return myTaskCard;
    }
    return null;
  }

  function removeTaskData(title) {
    localStorage.removeItem(title);
  }

  function checkTaskCardDate(taskObject) {
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
    // createProject,
    // checkProjectLocalStorage,
    setTaskData,
    getTaskData,
    removeTaskData,
    checkTaskCardDate,
    // checkCardLocalStorage,
  };
})();

const project = (() => {
  const projectItem = (title, id, tasks) => {
    return { title, id, tasks };
  };

  const createProject = (title, id, tasks) => {
    return projectItem(title, id, tasks);
  };

  const getProject = (value) => {
    return toDo.getTaskData(value);
  };

  const addTaskToProject = (task, project) => {
    project.tasks.push(task);
    updateLocalStorage(project);
  };

  const removeTask = (task, project) => {
    let updatedArr = project.tasks.filter((item) => item !== task);
    let updatedProj = { ...project, tasks: updatedArr };
    updateLocalStorage(updatedProj);
  };

  const removeProject = (project) => {
    toDo.removeTaskData(project.title);
  };

  const updateLocalStorage = (project) => {
    if (localStorage.getItem(project.title) !== null) {
      toDo.removeTaskData(project.title);
    }
    toDo.setTaskData(project.title, project);
  };

  const checkProjectLocalStorage = () => {
    let projArray = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        projArray.push(toDo.getTaskData(key));
      }
    }
    return projArray;
  };

  const getProjectCards = (project) => {
    let tasks = project.tasks;
    return tasks;
  };

  const getProjectTask = (item, project) => {
    let taskObject = {};
    let tasks = getProjectCards(project);
    tasks.map((task) => {
      if (item === task.title) {
        taskObject = { ...task };
      }
    });
    return taskObject;
  };

  const checkProjectTaskDate = (projectTask) => {
    const result = toDo.checkTaskCardDate(projectTask.title, projectTask);
    console.log(result);
    return result;
  };

  return {
    getProject,
    createProject,
    addTaskToProject,
    addTaskToProject,
    removeTask,
    getProjectCards,
    checkProjectLocalStorage,
    removeProject,
    getProjectTask,
    updateLocalStorage,
    checkProjectTaskDate,
  };
})();
export { toDo, project };
