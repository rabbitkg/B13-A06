import React from 'react';
import Card from '../ui/Card';

const AvaProducts = ({ products, setCount, count, selectedProducts, setSelectedProducts }) => {
    console.log(products, "products");
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-28'>
                {
                    products.map((product, ind) => {
                        console.log(product, "product");
                        return <Card key={ind} product={product} setCount={setCount} count={count} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>;
                    })
                }
            </div>




        </div>
    );
};

export default AvaProducts;