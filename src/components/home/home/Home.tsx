import CustomerReviews from "../CustomerReviews/CustomerReviews";
import MechanicalKeyboard from "../FeaturedProducts/MechanicalKeyboard";
import Footer from "../Footer/Footer";
import Hero from "../hero/Hero";
import InstagramLayout from "../instagramLayout/InstagramLayout";
import InstagramProfile from "../instagramLayout/InstagramProfile";
import Navbar from "../navbar/Navbar";
import ServiceAdvertisement from "../ServiceAdvertisement/ServiceAdvertisement";
import TopFeaturedBrands from "../TopFeaturedBrands/TopFeaturedBrands";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <MechanicalKeyboard></MechanicalKeyboard>
            <ServiceAdvertisement></ServiceAdvertisement>
            <TopFeaturedBrands></TopFeaturedBrands>
            <CustomerReviews></CustomerReviews>
            <InstagramProfile></InstagramProfile>
            <InstagramLayout></InstagramLayout>
            <Footer></Footer>
        </div>
    );
};

export default Home;