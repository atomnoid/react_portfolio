import "./App.css";
import MovieCard from "./components/MovieCard";

// This is a component
function App() {
  const movieNumber = 1; 
  return (
    <>
    {movieNumber === 1 ? (
      <MovieCard movie={{title: "My film", release_date:"2025"}} />
    ) : ( 
    <MovieCard movie={{title: "your film", release_date:"2027"}} /> 
    )}
   
    </>
  );
}


export default App;
