import React, { useState } from 'react';
import { Menu, SubMenu } from "react-pro-sidebar";
import AddReminder from './forms/addReminder';

const Cal = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reminders, setReminders] = useState({});
    const [currentWeek, setCurrentWeek] = useState(0);
    const [showAddReminder, setShowAddReminder] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);

    const handleMonthChange = (event) => {
        const year = new Date().getFullYear();
        const month = parseInt(event.target.value);
        const newDate = new Date(year, month, 1);
        setSelectedDate(newDate);
        setCurrentWeek(0);
    };

    const getCurrentWeekDays = () => {
        const current = selectedDate;
        const dayOfWeek = current.getDay();
        const startOfWeek = new Date(current);
        startOfWeek.setDate(current.getDate() - dayOfWeek);

        let days = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfWeek);
            day.setDate(startOfWeek.getDate() + i);
            days.push(day);
        }
        return days;
    };

    const handleAddReminder = (day) => {
        setSelectedDay(day);
        setShowAddReminder(true);
    };

    const handleSaveReminder = (reminder) => {
        setReminders((prevReminders) => ({
            ...prevReminders,
            [selectedDay.toDateString()]: reminder,
        }));
    };

    const renderDay = (day) => {
        const reminder = reminders[day.toDateString()];
        return (
            <div
                key={day}
                style={{
                    // border: '1px dashed #ddd',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '8px',
                    // backgroundColor: '#f9f9f9',
                    textAlign: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                }}
                onClick={() => handleAddReminder(day)}
            >
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{day.getDate()}</div>
                <div>{day.toLocaleString('default', { weekday: 'short' })}</div>
                {reminder && (
                    <div style={{ marginTop: '5px', fontSize: '12px' }}>
                        <strong>{reminder.title}</strong>
                        <div>Start: {reminder.startDate}</div>
                        <div>End: {reminder.endDate}</div>
                    </div>
                )}
            </div>
        );
    };

    const goToNextWeek = () => {
        const nextWeekDate = new Date(selectedDate);
        nextWeekDate.setDate(selectedDate.getDate() + 7);
        setSelectedDate(nextWeekDate);
    };

    const goToPrevWeek = () => {
        const prevWeekDate = new Date(selectedDate);
        prevWeekDate.setDate(selectedDate.getDate() - 7);
        setSelectedDate(prevWeekDate);
    };

    const styles = {
        calendarContainer: {
            width: '100%',
            maxWidth: '1000px',
            height: '200px',
            // margin: 'auto',
            padding: '10px',
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            background: "#ffffff",
            borderRadius: '12px',
            textAlign: 'center',
        },
        weekRow: {
            display: 'flex',
            justifyContent: 'space-around',
            gap: '12px',
            // flexWrap: 'wrap',
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
        selects:{
            padding: '0.5em 0.5em'
        },

    };

    return (
        <div style={styles.calendarContainer}>
            <div>
                        <select style={{border: "none", outline: "none"}} value={selectedDate.getMonth()} onChange={handleMonthChange}>
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i} value={i}>
                                    {new Date(2020, i, 1).toLocaleString('default', { month: 'long' })}
                                </option>
                            ))}
                        </select>
            </div>

            <div style={styles.arrowContainer}>
                <button style={styles.arrowButton} onClick={goToPrevWeek}>
                    &lt;
                </button>

                <div style={styles.weekRow}>
                    {getCurrentWeekDays().map((day) => renderDay(day))}
                </div>

                <button style={styles.arrowButton} onClick={goToNextWeek}>
                    &gt;
                </button>
            </div>

            {showAddReminder && (
                <AddReminder
                    day={selectedDay}
                    onSave={handleSaveReminder}
                    onClose={() => setShowAddReminder(false)}
                />
            )}
        </div>
    );
};

export default Cal;
