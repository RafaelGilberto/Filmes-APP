import { CardFilme } from "./components/CardFilme/CardFilme";
import movies from "./components/movies";
import { CartazFilme } from "./components/CartazFilme/CartazFilme";

function App() {
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
              image={currentMovies.backdrop_path}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
