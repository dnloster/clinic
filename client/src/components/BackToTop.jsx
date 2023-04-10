import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300);
    };

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed bottom-4 right-4 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button
                className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none"
                onClick={handleBackToTop}
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
}

export default BackToTop;
