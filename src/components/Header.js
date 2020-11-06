import React from 'react'
import headerImg from '../images/header.png'

export default function Headers() {

  return (
    <>
      <div className='header-img-cont'>
        <img className='header-img' src={headerImg} />  <div className='button-cont'>
        </div>
      </div>
    </>
  )
}