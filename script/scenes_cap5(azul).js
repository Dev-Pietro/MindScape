const scenes = [
  {
    id: 1,
    speaker: "Yasmin - Pensamento",
    text: "No dia seguinte, cheguei na escola e, para minha surpresa, Jonathan estava me esperando na minha mesa. Parecia preocupado.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 2 }
    ]
  },
  {
    id: 2,
    speaker: "Jonathan",
    text: "Oi, Yasmin. Está tudo bem com a Karen?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 3 }
    ]
  },
  {
    id: 3,
    speaker: "Yasmin - Pensamento",
    text: "Fiquei surpresa com a pergunta. Algo no tom dele parecia estranho. Estava desconfiada, mas a curiosidade falou mais alto.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 4 }
    ]
  },
  {
    id: 4,
    speaker: "Yasmin",
    text: "Por que você está perguntando isso?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 5 }
    ]
  },
  {
    id: 5,
    speaker: "Jonathan",
    text: "Ah, sei lá... É que ela tem ficado até mais tarde na escola todos os dias. Ontem eu a ouvi falando sobre você, algo como... \"A Yasmin está começando a ficar desconfiada, é melhor irmos rápido\", e mencionou alguma coisa sobre \"a lâmina\". Achei a frase meio esquisita, parecia até coisa de filme.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 6 }
    ]
  },
  {
    id: 6,
    speaker: "Yasmin - Pensamento",
    text: "Meu coração disparou. As palavras dele ecoavam na minha mente. \"Ela faz parte deles...\" Pensei, tentando manter a calma. \"Será que é por isso que ela queria me ajudar? Então, Jonathan é inocente...\"",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 7 }
    ]
  },
  {
    id: 7,
    speaker: "Yasmin - Pensamento",
    text: "Nesse momento, Karen apareceu. Ela parecia descontraída, mas eu me sentia desconfortável.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 8 }
    ]
  },
  {
    id: 8,
    speaker: "Karen",
    text: "Oi, o que vocês estavam conversando?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz5.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 9 }
    ]
  },
  {
    id: 9,
    speaker: "Jonathan",
    text: "Ah, eu só estava perguntando para a Yasmin se vo...",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando5.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 10 }
    ]
  },
  {
    id: 10,
    speaker: "Yasmin",
    text: "Se você tinha feito a lição de matemática, porque eu mesma não entendi nada.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao2.png" },
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 11 }
    ]
  },
  {
    id: 11,
    speaker: "Yasmin - Pensamento",
    text: "Jonathan ficou claramente confuso, mas não protestou. Karen parecia não notar o clima estranho e simplesmente concordou.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 12 }
    ]
  },
  {
    id: 12,
    speaker: "Karen",
    text: "Também não entendi nada.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz8.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 13 }
    ]
  },
  {
    id: 13,
    speaker: "Yasmin - Pensamento",
    text: "O professor entrou na sala e o assunto foi deixado de lado, pelo menos por enquanto.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 14 }
    ]
  },
  { 
    id: 14,
    speaker: "",
    text: "...",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 15 } //arrumar ID
    ]
  },

  {
    id: 15,
    speaker: "Yasmin - Pensamento",
    text: "No final da aula, Jonathan se aproximou de mim, visivelmente curioso. Parecia preocupado e queria respostas.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 16 }
    ]
  },
  {
    id: 16,
    speaker: "Jonathan",
    text: "Por que você me cortou daquela forma mais cedo?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 17 }
    ]
  },
  {
    id: 17,
    speaker: "Yasmin - Pensamento",
    text: "Respirei fundo. Sabia que tinha que ser cuidadosa com o que dizia. Jonathan sempre foi confiável, mas será que eu estava sendo justa com ele?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 18 }
    ]
  },
  {
    id: 18,
    speaker: "Yasmin",
    text: "Tem algo esquisito acontecendo...",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 19 }
    ]
  },
  {
    id: 19,
    speaker: "Yasmin - Pensamento",
    text: "Ele me olhou com aquela expressão familiar de quem estava prestes a fazer muitas perguntas. Eu precisava ser direta.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao2.png" }

    ],
    choices: [
      { text: "Próximo", nextScene: 20 }
    ]
  },
  {
    id: 20,
    speaker: "Yasmin",
    text: "Jonathan, que símbolo era aquele que estava debaixo da sua carteira anteontem?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 21 }
    ]
  },
  {
    id: 21,
    speaker: "Jonathan",
    text: "Que símbolo? Do que você está falando?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 22 }
    ]
  },
  {
    id: 22,
    speaker: "Yasmin - Pensamento",
    text: "Não perdi tempo. Abri a bolsa, peguei o papel que eu tinha encontrado embaixo da mesa dele e o mostrei. Assim que ele viu, seus olhos se estreitaram como se estivesse tentando lembrar.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 23 }
    ]
  },
  {
    id: 23,
    speaker: "Jonathan",
    text: "Ah... Esse símbolo. A Karen me deu. Ela disse que era \"a minha cara\" e eu dei uma risada. Nem dei muita importância e guardei.",
    background: "../img/background/yasminsegurandopapel.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 24 }
    ]
  },
  {
    id: 24,
    speaker: "Yasmin - Pensamento",
    text: "Minha mente começou a juntar os pedaços. Karen... Ela poderia estar envolvida. Havia muitas coincidências para ignorar.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 25 }
    ]
  },
  {
    id: 25,
    speaker: "Yasmin - Pensamento",
    text: "Pela primeira vez, senti uma mistura de raiva e descrença. Precisava que Jonathan entendesse o que eu estava enfrentando, então contei tudo, desde os sonhos até minhas suspeitas sobre Karen e o culto.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 26 }
    ]
  },
  {
    id: 26,
    speaker: "Yasmin - Pensamento",
    text: "Depois de muito tempo eu consegui explicar tudo.",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 26 }
    ]
  },
  {
    id: 26,
    speaker: "Yasmin - Pensamento",
    text: "Ele ficou em silêncio por um longo tempo, parecia tentar processar cada palavra.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 27 }
    ]
  },
  {
    id: 27,
    speaker: "Jonathan",
    text: "Você não acha que pode estar exagerando? Isso tudo soa tão... surreal.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 28 }
    ]
  },
  {
    id: 28,
    speaker: "Yasmin - Pensamento",
    text: "Inacreditável. Ele não acreditava em mim. Eu tinha acabado de revelar tudo, todos os meus medos, e ele achava que eu estava imaginando coisas. O silêncio entre nós ficou pesado.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava1.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 29 }
    ]
  },
  {
    id: 29,
    speaker: "Yasmin - Pensamento",
    text: "Sem dizer mais nada, virei as costas e comecei a me afastar. Eu precisava sair dali, o mais rápido possível.",
    background: "../img/background/escola-corredor.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava1.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 30 }
    ]
  },
  {
    id: 30,
    speaker: "Yasmin - Pensamento",
    text: "Dois dias se passaram.",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 31 }
    ]
  },
  {
    id: 31,
    speaker: "Yasmin - Pensamento",
    text: "A ansiedade tomou conta de mim enquanto eu estava no meu quarto, refletindo sobre tudo que acontecera.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 32 }
    ]
  },
  {
    id: 32,
    speaker: "Yasmin - Pensamento",
    text: "Será que eu realmente estava exagerando? Será que esse culto era mesmo real ou minha mente estava apenas juntando peças soltas? A dúvida era uma sombra constante.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 33 }
    ]
  },
  {
    id: 33,
    speaker: "Yasmin - Pensamento",
    text: "Pensei em ligar para Jonathan, mas antes que eu pudesse me decidir, o sono finalmente me venceu.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [
      { text: "Fim", nextScene: 34 }
    ]
  },
  {
    id: 34,
    speaker: "Yasmin - Pensamento",
    text: "Na manhã seguinte, enquanto eu caminhava para a escola, meus pensamentos voltaram ao que havia acontecido. Fui dura com Jonathan, e talvez eu devesse me desculpar por isso. Decidi que, assim que o encontrasse, pediria desculpas.",
    background: "../img/background/rua2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 35 }
    ]
  },
  {
    id: 35,
    speaker: "Yasmin - Pensamento",
    text: "O dia passou rápido, e ainda não tinha visto Jonathan. Quando o sino tocou, anunciando o fim das aulas, eu comecei a ficar preocupada. Estava perdida nesses pensamentos quando ouvi meu nome sendo chamado. Era Jonathan. Ele parecia nervoso ao se aproximar de mim.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 36 }
    ]
  },
  {
    id: 36,
    speaker: "Yasmin",
    text: "Você está bem?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 37 }
    ]
  },
  {
    id: 37,
    speaker: "Jonathan",
    text: "Yasmin, eu... me desculpe por não ter acreditado em você antes.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 38 }
    ]
  },
  {
    id: 38,
    speaker: "Jonathan",
    text: "Depois do que você me contou, comecei a prestar atenção na Karen. Ela está mesmo agindo de forma estranha, sempre perambulando pela escola e falando com pessoas que eu nunca vi. Ontem, eu a segui até a sala do diretor... Ouvi ela e o diretor falando sobre você. Disseram que você está chegando perto da verdade e que precisavam 'dar um jeito' antes do ritual de sexta-feira.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 39 }
    ]
  },
  {
    id: 39,
    speaker: "Yasmin - Pensamento",
    text: "Minhas mãos tremiam, mas ao mesmo tempo, senti uma onda de alívio. O culto era real. Eu não estava imaginando coisas.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 40 }
    ]
  },
  {
    id: 40,
    speaker: "Yasmin",
    text: "Então está acontecendo... o culto é real. Precisamos fazer alguma coisa.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 41 }
    ]
  },
  {
    id: 41,
    speaker: "Jonathan",
    text: "Se conseguirmos filmar essa reunião de sexta-feira, teremos provas. Podemos mostrar tudo para as autoridades.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 42 }
    ]
  },
  {
    id: 42,
    speaker: "Yasmin",
    text: "Mas como vamos filmar sem sermos notados?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 43 }
    ]
  },
  {
    id: 43,
    speaker: "Jonathan",
    text: "Podemos esconder um celular em um dos armários antes do ritual começar. Deixamos ele gravando tudo.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 44 }
    ]
  },
  {
    id: 44,
    speaker: "Yasmin",
    text: "Faz sentido. Depois do ritual, pegamos o celular e temos as provas.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 45 }
    ]
  },
  {
    id: 45,
    speaker: "Yasmin - Pensamento",
    text: "Decidimos que não podíamos errar. Precisávamos estar prontos para sexta-feira.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 46 }
    ]
  },
  {
    id: 46,
    speaker: "Narrador",
    text: "Na sexta-feira.",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 47 }
    ]
  },
  {
    id: 47,
    speaker: "Yasmin - Pensamento",
    text: "Na entrada da escola, nos encontramos para alinhar o plano. Nosso primeiro objetivo era despistar Karen e nos encontrar novamente depois das aulas.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando3.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 48 }
    ]
  },
  {
    id: 48,
    speaker: "Narrador",
    text: "Já estão no fim da aula.",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 49 }
    ]
  },
  {
    id: 49,
    speaker: "Yasmin - Pensamento",
    text: "Vi Jonathan se aproximando no corredor, parecia estar tremendo. Quando chegou perto, percebi que ele estava muito preocupado.",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 50 }
    ]
  },
  {
    id: 50,
    speaker: "Jonathan",
    text: "Temos um problema. Consegui despistar Karen dizendo que não ficaria na escola hoje, mas quando fui checar a sala onde o ritual vai acontecer... está vazia. Não há mesas, nem armários, nem nada para colocar o celular.",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando5.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 51 }
    ]
  },
  {
    id: 51,
    speaker: "Yasmin",
    text: " O quê? Não é possível...",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surtada.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando5.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 52 }
    ]
  },


  {
    id: 52,
    speaker: "Yasmin - Pensamento",
    text: "Decidimos ir até a sala para conferir, e quando chegamos lá, vi que ele estava certo. Nada de armários. Haviam cadeiras e mesas, mas seria muito aparente. Comecei a entrar em pânico, mas então uma ideia surgiu na minha mente.",
    background: "../img/background/sala-culto.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surtada.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando5.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 53 }
    ]
  },
  {
    id: 53,
    speaker: "Yasmin",
    text: "E se colocarmos o celular junto das lâmpadas do teto?",
    background: "../img/background/sala-culto.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando5.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 54 }
    ]
  },
  {
    id: 54,
    speaker: "Yasmin - Pensamento",
    text: "Jonathan testou a ideia e funcionou! Conseguimos fixar o celular lá em cima, gravando. Mas ouvimos vozes se aproximando, então saímos correndo para o corredor antes que alguém nos visse.",
    background: "../img/background/sala-culto.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 55 }
    ]
  },
  {
    id: 55,
    speaker: "Yasmin - Pensamento",
    text: "A caminho de volta para a escola, estávamos eufóricos, comemorando que tudo tinha dado certo. Até que, de repente, um pensamento me atingiu como um raio.",
    background: "../img/background/caminho-casa.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 56 }
    ]
  },
  {
    id: 56,
    speaker: "Yasmin",
    text: "Jonathan, a escola não abre amanhã. Hoje é sexta... amanhã é sábado. Como vamos pegar as gravações?",
    background: "../img/background/caminho-casa.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 57 }
    ]
  },
  {
    id: 57,
    speaker: "Yasmin - Pensamento",
    text: "Jonathan parou de andar, e a expressão dele me fez perceber que ele também não tinha pensado nisso. Restavam duas opções: esperar até segunda-feira, arriscando que alguém encontrasse o celular, ou invadir a escola no sábado para recuperá-lo. Soltamos risos nervosos pela situação absurda em que nos metemos.",
    background: "../img/background/caminho-casa.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 58 }
    ]
  },
  {
    id: 58,
    speaker: "Narrador",
    text: "Como o tempo está rápido, estamos no sábado",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 59 }
    ]
  },
  {
    id: 59,
    speaker: "Yasmin - Pensamento",
    text: "No sábado, a caminho da escola, o clima era tenso, mas estávamos determinados. Não podíamos falhar agora. Pulamos os portões e entramos discretamente. Eu estava preocupada com a sala estar trancada, mas Jonathan sorriu e puxou uma chave mestra do conselho estudantil. Ele já tinha pensado nisso.",
    background: "../img/background/frenteescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan_falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 60 }
    ]
  },
  {
    id: 60,
    speaker: "Yasmin - Pensamento",
    text: "Dentro da sala, tudo parecia normal, como se nada tivesse acontecido na noite anterior. Jonathan rapidamente pegou o celular, e nós verificamos a gravação. Capturamos tudo. Era real, e finalmente tínhamos as provas que precisávamos.",
    background: "../img/background/sala-culto.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 61 }
    ]
  },
  {
    id: 61,
    speaker: "Yasmin - Pensamento",
    text: "Saímos dali com um peso imenso aliviado dos meus ombros. Estava livre de todas aquelas dúvidas. A partir de agora, tudo mudaria.",
    background: "../img/background/sair.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 62 }
    ]
  },
  {
    id: 62,
    speaker: "Yasmin - Pensamento",
    text: "E assim, finalmente, tudo tinha sido resolvido. Mas eu sabia que as coisas estavam apenas começando. O culto ainda estava por aí, e o futuro era imprevisível.",
    background: "../img/background/porvir.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
    ],
    choices: [
      { text: "Fim", nextChapter: "Final(azul).html" }
    ]
  }

  

];


