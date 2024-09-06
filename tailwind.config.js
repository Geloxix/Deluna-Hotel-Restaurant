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
            "color-1": "#1cc3b2",
            "color-2": "#0E2737",
         },
         transitionDuration : {
            "500ms": "500ms",
            "600ms": "600ms",
            "700ms": "700ms",
            "800ms": "800ms",
            "900ms": "900ms",
         }
      },
   },
   plugins: [],
}