import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ 
    product, 
    setCount, 
    selectedProducts, 
    setSelectedProducts 
}) => {

    const isAlreadyAdded = selectedProducts.some(item => item.name === product.name);

    const handleChooseProduct = () => {
        if (isAlreadyAdded) {
            toast.info(`${product.name} is already in your cart!`);
            return;
        }

        const productCount = Number(product.count) || 1;

        setCount(prev => prev + productCount);
        setSelectedProducts(prev => [...prev, product]);

        toast.success(`${product.name} is Added to Cart.`);
    };

    return (
        <div className="card bg-base-100 rounded-2xl border-3 border-gray-200 ">
            <div className="card-body p-3">

                <div className="flex justify-end">
                    <span
                        className={`badge badge-sm p-4 rounded-full ${product.tagType === "best seller"
                            ? "bg-[#FEF3C6] text-[#BB4D00]"
                            : product.tagType === "popular"
                                ? "bg-[#E1E7FF] text-[#4F39F6]"
                                : product.tagType === "new"
                                    ? "bg-[#DBFCE7] text-[#0A883E]"
                                    : ""
                            }`}
                    >
                        {product.tagType}
                    </span>
                </div>

                <div className="flex justify-start">
                    <div className="border border-[#62738241] rounded-full p-3.5 bg-white">
                        <img
                            className="h-9 w-9 object-contain"
                            src={product.productImg}
                            alt={product.name}
                        />
                    </div>
                </div>

                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                    <p className='text-[#627382] mb-4'>{product.description}</p>
                    <p className="text-xl font-bold">
                        ${product.price}
                        <span className='text-[#627382] font-medium'>/{product.period}</span>
                    </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-[#627382]">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex justify-center mb-3.5">
                    <button
                        onClick={handleChooseProduct}
                        disabled={isAlreadyAdded}
                        className={`btn w-full max-w-xs rounded-full text-white font-bold 
                            ${isAlreadyAdded 
                                ? "bg-green-600 cursor-default" 
                                : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:brightness-110"
                            }`}
                    >
                        {isAlreadyAdded ? (
                            <>
                                <FaCheck className="text-lg" /> 
                                Added to Cart!
                            </>
                        ) : (
                            "Buy Now"
                        )}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;