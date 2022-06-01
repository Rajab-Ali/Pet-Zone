import React from 'react'
import Navbar from '../Components/navbar'
const Index = ({children}) => {
  return (
    <>
    <Navbar />
    <main>{children}</main>
    </>
  )
}

export default Index