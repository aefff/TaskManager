import React, { useContext } from 'react';
import {AppContext} from "../../AppContent";
import './Calendar.css';

function DayView() {
    const {
        setCurrentView
    } = useContext(AppContext);

    return (
        <div className="DayView">
            Days
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
        </div>
    )
}

export default DayView;