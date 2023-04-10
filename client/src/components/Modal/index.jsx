import { Fragment } from 'react';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { Form, useNavigate } from 'react-router-dom';

const times = [
    {
        id: 1,
        time: '08:00 - 08:30',
    },
    {
        id: 2,
        time: '08:30 - 09:00',
    },
    {
        id: 3,
        time: '09:00 - 09:30',
    },
    {
        id: 3,
        time: '09:30 - 10:00',
    },
    {
        id: 4,
        time: '10:00 - 10:30',
    },
    {
        id: 5,
        time: '10:30 - 11:00',
    },
    {
        id: 6,
        time: '11:00 - 11:30',
    },
    {
        id: 7,
        time: '13:30 - 14:00',
    },
    {
        id: 8,
        time: '14:00 - 14:30',
    },
    {
        id: 9,
        time: '14:30 - 15:00',
    },
];

export default function Modal({ open, setOpen }) {
    const navigate = useNavigate();
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-[999] inset-0 overflow-y-auto" onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                            as="h1"
                                            className="text-[24px] leading-6 font-bold text-[#008000] text-center uppercase"
                                        >
                                            Thực hiện kiểm tra tâm lý
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 text-center">
                                                TEST bao gồm các bài trắc nghiệm có giá trị tham khảo và phát hiện sớm
                                                các dấu hiệu nếu tình trạng sức khỏe tinh thần của bạn đang có những rối
                                                nhiễu mà bạn đang không chú ý đến nó hoặc cảm nhận có điều gì đó không
                                                ổn nhưng chưa thể gọi tên.
                                            </p>
                                            <p className="text-sm text-gray-500 text-center">
                                                Thông qua các bài trắc nghiệm, bạn có thể tự đánh giá, phát hiện những
                                                dấu hiệu cảnh báo và có thể tìm đến các sự trợ giúp khi cần thiết.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#14857b] hover:bg-[#0a4742] transition text-[16px] font-bold text-white tracking-[0.03em] leading-[2.4em] uppercase"
                                        onClick={() => {
                                            setOpen(false);
                                            navigate('/test');
                                        }}
                                    >
                                        Test ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
