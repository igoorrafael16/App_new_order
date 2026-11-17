import { Search, Bell, Menu } from 'lucide-react';
import './Header.css';

export default function Header({ kitchenName, onMenuClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="header-menu-btn" onClick={onMenuClick}>
          <Menu size={22} />
        </button>
        <h2 className="header-title">{kitchenName}</h2>
      </div>
      <div className="header-right">
        <div className="header-search">
          <Search size={16} />
          <input type="text" placeholder="Buscar..." />
        </div>
        <button className="header-notification">
          <Bell size={20} />
          <span className="header-notification-badge">3</span>
        </button>
      </div>
    </header>
  );
}
