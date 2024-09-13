import { servicesIcons } from "../../constants/utils";
import { motion } from "framer-motion";

interface HomeServicesProps {
    animateRef: any;
    animation: {};
};

const HomeServices = ({animateRef, animation}: HomeServicesProps) => {
    return (
        <div className="py-[6rem]">
            <ul className="flex w-full justify-between items-center">
                {
                    servicesIcons.map((serviceIcon) => (
                        <motion.li 
                            ref={animateRef}
                            key={serviceIcon.id}
                            className={`flex flex-col items-center justify-center shadow-custom-dark  min-w-[220px] min-h-[170px]`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={animation}
                            transition={{ duration: 0.8, delay: serviceIcon.animateDelay }}
                        >
                            <img className="mb-7 " src={serviceIcon.path} alt="" />
                            <h1 className="text-xl">{serviceIcon.name}</h1>
                        </motion.li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HomeServices;
