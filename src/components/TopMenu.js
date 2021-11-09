import React, {useContext} from 'react';
import logo from '../assets/logo_bits_please.svg'
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

function TopMenu() {
    const history = useHistory();
    const {isAuth, logout} = useContext(AuthContext);
    console.log(isAuth);

    return (
        <nav>
            <Link to="/">
                <span className="logo-container">
                    <img src={logo} alt="logo"/>
                      <h3>
                    bitsplease
                        </h3>
                </span>
            </Link>
            {isAuth ?
                <button
                    type="button"
                    onClick={logout}>
                    Log uit
                </button>
                :
                <div>
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