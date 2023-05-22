import React, { useState } from 'react'
import Postlist from '../Postlist'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'

const Main = () => {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id:Date.now()}])
    setPost({title: '', body: ''})
    console.log("posts:", posts)
  }
  return (
    <div>
      <form>
     <div className="flex-center column m-auto center">
     <MyInput
        value={post.title}
        onChange={(e) => setPost({...post, title: e.target.value})}
        type='text'
        name='title'
        placeholder='Название поста'
        />
         <MyInput
        value={post.body}
        onChange={(e) => setPost({...post, body: e.target.value})}
        type='text'
        name='body'
        placeholder='Описание поста'
        />
        
        <MyButton onClick={addNewPost} type='sumbit'>Опубликовать пост</MyButton>
     </div>
      </form>
      <div className="main__posts flex-center">
      <Postlist posts={posts} title={'Посты'}/>
      </div>
    </div>
    )
}

export default Main