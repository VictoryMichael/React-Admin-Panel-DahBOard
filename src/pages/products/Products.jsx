import React from "react";
import Charts from "../../components/charts/Charts";
import {Productdata} from "../../dummyData"
import {MdPublishedWithChanges} from "react-icons/md"

import "./Product.css"
import { Link } from "react-router-dom";



const Products = () => {
  return (
    <div className="products">
        <div className="product-container">
            <h1 className="product-title">Product</h1>
            
<Link to='/newProduct'>
<button className="productadd-btn">Create</button>
</Link>


        </div>

<div className="product-top">
      <div className="producttop-left">

        <Charts  data={Productdata}    dataKey="Sales" title="Sales performance"   />

      </div>

      <div className="producttop-right">
         <div className="productinfo-top">
             <img src="https://cdn.mos.cms.futurecdn.net/r8bUqAh7SAzkj2rjaK3YCF.jpg" alt="" className="product-img" />
             <span className="product-name">Smart Watches</span>
         </div>
         <div className="productinfo-down">
            <div className="product-infoitem">
                <span className="productinfo-key">id:</span>
                <span className="productinfo-value">234:</span>
            </div>

            <div className="product-infoitem">
                <span className="productinfo-key">Sales:</span>
                <span className="productinfo-value">$999:</span>
            </div>

            <div className="product-infoitem">
                <span className="productinfo-key">Active:</span>
                <span className="productinfo-value">Yes:</span>
            </div>

            <div className="product-infoitem">
                <span className="productinfo-key">In Stock:</span>
                <span className="productinfo-value">234:</span>
            </div>

         </div>

      </div>

</div>

<div className="product-bottom">
   <form  className="product-form">
      <div className="productform-left">

      <label>Product Name</label>
                  <input type="text" placeholder="Smart watche" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>

      </div>
      <div className="productform-right">


      <div className="productUpload">
                      <img src="https://cdn.mos.cms.futurecdn.net/r8bUqAh7SAzkj2rjaK3YCF.jpg" alt="" className="productUploadImg" />
                      <label for="file">
                          <MdPublishedWithChanges/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>

      </div> 



   </form>

</div>


        </div>
  )
}

export default Products


