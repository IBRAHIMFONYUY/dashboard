import {
  Gauge,
  Droplet,
  Pencil,
  X,
  ChevronDown,
  ChevronUp,
  Send,
  Puzzle,
  Star,
  FileText,
  Bell,
  ChartPie,
  CalendarDays,
  SquareM,
  List,
} from "lucide-react";
const navbardata = [
  
    {
      text:'Theme',
      items:[
        {
        linkname:'Color',
        to:'/colors',
        icon:<Droplet/>
        },
        {
          linkname:'Topography',
          to:'/topography',
          icon:<Pencil/>
        },      

      ]

    },
    {
      text:'COMPONENTS',
      items:[
        {
        linkname:'Base',
        icon:<Puzzle/>,
        dropdowns:[
          {
            linkname:'Topography',
          to:'/topography',
          }
        ]
        },
              

      ]

    }
  
  
    
];
export default navbardata;
