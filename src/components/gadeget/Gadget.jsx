import React from 'react';
import Card from './Card';

const Gadget = ({products}) => {

    return (
        <div>
            {
                products.map(product=><Card key={product.id} product={product}/>)
            }
        </div>
    );
};

export default Gadget;