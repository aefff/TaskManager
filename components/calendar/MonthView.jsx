import React, { useState } from 'react';

function MonthView({ setCurrentView }) {

    const [currentMonth, setCurrentMonth] = useState(new Date());

    const currentMonthArray = () => {
        let CalenderDay = [];
        const numDaysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
        const startPad = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
        const endPad = 7 - ((numDaysInMonth + startPad) % 7);

        for (let i = 0; i < startPad; i++) {
            CalenderDay.push({day: new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, i + 1).getDate(), inCurrentMonth: false});
        }

        for (let i = 0; i < numDaysInMonth; i++) {
            CalenderDay.push({day: i + 1, inCurrentMonth: true});
        }

        for (let i = 0; i < endPad; i++) {
            CalenderDay.push({day: i + 1, inCurrentMonth: false});
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
        <div>
            This is the month view |
            <button onClick={() => { setCurrentView('App') }}>Go back home</button><br />

            {currentMonth.toLocaleString('default', { month: 'long' })}

            <button onClick={() => { setCurrentMonth(prevState =>
                new Date(prevState.setMonth(currentMonth.getMonth() - 1))); } }>
                &lt;
            </button>

            <button onClick={() => { setCurrentMonth(prevState =>
                new Date(prevState.setMonth(currentMonth.getMonth() + 1))) } }>
                &gt;
            </button>

            {currentMonthArray().map((week, index) => (
                <div key={index}>
                    {week.map(({day, inCurrentMonth}, i2) => (
                        <span key={i2} style ={{fontWeight : inCurrentMonth ? 'bold' : 'normal'}}>
                            {day}|
                        </span>
                    ))}
                    <br />
                </div>
            ))}
        </div>
    )
}

export default MonthView;
