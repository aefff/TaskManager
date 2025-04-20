import React, {useContext} from 'react';
import { AppContext } from "../AppContent.jsx";

function TaskList () {

    const {
        setCurrentView,
        tasks,
        deleteTask,
        editTask,
        setEditingTask,
        setEditingIndex,
        setEditingFlag
    } = useContext(AppContext);

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
                <div key={index}>
                    {task.name} |
                    Start date: {task.startDate} |
                    End date: {task.endDate} |
                    Description: {task.description} |
                    Completed: {task.done.toString()}

                    <button onClick={() => {editTask(index, "done", !task.done)}}>
                        {task.done ? "Mark as to do" : "Mark as done"}
                    </button>

                    <button onClick={() => handleDelete(index)}>
                        Delete task
                    </button>

                    <button onClick={() => {
                        setEditingIndex(index);
                        setEditingTask(task);
                        setEditingFlag(prevState => !prevState);
                        setCurrentView("TaskForm");
                    }}>

                        Edit task
                    </button>

                </div>
            ))}
            <button onClick={() => setCurrentView('App')}>Go to homepage</button>
            <button onClick={() => setCurrentView('TaskForm')}>Add a task</button>
        </div>
    );
}

export default TaskList;