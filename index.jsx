import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx'
import Lost from './components/Lost.jsx'

function App() {
    const [currentView, setCurrentView] = useState('App'); // State to track the view

    return (
        <div>
            {currentView === 'App' ? (
                <>
                    <h1>Welcome to the Task Manager</h1>
                    <p>Start managing your tasks here!</p>

                    <button onClick={() => setCurrentView('TaskForm')}>Go to Task Form</button>
                    <button onClick={() => setCurrentView('TaskList')}>Go to Task List</button>
                </>
            ) : currentView === 'TaskForm' ? (
                <TaskForm setCurrentView={ setCurrentView } />
            ) : currentView === 'TaskList' ? (
                <TaskList setCurrentView={ setCurrentView } />
            ) : (
                <Lost setCurrentView={ setCurrentView } />
            )}
        </div>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);