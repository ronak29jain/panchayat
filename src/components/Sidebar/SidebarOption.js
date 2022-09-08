import React from 'react'
import './SidebarOption.css'

function SidebarOption({Icon, text}) {
  return (
    <div className="SidebarOption">
      <Icon/>
      {
        (text)  ? <h2>{text}</h2> : null
      }
    </div>
  )
}

export default SidebarOption