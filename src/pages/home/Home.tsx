
import BlogList from "@/components/mechanicalKeyboard101/BlogList";
import CustomerReviews from "../../components/home/CustomerReviews/CustomerReviews";
import MechanicalKeyboard from "../../components/home/FeaturedProducts/MechanicalKeyboard";

import Hero from "../../components/home/hero/Hero";
import InstagramLayout from "../../components/home/instagramLayout/InstagramLayout";
import InstagramProfile from "../../components/home/instagramLayout/InstagramProfile";

import ServiceAdvertisement from "../../components/home/ServiceAdvertisement/ServiceAdvertisement";
import TopFeaturedBrands from "../../components/home/TopFeaturedBrands/TopFeaturedBrands";


const Home = () => {
    return (
        <div>
            
            <Hero></Hero>
            <MechanicalKeyboard></MechanicalKeyboard>
            <ServiceAdvertisement></ServiceAdvertisement>
            <TopFeaturedBrands></TopFeaturedBrands>
            <CustomerReviews></CustomerReviews>
            <BlogList></BlogList>
            <InstagramProfile></InstagramProfile>
            <InstagramLayout></InstagramLayout>
            
        </div>
    );
};

export default Home;