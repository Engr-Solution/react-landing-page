import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layer({children}) {
  return (
   <>
       <Nav />
        {children}
       <Footer />
   </>
  )
}

export default Layer