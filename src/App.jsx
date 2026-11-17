import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Production from './pages/Production';
import Supplies from './pages/Supplies';
import SettingsPage from './pages/SettingsPage';
import { useAppData } from './data/useAppData';
import './App.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    orders, supplies, settings,
    updateOrderStatus, addSupply, updateSupply, deleteSupply, updateSettings
  } = useAppData();

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="app-main">
          <Header
            kitchenName={settings.nome}
            onMenuClick={() => setSidebarOpen(true)}
          />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Dashboard orders={orders} />} />
              <Route path="/pedidos" element={
                <Orders orders={orders} onUpdateStatus={updateOrderStatus} />
              } />
              <Route path="/producao" element={
                <Production orders={orders} onUpdateStatus={updateOrderStatus} />
              } />
              <Route path="/insumos" element={
                <Supplies
                  supplies={supplies}
                  onAdd={addSupply}
                  onUpdate={updateSupply}
                  onDelete={deleteSupply}
                />
              } />
              <Route path="/configuracoes" element={
                <SettingsPage settings={settings} onUpdate={updateSettings} />
              } />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
