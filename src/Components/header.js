import React from 'react';
import Navigation from './Navigation.js';


function Header() {
    return (
        <header className='border-b p-3 flex justify-between'>
            <span className='font-bold'>AppName</span>

            <Navigation />
        </header>
    )
}

export default Header;