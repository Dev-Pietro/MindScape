const scenes = [
  {
    id: 1,
    speaker: "Yasmin - Pensamento",
    text: "O caminho para casa naquele final de tarde estava silencioso, e por um breve momento, uma sensação estranha de alívio me tomou. Karen… ela ainda estava ao meu lado, mesmo que eu tivesse mentido para ela. Isso me fazia me sentir um pouco mais leve, mas ao mesmo tempo, um peso enorme pressionava meu peito.",
    background: "../img/background/rua1.jpeg",
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
    text: "Eu sabia que estava mentindo, e isso me corroía por dentro. 'Por que eu sempre faço isso? Por que não posso ser sincera com ela?' Pensamentos como esse me perseguiram enquanto eu andava para casa.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 3 }
    ]
  },
  {
    id: 3,
    speaker: "Yasmin - Pensamento",
    text: "Eu tinha alguém que realmente se importava comigo, mas o que eu estava fazendo com isso? Estava mentindo para a única pessoa em quem eu realmente confiava. Eu me perguntava até quando conseguiria continuar assim, mantendo as aparências, escondendo a verdade.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 4 }
    ]
  },
  {
    id: 4,
    speaker: "Narrador",
    text: "Na manhã seguinte, ao acordar, o mundo parecia mais cinza. A escuridão das noites sem dormir ainda estava presa em sua mente. Yasmin desceu até a cozinha, onde encontrou seu pai tomando café.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
      { name: "Pai", image: "../img/characters/Pai/pai-falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 5 }
    ]
  },
  {
    id: 5,
    speaker: "Pai",
    text: "Você dormiu bem? E aqueles pesadelos… voltaram?",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Pai", image: "../img/characters/Pai/pai-falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 6 }
    ]
  },
  {
    id: 6,
    speaker: "Yasmin",
    text: "Não, não tive mais aqueles sonhos.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 7 }
    ]
  },
  {
    id: 7,
    speaker: "Pai",
    text: "Você parece meio cabisbaixa, Yasmin. Está tudo bem?",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Pai", image: "../img/characters/Pai/pai-falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 8 }
    ]
  },
  {
    id: 8,
    speaker: "Yasmin",
    text: "Eu estou bem. Você não precisa se preocupar.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 9 }
    ]
  },
  {
    id: 9,
    speaker: "Pai",
    text: "Eu só quero que você saiba que, se precisar de ajuda, eu estarei aqui. Você só precisa ser sincera comigo, Yasmin. Se precisar de ajuda, é só me pedir.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Pai", image: "../img/characters/Pai/pai-falando.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 10 }
    ]
  },
  {
    id: 10,
    speaker: "Yasmin",
    text: "Pai… você já ouviu falar de… um culto? Ou algo assim? Algo que as pessoas, talvez, estejam fazendo sem que a gente perceba?",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 11 }
    ]
  },
  {
    id: 11,
    speaker: "Pai",
    text: "Não sei… Nunca ouvi falar de nada assim, Yasmin. Mas se você acha que tem algo errado, e se isso estiver te afetando, você tem que me contar. Não importa o que seja. Eu estou aqui para você.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Pai", image: "../img/characters/Pai/pai-falando2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 12 }
    ]
  },
  {
    id: 12,
    speaker: "Narrador",
    text: "Yasmin sente uma pontada no peito. As palavras de seu pai são reconfortantes, mas ao mesmo tempo a deixam ainda mais pressionada pelas mentiras que carrega. Ela decide como responder.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [
      { text: "Você vai ajudar da mesma maneira que me ajudou da última vez?", nextScene: 13 },
      { text: "Obrigado, pai. Estou pondo minha fé em você.", nextScene: 15 }
    ]
  },
  {
    id: 13,
    speaker: "Yasmin",
    text: "Você vai ajudar da mesma maneira que me ajudou da última vez?",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 14 }
    ]
  },
  {
    id: 14,
    speaker: "",
    text: "...",
    background: "../img/background/nada.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/black.png" }
    ],
    choices: [
      { text: "Próximo", nextChapter: "cap5(laranja).html"}
    ]
  },
  {
    id: 15,
    speaker: "Yasmin - Pensamento",
    text: "Obrigado, pai. Estou pondo minha fé em você.",
    background: "../img/background/casa-salaestar.jpeg",
    characters: [{ name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" }],
    choices: [{ text: "Próximo",  nextScene: 16 }]
  },
  {
    id: 16,
    speaker: "Yasmin - Pensamento",
    text: "Depois de responder ao meu pai, voltei ao quarto e, apesar de toda a inquietação que tomava conta da minha mente, consegui adormecer.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [{ name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" }],
    choices: [{ text: "Próximo",  nextChapter: "cap5(azul).html" }]
  },
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
