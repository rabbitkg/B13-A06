import React from 'react';
import Card from '../ui/Card';

const AvaProducts = ({ products }) => {
    console.log(products, "products");
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    products.map((product) => {
                        console.log(product, "product");
                        return <Card product={product}/>;
                    })
                }
            </div>




        </div>
    );
};

export default AvaProducts;