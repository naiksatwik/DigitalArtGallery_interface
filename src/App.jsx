import { Login } from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Admin } from "./components/Admin";

// App.jsx
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/reg" element={<Register/>}/>
          <Route path="/digA/home" element={<Home/>}/>
          <Route path="/digA/profile" element={<Profile/>}/>
          <Route path="/digA/Admin" element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;