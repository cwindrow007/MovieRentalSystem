import {Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";


function App() {

  return (
      <Routes>
          <Route path="/" element={<LoginPage/>}>
          </Route>
      </Routes>

  )
}

export default App
