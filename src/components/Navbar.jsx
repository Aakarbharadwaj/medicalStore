import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const loggedIn = props.loggedIn;
    const setLoggedIn = props.setLoggedIn;
    return (
        <div className='flex items-center justify-between py-2 px-6 bg-gray-900 text-white'>
            <div className='w-20'>
                <Link to="/" className='text-xl font-bold'>
                    <img src='https://uploads.turbologo.com/uploads/design/hq_preview_image/881852/draw_svg20210625-19886-u8ghol.svg.png' alt='Logo' className='h-auto w-auto max-w-full max-h-full' />
                </Link>
            </div>
            <div className='space-x-4'>
                <ul className='flex space-x-4'>
                    <li><Link to="/" className='hover:text-gray-300'>Home</Link></li>
                    <li><Link to="/about" className='hover:text-gray-300'>About</Link></li>
                    <li><Link to="/support" className='hover:text-gray-300'>Support</Link></li>
                </ul>
            </div>
            <div>
                {!loggedIn &&
                    <Link to="/login" className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'><button>Login</button></Link>
                }
                {!loggedIn &&
                    <Link to="/signup" className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'><button>Signup</button></Link>
                }
                {loggedIn &&
                    <Link to="/logout" className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'><button onClick={() => setLoggedIn(false)}>Logout</button></Link>
                }
                {loggedIn &&
                    <Link to="/signout" className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'><button onClick={() => setLoggedIn(false)}>Signout</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
