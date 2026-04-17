import React, { useState } from 'react';
import '../styles/Sidebar.css';

const servers = [
  { id: 'home', label: 'H', title: 'Home', isHome: true },
  { id: 'react', label: 'R', title: 'React Server' },
  { id: 'vite', label: 'V', title: 'Vite Server' },
  { id: 'css', label: 'C', title: 'CSS Server' },
];

function Sidebar() {
  const [activeServer, setActiveServer] = useState('home');

  return (
    <aside className="sidebar">
      {servers.map((server, index) => (
        <React.Fragment key={server.id}>
          {index === 1 && <div className="sidebar-divider" />}
          <div className="sidebar-server-wrapper" onClick={() => setActiveServer(server.id)}>
            <div className={`sidebar-icon-pill ${activeServer === server.id ? 'active' : ''}`} />
            <div
              className={`sidebar-server-icon ${server.isHome ? 'home-btn' : ''} ${activeServer === server.id ? 'active' : ''}`}
              title={server.title}
            >
              {server.label}
            </div>
          </div>
        </React.Fragment>
      ))}

      <div className="sidebar-divider" />

      <div className="sidebar-server-wrapper">
        <div className="sidebar-server-icon sidebar-add-btn" title="Add a Server">
          +
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
