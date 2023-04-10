import { faCalendarDays, faHandPointUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import expertApi from '../api/expert.api';

export default function ExpertDetail() {
    const { expertID } = useParams();
    const [expert, setExpert] = useState();

    useEffect(() => {
        const getExpert = async () => {
            const { response, err } = await expertApi.detail({ expertID });
            if (response) setExpert(response);
        };
        getExpert();
    }, [expertID]);

    return (
        <>
            {expert && (
                <>
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
                                            <span className="divider">/ {''}</span>{' '}
                                            <Link to="/doi-ngu-chuyen-gia">Đội ngũ chuyên gia</Link>
                                            <span className="divider">/</span> {expert.name}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gap pt-[48px] block h-auto"></div>
                    <div className="xl:w-[1170px] lg:w-[970px] md:w-[750px] p-[15px] mx-auto">
                        <div className="anh pr-[15px] table-cell align-top">
                            <img
                                src={expert.avt}
                                alt=""
                                className="md:w-[120px] md:h-[120px] rounded-[50%] w-full h-full"
                            />
                        </div>
                        <div className="table-cell align-top">
                            <h1 className="m-0 p-0 font-bold text-[#333] leading-[1.2] md:text-[27px] md:mb-[10px]">
                                {expert.name}
                            </h1>
                            <div className="text-[#555] text-[13px]">{expert.desc}</div>
                        </div>
                    </div>
                    <div className="bs-lichkham bs-phandoan bg-white border-b border-solid border-b-[#ccc]">
                        <div id="lichkham">
                            <div className="vung-bao px-0 xl:w-[1170px] lg:w-[970px] md:w-[750px] mx-auto">
                                <div
                                    id="lichkham_chitiet"
                                    className="lichkham_chitiet uutien-som"
                                    dl-tt="false"
                                    dl-bs-id="1466"
                                    dl-bs-ma=""
                                    dl-hien-noikham="true"
                                    dl-dichvu="Khám"
                                    dl-hien-diachi="1"
                                    dl-dienthoai="024-7301-2468"
                                >
                                    <div
                                        className="mot-bs mot-bs-1466 bg-transparent pb-[10px] m-0 shadow-none rounded-[8px] border-none"
                                        data-dichvu="Khám"
                                    >
                                        <div className="mot-bs-lichkham !float-none !w-full min-[900px]:w-[47%] min-[760px]:w-[47%] min-[760px]:float-left min-[760px]:p-0 min-[760px]:m-0">
                                            <p className="mot-bs-chon-gio text-[#666] uppercase font-bold p-[15px] m-0">
                                                <select className="select bg-transparent border-b-[1px] border-solid border-[#999] text-[14px] leading-[1.5]">
                                                    <option value=".lich-c1466-d1">Hôm nay - 10/4</option>
                                                    <option value=".lich-c1466-d2">Thứ 3 - 11/4</option>
                                                    <option value=".lich-c1466-d3">Thứ 4 - 12/4</option>
                                                    <option value=".lich-c1466-d4">Thứ 5 - 13/4</option>
                                                    <option value=".lich-c1466-d5">Thứ 6 - 14/4</option>
                                                    <option value=".lich-c1466-d6">Thứ 7 - 15/4</option>
                                                </select>
                                            </p>
                                            <div
                                                data-thu="1"
                                                data-chonngay=".lich-c1466-d1"
                                                className="mot-bs-ngay mot-bs-thu0 lich-c1466-d1 lich-c1466-d1-p154 hien opacity-[1] block transition-[display] duration-500 px-[15px] pb-[15px]"
                                            >
                                                <h3 className="mot-bacsi-dichvu mot-bacsi-dichvu-1 uppercase text-[14px] text-[#333] font-bold p-0 mb-[5px]">
                                                    <FontAwesomeIcon icon={faCalendarDays} /> Lịch Khám
                                                </h3>
                                                <div className="lich-kham-hom-nay md:w-[55%] md:float-left">
                                                    <div className="mot-bs-co-lichkham md:block md:overflow-x-visible md:whitespace-normal md:pb-[10px] md:w-full block overflow-x-scroll whitespace-nowrap pb-[10px]">
                                                        <a
                                                            href="https://bookingcare.vn/dat-lich-kham/70157560?t=1"
                                                            data-id="70157560"
                                                            data-partner="124"
                                                            data-wday="1"
                                                            data-name="11:00 - 11:30"
                                                            rel="nofollow"
                                                            className="bg-[#fff04b] lg:min-w-[22%] md:mt-[5px] md:mb-[5px] md:py-[10px] md:px-[15px] mr-[8px] min-w-[26%] leading-[1.3333] inline-block align-middle whitespace-nowrap text-center text-[#333] font-bold p-[10px] relative no-underline hover:no-underline hover:cursor-pointer hover:shadow-[0px_0px_0px_2px_rgb(51,176,227)_inset]"
                                                        >
                                                            11:00 - 11:30
                                                        </a>
                                                        <a
                                                            href="https://bookingcare.vn/dat-lich-kham/10157567?t=1"
                                                            data-id="10157567"
                                                            data-partner="124"
                                                            data-wday="1"
                                                            data-name="13:30 - 14:00"
                                                            rel="nofollow"
                                                            className="bg-[#fff04b] lg:min-w-[22%] md:mt-[5px] md:mb-[5px] md:py-[10px] md:px-[15px] mr-[8px] min-w-[26%] leading-[1.3333] inline-block align-middle whitespace-nowrap text-center text-[#333] font-bold p-[10px] relative no-underline hover:no-underline hover:cursor-pointer hover:shadow-[0px_0px_0px_2px_rgb(51,176,227)_inset]"
                                                        >
                                                            13:30 - 14:00
                                                        </a>
                                                        <a
                                                            href="https://bookingcare.vn/dat-lich-kham/20157567?t=1"
                                                            data-id="20157567"
                                                            data-partner="124"
                                                            data-wday="1"
                                                            data-name="14:00 - 14:30"
                                                            rel="nofollow"
                                                            className="bg-[#fff04b] lg:min-w-[22%] md:mt-[5px] md:mb-[5px] md:py-[10px] md:px-[15px] mr-[8px] min-w-[26%] leading-[1.3333] inline-block align-middle whitespace-nowrap text-center text-[#333] font-bold p-[10px] relative no-underline hover:no-underline hover:cursor-pointer hover:shadow-[0px_0px_0px_2px_rgb(51,176,227)_inset]"
                                                        >
                                                            14:00 - 14:30
                                                        </a>
                                                        <a
                                                            href="https://bookingcare.vn/dat-lich-kham/30157567?t=1"
                                                            data-id="30157567"
                                                            data-partner="124"
                                                            data-wday="1"
                                                            data-name="14:30 - 15:00"
                                                            rel="nofollow"
                                                            className="bg-[#fff04b] lg:min-w-[22%] md:mt-[5px] md:mb-[5px] md:py-[10px] md:px-[15px] mr-[8px] min-w-[26%] leading-[1.3333] inline-block align-middle whitespace-nowrap text-center text-[#333] font-bold p-[10px] relative no-underline hover:no-underline hover:cursor-pointer hover:shadow-[0px_0px_0px_2px_rgb(51,176,227)_inset]"
                                                        >
                                                            14:30 - 15:00
                                                        </a>
                                                        <a
                                                            href="https://bookingcare.vn/dat-lich-kham/40157567?t=1"
                                                            data-id="40157567"
                                                            data-partner="124"
                                                            data-wday="1"
                                                            data-name="15:00 - 15:30"
                                                            rel="nofollow"
                                                            className="bg-[#fff04b] lg:min-w-[22%] md:mt-[5px] md:mb-[5px] md:py-[10px] md:px-[15px] mr-[8px] min-w-[26%] leading-[1.3333] inline-block align-middle whitespace-nowrap text-center text-[#333] font-bold p-[10px] relative no-underline hover:no-underline hover:cursor-pointer hover:shadow-[0px_0px_0px_2px_rgb(51,176,227)_inset]"
                                                        >
                                                            15:00 - 15:30
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="mot-bs-lichkham-huongdan text-[12px] text-[#333]"
                                                        data-name=""
                                                    >
                                                        Chọn <FontAwesomeIcon icon={faHandPointUp} /> và đặt (Phí đặt
                                                        lịch 0<sup>đ</sup>)
                                                    </div>
                                                </div>
                                                <div className="lichkham-thongtin md:w-[45%] md:float-left md:pl-[20px] md:mt-0 md:border-l md:border-solid md:border-[#eee]">
                                                    <div className="lichkham-diadiem md:border-none md:pt-0 md:mt-0 border-t border-solid border-t-[#eee] pt-[10px] mt-[10px]">
                                                        <h3 className="uppercase text-[14px] text-[#666] font-bold">
                                                            Địa chỉ Khám
                                                        </h3>
                                                        <div className="lichkham-ten font-bold text-[13px] py-[3px]">
                                                            Phòng khám Bệnh viện Đại học Y Dược 1
                                                        </div>
                                                        <div className="lichkham-diachi text-[13px] py-[3px]">
                                                            20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="xeplai"></div>
                                            </div>
                                        </div>
                                        <div className="xeplai clearfix clear-both"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ExpertDetail {expertID}
                    {expert.name} */}
                </>
            )}
        </>
    );
}
