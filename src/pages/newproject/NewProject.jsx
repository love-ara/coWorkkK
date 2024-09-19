import style from "./index.module.css";
import Home from "../homepage";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import axios from "axios";

const NewProject = () => {
    const navigate = useNavigate();
    const { authState } = useAuth();

    const initialValues = {
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "NOT_STARTED",
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
    });


    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            if (!authState || !authState.token) {
                throw new Error("No token available");
            }

            const payload = {
                name: values.name,
                description: values.description,
                startDate: values.startDate,
                endDate: values.endDate,
                status: values.status
            };

            console.log("Submitting Payload:", payload);

            const response = await axios.post(
                "http://localhost:8080/api/projects",
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
            <Home />
            <div className={style.darkBackgroundCover}>
                <div className={style.createProject}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Field
                                className={style.title}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="New Project Title"
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
                            <ErrorMessage
                                name="description"
                                component="div"
                                className={style.error}
                            />

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

                            <div className={style.datesContainer}>
                                <div>
                                    <label className={style.labels} htmlFor="startDate">
                                        Start Date:&nbsp;&nbsp;
                                    </label>
                                    <Field
                                        className={style.dates}
                                        type="date"
                                        name="startDate"
                                        id="startDate"
                                    />
                                    <ErrorMessage
                                        name="startDate"
                                        component="div"
                                        className={style.error}
                                    />
                                </div>

                                <div style={{marginBottom: "24px"}}>
                                    <label className={style.labels} htmlFor="endDate">
                                        End Date:&nbsp;&nbsp;
                                    </label>
                                    <Field
                                        className={style.dates}
                                        type="date"
                                        name="endDate"
                                        id="endDate"
                                    />
                                    <ErrorMessage
                                        name="endDate"
                                        component="div"
                                        className={style.error}
                                    />
                                </div>
                            </div>


                            <div className={style.cancelAndCreateButtonContainer}>
                                <button className={style.cancelProjectButton}
                                        type="button"
                                        onClick={handleCancel}>
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
    );
};

export default NewProject;
