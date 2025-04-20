import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import Lost from './components/Lost.jsx';
import MonthView from './components/calendar/MonthView.jsx';

function App() {

    const [currentView, setCurrentView] = useState('App');
    const [tasks, setTasks] = useState([]); // 💡 Array of task objects
    const [editingTask, setEditingTask] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingFlag, setEditingFlag] = useState(false);

    const addTask = (task) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((_, index) => index !== id));
    }

    const editTask = (id, component, value) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[id] = { ...updatedTasks[id], [component]: value };
            return updatedTasks;
        })
    }

    return (
        <div>
            {currentView === 'App' ? (
                <>
                    <h1>Welcome to the Task Manager</h1>
                    <p>Start managing your tasks here!</p>

                    <button onClick={() => setCurrentView('TaskForm')}>Add a task</button>
                    <button onClick={() => setCurrentView('TaskList')}>Go to task List</button>
                    <button onClick={() => setCurrentView('MonthView')}>View your calendar</button>
                </>
            ) : currentView === 'TaskForm' ? (
                <TaskForm
                    setCurrentView={setCurrentView}
                    addTask={addTask}
                    setTasks={setTasks}
                    editingTask={editingTask}
                    editingIndex={editingIndex}
                    setEditingTask={setEditingTask}
                    setEditingIndex={setEditingIndex}
                    editingFlag={editingFlag}
                />
            ) : currentView === 'TaskList' ? (
                <TaskList
                    setCurrentView={setCurrentView}
                    tasks={tasks}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    setEditingTask={setEditingTask}
                    setEditingIndex={setEditingIndex}
                    setEditingFlag={setEditingFlag}
                />
            ) : currentView === 'MonthView' ? (
                <MonthView
                    setCurrentView={setCurrentView}
                />
            ) : (
                <Lost setCurrentView={setCurrentView} />
            )}
        </div>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
