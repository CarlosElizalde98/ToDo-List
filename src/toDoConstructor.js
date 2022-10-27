import { isToday, isThisWeek, parse } from "date-fns";

const toDo = (() => {
  const toDoItem = (title, description, dueDate, priority, location) => {
    return { title, description, dueDate, priority, location };
  };

  function createTask(title, description, dueDate, priority, location) {
    const item = toDoItem(title, description, dueDate, priority, location);
    return item;
  }

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

  return {
    createTask,
    setTaskData,
    getTaskData,
    removeTaskData,
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
    let taskArr = project.tasks;
    taskArr.push(task);
    project.tasks = [...new Set(taskArr)];

    updateLocalStorage(project);
  };

  const removeTask = (task) => {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let selected = project.getProject(key);
      let updatedArr = selected.tasks.filter(
        (item) => item.title !== task.title
      );

      let updatedProj = { ...selected, tasks: updatedArr };
      updateLocalStorage(updatedProj);
    }
  };

  const removeProject = (project) => {
    toDo.removeTaskData(project.id);
  };

  const updateLocalStorage = (project) => {
    if (localStorage.getItem(project.id) !== null) {
      toDo.removeTaskData(project.id);
    }
    toDo.setTaskData(project.id, project);
  };

  const checkProjectLocalStorage = () => {
    let projArray = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        projArray.push(getProject(key));
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

  const checkProjectTaskDate = (projectTask, project) => {
    let taskObject = projectTask;

    if (taskObject.dueDate !== "") {
      let date = parse(taskObject.dueDate, "yyyy-MM-dd", new Date());
      if (isToday(date)) {
        let todaysCard = "Today";
        return todaysCard;
      } else if (isThisWeek(date)) {
        let thisWeek = "This Week";
        return thisWeek;
      }
    }
    return null;
  };

  const initializeProjects = () => {
    if (localStorage.length === 0) {
      let tasks = [];
      let initialProj = project.createProject("Inbox", "Inbox", tasks);
      let todayProjects = project.createProject("Today", "Today", tasks);
      let thisWeeksProjects = project.createProject(
        "This Week",
        "This Week",
        tasks
      );

      project.updateLocalStorage(initialProj);
      project.updateLocalStorage(todayProjects);
      project.updateLocalStorage(thisWeeksProjects);
    }
  };

  const checkTasks = (projectTask) => {
    let result = checkProjectTaskDate(projectTask, project);

    if (result !== null) {
      if (result === "Today") {
        let todaysProj = getProject("Today");
        addTaskToProject(projectTask, todaysProj);
      } else if (result === "This Week") {
        let thisWeek = getProject("This Week");
        addTaskToProject(projectTask, thisWeek);
      }
    }
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
    initializeProjects,
    checkTasks,
  };
})();
export { toDo, project };
