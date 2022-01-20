
import HomeView from './components/HomeView.js'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeView />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
