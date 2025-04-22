import React, {useContext} from 'react';
import {AppContext} from "../../AppContent";
import './Calendar.css';

function WeekView() {
    const {
        setCurrentView,
        setSelectedDay,
        selectedDay,
    } = useContext(AppContext)

    const Sunday = new Date(selectedDay.getTime());
    Sunday.setDate(selectedDay.getDate() - selectedDay.getDay());

    const weekDates = Array.from({length: 7}, (_, i) => {
        return new Date(Sunday.getFullYear(), Sunday.getMonth(), Sunday.getDate() + i);
    })

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
                <span className={'day header'}>
                    TIME
                </span>
                {
                    weekDates.map((date, i) => (
                        <div key={i}
                        className={`day header ${(selectedDay.getTime() === date.getTime()) ? 'selected' : ''}`}
                        onClick={() => setSelectedDay(date)}>

                            {`${date.getDate()} ${date.toLocaleDateString('en-GB', {weekday: 'short'})}`}

                        </div>
                    ))
                }
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