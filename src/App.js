import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <main>
      <section className='Header'>
          <div className="container main-navbar">
            <a href="#home" className="logo">Fixed Responsive Nav</a>
            <nav className="nav-collapse">
              <ul>
                <li className="menu-item active"><a href="#home">Home</a></li>
                <li className="menu-item"><a href="#about">About</a></li>
                <li className="menu-item"><a href="#projects">Projects</a></li>
                <li className="menu-item"><a href="#blog">Blog</a></li>
              </ul>
            </nav>
          </div>
          <header className='header-bg'>
            <div className='header-title'>
              <h2> HELLO THERE</h2>
              <p>I am</p>
              <h1 className='text-style'>NAZMUL HOSSEN</h1>
              <button type='btn'><a href='https://github.com/Nazmul-max'>About me</a></button>
            </div>
          </header>
      </section>
    </main>
  );
}

export default App;
