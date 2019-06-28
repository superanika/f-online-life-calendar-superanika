import React from 'react';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Edit from '../Edit/Edit';

class CalendarApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          mood: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
      }
     
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
      handleChecked(event) {
          const radioChecked = event.currentTarget.value;
          this.setState ({
              mood: radioChecked
          })
      }

    render() {
        const {startDate, mood} = this.state;

        return (
            <React.Fragment>
                <header className="header">
                    <Header />
                </header>
                <main className="main__wrapper">
                    <Switch>
                        <Route exact path="/" component= {Home}></Route>
                        <Route path ="/edit" render={
                            () => <Edit
                                  handleChange= {this.handleChange}
                                  startDate={startDate}
                                  mood= {mood}
                                  handleChecked= {this.handleChecked}
                                  />
                        }></Route>
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