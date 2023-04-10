import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';

function NavbarComponent({ items, active }) {
    const [open, setOpen] = useState(false);

    return (
        <nav className="container mx-auto h-full max-w-[1170px] flex flex-row flex-nowrap items-center justify-between w-full text-black">
            <ul className="flex items-center">
                {items.map((item, index) => (
                    <li
                        key={item.label}
                        className={`${
                            index === active ? 'mr-4 relative opacity-[0.85] active' : 'mr-4 relative opacity-[0.85]'
                        }`}
                    >
                        <Link
                            to={item.url}
                            className="py-[10px] px-[15px] rounded transition-[color] duration-[300ms] flex items-center hover:text-[#009688] hover:opacity-[1]"
                        >
                            <span className="text-[14px] uppercase font-bold opacity-[0.85]">{item.label}</span>
                            {item.arrow && <FontAwesomeIcon icon={faAngleDown} className="ml-[3px]" />}
                        </Link>
                        {item.children && (
                            <ul className="absolute left-0 top-full p-[20px] rounded min-w-[260px] bg-white opacity-0 pointer-events-none transition-opacity duration-200 shadow-[1px_1px_15px_rgba(0_0_0_0.15)] border-solid border-[2px] border-[#ddd]">
                                {item.children.map((child) => (
                                    <li
                                        key={child.label}
                                        className="py-[10px] mx-[10px] border-solid border-b border-[#ececec]"
                                    >
                                        <Link
                                            to={child.url}
                                            className="text-[rgba(102,102,102,0.85)] transition-all hover:text-black"
                                        >
                                            {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center">
                <button
                    className="text-[15.6px] font-bold text-white bg-[#d26e4b] hover:bg-[#8f3312] border border-solid border-white px-[1.2em] leading-[2.4em] uppercase rounded-[99px] tracking-[0.03em]] transition-[background-color] duration-[300ms]"
                    onClick={() => setOpen(!open)}
                >
                    Kiểm tra tâm lý
                </button>
                <Modal open={open} setOpen={setOpen} />
            </ul>
        </nav>
    );
}

export default NavbarComponent;
