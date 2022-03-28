import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './routes/Intro';
import Main from './routes/Main';
import Memo from './routes/Memo';
import MyInfo from './routes/MyInfo';
import Reading from './routes/Reading';
import BookShelf from './routes/Bookshelf';
import Recommendation from './routes/Recommendation';
import SearchBook from './components/main/SearchBook';
import ScanBook from './components/main/ScanBook';
import BookDetail from './components/main/BookDetail';
import KakaoRedirectHandler from './routes/KakaoRedirectHandler';
import BottomSheetBase from './components/common/BottomSheetBase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
        <Route path="/" element={<Main />} />
        <Route path="/bookShelf" element={<BookShelf />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/searchbook" element={<SearchBook />} />
        <Route path="/scanbook" element={<ScanBook />} />
        <Route path="/bookDetail/:bookId" element={<BookDetail />} />
        <Route path="/reading/:bookId" element={<Reading />} />
      </Routes>
      <BottomSheetBase />
    </BrowserRouter>
  );
}

export default App;
