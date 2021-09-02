import './App.css';
import Routes from "../src/components/Routes"
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import {CurrentUserProvider} from "./contexts/CurrentUser";

function App() {
    return (
        <CurrentUserProvider>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </CurrentUserProvider>
    );
}

export default App;
