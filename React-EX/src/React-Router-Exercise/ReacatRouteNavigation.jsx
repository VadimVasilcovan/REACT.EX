import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ReacatRouteNavigation() {
  return (
    <nav>
        Navoigation
        <div>
            <NavLink to='/'>MainPage</NavLink>
           <NavLink to='second-main-page'>SecondMainPage</NavLink>
        </div>
    </nav>
  )
}