//--------------------------------------------------------------------------

//--------------------------------------------------------------------------

//Da update nos personagens e na cena
function updateCharacters(characters) {
  const characterContainer = document.getElementById("character-container");
  characterContainer.innerHTML = '';
  
  characters.forEach(character => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");

    const characterImg = document.createElement("img");
    characterImg.src = character.image;
    characterImg.alt = character.name;

    characterDiv.appendChild(characterImg);
    characterContainer.appendChild(characterDiv);
  });
}

//------------------------------------------------------------------------

let typingInterval;
let isTyping = false; // Para verificar se o texto está sendo digitado
let textSpeed = 50; // Default speed
let fontSize = 18; // Default font size

// Função para aplicar as configurações de velocidade e tamanho
function applySettings() {
  const savedSettings = JSON.parse(localStorage.getItem('gameSettings'));
  if (savedSettings) {
      textSpeed = savedSettings.textSpeed || 50;
      fontSize = savedSettings.fontSize || 18;
  }
  document.getElementById("dialogue-text").style.fontSize = `${fontSize}px`;
}

// Função para exibir o texto com efeito de digitação
function typeText(element, text, delay = textSpeed) {
  element.textContent = ''; // Limpa o texto antes de começar
  let index = 0;

  const typingEffect = () => {
      if (index < text.length) {
          element.textContent += text[index];
          index++;
      } else {
          clearInterval(typingInterval); // Finaliza a animação
          isTyping = false;
      }
  };

  typingInterval = setInterval(typingEffect, delay);
  isTyping = true;
}

