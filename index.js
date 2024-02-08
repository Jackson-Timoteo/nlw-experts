const perguntas = [
    {
      pergunta: 'Qual é a maneira correta de declarar uma variável em JavaScript?',
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 1 // "let myVar;"
    },
    {
      pergunta: 'O que é uma função de callback em JavaScript?',
      respostas: [
        "Uma função que é chamada no início de um programa",
        "Uma função que é passada como argumento para outra função",
        "Uma função que é chamada automaticamente quando ocorre um evento",
      ],
      correta: 1 // "Uma função que é passada como argumento para outra função"
    },
    {
      pergunta: 'Qual é a saída do seguinte código JavaScript: console.log(typeof([]));?',
      respostas: [
        "'object'",
        "'array'",
        "'undefined'",
      ],
      correta: 0 // "'object'"
    },
    {
      pergunta: 'Qual método de array é usado para adicionar novos elementos ao final de um array?',
      respostas: [
        "push()",
        "append()",
        "add()",
      ],
      correta: 0 // "push()"
    },
    {
      pergunta: 'Qual dos seguintes não é um operador de comparação em JavaScript?',
      respostas: [
        "==",
        "===",
        "!==",
      ],
      correta: 1 // "==="
    },
    {
      pergunta: 'Qual método de string é usado para converter uma string em letras minúsculas?',
      respostas: [
        "toLowerCase()",
        "toLower()",
        "lowerCase()",
      ],
      correta: 0 // "toLowerCase()"
    },
    {
      pergunta: 'Qual é a função do operador "new" em JavaScript?',
      respostas: [
        "Criar uma nova variável",
        "Criar uma nova instância de um objeto",
        "Criar uma nova função",
      ],
      correta: 1 // "Criar uma nova instância de um objeto"
    },
    {
      pergunta: 'O que o método "map()" faz em um array JavaScript?',
      respostas: [
        "Altera o array original",
        "Cria um novo array com os resultados de chamar uma função fornecida em cada elemento do array",
        "Remove um elemento específico do array",
      ],
      correta: 1 // "Cria um novo array com os resultados de chamar uma função fornecida em cada elemento do array"
    },
    {
      pergunta: 'Qual é a diferença entre "undefined" e "null" em JavaScript?',
      respostas: [
        "Não há diferença, ambos representam a ausência de valor",
        "Undefined é atribuído pelo JavaScript, enquanto null é atribuído pelo programador",
        "Undefined representa a ausência de valor atribuído, enquanto null representa um valor nulo atribuído pelo programador",
      ],
      correta: 2 // "Undefined representa a ausência de valor atribuído, enquanto null representa um valor nulo atribuído pelo programador"
    },
    {
      pergunta: 'Como você verifica se uma variável é de tipo "object" em JavaScript?',
      respostas: [
        "typeof myVar === 'object'",
        "myVar instanceof Object",
        "Ambas as opções acima",
      ],
      correta: 2 // "Ambas as opções acima"
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        
        const estaCorreta = event.target.value == item.correta
       
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      } 
    
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //add na tela as perguntas
    quiz.appendChild(quizItem)
  }