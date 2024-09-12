import style from "./index.module.css"
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";

const CreateTask = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className={style.backgroundCover}>

                <div className={style.createTask}>
                    <p className={style.header}>Create Task</p>
                    <hr className={style.horizontalLine} />
                    <form>
                        <label className={style.textLabel} htmlFor={"title"}>Title:</label>
                        <input className={style.title} placeholder={"Title"} type={"text"} id={"title"} name={"title"}
                               required/>

                        <label className={style.textLabel} htmlFor={"description"}>Description</label>
                        <textarea className={style.description} placeholder={"Task Description"} id={"description"}
                                  name={"description"} required/>

                        <label className={style.textLabel} htmlFor="start-date">Start Date:</label>
                        <input className={style.dates} type="datetime-local" id="start-date" name="start-date"
                               required/>

                        <label className={style.textLabel} htmlFor="due-date">Due Date:</label>
                        <input  className={style.dates} type="datetime-local"
                                id="due-date" name="due-date" required/>

                        <label className={style.textLabel} >Priority:</label>
                        <select className={style.priority} style={{marginBottom: "15px"}} id={"priority"} name={"priority"} required>
                            <option value={"LOW"}>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Urgent</option>
                        </select>

                        <button className={style.cancelButton} type={"submit"}>Cancel</button>
                        <button className={style.createTaskButton} type="submit">Create Task</button>

                    </form>
                </div>

            </div>

        </>
    )
}

export default CreateTask;