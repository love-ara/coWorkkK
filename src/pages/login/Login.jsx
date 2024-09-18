import style from "./index.module.css"
import backgroundDesign from "../../assets/signuppageassets/background-design.png"
import backgroundCover from "../../assets/signuppageassets/background-cover.png"
import backgroundLogo from "../../assets/signuppageassets/background-logo.png"
import logo from "../../assets/signuppageassets/signup-logo- design.png"
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {useAuth} from "../../context/AuthContext";


const Login = ()=> {
    const { saveToken } = useAuth();

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
            const response = await axios.post("http://localhost:8080/auth/sign_in",
                values);

            if (response.status === 200 || response.status === 201) {
                const { jwtToken: token } = response.data;
                saveToken(token);

                const userResponse = await axios.get("http://localhost:8080/api/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const { fullName, email } = userResponse.data;
                localStorage.setItem('fullName', fullName);

                navigate("/dashboard", {replace: true});
            } else {
                setLoginError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            setLoginError(error.response.data || "Login failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };




    return (
        <>
            <div className={style.page}>
                <img src={backgroundDesign} alt={"Background "} className={style.backgroundDesign} />
                <img src={backgroundCover} alt={"Background cover"} className={style.backgroundCover} />
                <img src={backgroundLogo} alt={"Background logo"} className={style.backgroundLogo}/>
                <div className={style.modal}>
                    <div className={style.companyLogo}>
                        <img src={logo} alt={"Company Logo"}/>
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


