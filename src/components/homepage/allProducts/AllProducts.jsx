import React, { useEffect, useState } from 'react';
import Products from './products/Products';

const AllProducts = () => {
    const [productsData, setProductsData] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('products');

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setProductsData(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    console.log(productsData);

    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className='text-5xl font-semibold'>Premium Digital Tools</h2>
                <p className='max-w-lg'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                <div className='flex bg-gray-200 p-2 rounded-full'>
                    <a className={`btn ${selectedCategory === 'products' ? 'btn-primary' : 'btn-ghost'} rounded-full`} onClick={() => setSelectedCategory('products')}>
                        Products
                    </a>
                    <a className={`btn ${selectedCategory === 'cart' ? 'btn-primary' : 'btn-ghost'} rounded-full`} onClick={() => setSelectedCategory('cart')}>
                        Cart (0)
                    </a>
                </div>
            </div>

        <Products productsData={productsData} />
        </div>
    );
};

export default AllProducts;