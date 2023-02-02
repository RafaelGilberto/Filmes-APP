import style from "./style.module.css";

export function CartazFilme(props) {
  const altText = "Filme image";
  const finalImage = "https://image.tmdb.org/t/p/w500/" + props.image;
  return <img src={finalImage} alt={altText} className={style.cartaz} />;
}
