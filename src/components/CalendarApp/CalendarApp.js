import React from 'react';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Edit from '../Edit/Edit';

class CalendarApp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <Header />
                </header>
                <main className="main__wrapper">
                    <Switch>
                        <Route exact path="/" component= {Home}></Route>
                        <Route path ="/edit" component = {Edit}></Route>
                    </Switch>
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </React.Fragment>

        );
    }
}

export default CalendarApp;