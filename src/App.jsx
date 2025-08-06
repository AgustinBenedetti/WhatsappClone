import React, {useContext, useState} from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'

function App (){


  return (
    <div>
        <Routes>
          
          <Route
            path='/' 
            element={<ContactScreen/>}
          />
          <Route 
            path="/contact/:contact_id/messages" 
            element={<ChatScreen/>} 
          />

        </Routes>
    </div>
  )
  
}

export default App