import Footer from '@/components/modules/Footer/Footer'
import NavBar from '@/components/modules/NavBar/NavBar'
import Billing from '@/components/modules/Settings/Billing'
import React from 'react'

const Bill = () => {
  return (
      <div>
          <NavBar/>
          <Billing />
          <Footer/>
      </div>
  )
}

export default Bill