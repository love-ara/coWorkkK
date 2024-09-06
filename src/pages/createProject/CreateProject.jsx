import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./index.module.css";
import SideBar from "../../components/sidebar";
import Header from "../../components/header";
import { createProject } from "../../api/ProjectService";
import {useNavigate} from "react-router-dom";


const CreateProject = () => {
    const navigate = useNavigate();


    const initialValues = {
        title: "",
        description: "",
        startDate: "",
        dueDate: "",
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        startDate: Yup.date().required("Start date is required"),
        dueDate: Yup.date().required("Due date is required"),
    });

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            await createProject(values);

        } catch (error) {
            setErrors({ server: "Failed to create project" });
        } finally {
            setSubmitting(false);
        }
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    return (
        <>
            <Header />
            <SideBar  />
            <div className={style.backgroundCover}>
                <div className={style.createProject}>
                    <p className={style.header}>Create Project</p>
                    <hr className={style.horizontalLine} />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <label className={style.textLabel} htmlFor="title">Title:</label>
                                <Field
                                    className={style.title}
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title"
                                />
                                <ErrorMessage name="title" component="div" className={style.error} />

                                <label className={style.textLabel} htmlFor="description">Description:</label>
                                <Field
                                    className={style.description}
                                    as="textarea"
                                    id="description"
                                    name="description"
                                    placeholder="Project Description"
                                />
                                <ErrorMessage name="description" component="div" className={style.error} />

                                <label className={style.textLabel} htmlFor="startDate">Start Date:</label>
                                <Field
                                    className={style.dates}
                                    type="datetime-local"
                                    id="startDate"
                                    name="startDate"
                                />
                                <ErrorMessage name="startDate" component="div" className={style.error} />

                                <label className={style.textLabel} htmlFor="dueDate">Due Date:</label>
                                <Field
                                    className={style.dates}
                                    type="datetime-local"
                                    id="dueDate"
                                    name="dueDate"
                                />
                                <ErrorMessage name="dueDate" component="div" className={style.error} />

                                <button
                                    className={style.cancelButton}
                                    type="button"
                                    onClick={() => {
                                        // resetForm();
                                        handleCancel();

                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className={style.createProjectButton}
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Create Project
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default CreateProject;
