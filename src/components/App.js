import Compose from './Compose'
import Feed from './Feed'
import './App.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import initialPosts from '../posts.json'


//store current user name
const CurrentUser = 'splitscrn'


function App() {
  const [posts, setPosts] = useState(initialPosts)

  //post a new post
  const handlePost = (content) => {
    const newPost = {
      content,
      id: nanoid(),
      created_on: Date(Date.now()),
      user: CurrentUser,
      comments_count: 0,
      reposts_count: 0,
      fav_count: 0,
    }

    setPosts([...posts, newPost])
  }
  return (
    <div className="app">
      <Compose onSubmit={handlePost} />
      <div className='separator'></div>
      <Feed posts={posts} />
    </div>
  )
}

export default App