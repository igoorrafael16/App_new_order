import { useState, useEffect, useRef } from 'react';
import { statusLabels, statusColors, productionStages, nextStatus } from '../data/initialData';
import { ArrowRight, Clock } from 'lucide-react';
import './Production.css';

function ElapsedTime({ hora }) {
  const [elapsed, setElapsed] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    function calc() {
      const [h, m] = hora.split(':').map(Number);
      const now = new Date();
      const orderTime = new Date();
      orderTime.setHours(h, m, 0, 0);
      let diff = Math.floor((now - orderTime) / 60000);
      if (diff < 0) diff = 0;
      const hours = Math.floor(diff / 60);
      const mins = diff % 60;
      setElapsed(hours > 0 ? `${hours}h ${mins}min` : `${mins}min`);
    }
    calc();
    intervalRef.current = setInterval(calc, 60000);
    return () => clearInterval(intervalRef.current);
  }, [hora]);

  return <span className="prod-elapsed"><Clock size={12} /> {elapsed}</span>;
}

export default function Production({ orders, onUpdateStatus }) {
  const columns = productionStages.map(stage => ({
    stage,
    label: statusLabels[stage],
    color: statusColors[stage],
    orders: orders.filter(o => o.status === stage)
  }));

  function handleAdvance(orderId, currentStatus) {
    const next = nextStatus[currentStatus];
    if (next) onUpdateStatus(orderId, next);
  }

  return (
    <div className="production-page">
      <h1 className="page-title">Produção</h1>
      <div className="production-board">
        {columns.map(col => (
          <div key={col.stage} className="prod-column">
            <div className="prod-column-header" style={{ borderColor: col.color }}>
              <span className="prod-column-title">{col.label}</span>
              <span className="prod-column-count" style={{ background: col.color }}>
                {col.orders.length}
              </span>
            </div>
            <div className="prod-column-body">
              {col.orders.map(order => (
                <div key={order.id} className="prod-card">
                  <div className="prod-card-top">
                    <span className="prod-card-id">{order.id}</span>
                    <ElapsedTime hora={order.hora} />
                  </div>
                  <p className="prod-card-client">{order.cliente}</p>
                  <p className="prod-card-items">
                    {order.itens.map(i => `${i.qtd}x ${i.nome}`).join(', ')}
                  </p>
                  <div className="prod-card-footer">
                    <span className="prod-card-channel">{order.canal}</span>
                    {nextStatus[col.stage] && (
                      <button
                        className="prod-advance-btn"
                        onClick={() => handleAdvance(order.id, col.stage)}
                        title={`Avançar para ${statusLabels[nextStatus[col.stage]]}`}
                      >
                        {statusLabels[nextStatus[col.stage]]} <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {col.orders.length === 0 && (
                <p className="prod-empty">Nenhum pedido</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
