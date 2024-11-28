const scenes = [
  {
    id: 1,
    speaker: "Yasmin - Pensamento",
    text: "Os corredores pareciam mais frios e vazios do que o normal. O som dos passos de Karen ecoava à distância, e eu, movida por uma mistura de curiosidade e desconfiança, comecei a segui-la.",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 2 }]
  },
  {
    id: 2,
    speaker: "Yasmin - Pensamento",
    text: "Meu coração batia acelerado, e cada passo parecia me levar mais perto de uma verdade que eu não sabia se estava preparada para enfrentar. Eu não posso mais confiar em ninguém. Só eu posso descobrir o que realmente está acontecendo.",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 3 }]
  },
  {
    id: 3,
    speaker: "Yasmin - Pensamento",
    text: "Meu peito estava pesado. A imagem de Karen sendo parte disso tudo me atormentava, mas a possibilidade de ela ser inocente era ainda pior. E se eu estivesse errada?",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 4 }]
  },
  {
    id: 4,
    speaker: "Yasmin - Pensamento",
    text: "Quando Karen entrou em uma sala no final do corredor, hesitei por um instante. Meu instinto dizia para ir embora, mas algo mais forte me empurrou para frente. Eu precisava saber.",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 5 }]
  },
  {
    id: 5,
    speaker: "Yasmin - Pensamento",
    text: "Empurrei a porta com cuidado, meu olhar se ajustando à penumbra da sala. Lá estava Karen, parada no centro, com um sorriso no rosto que me fez gelar.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz3.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 6 }]
  },
  {
    id: 6,
    speaker: "Karen",
    text: "Finalmente.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz3.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 7 }]
  },
  {
    id: 7,
    speaker: "Yasmin - Pensamento",
    text: "Congelada, tentei entender o que ela queria dizer. Mas antes que eu pudesse reagir, ela deu um passo à frente, seu tom calmo e quase triunfante.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 8 }]
  },
  {
    id: 8,
    speaker: "Karen",
    text: "Yasmin, você nunca percebeu, não é? Tudo isso... foi exatamente como planejamos. E agora... está acabado.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 9 }]
  },
  {
    id: 9,
    speaker: "Yasmin - Pensamento",
    text: "As palavras dela ecoaram em minha mente. O chão pareceu desaparecer debaixo dos meus pés. Planejamos? Quem mais está envolvido? Jonathan? O diretor? Como eu não vi isso antes?",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surtada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 10 }]
  },
  {
    id: 10,
    speaker: "Yasmin - Pensamento",
    text: "Meu corpo não conseguia se mover. Enquanto Karen continuava a falar, cada palavra era uma lâmina, cortando qualquer resquício de confiança ou esperança que eu ainda tinha.",
    background: "../img/background/salaescola1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 11 }]
  },
  {
    id: 11,
    speaker: "Yasmin - Pensamento",
    text: "Eu quis acreditar nela. Eu quis confiar. Mas a verdade é que minha desconfiança cegou até mesmo meu bom senso. Karen... me manipulou desde o início.",
    background: "../img/background/salaescola1.jpeg", //Se quiser dps pôr um efeito vinheta
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-chorando.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 12 }]
  },
  {
    id: 12,
    speaker: "Yasmin - Pensamento",
    text: "As peças começaram a se encaixar na minha cabeça, mas era tarde demais para agir.",
    background: "../img/background/salaescola1.jpeg", //Se quiser dps pôr um efeito vinheta
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-chorando.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 13 }]
  },
  {
    id: 13,
    speaker: "Karen",
    text: "Adeus, Yasmin.",
    background: "../img/background/salaescola1.jpeg", //Se quiser dps pôr um efeito vinheta
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz4.png" }
    ],
    choices: [{ text: "Fim", nextChapter: "Final(laranja).html"}]
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
