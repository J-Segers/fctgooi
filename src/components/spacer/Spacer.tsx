import React from 'react';
import "./Spacer.css";
import PropTypes from 'prop-types';

Spacer.propTypes = {
    
};

function Spacer() {
    return (
        <div className='spacer-container'>
            <div className="spacer"></div>
        </div>
    );
}

export default Spacer;