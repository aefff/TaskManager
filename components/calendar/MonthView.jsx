import React, {useContext, useState} from 'react';
import { AppContext } from '../../AppContent.jsx';
import './Calendar.css';

function MonthView() {
    const {
        setCurrentView,
        selectedDay, setSelectedDay,
    } = useContext(AppContext);

    const [currentMonth, setCurrentMonth] = useState(new Date());

    const currentMonthArray = () => {
        let CalenderDay = [];
        const numDaysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
        const startPad = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
        let endPad = 7 - ((numDaysInMonth + startPad) % 7);
        if (endPad === 7) {
            endPad = 0;
        }

        for (let i = startPad; i > 0; i--) {
            CalenderDay.push(
                {
                    day: new Date(currentMonth.getFullYear(),
                        currentMonth.getMonth() - 1,
                        new Date(currentMonth.getFullYear(),
                            currentMonth.getMonth(), 0).getDate() - i + 1),
                    inCurrentMonth: false
                }
            );
        }

        for (let i = 1; i <= numDaysInMonth; i++) {
            CalenderDay.push({ day: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i), inCurrentMonth: true });
        }

        for (let i = 1; i <= endPad; i++) {
            CalenderDay.push({ day: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i), inCurrentMonth: false });
        }

        let TwoDCalendar = [];
        let tempWeek = [];
        for (let i = 0; i < CalenderDay.length; i++) {
            tempWeek.push(CalenderDay[i]);
            if (tempWeek.length === 7) {
                TwoDCalendar.push(tempWeek);
                tempWeek = [];
            }
        }

        return TwoDCalendar;
    }

    return (
        <div className="Calendar">
            This is the month view |
            <button onClick={() => {
                setCurrentView('App')
            }}>Go back home</button><br/>

            <p className={'month'}>
                {currentMonth.toLocaleString('default', {month: 'long'})}
            </p>

            <button onClick={() => {
                setCurrentMonth(prevState =>
                    new Date(prevState.setMonth(currentMonth.getMonth() - 1)));
            }}>
                &lt;
            </button>

            <button onClick={() => {
                setCurrentMonth(prevState =>
                    new Date(prevState.setMonth(currentMonth.getMonth() + 1)))
            }}>
                &gt;
            </button>

            <button className={`weekButton ${selectedDay? 'selectedTrue': 'selectedFalse'}`}
                    onClick={() => {
                if (selectedDay) {setCurrentView('WeekView');}
            }}>
                Week view
            </button>

            <button className={`dayButton ${selectedDay? 'selectedTrue': 'selectedFalse'}`}
                    onClick={() => {
                        if (selectedDay) {setCurrentView('DayView');}
                    }}>
                Day view
            </button>

            <div className="week">
                {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day, i) => (
                    <span className="day header" key={i}>
                        {day.toUpperCase()}
                    </span>
                ))}
            </div>

            {currentMonthArray().map((week, index) => (
                <div
                    key={index}
                    className={'week'}
                >
                    {week.map(({day, inCurrentMonth}, i2) => (
                        <span
                            key={i2}
                            className={`day ${inCurrentMonth ? 'currentMonth' : 'otherMonth'} ${selectedDay && selectedDay.getTime() === day.getTime() ? 'selected' : ''} ${(day.getTime() === new Date().getTime()) ? 'currentDay' : ''}`}
                            onClick={() => {
                                if (selectedDay?.getTime() === day.getTime()) {
                                    setSelectedDay(null);
                                } else {
                                    setSelectedDay(day);
                                }
                            }}
                        >
                            {day.getDate()}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default MonthView;
