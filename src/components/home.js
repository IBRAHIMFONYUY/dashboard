import React from "react";
import {UserRoundPlus} from "lucide-react"

const Home=()=>{
    return(
        <div className="main-home-cnt">
        <h1>Dasboard</h1>
        <div className="home">
        <div className='graph-cnt-1'>
            <div className="graph-1"></div>
            <div className="sub-graph-cnt-1">
                <div className="sub-graph-1"></div>
                <div className="sub-graph-2"></div>
            </div>
        </div>
        <div className="graph-cnt-2"></div>
        </div>
        <div className="users-cnt">
            <div className="users-cnt-head"><div className="user-lg"><h1>Users</h1>1.232.150 registered users</div><div className="users-btn"><UserRoundPlus /> Add new user</div></div>
            <div className="users-data">
                <div className="users-data-head"></div>
                <div className="users-main">

                </div>
            </div>
        </div>
        </div>
    )
}
export default Home;