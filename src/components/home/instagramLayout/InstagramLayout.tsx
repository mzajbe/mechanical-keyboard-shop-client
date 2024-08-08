import { FaComment, FaHeart } from "react-icons/fa";


const photos = [
    { id: 1, src: 'https://i.postimg.cc/Gmx2xYsx/test.jpg', alt: 'Mechanical Keyboard 1' },
    { id: 2, src: 'https://i.postimg.cc/Gmx2xYsx/test.jpg', alt: 'Mechanical Keyboard 2' },
    { id: 3, src: 'https://i.postimg.cc/Gmx2xYsx/test.jpg', alt: 'Mechanical Keyboard 3' },
    { id: 4, src: 'https://i.postimg.cc/Gmx2xYsx/test.jpg', alt: 'Mechanical Keyboard 4' },
    { id: 5, src: 'https://i.postimg.cc/Gmx2xYsx/test.jpg', alt: 'Mechanical Keyboard 5' },
    { id: 6, src: 'https://i.postimg.cc/Gmx2xYsx/test.jpg', alt: 'Mechanical Keyboard 6' },
  ];

const InstagramLayout = () => {
    return (
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Instagram Photos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="relative group">
            <img
              src={photo.src}
              alt={photo.alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="flex space-x-4">
                <FaHeart className="text-white text-2xl" />
                <FaComment className="text-white text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default InstagramLayout;