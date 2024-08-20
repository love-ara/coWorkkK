import React from "react";
import style from "./index.module.css";

const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <div className={style.footerSection}>
                <div className={style.footerColumn}>
                    <h4>Product</h4>
                    <ul>
                        <li><a href="/features">Features</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/integrations">Integrations</a></li>
                        <li><a href="/enterprise">Enterprise</a></li>
                    </ul>
                </div>
                <div className={style.footerColumn}>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className={style.footerColumn}>
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="/help">Help Center</a></li>
                        <li><a href="/community">Community</a></li>
                        <li><a href="/developers">Developers</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </div>
                <div className={style.footerColumn}>
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/security">Security</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.footerBottom}>
                <p>&copy; 2024 Coworkk. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;