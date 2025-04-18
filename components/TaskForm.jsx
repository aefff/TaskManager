import React, {useState} from 'react';

function TaskForm({ setCurrentView , addTask}) {

    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            name,
            startDate,
            endDate,
            description,
            done
        }
        addTask(task);
        setCurrentView("TaskList");
    }

    return (
        <div>
            <p>Welcome to the task form</p>
            <button onClick={() => setCurrentView('App')}>Go to homepage</button><br/><br/>
            <form onSubmit={handleSubmit}>
                <input type={"text"} value={name} onChange={(e) => setName(e.target.value)}/><br/>
                <input type={"date"} value={startDate} onChange={(e) => setStartDate(e.target.value)}/><br/>
                <input type={"date"} value={endDate} onChange={(e) => setEndDate(e.target.value)}/><br/>
                <input type={"text"} value={description} onChange={(e) => setDescription(e.target.value)}/><br/><br/>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    );
}

export default TaskForm;