import React from 'react';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import './Edit.scss';


class Edit extends React.Component {
 
    render() {
        const {handleChange, handleChecked, mood, handleInputMessage, message, reset, saveData, newDate, isDuplicated} = this.props;
       
        return (
           <div className="edit__wrapper">
               <div className="fill_info">
                    <h2 className= "edit__title">Choose a date</h2>
                    <DatePicker
                            selected={newDate}
                            onChange={handleChange} 
                            className={isDuplicated ? "calendar__input calendar__error" : "calendar__input"}              
                    />
                    <h2 className= "edit__title">Was it a good or a bad day?</h2>
                    <div className= "mood__options">
                            <label htmlFor="happy">
                                <input id="happy" type="radio" value="happy" name="mood" onClick={handleChecked}/>
                                :)
                            </label>
                            <label htmlFor="sad">
                                <input id="sad" type="radio" value="sad" name="mood" onClick={handleChecked} />
                                :(
                            </label>
                        </div>
                        {mood === "happy" ?
                            <div className="message__container">
                                <label className= "edit__title">Remember the good things!</label>
                                <input type="text" className="input__msg" onChange={handleInputMessage} value= {message} />
                            </div>
                            :
                            ''
                        }
                </div>
                <p className={isDuplicated ? "error__msg error" : "error__msg"}><i className="fas fa-exclamation-triangle"></i> You already saved that date!</p>
                <div className="buttons__container">
                    <button onClick= {saveData} className="btn save" >Save</button>
                    <Link to="/" className="btn cancel" onClick={reset}>Cancel</Link>    
                </div>     
           </div>
        );
    }
}

export default Edit;