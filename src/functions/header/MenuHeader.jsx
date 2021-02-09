import React from 'react';

function MenuHeader (props) {
    return (
        <div className="menu-toggle">
            <i className="fas fa-bars" onClick={props.addClass}></i>
        </div>
    )
}

export default MenuHeader;