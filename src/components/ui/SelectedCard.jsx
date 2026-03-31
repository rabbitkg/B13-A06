import React from 'react';

const SelectedCard = ({ product, handleDeleteSelectedProduct }) => {
    return (
        <div>
            <div className='flex items-center gap-6 justify-between p-10 rounded-2xl bg-[#e6e9ee60]'>
                <div className='flex items-center gap-6'>
                    <div className='border border-[#62738241] rounded-full p-3.5 bg-white'>
                        <img className="h-12 w-12 " src={product.productImg
                        } alt="product.name" />
                    </div>
                    <div className='text-left'>
                        <h2 className='flex font-semibold text-2xl mb-2'>{product.name}</h2>
                        <p className='text-[#627382] font-medium'>${product.price}</p>
                    </div>
                </div>
                <button className='font-bold text-[#FF3980] cursor-pointer hover:bg-red-100 rounded-sm px-3 py-1' onClick={() => handleDeleteSelectedProduct(product)}>
                    Remove
                </button>

            </div>

            
        </div>
        
    );
};

export default SelectedCard;