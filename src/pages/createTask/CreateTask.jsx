import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import style from "../createProject/index.module.css";

const CreateTask = () => {

    const initialValues = {
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "NOT_STARTED",
        priority: "LOW",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        startDate: Yup.date().required("Start date is required").nullable(),
        endDate: Yup.date()
            .required("End date is required")
            .nullable()
            .min(Yup.ref("startDate"), "End date cannot be before start date"),
        status: Yup.string()
            .oneOf(["NOT_STARTED", "ONGOING", "COMPLETED"], "Invalid status")
            .required("Status is required"),
        priority : Yup.string()
            .oneOf(["LOW", "MEDIUM", "HIGH", "URGENT"], "Invalid priority")
            .required("Priority is required"),
    });

    return (
        <>
            <div>
                <div>
                    <Formik>
                        <Form>
                            <Field
                                className={style.title}
                                type="text"
                                id="name"
                                placeholder="New Task Title"
                            />
                            <ErrorMessage name="name" component="div" className={style.error}/>

                            <hr className={style.horizontalLine}/>

                            <Field
                                className={style.description}
                                as="textarea"
                                id="description"
                                name="description"
                                placeholder="Project Description"
                            />
                            <ErrorMessage name="description" component="div" className={style.error}/>

                            <div className={style.selectContainer}>
                                <label className={style.labels} htmlFor="status">
                                    Project Status:&nbsp;&nbsp;
                                </label>
                                <Field
                                    className={style.statusDropdown}
                                    as="select"
                                    name="status"
                                    id="status"
                                >
                                    <option value="NOT_STARTED">Not Started</option>
                                    <option value="ONGOING">Ongoing</option>
                                    <option value="COMPLETED">Completed</option>
                                </Field>
                                <ErrorMessage
                                    name="status"
                                    component="div"
                                    className={style.error}
                                />
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )

}

export default CreateTask