import SignUP from "./SignUP.jsx"
import Login from "./Login.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./Dashboard.jsx"
import Home from "./Home.jsx"


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />}/>
    <Route path="/register" element={<SignUP />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App