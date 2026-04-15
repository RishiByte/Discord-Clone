import React from 'react';
import Sidebar from './components/Sidebar';
import Channels from './components/Channels';
import Chat from './components/Chat';
import './styles/index.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <Channels />
      <Chat />
    </div>
  );
}

export default App;
