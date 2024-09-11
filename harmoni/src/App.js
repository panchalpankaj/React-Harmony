import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from "./component/Homes";
import About from "./component/Abouts";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import Events from "./component/Events";
import Eventes from "./component/Eventes";
import Eve from "./component/eve";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Changedetail from "./component/Changedetail";
import Myboking from "./component/Myboking";
import Admin from "./component/Admin";
import Alluser from "./component/Alluser";
import AddEvent from "./component/AddEvent";
import Profile from "./component/Profile";
import Catagary from "./component/Catagary";
import Passwordchange from "./component/Passwordchange";
import Acount from "./component/User/Acount";
import ChangePass from "./component/User/Changepass";
import ChangeUserdetail from "./component/User/Changedetail";
import Mybooking from "./component/User/Myboking";
import AllBoking from "./component/Allboking";
import Addadmin from "./component/AddAdmin";
import Allmessage from "./component/Allmessage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Events/eventes" element={<Eventes />}></Route>
        <Route path="/Events/eventes/eve" element={<Eve />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/change" element={<Changedetail />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/admin/alluser" element={<Alluser />}></Route>
        <Route path="admin/addEvent" element={<AddEvent />}></Route>
        <Route path="/admin/profile" element={<Profile />}></Route>
        <Route path="/admin/catagary" element={<Catagary />}></Route>
        <Route path="admin/profile/password"element={<Passwordchange />}></Route>
        <Route path="/Account" element={<Acount />}></Route>
        <Route path="/Changepass" element={<ChangePass />}></Route>
        <Route path="/Changedetail" element={<ChangeUserdetail />}></Route>
        <Route path="/mybooking" element={<Mybooking />}></Route>
        <Route path="/admin/bookEvent" element={<AllBoking />}></Route>
        <Route path="/admin/addadmin" element={<Addadmin />}></Route>
        <Route path="/admin/allmessage" element={<Allmessage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
