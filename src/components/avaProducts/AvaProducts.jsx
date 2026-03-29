import React from 'react';

const AvaProducts = ({ products }) => {
    console.log(products, "products");
    return (
        <div>

            <div className='grid grid-cols-3 gap-8'>
                {
                products.map((product) => {
                    console.log(product, "product");
                    return <div className="card bg-base-100 shadow-xl rounded-2xl">
                        <div className="card-body p-6">

                            {/* Badge */}
                            <div className="flex justify-end">
                                <span className="badge badge-sm bg-yellow-200 text-black">
                                    {product.tagType}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="flex justify-start my-4">
                                <img className="h-12 w-12" src="/src/assets/operation.png" alt="icon" />
                            </div>

                            {/* Title + Price */}
                            <div className="text-left">
                                <h2 className="text-2xl font-bold">{product.name}</h2>
                                <p className='text-[#627382]'>{product.description}</p>
                                <p className="text-xl mt-1">${product.price}/mo</p>
                            </div>

                            {/* Features */}
                            <ul className="mt-6 space-y-2 text-sm text-[#627382]">
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

                            {/* Button */}
                            <div className="mt-6">
                                <button className="btn rounded-full text-white font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-33">
                                    Buy Now
                                </button>
                            </div>

                        </div>
                    </div>
                })
            }
            </div>




        </div>
    );
};

export default AvaProducts;