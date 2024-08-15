

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-customAccent1 to-customAccent2 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">Contact Us</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg animate-zoom-out">
          <p className="text-lg text-gray-800 mb-4">
            We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>
          
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-customAccent1 mb-2">Email Us</h2>
            <p className="text-gray-600">mzajbe@gmail.com</p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-customAccent1 mb-2">Call Us</h2>
            <p className="text-gray-600">01643817731</p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-customAccent1 mb-2">Visit Us</h2>
            <p className="text-gray-600">39, Kazi Bhaban (4th Floor), New Elephant Road, Dhaka-1205

</p>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-customPrimary text-white px-6 py-3 rounded-full hover:bg-customAccent2 transition-transform transform hover:scale-105">
              Send us a Message
            </button>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;