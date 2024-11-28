//roteiro do cap 1
const scenes = [
    {
      id: 1,
      speaker: "Yasmin - Pensamento",
      text: "A luz fraca do abajur iluminava os post-its coloridos que cobriam boa parte da parede ao lado da minha cama. Cada anotação era uma tentativa de organizar o caos na minha mente.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 2 }
      ]
    },
    {
      id: 2,
      speaker: "Yasmin - Pensamento",
      text: "Culto, papel, sonho. Essas palavras me encaravam como enigmas esperando para serem resolvidos. Suspirei profundamente, sentindo o peso da incerteza crescer.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 3 }
      ]
    },
    {
      id: 3,
      speaker: "Yasmin - Pensamento",
      text: "Não era só sobre o comportamento estranho do Jonathan ou os segredos que ele parecia esconder. Havia algo maior acontecendo.",
      background: "../img/background/black.png",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 4 }
      ]
    },
    {
      id: 4,
      speaker: "Yasmin - Pensamento",
      text: "Algo que conectava os sonhos estranhos que me assombravam às peças soltas que eu tentava juntar. Mas sozinha, eu não iria longe.",
      background: "../img/background/black.png",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 5 }
      ]
    },
    {
      id: 5,
      speaker: "Yasmin - Pensamento",
      text: "Olhando para as anotações, uma ideia começou a tomar forma. Eu precisava de ajuda, alguém que conhecesse Jonathan, mas que estivesse fora da minha confusão emocional.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 6 }
      ]
    },
    {
      id: 6,
      speaker: "Yasmin - Pensamento",
      text: "Então, lembrei de Karen. Ela era amiga dele há um bom tempo e talvez soubesse de algo que pudesse esclarecer o que estava acontecendo.",
      background: "../img/background/black.png",
      characters: [
        { name: "Yasmin", image: "../img/characters/Karen/karen-feliz8.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 7 }
      ]
    },
    {
      id: 7,
      speaker: "Yasmin - Pensamento",
      text: "No dia seguinte, durante o intervalo na escola, tomei coragem.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 8 }
      ]
    },
    {
      id: 8,
      speaker: "Yasmin - Pensamento",
      text: "Karen estava sentada perto da quadra, mexendo no celular. Meu coração acelerava a cada passo que me aproximava dela.",
      background: "../img/background/corredorescola.png", //imagem a ser gerada
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 9 }
      ]
    },
    {
      id: 9,
      speaker: "Yasmin - Pensamento",
      text: "Quando cheguei perto o suficiente, ela levantou o olhar, surpresa com a minha presença.",
      background: "../img/background/corredorescola.png", //imagem a ser gerada
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 10 }
      ]
    },
    {
      id: 10,
      speaker: "Yasmin",
      text: "Karen, a gente precisa conversar.",
      background: "../img/background/corredorescola.png", //imagem a ser gerada
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 11 }
      ]
    },
    {
      id: 11,
      speaker: "Karen",
      text: "Agora?",
      background: "../img/background/corredorescola.png", //imagem a ser gerada
      characters: [
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" },
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 12 }
      ]
    },
    {
      id: 12,
      speaker: "Yasmin",
      text: "Depois da aula. É importante.",
      background: "../img/background/corredorescola.png", //imagem a ser gerada
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 13 }
      ]
    },
    {
      id: 13,
      speaker: "Karen",
      text: "Tudo bem. Nos encontramos na saída, pode ser?",
      background: "../img/background/corredorescola.png", //imagem a ser gerada
      characters: [
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" },
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 14 }
      ]
    },
    {
      id: 14,
      speaker: "Yasmin - Pensamento",
      text: "Assenti rapidamente, tentando não parecer tão ansiosa. Afastei-me antes que ela pudesse perguntar mais alguma coisa.",
      background: "../img/background/corredorescola.png", //imagem a ser gerada
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 15 }
      ]
    },
    {
      id: 15,
      speaker: "Yasmin - Pensamento",
      text: "A ansiedade que me acompanhava desde a noite anterior agora se misturava com um pequeno alívio. Falar com Karen era um passo arriscado, mas eu sabia que precisava tentar.",
      background: "../img/background/black.png",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 16 }
      ]
    },
    {
      id: 16,
      speaker: "Yasmin - Pensamento",
      text: "Alguma coisa dentro de mim dizia que aquilo seria crucial para entender o que estava realmente acontecendo.",
      background: "../img/background/black.png",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Devo tentar ser sincera com Karen...", nextScene: 61 }, //fazer 
        { text: "Ela não é confiável, vou inventar uma desculpa...", nextScene: 17} //rota engrenando bad ending
      ]
    },
    {
        id: 17,
        speaker: "Yasmin - Pensamento",
        text: "À medida que me aproximava do lugar onde havia combinado de encontrar Karen, sentia meu coração acelerar como se quisesse saltar do peito. O medo e a angústia me dominavam, e cada passo parecia um esforço sobre-humano.",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 18 }
        ]
    },
    {
        id: 18,
        speaker: "Yasmin - Pensamento",
        text: "Será que eu realmente precisava de ajuda para isso? Minha mente parecia determinada a me sabotar. Cada pensamento vinha com uma nova dúvida.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 19 }
        ]
    },
    {
        id: 19,
        speaker: "Yasmin - Pensamento",
        text: "E se o culto não fosse apenas coisa da minha cabeça? E se Jonathan não estivesse sozinho nisso? E se outras pessoas ao nosso redor estivessem envolvidas?",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 20 }
        ]
    },
    {
        id: 20,
        speaker: "Yasmin - Pensamento",
        text: "Quanto mais pensava, mais as possibilidades me assustavam, deixando minhas mãos geladas e meu estômago revirado.",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 21 }
        ]
    },
    {
        id: 21,
        speaker: "Yasmin - Pensamento",
        text: "Quando finalmente avistei Karen, parada no canto mais afastado do pátio, senti meu corpo travar. Ela acenou para mim com um sorriso casual, mas eu sabia que não conseguiria dizer o que tinha planejado.",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 22 }
        ]
    },
    {
        id: 22,
        speaker: "Karen",
        text: "Opa, Yasmin. O que você queria perguntar ou conversar? Você parecia bastante séria mais cedo.",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
            { name: "Karen", image: "../img/characters/Karen/karen-feliz7.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 23 }
        ]
    },
    {
        id: 23,
        speaker: "Yasmin",
        text: "Ah, sim, Karen. Na verdade... eu queria saber se você viu minha caneta por aí. Perdi ela ontem e hoje fiquei todas as aulas escrevendo a lápis.",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
            { name: "Karen", image: "../img/characters/Karen/karen-feliz7.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 24 }
        ]
    },
    {
        id: 24,
        speaker: "Karen",
        text: "Não, não vi sua caneta. Deve estar por aí em algum lugar.",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
            { name: "Karen", image: "../img/characters/Karen/karen-feliz8.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 25 }
        ]
    },
    {
        id: 25,
        speaker: "Yasmin - Pensamento",
        text: "Apesar de sua calma, notei que ela estava me analisando. Meu comportamento era estranho até para mim mesma.",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
            { name: "Karen", image: "../img/characters/Karen/karen-feliz8.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 26 }
        ]
    },
    {
        id: 26,
        speaker: "Karen",
        text: "Tá tudo bem? Você tá parecendo meio... distraída.",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_seria3.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 27 }
        ]
    },
    {
        id: 27,
        speaker: "Yasmin",
        text: "Ah, não é nada. Só... cansaço, sabe?",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_seria3.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 28 }
        ]
    },
    {
        id: 28,
        speaker: "Karen",
        text: "Entendi. Bom, se precisar de alguma coisa, é só falar, tá?",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
            { name: "Karen", image: "../img/characters/Karen/karen-feliz5.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 29 }
        ]
    },
    {
        id: 29,
        speaker: "Yasmin",
        text: "Claro, obrigada.",
        background: "../img/background/frenteescolamaislonge.png", //gerar imagem
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
            { name: "Karen", image: "../img/characters/Karen/karen-feliz5.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 30 }
        ]
    },
    {
        id: 30,
        speaker: "Yasmin - Pensamento",
        text: "Mal esperei que ela se afastasse antes de sair dali. Minhas pernas pareciam de chumbo enquanto caminhava em direção à saída da escola.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 31 }
        ]
    },
    {
        id: 31,
        speaker: "Yasmin - Pensamento",
        text: "Fui direto para casa, mas me sentia cada vez mais sufocada pelos meus próprios pensamentos. Por que não consegui contar para Karen? A resposta era simples: medo.",
        background: "../img/background/caminho-casa.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 32 }
        ]
    },
    {
        id: 32,
        speaker: "Yasmin - Pensamento",
        text: "Não só de como ela reagiria, mas também do que eu poderia descobrir.",
        background: "../img/background/caminho-casa.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 33 }
        ]
    },
    {
        id: 33,
        speaker: "Yasmin - Pensamento",
        text: "Cheguei em casa, com a cabeça baixa, tentando evitar qualquer conversa com meus pais. Eles perceberam, mas, como nos últimos dias, eu apenas subi direto para o meu quarto.",
        background: "../img/background/casa-salaestar.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 34 }
        ]
    },
    {
        id: 34,
        speaker: "Yasmin - Pensamento",
        text: "Fechei a porta, joguei a mochila no chão e me sentei na cama, encarando o vazio.",
        background: "../img/background/quartoyasmin.jpeg",
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
        text: "A angústia parecia pesar mais a cada hora que passava.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 36 }
        ]
    },
    {
        id: 36,
        speaker: "Yasmin - Pensamento",
        text: "Não jantei, não disse nada aos meus pais. Apenas fiquei ali, sozinha, tentando enfrentar uma tempestade que eu mesma havia criado.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 37 }
        ]
    },
    {
        id: 37,
        speaker: "",
        text: "",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Dormir", nextScene: 38 }, //vai voltar p rota padrao, depois ver isso
            { text: "Não dormir", nextChapter: "cap4(tormentos1).html"}
        ]
    },
    
    {
      id: 38,
      speaker: "Yasmin-Pensamento",
      text: "Acordei no outro dia, ainda cercada de dúvidas, mas com uma coisa certa na cabeça: eu precisava descobrir mais coisas sobre aquele culto.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
          { text: "Próximo", nextScene: 39 }, //Rota do good ending
      ]
  },
  {
    id: 39,
      speaker: "Yasmin-Pensamento",
      text: "Que estranho, Karen faltou hoje.",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
          { text: "Próximo", nextScene: 40 }, //Rota do good ending
      ]
  },
  {
    id: 40,
      speaker: "Yasmin-Pensamento",
      text: "Será que o Jonathan sabe o porque?",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
          { text: "Próximo", nextScene: 41 }, //Rota do good ending
      ]
  },
  {
    id: 41,
      speaker: "Yasmin",
      text: "Jonathan, você sabe porque a Karen faltou hoje?",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
          {name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png"}
      ],
      choices: [
          { text: "Próximo", nextScene: 42 }, //Rota do good ending
      ]
  },
  {
    id: 42,
      speaker: "Jonathan",
      text: "Ela me disse que tinha dentista hoje.",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
          {name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png"}
      ],
      choices: [
          { text: "Próximo", nextScene: 43 }, //Rota do good ending
      ]
  },
  {
    id: 43,
      speaker: "Yasmin",
      text: "Estranho, ela não me disse nada...",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
          {name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png"}
      ],
      choices: [
          { text: "Próximo", nextScene: 44 }, //Rota do good ending
      ]
  },
  {
    id: 44,
      speaker: "Jonathan",
      text: "Ela na verdade me contou apenas porque queria que eu avisasse a professora, kkkk",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
          {name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png"}
      ],
      choices: [
          { text: "Próximo", nextScene: 45 }, //Rota do good ending
      ]
  }, 
  {
    id: 45,
      speaker: "Yasmin",
      text: "Ah sim, entendi.",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
          { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png"}
      ],
      choices: [
          { text: "Próximo", nextScene: 46 }, //Rota do good ending
      ]
  },
  {
    id: 46,
      speaker: "Yasmin-Pensamento",
      text: "Acho que é melhor ir para minha mesa me preparar para mais um dia de aula.",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
          
      ],
      choices: [
          { text: "Próximo", nextScene: 47 }, //Rota do good ending
      ]
  },
  {
    id: 47,
      speaker: "Yasmin",
      text: "Eita! Dormi de novo!",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
          
      ],
      choices: [
          { text: "Próximo", nextScene: 48 }, //Rota do good ending
      ]
  },
  {
    id: 48,
      speaker: "Yasmin",
      text: "Que horas são?",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
      ],
      choices: [
          { text: "Próximo", nextScene: 49 }, //Rota do good ending
      ]
  },
  {
    id: 49,
      speaker: "Yasmin",
      text: "Nossa! como já é tão tarde assim?!",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
      ],
      choices: [
          { text: "Próximo", nextScene: 50 }, //Rota do good ending
      ]
  },
  {
    id: 50,
      speaker: "Yasmin-Pensamento",
      text: "Puts, preciso falar com o professor de historia! ",
      background: "../img/background/salaescola2.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
      ],
      choices: [
          { text: "Próximo", nextScene: 51 }, //Rota do good ending
      ]
  },
  {
    id: 51,
      speaker: "Yasmin-Pensamento",
      text: "Acho melhor ir ver na secretaria, não o acho de jeito nenhum!",
      background: "../img/background/corredorescola.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
      ],
      choices: [
          { text: "Próximo", nextScene: 52 }, //Rota do good ending
      ]
  },
  {
    id: 52,
      speaker: "Yasmin-Pensamento",
      text: "Karen? o que ela está fazendo aqui?!",
      background: "../img/background/corredorescola.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
          
      ],
      choices: [
          { text: "Próximo", nextScene: 53 }, //Rota do good ending
      ]
  },
{
  id: 53,
      speaker: "Yasmin",
      text: "Porque será que ela está entrando naquela sala desativada?",
      background: "../img/background/corredorescola.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
      ],
      choices: [
          { text: "Próximo", nextScene: 54 }, //Rota do good ending
      ]
},
{
  id: 54,
      speaker: "Yasmin-Pensamento",
      text: "Acho que vou investigar, isso é muito suspeito!",
      background: "../img/background/corredorescola.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
      ],
      choices: [
          { text: "Próximo", nextScene: 55 }, //Rota do good ending
      ]
}, 
{
  id: 55,
      speaker: "Yasmin-Pensamento",
      text: "Vou ligar o gravdor do celular, isso parece meio perigoso...",
      background: "../img/background/corredorescola.jpeg",
      characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
      ],
      choices: [
          { text: "Próximo", nextScene: 56 }, //Rota do good ending
      ]
}, 

