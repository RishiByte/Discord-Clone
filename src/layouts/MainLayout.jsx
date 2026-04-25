import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Channels from '../components/Channels';
import Chat from '../components/Chat';

function MainLayout({ toggleTheme, theme }) {
  const [activeChannel, setActiveChannel] = useState('general');

  return (
    <div className="app-layout">
      <Sidebar />
      <Channels 
        toggleTheme={toggleTheme} 
        theme={theme} 
        activeChannel={activeChannel}
        setActiveChannel={setActiveChannel}
      />
      <Chat activeChannel={activeChannel} />
    </div>
  );
}

export default MainLayout;
