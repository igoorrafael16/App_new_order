// Dados iniciais fictícios realistas para o sistema de Dark Kitchen

export const initialOrders = [
  {
    id: 'PED-001',
    cliente: 'Maria Silva',
    itens: [
      { nome: 'Poké Salmão Clássico', qtd: 1, preco: 39.90 },
      { nome: 'Suco de Maracujá', qtd: 1, preco: 12.00 }
    ],
    total: 51.90,
    status: 'entregue',
    canal: 'iFood',
    hora: '11:32',
    data: '2026-11-17',
    endereco: 'Rua das Flores, 123 - Centro'
  },
  {
    id: 'PED-002',
    cliente: 'João Oliveira',
    itens: [
      { nome: 'Poké Atum Especial', qtd: 1, preco: 44.90 },
      { nome: 'Edamame', qtd: 1, preco: 14.00 },
      { nome: 'Água de Coco', qtd: 1, preco: 9.00 }
    ],
    total: 67.90,
    status: 'em_preparo',
    canal: 'Rappi',
    hora: '12:05',
    data: '2026-11-17',
    endereco: 'Av. Paulista, 900 - Bela Vista'
  },
  {
    id: 'PED-003',
    cliente: 'Ana Costa',
    itens: [
      { nome: 'Bowl Vegetariano', qtd: 2, preco: 34.90 }
    ],
    total: 69.80,
    status: 'pronto',
    canal: 'Uber Eats',
    hora: '12:15',
    data: '2026-11-17',
    endereco: 'Rua Augusta, 456 - Consolação'
  },
  {
    id: 'PED-004',
    cliente: 'Carlos Mendes',
    itens: [
      { nome: 'Poké Camarão', qtd: 1, preco: 49.90 },
      { nome: 'Missoshiru', qtd: 1, preco: 16.00 }
    ],
    total: 65.90,
    status: 'novo',
    canal: 'iFood',
    hora: '12:28',
    data: '2026-11-17',
    endereco: 'Rua Oscar Freire, 789 - Jardins'
  },
  {
    id: 'PED-005',
    cliente: 'Fernanda Lima',
    itens: [
      { nome: 'Poké Salmão Clássico', qtd: 1, preco: 39.90 },
      { nome: 'Poké Atum Especial', qtd: 1, preco: 44.90 },
      { nome: 'Chá Gelado', qtd: 2, preco: 10.00 }
    ],
    total: 104.80,
    status: 'em_preparo',
    canal: 'WhatsApp',
    hora: '12:35',
    data: '2026-11-17',
    endereco: 'Rua Haddock Lobo, 234 - Cerqueira César'
  },
  {
    id: 'PED-006',
    cliente: 'Roberto Santos',
    itens: [
      { nome: 'Bowl Frango Teriyaki', qtd: 1, preco: 36.90 }
    ],
    total: 36.90,
    status: 'novo',
    canal: 'Rappi',
    hora: '12:42',
    data: '2026-11-17',
    endereco: 'Alameda Santos, 567 - Paraíso'
  },
  {
    id: 'PED-007',
    cliente: 'Lucia Ferreira',
    itens: [
      { nome: 'Poké Salmão Clássico', qtd: 1, preco: 39.90 },
      { nome: 'Edamame', qtd: 1, preco: 14.00 }
    ],
    total: 53.90,
    status: 'entregue',
    canal: 'Uber Eats',
    hora: '11:50',
    data: '2026-11-17',
    endereco: 'Rua da Consolação, 1020 - República'
  },
  {
    id: 'PED-008',
    cliente: 'Pedro Almeida',
    itens: [
      { nome: 'Bowl Vegetariano', qtd: 1, preco: 34.90 },
      { nome: 'Suco Verde', qtd: 1, preco: 14.00 }
    ],
    total: 48.90,
    status: 'saiu_entrega',
    canal: 'iFood',
    hora: '12:10',
    data: '2026-11-17',
    endereco: 'Rua Bela Cintra, 345 - Jardins'
  }
];

export const initialSupplies = [
  { id: 1, nome: 'Salmão Fresco', fornecedor: 'Peixaria Oceano', quantidade: 8, unidade: 'kg', estoqueMinimo: 5 },
  { id: 2, nome: 'Atum', fornecedor: 'Peixaria Oceano', quantidade: 3, unidade: 'kg', estoqueMinimo: 4 },
  { id: 3, nome: 'Arroz Japonês', fornecedor: 'Distribuidora Asia', quantidade: 25, unidade: 'kg', estoqueMinimo: 10 },
  { id: 4, nome: 'Alga Nori', fornecedor: 'Distribuidora Asia', quantidade: 50, unidade: 'un', estoqueMinimo: 20 },
  { id: 5, nome: 'Abacate', fornecedor: 'Hortifruti Central', quantidade: 2, unidade: 'kg', estoqueMinimo: 5 },
  { id: 6, nome: 'Pepino Japonês', fornecedor: 'Hortifruti Central', quantidade: 6, unidade: 'kg', estoqueMinimo: 3 },
  { id: 7, nome: 'Molho Shoyu', fornecedor: 'Distribuidora Asia', quantidade: 10, unidade: 'L', estoqueMinimo: 3 },
  { id: 8, nome: 'Gengibre', fornecedor: 'Hortifruti Central', quantidade: 4, unidade: 'kg', estoqueMinimo: 2 },
  { id: 9, nome: 'Cream Cheese', fornecedor: 'Laticínios Minas', quantidade: 5, unidade: 'kg', estoqueMinimo: 3 },
  { id: 10, nome: 'Embalagens Delivery', fornecedor: 'EmbaPack', quantidade: 150, unidade: 'un', estoqueMinimo: 100 },
  { id: 11, nome: 'Camarão', fornecedor: 'Peixaria Oceano', quantidade: 2, unidade: 'kg', estoqueMinimo: 3 },
  { id: 12, nome: 'Edamame', fornecedor: 'Distribuidora Asia', quantidade: 8, unidade: 'kg', estoqueMinimo: 2 },
];

export const initialSettings = {
  nome: 'Poké Kitchen — Dark Kitchen',
  endereco: 'Rua dos Sabores, 500 — Pinheiros, São Paulo - SP',
  telefone: '(11) 99876-5432',
  horarioAbertura: '10:00',
  horarioFechamento: '22:00'
};

export const statusLabels = {
  novo: 'Novo',
  em_preparo: 'Em Preparo',
  pronto: 'Pronto',
  saiu_entrega: 'Saiu p/ Entrega',
  entregue: 'Entregue',
  cancelado: 'Cancelado'
};

export const statusColors = {
  novo: '#2563eb',
  em_preparo: '#f59e0b',
  pronto: '#10b981',
  saiu_entrega: '#8b5cf6',
  entregue: '#6b7280',
  cancelado: '#ef4444'
};

export const productionStages = ['novo', 'em_preparo', 'pronto', 'saiu_entrega'];

export const nextStatus = {
  novo: 'em_preparo',
  em_preparo: 'pronto',
  pronto: 'saiu_entrega',
  saiu_entrega: 'entregue'
};
