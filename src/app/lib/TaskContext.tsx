'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { Task } from './types';
import { getTasks, saveTasks } from './storage';

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const addTask = (task: Task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const updateTask = (updatedTask: Task) => {
    const newTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}