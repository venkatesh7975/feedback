import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
          <Routes>

            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>

          </Routes>

    </BrowserRouter>
  )
}
