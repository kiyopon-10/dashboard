import React from "react";
import './Menu.css'

import sidebar_dashboard from '../../../public/assets/sidebar_dashboard.png';
import { sidebar_data } from "./MenuData";

function Menu() {

    // Used map function over JS object for rendering the options of the sidebar to portray how information can be used in the frotend,
    // if we have to take some information from the backend. Otherwise its not really required here and simply 4 divs for the 4 options
    // works best.

    return (
      <div class="menu-main">
        <div className="options">
          <img src={sidebar_dashboard} alt=""
            style={{height: "13vh", width: '15vw', marginBottom: '-12vh', position: 'relative', top: '1vh', left: '4%'}}/>
          <div className="content" style={{position: 'relative', top: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {sidebar_data.map(item => (
              <div key={item.id} className="option-each" style={{display: 'flex'}}>
                <img src={item.img} alt="" style={{paddingInline: '0.1vw', transform: 'scale(0.5)'}}/>
                <button style={{border: 'none', backgroundColor: 'white', cursor: 'pointer'}}><p>{item.text}</p></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
export default Menu