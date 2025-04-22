import React, { useContext, useState } from 'react';
import {AppContext} from "../../AppContent";
import './Calendar.css';

function DayView() {
    const {
        setCurrentView,
        selectedDay,
    } = useContext(AppContext);

    const [thisDay, setThisDay] = useState(new Date(selectedDay));

    return (
        <div className="DayView">
            Day: {thisDay.toLocaleDateString("en-GB")}
            <button className={`monthButton selectedTrue`} onClick={() => {
                setCurrentView('MonthView');
            }}>
                Month view
            </button>

            <button className={`weekButton selectedTrue`} onClick={() => {
                setCurrentView('WeekView');
            }}>
                Week view
            </button>

            <button onClick={() => {
                setThisDay(prevState =>
                    new Date(prevState.setDate(prevState.getDate() - 1)));
            }}>
                &lt;
            </button>

            <button onClick={() => {
                setThisDay(prevState =>
                    new Date(prevState.setDate(prevState.getDate() + 1)))
            }}>
                &gt;
            </button>

            <div className={'scrollable-table'}>

                <span className={`days table row`}>
                    <span className={"day"}>
                        TIME
                    </span>
                    <span
                        className={`day header ${(selectedDay.toDateString() === thisDay.toDateString()) ? "selected" : ""}`}>
                        SCHEDULE
                    </span>
                </span>

                {Array.from({length: 24}, (_, i) => (
                    <div key={i} className="days table row">
                        <span className={'day'}>
                            {`${i.toString().length === 1 ? '0' : ''}${i}:00`}
                        </span>
                        <span
                            className={`day ${(selectedDay.toDateString() === thisDay.toDateString()) ? "selected" : ""}`}>
                        </span>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default DayView;