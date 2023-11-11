import * as React from "react"
import Navbar from "../Components/Navbar/Navbar"
import MainBody from "../Components/MainBody/MainBody"
import Footer from "../Components/Footer/Footer"

 
const IndexPage = () => {
  return (
    <main>
      <Navbar/>
      <MainBody/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
