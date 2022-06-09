import React from 'react'
import  "./TopBar.css"
import {MdOutlineNotificationsActive, MdOutlineLanguage, MdOutlineSettings } from "react-icons/md"














const topBar = () => {
  return (
    <div className='topbar'>
       <div  className='topbarWrapper'>
          <div className='topLeft'  >
              <span> <img src="   data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADK0lEQVRoge2Xy2sTQRzHvzNZN9ltm9g0mz5RY59oqtAXhaoUK4imqQg2f4GgoqCCB/HkwdfFY7U3D+IlpaVIrUWqLdKLB/EigrUHsSAq2taqTWnTjAcpatjszr6aKPnckv3N/OabyXwyAfLkyfNPQ3gLP3deYk4uJAN9gclrZ7QK6EatxDhsvATiOb0qYSOWYhiGaWGNxcjU5aReaS7uwDwTWHTz1I15nuJcC5AEaEx5fH2ad0BuBSDkbGDyyriRIbkUoC8wcfWW0UE5EoDPOGpk30IGjKNGtnfAkHHUyGYAw8ZRI3sBTBhHjWwFMGUcNbIQwLxx1OC+jYaqqxlSKbgkCYLkgej2oMhTgCpvADtdxehIyNi9JGpPwjAtrKXarRzadPgDhEK612mP34+G8hB6aAUii4Xp2zvPXKzd6qFNx9YAfyL5/eiqCuP8UiW8q0gC9JAdhzYdx37IEnNzGJl7ikc+H3ZEj7541VL1DJP293H8EAvhBgxXeFpnPy18Cd3tv2D3/I59hQBAqq/BzJEDWGG/h5bJBS8rZXHP89iJr0bnU8OxHRBLFbyL7P9r8QDwYelH+M3i0vvae/377OjjSACXLGHhWATfXeob/G11Rfa75fuRkXiz1V72B6AUyVgUH2V3xpJwcQBBWfZRSp9Exgb2WmpnZbAa7p6DeKsUZ3y+pciLbV7f+ksvTZGx6Ohgu9l+tgaQOtrwum5rxuclHgmNJUr62zKQGo6MDG4309O2AFJ9DWY6msCYuqxkYRNaguWgquIjpZSy4d54XDLa15YAmYyzjkAp2oLlEKlmu8blQnrTaG/LAfSMQwA0K2UoEnUuer841f1woMtIf2sBeIzjVxCUZO4pCSO3OyfueLiXwD2zCgaNw0utN+E9zVtsOoBJ43DBgIu9E/FCnlpTATx1VozDAwssJ1zHeSoNBxBLFcx2WzYOB+wkGNP9BAx1sdk4etT3jA7pXjP4AzhgHD1ShPXqLot3MoeMowkBono13AG0jKNIMnb5zRlHh62HHwzVaRVwB9AyTpNSBkLMGkcbStZaNZ9bmdw+42SGMGL5T0+ePP8zPwGXS+C0rcxLewAAAABJRU5ErkJggg==   " alt="" />      </span>
              

          </div>
          <div className='topRight'  >
          <div className='topbarIconcontainer'>   
            < MdOutlineNotificationsActive  size='2rem' />
               <span className='topIconBag'>4</span>                 
               </div>


               <div className='topbarIconcontainer'>   
            < MdOutlineLanguage  size='2rem' />
                 
               </div>



               <div className='topbarIconcontainer'>   
            < MdOutlineSettings  size='2rem' />
               <span className='topIconBag'>3</span>                 
               </div>
                  <img src="https://www.kindpng.com/picc/m/673-6735417_young-lady-smiling-radiantly-smiling-black-lady-png.png" alt="" className='profile-img' />
          </div>
       



       </div>







    </div>
  )
}

export default topBar