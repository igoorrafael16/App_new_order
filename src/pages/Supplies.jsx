import { useState } from 'react';
import { Plus, Pencil, Trash2, X, AlertTriangle } from 'lucide-react';
import './Supplies.css';

const emptyForm = { nome: '', fornecedor: '', quantidade: '', unidade: 'kg', estoqueMinimo: '' };

export default function Supplies({ supplies, onAdd, onUpdate, onDelete }) {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);

  function openAdd() {
    setEditing(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function openEdit(supply) {
    setEditing(supply.id);
    setForm({
      nome: supply.nome,
      fornecedor: supply.fornecedor,
      quantidade: supply.quantidade,
      unidade: supply.unidade,
      estoqueMinimo: supply.estoqueMinimo
    });
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...form,
      quantidade: Number(form.quantidade),
      estoqueMinimo: Number(form.estoqueMinimo)
    };
    if (editing) {
      onUpdate(editing, data);
    } else {
      onAdd(data);
    }
    setShowForm(false);
    setForm(emptyForm);
    setEditing(null);
  }

  function handleDelete(id) {
    if (confirm('Deseja realmente excluir este insumo?')) {
      onDelete(id);
    }
  }

  return (
    <div className="supplies-page">
      <div className="supplies-header">
        <h1 className="page-title">Insumos</h1>
        <button className="btn-primary" onClick={openAdd}>
          <Plus size={16} /> Novo Insumo
        </button>
      </div>

      <div className="supplies-table-container">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Fornecedor</th>
                <th>Quantidade</th>
                <th>Estoque Mín.</th>
                <th>Situação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map(s => {
                const low = s.quantidade <= s.estoqueMinimo;
                return (
                  <tr key={s.id} className={low ? 'row-low-stock' : ''}>
                    <td className="cell-bold">{s.nome}</td>
                    <td>{s.fornecedor}</td>
                    <td>{s.quantidade} {s.unidade}</td>
                    <td>{s.estoqueMinimo} {s.unidade}</td>
                    <td>
                      {low ? (
                        <span className="stock-alert">
                          <AlertTriangle size={14} /> Estoque Baixo
                        </span>
                      ) : (
                        <span className="stock-ok">Normal</span>
                      )}
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-icon" onClick={() => openEdit(s)} title="Editar">
                          <Pencil size={15} />
                        </button>
                        <button className="btn-icon btn-icon-danger" onClick={() => handleDelete(s.id)} title="Excluir">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editing ? 'Editar Insumo' : 'Novo Insumo'}</h3>
              <button className="btn-icon" onClick={() => setShowForm(false)}><X size={18} /></button>
            </div>
            <form className="modal-body supply-form" onSubmit={handleSubmit}>
              <label>
                Nome
                <input
                  required
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                />
              </label>
              <label>
                Fornecedor
                <input
                  required
                  value={form.fornecedor}
                  onChange={e => setForm({ ...form, fornecedor: e.target.value })}
                />
              </label>
              <div className="form-row">
                <label>
                  Quantidade
                  <input
                    type="number"
                    min="0"
                    required
                    value={form.quantidade}
                    onChange={e => setForm({ ...form, quantidade: e.target.value })}
                  />
                </label>
                <label>
                  Unidade
                  <select
                    value={form.unidade}
                    onChange={e => setForm({ ...form, unidade: e.target.value })}
                  >
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="L">L</option>
                    <option value="mL">mL</option>
                    <option value="un">un</option>
                  </select>
                </label>
              </div>
              <label>
                Estoque Mínimo
                <input
                  type="number"
                  min="0"
                  required
                  value={form.estoqueMinimo}
                  onChange={e => setForm({ ...form, estoqueMinimo: e.target.value })}
                />
              </label>
              <button type="submit" className="btn-primary btn-full">
                {editing ? 'Salvar Alterações' : 'Cadastrar Insumo'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
