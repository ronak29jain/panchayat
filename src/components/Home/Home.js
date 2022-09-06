import React from 'react'
import './Home.css'
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Widgets from '../Widgets/Widgets';
import SidebarForMobile from '../Sidebar/SidebarForMobile';

function Home() {
  
  // let width = window.innerWidth;

  //   if (width > 1000) {
  //     return (
  //       <div className="home">
  //         <Sidebar/>
  //         <Feed/>
  //         <Widgets/>
  //       </div>
  //     );
  //   } else if (width > 450){
  //     return (
  //       <div className="home_ipad">
  //         <SidebarForMobile />
  //         <Feed/>
  //         <Widgets/>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="home_mobile">
  //         <SidebarForMobile />
  //         <Feed/>
  //       </div>
  //     );
  //   }
  
  
  return (
    <div className="home">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  )
}

export default Home