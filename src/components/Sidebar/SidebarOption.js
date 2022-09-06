import React from 'react'
import './SidebarOption.css'

function SidebarOption({active, Icon, text}) {
  return (
    <div className={`SidebarOption ${active && 'SidebarOption--active'} `}>
      <Icon/>
      {
        (text)  ? <h2>{text}</h2> : null
      }
    </div>
  )
}

export default SidebarOption