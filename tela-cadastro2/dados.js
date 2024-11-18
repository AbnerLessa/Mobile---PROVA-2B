export const grupos = [
  {
    id: '1',
    nome: 'RightRide',
    descricao: 'Aplicativo de Guias de Viagens',
    integrantes: [
      { id: '1', nome: 'Abner Vinícius de Alcântara Tristão Lessa', curso: 'Curso de Ciencia da Computação' },
      { id: '2', nome: 'Arthur Martins do Nascimento de Jesus', curso: 'Curso de Ciencia da Computação' },
      { id: '3', nome: 'Matheus Soares Fernandes', curso: 'Curso de Ciencia da Computação' },
      { id: '4', nome: 'Murilo Rezendo Coutinho', curso: 'Curso de Ciencia da Computação' },
    ],
    data_criacao: '2024-11-01T10:00:00Z',
  },
  {
    id: '2',
    nome: 'Arteei',
    descricao: 'Produtos artesanais focados em facilitar o trabalho',
    integrantes: [
      { id: '5', nome: 'Ana Laura', curso: 'Curso de Ciencia da Computação' },
      { id: '6', nome: 'Eloisa Pajehu', curso: 'Curso de Ciencia da Computação' },
      { id: '7', nome: 'Anna Maria Lima', curso: 'Curso de Ciencia da Computação' },
    ],
    data_criacao: '2024-11-05T15:30:00Z',
  },
  {
    id: '3',
    nome: 'FinEdu',
    descricao: 'Grupo de Educação Financeira',
    integrantes: [
      { id: '8', nome: 'Vithor Luis Romão dos Santos', curso: 'Curso de Ciência da Computação' },
      { id: '9', nome: 'Lucas Pimentel Nunes', curso: 'Curso de Ciência da Computação' },
      { id: '10', nome: 'Daniel Carvalho Climaco', curso: 'Curso de Ciência da Computação' },
      { id: '11', nome: 'Alessandro Barbosa', curso: 'Curso de Ciência da Computação' },
    ],
    data_criacao: '2024-11-10T09:00:00Z',
  },
];


export const fetchGroupsFromDatabase = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(grupos);
    }, 500); 
  });
};


export const fetchGroupDetailsById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const group = grupos.find((g) => g.id === id);
      if (group) {
        resolve(group);
      } else {
        reject(new Error('Grupo não encontrado.'));
      }
    }, 500); 
  });
};
