import style from "./style.module.css";
import { useState } from "react";
import { CartazFilme } from "../CartazFilme/CartazFilme";

export function CardFilme(props) {
  function handleButton() {
    props.cartazImg(props.image);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button onClick={handleButton}>{props.CTA}</button>
    </div>
  );
}
