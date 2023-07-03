import "./css/Global.css";
import styles from "./App.module.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NavigationBar from "./components/common/NavigationBar/NavigationBar"
import Blog from "./components/Blog/Blog";
import NewPost from "./components/NewPost/NewPost";

function App() {
    return (
        <div className="App">
            <Router>
                <header className={styles.header}>
                    <NavigationBar/>
                </header>
                <Routes>
                    <Route path="/login/" element={<Login />}></Route>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/blog/" element={<Blog />}></Route>
                    <Route path="/new-post/" element={<NewPost />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;