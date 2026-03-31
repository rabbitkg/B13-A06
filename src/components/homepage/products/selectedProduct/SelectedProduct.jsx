import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import SelectedCard from '../../../ui/SelectedCard';

const SelectedProduct = ({ selectedProducts, setSelectedProducts, setCount, count }) => {
    console.log(selectedProducts, "selectedProducts");

    const handleDeleteSelectedProduct = (product) => {

        console.log(selectedProducts, "selectedProducts");
        const filteredProduct = selectedProducts.filter(selectedProduct => selectedProduct.name !== product.name)
        console.log(filteredProduct, "filteredProduct");
        setSelectedProducts(filteredProduct);

        setCount(count - product.count);
    }

    return (
        <div>

            <div className='space-y-5 border-3 border-[#62738241] rounded-2xl p-6 mb-28'>
                <h3 className='font-bold text-3xl text-left'>Your Cart</h3>
                {
                    selectedProducts.length === 0 ?
                        <div className='h-[350px] flex items-center justify-center flex-col gap-4'>
                            <FiShoppingCart size={100} className='text-[#62738273]' />
                            <p className='text-[#627382] font-medium'>Your Cart is Empty</p>
                        </div>
                        : selectedProducts.map((product, ind) => {
                            return <SelectedCard key={ind} product={product} handleDeleteSelectedProduct={handleDeleteSelectedProduct} />
                        })
                }

                
            </div>




        </div>
    );
};

export default SelectedProduct;