{
  id: 56,
      speaker: "Desconhecido",
      text: "Finalmente, seremos unidos pela adaga!",
      background: "../img/background/black.png",
      characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
      ],
      choices: [
          { text: "Próximo", nextScene: 57 }, //Rota do good ending
      ]
},
{
  id: 57,
  speaker: "Desconhecido",
  text: "Maioral ficará orgulhoso! HAHAHAHA!",
  background: "../img/background/black.png",
  characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/black.png" },
  ],
  choices: [
      { text: "Próximo", nextScene: 58 }, //Rota do good ending
  ]
},
{
id: 58,
speaker: "Yasmin-Pensamento",
text: "Acho que já gravei o bastante, hora de sair daqui!",
background: "../img/background/corredorescola.jpeg",
characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
],
choices: [
    { text: "Próximo", nextScene: 59 }, //Rota do good ending
]
},

{
id: 59,
speaker: "Yasmin-pensamento",
text: "Hoje foi um bom progresso, mas ainda preciso de mais provas para acabar com o culto.",
background: "../img/background/quartoyasmin.jpeg",
characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
],
choices: [
    { text: "Próximo ", nextChapter: "cap4(good).html"}, //Rota do good ending/ Aqui iria pra outro capítulo.
]
},
{
id: 60,
      speaker: "Equipe-MindScape",
      text: "Mais novidades em breve!",
      background: "../img/background/black.png",
      characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
      ],
      choices: [
          { text: "Voltar", nextScene: 16 }, //Rota do good ending
      ]
}, 


