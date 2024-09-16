import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import { useLocation } from 'react-router-dom';
import AddReminder from './forms/addReminder';

const Cal = () => {
    const location = useLocation();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reminders, setReminders] = useState({});
    const [showAddReminder, setShowAddReminder] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);

    const isDetailedView = location.pathname === '/calendar';

    useEffect(() => {
        setSelectedDate(new Date());
    }, [location.pathname]);

    const handleMonthChange = (event) => {
        const year = selectedDate.getFullYear();
        const month = parseInt(event.target.value, 10);
        setSelectedDate(new Date(year, month, 1));
    };

    const handleYearChange = (event) => {
        const year = parseInt(event.target.value, 10);
        setSelectedDate(new Date(year, selectedDate.getMonth(), 1));
    };

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = [];
        const startOfMonth = new Date(year, month, 1);
        const endOfMonth = new Date(year, month + 1, 0);
        let day = startOfMonth;

        while (day <= endOfMonth) {
            days.push(new Date(day));
            day.setDate(day.getDate() + 1);
        }
        return days;
    };

    const getCalendarHeader = () => (
        <div style={styles.header}>
            <button style={styles.arrowButton} onClick={() =>
                setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
                &#8593;
            </button>
            <button style={styles.arrowButton} onClick={() =>
                setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
                &#8595;
            </button>
            <select style={styles.select} value={selectedDate.getMonth()} onChange={handleMonthChange}>
                {Array.from({length: 12}, (_, index) => (
                    <option key={index} value={index}>
                        {new Date(2020, index, 1).toLocaleString('default', {month: 'long'})}
                    </option>
                ))}
            </select>
            <select style={styles.select} value={selectedDate.getFullYear()} onChange={handleYearChange}>
                {Array.from({length: 10}, (_, index) => (
                    <option key={index} value={2023 + index}>
                        {2023 + index}
                    </option>
                ))}
            </select>

        </div>
    );

    const renderDay = (day) => {
        const reminder = reminders[day.toDateString()];
        return (
            <div
                key={day}
                style={styles.dayCell}
                onClick={() => handleAddReminder(day)}
            >
                <div style={styles.dayNumber}>{day.getDate()}</div>
                {reminder && (
                    <div style={styles.reminderInfo}>
                        <strong>{reminder.title}</strong>
                        <div>Start: {reminder.startDate}</div>
                        <div>End: {reminder.endDate}</div>
                    </div>
                )}
            </div>
        );
    };

    const calendarDays = () => {
        const days = getDaysInMonth(selectedDate);
        const startDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
        const daysToShow = Array(startDay).fill(null).concat(days);

        let rows = [];
         while (daysToShow.length) {
             rows.push(daysToShow.splice(0, 31));
         }
        return rows;
    };

    const renderCalendar = () => (
        <div style={styles.calendarContainer}>

            <div>
                <Calendar />
            </div>
        </div>
    );

    return (
        <div>
            {isDetailedView ? (
                renderCalendar()
            ) : (
                <div style={styles.simpleCalendarContainer}>
                    {getCalendarHeader()}
                    {/*{calendarDays().slice(0, 1).map((week, index) => (*/}
                    {/*    <div key={index} style={styles.weekRow}>*/}
                    {/*        {week.map((day, dayIndex) => (*/}
                    {/*            <div key={dayIndex} style={styles.simpleDayCell}>*/}
                    {/*                {day ? renderDay(day) : <div style={styles.emptyDay}></div>}*/}
                    {/*            </div>*/}
                    {/*        ))*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*))}*/}

                    {/*<div style={styles.gridContainer}>*/}
                        {calendarDays().map((week, index) => (
                            <div key={index} style={styles.weekRow}>
                                {week.map((day, dayIndex) => (
                                    <div key={dayIndex} style={styles.dayCell}>
                                        {day ? renderDay(day) : <div style={styles.emptyDay}></div>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    {/*</div>*/}
                </div>
            )}
            {showAddReminder && (
                <AddReminder
                    day={selectedDay}
                    onSave={handleSaveReminder}
                    onClose={() => setShowAddReminder(false)}
                />
            )}
        </div>
    );

    function handleAddReminder(day) {
        setSelectedDay(day);
        setShowAddReminder(true);
    }

    function handleSaveReminder(reminder) {
        setReminders(prevReminders => ({
            ...prevReminders,
            [selectedDay.toDateString()]: reminder,
        }));
    }
};

const styles = {
    calendarContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        width: '100%',
        // maxWidth: '1000px',
        height: 'auto',
        padding: '20px',
        background: "#ffffff",
        margin: "20px",
        borderRadius: '12px',
        textAlign: 'center',
        overflow: 'hidden',
    },
    weekRow: {
        display: 'flex',
        // justifyContent: 'space-around',
        gap: '12px',
    },
    arrowButton: {
        fontSize: '20px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
    arrowContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    select: {
        margin: '0 10px',
        border: "none"
    },
    // gridContainer: {
    //     // display: 'grid',
    //     // gridTemplateColumns: 'repeat(7, 1fr)',
    //     gap: '5px',
    // },
    dayCell: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '5px',
        // borderRadius: '8px',
        // backgroundColor: '#f0f0f0',
        cursor: 'pointer',
        position: 'relative',
    },
    simpleDayCell: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '5px',
        borderRadius: '8px',
    },
    dayNumber: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    reminderInfo: {
        marginTop: '5px',
        fontSize: '12px',
    },
    emptyDay: {
        backgroundColor: '#e0e0e0',
        height: '100px',
    },
    simpleCalendarContainer: {
        width: '100%',
        alignContent: "center",
        // justifyContent: 'space-evenly',
        // maxWidth: '1000px',
        height: '200px',
        // padding: '10px',
        background: "#ffffff",
        borderRadius: '12px',
        // textAlign: 'center',
        overflow: 'hidden',
    },
};

export default Cal;
