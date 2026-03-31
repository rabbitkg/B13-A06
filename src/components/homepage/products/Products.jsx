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
        <div className='max-w-[1200px] mx-auto mt-28 text-center'>
            <div className='flex flex-col items-center'>
                <h2 className='font-extrabold text-5xl mb-4'>Premium Digital Tools</h2>
                <p className='text-[#627382] mb-4 max-w-2xl'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className="flex items-center justify-center border border-gray-200 rounded-full p-1 w-fit mx-auto mb-11">

                <button
                    onClick={() => setSelectedType("available")}
                    className={`${selectedType === "available" ? "px-8 py-5 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md cursor-pointer" : "px-10 py-5 rounded-full text-[#25065D] font-semibold cursor-pointer"} `}>
                    Products
                </button>

                <button
                    onClick={() => setSelectedType("selected")}
                    className={`${selectedType === "selected" ? "px-8 py-5 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md cursor-pointer" : "px-10 py-5 rounded-full text-[#25065D] font-semibold cursor-pointer"} `}>
                    Cart ({selectedProducts.length})
                </button>

            </div>

            {selectedType === "available" ? <AvaProducts products={products} setCount={setCount} count={count} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts} /> : <SelectedProduct selectedProducts={selectedProducts} />}
        </div>
    );
};

export default Products;