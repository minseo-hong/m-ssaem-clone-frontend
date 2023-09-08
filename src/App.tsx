import { Route,  Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import MatchingPage from './pages/MatchingPage';
import DebatePage from './pages/DebatePage';
import ChatPage from './pages/ChatPage';
import NotificationPage from './pages/NotificationPage';
import FavoritePage from './pages/FavoritePage';
import SearchdPage from './pages/SearchPage';
import PostWritePage from './pages/PostWritePage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/board/post/write" element={<PostWritePage />} />
      <Route path="/matching" element={<MatchingPage />} />
      <Route path="/debate" element={<DebatePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/search" element={<SearchdPage />} />
    </Routes>
  );
}

export default App;
