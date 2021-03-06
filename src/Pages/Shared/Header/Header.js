import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../images/logo white.png'
import LogoBlack from '../../../images/logo.png'
import CustomLink from './CustomLink/CustomLink';

const Header = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <nav className={`fixed px-[120px] py-5 flex items-center justify-between w-full ${(location.pathname === '/login' || location.pathname === '/register') && 'text-black sticky top-0 bg-white'}`}>
            {
                (location.pathname === '/login' || location.pathname === '/register') ?
                    <Link to='/'><img className='h-10' src={LogoBlack} alt="" /></Link>
                    :
                    <Link to='/'><img className='h-10' src={Logo} alt="" /></Link>
            }
            <div>
                <input className='border rounded-md py-1 px-3 w-[350px] bg-white bg-opacity-20 outline-none' type="text" name="search" id="search" placeholder='Search Your Destination' />
            </div>
            <div className='flex items-center gap-14'>
                <CustomLink className="hover:text-amber-500 py-2" to='/news'>News</CustomLink>
                <CustomLink className="hover:text-amber-500 py-2" to='/destination'>Destination</CustomLink>
                <CustomLink className="hover:text-amber-500 py-2" to='/blog'>Blog</CustomLink>
                <CustomLink className="hover:text-amber-500 py-2" to='/contact'>Contact</CustomLink>
                <CustomLink className="hover:text-amber-500 py-2" to='/login'>
                    <button className='bg-amber-500 px-5 py-1 rounded-md text-black hover:bg-amber-400'>Login</button>
                </CustomLink>
            </div>
        </nav>
    );
};

export default Header;