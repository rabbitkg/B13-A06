import React, { use } from 'react';
import AvaProducts from '../../avaProducts/AvaProducts';

const Products = ({ProductsPromise}) => {
    console.log(ProductsPromise);
    const products = use(ProductsPromise);
    console.log(products);
    return (
        <div className='max-w-[1200px] mx-auto mt-28'>
            Products

            <AvaProducts products={products}/>
        </div>
    );
};

export default Products;