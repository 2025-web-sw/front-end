import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import MyPage from './pages/MyPage.tsx'
import Search from './pages/Search.tsx'
import Recommend from './pages/Recommend.tsx'
import Write from './pages/Write.tsx'
import PostDetail from './pages/PostDetail.tsx'
import ReadPage from './pages/mypage/Read.tsx'
import Login from './pages/Login.tsx'
import ReadDetail from './pages/mypage/ReadDetail.tsx'
import Wish from './pages/mypage/Wish.tsx'
import SearchDetail from './pages/SearchDetail.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:postId" element={<PostDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:bookId" element={<SearchDetail />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/write" element={<Write />} />
        <Route path="/mypage/read" element={<ReadPage />} />
        <Route path="/mypage/wish" element={<Wish />} />
        <Route path="/mypage/read/:bookId" element={<ReadDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
