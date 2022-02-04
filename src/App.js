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
import CheckOut from "./pages/CheckOut";
import GamesLandingPage from "./pages/GamesLandingPage";
import GamesByName from "./pages/GamesByName";
import FullGame from "./pages/FullGame";
import AdminPage from "./pages/AdminPage";
import RatingPage from "./pages/RatingPage";
import AdminPageUsers from "./pages/AdminPageUsers";
import EditProfile from "./pages/EditProfile";
import AdminPageDeletedUsers from "./pages/AdminPageDeletedUsers";


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
                    <Route exact path="/checkout">
                        <CheckOut/>
                    </Route>
                    <Route exact path="/gameslandingpage">
                        <GamesLandingPage/>
                    </Route>
                    <Route exact path="/gamesbyname">
                        <GamesByName/>
                    </Route>
                    <Route path="/fullgamepage/:gameId">
                        <FullGame/>
                    </Route>
                    <Route exact path="/adminpage">
                        <AdminPage/>
                    </Route>
                    <Route exact path="/adminpage/users">
                        <AdminPageUsers/>
                    </Route>
                    <Route exact path="/adminpage/deletedusers">
                        <AdminPageDeletedUsers/>
                    </Route>
                    <Route path="/rating/:uploaderId">
                        <RatingPage/>
                    </Route>
                    <Route exact path="/deleteprofile">
                        <EditProfile/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;