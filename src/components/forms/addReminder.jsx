import React, { useState } from 'react';

const AddReminder = ({ day, onSave, onClose }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [startDate, setStartDate] = useState(day.toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && note && endDate) {
            onSave({ title, note, startDate, endDate });
            onClose();
        } else {
            alert('Please fill all fields');
        }
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.formContainer}>
                <h2>Add Reminder</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formField}>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div style={styles.formField}>
                        <label>Note:</label>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            // required
                        />
                    </div>
                    <div style={styles.formField}>
                        <label>Start Date:</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </div>
                    <div style={styles.formField}>
                        <label>End Date:</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                        />
                    </div>
                    <div style={styles.formActions}>
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px',
        width: '100%',
    },
    formField: {
        marginBottom: '15px',
    },
    formActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default AddReminder;
