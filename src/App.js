import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import "./asset/styles/style.css";
import Footer from './components/Footer';
import Home from "./components/Home";
import MobileHeader from "./components/MobileHeader";
import Food from "./components/Food";
import Retail from "./components/Retail";
import Community from "./components/Community";

function App() {
  return (
    <div className="App">
            <>
                <Header/>
                <div className="md:hidden">
				<BrowserRouter>
					<MobileHeader />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/food' element={<Food />} />
						<Route exact path='/retail' element={<Retail />} />
						<Route exact path='/community' element={<Community />} />
					</Routes>
				</BrowserRouter>
			</div>
            </>




      {/*<header className="App-header">
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
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
