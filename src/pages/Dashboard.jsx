import { statusLabels, statusColors } from '../data/initialData';
import './Dashboard.css';

export default function Dashboard({ orders }) {
  const today = new Date().toISOString().slice(0, 10);
  const todayOrders = orders.filter(o => o.data === today);
  const totalPedidos = todayOrders.length;
  const faturamento = todayOrders
    .filter(o => o.status !== 'cancelado')
    .reduce((sum, o) => sum + o.total, 0);
  const emPreparo = todayOrders.filter(o => o.status === 'em_preparo').length;
  const entregues = todayOrders.filter(o => o.status === 'entregue').length;

  const recentOrders = [...orders].reverse().slice(0, 8);

  return (
    <div className="dashboard">
      <h1 className="page-title">Visão Geral</h1>

      <div className="dashboard-cards">
        <div className="stat-card">
          <span className="stat-label">Pedidos Hoje</span>
          <span className="stat-value">{totalPedidos}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Faturamento</span>
          <span className="stat-value">R$ {faturamento.toFixed(2)}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Em Preparo</span>
          <span className="stat-value">{emPreparo}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Entregues</span>
          <span className="stat-value">{entregues}</span>
        </div>
      </div>

      <div className="dashboard-section">
        <h2 className="section-title">Pedidos Recentes</h2>
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
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td className="cell-bold">{order.id}</td>
                  <td>{order.cliente}</td>
                  <td>{order.canal}</td>
                  <td>{order.hora}</td>
                  <td>R$ {order.total.toFixed(2)}</td>
                  <td>
                    <span
                      className="status-badge"
                      style={{ background: statusColors[order.status] + '18', color: statusColors[order.status] }}
                    >
                      {statusLabels[order.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
