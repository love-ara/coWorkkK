import style from "./index.module.css"
import backgroundDesign from "../../assets/signuppageassets/background-design.png"
import backgroundCover from "../../assets/signuppageassets/background-cover.png"
import backgroundLogo from "../../assets/signuppageassets/background-logo.png"
import logo from "../../assets/signuppageassets/Taskiro.png"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const Signup = ()=> {
    const navigate = useNavigate();

    const [submitStatus, setSubmitStatus] = useState(null); // For success/error messages

    const initialValues = {
        email: "",
        fullName: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        fullName: Yup.string()
            .min(2, 'First name must be at least 2 characters')
            .required('First name is required'),
        // lastname: Yup.string()
        //     .min(2, 'Last name must be at least 2 characters')
        //     .required('Last name is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            setSubmitStatus(null);
            const response = await axios.post("http://3.211.174.23/auth/sign_up", values);

            if (response.status === 200 || response.status === 201) {
                setSubmitStatus({ success: "Signup successful!" });
                resetForm();
                navigate("/dashboard"); // Navigate to dashboard upon success
            } else {
                setSubmitStatus({ error: response.data.response || "Something went wrong. Please try again." });
            }
        } catch (error) {
            setSubmitStatus({ error: error.response?.data?.message || "An error occurred during signup." });
        } finally {
            setSubmitting(false);
        }
    };



    return (
        <>
            <div className={style.page}>
                <img src={backgroundDesign} alt={"Background image"} className={style.backgroundDesign} />
                <img src={backgroundCover} alt={"Background cover"} className={style.backgroundCover} />
                <img src={backgroundLogo} alt={"Background logo"} className={style.backgroundLogo}/>
                <div className={style.modal}>
                    <div className={style.companyLogo}>
                        {/*<img src={logo} alt={"Company Logo"}/>*/}
                        <p style={{
                            color: "black",
                            fontSize: "25px",
                            fontFamily: "Montserrat",
                            fontWeight: "700"
                        }}>Co<span style={{
                            color: "rgb(122, 111, 190)"
                        }}>workk</span></p>
                    </div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({isSubmitting}) => (

                            <Form className={style.signupForm}>

                                <label className={style.labelTag} htmlFor={"email"}>Email:</label>
                                <Field
                                    className={style.formField}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"/>
                                <ErrorMessage name="email" component="div" className={style.errorMessage}/>


                                <label className={style.labelTag} htmlFor={"fullName"}>Full Name:</label>
                                <Field
                                    className={style.formField}
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter your full name"/>
                                <ErrorMessage name="fullName" component="div" className={style.errorMessage}/>


                                {/*<label className={style.labelTag} htmlFor={"lastname"}>Last Name:</label>*/}
                                {/*<Field*/}
                                {/*    className={style.formField}*/}
                                {/*    type="text"*/}
                                {/*    id="lastname"*/}
                                {/*    name="lastname"*/}
                                {/*    placeholder="Enter your last name"/>*/}
                                {/*<ErrorMessage name="lastname" component="div" className={style.errorMessage}/>*/}


                                <label className={style.labelTag} htmlFor={"password"}>Password:</label>
                                <Field
                                    style={{marginBottom: "25px"}}
                                    className={style.formField}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"/>
                                <ErrorMessage name="password" component="div" className={style.errorMessage}/>

                                {submitStatus && submitStatus.error && (
                                    <div className={style.errorMessage}>{submitStatus.error}</div>
                                )}

                                {submitStatus && submitStatus.success && (
                                    <div className={style.successMessage}>{submitStatus.success}</div>
                                )}

                                <button
                                    className={style.signupButton}
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Signing up...' : 'Sign up'}
                                </button>


                            </Form>

                        )}
                    </Formik>
                    {/*<p className={style.haveAccount}>Already have an account? &nbsp;<span className={style.signIn}><Link>Sign in</span></p>*/}
                    <Link className={style.haveAccount} to='/login'>Already have an account? Sign in</Link>
                </div>

                <p className={style.oneApp}>One single app,<br/>an entire ecosystem</p>
            </div>
        </>
    )
}

export default Signup;