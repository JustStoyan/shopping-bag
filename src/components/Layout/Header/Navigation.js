import React, { useContext } from "react";
import AuthCountex from "../../../store/AuthContext";


const Navigation = () => {

    const authCtx = useContext(AuthCountex);

    return (
        <nav>
            <ul>
                <li><a href="/#">Home</a></li>
                {!authCtx.isLogged ? <div className="auth-menu auth-not-logged">
                    <li><a href="/#">Log in</a></li>
                    <li><a href="/#">Register</a></li>
                </div> :
                    <div className="auth-menu auth-not-logged">
                        <li><a href="/#">Logout</a></li>
                    </div>}
            </ul>
        </nav>
    )
}

export default Navigation;