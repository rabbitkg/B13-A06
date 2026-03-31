import React, { useState } from 'react';

const Card = ({ product, setCount, selectedProducts, setSelectedProducts}) => {
    const [isSelected, setIsSelected] = useState(false);

    console.log(product.count)
    const handleChooseProduct = () => {
        if (isSelected) return;

        setIsSelected(true); 
        Number(product.count)
        setCount(prev => prev + Number(product.count));

        alert(`${product.name} has been Purchased.`);
        setIsSelected(true);
        setSelectedProducts([...selectedProducts, product])
    }

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

                <div className="flex justify-start my-4">
                    <img className="h-12 w-12" src={product.productImg
                    } alt="product.productImg" />
                </div>

                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                    <p className='text-[#627382] mb-4'>{product.description}</p>
                    <p className="text-xl font-bold">${product.price}<span className='text-[#627382] font-medium'>/Mo</span> </p>
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

                <div className="mt-4 flex justify-center">
                    <button
                        onClick={handleChooseProduct}
                        className={`btn w-full max-w-xs rounded-full text-white font-bold ${isSelected ? "bg-green-600" : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"}`}
                    >
                        {isSelected ? "Added to Cart!" : "Buy Now"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;