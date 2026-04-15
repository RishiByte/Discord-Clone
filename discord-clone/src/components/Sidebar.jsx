import React from 'react';
import '../styles/Sidebar.css';

const servers = [
  { id: 'home', label: 'H', title: 'Home', color: '#5865f2' },
  { id: 'react', label: 'R', title: 'React Server', color: '#313338' },
  { id: 'vite', label: 'V', title: 'Vite Server', color: '#313338' },
  { id: 'css', label: 'C', title: 'CSS Server', color: '#313338' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {servers.map((server, index) => (
        <React.Fragment key={server.id}>
          {index === 1 && <div className="sidebar-divider" />}
          <div
            className="sidebar-server-icon"
            title={server.title}
            style={{ backgroundColor: server.color }}
          >
            {server.label}
          </div>
        </React.Fragment>
      ))}

      <div className="sidebar-divider" />

      <div className="sidebar-server-icon sidebar-add-btn" title="Add a Server">
        +
      </div>
    </aside>
  );
}

export default Sidebar;
