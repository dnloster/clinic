import React, { useState } from 'react';
import Swal from 'sweetalert2';

import logo from '../assets/logo-mindcare.png';
import phone from '../assets/whatsapp.png';
import location from '../assets/location.png';
import NavbarComponent from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function HeaderComponent() {
    const [openModal, setOpenModal] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const items = [
        {
            label: 'Giới thiệu',
            url: '/gioi-thieu',
        },
        {
            label: 'Đội ngũ chuyên gia',
            url: '/doi-ngu-chuyen-gia',
        },
        {
            label: 'Bài viết',
            children: [
                {
                    label: 'Tâm lý đời sống',
                    url: '/bai-viet-chuyen-de',
                },
                {
                    label: 'Các rối nhiễu thường gặp',
                    url: '/cac-roi-nhieu-thuong-gap',
                },
            ],
            arrow: true,
        },
        {
            label: 'Liên hệ',
            url: '/lien-he',
        },
    ];

    const headerRef = useRef(null);
    const { pathname } = useLocation();
    const active = items.findIndex((e) => e.url === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    const handleExpand = (e) => {
        setIsCollapsed(!isCollapsed);
    };

    const showModal = () => {
        setOpenModal(true);
    };

    const handleChange = () => {};

    const onOk = () => {
        Swal.fire({
            title: 'Info',
            text: 'Bạn đã hoàn thành khảo sát?',
            icon: 'info',
            showCancelButton: 'true',
            confirmButtonText: 'Đã hoàn thành',
            cancelButtonText: 'Chưa hoàn thành',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('Test completed');
                setOpenModal(false);
            } else {
            }
        });
    };

    const onCancel = () => {
        Swal.fire({
            title: 'Info!',
            text: 'Bạn chắc chắn muốn kết thúc khảo sát',
            icon: 'info',
            showCancelButton: 'true',
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Đồng ý',
        }).then((result) => {
            if (result.isConfirmed) {
                setOpenModal(false);
            } else {
                setOpenModal(true);
            }
        });
    };

    return (
        <header className="header w-full z-[30] relative bg-cover transition-[opacity] duration-[300ms]">
            <div className="header-wrapper w-full z-[30] relative bg-cover transition-[opacity] duration-[300ms]">
                <div id="masthead" className="header-main h-[100px] z-[10] relative">
                    <div className="header-inner flex items-center justify-between w-full h-full container mx-auto max-w-[1170px]">
                        <div className="logo w-[142px] ml-0 mr-[30px] leading-none max-h-full">
                            <Link to="/" className="block text-[#446084] text-[32px] uppercase font-bold m-0">
                                <img
                                    src={logo}
                                    alt=""
                                    width={142}
                                    height={100}
                                    className="max-h-[100px] block w-[auto] opacity-100 h-[auto]"
                                />
                            </Link>
                        </div>
                        <div className="ml-[auto] max-h-full">
                            <ul className="header-nav flex-nowrap jutify-end w-full relative flex items-center m-0 p-0">
                                <li className="header-block ml-0 inline-block p-0 relative mx-0 mr-[7px] transition-[background-color] duration-[300ms]">
                                    <div className="header-block-block">
                                        <div className="text-left flex flex-row flex-nowrap w-full">
                                            <div className="icon-img w-[30px]">
                                                <div className="icon">
                                                    <div className="icon-inner">
                                                        <img src={phone} alt="" className="pt-[3.2px] w-full" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icon-text pl-[16px] flex-[1_1_0px] tracking-[0.05em]">
                                                <h5 className="uppercase text-[12px] text-black font-black">
                                                    0828 77 22 33 (Đặt lịch hẹn trước)
                                                </h5>
                                                <h6 className="mb-0 text-[13px] text-black font-normal normal-case leading-[20px]">
                                                    tamlymindcare@gmail.com
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="header-block mr-0 inline-block p-0 relative mx-0 ml-[7px] transition-[background-color] duration-[300ms]">
                                    <div className="header-block-block">
                                        <div className="w-[420px] ml-[36px] text-left flex flex-row flex-nowrap">
                                            <div className="icon-img w-[40px] flex-[0_0_auto] mb-0 max-w-full relative">
                                                <div className="icon">
                                                    <div className="icon-inner">
                                                        <img src={location} alt="" className="pt-[3.2px] w-full" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-[16px] flex-[1_1_0px] tracking-[0.05em]">
                                                <h5 className="uppercase text-[12px] text-black font-black">
                                                    HN: Số 22, ngõ 99 Nguyễn Tuân, Q.Thanh Xuân
                                                </h5>
                                                <h6 className="mb-0 text-[13px] text-black font-normal leading-[20px]">
                                                    HCM: Số 35 Hoàng Diệu, Phường 12, Quận 4
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="header-nav h-[50px] bg-white border-solid border border-[#eee] min-h-[68px] z-[9] relative flex items-center"
                    ref={headerRef}
                >
                    <NavbarComponent items={items} active={active} />
                </div>
            </div>
        </header>
    );
}
