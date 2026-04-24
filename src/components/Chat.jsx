import React, { useState, useEffect } from 'react';
import '../styles/Chat.css';
import { BellIcon, PinIcon, UsersIcon, HelpIcon, PlusIcon, GiftIcon, GifIcon, SmileIcon, HashIcon } from './Icons';

const initialMessages = [
  {
    id: 1,
    author: 'RDP',
    avatarColor: '#5865f2',
    initials: 'R',
    timestamp: 'Today at 10:00 AM',
    text: 'Welcome to #general! This is the start of the channel.',
  },
  {
    id: 2,
    author: 'RishiByte',
    avatarColor: '#eb459e',
    initials: 'R',
    timestamp: 'Today at 10:02 AM',
    text: 'Hey everyone! Glad to be here!',
  },
  {
    id: 3,
    author: 'DevUser',
    avatarColor: '#23a559',
    initials: 'D',
    timestamp: 'Today at 10:05 AM',
    text: 'This Discord clone is looking great — built with React and plain CSS, no Tailwind!',
  },
];

function Chat() {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('discordCloneMessages');
    if (savedMessages) {
      try {
        return JSON.parse(savedMessages);
      } catch (error) {
        console.error('Failed to parse messages from localStorage:', error);
      }
    }
    return initialMessages;
  });

  useEffect(() => {
    localStorage.setItem('discordCloneMessages', JSON.stringify(messages));
  }, [messages]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (inputText.trim().length > 0) {
      setIsTyping(true);
      const timeoutId = setTimeout(() => {
        setIsTyping(false);
      }, 1500);
      return () => clearTimeout(timeoutId);
    } else {
      setIsTyping(false);
    }
  }, [inputText]);

  const handleSend = () => {
    if (inputText.trim() === '') return;
    const newMessage = {
      id: Date.now(),
      author: 'Current User',
      avatarColor: '#5865f2',
      initials: 'C',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: inputText,
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  return (
    <main className="chat">
      {/* Top header bar */}
      <header className="chat-header">
        <div className="chat-header-left">
          <span className="chat-header-hash"><HashIcon /></span>
          <span className="chat-header-channel-name">general</span>
          <div className="chat-header-divider" />
          <span className="chat-header-topic">Welcome to the server!</span>
        </div>
        <div className="chat-header-right">
          <span className="chat-header-icon" title="Notification Settings"><BellIcon /></span>
          <span className="chat-header-icon" title="Pin Messages"><PinIcon /></span>
          <span className="chat-header-icon" title="Members"><UsersIcon /></span>
          <div className="chat-search-box">
            <input
              type="text"
              className="chat-search-input"
              placeholder="Search"
              readOnly
            />
          </div>
          <span className="chat-header-icon" title="Help"><HelpIcon /></span>
        </div>
      </header>

      {/* Message list */}
      <section className="chat-messages">
        <div className="chat-channel-welcome">
          <div className="chat-channel-welcome-icon">
            <HashIcon />
          </div>
          <h2 className="chat-channel-welcome-title">Welcome to #general!</h2>
          <p className="chat-channel-welcome-sub">
            This is the start of the #general channel.
          </p>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <div
              className="chat-message-avatar"
              style={{ backgroundColor: msg.avatarColor }}
            >
              {msg.initials}
            </div>
            <div className="chat-message-body">
              <div className="chat-message-meta">
                <span className="chat-message-author">{msg.author}</span>
                <span className="chat-message-timestamp">{msg.timestamp}</span>
              </div>
              <p className="chat-message-text">{msg.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Input area */}
      <footer className="chat-footer">
        {isTyping && (
          <div className="chat-typing-indicator">
            User is typing...
          </div>
        )}
        <div className="chat-input-wrapper">
          <button className="chat-input-attach" title="Attach File">
            <PlusIcon />
          </button>
          <input
            type="text"
            className="chat-input"
            placeholder="Message #general"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="chat-input-actions">
            <span title="Gift"><GiftIcon /></span>
            <span title="GIF"><GifIcon /></span>
            <span title="Emoji"><SmileIcon /></span>
          </div>
          <button className="chat-input-send-btn" onClick={handleSend}>
            Send
          </button>
        </div>
      </footer>
    </main>
  );
}

export default Chat;
