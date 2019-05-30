import React, { Component } from 'react'

class data extends Component {
  apiKey = 'kPGEGIWaBYEBsdoL9dPH9C6dNI62IrI8V3zPIv3Qcdov5zxIMP'
  state = {
    imageUrl: '',
    posts: [],
    photos: [],
    offSet: 0,
    pageNumber: 1
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    fetch(
      `https://api.tumblr.com/v2/blog/calvinandhobbes-daily.tumblr.com/posts/photo?type=photo&offset=${
        this.state.offSet
      }&page_number=${this.state.pageNumber}&api_key=${this.apiKey}`,
      {
        method: 'GET',
        offset: 100
      }
    )
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log({ data })
        this.setState({
          posts: data.response.posts
        })
      })
  }
  handleScroll = e => {
    let element = e.target
    console.log('scroll y:', window.scrollY)
    if (window.scrollY > 200) {
      this.state.offSet += 20
      this.state.page += 1
    }
  }

  render() {
    return (
      <>
        <section>
          {this.state.posts.map(post => {
            return (
              <>
                <img src={post.photos[0].alt_sizes[0].url} />
                <p className="date-style">{post.summary} </p>
              </>
            )
          })}
        </section>
      </>
    )
  }
}

export default data
