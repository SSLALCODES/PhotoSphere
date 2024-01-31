import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'


import Posts from './Posts'
import Story from './Story'


export default function Home() {

 

  return (
    <section className='main-container'>
      <div className='inner-container'>

        <div className='left-section'>
            <Story/>
          
            <Posts/>
        </div>
        <div className='right-section'>
            
        </div>
      </div>
      
    </section>
  )
}