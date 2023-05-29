import React from 'react'
import Post from './Post'

const Postlist = ({posts, title}) => {

  return (
    <div className='main__postlist '>
        <h1 className='text-center white'>{title}</h1>
        {posts.map((post, index) =>
            <Post date={'2'} number={index+1} post={post} key={post.id}/>
        )}
    </div>
  )
}

export default Postlist