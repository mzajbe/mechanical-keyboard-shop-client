
const services = [  
  {  
    icon: '🚚',  
    title: 'Free Shipping',  
    description: 'Enjoy free shipping on all orders.',  
  },  
  {  
    icon: '💰',  
    title: 'Lowest Delivery Charge',  
    description: 'We offer the lowest delivery charges in the market.',  
  },  
  {  
    icon: '📞',  
    title: '24/7 Support',  
    description: 'Our support team is available 24/7 to assist you.',  
  },  
];  

const ServiceAdvertisement = () => {  
  return (  
    <div className="bg-gray-100 py-12">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">  
          Our Services  
        </h2>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">  
          {services.map((service, index) => (  
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">  
              <div  
                className="text-4xl text-blue-500 mr-4 animate-pulse" 
              >  
                {service.icon}  
              </div>  
              <div>  
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>  
                <p className="text-gray-600 mt-2">{service.description}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ServiceAdvertisement;