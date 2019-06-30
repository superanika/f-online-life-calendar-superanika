import React from 'react';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import './Edit.scss';

class Edit extends React.Component {
 
    render() {
        const {handleChange, handleChecked, mood, handleInputMessage, message, reset, saveData, newDate} = this.props;
      
        return (
           <div className="edit__wrapper">
               <h2>Date</h2>
               <DatePicker
                    selected={newDate}
                    onChange={handleChange}                
               />
               <h2>Mood</h2>
               <div>
                    <label htmlFor="happy">
                        <input
                        id="happy"
                        type="radio"
                        value="happy"
                        name="mood"
                        onClick={handleChecked}
                        />
                        :)
                    </label>
                </div>
                <div>
                    <label htmlFor="sad">
                        <input
                        id="sad"
                        type="radio"
                        value="sad"
                        name="mood"
                        onClick={handleChecked}
                        />
                        :(
                    </label>
                </div>
                {mood === "happy" ?
                    <div className="message__container">
                        <label>Message</label>
                        <input type="text" onChange={handleInputMessage} value= {message} />
                    </div>
                    :
                    ''
                }
                <Link to="/" onClick= {saveData}>
                    <button className="save">Save</button>
                </Link>
                <Link to="/">
                    <button className="cancel" onClick={reset}> Cancel</button>    
                </Link>         
           </div>
            
        );
    }
}

export default Edit;