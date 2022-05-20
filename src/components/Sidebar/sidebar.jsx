import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
// const libraryMenu = [
//   "Новинки",
//   "Фильмы",
//   "Сериалы",
//   "3Д",
//   "Концерты",
//   "Докуфильмы",
//   "ТВ Шоу",
//   "Спорт",
// ];

const libraryMenu = [
  {
    text: "Новинки",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Фильмы",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Сериалы",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "3Д",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Концерты",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Докуфильмы",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "ТВ Шоу",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Спорт",
    icon: require("../../assets/iconmenu/play.png"),
  },
];

const otherMenu = [
  {
    text: "Я смотрю",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Закладки",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "История",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Новые эпизоды",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Подборки",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Награды",
    icon: require("../../assets/iconmenu/play.png"),
  },
];
const contactMenu = [
  {
    text: "Награды",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Почта",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Оплата",
    icon: require("../../assets/iconmenu/play.png"),
  },
  {
    text: "Пожелания и предложение",
    icon: require("../../assets/iconmenu/play.png"),
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={require("../../assets/images/kinopub.png")} className="logo" />
      <ul>
        <h5>Библиотека</h5>

        {libraryMenu.map((el) => (
          <Link className="link" to="/home">
            <img className="icon" src={el.icon} alt="photo" />
            <span>{el.text}</span>
          </Link>
        ))}
      </ul>
      <ul>
        <h5>Остальное</h5>
        {otherMenu.map((el) => (
          <Link className="link" to="/home">
            <img className="icon" src={el.icon} alt="photo" />
            {el.text}
          </Link>
        ))}
      </ul>
      <ul>
        <h5>Контакты</h5>
        {contactMenu.map((el) => (
          <Link className="link" to="/home">
            <img className="icon" src={el.icon} alt="photo" />
            {el.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
