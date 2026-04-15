import React from 'react';

/**
 * App Component
 * A basic Discord clone layout placeholder using functional components.
 */
function App() {
  return (
    <div className="app-container">
      {/* Server List Sidebar */}
      <aside className="server-sidebar">
        <div className="server-icon" title="Home">H</div>
        <hr style={{ width: '32px', margin: '8px 0', border: 'none', borderTop: '2px solid #35363c' }} />
        <div className="server-icon" title="React Server">R</div>
        <div className="server-icon" title="Vite Server">V</div>
        <div className="server-icon" title="CSS Server">C</div>
        <div className="server-icon" style={{ backgroundColor: '#23a559', color: '#ffffff' }}>+</div>
      </aside>

      {/* Channel List Sidebar */}
      <aside className="channel-sidebar">
        <header className="channel-header">
          <span>Discord Clone</span>
        </header>
        <div className="channel-list">
          <div className="channel-item active"># general</div>
          <div className="channel-item"># welcome</div>
          <div className="channel-item"># resources</div>
          <div className="channel-item"># design-talk</div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="chat-area">
        <header className="chat-header">
          <strong># general</strong>
        </header>

        <section className="message-list">
          <div className="message">
            <div className="message-avatar"></div>
            <div className="message-content">
              <span className="message-author">Antigravity</span>
              <span className="message-text">Welcome to the Discord Clone project! This layout is built using React and plain CSS.</span>
            </div>
          </div>
          <div className="message">
            <div className="message-avatar" style={{ backgroundColor: '#eb459e' }}></div>
            <div className="message-content">
              <span className="message-author">User</span>
              <span className="message-text">Looks great! No CSS variables and no Tailwind as requested.</span>
            </div>
          </div>
        </section>

        <footer className="chat-input-container">
          <div className="chat-input-wrapper">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Message #general" 
            />
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
