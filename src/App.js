import { CardFilme } from "./components/CardFilme/CardFilme";
import movies from "./components/movies";
import { CartazFilme } from "./components/CartazFilme/CartazFilme";
import { useState } from "react";
function App() {
  const [movImg, setImg] = useState("");
  return (
    <div className="App">
      <CardFilme />
      {movies.map((currentMovies) => {
        return (
          <div>
            <CardFilme
              title={currentMovies.original_title}
              text={currentMovies.overview}
              CTA="Clique aqui"
              cartazImg={setImg}
              image={currentMovies.backdrop_path}
            />
            {currentMovies.backdrop_path == movImg && (
              <CartazFilme image={movImg} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
