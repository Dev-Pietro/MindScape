const scenes = [
    {
        id: 1,
        speaker: "Yasmin - Pensamento",
        text: "Embora me sinta ansiosa, é isso o que preciso fazer.",
        background: "../img/background/frenteescola.jpeg",
        characters: [
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        ],
        choices: [
          { text: "Próximo", nextScene: 2 }
        ]
    },
    {
        id: 2,
        speaker: "Policial",
        text: "Bom dia, eu procuro pelo Diretor reponsável.",
        background: "../img/background/salaescola1.jpeg",
        characters: [
          { name: "Yasmin",   image: "../img/characters/Yasmin/yasmin-neutra1.png" },
          //{ name: "Policial", image: "../img/characters/Policial/policial.png"},
          { name: "Diretor",  image: "../img/characters/Diretor/diretor-serio.png"}
        ],
        choices: [
          { text: "Próximo", nextScene: 3 }
        ]
    },
    {
        id: 3,
        speaker: "Diretor",
        text: "Sou eu. Posso perguntar o que o senhor faz aqui? e você Yasmin?",
        background: "../img/background/salaescola2.jpeg",
        characters: [
         { name: "Diretor",  image: "../img/characters/Diretor/diretor-serio.png"}, 
         { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
         //{ name: "Policial", image: "../img/characters/Policial/policial.jpg"}
          
        ],
        choices: [
          { text: "Próximo", nextScene: 4 }
        ]
    },
  {
    id: 4,
    speaker: "Policial",
    text: "O senhor me acompanhe até a Delegacia por favor.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin",   image: "../img/characters/Yasmin/yasmin-neutra1.png" },
     // { name: "Policial", image: "../img/characters/Policial/policial.jpg"},
      { name: "Diretor",  image: "../img/characters/Diretor/diretor-serio.png"}
      
    ],
    choices: [
      { text: "Próximo", nextScene: 5 }
    ]
  },
  {
    id: 5,
        speaker: "Diretor",
        text: "Mas porque? Creio que nao há nenhum motivo para isto.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
         { name: "Diretor",  image: "../img/characters/Diretor/diretor-serio.png"}, 
          { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
        // { name: "Policial", image: "../img/characters/Provisorio/provisorio.jpg"}
          
        ],
        choices: [
          { text: "Próximo", nextScene: 6 }
        ]
  },
  {
    id: 6,
        speaker: "Policial",
        text: "O senhor está preso.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
        { name: "Yasmin",   image: "../img/characters/Yasmin/yasmin-neutra1.png" },
       // { name: "Policial", image: "../img\characters\Policialpolicial.jpg"},
        { name: "Diretor",  image: "../img/characters/Diretor/diretor-serio.png"}
          
        ],
        choices: [
          { text: "Próximo", nextChapter: "finalgood.html" }
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
