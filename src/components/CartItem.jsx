import React from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineDelete } from 'react-icons/md'; // For the delete icon
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

export default function CartItem({ item, index }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove(item.id));
    toast.error(`${item.title} removed from cart`);
  };

  return (
    <div className="flex items-start bg-white shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
      {/* Product Image */}
      <div className="w-32 h-32 mr-6 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        {/* Product Title */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h2>

        {/* Product Description */}
        <p className="text-gray-600 text-base mb-4 leading-relaxed">
          {item.description.split(' ').slice(0, 30).join(' ')}...
        </p>

        {/* Product Price */}
        <p className="text-green-700 text-xl font-bold">${item.price.toFixed(2)}</p>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleRemove}
        className="ml-6 text-red-600 hover:text-red-800 transition duration-200"
      >
        <MdOutlineDelete size={28} />
      </button>
    </div>
  );
}
