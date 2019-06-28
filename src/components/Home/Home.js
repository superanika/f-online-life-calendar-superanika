import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="home__wrapper">
                <button className="add__buttom">
                    <Link to= "/edit"> + </Link>
                </button>
                <div className="mood__container">
                    
                </div>
            </div>
            
        );
    }
}

export default Home;