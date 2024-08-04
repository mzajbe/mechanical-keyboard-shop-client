import { useGetProductsQuery } from "@/redux/api/baseApi";
import MechanicalKeyboardCard from "./MechanicalKeyboardCard";

import { TProduct } from "@/types";





const MechanicalKeyboard = () => {
    const {data,isLoading}=useGetProductsQuery({});
    console.log(data);
    
    if(isLoading){
        return(
            <p>Loading...</p>
        )
    }
    const {data:products} = data;
    
    return (
        <div>
            
            {products.map((product: TProduct)=>(<MechanicalKeyboardCard key={product?._id} product={product}></MechanicalKeyboardCard>))}
        </div>
    );
};

export default MechanicalKeyboard;