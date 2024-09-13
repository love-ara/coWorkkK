import style from "./index.module.css"
import backgroundDesign from "../../assets/signuppageassets/background-design.png"
import backgroundCover from "../../assets/signuppageassets/background-cover.png"
import backgroundLogo from "../../assets/signuppageassets/background-logo.png"
import logo from "../../assets/signuppageassets/Taskiro.png"
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const Login = ()=> {
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is a required field!")
            .email("Invalid email format!"),
        password: Yup.string()
            .required("Password is a required field!"),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setLoginError(null);

            const response = await axios.post(
                "http://3.211.174.23/auth/sign_in",
                values
            );

            const userData = response.data.user;
            const token = response.data.token;

            // Save user data and token in local storage or global state
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', token);

            if (response.status === 200 || response.status === 201) {
                // Successful login
                navigate("/dashboard"); // Navigate to the dashboard
            } else {
                setLoginError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            setLoginError(error.response?.data?.message || "Login failed. Please try again.");
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
                        {({ isSubmitting }) => (


                            <Form className={style.signupForm}>
                            <label className={style.labelTag} htmlFor={"email"}>Email:</label>
                            <Field
                                className={style.formField}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"/>

                            <label className={style.labelTag} htmlFor={"password"}>Password:</label>
                            <Field
                                style={{marginBottom: "32px"}}
                                className={style.formField}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"/>
                            {loginError && <div className={style.errorMessage}>{loginError}</div>}
                            <button className={style.signupButton} type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </Form>
                            )}
                    </Formik>
                    <Link className={style.haveAccount} to='/signup'>Do not have an account? Sign up</Link>
                </div>

                <p className={style.oneApp}>One single app,<br/>an entire ecosystem</p>
            </div>
        </>
    )
}

export default Login;