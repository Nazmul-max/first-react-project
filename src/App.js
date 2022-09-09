import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import NotFound from './components/NotFound/NotFound';
import About from "./Pages/About/About";
import Blog from './Pages/Blog/Blog';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        < MainNav/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
