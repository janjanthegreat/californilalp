import { useState } from 'react';
import logo from '../assets/images/Californila-New-Logo-Bolder-tagline-cut.png'; 
import mobileLogo from '../assets/images/Californila-mobile-Logo-blue-BG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faFirstAid, faStore } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
      };

    return (
        <header className="w-full relative flex flex-col">
            <nav className="w-full flex items-center justify-between px-6 py-6">
                <div className="w-1/3"></div>
                <div className="w-1/3 flex justify-center">
                    <a href="#">
                        <img id="caliLogo" src={logo} className="w-[350px] h-auto" alt="Californila Logo" />
                    </a>
                </div>

                <div className="w-1/3 flex justify-end">

                    {/* <div id="toggleMenu" className="relative w-full flex justify-end">
                        <div id="nav-icon3" className={isOpen ? 'open' : ''} onClick={toggleNav}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div> */}
                </div>
            </nav>

            <div
                className={`${ isOpen ? 'open' : 'close' } md:p-8 p-1 position-relative text-right w-full  md:w-auto transition-all duration-500 ease-out overflow-hidden bg-[#003362]`} 
                id="navbar-default"
            >
                <div className="caliMobileLogo text-center">
                    <a href='/'><img src={mobileLogo} style={{ width: '120px', margin: '0 auto'}}/></a>
                </div>
                <div id="nav-icon3" className={`${isOpen ? 'open left-[-50px]' : 'left-[-80px]'} close_nav_btn`} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="font-medium flex flex-col p-0 mt-10">
                    <li className="hover:bg-white transition-all duration-300 ease-in-out">
                        <a href="https://personalshopper.californila.com" className="flex flex-row  items-center txt-sm md:text-xl py-2 px-3 text-white hover:text-[#003362] transition-colors duration-300 ease-in-out">
                            <span className='mr-2'><FontAwesomeIcon icon={faShoppingCart} /></span>
                            Personal Shopper
                        </a>
                    </li>
                    <li className="hover:bg-white transition-all duration-300 ease-in-out">
                        <a href="https://shop.californila.com" className="block txt-sm md:text-xl py-2 px-3 text-white hover:text-[#003362] transition-colors duration-300 ease-in-out"> 
                            <span className='mr-2'><FontAwesomeIcon icon={faStore} /></span>
                            Marketplace
                        </a>
                    </li>
                    <li className="hover:bg-white transition-all duration-300 ease-in-out">
                        <a href="https://emergencykits.californila.com" className="block text-sm md:text-xl py-2 px-3 text-white hover:text-[#003362] transition-colors duration-300 ease-in-out">
                            <span className='mr-2'><FontAwesomeIcon icon={faFirstAid} /></span>
                            Emergency Kits
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
