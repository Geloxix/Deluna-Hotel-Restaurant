import Testimonials from "../components/aboutPage-components/Testimonials";
import BreadCrumbArea from "../components/rooms-page-components/BreadCrumbArea";

const AboutPage = () => {
    return (
        <section>
            <BreadCrumbArea  
                breadCrumbValue="About  Us"
                currentPage="About"
            />
            <div>
                <Testimonials />
            </div>
        </section>
    );
};

export default AboutPage;
