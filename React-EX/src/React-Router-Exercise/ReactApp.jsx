import React from 'react'
import {BrouseRouters,Routes, Route} from 'react-router-dom'
import HomePageRouter from './HomePageRouter'

export default function ReactAppRouter() {
  return (
    <div>
        <BrouseRouters>
        <Routes>
            <Route to='/' element={<HomePageRouter/>} />
        </Routes>
        </BrouseRouters>
    </div>
  )
}
