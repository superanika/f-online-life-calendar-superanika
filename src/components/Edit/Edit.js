import React from 'react';
import DatePicker from "react-datepicker";

 
import "react-datepicker/dist/react-datepicker.css";

class Edit extends React.Component {

    render() {
        const { startDate, handleChange, handleChecked, mood} = this.props;
        let newDate = startDate.toString().substring(4 , 15);
        return (
           <div className="edit__wrapper">
               <h2>Date</h2>
               <DatePicker
               selected={startDate}
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
                        <input type="text"/>
                    </div>
                    :
                    ''
                }
                <button className="save">Save</button>
                <button className="cancel">Cancel</button>             
           </div>
            
        );
    }
}

export default Edit;