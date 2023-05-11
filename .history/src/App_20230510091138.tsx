import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-teal-500 relative">
        <nav className="flex justify-between items-center p-4 w-[89%] bg-white m-auto rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl text-teal-500">LOGO</h1>
          </div>

          <ul className="flex items-center gap-8">
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

          <button
            onClick={() => setShowModal(!showModal)}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg cursor-pointer"
          >
            Login
          </button>
        </nav>
        {showModal && (
          <div className="absolute w-screen h-screen bg-black/25 flex justify-center">
            <dialog open className="top-[50">
              <p>Greetings, one and all!</p>
              <form method="dialog">
                <button>OK</button>
              </form>
            </dialog>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
