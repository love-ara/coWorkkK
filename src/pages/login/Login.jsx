import style from "./index.module.css"
import backgroundDesign from "../../assets/signuppageassets/background-design.png"
import backgroundCover from "../../assets/signuppageassets/background-cover.png"
import backgroundLogo from "../../assets/signuppageassets/background-logo.png"
import logo from "../../assets/signuppageassets/Taskiro.png"
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";


const Login = ()=> {

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
                    <Formik initialValues={initialValues} validationSchema={validationSchema}>
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
                                style={{marginBottom : "32px"}}
                                className={style.formField}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"/>

                            <button className={style.signupButton}>Login</button>
                        </Form>
                    </Formik>
                    <p  className={style.haveAccount}>&#10229; &nbsp; Do not have an account? Sign up</p>
                </div>

                <p className={style.oneApp}>One single app,<br/>an entire ecosystem</p>
            </div>
        </>
    )
}

export default Login;