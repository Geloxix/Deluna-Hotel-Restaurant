import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react";

//sevices icons
import icon1 from '../assets/icons/icon-1.png.webp';
import icon2 from '../assets/icons/icon-2.png.webp';
import icon3 from '../assets/icons/icon-3.png.webp';
import icon4 from '../assets/icons/icon-4.png.webp';

//hero img
import heroBg1 from '../assets/images/hero-bg1.png';
import heroBg2 from '../assets/images/hero-bg2.png';
import heroBg3 from '../assets/images/hero-bg3.png';


//Guests image
import guest1 from '../assets/images/guest1.png';
import guest2 from '../assets/images/guest2.png';
import guest3 from '../assets/images/guest3.png';
import guest4 from '../assets/images/guest4.png';


//stars
import { RiStarSFill } from "@remixicon/react";

//rooms images
import room1 from '../assets/images/room1.png';
import room2 from '../assets/images/room2.png';



//navlink
export const navLinks = [
    { id: 1, path: '/', name: 'Home'},
    { id: 2, path: '/rooms', name: 'Rooms '},
    { id: 3, path: '/about', name: 'About Us' },
    { id: 4, path: '/pages', name: 'Pages'},
    { id: 5, path: '/contact', name: 'Contact'},
];

//socmed links
export const socmedLinks = [
    { id: 1, path: '#', icon: RiFacebookFill },
    { id: 2, path: '#', icon: RiInstagramFill },
    { id: 3, path: '#', icon: RiTwitterFill },
];

//services icons/ animation
export const servicesIcons = [ 
    { id: 1, name: 'Transportation', path: icon1, animateDelay: 0.3 },
    { id: 2, name: 'Reiseservice', path: icon2, animateDelay: 0.4 },
    { id: 3, name: 'Spa Relaxation', path: icon3, animateDelay: 0.5 },
    { id: 4, name: 'Restaurant', path: icon4, animateDelay: 0.6 },
    { id: 5, name: 'Bar & Drinks', path: icon4, animateDelay: 0.7 },
];

///heros image
export const heroImages = [
    { 
        id: 1, 
        slideId: 0,  
        path: heroBg1, 
        hotel: 'HOTEL & RESORT', 
        greet: 'Welcome To De Luna', 
        btnText: 'Discover Now',
        initialStyle: {
            opacity: 0,
            y: -50
        },
        animatedStyle: {
            opacity: 1,
            y: 0,
        }

    },
    { 
        id: 2, 
        slideId: 1,
        path: heroBg2, 
        hotel: 'HOTEL & RESORT', 
        greet: 'Welcome To De Luna', 
        btnText: 'Discover Now',
        initialStyle: {
            opacity: 0,
            x: -100,
        },
        animatedStyle: {
            opacity: 1,
            x: 0,
        }
    },
    { 
        id: 3, 
        slideId: 2,
        path: heroBg3,  
        hotel: 'HOTEL & RESORT', 
        greet: 'Welcome To De Luna', 
        btnText: 'Discover Now',
        initialStyle: {
            opacity: 0,
            y: 50,
        },
        animatedStyle: {
            opacity: 1,
            y: 0,
        }
    }
];

export const rooms = [
    {
        id: 1, 
        slideId: 0,
        path: room1, 
        roomName: 'Premuim Room', 
        pricePerDay: '200', 
        size: '30ft', 
        capacity: '5-6 person', 
        bed: 'King Beds', 
        services: 'Wifi, Television, Bathroom',
    },
    {
        id: 2, 
        slideId: 1,
        path: room2, 
        roomName: 'Affordable best Room', 
        pricePerDay: '100', 
        size: '20ft', 
        capacity: '3-5 person', 
        bed: 'King Beds', 
        services: 'Wifi, Bathroom',
    }
];



export const guests = [
    {
        id: 1, 
        img: guest1,
        guestName: 'Jane Cena',
        guestOccupation: 'Operation Manager',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quis totam odio cupiditate illum rerum doloremque ipsam lorem15 lorem5  Autem quis totam odio cupiditate illum rerum doloremque ipsam lorem15 lorem5?',
    },
    {
        id: 2, 
        img: guest2,
        guestName: 'Mae mayler',
        guestOccupation: 'CyberSecurity Specialist',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quis totam odio cupiditate illum rerum doloremque lorem15  Autem quis totam odio cupiditate illum rerum doloremque ipsam lorem15 lorem5?',
    },
    {
        id: 3, 
        img: guest3,
        guestName: 'J Black',
        guestOccupation: 'CEO Director',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quis totam odio cupiditate illum rerum  lorem15  Autem quis totam odio cupiditate illum rerum doloremque ipsam lorem15 lorem5?',
    },
    {
        id: 4, 
        img: guest4,
        guestName: 'Shane hAha' ,
        guestOccupation: 'Bussiness Analytics',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quis totam odio cupiditate  lorem15  Autem quis totam odio cupiditate illum rerum doloremque ipsam lorem15 lorem5?',
    }
];