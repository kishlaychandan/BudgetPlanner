import React from "react";
import style from "./Header.module.css";
function Header({ budget, remaining, spent }) {
  return (
    <div className={style.header}>
      <h1>Budget Planner</h1>
      <div className={style.data}>
        <p>Budget: {budget}</p>
        <p>Remaining: {remaining}</p>
        <p>Spent: {spent}</p>
      </div>
    </div>
  );
}

export default Header;
