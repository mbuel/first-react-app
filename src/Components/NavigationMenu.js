import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
    let linkClasses="text-blue-500 px-5 py-15 border-t border-b block";
    return (
        <div>
            <div className="font-bold py-3 px-3">The Menu</div>
            <ul>
                <li>
                    <Link to="/" 
                    className={linkClasses}
                    onClick={props.closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" 
                    className={linkClasses}
                    onClick={props.closeMenu}>About Me</Link>
                </li>
                <li>
                    <Link to="/contact" 
                    className={linkClasses}
                    onClick={props.closeMenu}>Contact info</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationMenu;