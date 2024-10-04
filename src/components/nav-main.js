import React from "react";
import { X } from "lucide-react";
import datamail from "./mail-data";
import "./mail.css"

const IconsNav=({showmail})=>{
    return(
        <div className={`nav-mail ${showmail ? 'open':'close'}`}>
            <div className="top-notif">You have 4 Messages</div>
        {datamail.comments.map(user =>(
          <section class="messages">
          <div class="message-box">
            
            <div class="user">
            <div class="user-info">
              <h3 ><img src={user.user.image.png} alt=""/>{user.user.username}</h3>
              <h4 class="reply" > <span className="span-mail">{user.createdAt}</span></h4>
            </div>
            <div class="message-body">
              {user.content}
            </div>
            </div>
          </div>
          </section>

        ))}   
        <div className='list-btn' style={{margin:'20px'}}>
            <button className="list-bntp">Veiw All Messages</button>
        </div>
        </div>
    )
}
export default IconsNav;