const scenes = [

    {
        id: 1,
        speaker: "Yasmin - Pensamento",
        text: "Já fazem alguns dias desde aquela gravação e até agora nada de novo.",
        background: "../img/background/salaescola2.jpeg",
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
        text: "E a pior parte é que esse sumiço misterioso só me levanta mais dúvidas...",
        background: "../img/background/salaescola2.jpeg",
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
        text: "Essa aula chata também não ajuda em nada, vou tirar um cochilo que ganho mais.",
        background: "../img/background/salaescola2.jpeg",
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
        text: "EITA! Olha a hora!",
        background: "../img/background/salaescola2.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 5 }
        ]
      },
      {
        id: 5,
        speaker: "Yasmin - Pensamento",
        text: "Preciso ir embora agora!",
        background: "../img/background/salaescola2.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 6 }
        ]
      },
      {
        id: 6,
        speaker: "Desconhecido",
        text: "mnviefnfjrgre",
        background: "../img/background/corredorescola.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 7}
        ]
      },
      {
        id: 7,
        speaker: "Yasmin - Pensamento",
        text: "O que será que são essas vozes?",
        background: "../img/background/corredorescola.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 8 }
        ]
      },
      {
        id: 8,
        speaker: "Yasmin - Pensamento",
        text: "Vou investigar, vai que encontro mais alguma coisa...",
        background: "../img/background/corredorescola.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 9 }
        ]
      },
      {
        id: 9,
        speaker: "Desconhecido",
        text: "Karen precisa se elevar, fiquei sabendo que maioral não se orgulha nada das atitudes que ela vêm tendo.",
        background: "../img/background/black.png",
        characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 10 }
        ]
      },
      {
        id: 10,
        speaker: "Desconhecido 2",
        text: "Logo, todos iremos nos elevar assim como maioral, Que nos garantiu que trará boas recompensas.",
        background: "../img/background/black.png",
        characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 11 }
        ]
      },
      {
        id: 11,
        speaker: "Desconhecido",
        text: "Maioral é o nosso diretor, certo?",
        background: "../img/background/black.png",
        characters: [
          { name: "Desconhecido", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 12 }
        ]
      },
      {
        id: 12,
        speaker: "Desconhecido 2",
        text: "Isso. Se repetir isso em voz alta, eu te quebro os dentes, entendeu?! ",
        background: "../img/background/black.png",
        characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 13 }
        ]
      },
      {
        id: 13,
        speaker: "Yasmin - Pensamento",
        text: "ok, já tenho provas suficientes.",
        background: "../img/background/corredorescola.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 14 }
        ]
      },{
        id: 13,
        speaker: "Yasmin - Pensamento",
        text: "Hora de ir pra casa!",
        background: "../img/background/corredorescola.jpeg",
        characters: [
             { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 14 }
      ]
      },
      {
        id: 14,
        speaker: "Yasmin - Pensamento",
        text: "áudio, papel e confissões. Finalmente tenho todas as provas.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 15 }
        ]
      },
      {
        id: 15,
        speaker: "Yasmin - Pensamento",
        text: "Agora preciso pensar como atingí-los de vez.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
          { text: "Próximo", nextChapter: "cap5(good).html" }
        ]
      }
];

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
