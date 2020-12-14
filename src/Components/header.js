import React from 'react';
import Navigation from './Navigation.js';


function Header() {
    return (
        <header class='border-b p-3 flex justify-between'>
            <span class='font-bold'>AppName</span>

            <Navigation />
        </header>
    )
}

export default Header;