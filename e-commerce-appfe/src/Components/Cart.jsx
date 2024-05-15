import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../styles/Cart.css";
const Cart = () => {
    let [data,setData]=useState([]);
    let param = useParams();
    console.log(data);
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/find-by-id/${param.id}`)
        .then((res)=>{setData(res.data?.body);console.log(res.data);})
        .catch(()=>{console.log("error.....");})
    },[])
  return (
    <div className='cart'>
        <form action="">
            <div className="img">
            <img src={data.image_url} alt="product" />
            </div>
            <h2>Product Name: <span>{data.name}</span></h2>
            <h2>Product Brand: <span>{data.brand}</span></h2>
            <h2>Product Price:  <span>₹ {data.cost}</span></h2>
            <button>Buy Now</button>
        </form>
      
    </div>
  )
}

export default Cart