import React from 'react';

function TaskList({ setCurrentView }) {
    return (
        <div>
            <p>View your task list</p>
            <button onClick={() => setCurrentView('App')}>Go to homepage</button>
        </div>
    );
}

export default TaskList;