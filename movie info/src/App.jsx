import "./App.css";
import MovieCard from "./components/MovieCard";

// This is a component
function App() {
  return (
    <>
    <MovieCard movie={{title: "My film", release_date:"2025"}} />
    <MovieCard movie={{title: "My film", release_date:"2025"}} />
    <MovieCard movie={{title: "My film", release_date:"2025"}} />
    </>
  );
}


export default App;
