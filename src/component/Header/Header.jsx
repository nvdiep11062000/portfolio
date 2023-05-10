import React from 'react';
import { useRef, useEffect } from 'react';
const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const headerStickyFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header');
            } else {
                headerRef.current.classList.remove('sticky_header');
            }
        });
    };

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

    useEffect(() => {
        headerStickyFunc();
        return window.removeEventListener('scroll', headerStickyFunc);
    }, []);
    return (
        <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* //------LOGO-------- */}
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[35px] h-[35px] bg-black text-white text-[15px] font-[500] rounded-full flex items-center justify-center">
                            DN
                        </span>

                        <div className="leading-[20px]">
                            <h2 className="text-xl text-black font-[700]">Diep Nguyen</h2>
                            <p className="text-gray-400 text-[14px] font-[500]">Intern</p>
                        </div>
                    </div>
                    {/* //------LOGO-------- */}

                    {/* //------MENU-------- */}
                    <div ref={menuRef} onClick={toggleMenu} className="menu ">
                        <ul className="flex items-center gap-[60px]">
                            <li className="text- text-[18px] font-[700]">
                                <a href="#about">About</a>
                            </li>
                            <li className="text- text-[18px] font-[700]">
                                <a href="#service">Service</a>
                            </li>
                            <li className="text- text-[18px] font-[700]">
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li className="text- text-[18px] font-[700]">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* //------MENU-------- */}

                    {/* //------MENU RIGHT-------- */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-black font-[600] border border-solid border-black py-2 px-4 rounded-[8px] max-h-[40px] hover:text-white hover:bg-black hover:font-[500] ease-in duration-300">
                            <i class="ri-send-plane-line"></i>
                            Let's Talk
                        </button>

                        <span onClick={toggleMenu} className="text-2xl md:hidden cursor-pointer">
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                    {/* //------MENU RIGHT-------- */}
                </div>
            </div>
        </header>
    );
};

export default Header;
