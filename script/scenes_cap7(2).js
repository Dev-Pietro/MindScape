//Rota da Fé
const scenes = [
  {
    id: 1,
    speaker: "Yasmin - Pensamento",
    text: "No dia seguinte, esperei o intervalo para abordar Karen. Meu coração estava pesado, mas eu precisava fazer isso. Quando a vi sozinha no pátio, me aproximei.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
        ],
    choices: [
      { text: "Próximo", nextScene: 2 }
    ]
  },
  {
    id: 2,
    speaker: "Yasmin",
    text: "Karen, precisamos conversar. Agora.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada1.png" },
    ],
    choices: [
      { text: "Próximo", nextScene: 3 }
    ]
  },
  {
    id: 3,
    speaker: "Karen",
    text: "Conversar sobre o quê?",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 4 }
    ]
  },
  {
    id: 4,
    speaker: "Yasmin",
    text: "Sobre ontem. Eu vi você entrando naquela sala. Ouvi tudo. Sei que você faz parte daquele culto.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" },
      { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 5 }
    ]
  },
  {
    id: 5,
    speaker: "Yasmin - Pensamento",
    text: "Karen congelou por um segundo, mas logo se recompôs. Seus olhos estavam frios agora.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_seria4.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 6 }
    ]
  },
  {
    id: 6,
    speaker: "Karen",
    text: "Yasmin, você não sabe do que está falando. Não é o que parece.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_seria4.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 7 }
    ]
  },
  {
    id: 7,
    speaker: "Yasmin",
    text: "Então me explica! Porque o que eu ouvi foi assustador, Karen.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 8 }
    ]
  },
  {
    id: 8,
    speaker: "Karen",
    text: "O culto... é sobre manter a ordem, Yasmin. Você não entende. Fazemos isso para proteger as pessoas, para garantir que decisões importantes sejam tomadas corretamente.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 9 }
    ]
  },
  {
    id: 9,
    speaker: "Yasmin",
    text: "Karen, isso é loucura. Proteger as pessoas? Falando sobre adagas e evolução? Que tipo de bem vocês acham que estão fazendo?",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 10 }
    ]
  },
  {
    id: 10,
    speaker: "Karen",
    text: "Você não entende! E, se fizer algo, vai destruir tudo. Você destruir tudo, acabar com o relacionamento de diversas pessoas com nossa amizade, desse jeito vai sobrar até para o Jonathan... Vai arruinar tudo!",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 11 }
    ]
  },
  {
    id: 11,
    speaker: "Yasmin - Pensamento",
    text: "Fiquei sem palavras. As lágrimas nos olhos dela pareciam genuínas, mas eu sabia que ela estava jogando comigo. Manipulando meus sentimentos.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 12 }
    ]
  },
  {
    id: 12,
    speaker: "Yasmin",
    text: "Isso não é sobre você, Karen! Isso é maior, mais perigoso.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 13 }
    ]
  },
  {
    id: 13,
    speaker: "Karen",
    text: "Por favor, Yasmin. Não faz isso. Você não vai mudar nada, só vai estragar tudo e machucar todo mundo à sua volta, eu to te avisando, não faça besteira.",
    background: "../img/background/frenteescolaantesportas.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_seria4.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 14 }
    ]
  },
  {
    id: 14,
    speaker: "Yasmin - Pensamento",
    text: "Saí dali, sentindo o peso do mundo nas minhas costas. Cheguei em casa e passei horas refletindo sobre tudo.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 15 }
    ]
  },
  {
    id: 15,
    speaker: "Yasmin - Pensamento",
    text: "No final, decidi que talvez ela estivesse certa. Talvez fosse melhor deixar pra lá. Ficar em silêncio parecia a escolha mais segura... pelo menos por enquanto.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-reflexiva.png" }
    ],
    choices: [
      { text: "Quem sabe em uma próxima vez", nextChapter: "../Final(2.1).html" }
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
