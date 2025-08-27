import mouseImage from '../../../../src/assets/images/hero/mouse.jpg'

const Mice = () => {
    return (
        <div className="relative 2xl:h-[225px] 2xl:w-[500px] xl:w-[300px] xl:h-[195px] lg:w-[200px] lg:h-[160px] overflow-hidden rounded-xl">
  <img src={mouseImage} alt="Mice" className="w-full h-full object-cover" />

  {/* Text Overlay */}
  <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 rounded-md text-sm sm:text-base font-medium">
    Mice
  </div>
</div>

    );
};

export default Mice;