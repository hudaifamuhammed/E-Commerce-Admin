import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

export const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);

    const fetchinfo = async ()=>{
        await fetch('http://localhost:4000/allprroducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchinfo();
    },[])

  return (
    <div className='list-product'>
        <h1>All Product List</h1>
        <div className="listproduct-format-name">
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
            <hr />
            {allproducts.map((product,index)=>{
                return <div key={index} className="listpproduct-format-main istroduct-format">
                    <img src={product.image} alt="" className="listproduct-product-icon" />
                    <p>{product.name}</p>
                    <p>${product.old_price}</p>
                    <p>${product.new_price}</p>
                    <p>{product.category}</p>
                    <img className='istproduct-remove-icon' src={cross_icon} alt="" />
                </div>
            })}
        </div>
    </div>
  )
}
