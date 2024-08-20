import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../pages/index.module.css";
import logo from '../assets/coworkk.png'
import rightIllustration from "../assets/right.png"
import leftIllustration from "../assets/left.png"
import plane from "../assets/Plane element.png"
import Footer from "../components/footer/Footer";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/auth");
    };

    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.navBar}>
                    <div className={style.firstNavBarSection}>
                        <img src={logo} alt={"Logo"}/>
                        <button>Product</button>
                        <button>Solutions</button>
                        <button>Resources</button>
                        <button>Enterprise</button>
                        <button>Pricing</button>
                    </div>

                    <div className={style.secondNavBarSection}>
                        <button>&#x1f310;EN</button>
                        <button>Contact Sales</button>
                        <button>Resources</button>
                        <button className={style.loginButton} onClick={handleLoginClick} >Login</button>
                        <button className={style.signUpButton} onClick={handleLoginClick}><span style={{color: "white"}}>Sign up free</span></button>
                    </div>
                </div>

                <hr />

                <div className={style.mainBody}>
                    <div className={style.firstDiv}>
                        <div className={style.planeDiv}>
                            <p className={style.topHeading}>New Home for Collaboration</p>
                            <div>
                                <img src={plane} alt={"plane"}/>
                            </div>
                        </div>
                        <p className={style.topTexts}>The online collaborative whiteboard platform to bring teams together,
                            anytime, anywhere.</p>
                        <button className={style.getStartedButton} onClick={handleLoginClick}>Get Started &#10141;</button>
                        <p className={style.creditCard}>No credit card required.</p>
                        <div>
                            <img src={leftIllustration} alt={"leftIllustration"}/>
                        </div>
                    </div>


                    <div className={style.secondDiv}>
                        <div>
                            <img style={{float: "right"}} src={rightIllustration} alt={"right illustration"}/>
                            {/*<img src={curveLine} alt={"curveLine"}/>*/}
                        </div>
                        {/*<div>*/}
                        {/*<img src={curveLine} alt={"curveLine"}/>*/}
                        {/*</div>*/}
                        <p className={style.bottomHeading}>Stay organised and connected</p>
                        <p className={style.bottomTexts}>Bring your teams work together in one shared space.<br/>
                            Chose the project view that suits your style and collaborate no matter where you are
                        </p>
                        <p className={style.topTexts}></p>
                    </div>
                </div>

            </div>
            <Footer />
        </>

    );
};

export default LandingPage;