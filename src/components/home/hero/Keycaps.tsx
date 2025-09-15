import keykapsImage from '../../../../src/assets/images/hero/keycaps.webp'

const Keycaps = () => {
    return (
        <div className="relative 2xl:h-[500px] 2xl:w-[1500px] xl:w-[2000px] xl:h-[450px] lg:w-[2000px] lg:h-[350px] overflow-hidden rounded-xl hidden lg:block">
    <img 
      src={keykapsImage} 
      alt="Keycaps" 
      className="w-full h-full object-cover" 
    />
    {/* Text Overlay */}
    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg text-lg font-semibold ">
      Keycaps
    </div>
  </div>
    );
};

export default Keycaps;