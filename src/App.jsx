import './resources/style/App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {ReadArticle} from "./pages/ReadArticle";
import {SearchArticle} from "./pages/SearchArticle";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article">
                <Route path=":id" element={<ReadArticle />} />
            </Route>
            <Route path="search" element={<SearchArticle />} />
        </Routes>
        </>
    );
}

export default App;
