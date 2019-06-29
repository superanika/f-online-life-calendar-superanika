import React from 'react';
import {Link} from 'react-router-dom';
import helper from '../helper';

class Home extends React.Component {
    render() {
        const {dateList} = this.props;

        return (
            <div className="home__wrapper">
                <Link to= "/edit">
                    <button className="add__buttom">+</button>
                </Link>
                <div className="mood__container">
                    {
                        dateList.length === 0 ?
                        <p>You can start adding your date status by clicking on + button</p>
                        :
                        dateList.map((item, index) =>
                          item.mood === "happy" ?
                            <div className="happy__face" key={index}>
                                <p>:)</p>
                                <p>{helper.getFormatedDate(item.newDate)}</p>
                                <p>{item.message}</p>
                            </div>
                            :
                            <div className="sad__face" key={index}>
                                <p>:(</p>
                                    <p>{helper.getFormatedDate(item.newDate)}</p>
                            </div>
                        )
                     }
                </div>
            </div>
        );
    }
}

export default Home;