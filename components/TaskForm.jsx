import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../AppContent.jsx';

function TaskForm (){
    const {
        setCurrentView,
        addTask,
        setTasks,
        editingTask,
        editingIndex,
        editingFlag,
        setEditingTask,
        setEditingIndex
    } = useContext(AppContext);

    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        console.log("Editing task at: ", editingTask);
        if (editingTask) {
            setName(editingTask.name);
            setStartDate(new Date(editingTask.startDate));
            setEndDate(new Date(editingTask.endDate));
            setDescription(editingTask.description);
            setDone(editingTask.done);
        } else {
            setName("");
            setStartDate(new Date());
            setEndDate(new Date());
            setDescription("");
            setDone(false);
        }
    }, [editingFlag]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !startDate || !endDate || !description || isNaN(startDate.getTime() || isNaN(endDate.getTime()))) {
            alert("You must enter a name; start date; end date and a description");
            return;
        }

        const task = {
            name,
            startDate: startDate.toLocaleDateString(),
            endDate: endDate.toLocaleDateString(),
            description,
            done
        }

        if (!editingTask) {
            addTask(task);
        } else {
            setTasks(prev => {
                const updatedTasks = [...prev];
                updatedTasks[editingIndex] = task;
                setEditingTask(null);
                setEditingIndex(null);
                return updatedTasks;
            })
        }
        setCurrentView("TaskList");
    }


    return (
        <div>
            <p>{editingTask ? `Editing task: ${editingTask.name}` : "Creating a new task"}</p>

            <button onClick={() => setCurrentView('App')}>Go to homepage</button>
            <button onClick={() => setCurrentView('TaskList')}>Go to task List</button>

            <br/><br/>

            <form onSubmit={handleSubmit}>

                <label>Name:</label><br/>
                <input type={"text"} value={name} onChange={(e) =>
                    setName(e.target.value)}/><br/>

                <label>Start date:</label><br/>
                <input type={"date"} value={startDate.toISOString().split('T')[0]}
                       onChange={(e) =>
                           setStartDate(new Date(e.target.value))}/><br/>

                <label>End date:</label><br/>
                <input type={"date"} value={endDate.toISOString().split('T')[0]}
                       onChange={(e) =>
                           setEndDate(new Date(e.target.value))}/><br/>

                <label>Description:</label><br/>
                <input type={"text"} value={description} onChange={(e) =>
                    setDescription(e.target.value)}/><br/><br/>

                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    );
}

export default TaskForm;