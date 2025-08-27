import switchesImage from '../../../../src/assets/images/hero/switches.webp'

const Switches = () => {
    return (
        <div className="relative 2xl:h-[250px] 2xl:w-[500px] xl:w-[300px] xl:h-[230px] lg:w-[200px] lg:h-[160px] overflow-hidden rounded-xl">
  <img src={switchesImage} alt="Switches" className="w-full h-full object-cover" />
  
  {/* Text Overlay */}
  <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 rounded-md text-sm sm:text-base font-medium">
    Switches
  </div>
</div>

    );
};

export default Switches;