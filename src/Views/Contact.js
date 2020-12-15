import React from 'react';
import HelloWorld from '../Components/HelloWorld.js';

function Contact() {
    return (
        <div className='px-2'>
            <h1 className="font-bold text-2x1"> About us</h1>

            <HelloWorld name="Morris Buel"/>
            <div class="text-indigo-600 group-hover:text-blue-900">
                <span>Phone: </span> <a href="tel:4257866458" >425-786-6458</a>
            </div>
            <div>
                <span>Email: </span> <a href="mailto:morris.buel@gmail.com" className="text-blue-200 sm:hover:underline">morris.buel@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact;