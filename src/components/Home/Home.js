import React from 'react';
import {Link} from 'react-router-dom';
import helper from '../helper';
import './Home.scss'

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
                            <div className="happy__face face__container" key={index}>
                                <span className="face" role="img" aria-label="happy face">😁</span>
                                <div className="info__container">
                                    <p>{helper.getFormatedDate(item.newDate)}</p>
                                    <p>{item.message}</p>
                                </div>
                            </div>
                            :
                            <div className="sad__face face__container" key={index}>
                                <span  className="face" role="img" aria-label="sad face">😡</span>
                                <div className="info__container">
                                    <p>{helper.getFormatedDate(item.newDate)}</p>
                                </div>
                            </div>
                        )
                     }
                </div>
            </div>
        );
    }
}

export default Home;