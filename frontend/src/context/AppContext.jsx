import React from 'react'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContext = () => {
  return (
    <AppContext.Provider>
      name
    </AppContext.Provider>
  )
}

export default AppContext
