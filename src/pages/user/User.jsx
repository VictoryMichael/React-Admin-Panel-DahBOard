import React from 'react'
import "./User.css"
import {MdOutlinePerson, MdLocationPin, MdOutlineMail, MdPublish} from "react-icons/md"
import {FcCalendar} from "react-icons/fc"
import {GoDeviceMobile} from "react-icons/go"
import { Link } from 'react-router-dom'







const User = () => {
  return (
     <div className='user'>

          <div className='usertitle-container'>
               <h1 className='user-tile'>Edit User</h1>
<Link to='/newUsers'>
<button className='useradd-btn'>Create </button>

</Link>
 
 
                  
          </div >

<div className='user-container'>
    <div className='usershow'>
        <div className='usershow-top'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgh4LYn-Yn5kN-Dnb9zi5zCUSoSUgH6ZvtCw&usqp=CAU" alt=""  className='usershow-img'/>
              <div className='usershowtop-title'>
                <span className='usershow-username'>Delle Andrew</span>
                <span className='usershow-title'>Softwear Enginner</span>
              </div>

        </div>

        <div className='usershow-bottom'>
           <span className='usershow-title1'>Account Details</span>
           <div className='usershow-info'>   
              <MdOutlinePerson className='usershow-icon'  />
                <span className='usershow-infotitle'>delle453</span>
            </div>

            <div className='usershow-info'>   
              <FcCalendar className='usershow-icon'  />
                <span className='usershow-infotitle'>23/4/1967</span>
            </div>
    
    <span className='usershow-title1'>Contact Info</span>

            <div className='usershow-info'>   
              <GoDeviceMobile className='usershow-icon'  />
                <span className='usershow-infotitle'>+234 704015678</span>
            </div>


            <div className='usershow-info'>   
              <MdOutlineMail className='usershow-icon'  />
                <span className='usershow-infotitle'>Delle23@gmail.com</span>
            </div>

            <div className='usershow-info'>   
              <MdLocationPin className='usershow-icon'  />
                <span className='usershow-infotitle'>Lagos/Ng</span>
            </div>
        </div>
    </div>




    <div className='userupdate'>
       <span className='userupdate-title'>Edit</span>
          <form className='userupdate-form'>
             <div className="userupdate-left">
                  <div className="userupdate-item">
                       <label >Username</label>
                          <input type="text" 
                          placeholder='delle453'
                          className='userupdate-inpute' />
                  </div>

                  <div className="userupdate-item">
                       <label >Fullname</label>
                          <input type="text" 
                          placeholder='Delle Andrew'
                          className='userupdate-inpute' />
                  </div>


                  <div className="userupdate-item">
                       <label >Phone</label>
                          <input type="tel" 
                          placeholder='+234 704015678'
                          className='userupdate-inpute' />
                  </div>


                  <div className="userupdate-item">
                       <label >Email</label>
                          <input type="email" 
                          placeholder='Delle23@gmail.com'
                          className='userupdate-inpute' />
                  </div>


                  <div className="userupdate-item">
                       <label >Location</label>
                          <input type="text" 
                          placeholder='Lagos/Ng'
                          className='userupdate-inpute' />
                  </div>
                  <button className='update-btn'>Update</button>
             </div>

              <div className="userupdate-right">
                   <div className='userupdate-upload'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgh4LYn-Yn5kN-Dnb9zi5zCUSoSUgH6ZvtCw&usqp=CAU" alt="" 
                       className='userupdate-img'   />
                       
                       <label htmlFor="file"> <MdPublish className='selectfile-btn' />  </label>
                         <input type="file" id='file'    style= {{display:"none"}} />
                       
                   </div>
             
              </div>

        

          </form>

    </div>




</div>



     </div>  
   
  )
}

export default User