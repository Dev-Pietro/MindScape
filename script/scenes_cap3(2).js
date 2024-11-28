//Rota da Fé
const scenes = [
    {
      id: 1,
      speaker: "Yasmin - Pensamento",
      text: "Eu passei a noite inteira acordada. Minha mente estava cheia de perguntas, e eu simplesmente não conseguia descansar. A luz fraca do abajur iluminava a parede ao lado da minha cama, onde os post-its coloridos se acumulavam. Cada anotação parecia um pedaço de um quebra-cabeça que eu ainda não conseguia montar. \"Culto\", \"papel\", \"sonho\"... essas palavras estavam circulando na minha cabeça sem parar.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 2 }
      ]
    },
    {
      id: 2,
      speaker: "Yasmin - Pensamento",
      text: "Soltei um suspiro profundo, sentindo o peso da incerteza crescer. Sabia que havia algo maior, algo que ia além da curiosidade sobre o que o Jonathan estava escondendo. Tinha uma ligação estranha entre os meus sonhos e os segredos que pareciam envolver ele. Eu precisava descobrir o que era.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 3 }
      ]
    },
    {
      id: 3,
      speaker: "Yasmin - Pensamento",
      text: "Mas também sabia que sozinha não iria muito longe. Eu precisava de outra perspectiva, alguém que não estivesse envolvido diretamente, mas que pudesse me ajudar a ver as coisas de um jeito diferente. De repente, pensei em Karen. Ela era amiga do Jonathan há um bom tempo e talvez soubesse de algo que eu não sabia.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 4 }
      ]
    },
    {
      id: 4,
      speaker: "Yasmin - Pensamento",
      text: "No dia seguinte, durante o intervalo, caminhei até onde Karen estava, sentindo meu coração acelerar.",
      background: "../img/background/black.png",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
      ],
      choices: [
        { text: "Próximo", nextScene: 5 }
      ]
    },
    {
      id: 5,
      speaker: "Yasmin",
      text: "Karen, a gente precisa conversar. Tentei soar firme, mas minha voz quase falhou. Ela ergueu as sobrancelhas, claramente surpresa, mas concordou em se encontrar comigo depois da aula. Eu sabia que aquele momento seria decisivo.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 6 }
      ]
    },
    {
      id: 6,
      speaker: "Yasmin",
      text: "Mais tarde, quando nos encontramos, contei a ela tudo o que vinha pensando nos últimos dias, incluindo a reação estranha do Jonathan quando o confrontei sobre o papel. Para minha surpresa, ela deu um sorriso esquisito.",
      background: "../img/background/corredoescolar.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
        { name: "Karen", image: "../img/characters/Karen/karen-feliz6.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 7 }
      ]
    },
    {
      id: 7,
      speaker: "Karen",
      text: "Yasmin, você está bem?",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Karen", image: "../img/characters/Karen/karen-feliz6.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 8 }
      ]
    },
    {
      id: 8,
      speaker: "Yasmin",
      text: "Não tenho certeza. Esse símbolo... e tudo isso que está acontecendo... é muito estranho.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 9 }
      ]
    },
    {
      id: 9,
      speaker: "Karen",
      text: "Eu concordo, realmente é estranho. Mas vou ficar de olho. Se eu perceber algo fora do normal, te aviso. Mas você precisa descansar e não se preocupar tanto com isso, ok?",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Karen", image: "../img/characters/Karen/karen-feliz8.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 10 }
      ]
    },
    {
      id: 10,
      speaker: "Yasmin - Pensamento",
      text: "Assenti, mesmo que descansar fosse a última coisa que eu conseguiria fazer.",
      background: "../img/background/corredor.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 11 }
      ]
    },
    {
      id: 11,
      speaker: "Yasmin - Pensamento",
      text: "Cheguei na escola no dia seguinte, tentando agir normalmente. Mas, ao chegar na porta da sala, algo me fez parar. Lá no fundo, eu vi Karen e Jonathan conversando em voz baixa, muito próximos. Me aproximei mais um pouco, e eles finalmente perceberam que eu estava ali.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
      ],
      choices: [
        { text: "Próximo", nextScene: 12 }
      ]
    },
    {
      id: 12,
      speaker: "Yasmin - Pensamento",
      text: "O que aconteceu depois foi estranho — ambos ficaram espantados ao me ver. Era como se eu tivesse interrompido algo importante. Meu coração gelou por um instante, e eu fiquei parada ali, sentindo que alguma coisa estava muito errada.",
      background: "../img/background/salaescola2.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
        { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" },
        { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao2.png" }
      ],
      choices: [
        { text: "Será que ele está interessado nela! Vou deixar eles sozinhos (ignorá-los)", nextScene: 13 }, //Rota do mentira 1 persuadir (dps troca de tiver tempo) hoje n é o dia!!!!!!
        { text: "Que estranho, eles geralmente não ficam tão próximos assim (confrontá-los)", nextScene: 13 } //Rota da mentira 2 persuadir 
      ]
    },

    //ROTA DA MENTIRA 2 PERSUADIR
    {
      id: 13,
      speaker: "Yasmin - Pensamento",
      text: "Sigo para a minha carteira, tentando me concentrar. Arrumo meus cadernos e preparo o material para a primeira aula, forçando-me a deixar de lado a sensação estranha que tive mais cedo.",
      background: "../img/background/corredorescola2.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 14 }
      ]
    },
    {
      id: 14,
      speaker: "Yasmin - Pensamento",
      text: "O dia passa sem grandes novidades, até o momento de ir embora. No final do dia, encontro Jonathan no corredor.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 15 }
      ]
    },
    {
      id: 14,
      speaker: "Yasmin",
      text: "Jonathan, você quer ir embora comigo de novo hoje? Ele dá um sorriso educado e balança a cabeça.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
        { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-chamando1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 15 }
      ]
    },
    {
      id: 15,
      speaker: "Jonathan",
      text: "Hoje não posso, Yasmin. Vou ficar preso com o pessoal do grêmio.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" } // Deposi se tiver img dele falando
      ],
      choices: [
        { text: "Próximo", nextScene: 16 }
      ]
    },
    {
      id: 16,
      speaker: "Yasmin - Pensamento",
      text: "Sinto um pequeno desapontamento, mas faço o possível para esconder isso. Nos despedimos, e eu vou para casa sozinha. Assim que abro a porta de casa, sinto algo diferente. A casa está estranhamente silenciosa, o que me deixa desconfortável.",
      background: "../img/background/casa-salaestar.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 17 }
      ]
    },
    {
      id: 17,
      speaker: "Yasmin - Pensamento",
      text: "Vou direto para o meu quarto, tentando ignorar o nervosismo. Mas, ao abrir a porta, meu coração quase para. Minha mãe está ali, parada, encarando a parede coberta de post-its.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 18 }
      ]
    },
    {
      id: 18,
      speaker: "Yasmin",
      text: "Mãe, o jantar já está pronto? Ela não responde. Nem sequer tira os olhos dos post-its.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" },
        { name: "Mãe", image: "../img/characters/Mae/mae_seria.png" } 
      ],
      choices: [
        { text: "Próximo", nextScene: 19 }
      ]
    },
    {
      id: 19,
      speaker: "Mãe",
      text: "O que é isso, Yasmin?",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Mãe", image: "../img/characters/Mae/mae_seria.png" } 
      ], 
      choices: [
        { text: "Próximo", nextScene: 20 }
      ]
    },
    {
      id: 20,
      speaker: "Yasmin - Pensamento",
      text: "Congelo por um segundo, sem saber o que dizer. Tento disfarçar o nervosismo e lanço a primeira coisa que me vem à cabeça.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" }
      ],
      choices: [
        { text: "São apenas alguns rascunhos que fiz pra aula de artes", nextScene: 21 }, //Rota Karen persuadir
        { text: "São apenas desenhos mãe,, algumas ideias aleatorias", nextScene: 34 } //Rota Diretor persuadir
      ]
    },

    //ROTA KAREN PERSUADIR
    {
      id: 21,
      speaker: "Yasmin",
      text: "Olhei diretamente para minha mãe, tentando parecer calma.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      ],
      choices: [
        { text: "Próximo", nextScene: 22 }
      ]
    },
    {
      id: 22,
      speaker: "Yasmin",
      text: "Esses post-its são só rascunhos para um trabalho de artes que eu tenho que fazer.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 23 }
      ]
    },
    {
      id: 23,
      speaker: "Mãe",
      text: "Ela arqueou as sobrancelhas, desconfiada, e eu sabia que precisava desviar o foco dela.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Mãe", image: "../img/characters/Mae/mae_seria2.png" } 
      ],
      choices: [
        { text: "Próximo", nextScene: 24 }
      ]
    },
    {
      id: 24,
      speaker: "Yasmin",
      text: "Mas o que você estava fazendo aqui, mexendo nas minhas coisas sem permissão?",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 25 }
      ]
    },
    {
      id: 25,
      speaker: "Yasmin - Pensamento",
      text: "Ela suspirou, um pouco irritada, mas pareceu levar a pergunta a sério.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Mãe", image: "../img/characters/Mae/mae_seria2.png" } 
      ],
      choices: [
        { text: "Próximo", nextScene: 26 }
      ]
    },
    {
      id: 26,
      speaker: "Mãe",
      text: "Eu estava limpando o quarto, só isso. Fiquei surpresa com a quantidade de post-its na parede.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Mãe", image: "../img/characters/Mae/mae_seria2.png" } 
      ],
      choices: [
        { text: "Próximo", nextScene: 27 }
      ]
    },
    {
      id: 27,
      speaker: "Yasmin",
      text: "Tá, então pode terminar logo? Eu preciso do quarto pra estudar e terminar esses rascunhos. Eles são importantes. Tentei não parecer aliviada e mantive um tom firme",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 28 }
      ]
    },
    {
      id: 28,
      speaker: "Yasmin - Pensamento",
      text: "Ela pareceu aceitar minha resposta, mesmo que de forma relutante. Saiu do quarto e eu fiquei sozinha, esperando que ela terminasse a limpeza.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Mãe", image: "../img/characters/Mae/mae_triste.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 29 }
      ]
    },
    {
      id: 29,
      speaker: "Yasmin - Pensamento",
      text: "Quando ouvi a porta da frente se fechar, trancando o quarto atrás de mim, sentei-me na cama e olhei para a parede. Precisava encontrar pistas, precisava entender mais sobre aquele culto que tanto me perturbava nos sonhos.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" } 
      ],
      choices: [
        { text: "Próximo", nextScene: 30 }
      ]
    },
    {
      id: 30,
      speaker: "Yasmin - Pensamento",
      text: "Comecei a listar mentalmente lugares e pessoas que talvez pudessem me ajudar a descobrir mais sobre isso. Enquanto eu estava imersa nos meus próprios pensamentos, do outro lado da casa, minha mãe não parecia tão convencida. Quando terminei de ouvir seus passos no corredor, soube que algo estava errado.",
      background: "../img/background/black.jpeg",
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
      text: "Ela estava preocupada, e eu sabia que minha desculpa tinha sido frágil. Mais tarde, ouvi o telefone tocando. A princípio, não dei muita atenção, mas algo na minha cabeça me disse que era sobre mim. Minha mãe estava no telefone com alguém, falando em voz baixa. Parecia apreensiva.",
      background: "../img/background/black.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 32 }
      ]
    },
    {
      id: 32,
      speaker: "Yasmin - Pensamento",
      text: "Depois de alguns minutos, ela desligou, e só então percebi que tinha ligado para a escola. Uma sensação de pânico tomou conta de mim, mas tentei não pensar no pior. O que será que ela contou ao diretor?",
      background: "../img/background/black.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 33 }
      ]
    },
    {
      id: 33,
      speaker: "Yasmin - Pensamento",
      text: "Eu sabia que, no fundo, minha mãe não acreditava que aqueles post-its eram apenas para um trabalho de escola. Ela estava tentando entender o que eu não tinha coragem de explicar, e isso me dava um nó na garganta.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" }
      ],
      choices: [
        { text: "Próximo", nextChapter: "cap4(2).html" }
      ]
    },


    //ROTA DIRETOR PERSUADIR
    {
      id: 34,
      speaker: "Yasmin - Pensamento",
      text: "Eu tentei acalmar minha mãe, dizendo que eram só rascunhos, que eu estava apenas desenhando algumas ideias aleatórias. Mas... o que eu realmente sentia era um desconforto crescente olhando para aquele símbolo, e todos aqueles post-its espalhados pelo meu quarto. Algo não estava certo.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
        { name: "Mãe", image: "../img/characters/Mae/mae_preucupada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 35 }
      ]
    },
    {
      id: 35,
      speaker: "Mãe",
      text: "Yasmin, você está bem? Eu não consigo entender por que você está fazendo esses desenhos. O que significa aquele símbolo? Não me parece algo só de uma aula de arte...",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Mãe", image: "../img/characters/Mae/mae_preucupada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 36 }
      ]
    },
    {
      id: 36,
      speaker: "Yasmin",
      text: "Mãe, não se preocupe. São apenas alguns rascunhos. Acho que estou apenas tentando organizar minhas ideias para um projeto. Não tem nada de mais. Pode relaxar.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      ],
      choices: [
        { text: "Próximo", nextScene: 37 }
      ]
    },
    {
      id: 37,
      speaker: "Mãe",
      text: "Não sei, Yasmin... Isso não me parece só um desenho qualquer. Vou ligar para a escola, só para garantir que está tudo bem com você.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Mãe", image: "../img/characters/Mae/mae_preucupada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 38 }
      ]
    },
    {
      id: 38,
      speaker: "Yasmin - Pensamento",
      text: "Eu ouvi o barulho do telefone sendo pego e logo vi ela discando o número da escola. Eu podia sentir meu coração batendo mais forte. Ela nunca tinha feito isso antes... Será que ela estava começando a desconfiar de algo?",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 39 }
      ]
    },
    {
      id: 39,
      speaker: "Mãe (ao telefone)",
      text: "Olá, bom dia. Aqui é a mãe da Yasmin. Eu estou preocupada, pois minha filha tem feito uns desenhos estranhos, e queria saber se o tema das aulas de arte tem algo relacionado a isso. Pode me ajudar?",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 40 }
      ]
    },
    {
      id: 40,
      speaker: "Diretor (ao telefone)",
      text: "Ah, claro, senhora. Não se preocupe. Já vou conversar com a professora de artes para entender melhor o que aconteceu. Pode ficar tranquila, Yasmin está indo bem nas aulas, não há nada de preocupante.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 41 }
      ]
    },
    {
      id: 41,
      speaker: "Mãe (ao telefone)",
      text: "Ah, que bom... Então, está tudo bem mesmo?",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 42 }
      ]
    },
    {
      id: 42,
      speaker: "Diretor (ao telefone)",
      text: "Sim, senhora. Vou me assegurar de que tudo esteja certo. Um ótimo dia para a senhora e para Yasmin.",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 43 }
      ]
    },
    {
      id: 43,
      speaker: "Yasmin - Pensamento",
      text: "Ela desliga o telefone. Eu me senti um pouco aliviada, mas algo ainda me incomodava... O diretor estava tão tranquilo. Será que ele realmente sabia o que estava acontecendo?",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 44 }
      ]
    },
    {
      id: 44,
      speaker: "Yasmin - Pensamento",
      text: "Eu não podia deixar isso passar. Algo estava acontecendo e eu precisava descobrir o que realmente estava por trás de tudo aquilo, antes que fosse tarde demais...",
      background: "../img/background/quartoyasmin.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
      ],
      choices: [
        { text: "Finalizar", nextScene: 45 }
      ]
    },

    {
      id: 45,
      speaker: "Yasmin - Pensamento",
      text: "... no dia seguinte",
      background: "../img/background/black.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 46 }
      ]
    },
    {
      id: 46,
      speaker: "Jonathan",
      text: "Yasmin, o diretor está te procurando.",
      background: "../img/background/frenteescolaantesportas.jpeg",
      characters: [
        { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" },
      ],
      choices: [
        { text: "Próximo", nextScene: 47 }
      ]
    },
    {
      id: 47,
      speaker: "Yasmin",
      text: "Procurando? Por quê?",
      background: "../img/background/frenteescolaantesportas.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
      ],
      choices: [
        { text: "Próximo", nextScene: 48 }
      ]
    },
    {
      id: 48,
      speaker: "Jonathan",
      text: "Não faço ideia, mas ele parecia apressado quando perguntou por você. Acho melhor ir até lá no fim da aula e ver o que está acontecendo.",
      background: "../img/background/frenteescolaantesportas.jpeg",
      characters: [
        { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 49 }
      ]
    },
    {
      id: 49,
      speaker: "Yasmin - Pensamento",
      text: "Jonathan parece preocupado, mas não diz mais nada. Por um instante, fico desconfiada da maneira como ele fala, mas resolvo apenas assentir.",
      background: "../img/background/frenteescolaantesportas.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 50 }
      ]
    },
    {
      id: 50,
      speaker: "Yasmin",
      text: "Tudo bem. Vou ver o que ele quer.",
      background: "../img/background/frenteescolaantesportas.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
        { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-serio.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 51 }
      ]
    },
    {
      id: 51,
      speaker: "Yasmin - Pensamento",
      text: "Depois de me despedir de Jonathan e dos outros, caminho lentamente até a sala em que o diretor estava. Meu coração bate um pouco mais rápido, como se pressentisse que algo estava fora do lugar. Chego à sala e bato na porta.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 52 }
      ]
    },
    {
      id: 52,
      speaker: "Yasmin",
      text: "Com licença, o diretor está?",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 53 }
      ]
    },
    {
      id: 53,
      speaker: "Diretor",
      text: "Entre, Yasmin.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 54 }
      ]
    },
    {
      id: 54,
      speaker: "Yasmin - Pensamento",
      text: "Abro a porta e entro devagar. O diretor está sentado atrás da mesa, com um sorriso estranho no rosto. Ele me indica a cadeira em frente.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" },
        { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 55 }
      ]
    },
    {
      id: 55,
      speaker: "Diretor",
      text: "Sente-se, por favor.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 56 }
      ]
    },
    {
      id: 56,
      speaker: "Yasmin - Pensamento",
      text: "Faço o que ele diz, tentando não demonstrar nervosismo.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 57 }
      ]
    },
    {
      id: 57,
      speaker: "Yasmin",
      text: "O senhor queria falar comigo?",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
        { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 58 }
      ]
    },

    {
      id: 58,
      speaker: "Diretor",
      text: "Sim, Yasmin. Eu soube que você anda... curiosa sobre certos assuntos da escola.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Diretor", image: "../img/characters/Diretor/diretor-serio2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 59 }
      ]
    },
    {
      id: 59,
      speaker: "Yasmin - Pensamento",
      text: "Meu estômago revira. Ele sabe. Ele sabe que eu vi Karen naquela sala.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 60 }
      ]
    },
    {
      id: 60,
      speaker: "Yasmin",
      text: "Eu não sei do que o senhor está falando.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 61 }
      ]
    },
    {
      id: 61,
      speaker: "Diretor",
      text: "Ah, Yasmin, eu acho que sabe. Certas coisas não devem ser investigadas, sabe? Há motivos para que existam segredos, e é melhor para todos que eles continuem assim.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Diretor", image: "../img/characters/Diretor/diretor-serio2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 62 }
      ]
    },
    {
      id: 62,
      speaker: "Yasmin",
      text: "Se o senhor está falando do que acho que está, não posso simplesmente ignorar. Tem algo errado acontecendo aqui.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 63 }
      ]
    },
    {
      id: 63,
      speaker: "Diretor",
      text: "'Errado' é uma palavra forte, Yasmin. O que você viu é apenas uma parte de algo maior. Algo que você ainda não entende, mas que, se interferir, pode causar problemas para muita gente. Inclusive para você.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Diretor", image: "../img/characters/Diretor/diretor-serio.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 64 }
      ]
    },
    {
      id: 64,
      speaker: "Yasmin",
      text: "Problemas... como assim?",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 65 }
      ]
    },
    {
      id: 65,
      speaker: "Diretor",
      text: "Digamos que certas coisas são melhores deixadas como estão. Você tem um futuro brilhante pela frente, Yasmin. Não seria uma pena colocar isso em risco por algo que não te diz respeito?",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 66 }
      ]
    },
    {
      id: 66,
      speaker: "Yasmin - Pensamento",
      text: "Minha mente grita para que eu diga alguma coisa, que eu o enfrente. Mas suas palavras plantam dúvidas em mim. E se ele estiver certo? E se ninguém acreditar em mim ou se eu me meter em algo que não posso controlar?",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 67 }
      ]
    },
    {
      id: 67,
      speaker: "Yasmin",
      text: "Então... o que o senhor quer que eu faça?",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 68 }
      ]
    },
    {
      id: 68,
      speaker: "Diretor",
      text: "Apenas continue com sua vida. Foque nos estudos, nos seus amigos. Deixe essas... distrações de lado.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico2.png"}
      ],
      choices: [
        { text: "Próximo", nextScene: 69 }
      ]
    },
    {
      id: 69,
      speaker: "Yasmin - Pensamento",
      text: "Fico em silêncio, apenas assentindo levemente. Ele me observa por mais alguns instantes antes de acenar com a cabeça.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 70 }
      ]
    },
    {
      id: 70,
      speaker: "Diretor",
      text: "Pode ir agora, Yasmin. Lembre-se do que conversamos.",
      background: "../img/background/salaescola1.jpeg",
      characters: [
        { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 71 }
      ]
    },
    {
      id: 71,
      speaker: "Yasmin - Pensamento",
      text: "Saio da sala com o peito apertado e uma sensação sufocante de impotência. Suas palavras ecoam na minha cabeça enquanto caminho pelo corredor vazio.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 72 }
      ]
    },
    {
      id: 72,
      speaker: "Yasmin - Pensamento",
      text: "Talvez... talvez seja melhor esquecer. Talvez... eu realmente não possa fazer nada.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
      ],
      choices: [
        { text: "Próximo", nextScene: 73 }
      ]
    },
    {
      id: 73,
      speaker: "Yasmin - Pensamento",
      text: "Mas, no fundo, sei que essa decisão vai me assombrar.",
      background: "../img/background/corredorescola.jpeg",
      characters: [
        { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
      ],
      choices: [
        { text: "Próximo", nextChapter: "Final(2.2).html"}
      ]
    }
  ];

//--------------------------------------------------------------------------

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
