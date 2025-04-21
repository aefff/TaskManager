import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../AppContent";
import './Calendar.css';

function WeekView() {
    const {
        setCurrentView,
        selectedDay,
    } = useContext(AppContext)

    useEffect(() => {

    }, [])

    return (
        <div className="WeekView">
            Weeks

            <button className={`monthButton selectedTrue`}
                    onClick={() => setCurrentView('MonthView')}>
                Month view
            </button>

            <button className={`dayButton selectedTrue`}
                    onClick={() => setCurrentView('DayView')}>
                Day view
            </button>

            <div className="week table">
                {["time", "sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day, i) => (
                    <span className={`day header 
                    ${(selectedDay.getDay()===(i - 1))? "selected" : ""}`} key={i}>
                        {
                            (i>0)?
                                `${day.toUpperCase()} 
                                ${new Date(selectedDay.getFullYear(),
                                    selectedDay.getMonth(),
                                    (selectedDay.getDate() - (Math.abs(i - 1 - selectedDay.getDay())))).getDate()}` :
                                day.toUpperCase()
                        }
                    </span>
                ))}
            </div>

            <div className={"scrollable-table"}>
                {Array.from({length: 24}, ((_, index) => index)).map((_, index) => (
                    <div key={index} className="week table row">
                        <span className={"day"}>
                            {`${index.toString().length === 1? '0' : ''}${index}:00`}
                        </span>
                        {Array.from({length: 7}, ((_, index) => index)).map((_, i2) => (
                            <span className={"day"} key={i2}></span>
                        ))}

                    </div>
                ))}
            </div>

        </div>
    )
}

export default WeekView;