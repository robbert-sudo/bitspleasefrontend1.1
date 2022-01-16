import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router';

import TopMenu from './components/TopMenu';
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import './App.css';
import {AuthContext} from "./context/AuthContext";
import Games from "./pages/Games";
import UploadGame from "./pages/UploadGame";




function App() {
    const isAuth = useContext(AuthContext);

    return (
        <>
            <TopMenu/>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/profile">
                        {isAuth ? <Profile/> : <Redirect to="/"/>}
                    </Route>
                    <Route exact path="/signin">
                        <SignIn/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp/>
                    </Route>
                    <Route exact path="/games">
                        <Games/>
                    </Route>
                    <Route exact path="/uploadgame">
                        <UploadGame/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;