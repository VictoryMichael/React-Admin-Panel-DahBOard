import React from 'react'
import "./WidgetSm.css"

import {MdVisibilityOff } from "react-icons/md"













const WidgetSm = () => {
  return (
  <div className='small-widget'>
      <span className='widgetsm-title'>New Joined Members</span>
          <ul className='widgetsm-list'>
             <li className='widgetsmall-listitem'>
                 <img className='widgetsm-img' src="https://media.istockphoto.com/photos/smiling-african-american-business-woman-wearing-stylish-eyeglasses-picture-id1325565779?b=1&k=20&m=1325565779&s=170667a&w=0&h=mg7anQmF533oAt9xqypvLR-y0ei692eWC7zsnnjjlQc=" alt="" />
                    <div className='widgetsm-users'>
                        <span className='widgetsm-uSERNAME'>Sofia Mullar</span>
                         <span className='widgetsm-usertitle'>Product Manager</span>
                    </div>
                       <button className='widgetsm-button'>
                           <MdVisibilityOff className='btn-icon'  /> Display
                       </button>
             </li>
          </ul>

  

          <ul className='widgetsm-list'>
             <li className='widgetsmall-listitem'>
                 <img  className='widgetsm-img'   src="https://cdn.vanguardngr.com/wp-content/uploads/2022/04/294FA676-40E8-4299-B26C-58F87D6034E7.jpeg" alt="" />
                    <div className='widgetsm-users'>
                        <span className='widgetsm-uSERNAME'>Victor Chinemere</span>
                         <span className='widgetsm-usertitle'>Backend Developer</span>
                    </div>
                       <button className='widgetsm-button'>
                           <MdVisibilityOff className='btn-icon'   /> Display
                       </button>
             </li>
          </ul>




          <ul className='widgetsm-list'>
             <li className='widgetsmall-listitem'>
                 <img className='widgetsm-img'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6cLBPo5LkwqnhxGKfdPF9dBycCJ-xxVyqEA&usqp=CAU" alt="" />
                    <div className='widgetsm-users'>
                        <span className='widgetsm-uSERNAME'>Chinedu Andrew</span>
                         <span className='widgetsm-usertitle'>Brand Influncer</span>
                    </div>
                       <button className='widgetsm-button'>
                           <MdVisibilityOff  className='btn-icon'  /> Display
                       </button>
             </li>
          </ul>





          <ul className='widgetsm-list'>
             <li className='widgetsmall-listitem'>
                 <img  className='widgetsm-img'  src="data:image/jpeg;base64,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" alt="" />
                    <div className='widgetsm-users'>
                        <span className='widgetsm-uSERNAME'>Matthew Anderson</span>
                         <span className='widgetsm-usertitle'>Fullstack Developer</span>
                    </div>
                       <button className='widgetsm-button'>
                           <MdVisibilityOff  className='btn-icon'   /> Display
                       </button>
             </li>
          </ul>



          <ul className='widgetsm-list'>
             <li className='widgetsmall-listitem'>
                 <img className='widgetsm-img' src="https://media.istockphoto.com/photos/portrait-of-smiling-african-american-young-woman-indoors-talking-to-picture-id1303366695?b=1&k=20&m=1303366695&s=170667a&w=0&h=GLMegrANopdgYlqwUCxGnnsdDlDM10wPCR1DBSsAEfQ=" alt="" />
                    <div className='widgetsm-users'>
                        <span className='widgetsm-username'>Ada Morrin</span>
                         <span className='widgetsm-usertitle'>HR</span>
                    </div>
                       <button className='widgetsm-button'>
                           <MdVisibilityOff  className='btn-icon'/> Display
                       </button>
             </li>
          </ul>






  </div>
  )
}

export default WidgetSm