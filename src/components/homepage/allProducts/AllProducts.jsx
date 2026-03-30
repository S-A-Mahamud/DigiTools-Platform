import React, { useEffect, useState } from 'react';
import Products from './products/Products';

const AllProducts = () => {
    const [productsData, setProductsData] = useState([]);

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

                <div className='flex gap-4'>
                    <a className='btn btn-primary rounded-full'>Products</a>
                    <a className='btn rounded-full'>Cart (0)</a>
                </div>
            </div>

        <Products productsData={productsData} />
        </div>
    );
};

export default AllProducts;