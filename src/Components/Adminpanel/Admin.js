import React from 'react'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Headers from './Headers'
import Sidemenu from './Sidemenu'

const Admin = () => {
  return (
    <div className='wrapper'>
        <Headers/>
        <Sidemenu/>
        <Dashboard/>
        <Footer/>
    </div>
  )
}

export default Admin