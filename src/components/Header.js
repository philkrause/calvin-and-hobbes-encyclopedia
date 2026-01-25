import React from 'react'
import headerImg from '../images/header.png'

export default function Headers() {

  return (
    <>
      <div className='header-img-cont'>
        <img className='header-img' src={headerImg} alt='Calvin and Hobbes Encyclopedia Header' />  <div className='button-cont'>
        </div>
      </div>
    </>
  )
}