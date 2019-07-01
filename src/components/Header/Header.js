import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render () {
        return (
           <h1 className="header__title">How was your day today?  <span role="img" aria-label="blinking-eye emoji">😉</span> </h1>
        );
    }
}

export default Header;