import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ReacatRouteNavigation() {
  return (
    <nav>
        Navoigation
        <div>
            <NavLink to='/'/>
            <NavLink/>
            <NavLink/>
        </div>
    </nav>
  )
}
