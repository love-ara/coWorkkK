import style from "./index.module.css"
import logo from "../../landingpageassets/Taskiro-logo.png"
import mainPicture from "../../landingpageassets/Swim_camp.png"
import mapIllustration from "../../landingpageassets/map-illustration.png"
import notifications from "../../landingpageassets/notifications.png"
import overSpending from "../../landingpageassets/Overspending.png"
import "../../fonts/fonts.css"
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
    return (
        <>
            <div className={style.container}>

                <div className={style.navBar}>
                    <div>
                        <img src={logo}  alt={"Logo"}/>
                    </div>
                    <div className={style.rightSideNavBar}>
                        <button className={style.navBarButton} >Home</button>
                        <button className={style.navBarButton} >Features</button>
                        <button className={style.navBarButton} >Pricing</button>
                        <button className={style.navBarButton} >Contact</button>
                        <button className={style.navBarButton} >Log In</button>
                        <button className={style.signUp}>Sign up</button>
                    </div>
                </div>

                <div className={style.mainBody}>

                    <div className={style.companyMessage}>
                        <p className={style.breakRoutine}>Break the routine with <span
                            style={{color: "#9747FF"}}>Cowork</span></p>
                        <p className={style.coworkAssist}>Cowork assists in making tasks and projects more
                            engaging,<br/> without disrupting your established habits and routines</p>
                    </div>

                    <div>
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
                            <p className={style.subHeader}>Manage all <br/> your <span style={{color: "#9747FF"}}>adventures</span></p>
                            <p className={style.innerText}>Plan, notify, delegate and manage all areas <br/> of your
                                projects from a single, all-in-one, <br/> comprehensive, and user-friendly tool.</p>
                            <button className={style.featuresButton}>Features &#8599;</button>
                        </div>
                    </div>


                    <div className={style.mainModal}>
                        <div style={{marginRight: "60px"}}>
                            <img src={notifications} alt={"Notifications"}/>
                        </div>
                        <div className={style.modalInfo}>
                            <p className={style.innerHeader}>Notifications</p>
                            <p className={style.subHeader}>Mises a jour des <br/> evenements en <br/> temps reel</p>
                            <p className={style.innerText}>Ne manquez aucune information avec <br/> notre panneau de
                                notifications simple, <br/> rapide
                                et conçu de façon à ne jamais vous <br/> spammer.</p>
                            <button className={style.featuresButton}>Features</button>
                        </div>
                    </div>


                    <div className={style.mainModal}>
                        <div style={{marginRight: "60px"}}>
                            <img src={overSpending} alt={"Overspending"}/>
                        </div>
                        <div className={style.modalInfo}>
                            <p className={style.innerHeader}>Notifications</p>
                            <p className={style.subHeader}>Mises a jour des <br/> evenements en <br/> temps reel</p>
                            <p className={style.innerText}>Ne manquez aucune information avec <br/> notre panneau de
                                notifications simple, <br/> rapide
                                et conçu de façon à ne jamais vous <br/> spammer.</p>
                            <button className={style.featuresButton}>Features</button>
                        </div>
                    </div>


                </div>

            </div>

            <Footer />

        </>
    );
}
export default LandingPage;