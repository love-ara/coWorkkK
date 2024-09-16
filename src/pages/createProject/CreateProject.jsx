import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./index.module.css";
import SideBar from "../../components/sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const tagOptions = ["angular", "node", "react", "vue", "javascript"];

const CreateProject = () => {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);

    const initialValues = {
        title: "",
        description: "",
        startDate: "",
        dueDate: "",
        tags: [],
        category: ""
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        startDate: Yup.date().required("Start date is required"),
        dueDate: Yup.date().required("Due date is required"),
        tags: Yup.array().of(Yup.string()).required("At least one tag is required"),
        category: Yup.string().required("Category is required")
    });

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post(
                "http://3.211.174.23:8080/api/projects",
                {
                    name: values.title,
                    description: values.description,
                    tags: values.tags,
                    category: values.category
                }
            );

            console.log(response.data);
            navigate('/dashboard');
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
            <div className={style.pageContainer}>
                <SideBar/>

            <div className={style.formContainer}>
                <div className={style.createProject}>
                    <p className={style.header}>Create Project</p>
                    <hr className={style.horizontalLine}/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({isSubmitting, values, setFieldValue}) => (
                            <Form>
                                <label className={style.textLabel} htmlFor="title">Title:</label>
                                <Field
                                    className={style.title}
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title"
                                />
                                <ErrorMessage name="title" component="div" className={style.error}/>

                                <label className={style.textLabel} htmlFor="description">Description:</label>
                                <Field
                                    className={style.description}
                                    as="textarea"
                                    id="description"
                                    name="description"
                                    placeholder="Project Description"
                                />
                                <ErrorMessage name="description" component="div" className={style.error}/>

                                <label className={style.textLabel} htmlFor="startDate">Start Date:</label>
                                <Field
                                    className={style.dates}
                                    type="datetime-local"
                                    id="startDate"
                                    name="startDate"
                                />
                                <ErrorMessage name="startDate" component="div" className={style.error}/>

                                <label className={style.textLabel} htmlFor="dueDate">Due Date:</label>
                                <Field
                                    className={style.dates}
                                    type="datetime-local"
                                    id="dueDate"
                                    name="dueDate"
                                />
                                <ErrorMessage name="dueDate" component="div" className={style.error}/>

                                <label className={style.textLabel} htmlFor="tags">Tags:</label>
                                <Field as="select" id="tags" name="tags" multiple className={style.tags}>
                                    {tagOptions.map(tag => (
                                        <option key={tag} value={tag}>{tag}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="tags" component="div" className={style.error}/>

                                <label className={style.textLabel} htmlFor="category">Category:</label>
                                <Field
                                    className={style.category}
                                    type="text"
                                    id="category"
                                    name="category"
                                    placeholder="Category"
                                />
                                <ErrorMessage name="category" component="div" className={style.error}/>

                                <button
                                    className={style.cancelButton}
                                    type="button"
                                    onClick={handleCancel}
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
            </div>
        </>

    );
};

export default CreateProject;
