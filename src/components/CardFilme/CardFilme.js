import style from "./style.module.css";
import { useState } from "react";
import { CartazFilme } from "../CartazFilme/CartazFilme";

export function CardFilme(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button
        onClick={() => {
          <CartazFilme image={props.image} />;
        }}
      >
        {props.CTA}
      </button>
    </div>
  );
}
