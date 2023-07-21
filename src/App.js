import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import 'antd/dist/reset.css';
import Page404 from "./components/Page404/Page404";
import Page500 from "./components/Page500/Page500";
import Navbar from "./components/Navbar/Navbar";
import FooterPage from "./components/FooterPage/FooterPage";
import Blog from "./components/Body/Blog/Blog";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navbar/>}>
                    <Route path={'footer'} element={<FooterPage/>}></Route>
                    <Route path="blogs" element={<Blog />} />

                </Route>
                <Route path={'404'} element={<Page404/>}/>
                <Route path={'500'} element={<Page500/>}/>



            </Routes>
        </div>
    );
}

export default App;
