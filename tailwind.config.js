/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            "poppins": ["Poppins", "Helvetica", "Roboto"],
         },
         colors: {
            'color-1': '#1cc3b2',
            'color-2': '#0E2737',
            'color-3': '#636a76',
            'color-4': '#D2D2D2',
            'color-5': '#B1B1B1',
            'color-6': '#0E2737B3',
         },
         transitionDuration : {
            "500ms": "500ms",
            "600ms": "600ms",
            "700ms": "700ms",
            "800ms": "800ms",
            "900ms": "900ms",
         },
         boxShadow: {
            'custom-dark': '4px 4px 15px #E8E8E8',
         }
      },
   },
   plugins: [],
}