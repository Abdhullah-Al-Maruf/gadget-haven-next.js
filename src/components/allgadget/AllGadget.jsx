import React from 'react';
import Gadget from '../gadeget/Gadget';
import Leftside from './Leftside';

const AllGadget = async( ) => {
const res =await fetch("https://dummyjson.com/products")
const data =await res.json()
const products=data.products
    return (
        <div >
            <h1 className='text-center text-3xl font-bold mt-50'>Explore Cutting-Edge Gadgets</h1>
        <div className='flex w-[80%] mx-auto gap-10 mt-10'>
            <Leftside/>
            <Gadget products={products}/>
        
        </div>
        </div>
    );
};

export default AllGadget;