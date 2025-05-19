import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import MyPage from "./pages/MyPage.tsx";
import Search from './pages/Search.tsx'
import Recommend from './pages/Recommend.tsx'
import Write from './pages/Write.tsx'

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
