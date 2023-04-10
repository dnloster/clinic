import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import firstIMG from '../assets/3-min.png';
import secondIMG from '../assets/4-min.png';
import thirdIMG from '../assets/FGDFXHFHFH.png';
import firstFeature from '../assets/nghien-cuu-phat-trien.png';
import secondFeature from '../assets/tham-van-va-tri-lieu.png';
import thirdFeature from '../assets/dao-tao-tam-ly-hoc.png';
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

const posts = [
    {
        id: 1,
        imgUrl: 'https://mindcare.vn/wp-content/uploads/2023/04/M%C3%A0u-kem-%E1%BA%A2nh-Sinh-nh%E1%BA%ADt-B%C3%A0i-%C4%91%C4%83ng-Facebook-300x252.png',
        title: 'CƠN HOẢNG LOẠN VS CƠN LO ÂU: ĐÂU LÀ SỰ KHÁC BIỆT?',
        desc: 'Có thể bạn đã nghe đến hai thuật ngữ “cơn lo âu” (anxiety attack) và',
    },
    {
        id: 2,
        imgUrl: 'https://mindcare.vn/wp-content/uploads/2023/04/M%C3%A0u-kem-%E1%BA%A2nh-Sinh-nh%E1%BA%ADt-B%C3%A0i-%C4%91%C4%83ng-Facebook-300x252.png',
        title: 'CƠN HOẢNG LOẠN VS CƠN LO ÂU: ĐÂU LÀ SỰ KHÁC BIỆT?',
        desc: 'Có thể bạn đã nghe đến hai thuật ngữ “cơn lo âu” (anxiety attack) và',
    },
    {
        id: 3,
        imgUrl: 'https://mindcare.vn/wp-content/uploads/2023/04/M%C3%A0u-kem-%E1%BA%A2nh-Sinh-nh%E1%BA%ADt-B%C3%A0i-%C4%91%C4%83ng-Facebook-300x252.png',
        title: 'CƠN HOẢNG LOẠN VS CƠN LO ÂU: ĐÂU LÀ SỰ KHÁC BIỆT?',
        desc: 'Có thể bạn đã nghe đến hai thuật ngữ “cơn lo âu” (anxiety attack) và',
    },
    {
        id: 4,
        imgUrl: 'https://mindcare.vn/wp-content/uploads/2023/04/M%C3%A0u-kem-%E1%BA%A2nh-Sinh-nh%E1%BA%ADt-B%C3%A0i-%C4%91%C4%83ng-Facebook-300x252.png',
        title: 'CƠN HOẢNG LOẠN VS CƠN LO ÂU: ĐÂU LÀ SỰ KHÁC BIỆT?',
        desc: 'Có thể bạn đã nghe đến hai thuật ngữ “cơn lo âu” (anxiety attack) và',
    },
];

