import React, { useEffect, useState } from 'react'
import "../styles/UserviewProduct.css";
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
const UserviewProduct = () => {
  let [item, setitem] = useState([])
  let navigate=useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8080/products`)
      .then((res) => {
        console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  let searchBybrand = (brand) => {
    axios.get(`http://localhost:8080/products/find-by-brand/${brand}`)
      .then((res) => {
        console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let searchByCategory = (category) => {
    axios.get(`http://localhost:8080/products/find-by-category/${category}`)
      .then((res) => {
        console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  let click=(id)=>{
    navigate(`/userhomepage/cart/${id}`);
  }

  return (
    <div className='disp'>
     
      {item.map((x) => {
        return (
          <div className="search">
            <div className="brand">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Search
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { searchBybrand(x.brand) }}>By Brand</Dropdown.Item>
                  <Dropdown.Item onClick={() => { searchByCategory(x.category) }}>By Category</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="productview">
              <div className="image">
                <span id='category'>{x.category}</span>
                <img src={x.image_url} alt="" />
              </div>
              <div className="desc">
                <h4 id='name'>{x.name} || {x.brand}</h4>
                <span id='cost'><sup><b>₹</b></sup>{x.cost}</span>
                <button onClick={()=>{click(x.id)}}>Add to cart</button>
                <br />
                <span id='desc'>{x.description}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserviewProduct