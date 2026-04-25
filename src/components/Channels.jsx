import React from 'react';
import '../styles/Channels.css';
import { CheckIcon, ChevronDownIcon, HashIcon, MicOffIcon, HeadphonesOffIcon, SettingsIcon } from './Icons';

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

function Channels({ toggleTheme, theme, activeChannel, setActiveChannel }) {
  return (
    <aside className="channels">
      {/* Server header */}
      <header className="channels-header">
        <span className="channels-server-name">Discord Clone</span>
        <span className="channels-header-icon"><CheckIcon /></span>
      </header>

      {/* Channel categories */}
      <div className="channels-body">
        {categories.map((cat) => (
          <div key={cat.id} className="channels-category">
            <div className="channels-category-label">
              <span className="channels-category-arrow"><ChevronDownIcon /></span>
              {cat.label}
            </div>

            {cat.channels.map((ch) => (
              <div
                key={ch}
                className={`channels-item ${ch === activeChannel ? 'channels-item--active' : ''}`}
                onClick={() => setActiveChannel(ch)}
              >
                <span className="channels-item-hash"><HashIcon /></span>
                <span className="channels-item-name">{ch}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* User panel at bottom */}
      <footer className="channels-user-panel">
        <div className="channels-user-avatar">R</div>
        <div className="channels-user-info">
          <span className="channels-username">RDP</span>
          <span className="channels-user-status">#0001</span>
        </div>
        <div className="channels-user-controls">
          <span title="Mute"><MicOffIcon /></span>
          <span title="Deafen"><HeadphonesOffIcon /></span>
          <span title="Settings"><SettingsIcon /></span>
          <span title="Toggle Theme" onClick={toggleTheme}>{theme === 'dark-mode' ? '☀️' : '🌙'}</span>
        </div>
      </footer>
    </aside>
  );
}

export default Channels;
