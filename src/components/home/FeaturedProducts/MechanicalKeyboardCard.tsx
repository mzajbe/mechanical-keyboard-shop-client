import { TProduct } from "@/types";


const MechanicalKeyboardCard = ({product}:{product:TProduct}) => {
    // console.log(Product);
    
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product?.title}</div>
          <p className="text-gray-700 text-base">
            
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
        </div>
      </div>
    </div>
    );
};

export default MechanicalKeyboardCard;