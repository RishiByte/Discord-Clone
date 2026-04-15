import React from 'react';
import '../styles/Chat.css';

const messages = [
  {
    id: 1,
    author: 'Antigravity',
    avatarColor: '#5865f2',
    initials: 'A',
    timestamp: 'Today at 10:00 AM',
    text: 'Welcome to #general! This is the start of the channel.',
  },
  {
    id: 2,
    author: 'RishiByte',
    avatarColor: '#eb459e',
    initials: 'R',
    timestamp: 'Today at 10:02 AM',
    text: 'Hey everyone! Glad to be here 👋',
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
  return (
    <main className="chat">
      {/* Top header bar */}
      <header className="chat-header">
        <div className="chat-header-left">
          <span className="chat-header-hash">#</span>
          <span className="chat-header-channel-name">general</span>
          <div className="chat-header-divider" />
          <span className="chat-header-topic">Welcome to the server!</span>
        </div>
        <div className="chat-header-right">
          <span className="chat-header-icon" title="Notification Settings">&#128276;</span>
          <span className="chat-header-icon" title="Pin Messages">&#128204;</span>
          <span className="chat-header-icon" title="Members">&#128100;</span>
          <div className="chat-search-box">
            <input
              type="text"
              className="chat-search-input"
              placeholder="Search"
              readOnly
            />
          </div>
          <span className="chat-header-icon" title="Help">&#10067;</span>
        </div>
      </header>

      {/* Message list */}
      <section className="chat-messages">
        <div className="chat-channel-welcome">
          <div className="chat-channel-welcome-icon">#</div>
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
        <div className="chat-input-wrapper">
          <button className="chat-input-attach" title="Attach File">+</button>
          <input
            type="text"
            className="chat-input"
            placeholder="Message #general"
            readOnly
          />
          <div className="chat-input-actions">
            <span title="Gift">&#127873;</span>
            <span title="GIF">GIF</span>
            <span title="Emoji">&#128578;</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Chat;
