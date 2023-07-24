import './App.css';
import {Routes, Route} from "react-router-dom";
import 'antd/dist/reset.css';
import Page404 from "./components/Page404/Page404";
import Page500 from "./components/Page500/Page500";
import Navbar from "./components/Navbar/Navbar";
import FooterPage from "./components/FooterPage/FooterPage";
import Blog from "./components/Body/Blog/Blog";
import Man from "./components/Body/Man/Man";
import Woman from "./components/Body/Woman/Woman";
import Technology from "./components/Body/Technology/Technology";
import Basket from "./components/Basket/Basket";
import User from "./components/User/User";
import ProductDetails from "./components/Body/Product/ProductDetails/ProductDetails";
import MyOrders from "./components/User/MyOrders/MyOrders";
import UserInformation from "./components/User/UserInformation/UserInformation";
import Favorites from "./components/User/Favorites/Favorites";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navbar/>}>
                    <Route path={'footer'} element={<FooterPage/>}></Route>
                    <Route path="blogs" element={<Blog />} />
                    <Route path="man" element={<Man />} />
                    <Route path="woman" element={<Woman />} />
                    <Route path="technology" element={<Technology />} />
                    <Route path="basket" element={<Basket />} />
                    <Route path="user" element={<User />} />
                    <Route path="details/:id" element={<ProductDetails />} />
                    <Route path="myorders" element={<MyOrders />} />
                    <Route path="userinformation" element={<UserInformation />} />
                    <Route path="favorites" element={<Favorites />} />

                </Route>
                <Route path={'404'} element={<Page404/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'signup'} element={<SignUp/>}/>
                <Route path={'500'} element={<Page500/>}/>



            </Routes>
        </div>
    );
}

export default App;
