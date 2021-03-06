import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
    return (
    <BrowserRouter>
        <Container maxwidth="lg" >
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/auth" exact component={Auth}></Route>
            </Switch>
        </Container>
    </BrowserRouter>
    );
};

export default App;
