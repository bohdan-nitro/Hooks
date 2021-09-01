import logo from './logo.svg';
import './App.css';
import Routes from "../src/components/Routes"
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";


function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
