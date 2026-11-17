import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, ClipboardList, ChefHat, Package, Settings, X
} from 'lucide-react';
import './Sidebar.css';

const links = [
  { to: '/', icon: LayoutDashboard, label: 'Visão Geral' },
  { to: '/pedidos', icon: ClipboardList, label: 'Pedidos' },
  { to: '/producao', icon: ChefHat, label: 'Produção' },
  { to: '/insumos', icon: Package, label: 'Insumos' },
  { to: '/configuracoes', icon: Settings, label: 'Configurações' },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <ChefHat size={28} />
            <span>Dark Kitchen</span>
          </div>
          <button className="sidebar-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <nav className="sidebar-nav">
          {links.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
              onClick={onClose}
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
