import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      status: 'open',
      createdAt: new Date().toISOString(),
      applicants: []
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (taskId, updates) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const applyForTask = (taskId, userId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId && !task.applicants.includes(userId)) {
        return {
          ...task,
          applicants: [...task.applicants, userId]
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, applyForTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}; 