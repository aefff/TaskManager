import React from 'react';

function TaskForm({ setCurrentView }) {
    return (
        <div>
            <p>Welcome to the task form</p>
            <button onClick={() => setCurrentView('App')}>Go to homepage</button>
        </div>
    );
}

export default TaskForm;