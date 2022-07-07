import React from 'react';

import { BrowserRouter as Router, Routes, Route, Switch, useLocation, useParams }
    from 'react-router-dom';
import Vote from './vote';
import Dashboard from './dashboard';
import Navbar from '../components/navbar';


function Home() {

    return (
        <Router>
            <Navbar />

            <Switch>

                <Route exact path="/vote" component={Vote} />
                <Route exact path="/dashboard" component={Dashboard} />

            </Switch>
        </Router>
    );
}

export default Home;
