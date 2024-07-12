import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import ConversationContainer from './components/ConversationContainer';
import Header from './components/Header';
import { useState } from 'react';
import { Message } from './types/Message';
import { useSelector } from 'react-redux';
import Login from './components/Login';

const AppContent = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);

  const clearAllMessages = (): void => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-screen">
      {isLoggedIn && location.pathname !== '/login' && (
        <Header clearAllMessages={clearAllMessages} />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <ConversationContainer
                newQuestion={true}
                messages={messages}
                setMessages={setMessages}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/new-conversation"
          element={
            isLoggedIn ? (
              <ConversationContainer
                newQuestion={false}
                messages={messages}
                setMessages={setMessages}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
