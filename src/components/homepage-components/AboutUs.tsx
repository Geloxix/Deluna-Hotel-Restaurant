import HomeServices from './HomeServices';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import img13 from '../../assets/images/13.jpg.webp';
import img14 from '../../assets/images/14.jpg.webp';
import img15 from '../../assets/images/15.jpg.webp';


const AboutUs = () => {
    const [ intersecting, setIsIntersecting ] = useState<boolean>(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                     // toggle the abnimation if the element is intersect
                    setIsIntersecting(true);  
                }
               
            });
        },{
            threshold: 0.1, // trigger an animation when element is half visible
        });

        if (ref.current) {
            observer.observe(ref.current);
        }


        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    },[ref]);
    
    let animation = intersecting ? { opacity: 100, y: 0 } : {};

    return (
        <div className="h-screen pt-[100px] px-[15rem] font-poppins">
            <div className="flex gap-6 pt-[100px]">
                <div className="leading-8 basis-[70%]">
                    <motion.h1 
                        ref={ref}
                        className="tracking-widest text-lg text-color-1 mb-5 font-[500]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={animation}
                        transition={{ duration: 0.8  }}
                    >ABOUT US</motion.h1>
                    <motion.h2 
                        ref={ref}
                        className="text-5xl mb-12 tracking-wider font-[500] leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={animation}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >Welcome To <br />  La Luna Hotel Luxury</motion.h2>
                    <motion.p 
                        ref={ref}
                        className="leading-10 text-xl text-color-3 mb-5"
                        initial={{ opacity: 0, y: 50}}
                        animate={animation}
                        transition={{ duration: 0.8, delay: 0.6  }}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores a quas adipisci consectetur earum inventore, enim corrupti animi necessitatibus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, facilis?!</motion.p>

                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={animation}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Manager: <span className="text-color-1">Marc Angelo</span></motion.p>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={animation}
                    transition={{ duration: 0.8, delay: 0.4  }}
                >
                    <div className="grid grid-cols-2 gap-3">
                        <div className='flex flex-col justify-between '>
                            <div className='overflow-hidden rounded-md'>
                                <img src={img13} alt="" className='w-[100%] transition-all duration-500ms ease-in-out hover:scale-110 '/>
                            </div>
                            
                            <div className='overflow-hidden rounded-md'>
                                <img src={img14} alt="" className='w-[100%] transition-all duration-500ms ease-in-out  hover:scale-110' />
                            </div>

                        </div>

                        <div className='overflow-hidden rounded-md'>
                            <img src={img15} alt="" className='w-[100%] transition-all duration-500ms ease-in-out hover:scale-110' />
                        </div>
                    </div>
                </motion.div>
            </div>
            <>
                <HomeServices 
                    animateRef={ref}
                    animation={animation}
                />
            </>
        </div>
    );
};

export default AboutUs;