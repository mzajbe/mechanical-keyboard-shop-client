import { useCreateProductMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface CreateProductModalProps {
  closeModal: () => void;
}

// Define the Zod schema
const productZodSchema = z.object({
//   id: z.string().nonempty({ message: 'Product ID is required' }),
title: z.string().nonempty({ message: 'Product title is required' }),
price: z.number().min(0, { message: 'Product price must be 0 or greater' }),
description: z.string().optional(),
availableQuantity: z.number().min(0, { message: 'Available quantity must be 0 or greater' }),
rating: z.number().min(0).max(5, { message: 'Product rating must be between 0 and 5' }),
image: z.string().nonempty({ message: 'Product image URL is required' }),
brand: z.string().nonempty({ message: 'Product brand is required' }),
});

const CreateNewProductModal: React.FC<CreateProductModalProps> = ({
  closeModal,
}) => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    price: 0,
    description: '',
    availableQuantity: 0,
    rating: 0,
    image: '',
    brand: ''
  });

  const [createProduct] = useCreateProductMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
  
    // Parse the value to a number if the input is for a numeric field
    const parsedValue = 
      name === "price" || 
      name === "availableQuantity" || 
      name === "rating" ? Number(value) : value;
  
    setNewProduct({ ...newProduct, [name]: parsedValue });
  };
  

  const handleSubmit = async () => {
    // Generate a unique id for the product
    const newProductWithId = { ...newProduct, id: `product-${uuidv4()}` };

    // Validate the data with Zod
    const validationResult = productZodSchema.safeParse(newProductWithId);

    if (!validationResult.success) {
      // If validation fails, show errors with toast notifications
      validationResult.error.errors.forEach((error) => {
        toast.error(error.message);
      });
      return;
    }

    try {
      await createProduct(newProductWithId).unwrap();
      closeModal();
      toast.success('Product created successfully!');
    } catch (error) {
      console.error("Failed to create product:", error);
      toast.error('Failed to create product.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Create New Product</h2>
        <input
          type="text"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price !== 0 ? newProduct.price : ''}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          name="availableQuantity"
          value={newProduct.availableQuantity !== 0 ? newProduct.availableQuantity : ''}
          onChange={handleChange}
          placeholder="Available Quantity"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          name="rating"
          value={newProduct.rating !== 0 ? newProduct.rating : ''}
          onChange={handleChange}
          placeholder="Rating"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="brand"
          value={newProduct.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex justify-end">
          <button
            className="mr-4 bg-customAccent1 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Create Product
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateNewProductModal;
