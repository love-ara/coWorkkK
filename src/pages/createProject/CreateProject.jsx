import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./index.module.css";
import SideBar from "../../components/sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const tagOptions = ["angular", "node", "react", "vue", "javascript"];

const CreateProject = () => {
    const navigate = useNavigate();
    const { authState } = useAuth(); // Access the authState from context

    const initialValues = {
        name: "",
        description: "",
        tags: [],
        category: ""
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        description: Yup.string().required("Description is required"),
        tags: Yup.array().of(Yup.string()).min(1, "At least one tag is required"),
        category: Yup.string().required("Category is required")
    });

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            if (!authState || !authState.token) {
                throw new Error("No token available");
            }

            const payload = {
                name: values.name,
                description: values.description,
                tags: values.tags,
                category: values.category
            };

            console.log("Submitting Payload:", payload);

            const response = await axios.post(
                "http://3.211.174.23/api/projects",
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${authState.token}`, // Use token from context
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Response Data:", response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error("Error creating project:", error);

            if (error.response) {
                console.error("Server Response:", error.response.data);
                setErrors({ server: error.response.data.error || "Failed to create project" });
            }

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
                <SideBar />

                <div className={style.formContainer}>
                    <div className={style.createProject}>
                        <p className={style.header}>Create Project</p>
                        <hr className={style.horizontalLine} />
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, setFieldValue }) => (
                                <Form>
                                    <label className={style.textLabel} htmlFor="name">Title:</label>
                                    <Field
                                        className={style.title}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Title"
                                    />
                                    <ErrorMessage name="name" component="div" className={style.error} />

                                    <label className={style.textLabel} htmlFor="description">Description:</label>
                                    <Field
                                        className={style.description}
                                        as="textarea"
                                        id="description"
                                        name="description"
                                        placeholder="Project Description"
                                    />
                                    <ErrorMessage name="description" component="div" className={style.error} />

                                    <label className={style.textLabel} htmlFor="tags">Tags:</label>
                                    <Field
                                        as="select"
                                        id="tags"
                                        name="tags"
                                        multiple
                                        className={style.tags}
                                        onChange={(event) => {
                                            const selectedTags = Array.from(event.target.selectedOptions, option => option.value);
                                            setFieldValue("tags", selectedTags);
                                        }}
                                    >
                                        {tagOptions.map(tag => (
                                            <option key={tag} value={tag}>{tag}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="tags" component="div" className={style.error} />

                                    <label className={style.textLabel} htmlFor="category">Category:</label>
                                    <Field
                                        className={style.category}
                                        type="text"
                                        id="category"
                                        name="category"
                                        placeholder="Category"
                                    />
                                    <ErrorMessage name="category" component="div" className={style.error} />

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
