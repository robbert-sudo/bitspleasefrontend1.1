import React, {useContext} from 'react';
import logo from '../assets/logo_bits_please.svg'
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import './TopMenu.css'
import SystemButton from "./SystemButton";

function TopMenu() {
    const history = useHistory();
    const {isAuth, logout} = useContext(AuthContext);


    return (

        <nav>
            <Link to="/">
                <span className="logo-container">
                    <img src={logo} alt="logo"/>
                </span>
            </Link>
            <div className="systemchoises">

                <SystemButton text="GAMEBOY/ADVANCE"/>
                <SystemButton text="NES"/>
                <SystemButton text="SNES"/>
                <SystemButton text="GAMECUBE"/>
                <SystemButton text="MEGA DRIVE"/>
                <SystemButton text="DREAMCAST"/>
                <SystemButton text="PSONE"/>

            </div>

            {isAuth ?
                <button className="button"
                    type="button"
                    onClick={logout}>
                    Log uit
                </button>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => history.push("/signin")}
                        >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        Registreren
                    </button>
                </div>}
        </nav>
    );
}

export default TopMenu;