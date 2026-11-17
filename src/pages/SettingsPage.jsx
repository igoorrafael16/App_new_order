import { useState } from 'react';
import { Save } from 'lucide-react';
import './SettingsPage.css';

export default function SettingsPage({ settings, onUpdate }) {
  const [form, setForm] = useState({ ...settings });
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="settings-page">
      <h1 className="page-title">Configurações</h1>

      <div className="settings-card">
        <h2 className="section-title">Dados da Cozinha</h2>
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>
            Nome da Cozinha
            <input
              required
              value={form.nome}
              onChange={e => setForm({ ...form, nome: e.target.value })}
            />
          </label>
          <label>
            Endereço
            <input
              required
              value={form.endereco}
              onChange={e => setForm({ ...form, endereco: e.target.value })}
            />
          </label>
          <label>
            Telefone
            <input
              required
              value={form.telefone}
              onChange={e => setForm({ ...form, telefone: e.target.value })}
            />
          </label>
          <div className="form-row">
            <label>
              Horário de Abertura
              <input
                type="time"
                required
                value={form.horarioAbertura}
                onChange={e => setForm({ ...form, horarioAbertura: e.target.value })}
              />
            </label>
            <label>
              Horário de Fechamento
              <input
                type="time"
                required
                value={form.horarioFechamento}
                onChange={e => setForm({ ...form, horarioFechamento: e.target.value })}
              />
            </label>
          </div>
          <button type="submit" className="btn-primary btn-full">
            <Save size={16} /> Salvar Alterações
          </button>
          {saved && <p className="save-feedback">✓ Configurações salvas com sucesso!</p>}
        </form>
      </div>
    </div>
  );
}
