import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    
    render () {
        const url= "https://www.linkedin.com/in/ana-mar%C3%ADa-romero-garcia/";

        return (
            <p className="footer__copy">
                  ©  <a href={url} target="blank" className="linkedin">SuperAnika</a>  2019
            </p>
        );
    }
}

export default Footer;