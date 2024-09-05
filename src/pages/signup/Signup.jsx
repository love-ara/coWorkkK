import style from "./index.module.css"
import backgroundDesign from "../../signuppageassets/background-design.png"
import backgroundCover from "../../signuppageassets/background-cover.png"
import backgroundLogo from "../../signuppageassets/background-logo.png"
import logo from "../../signuppageassets/Taskiro.png"
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";


const Signup = ()=> {

    const schema = Yup.object().shape({
        firstName: Yup.string().required("First Name is a required field!"),
        lastName: Yup.string().required("Last Name is a required field!"),
        email: Yup.string()
            .required("Email is a required field!")
            .email("Invalid email format!"),
        password: Yup.string()
            .required("Password is a required field!")
            .min(6, "Password must be at least 6 characters!"),
    });

    return (
        <>
            <div className={style.page}>
                <img src={backgroundDesign} alt={"Background image"} className={style.backgroundDesign} />
                <img src={backgroundCover} alt={"Background cover"} className={style.backgroundCover} />
                <img src={backgroundLogo} alt={"Background logo"} className={style.backgroundLogo}/>
                <div className={style.modal}>
                    <div className={style.companyLogo}>
                        <img src={logo} alt={"Company Logo"}/>
                    </div>
                    <Formik>
                    <Form className={style.signupForm}>
                            <label className={style.labelTag} htmlFor={"firstname"}>First Name:</label>
                            <Field
                                className={style.formField}
                                type="text"
                                id="firstname"
                                name="firstname"
                                placeholder="Enter your first name"/>

                            <label className={style.labelTag} htmlFor={"lastname"}>Last Name:</label>
                            <Field
                                className={style.formField}
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Enter your last name"/>

                            <label className={style.labelTag} htmlFor={"email"}>Email:</label>
                            <Field
                                className={style.formField}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"/>

                            <label className={style.labelTag} htmlFor={"password"}>Password:</label>
                            <Field
                                style={{marginBottom : "25px"}}
                                className={style.formField}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"/>

                            <button className={style.signupButton}>Sign up</button>
                        </Form>
                    </Formik>
                    <p className={style.haveAccount}>&#10229; &nbsp; Already have an account ?</p>
                </div>

                <p className={style.oneApp}>One single app,<br/>an entire ecosystem</p>
            </div>
        </>
    )
}

export default Signup;