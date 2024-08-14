

const brands = [
    {
      logo: 'https://i.postimg.cc/cJtB4w4Z/logitechjpg.jpg', // Replace with actual logo URL
      title: 'Logitech',
    },
    {
      logo: 'https://i.postimg.cc/cJtB4w4Z/logitechjpg.jpg', // Replace with actual logo URL
      title: 'Keychron',
    },
    {
      logo: 'https://i.postimg.cc/cJtB4w4Z/logitechjpg.jpg', // Replace with actual logo URL
      title: 'Logitech',
    },
    {
      logo: 'https://i.postimg.cc/cJtB4w4Z/logitechjpg.jpg', // Replace with actual logo URL
      title: 'Keychron',
    },
  ];

const TopFeaturedBrands = () => {
    return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              Top Featured Brands
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {brands.map((brand, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={brand.logo}
                    alt={brand.title}
                    className="w-32 h-16 object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{brand.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default TopFeaturedBrands;