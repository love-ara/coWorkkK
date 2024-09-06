import style from "./index.module.css"
import backgroundDesign from "../../signuppageassets/background-design.png"
import backgroundCover from "../../signuppageassets/background-cover.png"
import backgroundLogo from "../../signuppageassets/background-logo.png"
import logo from "../../signuppageassets/Taskiro.png"
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";


const Login = ()=> {

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

                            <button className={style.signupButton}>Login</button>
                        </Form>
                    </Formik>
                    <p className={style.haveAccount}>&#10229; &nbsp; Do not have an account ?</p>
                </div>

                <p className={style.oneApp}>One single app,<br/>an entire ecosystem</p>
            </div>
        </>
    )
}

export default Login;