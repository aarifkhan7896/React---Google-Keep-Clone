import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Products.css";

const Products = () => {
    const [input,setInput] = useState();
    useEffect((e)=>{
        axios.get(`https://fakestoreapi.com/products`).then((e)=>{
        setInput(e.data);
    }).catch((e)=>{
      console.log(e);
    })
    },[])

    const ProductList = (props)=>{
        return<>
            <div className='outerCard'>
            <div className='card'>
                <h2>{props.title}</h2>
                <img src={props.img} alt="img" />
                <p>{props.price}</p>
                <h5>{props.category}</h5>
                <div className='overlay'>
                    <h4 className='text'>{props.description}</h4>
                </div>
            </div>
            </div>
        </>
    }
    
  return (
    <>
    {input && (
        <div className='outer'>
        {input.map((e)=>{
            return <>
            <ProductList title={e.title} category={e.category} description={e.description} price={e.price} img={e.image} />
            </>
        })}
    </div>
    )}
    </>
  )
}

export default Products