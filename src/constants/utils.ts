import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react";
import icon1 from '../assets/icons/icon-1.png.webp';
import icon2 from '../assets/icons/icon-2.png.webp';
import icon3 from '../assets/icons/icon-3.png.webp';
import icon4 from '../assets/icons/icon-4.png.webp';

export const navLinks = [
    { id: 1, path: '/', name: 'Home'},
    { id: 2, path: '/rooms', name: 'Rooms '},
    { id: 3, path: '/about', name: 'About Us' },
    { id: 4, path: '/pages', name: 'Pages'},
    { id: 5, path: '/contact', name: 'Contact'},
];

export const socmedLinks = [
    { id: 1, path: '#', icon: RiFacebookFill },
    { id: 2, path: '#', icon: RiInstagramFill },
    { id: 3, path: '#', icon: RiTwitterFill },
];


export const servicesIcons = [ 
    { id: 1, name: 'Transportation', path: icon1, animation: 'transition-all duration-[600ms] ease-in' },
    { id: 2, name: 'Reiseservice', path: icon2, animation: 'transition-all duration-[700ms] ease-in' },
    { id: 3, name: 'Spa Relaxation', path: icon3, animation: 'transition-all duration-[800ms] ease-in' },
    { id: 4, name: 'Restaurant', path: icon4, animation: 'transition-all duration-[900ms] ease-in' },
    { id: 5, name: 'Bar & Drinks', path: icon4, animation: 'transition-all duration-[1000ms] ease-in' },
];