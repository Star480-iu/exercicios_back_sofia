const alunos = [
    { nome: "Ana Silva", nota: 8.5, idade: 16, turma: "3A", faltas: 2 },
    { nome: "João Santos", nota: 6.0, idade: 17, turma: "3B", faltas: 8 },
    { nome: "Maria Oliveira", nota: 9.0, idade: 16, turma: "3A", faltas: 0 },
    { nome: "Pedro Costa", nota: 4.5, idade: 17, turma: "3B", faltas: 12 },
    { nome: "Julia Lima", nota: 7.5, idade: 16, turma: "3A", faltas: 3 },
    { nome: "Carlos Mendes", nota: 5.5, idade: 17, turma: "3B", faltas: 7 },
    { nome: "Beatriz Rocha", nota: 8.0, idade: 16, turma: "3A", faltas: 1 },
    { nome: "Lucas Ferreira", nota: 6.5, idade: 17, turma: "3B", faltas: 5 }
    ];

// Função que filtra os alunos aprovados
function obterAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6.0);
  }
  
  // Execução e exibição no console
  const alunosAprovados = obterAprovados(alunos);
  console.log("Alunos Aprovados:", alunosAprovados);

  function obterNomes(listaAlunos) {
    return listaAlunos.map(aluno => aluno.nome);
  }
  
  // Execução e exibição no console
  const nomesDosAlunos = obterNomes(alunos);
  console.log("Nomes dos alunos:", nomesDosAlunos);