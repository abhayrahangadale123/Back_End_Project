 import React from 'react'
import NavBar from './Componets/NavBar'
import { Route, Routes } from 'react-router-dom'
import Task_Bar from './Componets/Task_Bar'
 
 const App = () => {
   return (
    <>
     {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<NavBar/>}></Route>
        <Route path="/task_section" element={<Task_Bar/>}></Route>
      </Routes>
    </>
   )
 }
 
 export default App