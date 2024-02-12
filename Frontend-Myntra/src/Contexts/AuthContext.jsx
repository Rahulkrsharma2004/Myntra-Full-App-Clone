import React,{useState,createContext} from 'react'
export const Context = createContext()

const AuthContext = ({children}) => {
    const [isAuth,setIsAuth,user,setUser] = useState(false)
  return (
  <Context.Provider value={{isAuth,setIsAuth,user,setUser}}>
    {children}
  </Context.Provider>
  )
}

export default AuthContext