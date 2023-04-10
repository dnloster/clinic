import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import LogoTest from '../assets/logoTest.png';
import Question from '../components/Test/Question';
import Started from '../components/Test/Started';

export default function Test() {
    const [showQuestions, setShowQuestions] = useState(false);
    const buttonRef = useRef();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setShowQuestions(true);
        buttonRef.current.textContent = 'Trở về trang chủ';
        buttonRef.current.onclick = () =>
            Swal.fire({
                title: 'Bạn chắc chắn muốn thoát?',
                text: 'Nếu thoát, bạn sẽ phải thực hiện lại từ đầu',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Thoát',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/');
                }
            });
    };

    return (
        <>
            <div className="mainmenu-wrapper bg-white border-b-[4px] border-solid border-[#60c063]">
                <div className="container mx-auto px-[15px] before:content-[' '] before:table after:clear-both flex justify-between">
                    <nav className="navbar mb-[30px] md:rounded-[4px] relative min-h-[50px] border border-solid border-transparent before:content-[' '] before:table after:clear-both">
                        <div className="container xl:w-[1170px] lg:w-[970px] md:w-[750px] mt-[35px] px-[15px] before:content-[' '] before:table after:clear-both">
                            <div className="navbar-header mx-[-15px] md:mx-0 float-left before:content-[' '] before:table after:clear-both">
                                <Link
                                    className="navbar-brand md:ml-[-15px] mt-[-20px] p-0 mr-[30px] text-[16px] text-[#999] h-auto float-left"
                                    to="/test"
                                >
                                    <img className="h-[68px]" src={LogoTest} alt="Ai cũng có thể tham gia" />
                                </Link>
                            </div>
                            <div className="hiendesktop float-right">
                                <p className="mb-0 mt-[5px] text-[120%] ">
                                    <img
                                        className="inline alignnone size-full wp-image-311"
                                        src="https://mindcare.vn/wp-content/uploads/2020/04/footer-icon-hotline.png"
                                        alt=""
                                        width={17}
                                        height={18}
                                    />
                                    Hotline hỗ trợ 24/7: <span className="font-bold">0828.77.22.33</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div>&nbsp;</div>
            {showQuestions ? <Question /> : <Started />}
            <div className="form-group text-center mb-[15px] ">
                <Link
                    className="border border-solid border-[#60c063] rounded-[2px] cursor-pointer inline-block text-center bg-[#60c063] text-white py-[6px] px-[12px] text-[14px] leading-[1.42857143] select-none transition-all duration-[250ms] hover:bg-[#3b3c41] hover:border-[#3b3c41]"
                    onClick={handleButtonClick}
                    ref={buttonRef}
                >
                    Bắt đầu
                </Link>
            </div>
        </>
    );
}
