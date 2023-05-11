function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <nav className="flex justify-between items-center p-2 w-full">
        <div>
          <h1>LOGO</h1>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>

        <div>
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
