import React from 'react';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Edit from '../Edit/Edit';
import helper from '../helper';

class CalendarApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mood: '',
          message: '',
          newDate: '',
          dateList: this.getSavedState()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleInputMessage= this.handleInputMessage.bind(this);
        this.reset= this.reset.bind(this);
        this.saveData= this.saveData.bind(this);
      }

      getSavedState() {
          let savedState  = localStorage.getItem('savedInfo');
          if (!savedState){
              savedState = [];
          } else {
              savedState = JSON.parse(savedState, helper.reviver);
          }
          return savedState;
      }

      handleChange(date) {
        this.setState({
          newDate: date
        });
      }

      handleChecked(event) {
          const radioChecked = event.currentTarget.value;
          this.setState ({
              mood: radioChecked
          })
      }
      handleInputMessage (event) {
          const userMessage = event.currentTarget.value;
          this.setState ({
            message: userMessage
        })
      }
      reset() {
        this.setState ({
            mood: '',
            newDate: '',
            message: ''
        })
    }
    saveData () {
        const userInfo = {
            newDate: this.state.newDate,
            mood: this.state.mood,
            message: this.state.message
        };

        const newDateList = [...this.state.dateList, userInfo];

        this.setState ({
            dateList : newDateList
        })    
        
        localStorage.setItem('savedInfo', JSON.stringify(newDateList));
        
        this.reset();
    }

    render() {
        const {mood, message, newDate, dateList} = this.state;

        return (
            <React.Fragment>
                <header className="header">
                    <Header />
                </header>
                <main className="main__wrapper">
                    <Switch>
                        <Route exact path="/" render= {
                            () => <Home 
                                dateList = {dateList}
                            />
                        }></Route>
                        <Route path ="/edit" render={
                            () => <Edit
                                  handleChange= {this.handleChange}
                                  mood= {mood}
                                  handleChecked= {this.handleChecked}
                                  handleInputMessage= {this.handleInputMessage}
                                  message= {message}
                                  newDate= {newDate}
                                  reset= {this.reset}
                                  saveData= {this.saveData}
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