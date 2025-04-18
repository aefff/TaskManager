import React, {useState} from 'react';

function TaskForm({ setCurrentView , addTask}) {

    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !startDate || !endDate || !description || isNaN(startDate.getTime() || isNaN(endDate.getTime()))) {
            alert("You must enter a name; start date; end date and a description");
            return;
        }

        const task = {
            name,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
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

                <input type={"text"} value={name} onChange={(e) =>
                    setName(e.target.value)}/><br/>

                <input type={"date"} value={startDate.toISOString().split('T')[0]} onChange={(e) =>
                    setStartDate(new Date(e.target.value))}/><br/>

                <input type={"date"} value={endDate.toISOString().split('T')[0]} onChange={(e) =>
                    setEndDate(new Date(e.target.value))}/><br/>

                <input type={"text"} value={description} onChange={(e) =>
                    setDescription(e.target.value)}/><br/><br/>

                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    );
}

export default TaskForm;