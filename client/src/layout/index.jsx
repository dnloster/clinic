import React, { useEffect, useRef, useState } from 'react';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';

import HeaderComponent from '../components/Header';
import Modal from '../components/Modal';

// const useStyles = makeStyles((theme) => ({
//     button: {
//         position: 'fixed !important',
//         bottom: '50px',
//         right: '50px',
//         fontSize: '14px !important',
//         animation: '$shadow-pulse 2.5s infinite',
//         [theme.breakpoints.up('lg')]: {
//             display: 'none !important',
//         },
//     },
//     '@keyframes shadow-pulse': {
//         '0%': {
//             boxShadow: 'none',
//         },
//         '50%': {
//             boxShadow: '0 0 0 1.5rem rgba(25, 118, 210, 0.16)',
//         },
//         '100%': {
//             boxShadow: 'none',
//         },
//     },
// }));

export default function MainLayout({ children }) {
    const [openModal, setOpenModal] = useState(false);

    const showModal = () => {
        setOpenModal(true);
    };

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
        <>
            <HeaderComponent />
            <div className="content bg-[#fff]">{children}</div>
            {/* <Button variant="contained" size="medium" endIcon={<BorderColorTwoTone />} className={classes.button}>
            //     Bắt đầu khảo sát
            // </Button> */}
            {/* <Modal /> */}
            <Footer />
            <BackToTop />
        </>
    );
}
