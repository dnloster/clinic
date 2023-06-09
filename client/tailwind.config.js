/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                md: '768px',
                // => @media (min-width: 640px) { ... }

                lg: '992px',
                // => @media (min-width: 1024px) { ... }

                xl: '1200px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
