import React from 'react'
import "./SideBar.css"

import { MdTrendingUp, MdProductionQuantityLimits, MdOutlineAttachMoney, MdOutgoingMail, MdOutlineFeedback, MdMessage, MdManageAccounts, MdReport } from "react-icons/md"
import { VscHome} from "react-icons/vsc"

import { IoAnalyticsSharp,  } from "react-icons/io5";

import {IoMdAnalytics} from "react-icons/io"
import { AiOutlineUsergroupAdd  } from "react-icons/ai"

import { HiOutlineDocumentReport  } from "react-icons/hi"

import {  Link } from "react-router-dom";


const SideBar = () => {
  return (
<div className='sidebar'>
  <div className='sidebarWrapper'>
      <div className='sidebar-menu'>
         <h3 className='sidebarTitle'> Dashboard  </h3>
           <ul className='sidebarlist'>

<Link to="/" className='links'>
<li className=' sidebarlist-item    '>
                <VscHome />
                Home
             </li>


</Link>

             
             <li className=' sidebarlist-item'>
                < IoAnalyticsSharp />
                Analytics
             </li>

             <li className=' sidebarlist-item'>
                <MdTrendingUp />
                Sales
             </li>

           </ul>

      </div>




      <div className='sidebar-menu'>
      <h3 className='sidebarTitle'> Quick Menu  </h3>
           <ul className='sidebarlist'>

 <Link to="users" className='links'>
 <li className=' sidebarlist-item    '>
                <AiOutlineUsergroupAdd />
                Users
             </li>
 </Link>

<Link to='/products' className='links'>
<li className=' sidebarlist-item'>
                < MdProductionQuantityLimits />
                Products
             </li>
</Link>
          
<Link to='/TRA' className='links'>
<li className=' sidebarlist-item'>
                <MdOutlineAttachMoney />
                Transactions
             </li>
</Link>
           

             <li className='sidebarlist-item'>
                  < HiOutlineDocumentReport />
                 Reports
             </li>

           </ul>

      </div>





      <div className='sidebar-menu'>
      <h3 className='sidebarTitle'> Notification  </h3>
           <ul className='sidebarlist'>
             <li className=' sidebarlist-item  '>
                <MdOutgoingMail />
                Mail
             </li>

             <li className=' sidebarlist-item'>
                < MdOutlineFeedback />
                Feedback
             </li>

             <li className=' sidebarlist-item'>
                <MdMessage />
                Messages
             </li>

           </ul>

      </div>






      <div className='sidebar-menu'>
      <h3 className='sidebarTitle'>Staff  </h3>
           <ul className='sidebarlist'>
             <li className=' sidebarlist-item  '>
                <MdManageAccounts />
                Manage
             </li>

             <li className=' sidebarlist-item'>
                < IoMdAnalytics />
                Analytics
             </li>

             <li className=' sidebarlist-item'>
                <MdReport />
                Report
             </li>

           </ul>

      </div>









  </div>







    </div>
  )
}

export default SideBar