//ROTA LARANJA COLOCAR DPS A PARTE ROSA (LINKAR COM ELA)


{
  id: 61,
  speaker: "Yasmin",
  text: "Eu olhei para Karen, e o que vi em seu rosto era algo que eu não queria ver. Desapontamento. Ela estava tentando disfarçar, mas eu conseguia perceber. Uma mistura de frustração e algo mais, algo que eu não sabia explicar.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
    { name: "Karen", image: "../img/characters/Karen/Karen_seria4.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 62 }
  ]
},
{
  id: 62,
  speaker: "Karen",
  text: "Eu fico feliz em saber que você tem tanta consideração por mim, Yasmin.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Karen", image: "../img/characters/Karen/karen-feliz5.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 63 }
  ]
},
{
  id: 63,
  speaker: "Yasmin - Pensamento",
  text: "Aquelas palavras me machucaram mais do que eu gostaria de admitir. Eu queria ser sincera com ela, mas ao mesmo tempo… a preocupação me consumia. O que aconteceria com a gente se eu fosse sincera demais?",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 64 }
  ]
},
{
  id: 64,
  speaker: "Karen",
  text: "Eu preciso resolver umas coisas aqui na escola. Fica bem, tá?",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Karen", image: "../img/characters/Karen/yasmin-falandoesurpresa.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 65 }
  ]
},
{
  id: 65,
  speaker: "Yasmin - Pensamento",
  text: "Eu a observei enquanto ela se afastava, o coração apertado. Eu queria correr atrás dela, confessar tudo o que estava sentindo, mas algo me dizia que não era o momento. Eu não queria colocar ainda mais peso nas costas dela.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 66 }
  ]
},
{
  id: 67,
  speaker: "Karen",
  text: "Yasmin, você tem certeza de que só quer compartilhar sua teoria comigo?",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
  ],
  choices: [
    { text: "1- Você realmente é insistente, eu preciso de alguém para ouvir minhas maluquices. Me desculpa por não aceitar sua oferta de primeira, eu tive medo de te envolver em algo que poderia ser perigoso futuramente.", nextScene: 18}, //ir para a parte da ROSA
    { text: "2- Sim, não precisa se preocupar porque é só uma teoria minha mesmo, não leve isso tão a sério.", nextScene: 68 }
  ]
},
{
  id: 68,
  speaker: "Yasmin - Pensamento",
  text: "Eu sabia que Karen estava tentando entender, mas o olhar dela mudou. Aquele sorriso que ela me deu antes desapareceu, e agora eu podia sentir a decepção no ar.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
    { name: "Karen", image: "../img/characters/Karen/Karen_seria3.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 69 }
  ]
},
{
  id: 69,
  speaker: "Karen",
  text: "Tá tudo bem, Yasmin. Eu não vou insistir mais nesse assunto. Sei que você não está pronta, e não quero afetar nossa amizade por causa disso.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Karen", image: "../img/characters/Karen/Karen_seria3.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 70 }
  ]
},
{
  id: 70,
  speaker: "Yasmin - Pensamento",
  text: "Eu senti o peso de suas palavras, e o culpado vazio no meu peito parecia se expandir. Era como se eu tivesse deixado ela de lado, como se eu tivesse deixado de confiar nela, e isso me feria mais do que eu queria admitir.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 71 }
  ]
},
{
  id: 71,
  speaker: "Yasmin",
  text: "Karen... eu só não sei o que fazer com tudo isso. Eu...",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada2.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 72 }
  ]
},
{
  id: 72,
  speaker: "Karen",
  text: "Se algum dia você mudar de ideia, ou se precisar de alguém, você sabe onde me encontrar.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Karen", image: "../img/characters/Karen/Karen_seria4.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 73 }
  ]
},
{
  id: 73,
  speaker: "Yasmin - Pensamento",
  text: "O sinal da escola tocou, e como se fosse um alívio para ambas, nos afastamos lentamente, cada uma indo em direção ao seu próprio caminho. A sensação de separação foi difícil de engolir.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada2.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 74 }
  ]
},
{
  id: 74,
  speaker: "Karen",
  text: "Lembre-se, Yasmin. Se precisar de mim, você pode contar comigo.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" }
  ],
  choices: [
    { text: "Próximo", nextScene: 75 }
  ]
},
{
  id: 75,
  speaker: "Yasmin - Pensamento",
  text: "Eu fiquei ali, em silêncio, sentindo o peso das palavras dela. Será que eu poderia realmente contar com ela? Ou será que tudo o que eu estava enfrentando era algo que eu teria que carregar sozinha? Só o tempo diria.",
  background: "../img/background/frenteescolaantesportas.jpeg", //verificar o que o durães usou de cenário no ROSA
  characters: [
    { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
  ],
  choices: [
    { text: "Continuar", nextChapter: "cap4(laranja).html" }
  ]
}
];
  

//--------------------------------------------------------------------------


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
