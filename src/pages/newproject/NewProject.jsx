import style from "./index.module.css"
import Home from "../homepage";
import {Form} from "formik";

const NewProject = () => {
    return (
        <>
            <Home />
            <div className={style.darkBackgroundCover}>
                <Form>

                </Form>
            </div>
        </>
    )
}

export default NewProject