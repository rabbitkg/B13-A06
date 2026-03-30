import React, { use } from 'react';
import AvaProducts from '../../avaProducts/AvaProducts';

const Products = ({ ProductsPromise }) => {
    console.log(ProductsPromise);
    const products = use(ProductsPromise);
    console.log(products);
    return (
        <div className='max-w-[1200px] mx-auto mt-28 text-center'>
            <div className='flex flex-col items-center'>
                <h2 className='font-extrabold text-5xl mb-4'>Premium Digital Tools</h2>
                <p className='text-[#627382] mb-4 max-w-2xl'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className="flex items-center justify-center border border-gray-200 rounded-full p-1 w-fit mx-auto mb-11">

                <button className="px-8 py-5 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md cursor-pointer">
                    Products
                </button>

                <button className="px-8 py-5 rounded-full text-[#25065D] font-semibold cursor-pointer">
                    Cart (2)
                </button>

            </div>

            <AvaProducts products={products} />
        </div>
    );
};

export default Products;