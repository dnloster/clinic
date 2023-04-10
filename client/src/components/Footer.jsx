import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#efefef]">
            <div className="grid grid-cols-3 container mx-auto max-w-[1170px] ">
                <div className="col mx-auto">
                    <div className="col-inner pr-[36px]">
                        <h3 className="pt-[30px] text-left text-[#36a264] uppercase text-[16px] mb-[8px]">
                            <strong>TÂM LÝ MINDCARE - VÌ TRIỆU NGƯỜI VIỆT HẠNH PHÚC HƠN MỖI NGÀY</strong>
                        </h3>
                        <p className="mb-[1.3em]">
                            <strong>
                                <span>(CÔNG TY TNHH VIỆN TÂM LÝ &amp; GIÁO DỤC VIỆT NAM)</span>
                            </strong>
                        </p>
                        <ul className="text-[14px] list-none mb-[1.3em]">
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <span className="text-[90%]">
                                    <strong>Hà Nội: </strong>
                                    Số 22, Ngõ 99 Nguyễn Tuân, P.Thanh Xuân Trung, Q. Thanh Xuân, Hà Nội
                                </span>
                            </li>
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <span className="text-[90%]">
                                    <strong>TP Hồ Chí Minh: </strong>
                                    35 Hoàng Diệu, Phường 12, Quận 4, TP. Hồ Chí Minh
                                </span>
                            </li>
                        </ul>
                        <p className="mb-[1.3em]">
                            <span className="text-[90%]">
                                <FontAwesomeIcon icon={faPhone} className="text-[#36a264]" />
                                <span> Vui lòng đặt lịch hẹn trước</span>
                                <span> - </span>
                                <span>
                                    Hotline:
                                    <p>
                                        <strong> 0828.77.22.33</strong>
                                    </p>
                                    <p>
                                        <strong> 0877.16.33.66</strong>
                                    </p>
                                </span>
                            </span>
                            <span className="text-[90%]">
                                <FontAwesomeIcon icon={faEnvelope} className="text-[#36a264]" />
                                <strong> tamlymindcare@gmail.com</strong>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="col mx-auto">
                    <div className="col-inner pr-[36px] pl-[24px] pt-[15px]">
                        <h3 className="pt-[15px] text-[#36a264] text-[16px] font-bold">GIỚI THIỆU</h3>
                        <ul className="text-[14px] list-none mb-[1.3em]">
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <Link to="/gioi-thieu">
                                    <span className="text-[90%]">Giới thiệu</span>
                                </Link>
                            </li>
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <Link to="/doi-ngu-chuyen-gia">
                                    <span className="text-[90%]">Đội ngũ chuyên gia</span>
                                </Link>
                            </li>
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <Link to="/lien-he">
                                    <span className="text-[90%]">Liên hệ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col mx-auto">
                    <div className="col-inner pr-[36px] pl-[24px] pt-[15px]">
                        <h3 className="pt-[15px] text-[#36a264] text-[16px] font-bold">DỊCH VỤ</h3>
                        <ul className="text-[14px] list-none mb-[1.3em]">
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <Link to="/dich-vu-tham-van-tri-lieu-tam-ly">
                                    <span className="text-[90%]">Tham vấn, trị liệu tâm lý</span>
                                </Link>
                            </li>
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <Link to="/dich-vu-huong-nghiep">
                                    <span className="text-[90%]">Tư vấn hướng nghiệp</span>
                                </Link>
                            </li>
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <Link to="/dich-vu-tam-ly-hoc-duong">
                                    <span className="text-[90%]">Tâm lý học đường</span>
                                </Link>
                            </li>
                            <li className="ml-[1.3em] mb-[0.6em] before:inline-block before:w-[1em] before:ml-[-1em] before:font-bold before:text-[#36a264] before:content-['\2022']">
                                <Link to="/dich-vu-danh-gia-tam-ly">
                                    <span className="text-[90%]">Đánh giá tâm lý </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
