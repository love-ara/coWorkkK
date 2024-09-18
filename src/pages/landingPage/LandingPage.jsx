import style from "./index.module.css"
import logo from "../../assets/landingpageassets/cowork-logo.png"
import mainPicture from "../../assets/landingpageassets/Swim_camp.png"
import mapIllustration from "../../assets/landingpageassets/map-illustration.png"
import notifications from "../../assets/landingpageassets/notifications.png"
import contacts from "../../assets/landingpageassets/contacts.png"
import overSpending from "../../assets/landingpageassets/Overspending.png"
import "../../fonts/fonts.css"
import Footer from "../../components/footer/Footer";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignup = () => {
        navigate("/signup")
    }
    return (
        <>
            <div className={style.container}>

                <div className={style.navBar}>
                    <div>
                        <img src={logo} alt={"Logo"}/>
                    </div>
                    <div className={style.rightSideNavBar}>
                        <button className={style.navBarButton}>Home</button>
                        <button className={style.navBarButton}>Features</button>
                        <button className={style.navBarButton}>Pricing</button>
                        <button className={style.navBarButton}>Contact</button>
                        <button onClick={handleLogin} className={style.navBarButton}>Log In</button>
                        <button onClick={handleSignup} className={style.signUp}>Sign up</button>
                    </div>
                </div>

                <div className={style.mainBody}>

                    <div className={style.companyMessage}>
                        <p className={style.breakRoutine}>Break the routine with <span
                            style={{color: "#9747FF"}}>Cowork</span></p>
                        <p className={style.coworkAssist}>Cowork assists in making tasks and projects more
                            engaging,<br/> without disrupting your established habits and routines</p>
                    </div>

                    <div style={{marginBottom: "48px"}}>
                        <button className={style.discoverCowork}>Discover Cowork</button>
                        <button className={style.alreadyAMember}>Already a member?</button>
                    </div>

                    <div>
                        <img src={mainPicture} alt={"main-picture"}/>
                    </div>

                    <div className={style.mainModal}>
                        <div>
                            <img src={mapIllustration} alt={"Map Illustration"}/>
                        </div>
                        <div className={style.modalInfo}>
                            <p className={style.innerHeader}>Centralisation</p>
                            <p className={style.subHeader}>Manage all <br/> your <span
                                style={{color: "#9747FF"}}>adventures</span></p>
                            <p className={style.innerText}>Plan, notify, delegate and manage all areas <br/> of your
                                projects from a single, all-in-one, <br/> comprehensive, and user-friendly tool.</p>
                            <button className={style.featuresButton}>Features &nbsp; &#8599;</button>
                        </div>
                    </div>

                    <div className={style.mainModal}>
                        <div style={{marginRight: "60px"}}>
                            <img src={contacts} alt={"Contacts"}/>
                        </div>
                        <div className={style.modalInfo}>
                            <p className={style.innerHeader}>Contacts</p>
                            {/*<p className={style.subHeader}>Mises a jour des <br/> evenements en <br/> temps reel</p>*/}
                            <p className={style.subHeader}>Keep your <span style={{color: "#9747FF"}}> team </span>
                                <br/>members close</p>

                            <p className={style.innerText}>Manage contacts, messages, shared files,<br/> and pings with
                                team members; you'll <br/>always be in touch</p>
                            <button className={style.featuresButton}>Features &nbsp; &#8599;</button>

                        </div>
                    </div>

                    <div className={style.mainModal}>
                        <div style={{marginRight: "60px"}}>
                            {/*<img src={overSpending} alt={"Overspending"}/>*/}
                            <img src={notifications} alt={"Notifications"}/>
                        </div>
                        <div className={style.modalInfo}>
                            <p className={style.innerHeader}>Notifications</p>
                            <p className={style.subHeader}>Always receive <br/><span style={{color: "#9747FF"}}> updates about</span> <br/> your projects</p>
                            <p className={style.innerText}>Never miss any important information with <br/> our
                                easy-to-use, notification panel designed <br/>to keep you informed without
                                ever <br/> spamming. It ensures that you only get the <br/> updates that matter to you.
                            </p>
                            <button className={style.featuresButton}>Features &nbsp; &#8599;</button>
                        </div>
                    </div>

                    <div style={{marginBottom: "48px"}}>
                        <button className={style.discoverTheFeatures}>Discover the features &nbsp; &#8599;</button>
                    </div>

                </div>

            </div>

            <Footer/>
        </>
    );
}
export default LandingPage;