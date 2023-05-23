import React from 'react'

const Post = (props) => {
  return (
        <div className="main__post mb-50 p-25 border-blue white">
            <div className="post__content">
                <div>{props.post.category}</div>
                <div className='flex'><strong>{props.number}</strong><p>. {props.post.title}</p></div>
                <div>{props.post.body}</div>
            </div>
            <div className="post_btn">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default Post