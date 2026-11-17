import { useState } from 'react';
import { statusLabels, statusColors } from '../data/initialData';
import { Eye, X } from 'lucide-react';
import './Orders.css';

const allStatuses = ['todos', 'novo', 'em_preparo', 'pronto', 'saiu_entrega', 'entregue', 'cancelado'];
const channels = ['Todos', 'iFood', 'Rappi', 'Uber Eats', 'WhatsApp'];
const statusOptions = ['novo', 'em_preparo', 'pronto', 'saiu_entrega', 'entregue', 'cancelado'];

export default function Orders({ orders, onUpdateStatus }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [channelFilter, setChannelFilter] = useState('Todos');
  const [viewOrder, setViewOrder] = useState(null);

  const filtered = orders.filter(o => {
    if (statusFilter !== 'todos' && o.status !== statusFilter) return false;
    if (channelFilter !== 'Todos' && o.canal !== channelFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return o.id.toLowerCase().includes(q) || o.cliente.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="orders-page">
      <h1 className="page-title">Pedidos</h1>

      <div className="orders-filters">
        <input
          className="orders-search"
          type="text"
          placeholder="Buscar por pedido ou cliente..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="orders-select"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          {allStatuses.map(s => (
            <option key={s} value={s}>
              {s === 'todos' ? 'Todos os Status' : statusLabels[s]}
            </option>
          ))}
        </select>
        <select
          className="orders-select"
          value={channelFilter}
          onChange={e => setChannelFilter(e.target.value)}
        >
          {channels.map(c => (
            <option key={c} value={c}>{c === 'Todos' ? 'Todos os Canais' : c}</option>
          ))}
        </select>
      </div>

      <div className="orders-table-container">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Cliente</th>
                <th>Canal</th>
                <th>Hora</th>
                <th>Total</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(order => (
                <tr key={order.id}>
                  <td className="cell-bold">{order.id}</td>
                  <td>{order.cliente}</td>
                  <td>{order.canal}</td>
                  <td>{order.hora}</td>
                  <td>R$ {order.total.toFixed(2)}</td>
                  <td>
                    <select
                      className="status-select"
                      value={order.status}
                      onChange={e => onUpdateStatus(order.id, e.target.value)}
                      style={{ color: statusColors[order.status] }}
                    >
                      {statusOptions.map(s => (
                        <option key={s} value={s}>{statusLabels[s]}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button className="btn-icon" onClick={() => setViewOrder(order)} title="Ver detalhes">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan="7" className="empty-row">Nenhum pedido encontrado.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {viewOrder && (
        <div className="modal-overlay" onClick={() => setViewOrder(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Pedido {viewOrder.id}</h3>
              <button className="btn-icon" onClick={() => setViewOrder(null)}><X size={18} /></button>
            </div>
            <div className="modal-body">
              <p><strong>Cliente:</strong> {viewOrder.cliente}</p>
              <p><strong>Endereço:</strong> {viewOrder.endereco}</p>
              <p><strong>Canal:</strong> {viewOrder.canal}</p>
              <p><strong>Hora:</strong> {viewOrder.hora}</p>
              <p><strong>Status:</strong> {statusLabels[viewOrder.status]}</p>
              <h4 style={{ marginTop: 12 }}>Itens:</h4>
              <table className="data-table" style={{ marginTop: 8 }}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qtd</th>
                    <th>Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {viewOrder.itens.map((item, i) => (
                    <tr key={i}>
                      <td>{item.nome}</td>
                      <td>{item.qtd}</td>
                      <td>R$ {item.preco.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ marginTop: 12, fontWeight: 700 }}>Total: R$ {viewOrder.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
