import './App.css';
import Routes from "../src/components/Routes"
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import {CurrentUserProvider} from "./contexts/CurrentUser";
import CurrentUserChecker from "./components/CurrentUserChecker";

function App() {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Router>
                    <Header/>
                    <Routes/>
                </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    );
}

export default App;
