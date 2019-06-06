import React from 'react'


export default function Comic(props) {
  return (
    <>
      <div id={`com${props.index}`} className='comic'>
        <img src={props.post.photos[0].alt_sizes[0].url} />
        <p> {props.post.summary} </p>
      </div>
    </>
  )
}