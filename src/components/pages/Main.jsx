import React, { useState, useEffect } from "react";
import Postlist from "../Postlist";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MySelect from "../UI/select/MySelect";
import '../../styles/main.scss'
import { useSelector } from "react-redux";

const Main = () => {
  var date = new Date().toLocaleString();
  const profile = useSelector((state) => state.login.value)
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", body: "", category: "", author: profile, time:date});
  const [isDisabled, setIsDisabled] = useState(false);
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(profile)
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "", category: "",author: profile, time:date  });
  };
  useEffect(() => {
    if (!post.title && !post.body && !post.category) {
      console.log("Поле пустое");
      setIsDisabled(true);
    } else if (post.title && post.body && post.category) {
      console.log("Поле не пустое");
      setIsDisabled(false);
    }
  }, [post]);

  useEffect(() => {
    // console.log(date)
    if(post.category ==''){
      setIsDisabled(true)
    }
    else{
      setIsDisabled(false);
    }
  }, [post]);
  return (
    <div>
   
      <form>
        <div className="flex-center column m-auto center ">
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
          className="main__select mb-5"
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
          >
            <option value={""}>
              Выберите категорию
            </option>
            <option value={"Хобби"}>Хобби</option>
            <option value={"IT"}>IT</option>
            <option value={"Еда"}>Еда</option>
            <option value={"Новости"}>Новости</option>
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
      <div className="main__posts flex-center column">
        <Postlist posts={posts} title={"Посты"} />
      </div>
    </div>
  );
};

export default Main;
