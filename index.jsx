import React, {useContext} from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider , AppContext} from "./AppContent";
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import Lost from './components/Lost.jsx';
import MonthView from './components/calendar/MonthView.jsx';
import WeekView from './components/calendar/WeekView.jsx';
import DayView from './components/calendar/DayView.jsx';

function App() {

    const { currentView, setCurrentView } = useContext(AppContext);

    return (
        <div>
            {
                currentView === 'App' ? (
                    <>
                        <h1>Welcome to the Task Manager</h1>
                        <p>Start managing your tasks here!</p>
                        <button onClick={() => setCurrentView('TaskForm')}>Add a task</button>
                        <button onClick={() => setCurrentView('TaskList')}>Go to task List</button>
                        <button onClick={() => setCurrentView('MonthView')}>View your calendar</button>
                    </>

                ) : currentView === 'TaskForm' ? (<TaskForm/>
                ) : currentView === 'TaskList' ? (<TaskList/>
                ) : currentView === 'MonthView' ? (<MonthView/>
                ) : currentView === 'WeekView' ? (<WeekView/>
                ) : currentView === 'DayView' ? (<DayView/>
                ) : (<Lost/>)
            }
        </div>
    )
}

const root = createRoot(document.getElementById('app'));

root.render(
    <AppProvider>
        <App/>
    </AppProvider>
);