// Inicializa as configurações ao carregar a página do jogo
applySettings();

// Exemplo de como alterar a cena no jogo, agora com as configurações aplicadas
let currentSceneId = 1;

function showScene(sceneId) {
  const scene = scenes.find(s => s.id === sceneId);

  currentSceneId = sceneId;

  document.getElementById("speaker-name").innerText = scene.speaker;

  const dialogueTextElement = document.getElementById("dialogue-text");
  typeText(dialogueTextElement, scene.text);

  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = '';

  const quickTimeContainer = document.getElementById("quick-time");
  quickTimeContainer.innerHTML = '';

  //teste de botao
  if(scene.choices.length == 1) {
      document.getElementById("background").style.filter = `brightness(1)`;
      document.getElementById("character-container").style.filter = `brightness(1)`;
      document.getElementById("dialogue-box").style.filter = `brightness(1)`;
      scene.choices.forEach(choice => {
          const button = document.createElement("button");
          button.innerText = choice.text;
          button.classList.add("btn-choice");

          // Se o botão tiver próximo capítulo, vai para o novo capítulo
          if (choice.nextChapter) {
              button.onclick = () => {
              location.href = choice.nextChapter; // Redireciona para a próxima página
              };
          } else {
              button.onclick = () => {
                  if (isTyping) {
                      clearInterval(typingInterval); // Para a animação de digitação
                      dialogueTextElement.textContent = scene.text; // Exibe o texto completo imediatamente
                      isTyping = false;
                  }
                  showScene(choice.nextScene);
              };
          }

          choicesContainer.appendChild(button);
      });
  } else if(scene.choices.length > 1) {
      document.getElementById("background").style.filter = `brightness(0.5)`;
      document.getElementById("character-container").style.filter = `brightness(0.5)`;
      document.getElementById("dialogue-box").style.filter = `brightness(0.5)`;
      scene.choices.forEach(choice => {
          const button = document.createElement("button");
          button.innerText = choice.text;
          button.classList.add("btn-quick-time");

          // Se o botão tiver próximo capítulo, vai para o novo capítulo
          if (choice.nextChapter) {
              button.onclick = () => {
              location.href = choice.nextChapter; // Redireciona para a próxima página
              };
          } else {
              button.onclick = () => {
                  if (isTyping) {
                      clearInterval(typingInterval); // Para a animação de digitação
                      dialogueTextElement.textContent = scene.text; // Exibe o texto completo imediatamente
                      isTyping = false;
                  }
                  showScene(choice.nextScene);
              };
          }

          quickTimeContainer.appendChild(button);
      })
  }

  updateCharacters(scene.characters);
  document.getElementById("background").style.backgroundImage = `url(${scene.background})`;
}

