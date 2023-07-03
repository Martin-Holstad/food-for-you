import styles from "./AuthNav.module.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterestP, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import LogoutButton from "./LogoutButton";

export default function NavigationBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/new-post">New post</NavLink>
                </li>
                <LogoutButton />
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
    );
}
