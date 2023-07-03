import styles from "./LogoutButton.module.css"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../../settings/settings";

export default function LogoutButton () {

    //Router
    const history = useNavigate();

    function logout() {
        signOut(auth)
            .then(() => {
                history("/");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return <li onClick={logout}>Logout</li>
}