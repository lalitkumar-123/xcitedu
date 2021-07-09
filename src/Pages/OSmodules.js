import React from 'react'
import '../Css/OSmodules.css'
import OfflineBoltRoundedIcon from '@material-ui/icons/OfflineBoltRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import LeakAddIcon from '@material-ui/icons/LeakAdd';
import FlareIcon from '@material-ui/icons/Flare';
import SearchIcon from '@material-ui/icons/Search';
const topics=[{name:"Electrostatistics",icon:<OfflineBoltRoundedIcon fontSize="large"></OfflineBoltRoundedIcon>},
{name:"Mechanics",icon:<SettingsIcon fontSize="large"></SettingsIcon>},
{name:"Relativity",icon:<AllInclusiveIcon fontSize="large"></AllInclusiveIcon>},
{name:"Magnetism",icon:<LeakAddIcon fontSize="large"></LeakAddIcon>},
{name:"Optics",icon:<FlareIcon fontSize="large"></FlareIcon>},
{name:"Electronic Devices",icon:<GraphicEqIcon fontSize="large"></GraphicEqIcon>}]

function OSmodules() {
    return (
       <>
         <div className="Maindiv">
             <div className="Header-div">
                 <div className="topic-heading">
                     <h1>Physics</h1>
                 </div>
                 <div className="SearchContainer">
                         <input className="searchbox" type="text" placeholder="Search"></input>
                         <butt className="searchButton"><SearchIcon></SearchIcon></butt>
                 </div>

             </div>
             <div className="topics-box">
                {topics.map((item)=>(
                      <div className="topic-div">{item.icon}  {item.name}</div>
                ))}
             </div>
             
         </div>
       </>
    )
}

export default OSmodules