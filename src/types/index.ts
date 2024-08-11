/* eslint-disable @typescript-eslint/no-explicit-any */
export type TProduct = {
    
    _id: string;
    image: string;
    title: string;
    brand: string;
    availableQuantity: number;
    price: number;
    rating: number;
    description?: string;
  };