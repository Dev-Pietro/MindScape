const scenes = [
  {
    id: 1,
    speaker: "Yasmin - Pensamento",
    text: "Eu me afastei cada vez mais de todos, distanciando-me sem querer, mas ao mesmo tempo, sem saber o que mais fazer.",
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
    text: "Naquela noite, deitada na minha cama, me sentia completamente só, com uma pressão crescente no peito. Não sabia mais em quem confiar, exceto em mim mesma.",
    background: "../img/background/quartoyasmin.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 3 }
    ]
  },
  {
    id: 3,
    speaker: "Yasmin - Pensamento",
    text: "Com esses pensamentos rodando na minha cabeça, fui consumida pela exaustão. Fechei os olhos e, mesmo tentando encontrar uma solução, adormeci.",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 4 }]
  },
  {
    id: 4,
    speaker: "",
    text: "...",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 5 }]
  },
  {
    id: 5,
    speaker: "Narrador",
    text: "No dia seguinte.",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 6 }]
  },
  {
    id: 6,
    speaker: "Karen",
    text: "Oi, Yasmin! Posso te acompanhar até em casa hoje?",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz8.png" }
    ],
    choices: [
      { text: "Próximo", nextScene: 7 }
    ]
  },
  {
    id: 7,
    speaker: "Yasmin",
    text: "Claro, Karen. Adoraria.",
    background: "../img/background/corredorescola.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 8 }]
  },
  {
    id: 8,
    speaker: "Karen",
    text: "Você já pensou em alguma forma de desmascarar o Jonathan? Eu sei que algo está estranho com ele.",
    background: "../img/background/rua.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_seria2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 9 }]
  },
  {
    id: 9,
    speaker: "Yasmin",
    text: "Não, ainda não pensei em nada... mas você tem alguma ideia?",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 10 }]
  },
  {
    id: 10,
    speaker: "Karen",
    text: "E se a gente tentasse observar ele depois da escola? Quem sabe ele faz algo suspeito que nos ajude a entender o que está acontecendo.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 11 }]
  },
  {
    id: 11,
    speaker: "Yasmin",
    text: "Eu... acho que não seria seguro, Karen. Eu posso lidar com isso sozinha, realmente.",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-seria2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 12 }]
  },
  {
    id: 12,
    speaker: "Karen",
    text: "Tudo bem, Yasmin. Mas, se mudar de ideia, você sabe onde me encontrar, né?",
    background: "../img/background/rua1.jpeg",
    characters: [
      { name: "Karen", image: "../img/characters/Karen/karen-feliz6.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 13 }]
  },
  {
    id: 13,
    speaker: "Yasmin - Pensamento",
    text: "Nos despedimos e seguimos nossos caminhos. Quando eu a vi desaparecer na esquina, senti um peso enorme se instalar em meu peito. Eu estava começando a me afundar ainda mais nesse mistério, e não sabia como escapar dele.",
    background: "../img/background/rua2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-triste4.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 14 }]
  },
  {
    id: 14,
    speaker: "Narrador",
    text: "No dia seguinte na escola",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 15 }]
  },
  {
    id: 15,
    speaker: "Yasmin - Pensamento",
    text: "Quando cheguei na sala, estava tão cansada que mal conseguia manter os olhos abertos. O sono me consumia, e os pensamentos sobre o que fazer com Jonathan e o culto estavam me deixando ainda mais exausta.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 16 }]
  },
  {
    id: 16,
    speaker: "Yasmin - Pensamento",
    text: "O sono me consumia, e os pensamentos sobre o que fazer com Jonathan e o culto estavam me deixando ainda mais exausta",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 17 }]
  },
  {
    id: 17,
    speaker: "Yasmin",
    text: "Preciso descobrir algo mais sobre Jonathan",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 18 }]
  },
  {
    id: 18,
    speaker: "Yasmin - Pensamento",
    text: "Disse, tentando manter o foco. Mas logo, os meus olhos se fecharam e eu caí em um sono profundo.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 19 }]
  },
  {
    id: 19,
    speaker: "Yasmin - Pensamento",
    text: "...",
    background: "../img/background/black.png",
    characters: [
      { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 20 }]
  },

  //Quando acordei

  {
    id: 20,
    speaker: "Yasmin - Pensamento",
    text: "Quando acordei, percebi que a sala estava vazia, e uma sensação de pânico me tomou. Olhei para o relógio e vi que já estava atrasada para voltar para casa.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 21 }]
  },
  {
    id: 21,
    speaker: "Yasmin - Pensamento",
    text: "Me senti como se estivesse no meio de um pesadelo, o tipo de pesadelo que nunca acaba. Só falta aparecer um papel agora, pensei sarcasticamente.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 22 }]
  },
  {
    id: 22,
    speaker: "Yasmin - Pensamento",
    text: "E, como se fosse um sinal, meus olhos se fixaram em algo na mesa de Karen. O papel estava lá, à minha frente, inofensivo à primeira vista, mas a sensação que ele me causou foi imediata.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 23 }]
  },
  {
    id: 23,
    speaker: "Yasmin - Pensamento",
    text: "Não queria acreditar no que estava vendo, mas lá estava ele, o símbolo. O símbolo do culto. O mesmo símbolo que aparecia nos meus sonhos, o mesmo símbolo que assombrava minha mente.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 24 }]
  },
  {
    id: 24,
    speaker: "Yasmin - Pensamento",
    text: " A certeza de que algo estava errado, que eu não podia mais confiar em ninguém, tomou conta de mim.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 25 }]
  },
  {
    id: 25,
    speaker: "Yasmin - Pensamento",
    text: "O medo, a dúvida, e o desespero se misturaram em um único pensamento: eu estava completamente sozinha nisso. Não pode ser verdade.",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada2.png" }
    ],
    choices: [{ text: "Próximo", nextScene: 26 }]
  },
  {
    id: 26,
    speaker: "Yasmin - Pensamento",
    text: "Karen também está envolvida nisso?",
    background: "../img/background/salaescola2.jpeg",
    characters: [
      { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-assustada2.png" }
    ],
    choices: [
      { text: "Não pode ser?", nextChapter: "cap6(laranja).html" },
      { text: "SERÁ?!", nextChapter: "cap6(laranja).html" },
      { text: "Não pode!", nextChapter: "cap6(laranja).html" }
    ]
  },
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
