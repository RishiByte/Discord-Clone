import React from 'react';
import Sidebar from '../components/Sidebar';
import Channels from '../components/Channels';
import Chat from '../components/Chat';

function MainLayout({ toggleTheme, theme }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <Channels toggleTheme={toggleTheme} theme={theme} />
      <Chat />
    </div>
  );
}

export default MainLayout;
