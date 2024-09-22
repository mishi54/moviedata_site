import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { Outlet, useNavigation} from "react-router-dom";


const AppLayout = () => {
  const navigation=useNavigation();
  if (navigation.state === "loading") return <h1 style={{ color: "white" }}>Loading</h1>;
  return (   <>
     <Header/>
     <Outlet/>
     <Footer/>
     </>
  )
}

export default AppLayout