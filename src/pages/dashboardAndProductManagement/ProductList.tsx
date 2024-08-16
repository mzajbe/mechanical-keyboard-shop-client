import React, { useState } from 'react';
import { TProduct } from "@/types";
import Modal from './Modal';
import { useDeleteProductMutation } from '@/redux/api/baseApi';
import CreateNewProductModal from './CreateNewProductModal';
import ConfirmationModal from './ConfirmationModal';

const ProductList: React.FC<{ products: TProduct[] }> = ({ products }) => {
  const [editingProduct, setEditingProduct] = useState<TProduct | null>(null);
  const [isCreatingProduct, setIsCreatingProduct] = useState<boolean>(false);
  const [deleteProduct] = useDeleteProductMutation();
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  const handleDelete = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete).unwrap();
        console.log("Product deleted successfully");
        setProductToDelete(null);
      } catch (error) {
        console.error("Failed to delete the product:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end mb-4">
        <button
          className="bg-customAccent1 text-white px-4 py-2 rounded"
          onClick={() => setIsCreatingProduct(true)}
        >
          Create New Product
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Brand</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border-b">{product.title}</td>
              <td className="py-2 px-4 border-b">${product.price}</td>
              <td className="py-2 px-4 border-b">{product.brand}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-customAccent1 text-white px-3 py-1 rounded mr-2"
                  onClick={() => setEditingProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => setProductToDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingProduct && (
        <Modal
          product={editingProduct}
          closeModal={() => setEditingProduct(null)}
        />
      )}

      {isCreatingProduct && (
        <CreateNewProductModal closeModal={() => setIsCreatingProduct(false)} />
      )}

      {productToDelete && (
        <ConfirmationModal
          message="Are you sure you want to delete this product?"
          onConfirm={handleDelete}
          onCancel={() => setProductToDelete(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
