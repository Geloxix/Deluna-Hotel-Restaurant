import testimonialImg from "../../assets/images/19.jpg.webp";


const Testimonials = () => {
    return (
        <div className="py-[8rem] px-[15rem] flex justify-between">
            <div className="inline-block">
                <img 
                    src={testimonialImg}
                    alt="Man drinking coffee" 
                    className="rounded-lg"
                />
            </div>

            <div className="inline-block basis-[50%] font-poppins pl-8">
                <h1 className="font-[500] text-color-1 tracking-widest text-xl mb-6">TESTIMONIALS</h1>
                <p className="text-5xl font-[500] mb-10 text-color-7">10 Years of Experience</p>

                <p className="mb-8 text-color-3 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt eligendi necessitatibus nam optio qui omnis temporibus ex Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet.!</p>
                <p className="text-color-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat architecto assumenda, sit consequatur magni molestias doloremque neque eum maxime hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, consequatur?</p>
            </div>
        </div>
    );
};

export default Testimonials;