//Salvar o Progresso e Carregar
const saveGameButton = document.getElementById('save-game');
const loadGameButton = document.getElementById('load-game');

function saveGameState() {
  const gameData = {
      chapter: window.location.href, 
      sceneId: currentSceneId
  };

  localStorage.setItem("save-game", JSON.stringify(gameData));
  alert("Progresso de Jogo salvo com sucesso !")
}

function loadGameState() {
  const gameHasSave = JSON.parse(localStorage.getItem("save-game"));

  if (gameHasSave) {
      localStorage.setItem("pendingSceneId", gameHasSave.sceneId);

      window.location.href = gameHasSave.chapter;
  }
  else {
      alert("Você não possui nenhum progresso salvo antes.")
  }
}

saveGameButton.addEventListener('click', saveGameState);
loadGameButton.addEventListener('click', loadGameState);

//
// Começa a primeira cena
// Verifica se existe uma cena pendente no localStorage
function loadPendingScene() {
  const pendingSceneId = localStorage.getItem("pendingSceneId");

  if (pendingSceneId) {
      // Remove a entrada após o uso
      localStorage.removeItem("pendingSceneId");

      // Carrega a cena salva
      showScene(parseInt(pendingSceneId, 10));
  } else {
      // Se não houver cena pendente, começa na primeira cena
      showScene(1);
  }
}

loadPendingScene();
