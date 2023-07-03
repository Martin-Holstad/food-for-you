import styles from "./NavigationBar.module.css";
import { auth } from "../../../settings/settings";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterestP, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import AuthNav from "./AuthNav/AuthNav";

export default function NavigationBar() {
    //UseState
    const [user, setUser] = useState(null);

    useEffect(function () {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    return (
        <>
            {user ? (
                <AuthNav />
            ) : (
                <nav className={styles.nav}>
                    <div className={styles.links}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </div>
                    <div className={styles.socialMedia}>
                        <Link to="https://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link to="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to="https://www.pinterest.com/">
                            <FontAwesomeIcon icon={faPinterestP} />
                        </Link>
                        <Link to="https://twitter.com/">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to="https://www.youtube.com/">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </div>
                </nav>
            )}
        </>
    );
}