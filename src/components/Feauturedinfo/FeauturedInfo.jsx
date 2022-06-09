import React from 'react'

import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa"

import "./FeauturedInfo.css"







const FeauturedInfo = () => {
  return (
    <div className='main-container'>

        <div className='feauture-item' >
           <span className='feautured-title'>Revenue</span>
              <div className='feauturedMoneyContainer'>
                 <span className='feauturedMoney'> $3,589</span>
                  <span featuredMoneyRate> -13.9   <FaLongArrowAltDown  className='featuredicon-nagative'  /> </span>
              </div>
                <span className="featuredSub"> Compared To Last Month</span>
        </div>


        <div className='feauture-item' >
           <span className='feautured-title'>Sales</span>
              <div className='feauturedMoneyContainer'>
                 <span className='feauturedMoney'> $29,589</span>
                  <span featuredMoneyRate> -1.9   <FaLongArrowAltDown className='featuredicon-nagative' /> </span>
              </div>
                <span className="featuredSub"> Compared To Last Month</span>
        </div>



        <div className='feauture-item' >
           <span className='feautured-title'>Cost</span>
              <div className='feauturedMoneyContainer'>
                 <span className='feauturedMoney'> $1,589</span>
                  <span featuredMoneyRate> +2.9   <FaLongArrowAltUp    className='featuredicon-positive' /> </span>
              </div>
                <span className="featuredSub"> Compared To Last Month</span>
        </div>






        </div>   
        
  )
}

export default FeauturedInfo
