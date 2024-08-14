/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TProduct } from "@/types";
import { useUpdateProductMutation } from "@/redux/api/baseApi";

interface EditProductModalProps {
  product: TProduct;
  closeModal: () => void;
}

const Modal: React.FC<EditProductModalProps> = ({ product, closeModal }) => {
  const [updatedProduct, setUpdatedProduct] = useState<TProduct>(product);
  const [updateProduct] = useUpdateProductMutation();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = async () => {
    await updateProduct({ id: updatedProduct._id, data: updatedProduct });
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
        <input
          type="text"
          name="title"
          value={updatedProduct.title}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Product Title"
        />
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Product Price"
        />
        <input
          type="text"
          name="brand"
          value={updatedProduct.brand}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Product Brand"
        />
        <div className="flex justify-end space-x-4">
          <button 
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button 
            className="mt-4 bg-customAccent1 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
