import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [currentView, setCurrentView] = useState('App');
    const [tasks, setTasks] = useState([]); // Array of task objects
    const [editingTask, setEditingTask] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingFlag, setEditingFlag] = useState(false);

    const addTask = (task) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((_, index) => index !== id));
    };

    const editTask = (id, component, value) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[id] = { ...updatedTasks[id], [component]: value };
            return updatedTasks;
        });
    };

    return (
        <AppContext.Provider
            value={{
                currentView, setCurrentView,
                editingTask, setEditingTask,
                editingIndex, setEditingIndex,
                editingFlag, setEditingFlag,
                tasks, setTasks,
                addTask, deleteTask,
                editTask,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
