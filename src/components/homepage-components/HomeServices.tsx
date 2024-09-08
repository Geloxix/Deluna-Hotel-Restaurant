import { servicesIcons } from "../../constants/utils";

const HomeServices = () => {
    return (
        <div className="py-[6rem]">
            <ul className="flex w-full justify-between items-center">
                {
                    servicesIcons.map((serviceIcon) => (
                        <li 
                            key={serviceIcon.id}
                            className={`flex flex-col items-center justify-center shadow-custom-dark  min-w-[220px] min-h-[170px] rounded-md about-content ${serviceIcon.animation}`}
                        >
                            <img className="mb-7 " src={serviceIcon.path} alt="" />
                            <h1 className="text-xl">{serviceIcon.name}</h1>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default HomeServices;
