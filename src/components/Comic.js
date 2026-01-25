import React from 'react'


export default function Comic(props) {
  return (
    <>
      <div id={`com${props.index}`} className='comic'>
        <img src={props.post.photos[0].alt_sizes[0].url} alt={props.post.summary || 'Calvin and Hobbes comic strip'} />
        <p> {props.post.summary} </p>
      </div>
    </>
  )
}