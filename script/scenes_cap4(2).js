//Rota da Fé
const scenes = [
  {
    id: 1,
    speaker: "Yasmin - Pensamento",
    text: "Cheguei à escola me sentindo um caco. A noite foi horrível, com pensamentos confusos e um sono inquieto. Mas quando entrei na sala, algo estava diferente. Karen parecia estranha.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 2 }
    ]
  },
  {
    id: 2,
    speaker: "Karen",
    text: "Yasmin, o Diretor estava perguntando por você mais cedo. Ele parecia preocupado.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 3 }
    ]
  },
  {
    id: 3,
    speaker: "Yasmin",
    text: "Sério? Estranho... Bom, vou falar com ele no fim do dia. Obrigada por avisar.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
      { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 4 }
    ]
  },
  {
    id: 4,
    speaker: "Karen",
    text: "Tá tudo bem com você? Parece cansada.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 5 }
    ]
  },
  {
    id: 5,
    speaker: "Yasmin - Pensamento",
    text: "Hesitei. Parte de mim queria contar tudo, desabafar, mas algo me segurou. Então, escolhi esconder.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 6 }
    ]
  },
  {
    id: 6,
    speaker: "Yasmin",
    text: "Sim, tudo bem. Só uma noite ruim.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 7 }
    ]
  },
  {
    id: 7,
    speaker: "Karen",
    text: "Entendi. Bom, qualquer coisa, pode falar comigo, tá?",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz6.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 8 }
    ]
  },
  {
    id: 8,
    speaker: "Yasmin - Pensamento",
    text: "Karen se afastou, mas seu olhar ainda parecia misterioso. Eu sabia que algo não estava certo.",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 9 }
    ]
  },
  {
    id: 9,
    speaker: "Yasmin - Pensamento",
    text: "No fim do dia, cumpri minha promessa e me encontrei com o diretor na sala de aula. Bati na porta e esperei ouvir a voz grave do Diretor antes de entrar. Quando entrei, ele estava sentado atrás da mesa, com uma expressão que misturava seriedade e preocupação.",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 10 }
    ]
  },
  {
    id: 10,
    speaker: "Diretor",
    text: "Ah, Yasmin. Entre, por favor. Sente-se.",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico.png" } 
    ],
    choices: [
      { text: "Próximo", nextScene: 11 }
    ]
  },
  {
    id: 11,
    speaker: "Yasmin",
    text: "O senhor estava me procurando? O que aconteceu?",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico.png" } 
    ],
    choices: [
      { text: "Próximo", nextScene: 12 }
    ]
  },
  {
    id: 12,
    speaker: "Diretor",
    text: "Sim. Recebi uma ligação de alguém preocupado com você. Decidi chamá-la para entender melhor o que está acontecendo.",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 13 }
    ]
  },
  {
    id: 13,
    speaker: "Yasmin",
    text: "(franzindo a testa) Quem ligou? Foi minha mãe?",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }, 
      { name: "Diretor", image: "../img/characters/Diretor/diretor-sério.png" } 
    ],
    choices: [
      { text: "Próximo", nextScene: 14 }
    ]
  },
  {
    id: 14,
    speaker: "Diretor",
    text: "(desviando o olhar por um segundo) Prefiro não entrar em detalhes. Mas me diga, está tudo bem com você?",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Diretor", image: "../img/characters/Diretor/diretor-serio2.png" } 
    ],
    choices: [
      { text: "Próximo", nextScene: 15 }
    ]
  },
  {
    id: 15,
    speaker: "Yasmin",
    text: "(tentando parecer calma) Sim, tudo bem. Só... cansada, acho. A escola tem sido meio intensa.",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 16 }
    ]
  },
  {
    id: 16,
    speaker: "Diretor",
    text: " Yasmin, você sabe que pode contar comigo, certo? Se algo estiver te incomodando, quero que se sinta à vontade para falar. Estamos aqui para ajudar.",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Diretor", image: "../img/characters/Diretor/diretor-serio2.png" } 
    ],
    choices: [
      { text: "Próximo", nextScene: 17 }
    ]
  },
  {
    id: 17,
    speaker: "Yasmin - Pensamento",
    text: "Havia algo na maneira como ele falou que me deixou desconfortável. Ele parecia genuíno, mas ao mesmo tempo... como se soubesse de algo que eu não tinha dito.",
    background: "../img/background/salaescola1.jpeg", 
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
    text: "Obrigada, mas realmente está tudo bem.",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
      { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico2.png" } 
    ],
    choices: [
      { text: "Próximo", nextScene: 19 }
    ]
  },
  {
    id: 19,
    speaker: "Diretor",
    text: "Entendido. Se precisar de algo, saiba onde me encontrar.",
    background: "../img/background/salaescola1.jpeg", 
    characters: [
      { name: "Diretor", image: "../img/characters/Diretor/diretor-carismatico2.png" } 
    ],
    choices: [
      { text: "Próximo", nextScene: 20 }
    ]
  },
  {
    id: 20,
    speaker: "Yasmin - Pensamento",
    text: "Ele me deixou sair, mas eu estava mais desconfiada do que nunca.",
    background: "../img/background/corredorescola.jpeg", 
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextChapter: "cap5(2).html" }
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
