<<<<<<< HEAD

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
=======
import logo from "./logo.svg";
import "./App.css";
>>>>>>> khushman

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now Now
        </a>
      </header>
>>>>>>> khushman
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Now
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
