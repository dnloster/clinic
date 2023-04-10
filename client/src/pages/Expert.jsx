import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../config/routes';

const experts = [
    {
        id: 1,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 2,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 3,
        name: 'TH.S TỐNG THỊ KHÁNH HUYỀN',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 4,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 5,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 6,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 7,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 8,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 10,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 11,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 12,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 13,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 14,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 15,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
    {
        id: 16,
        name: 'PGS. TS Bùi Thị Hồng Thái',
        desc: 'Giảng viên Khoa Tâm lý học, trường ĐHKHXH&NV, ĐHQG HN. Giám sát chuyên môn tại Tâm lý MindCare',
        avt: 'https://mindcare.vn/wp-content/uploads/2022/12/z3942942258744_f5b77d62e9ea3477724cc109fd9aad56-e1670470801196.jpg',
    },
];

export default function Expert() {
    return (
        <div className="main">
            <div id="page-header-2119051450" className="page-header-wrapper">
                <div className="page-title dark featured-title relative">
                    <div className="page-title-bg shadow-[inset_0_0_30px_rgba(0,0,0,0.1)] overflow-hidden">
                        <div className="title-bg fill bg-fill parallax-active bg-[url('https://mindcare.vn/wp-content/uploads/2020/04/cute-family-picture-160994.jpg')] bg-cover overflow-hidden bg-center">
                            {' '}
                        </div>
                        <div className="title-overlay fill bg-[rgba(17,132,114,0.92)]"></div>
                    </div>
                    <div className="page-title-inner container mx-[auto] px-[15px] items-center flex flex-wrap justify-between min-h-[145px] py-[20px] max-w-[1170px]">
                        <div className="title-wrapper max-h-full text-left medium-text-center z-[999]">
                            <h1 className="entry-title mb-0 z-[999] text-white font-bold text-[27.2px]">
                                Đội ngũ chuyên gia
                            </h1>
                        </div>
                        <div className="title-content flex-col flex-right text-right medium-text-center text-white font-bold z-[999]">
                            <div className="title-breadcrumbs pb-half pt-half">
                                <nav className="woocommerce-breadcrumb breadcrumbs ">
                                    <Link to="/" className="font-light">
                                        Trang chủ
                                    </Link>{' '}
                                    <span className="divider">/</span> Đội ngũ chuyên gia
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-[1170px]">
                <div className="pt-[32px] px-[15px] mb-[24px]">
                    <h2 className="section-title relative flex flex-wrap items-center justify-between w-full mb-[12.8px]">
                        <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                        <span className="text-[#36a264] uppercase text-center mx-[15px] text-[26px] font-bold">
                            CHUYÊN GIA TÂM LÝ
                        </span>
                        <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                    </h2>
                </div>
                <div className="content-experts">
                    <div className="cards">
                        {experts.map((expert) => {
                            return (
                                <div className="card" key={expert.id}>
                                    <Link to={routes.expertDetail(expert.id)}>
                                        <img
                                            src={expert.avt}
                                            alt=""
                                            width={1536}
                                            height={1423}
                                            className="card-image mb-[15px] cursor-pointer"
                                        />
                                        <div className="card-content">
                                            <div className="card-title text-[#0892c4] cursor-pointer uppercase font-bold text-[1.125em] text-center">
                                                {expert.name}
                                            </div>
                                            <div className="card-desc cursor-auto mb-[1.3em] text-justify text-[#777]">
                                                {expert.desc}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
