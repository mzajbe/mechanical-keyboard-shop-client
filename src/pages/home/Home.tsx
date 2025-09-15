import BlogList from "@/components/mechanicalKeyboard101/BlogList";
import CustomerReviews from "../../components/home/CustomerReviews/CustomerReviews";
import MechanicalKeyboard from "../../components/home/FeaturedProducts/MechanicalKeyboard";

import Hero from "../../components/home/hero/Hero";
import InstagramLayout from "../../components/home/instagramLayout/InstagramLayout";
import InstagramProfile from "../../components/home/instagramLayout/InstagramProfile";

import ServiceAdvertisement from "../../components/home/ServiceAdvertisement/ServiceAdvertisement";
import TopFeaturedBrands from "../../components/home/TopFeaturedBrands/TopFeaturedBrands";
import Keycaps from "@/components/home/hero/Keycaps";
import Switches from "@/components/home/hero/Switches";
import Mice from "@/components/home/hero/Mice";
import Brands from "@/components/home/brands/Brands";

const Home = () => {
  return (
    <div className="w-4/5 mx-auto px-4 sm:px-6 lg:px-8 ">
      {/* flex gap-6 mt-4 sm:flex-none */}
      <div className="flex gap-6 mt-4 ">
        <Hero></Hero>
        <Keycaps></Keycaps>

        <div className=" w-full h-[600px] sm:h-[800px] lg:h-[500px]">
          <div className="mb-6 ">
            <Switches></Switches>
          </div>
          <div>
            <Mice></Mice>
          </div>
        </div>
      </div>
      <Brands></Brands>

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
