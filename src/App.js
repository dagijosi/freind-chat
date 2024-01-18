import './App.css';
import LeftNavbar from './components/LeftNavbar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
function App() {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <LeftNavbar />
      <ChatList />
      <ChatWindow />
    </div>
  );
}

export default App;
