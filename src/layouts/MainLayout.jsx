import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Channels from '../components/Channels';
import Chat from '../components/Chat';

const ALL_CHANNELS = ['general', 'welcome', 'resources', 'design-talk'];

// Simulated bot messages per channel
const BOT_MESSAGES = {
  welcome: ['Welcome to the server! 👋', 'Read the rules in #resources!', 'Glad you joined us!'],
  resources: ['New resource dropped: React Docs', 'Check out this CSS guide 📚', 'TypeScript cheatsheet added!'],
  'design-talk': ["Anyone tried Figma's new AI?", 'Dark mode designs look sick 🔥', 'Share your UI inspirations!'],
};

function MainLayout({ toggleTheme, theme }) {
  const [activeChannel, setActiveChannel] = useState('general');
  const [unreadCounts, setUnreadCounts] = useState({});
  const activeChannelRef = useRef(activeChannel);

  // Keep ref in sync so interval always has the current active channel
  useEffect(() => {
    activeChannelRef.current = activeChannel;
  }, [activeChannel]);

  // Simulate incoming messages on background channels every 8–15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const bgChannels = ALL_CHANNELS.filter(ch => ch !== activeChannelRef.current && BOT_MESSAGES[ch]);
      if (bgChannels.length === 0) return;
      const randomCh = bgChannels[Math.floor(Math.random() * bgChannels.length)];
      setUnreadCounts(prev => ({
        ...prev,
        [randomCh]: (prev[randomCh] || 0) + 1,
      }));
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  // When user selects a channel, clear its unread count
  const handleSetActiveChannel = (ch) => {
    setActiveChannel(ch);
    setUnreadCounts(prev => ({ ...prev, [ch]: 0 }));
  };

  // Called by Chat when the current user sends a message (no unread for active channel)
  // Called when a background channel gets a new message (bump unread)
  const handleMessageSent = (channel) => {
    if (channel !== activeChannelRef.current) {
      setUnreadCounts(prev => ({
        ...prev,
        [channel]: (prev[channel] || 0) + 1,
      }));
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <Channels
        toggleTheme={toggleTheme}
        theme={theme}
        activeChannel={activeChannel}
        setActiveChannel={handleSetActiveChannel}
        unreadCounts={unreadCounts}
      />
      <Chat activeChannel={activeChannel} onMessageSent={handleMessageSent} />
    </div>
  );
}

export default MainLayout;
