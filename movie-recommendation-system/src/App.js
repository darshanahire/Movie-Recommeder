import './App.css';
import Navbar from './components/Navbar';
import MovieInfo from './components/MovieInfo';
import Home from './components/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/recommend/:movie" element={<MovieInfo/>}> </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
