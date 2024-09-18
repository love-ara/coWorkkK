import style from "./index.module.css"
import Home from "../homepage";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";

const NewProject = () => {

    const initialValues = {
        title: "",
        description: "",
        startDate: Yup.date().required("Start date is required")
            .nullable(),
        endDate: Yup.date()
            .required("End date is required")
            .nullable()
            .min(Yup.ref("startDate"), "End date cannot be before start date"),
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
    });

    return (
        <>
            <Home />
            <div className={style.darkBackgroundCover}>
                <div className={style.createProject}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}>
                        <Form>
                            <Field
                                className={style.title}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="New Project Title"
                            />
                            <ErrorMessage name="name" component="div" className={style.error}/>
                            {/*<button className={style.closeButton}>&#10006;</button>*/}
                            <hr className={style.horizontalLine}/>

                            <Field
                                className={style.description}
                                as="textarea"
                                id="description"
                                name="description"
                                placeholder="Project Description"
                            />
                            <ErrorMessage name="description" component="div" className={style.error}/>


                            <div className={style.datesContainer}>
                                <div>
                                    <label className={style.labels} htmlFor="startDate">Start Date: </label>
                                    <Field
                                        className={style.dates}
                                        type="datetime-local"
                                        name="startDate"
                                        id="startDate"/>
                                    <ErrorMessage name="startDate" component="div" className="error"/>
                                </div>

                                <div style={{marginBottom : "15px"}}>
                                    <label className={style.labels} htmlFor="endDate">End Date: </label>
                                    <Field
                                        className={style.dates}
                                        type="datetime-local"
                                        name="endDate"
                                        id="endDate"/>
                                    <ErrorMessage name="endDate" component="div" className="error"/>
                                </div>

                            </div>


                            <div className={style.closeAndCreateContainer}>
                                <button className={style.cancelProjectButton} type="submit">
                                    Cancel
                                </button>

                                <button className={style.createProjectButton} type="submit">
                                    &#43; Create
                                </button>
                            </div>
                        </Form>
                    </Formik>


                </div>


            </div>
        </>
    )
}

export default NewProject






