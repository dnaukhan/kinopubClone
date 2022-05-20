import React from "react";
import "./styles.css";
import {Routes, Route, Link} from "react-router-dom";


export const Header = () => {
    return <header className="App-header">
      <Link to="/">Главная</Link> 
      <div align="right">    
          <Link to="/profile">Profile</Link>
      </div>  

  </header>
}

