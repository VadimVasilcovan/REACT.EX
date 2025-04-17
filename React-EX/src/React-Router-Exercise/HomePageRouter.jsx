import React from 'react'
import ReacatRouteNavigation from './ReacatRouteNavigation'
import { NavLink, Outlet } from 'react-router-dom';

export default function HomePageRouter() {
  return (
    <div>
        <ReacatRouteNavigation/>
        <p>HomePageRouter</p>
        <NavLink to='element1'> Nav to el 1</NavLink>
        <NavLink to="element2">Nav to el 2</NavLink>
        <Outlet/>
        </div>

  )
}
