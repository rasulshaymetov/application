import React, { useState, useEffect } from "react";
import Postlist from "../Postlist";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MySelect from "../UI/select/MySelect";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", body: "", category: "" });
  const [isDisabled, setIsDisabled] = useState(false);
  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "", category: "" });
  };
  useEffect(() => {
    if (!post.title) {
      console.log("Поле пустое");
      setIsDisabled(true);
    } else if (post.title) {
      console.log("Поле не пустое");
      setIsDisabled(false);
    }
  }, [post]);

  return (
    <div>
      <button className="spec-btn" onClick={() => console.log(posts)}>
        Вывести в консоль информацию о всех постах
      </button>
      <form>
        <div className="flex-center column m-auto center">
          <MyInput
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            name="title"
            placeholder="Название поста"
          />
          <MyInput
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            type="text"
            name="body"
            placeholder="Описание поста"
          />
          <select
            value={post.category}
            defaultValue={"default"}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
          >
            <option value={"default"} disabled>
              Выберите категорию
            </option>
            <option value="Хобби">Хобби</option>
            <option value="IT">IT</option>
            <option value="Еда">Еда</option>
          </select>
          <MyButton
            disabled={isDisabled ? true : null}
            onClick={addNewPost}
            type="sumbit"
          >
            Опубликовать пост
          </MyButton>
        </div>
      </form>
      <div className="main__posts flex-center">
        <Postlist posts={posts} title={"Посты"} />
      </div>
    </div>
  );
};

export default Main;
