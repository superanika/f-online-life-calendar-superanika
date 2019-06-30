import React from 'react';
import './App.scss';
import CalendarApp from './components/CalendarApp/CalendarApp';

class App extends React.Component {
  render () {
    
    return (
      <div className="App">
        <CalendarApp />
      </div>
    );
  }
}

export default App;
