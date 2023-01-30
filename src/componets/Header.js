import React from 'react';
import './Header.css';

function Header() {
    return ( 
        <header>
            <button className='logo'>logo</button>

            <div className='search-box'>
                <div className='zoom'>
                    <button className='zoom-button'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0002 22L15.6562 15.656" stroke="#001342" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
                    <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#001342" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
                   </svg>
                    </button>
                </div>
                <input className='search-products' type="text" placeholder='Search products'  />
            </div>

            <a className='account-1' href="#">
                <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_113)">
                <path d="M1 23C1 17.477 5.477 13 11 13H13C18.523 13 23 17.477 23 23" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
                <path d="M12 13C15.3137 13 18 10.3137 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 10.3137 8.68629 13 12 13Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
                </g>
                <defs>
                <clipPath id="clip0_1_113">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <span className='sing-in'>singin</span>
            </a>

            <a className='cart' href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="#091625"/>
                    <path d="M19.734 23H4.266C3.98238 23.0001 3.70199 22.9398 3.44345 22.8232C3.1849 22.7066 2.9541 22.5364 2.76638 22.3238C2.57865 22.1112 2.43829 21.8611 2.3546 21.5901C2.27092 21.3191 2.24583 21.0334 2.281 20.752L4 7H20L21.719 20.752C21.7542 21.0334 21.7291 21.3191 21.6454 21.5901C21.5617 21.8611 21.4214 22.1112 21.2336 22.3238C21.0459 22.5364 20.8151 22.7066 20.5566 22.8232C20.298 22.9398 20.0176 23.0001 19.734 23Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
                    <path d="M8 10V5C8.00343 3.94019 8.42596 2.92476 9.17536 2.17536C9.92476 1.42596 10.9402 1.00343 12 1V1C13.0598 1.00343 14.0752 1.42596 14.8246 2.17536C15.574 2.92476 15.9966 3.94019 16 5V10" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
          </svg>
          <span className='shopping-bag'>cart</span>
            </a>

        </header>
     );
}

export default Header;