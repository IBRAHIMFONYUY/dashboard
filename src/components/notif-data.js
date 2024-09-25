import { Gauge, PieChart, ShoppingBasket, User, UserRoundX } from 'lucide-react'
import React from 'react'

const notifdata = [
    {
        icon:<User/>,
        text:'New registered user'
    },
    {
        icon:<UserRoundX/>,
        text:'User deleted'
    },
    {
        icon:<PieChart/>,
        text:'Sales report is ready'
    },
    {
        icon:<ShoppingBasket/>,
        text:'New client'
    },
    {
        icon:<Gauge/>,
        text:'Server overloaded'
    },
    
   

]

export default notifdata
