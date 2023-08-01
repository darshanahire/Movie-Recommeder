import './App.css';
import Navbar from './components/Navbar';
import MovieInfo from './components/MovieInfo';
import Home from './components/Home';
import PopularMovies from './components/PopularMovies';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}> </Route>
        <Route path="/recommend/:movie" element={<MovieInfo/>}> </Route>
        <Route path="/popular" element={<PopularMovies/>}> </Route>
        <Route path="/movie/:movie" element={<MovieDetails/>}> </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
