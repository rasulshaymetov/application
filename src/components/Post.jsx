import React from 'react'

const Post = (props) => {
  return (
        <div className="main__post mb-50 p-25 border-blue">
            <div className="post__content">
                <strong>{props.number}.{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post_btn">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default Post