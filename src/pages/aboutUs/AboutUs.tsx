

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-customAccent1 via-customAccent2 to-customAccent1 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">About Us</h1>
        <p className="text-lg leading-8 mb-8 animate-fadeIn">
          We are passionate about creating high-quality mechanical keyboards tailored to your needs.
          Our journey started with a love for keyboards and a desire to bring the best typing experience to everyone.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p>
              To deliver premium, customizable mechanical keyboards that enhance productivity and provide an unparalleled typing experience.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p>
              To be the leading provider of mechanical keyboards, recognized globally for innovation and quality.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AboutUs;