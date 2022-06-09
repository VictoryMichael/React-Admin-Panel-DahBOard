import { useState } from "react"
import "./UserList.css"
import { Userrows  } from '../../dummyData'



import {DataGrid} from "@material-ui/data-grid"

import {MdDeleteForever} from "react-icons/md"

import { Link } from 'react-router-dom'

  export default function UserList  ()  {

const [data,setData]= useState(Userrows);


const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id  ));


}


 const columns = [
{field: "id", headerName: "ID",  width: 70   },

{field: "username",  headerName:"User", width:200, renderCell: (params)=> {
       return(
           <div className='userlist'>
               <img className='userlist-img'   src={params.row.avatar} alt="" />
                {params.row.username}
           </div>


       )




} },






{field: "email", headerName: "Email",  width: 130  },



{ 
field: 'status',
headerName: 'status',
width:120
},


{ 
    field: 'transaction',
    headerName: 'Transaction Volume',
    width:160
    },
  


    { 
      field: 'action',
      headerName: 'Actions',
      width:150,

      renderCell: (params) => {
         return(
           <> 


       



   


<Link to={"/users" + params.row.id} > <button className='userlist-edit'> Edit</button></Link>







           < MdDeleteForever className='user-delete'   onClick={()=> handleDelete(params.row.id)} />

           </>
         )



      }
      },
    
  



];



    


return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
  


  

