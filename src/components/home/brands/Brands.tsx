

const brands = [
  { name: "Keychron", url: "#", logo: "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/keychron-blacktext2_large.png?v=1580549123" },
  { name: "Razer", url: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Razer_logo.svg" },
  { name: "Corsair", url: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Corsair_logo.svg" },
  { name: "SteelSeries", url: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Steelseries_logo.svg" },
  { name: "Keychron", url: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Keychron_logo.svg" },
  { name: "Ducky", url: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ducky_logo.svg" },
];

const Brands = () => {
    return (
        <section className="w-full py-10 bg-gray-50">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
        Featured Brands
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6">
        {brands.map((brand, idx) => (
          <a
            key={idx}
            href={brand.url}
            className="flex items-center justify-center p-4 bg-white shadow-sm rounded-xl hover:shadow-md transition"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 sm:h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
        ))}
      </div>
    </section>
    );
};

export default Brands;