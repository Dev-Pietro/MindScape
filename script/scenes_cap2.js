const scenes = [
    {
      id: 1,
      speaker: "Yasmin - Pensamento",
      text: "Eu estava quase saindo da sala quando algo chamou minha atenção. Tinha um papel embaixo da mesa do Jonathan, meio amassado, quase escondido.",
      characters: [
        {name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"}
    ],
      background: "../img/background/salaescola2.jpeg",
      choices: [{ text: "Próximo", nextScene: 2 }]
    },
    {
      id: 2,
      speaker: "Yasmin - Pensamento",
      text: "Eu nunca fui de deixar as coisas bagunçadas, então me agachei para pegar. Era só um papel, mas... não consegui evitar a curiosidade e acabei abrindo para ver o que estava ali.",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png"} 
    ],
      background: "../img/background/papelmesa.jpg",
      choices: [{ text: "Próximo", nextScene: 3 }]
    },
    {
      id: 3,
      speaker: "Yasmin - Pensamento",
      text: "No instante em que olhei, senti meu estômago revirar. Havia um símbolo desenhado, e eu reconheci na hora. Era o mesmo símbolo que apareceu no meu pesadelo.",
      characters: [{ name: "Yasmin", image: "../img/characters/Provisorio/nada.png"} ],
      background: "../img/background/yasminsegurandopapel.png",
      choices: [{ text: "Próximo", nextScene: 4 }]
    },
    {
      id: 4,
      speaker: "Yasmin - Pensamento",
      text: "Não pode ser coincidência... ou pode? Eu fecho os olhos, tentando me convencer de que estou exagerando, mas o pânico começa a crescer dentro de mim.",
      characters: [{ name: "Yasmin", image: "../img/characters/Provisorio/nada.png"} ],
      background: "../img/background/black.png",
      choices: [{ text: "Próximo", nextScene: 5 }]
    },
    {
      id: 5,
      speaker: "Yasmin - Pensamento",
      text: "Por que esse símbolo estava aqui? E, pior, por que estava debaixo da mesa do Jonathan? Tento racionalizar, mas estou começando a sentir uma desconfiança que não consigo controlar.",
      characters: [{ name: "Yasmin", image: "../img/characters/Provisorio/nada.png"}],
      background: "../img/background/salaescola2.jpeg",
      choices: [{ text: "Próximo", nextScene: 6 }]
    },
    {
      id: 6,
      speaker: "Yasmin - Pensamento",
      text: "Será que devo ignorar isso e fingir que nunca vi? Ou... estou começando a perder a fé nele?",
      characters: [{ name: "Yasmin", image: "../img/characters/Provisorio/nada.png"}],
      background: "../img/background/salaescola2.jpeg",
      choices: [{ text: "Próximo", nextScene: 7 }]
    },
    {
      id: 7,
      speaker: "Yasmin - Pensamento",
      text: "Meus pensamentos estão uma bagunça. Jonathan é meu amigo, e nunca me deu motivo pra desconfiar, mas esse símbolo... o que isso significa?",
      characters: [{ name: "Yasmin", image: "../img/characters/Provisorio/nada.png"}],
      background: "../img/background/salaescola2.jpeg",
      choices: [{ text: "Próximo", nextScene: 8 }]
    },
    {
      id: 8,
      speaker: "Yasmin - Pensamento",
      text: "Seguro o papel com mais força, o coração disparado, sem saber o que fazer a seguir.",
      characters: [{ name: "Yasmin", image: "../img/characters/Provisorio/nada.png"}],
      background: "../img/background/yasminsegurandopapel.png",
      choices: [
        { text: "Desconfiar de Jonathan", nextScene: 9 }, //rota das Duvidas
        { text: "Ignorar o bilhete", nextScene: 43} //rota da Fé (FAZER)
      ]
    },

  //ROTA DAS DÚVIDAS
    {
        id: 9,
        speaker: "Yasmin - Pensamento",
        text: "Eu estava confusa, com o coração apertado, e uma mistura de decepção e frustração tomando conta de mim. Jonathan, o garoto em quem eu sempre confiei, parecia estar escondendo algo. Não fazia sentido, mas minha intuição gritava que algo estava errado. Decidi sair da escola o mais rápido possível, antes que a avalanche de pensamentos me engolisse.",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
          ],
          background: "../img/background/black.png",
          choices: [{ text: "Próximo", nextScene: 10 }]
        },
        {
          id: 10,
          speaker: "Yasmin - Pensamento",
          text: "Peguei minha bolsa apressadamente, evitando qualquer contato visual. Não podia deixar Jonathan perceber que algo estava errado, principalmente porque ele era do grêmio estudantil e costumava ficar até mais tarde. Se ele me visse... Não, isso não podia acontecer.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
          ],
          background: "../img/background/salaescola2.jpeg",
          choices: [{ text: "Próximo", nextScene: 11 }]
        },
        {
          id: 11,
          speaker: "Yasmin - Pensamento",
          text: "Correndo pelos corredores, meu único foco era chegar à saída sem esbarrar em ninguém. Mas a vida tem um jeito cruel de colocar a gente exatamente onde não quer estar. Na última curva antes da porta principal, dei de cara com ele. Jonathan estava lá, conversando com outros membros do grêmio. Meu coração afundou no peito.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-chamando1.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 12 }]
        },
        {
          id: 12,
          speaker: "Jonathan",
          text: "Yasmin?",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando2.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 13 }]
        },
        {
          id: 13,
          speaker: "Jonathan",
          text: "Por que você tá correndo assim? Aconteceu alguma coisa?",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando1.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 14 }]
        },
        {
          id: 14,
          speaker: "Yasmin",
          text: "Eu... é que... preciso ir pra casa logo, só isso.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando1.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 15 }]
        },
        {
          id: 15,
          speaker: "Jonathan",
          text: "Yasmin, tá tudo bem mesmo? Você tá estranha. Eu te conheço, tem algo errado.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 16 }]
        },
        {
          id: 16,
          speaker: "Yasmin",
          text: "Jonathan, eu... não sei se é o momento pra falar disso.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 17 }]
        },
        {
          id: 17,
          speaker: "Jonathan",
          text: "O que você quer dizer com isso? Tá me assustando.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 18 }]
        },
        {
          id: 18,
          speaker: "Yasmin",
          text: "Eu... preciso ir.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 19 }]
        },
        {
          id: 19,
          speaker: "Yasmin - Pensamento",
          text: "Minha voz era quase um sussurro enquanto me virava para correr novamente.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 20 }]
        },
        {
          id: 20,
          speaker: "Jonathan",
          text: "Yasmin, espera. Se tem algo que eu fiz ou que você sabe, fala comigo. Por favor.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada1.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio2.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 21 }]
        },
        {
          id: 21,
          speaker: "Yasmin - Pensamento",
          text: "Os olhos que antes transmitiam confiança agora pareciam um enigma impossível de decifrar. Eu precisava de mais tempo para organizar meus pensamentos antes de encarar a verdade. Então, sem dizer mais nada, me soltei do toque dele e corri para a saída.",
          characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada1.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio2.png" }
          ],
          background: "../img/background/corredorescola.jpeg",
          choices: [{ text: "Próximo", nextScene: 22 }]
        },
        {
            id: 22,
            speaker: "Yasmin - Pensamento",
            text: "Quando Jonathan me alcançou no corredor, não havia como escapar. Ele bloqueou parcialmente meu caminho, cruzando os braços com um olhar inquisitivo.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio2.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 23 }]
          },
          {
            id: 23,
            speaker: "Jonathan",
            text: "Yasmin, o que tá acontecendo? Por que você tá correndo desse jeito? Sabe que não pode fazer isso.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio2.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 24 }]
          },
          {
            id: 24,
            speaker: "Yasmin - Pensamento",
            text: "Eu respirei fundo, tentando parecer calma.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio2.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 25 }]
          },
          {
            id: 25,
            speaker: "Yasmin",
            text: "Eu... eu precisava sair logo, só isso. Tava atrasada pra... pra alguma coisa.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio2.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 26 }]
          },
          {
            id: 26,
            speaker: "Jonathan",
            text: "Atrasada pra quê, exatamente? Porque, do nada, você resolveu virar corredora olímpica na escola? E olha, eu não sei o que tá acontecendo, mas você não é do tipo que quebra as regras sem motivo.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 27 }]
          },
          {
            id: 27,
            speaker: "Yasmin",
            text: "Tá bom, tá bom! Eu sei que correr aqui é proibido. Foi um impulso, Jonathan. Desculpa, de verdade. Não vai acontecer de novo.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 28 }]
          },
          {
            id: 28,
            speaker: "Jonathan",
            text: "Não é só isso, Yasmin. Você tá estranha. Tá nervosa, tá evitando olhar pra mim. O que tá pegando?",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 29 }]
          },
          {
            id: 29,
            speaker: "Yasmin",
            text: "Não é nada. Eu tô bem, sério.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 30 }]
          },
          {
            id: 30,
            speaker: "Jonathan",
            text: "Bem? Yasmin, você tá parecendo que viu um fantasma.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 31 }]
          },
          {
            id: 31,
            speaker: "Marina",
            text: "Jonathan, dá um tempo pra ela. Nem todo mundo tem que explicar a vida toda hora.",
            characters: [
              { name: "Marina", image: "../img/characters/Marina/Marina-gritando.png" },
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-bravo1.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 32 }]
          },
          {
            id: 32,
            speaker: "Yasmin",
            text: "Obrigado, Marina.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Marina", image: "../img/characters/Marina/Marina-timida.png" },
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 33 }]
          },
          {
            id: 33,
            speaker: "Jonathan",
            text: "Ok, Yasmin. Só... vai com calma, tá? E, por favor, não corra pelos corredores. É perigoso. Da próxima vez, pode até ser suspensa.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 34 }]
          },
          {
            id: 34,
            speaker: "Yasmin",
            text: "Tá bom, entendido, senhor grêmio estudantil.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
              { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
            ],
            background: "../img/background/corredorescola.jpeg",
            choices: [{ text: "Próximo", nextScene: 35 }]
          },
          {
            id: 35,
            speaker: "Yasmin - Pensamento",
            text: "Ele ainda me olhava preocupado, mas me deixou ir. Assim que virei as costas, senti o peso do olhar dele. Jonathan me conhecia bem demais para engolir aquela desculpa.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" }
            ],
            background: "../img/background/frenteescolaportas.jpeg",
            choices: [{ text: "Próximo", nextScene: 36 }]
          },
          {
            id: 36,
            speaker: "Yasmin - Pensamento",
            text: "Quando cheguei em casa, fui direto para o quarto. Não queria falar com ninguém. Meus pais, como sempre, tentaram puxar conversa.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
            ],
            background: "../img/background/quartoyasmin.jpeg",
            choices: [{ text: "Próximo", nextScene: 37 }]
          },
          {
            id: 37,
            speaker: "Mãe",
            text: "Como foi a escola hoje, filha?",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
              { name: "Mãe", image: "../img/characters/Mae/mae_falando5.png" }
            ],
            background: "../img/background/quartoyasmin.jpeg",
            choices: [{ text: "Próximo", nextScene: 38 }]
          },
          {
            id: 38,
            speaker: "Yasmin",
            text: "Normal.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
              { name: "Mãe", image: "../img/characters/Mae/mae_falando5.png" }
            ],
            background: "../img/background/quartoyasmin.jpeg",
            choices: [{ text: "Próximo", nextScene: 39 }]
          },
          {
            id: 39,
            speaker: "Pai",
            text: "Yasmin, espera aí! Você não vai nem contar como foi o dia? Tá apressada pra quê?",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
              { name: "Mãe", image: "../img/characters/Mae/mae_falando5.png" }
            ],
            background: "../img/background/quartoyasmin.jpeg",
            choices: [{ text: "Próximo", nextScene: 40 }]
          },
          {
            id: 40,
            speaker: "Yasmin",
            text: "Depois a gente conversa, mãe. Tô cansada.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
              { name: "Mãe", image: "../img/characters/Mae/mae_falando5.png" }
            ],
            background: "../img/background/quartoyasmin.jpeg",
            choices: [{ text: "Próximo", nextScene: 41 }]
          },
          {
            id: 41,
            speaker: "Yasmin - Pensamento",
            text: "Joguei a desculpa e fechei a porta do quarto atrás de mim. Sentei na cama e soltei o ar que parecia preso desde o corredor da escola.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
            ],
            background: "../img/background/quartoyasmin.jpeg",
            choices: [{ text: "Próximo", nextScene: 42 }]
          },
          {
            id: 42,
            speaker: "Yasmin - Pensamento",
            text: "Peguei meus post-its e comecei a anotar freneticamente. Tudo o que tinha visto, suspeitado e imaginado ao longo do dia. Cada detalhe ia para a parede ao lado da cama, enquanto minha mente tentava organizar as peças daquele quebra-cabeça.",
            characters: [
              { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
            ],
            background: "../img/background/quartoyasmin.jpeg", //geral imagem com post it
            choices: [{ text: "Próximo", nextChapter: "cap3(1).html" }] //mudar para as rotas corretas.
          },
          
  //ROTA DA FÉ 
  {
    id: 43,
    speaker: "Yasmin - Pensamento",
    text: "Respiro fundo. Preciso colocar meus pensamentos em ordem. Não posso deixar a paranoia tomar conta de mim. Jonathan é meu amigo, e eu sei que ele jamais se envolveria em algo como uma seita.",
    background: "../img/background/yasminsegurandopapel.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 44 }
    ]
  },
  {
    id: 44,
    speaker: "Yasmin - Pensamento",
    text: "Decido acreditar nisso. Dobro o papel com cuidado e guardo no bolso, tentando não pensar demais. Pego minha bolsa e começo a caminhar em direção ao portão da escola para ir embora.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 45 }
    ]
  },
  {
    id: 45,
    speaker: "Yasmin - Pensamento",
    text: "Quando estou quase saindo, ouço uma voz familiar chamando meu nome. Viro-me e vejo Jonathan vindo em minha direção, junto com os colegas do grêmio. Ele me convida para acompanhá-los até parte do caminho, já que moramos perto.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/yasmin-surpresa1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 46 }
    ]
  },
  {
    id: 46,
    speaker: "Yasmin - Pensamento",
    text: "Tento manter a calma e concordo, seguindo o grupo. Estou esperando o momento certo para falar.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 47 }
    ]
  },
  {
    id: 47,
    speaker: "Yasmin - Pensamento",
    text: "Depois de um tempo, os outros se despedem e só restam nós dois. É a minha chance.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 48 }
    ]
  },
  {
    id: 48,
    speaker: "Yasmin",
    text: "Jonathan, preciso te contar uma coisa. Eu... encontrei um papel amassado com um símbolo debaixo da sua mesa na sala.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 49 }
    ]
  },
  {
    id: 49,
    speaker: "Yasmin - Pensamento",
    text: "Ele para de andar e olha para mim. Seus olhos se arregalam, e vejo o rosto dele ficando cada vez mais pálido. Meu coração acelera.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 50 }
    ]
  },
  {
    id: 50,
    speaker: "Yasmin",
    text: "Jonathan... o que é aquele símbolo?",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 51 }
    ]
  },
  {
    id: 51,
    speaker: "Yasmin - Pensamento",
    text: "Ele continua me encarando, sem conseguir dizer nada, e eu sinto que o chão está prestes a desaparecer sob meus pés. O que será que aquele símbolo significava?",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png" }
    ],
    choices: [
      { text: "Será que aquele símbolo é do culto?", nextScene: 52 }, //escolha Visual apenas
      { text: "Ou será que aquele símbolo tem algum outro significado? Um código romântico, talvez?", nextScene: 52 } //Ver se está muito grande
    ]
  },

  {
    id: 52,
    speaker: "Yasmin - Pensamento",
    text: "Jonathan hesita. Fica parado, em silêncio, por alguns segundos, olhando para o chão. O silêncio é desconfortável, e meu coração começa a bater mais rápido.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 53 }
    ]
  },
  {
    id: 53,
    speaker: "Jonathan",
    text: "Eu... não vou falar sobre nada que envolva aquele papel, Yasmin. É melhor você esquecer isso.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 54 }
    ]
  },
  {
    id: 54,
    speaker: "Yasmin - Pensamento",
    text: "Sinto meu estômago revirar. Isso só pode significar uma coisa: ele sabe exatamente do que eu estou falando. Tento encontrar uma resposta, mas ele se afasta, encerrando a conversa de forma abrupta.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
      { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 55 }
    ]
  },
  {
    id: 55,
    speaker: "Yasmin - Pensamento",
    text: "Minutos depois, nos despedimos com um aceno breve e cada um segue seu caminho para casa. Chego em casa e vou direto para o meu quarto. Meus pais tentam falar comigo sobre o dia, mas eu só murmuro qualquer coisa, sem vontade de conversar.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 56 }
    ]
  },
  {
    id: 56,
    speaker: "Yasmin - Pensamento",
    text: "Tranco a porta e me jogo na cama, mas minha mente está a mil. Preciso organizar meus pensamentos. Pego alguns post-its e começo a grudá-los na parede ao lado da cama, anotando tudo o que vi, senti e pensei durante o caminho de volta. Preciso entender o que está acontecendo.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 57 }
    ]
  },
  {
    id: 57,
    speaker: "Yasmin - Pensamento",
    text: "Na hora do jantar, desço para a cozinha. Meus pais parecem preocupados, e isso só me deixa mais irritada.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 58 }
    ]
  },
  {
    id: 58,
    speaker: "Mãe",
    text: "Yasmin, querida, como foi a escola hoje?",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" },
      { name: "Mãe", image: "../img/characters/Mae/mae_triste.png" }
      
    ],
    choices: [
      { text: "Próximo", nextScene: 59 }
    ]
  },
  {
    id: 59,
    speaker: "Mãe",
    text: "Você anda tão distante ultimamente. Aconteceu alguma coisa?",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" },
      { name: "Mãe", image: "../img/characters/Mae/mae_triste.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 60 }
    ]
  },
  {
    id: 60,
    speaker: "Yasmin",
    text: "Foi normal... nada demais.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" },
      { name: "Mãe", image: "../img/characters/Mae/mae_triste.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 61 }
    ]
  },
  {
    id: 61,
    speaker: "Yasmin - Pensamento",
    text: "Não quero falar sobre isso, não com eles. Desvio o assunto rapidamente e termino de comer o mais rápido possível. Volto para o meu quarto, ainda com a cabeça cheia.",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 62 }
    ]
  },
  {
    id: 62,
    speaker: "Yasmin - Pensamento",
    text: "Não posso tirar a imagem daquele símbolo da minha mente. Acho injusto simplesmente achar que Jonathan está envolvido em algo tão estranho, sem tentar descobrir mais. Preciso saber a verdade.",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 63 }
    ]
  },
  {
    id: 63,
    speaker: "Yasmin - Pensamento",
    text: "Decido que vou investigar por conta própria. Quero entender o que é esse culto, se ele realmente existe, e como pode estar relacionado com os meus sonhos. Não vou tirar conclusões precipitadas... mas preciso descobrir a verdade.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "yasmin-neutra1.png" }
    ],
    choices: [{ text: "Próximo", nextChapter: "cap3(2).html" }]
  }
];

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
