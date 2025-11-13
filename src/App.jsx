import "./App.css";
import DisneyMovies from "./components/DisneyMovies";
function App() {
  return (
    <>
      <header></header>
      <main style={{ marginInline: "auto", width: "50vw" }}>
        <h1>Disney Movies</h1>
        <DisneyMovies />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
