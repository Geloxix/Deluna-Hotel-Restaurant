// import { backGroundImages } from "../constants/utils";

const HomePage = () => {
    return (
        <section className={`bg-[url('./assets/images/hero-bg1.png')] pt-[128px] h-screen bg-cover bg-no-repeat`}>
            <div className="bg-color-2 bg-opacity-50 h-full w-full z-[9999] flex items-center flex-col justify-center font-poppins">
                <h1 className="text-white text-[0.90em] mb-7">HOTEL & RESORT</h1>
                <p className="text-8xl mb-7 text-white">Welcome to De Luna</p>
                <button className="border-2 border-color-1 px-10 py-3 text-white rounded-md hover:bg-color-1 transition-all">Discover Now</button>
            </div>
        </section>
    );
};

export default HomePage;
