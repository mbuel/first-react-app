import React from 'react';
import HelloWorld from '../Components/HelloWorld.js';

function Contact() {
    return (
        <div className='px-2'>
            <h1 className="font-bold text-2xl"> About us</h1>

            <HelloWorld name="my name is Morris Buel"/>
            <div >
                <span class="font-bold text-2xl">Phone: </span> <a href="tel:4257866458" class="text-indigo-600 group-hover:text-blue-900 sm:hover:underline">425-786-6458</a>
            </div>
            <div>
                <span class="font-bold text-2xl">Email: </span> <a href="mailto:morris.buel@gmail.com" className="text-indigo-600 sm:hover:underline">morris.buel@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact;