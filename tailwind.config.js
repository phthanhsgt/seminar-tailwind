/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    // theme: {
    //     colors: {
    //         primary: '#565add',
    //     },
    // },
    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary: '#565add',
                secondary: '#d1d1f7',
                resd: 'rgba(85, 90, 221, 0.494)',
            },
            boxShadow: {
                button: '0 0 0 4px rgba(85,89,221,.4)',
            },
        },
    },
    plugins: [daisyui],
    // plugins: [require('flowbite/plugin')],
}
