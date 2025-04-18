import React from 'react';

function TaskList({ setCurrentView , tasks , deleteTask }) {

    const handleDelete = (id) => {
        const deleteConf = window.confirm("Are you sure you want to delete this task?");
        if (deleteConf) {
            deleteTask(id);
        }
    }

    return (
        <div>
            <p>View your task list</p>
            {tasks.map((task, index) => (
                <div key={index}>{task.name} | Start date: {task.startDate} | End date: {task.endDate} | Description: {task.description} | Completed: {task.done.toString()} <button onClick={() => handleDelete(index)}>Delete task</button></div>
            ))}
            <button onClick={() => setCurrentView('App')}>Go to homepage</button>
        </div>
    );
}

export default TaskList;