import style from "./index.module.css";
import logoForFooter from "../../assets/footerpageassets/logo-for-footer.png"
import instagram from "../../assets/footerpageassets/instagram.png"
import facebook from "../../assets/footerpageassets/facebook.png"
import tiktok from "../../assets/footerpageassets/tiktok.png"
import discord from "../../assets/footerpageassets/discord.png"
import twitter from "../../assets/footerpageassets/twitter.png"
import appStore from "../../assets/footerpageassets/app-store.png"
import googlePlayStore from "../../assets/footerpageassets/google-play-store.png"

const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <div>
                <div style={{marginBottom : "45px"}}>
                    {/*<img src={logoForFooter}  alt={"Logo"}/>*/}
                    <p style={{color : "white",
                        fontSize : "40px",
                        fontFamily : "Montserrat",
                        fontWeight : "700"}}>Co<span style={{
                            color : "rgb(122, 111, 190)"
                    }}>workk</span></p>
                </div>

                <div className={style.socials}>
                    <p className={style.followUs}>Follow us</p>
                    <div className={style.socialMediaIcons}>
                        <img src={instagram} alt={"Instagram"}/>
                        <img src={facebook} alt={"Facebook"}/>
                        <img src={tiktok} alt={"Tiktok"}/>
                        <img src={discord} alt={"Discord"}/>
                        <img src={twitter} alt={"Twitter"}/>
                    </div>
                </div>

                <div className={style.makeEverydayProductive}>
                    <p>Make every day productive</p>
                </div>

                {/*<div className={style.mobileDownload}>*/}
                {/*    <img style={{marginRight: "18px"}} src={appStore}/>*/}
                {/*    <img src={googlePlayStore} />*/}
                {/*</div>*/}
            </div>

            <div className={style.lists}>
                <div>
                    <p className={style.listHeader}>Site Map</p>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Signup</li>
                        <li>Log In</li>
                        <li>Pricing</li>
                        <li>Terms of use</li>
                        <li>Cookies</li>
                    </ul>
                </div>

                <div>
                    <p className={style.listHeader}>About</p>
                    <ul>
                        <li>Integrations</li>
                        <li>FAQs</li>
                        <li>Useful Links</li>
                        <li>Careers</li>
                        <li>Help Center</li>
                        <li>Blog</li>
                        <li>Tutorials</li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;