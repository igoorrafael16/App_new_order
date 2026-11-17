import { useState, useEffect, useCallback } from 'react';
import { initialOrders, initialSupplies, initialSettings } from '../data/initialData';

function loadFromStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function useAppData() {
  const [orders, setOrders] = useState(() => loadFromStorage('dk_orders', initialOrders));
  const [supplies, setSupplies] = useState(() => loadFromStorage('dk_supplies', initialSupplies));
  const [settings, setSettings] = useState(() => loadFromStorage('dk_settings', initialSettings));

  useEffect(() => saveToStorage('dk_orders', orders), [orders]);
  useEffect(() => saveToStorage('dk_supplies', supplies), [supplies]);
  useEffect(() => saveToStorage('dk_settings', settings), [settings]);

  const updateOrderStatus = useCallback((orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  }, []);

  const addSupply = useCallback((supply) => {
    setSupplies(prev => {
      const maxId = prev.reduce((max, s) => Math.max(max, s.id), 0);
      return [...prev, { ...supply, id: maxId + 1 }];
    });
  }, []);

  const updateSupply = useCallback((id, data) => {
    setSupplies(prev => prev.map(s => s.id === id ? { ...s, ...data } : s));
  }, []);

  const deleteSupply = useCallback((id) => {
    setSupplies(prev => prev.filter(s => s.id !== id));
  }, []);

  const updateSettings = useCallback((newSettings) => {
    setSettings(newSettings);
  }, []);

  return {
    orders, supplies, settings,
    updateOrderStatus, addSupply, updateSupply, deleteSupply, updateSettings
  };
}
