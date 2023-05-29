import React from 'react'

const Post = (props) => {
  return (
        <div className="main__post mb-50 p-25 border-blue white">
            <div className="post__content">
                <div className='flex'><p className='fz-l mb-5'>{props.post.title}</p></div>
                <div className='mb-10'>{props.post.body}</div>
                <div>Автор: {props.post.author}</div>
                <div>Опубликовано в: {props.post.time}</div>
                <div className='mb-5'>Категория: {props.post.category}</div>
            </div>
            <div className="post_btn">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default Post