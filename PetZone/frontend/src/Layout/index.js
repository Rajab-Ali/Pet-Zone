import React from 'react'
import Navbar from '../Components/navbar'
import ImageBg from '../Images/loginbg.png'
const Index = ({children}) => {
  return (
    <>
    <Navbar />
    <main>{children}</main>
    </>
  )
}

export default Index