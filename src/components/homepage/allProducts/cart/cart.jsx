import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Cart = ({ productCart }) => {
    console.log(productCart);
    return (
        <div className='bg-gray-200 border border-gray-300 rounded-lg p-6 my-10 w-full'>
            <p className='text-xl font-bold'>Your Cart</p>
            {
                productCart.length === 0 ?
                    <div className=''>
                        <div className='flex flex-col justify-center items-center my-8'>
                            <IoCartOutline className='text-8xl text-gray-400' />
                            <h3 className='text-2xl text-gray-400 font-semibold'>Your cart is empty</h3>
                        </div>
                    </div> :
                    <div className='flex flex-col mt-2 gap-4 w-full'>
                        {productCart.map(product => (
                            <div key={product.id} className="card bg-base-100 shadow-sm flex-row items-center justify-between">
                                <div className="card-body flex flex-row items-center gap-4">
                                    {/* Icon */}
                                    <div className='w-16 h-16 bg-gray-100 p-4 border border-gray-300 rounded-full flex items-center justify-center'>
                                        <img
                                            src={product.icon}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className='flex flex-col justify-center'>
                                        <h3 className="text-xl font-bold">{product.name}</h3>
                                        <span className="text-xl">${product.price}</span>
                                    </div>
                                </div>

                                <div className='me-4 cursor-pointer text-red-600 tooltip tooltip-left' data-tip="Remove">
                                    <span className="tooltip-content bg-gray-500 text-white px-2 py-1 rounded text-sm">
                                        Remove
                                    </span>
                                    <MdDelete className='w-8 h-8' />
                                </div>
                            </div>

                        ))}

                        <div className='flex justify-between items-center'>
                            <p className='text-gray-600'>Total:</p>
                            <h3 className='font-bold text-xl'>${40}</h3>
                        </div>

                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
                            <span className='text-white'>Proceed to Checkout</span>
                        </button>
                    </div>
            }
        </div>
    );
};

export default Cart;