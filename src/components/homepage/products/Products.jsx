import React, { use, useState } from 'react';
import AvaProducts from '../../avaProducts/AvaProducts';
import SelectedProduct from './selectedProduct/SelectedProduct';

const Products = ({ ProductsPromise, setCount, count }) => {
    console.log(ProductsPromise);
    const products = use(ProductsPromise);
    console.log(products);
    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, "selectedType");
    const [selectedProducts, setSelectedProducts] = useState([]);



    return (
        <div className='max-w-[1200px] mx-auto mt-16 md:mt-24 lg:mt-28 text-center px-4'>

            <div className='flex flex-col items-center'>
                <h2 className='font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4'>Premium Digital Tools</h2>
                <p className='text-[#627382] mb-6 max-w-2xl text-sm sm:text-base'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center border border-gray-200 rounded-full p-1 w-fit mx-auto mb-8 md:mb-11">

                <button
                    onClick={() => setSelectedType("available")}
                    className={`${selectedType === "available" ? "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 lg:py-5 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md cursor-pointer" : "px-4 sm:px-6 md:px-8 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 rounded-full text-[#25065D] font-semibold cursor-pointer"} `}>
                    Products
                </button>

                <button
                    onClick={() => setSelectedType("selected")}
                    className={`${selectedType === "selected" ? "px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 lg:py-5 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md cursor-pointer" : "px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-full text-[#25065D] font-semibold cursor-pointer"} `}>
                    Cart ({selectedProducts.length})
                </button>

            </div>

            {selectedType === "available" ? <AvaProducts 
            products={products} 
            setCount={setCount} 
            count={count} 
            setSelectedProducts={setSelectedProducts} 
            selectedProducts={selectedProducts} /> : 

            <SelectedProduct 
            selectedProducts={selectedProducts} 
            setSelectedProducts={setSelectedProducts} 
            setCount={setCount} 
            count={count}/>}
        </div>
    );
};

export default Products;