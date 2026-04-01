import React from 'react';

const SelectedCard = ({ product, handleDeleteSelectedProduct }) => {
    return (
        <div className='bg-[#e6e9ee60] p-4 sm:p-6 md:p-8 rounded-2xl'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                <div className='flex items-center gap-4 sm:gap-6'>
                    <div className='border border-[#62738241] rounded-full p-2 sm:p-3.5 bg-white'>
                        <img className="h-10 w-10 sm:h-12 sm:w-12 object-contain" src={product.productImg
                        } alt="product.name" />
                    </div>

                    <div className='text-left'>
                        <h2 className='font-semibold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2'>{product.name}</h2>
                        <p className='text-[#627382] font-medium text-sm sm:text-base'>${product.price}</p>
                    </div>
                </div>
                <button className='self-start sm:self-auto font-bold text-[#FF3980] hover:bg-red-100 rounded-md px-3 py-1 text-sm sm:text-base cursor-pointer' onClick={() => handleDeleteSelectedProduct(product)}>
                    Remove
                </button>

            </div>

            
        </div>
        
    );
};

export default SelectedCard;