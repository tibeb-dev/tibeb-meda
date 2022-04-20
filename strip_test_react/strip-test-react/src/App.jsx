import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pay from './Pay'
import Success from "./Success";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
