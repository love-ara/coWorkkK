import React from 'react';
import style from './index.module.css';

const UpdateTask = () => {
    return (
        <div className={style.updateTaskBackground}>
            <div className={style.updateTaskContainer}>
                <h1 className={style.updateTaskTitle}>Update Your Task</h1>
                <form>
                    <label htmlFor="title">Task Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className={style.updateTaskInput}
                        placeholder="Enter task title"
                        required
                    />

                    <label htmlFor="description">Task Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className={style.updateTaskTextarea}
                        placeholder="Describe the task details"
                        required
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <input
                        type="datetime-local"
                        id="start-date"
                        name="start-date"
                        className={style.updateTaskInput}
                        required
                    />

                    <label htmlFor="due-date">Due Date</label>
                    <input
                        type="datetime-local"
                        id="due-date"
                        name="due-date"
                        className={style.updateTaskInput}
                        required
                    />

                    <label htmlFor="priority">Priority</label>
                    <select id="priority" name="priority" className={style.updateTaskSelect} required>
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                        <option value="URGENT">Urgent</option>
                    </select>

                    <div>
                        <button type="submit" className={style.updateTaskButton}>Update Task</button>
                        <button type="button" className={style.updateCancelButton}>Cancel</button>
                    </div>

                    <p className={style.encouragingMessage}>You're doing great! Keep going and make it awesome.</p>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;