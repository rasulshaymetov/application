import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsProfile } from "../../redux/slices/profileSlice";
const Authorization = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [isLogin, setIsLogin] = useState("");
  const login = useSelector((state) => state.login.value);
  function NavigateToSingUp(e){
    navigate('/signup')
  }
  function authorize(e) {
    e.preventDefault();
    console.log(login);
    if (isLogin.includes(login)) {
      dispath(setIsProfile(login));
      navigate("/posts");
    } else {
      alert("Неверный логин!");
    }
  }
  return (
    <div className="flex-center column white">
      <p className="white fz-b mb-5">Пожалуйста, войдите в свой аккаунт</p>
      <form action="">
        <p className="white fz-b">Логин</p>
        <MyInput value={isLogin} onChange={(e) => setIsLogin(e.target.value)} />
        <br />
        <MyButton className="mb-50" onClick={authorize}>
          Войти
        </MyButton>
        <p className="white fz-b">
          Впервые?
          <br />
          Создайте новый аккаунт!
        </p>
        <MyButton onClick={(e) => NavigateToSingUp()}>Зарегестрироваться</MyButton>
      </form>
    </div>
  );
};

export default Authorization;
