import React from 'react';
import '../styles/Channels.css';

const categories = [
  {
    id: 'text-channels',
    label: 'TEXT CHANNELS',
    channels: ['general', 'welcome', 'resources', 'design-talk'],
  },
  {
    id: 'voice-channels',
    label: 'VOICE CHANNELS',
    channels: ['Lounge', 'Gaming', 'Study Room'],
  },
];

function Channels() {
  return (
    <aside className="channels">
      {/* Server header */}
      <header className="channels-header">
        <span className="channels-server-name">Discord Clone</span>
        <span className="channels-header-icon">&#10003;</span>
      </header>

      {/* Channel categories */}
      <div className="channels-body">
        {categories.map((cat) => (
          <div key={cat.id} className="channels-category">
            <div className="channels-category-label">
              <span className="channels-category-arrow">&#9660;</span>
              {cat.label}
            </div>

            {cat.channels.map((ch) => (
              <div
                key={ch}
                className={`channels-item ${ch === 'general' ? 'channels-item--active' : ''}`}
              >
                <span className="channels-item-hash">#</span>
                <span className="channels-item-name">{ch}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* User panel at bottom */}
      <footer className="channels-user-panel">
        <div className="channels-user-avatar">A</div>
        <div className="channels-user-info">
          <span className="channels-username">Antigravity</span>
          <span className="channels-user-status">#0001</span>
        </div>
        <div className="channels-user-controls">
          <span title="Mute">&#128263;</span>
          <span title="Deafen">&#127911;</span>
          <span title="Settings">&#9881;</span>
        </div>
      </footer>
    </aside>
  );
}

export default Channels;
