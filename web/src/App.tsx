import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavBar from './components/SideNavBar';
import ConversationContainer from './components/ConversationContainer';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <SideNavBar />
        <Routes>
          <Route path="/" element={<ConversationContainer />}></Route>
          <Route path="/new" element={<ConversationContainer />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