export default function Home() {
    const slides = [
        {
            image: firstIMG,
        },
        {
            image: secondIMG,
        },
        {
            image: thirdIMG,
        },
    ];

    const features = [
        {
            id: 1,
            img: firstFeature,
            title: 'Nghiên cứu phát triển',
            content:
                'Chúng tôi nỗ lực nghiên cứu và phát triển lĩnh vực tâm lý học, ứng dụng khoa học công nghệ trong tâm lý, tìm ra những phương pháp tốt hơn chăm sóc sức khoẻ tinh thần cho cộng đồng',
        },
        {
            id: 2,
            img: secondFeature,
            title: 'Tham vấn, trị liệu tâm lý',
            content:
                'Chúng tôi thực hiện tham vấn tâm lý trực tiếp, trực tuyến cho các cá nhân, cặp đôi, gia đình và các nhóm cá nhân đang gặp những khó khăn, vướng mắc cần tháo gỡ…',
        },
        {
            id: 3,
            img: thirdFeature,
            title: 'Đào tạo tâm lý và ứng dụng',
            content:
                'Các chương trình đào tạo nâng cao năng lực cho các chuyên viên tham vấn tâm lý và các khoá học cho cộng đồng về tâm lý và ứng dụng trong cuộc sống thực tế',
        },
    ];

    useEffect(() => {
        SwiperCore.use([Navigation, Pagination, Autoplay]);
    }, []);

    useEffect(() => {
        posts.map((post) => {
            let slug = post.title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '-')
                .trim();
            post.slug = '/' + slug;
        });
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                grabCursor={true}
                autoplay={true}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <img src={slide.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="container mx-auto max-w-[1170px]">
                <div className="grid grid-cols-3 shadow-[0px_10px_40px_0_rgba(50,86,85,0.08)] rounded-[5px] z-1 relative">
                    {features.map((feature) => (
                        <div className="column" key={feature.id}>
                            <div className="col-inner p-[36px] relative w-full ">
                                <div className="is-border border-r-[1px] border-[#f1f1f1] border-solid absolute m-0 inset-0"></div>
                                <div className="feature-box text-center">
                                    <div className="icon-box-img w-[185px] mx-[auto] mb-[1em] max-w-full relative">
                                        <div className="icon">
                                            <div className="icon-inner">
                                                <img
                                                    src={feature.img}
                                                    alt=""
                                                    width={200}
                                                    height={135}
                                                    className="pt-[0.2em] w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-box text">
                                        <h3 className="text-center mb-[10px] box-decoration-clone">
                                            <span className="text-[#36a264]">
                                                <strong>
                                                    <span className="text-[24px] leading-[24px]">{feature.title}</span>
                                                </strong>
                                            </span>
                                        </h3>
                                        <p className="text-justify">
                                            <span className="text-[#202020] text-[16px] leading-[24px]">
                                                {feature.content}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-[120px] grid grid-cols-2 border border-solid border-[rgba(0,0,0,0.1)] rounded-[2px]">
                    <img src="https://mindcare.vn/wp-content/uploads/2020/04/loi-gioi-thieu-img.jpg" alt="" />
                    <div className="col-right">
                        <div className="col-inner px-[24px]">
                            <h3 className="pt-[42px] mb-[12px] text-[24px] text-center">
                                <span className="text-[#36a264]">
                                    <strong>Sứ mệnh vì triệu người Việt Nam hạnh phúc hơn mỗi ngày!</strong>
                                </span>
                            </h3>
                            <p className="text-justify mb-[1.3em]">
                                <span>
                                    Đội ngũ MindCare Việt Nam có chung một niềm khát khao mãnh liệt mong muốn giúp cho
                                    mọi người trân quý sức khoẻ tinh thần của chính mình và những người thân xung quanh.
                                </span>
                            </p>
                            <p className="mb-[1.3em]">
                                <span>
                                    Hãy sẻ chia với chúng tôi bất kỳ khi nào bạn cần, chúng tôi luôn sẵn lòng lắng nghe
                                    bạn!
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <section className="py-[12px]">
                    <div className="content relative">
                        <div className="container mx-auto pt-[32px] px-[15px] mb-[24px]">
                            <h2 className="section-title relative flex flex-wrap items-center justify-between w-full mb-[12.8px]">
                                <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                                <span className="text-[#36a264] uppercase text-center mx-[15px] text-[26px] font-bold">
                                    ĐỘI NGŨ CHUYÊN GIA
                                </span>
                                <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                            </h2>
                        </div>
                        <div className="slider-expert">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={4}
                                navigation
                                pagination={{ clickable: true }}
                                grabCursor={true}
                                modules={[Navigation, Pagination]}
                            >
                                {experts.map((expert) => (
                                    <SwiperSlide key={expert.id}>
                                        <div className="px-[15px] pb-[30px]">
                                            <div className="col-inner">
                                                <Link to={routes.expertDetail(expert.id)}>
                                                    <div className="box-image w-[80%] relative h-[auto] my-0 mx-[auto] overflow-hidden">
                                                        <div className="rounded-[100%] pt-[100%] overflow-hidden relative">
                                                            <img
                                                                src={expert.avt}
                                                                alt=""
                                                                width={1536}
                                                                height={1423}
                                                                className="h-full absolute inset-0 object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="text-center px-[15px] pt-[15px] pb-[20px] relative w-full text-[0.9em]">
                                                    <div className="mx-[auto]">
                                                        <h4 className="uppercase leading-[1.3] mt-[0.1em] mb-[0.1em] tracking-[0.05em]">
                                                            <span>{expert.name}</span>
                                                            <br />
                                                            <span className="opacity-[0.7] text-[0.8em] font-light">
                                                                {expert.desc}
                                                            </span>
                                                        </h4>
                                                        <Link
                                                            to={routes.expertDetail(expert.id)}
                                                            className="relative rounded-[99px] my-[16px] text-[#b20000] bg-transparent border-transparent px-[0.15em] before:absolute before:h-[2px] before:bg-[currentColor] before:opacity-[0.3] before:transition-all before:ease-in before:duration-[300ms] before:bottom-0 before:left-[20%] before:w-[60%] hover:before:left-[0%] hover:before:w-full hover:before:opacity-100"
                                                        >
                                                            <span className="leading-[1.6] tracking-[0.03em] font-bold text-[1.15em]">
                                                                Xem hồ sơ
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="container mx-auto pt-[32px] px-[15px] mb-[24px]">
                        <h2 className="section-title relative flex flex-wrap items-center justify-between w-full mb-[12.8px]">
                            <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                            <span className="text-[#36a264] uppercase text-center mx-[15px] text-[26px] font-bold">
                                Tại sao nên chọn chúng tôi
                            </span>
                            <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                        </h2>
                    </div>
                    <div className="grid grid-cols-4">
                        <div className="col px-[15px] pb-[30px]">
                            <div className="col-inner">
                                <div className="text-center relative before:absolute before:inline-block before:w-[33%] before:h-[1px] before:border-dashed before:border before:border-[#36a264] before:top-[90px] before:left-[234px]">
                                    <div className="icon-img width-[auto] leading-[180px] mb-[1em]">
                                        <div className="icon w-[180px] h-[180px] rounded-[50%] mx-auto">
                                            <img
                                                src="https://mindcare.vn/wp-content/uploads/2020/04/1-5-300x300.png"
                                                alt=""
                                                width={300}
                                                height={300}
                                                className="w-auto pt-[0.2em]    "
                                            />
                                        </div>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="text-center mt-[26px] mb-[10px] text-[20px] font-bold">
                                            Chuyên gia giàu kinh nghiệm
                                        </h3>
                                        <p className="text-center text-[14px] text-[#3a3a3a] leading-[21px] max-w-[205px] m-auto">
                                            Chuyên gia của MindCare là những nhà tâm lý có trình độ cử nhân, thạc sĩ,
                                            tiến sĩ…có nhiều năm kinh nghiệm trong lĩnh vực, luôn tận tuỵ, yêu nghề và
                                            giàu tình yêu thương
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-[15px] pb-[30px]">
                            <div className="col-inner">
                                <div className="text-center relative before:absolute before:inline-block before:w-[33%] before:h-[1px] before:border-dashed before:border before:border-[#36a264] before:top-[90px] before:left-[234px]">
                                    <div className="icon-img width-[auto] leading-[180px] mb-[1em]">
                                        <div className="icon w-[180px] h-[180px] rounded-[50%] mx-auto">
                                            <img
                                                src="https://mindcare.vn/wp-content/uploads/2020/04/2-5-300x300.png"
                                                alt=""
                                                width={300}
                                                height={300}
                                                className="w-auto pt-[0.2em]"
                                            />
                                        </div>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="text-center mt-[26px] mb-[10px] text-[20px] font-bold">
                                            Đặt lịch hẹn ưu tiên với chuyên gia riêng
                                        </h3>
                                        <p className="text-center text-[14px] text-[#3a3a3a] leading-[21px] max-w-[205px] m-auto">
                                            Bạn được lựa chọn một chuyên gia riêng đồng hành cùng mình trong suốt quá
                                            trình một cách an toàn, đặt lịch hẹn ưu tiên để không làm mất thời gian của
                                            bạn
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-[15px] pb-[30px]">
                            <div className="col-inner">
                                <div className="text-center relative before:absolute before:inline-block before:w-[33%] before:h-[1px] before:border-dashed before:border before:border-[#36a264] before:top-[90px] before:left-[234px]">
                                    <div className="icon-img width-[auto] leading-[180px] mb-[1em]">
                                        <div className="icon w-[180px] h-[180px] rounded-[50%] mx-auto">
                                            <img
                                                src="https://mindcare.vn/wp-content/uploads/2020/04/3-2-300x300.png "
                                                alt=""
                                                width={300}
                                                height={300}
                                                className="w-auto pt-[0.2em]"
                                            />
                                        </div>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="text-center mt-[26px] mb-[10px] text-[20px] font-bold">
                                            Chuyên nghiệp, tận tâm, trách nhiệm
                                        </h3>
                                        <p className="text-center text-[14px] text-[#3a3a3a] leading-[21px] max-w-[205px] m-auto">
                                            Đội ngũ của chúng tôi luôn sẵn sàng phục vụ 24/7 khi bạn có nhu cầu hỗ trợ
                                            một cách tận tình nhất
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col px-[15px] pb-[30px]">
                            <div className="col-inner">
                                <div className="text-center relative">
                                    <div className="icon-img width-[auto] leading-[180px] mb-[1em]">
                                        <div className="icon w-[180px] h-[180px] rounded-[50%] mx-auto">
                                            <img
                                                src="https://mindcare.vn/wp-content/uploads/2020/04/4-2-300x300.png"
                                                alt=""
                                                width={300}
                                                height={300}
                                                className="w-auto pt-[0.2em]"
                                            />
                                        </div>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="text-center mt-[26px] mb-[10px] text-[20px] font-bold">
                                            Bảo mật thông tin tuyệt đối của khách hàng
                                        </h3>
                                        <p className="text-center text-[14px] text-[#3a3a3a] leading-[21px] max-w-[205px] m-auto">
                                            Đây là nguyên tắc bắt buộc phải tuân thủ khi hành nghề tâm lý, mọi thông tin
                                            tư vấn, đời tư của khách hàng luôn được bảo mật tuyệt đối
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-[15px] pb-[30px]">
                        <div className="text-center">
                            <p className="mt-[15px] max-w-[780px] m-auto text-[18px] leading-[26px]">
                                <span>
                                    <strong>
                                        Bằng tâm huyết của mình, chúng tôi hi vọng sẽ cùng chung tay giúp đỡ được nhiều
                                        cá nhân, gia đình…vượt qua được những khó khăn, vướng mắc để hạnh phúc hơn trong
                                        cuộc sống! Chúng tôi luôn luôn sẵn sàng lắng nghe và sẻ chia!
                                    </strong>
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
                <div className="pt-[32px] px-[15px] mb-[24px]">
                    <h2 className="section-title relative flex flex-wrap items-center justify-between w-full mb-[12.8px]">
                        <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                        <span className="text-[#36a264] uppercase text-center mx-[15px] text-[26px] font-bold">
                            CÁC RỐI NHIỄU THƯỜNG GẶP
                        </span>
                        <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                    </h2>
                </div>
                <div className="grid grid-cols-4">
                    {posts.map((post) => (
                        <div className="post-item px-[15px] pb-[30px]" key={post.id}>
                            <div className="inner">
                                <Link to={post.slug}>
                                    <div className="box w-full relative">
                                        <div className="box-image relative h-auto">
                                            <div className="image-cover pt-[56.25%] overflow-hidden relative">
                                                <img
                                                    src={post.imgUrl}
                                                    alt=""
                                                    width={300}
                                                    height={252}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="box-text text-center pt-[0.7em] pb-[1.4em] px-[10px] text-[0.9em] w-full relative">
                                            <div className="box-text-inner mx-auto">
                                                <h5 className="post-title leading-[1.3] my-[0.1em] text-[1.15em] font-bold">
                                                    {post.title}
                                                </h5>
                                                <div className="is-divider my-[0.5em] h-[2px] block bg-[#0000001a] w-full max-w-[30px] mx-auto"></div>
                                                <p className="my-[0.1em] text-[#0d0d0d]">{post.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="px-[15px] pb-[30px]">
                        <div className="inner">
                            <Link
                                to="/cac-roi-nhieu-thuong-gap"
                                className="text-[#b20000] bg-transparent border border-solid border-transparent px-[0.15em] text-[1.15em] mb-[1em] tracking-[0.03em] font-bold leading-[2.4em] relative before:absolute before:h-[2px] before:bg-[currentColor] before:opacity-[0.3] before:bottom-[-5px] before:left-[20%] before:w-[60%] before:transition-all before:duration-300 hover:text-[#333] hover:before:left-0 hover:before:w-full hover:before:opacity-100"
                            >
                                <span className="leading-[24px]">Xem tất cả bài viết</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-[32px] px-[15px] mb-[24px]">
                    <h2 className="section-title relative flex flex-wrap items-center justify-between w-full mb-[12.8px]">
                        <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                        <span className="text-[#36a264] uppercase text-center mx-[15px] text-[26px] font-bold">
                            TÂM LÝ ĐỜI SỐNG
                        </span>
                        <b className="block flex-[1] h-[2px] opacity-[0.1] bg-[currentColor]"></b>
                    </h2>
                </div>
                <div className="grid grid-cols-4">
                    {posts.map((post) => {
                        return (
                            <div className="post-item px-[15px] pb-[30px]" key={post.id}>
                                <div className="inner">
                                    <Link to={post.slug}>
                                        <div className="box w-full relative">
                                            <div className="box-image relative h-auto">
                                                <div className="image-cover pt-[56.25%] overflow-hidden relative">
                                                    <img
                                                        src={post.imgUrl}
                                                        alt=""
                                                        width={300}
                                                        height={252}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="box-text text-center pt-[0.7em] pb-[1.4em] px-[10px] text-[0.9em] w-full relative">
                                                <div className="box-text-inner mx-auto">
                                                    <h5 className="post-title leading-[1.3] my-[0.1em] text-[1.15em] font-bold">
                                                        {post.title}
                                                    </h5>
                                                    <div className="is-divider my-[0.5em] h-[2px] block bg-[#0000001a] w-full max-w-[30px] mx-auto"></div>
                                                    <p className="my-[0.1em] text-[#0d0d0d]">{post.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <div className="px-[15px] pb-[30px]">
                        <div className="inner">
                            <Link
                                to="/tam-ly-doi-song"
                                className="text-[#b20000] bg-transparent border border-solid border-transparent px-[0.15em] text-[1.15em] mb-[1em] tracking-[0.03em] font-bold leading-[2.4em] relative before:absolute before:h-[2px] before:bg-[currentColor] before:opacity-[0.3] before:bottom-[-5px] before:left-[20%] before:w-[60%] before:transition-all before:duration-300 hover:text-[#333] hover:before:left-0 hover:before:w-full hover:before:opacity-100"
                            >
                                <span className="leading-[24px]">Xem tất cả bài viết</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
