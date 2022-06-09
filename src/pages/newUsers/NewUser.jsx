import React from 'react'
import  "./NewUser.css"


const NewUser = () => {
  return (
    <div className='newuser'>
   <h1 className='newuser-title'>New User</h1>   
      <form className='newuser-form'>
          <div className='newuser-item'>
             <label >Usrname</label>
             <input type="text" placeholder='Mike_top1' />
          </div>

          <div className='newuser-item'>
             <label >Full Name</label>
             <input type="text" placeholder='Mike John' />
          </div>

          <div className='newuser-item'>
             <label >Email</label>
             <input type="Email" />
          </div>
 
          <div className='newuser-item'>
             <label >Password</label>
             <input type="text" />
          </div>

          <div className='newuser-item'>
             <label >Phone</label>
             <input type="text" placeholder='+234' />
          </div>

          <div className='newuser-item'>
             <label >Location</label>
             <input type="text" placeholder='Lagos/ng' />
          </div>  

          <div className="newuser-item">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>

        <div className="newuser-item">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newuser-itemButton">Create</button>


      </form>
      
    
    
    
    </div>
  )
}

export default NewUser