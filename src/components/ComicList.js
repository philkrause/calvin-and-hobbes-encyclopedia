import React, { useState, useEffect } from 'react'
import Header from './Header'
import Comic from './Comic'

export default function ComicList() {
  const apiKey = 'kPGEGIWaBYEBsdoL9dPH9C6dNI62IrI8V3zPIv3Qcdov5zxIMP'

  const [posts, setposts] = useState([])
  const [offSet, setoffSet] = useState(0)
  const [index, setIndex] = useState(0)
  const [number, setNumber] = useState(0)

  const stripLength = posts.length - 1

  const random = () => Math.floor(Math.random() * 600)

  const fetchHobbes = offSet => {
    fetch(
      `https://api.tumblr.com/v2/blog/calvinandhobbes-daily.tumblr.com/posts/photo?type=photo&offset=${random()}&page_number=1&api_key=${apiKey}`,
      { method: 'GET' }
    )
      .then(resp => resp.json())
      .then(data => {
        setposts(prev => prev.concat(data.response.posts))
      })
  }
  useEffect(() => fetchHobbes(offSet), [offSet])

  const nextSlide = () => {
    setIndex(index + 600)
    setNumber(number + 1)
    console.log('strip length', stripLength)
    console.log('number', number)
    if (number === stripLength) {
      setoffSet(offSet + 20)
    }
  }

  const prevSlide = e => {
    if (number === 0) {
      e.disabled = true
    } else {
      setIndex(index - 600)
      setNumber(number - 1)
    }
  }
  return (
    <>
      <Header />
      <section className = "container">
        <section className={`strip-container active-slide-${number}`}>
          <div
            className="comic-container"
            style={{
              transform: `translateX(-${index}px)`
            }}
          >
            {posts.map((post, i) => {
              return <Comic key={i} index={i} post={post} />
            })}
          </div>
        </section>
        </section>
      <div className="button-cont">
        <button className="prev-button" onClick={prevSlide}>
          Previous
        </button>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>
    </>
  )
}
