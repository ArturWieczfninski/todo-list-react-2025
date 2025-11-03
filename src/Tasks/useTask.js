import { useState, useEffect } from "react";

const getinitialTasks = () => {
  
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  
  return tasksFromLocalStorage 
  ? JSON.parse(tasksFromLocalStorage) 
  : [];
};
export const useTask = () => {

const [hideDone, setHideDone] = useState(false);

const [tasks, setTasks] = useState(getinitialTasks);

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };
    return {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    toggleHideDone,
    setAllDone,
    addNewTask,
  };
}