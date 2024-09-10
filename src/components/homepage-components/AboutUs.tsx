import HomeServices from './HomeServices';
import { useEffect } from 'react';



import img13 from '../../assets/images/13.jpg.webp';
import img14 from '../../assets/images/14.jpg.webp';
import img15 from '../../assets/images/15.jpg.webp';


const AboutUs = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // toggle the abnimation if the element is intersect
                entry.target.classList.toggle('about-animate', entry.isIntersecting);

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }   
            });
        },{
            threshold: 0, // trigger an animation when element is fully visible
        });

        const aboutContents = document.querySelectorAll('.about-content');

        // loop through cols1 and observe each item
        aboutContents.forEach((col) => {
            observer.observe(col);
        });

        return () => observer.disconnect();
    },[]);
    
    

    return (
        <div className="h-screen pt-[100px] px-[15rem] font-poppins">
            <div className="flex gap-6 pt-[100px]">
                <div className='leading-8 basis-[70%]'>
                    <h1 className="tracking-widest text-lg text-color-1 mb-5 font-[500] transition-all ease-in duration-700ms about-content">ABOUT US</h1>
                    <h2 className='text-5xl mb-12 tracking-wider font-[500] leading-tight transition-all ease-in duration-700ms about-content'>Welcome To <br />  La Luna Hotel Luxury</h2>
                    <p className='leading-10 text-xl text-color-3 mb-5 transition-all ease-in duration-700ms about-content '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores a quas adipisci consectetur earum inventore, enim corrupti animi necessitatibus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, facilis?!</p>

                    <p className='transition-all ease-in duration-700ms about-content '>Manager: <span className="text-color-1">Marc Angelo</span></p>
                </div>

                <div>
                    <div className="grid grid-cols-2 gap-3 transition-all ease-in duration-600ms about-content">
                        <div className='flex flex-col justify-between'>
                            <div className='overflow-hidden rounded-md'>
                                <img src={img13} alt="" className='w-[100%] transition-all duration-500 ease-in-out  hover:scale-110'/>
                            </div>
                            
                            <div className='overflow-hidden rounded-md'>
                                <img src={img14} alt="" className='w-[100%] transition-all duration-500 ease-in-out  hover:scale-110' />
                            </div>

                        </div>

                        <div className='overflow-hidden rounded-md'>
                            <img src={img15} alt="" className='w-[100%] transition-all duration-500 ease-in-out hover:scale-110 ' />
                        </div>
                    </div>
                </div>
            </div>
            <>
                <HomeServices />
            </>
        </div>
    );
};

export default AboutUs;