import React from 'react';
import Sidebar from '../components/Sidebar';
import Channels from '../components/Channels';
import Chat from '../components/Chat';

function MainLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <Channels />
      <Chat />
    </div>
  );
}

export default MainLayout;
