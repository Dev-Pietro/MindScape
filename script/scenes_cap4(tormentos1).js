//roteiro do cap 1
const scenes = [
    {
        id: 1,
        speaker: "Yasmin - Pensamento",
        text: "Eu não consegui dormir. Passei a noite inteira presa em meus pensamentos, completamente sobrecarregada.",
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
        text: "O culto, as pessoas que eu achava que eram minhas amigas, tudo o que aconteceu até agora parecia um pesadelo sem fim.",
        background: "../img/background/black.png",
        characters: [
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-feliz1.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 3 }
        ]
    },
    {
        id: 3,
        speaker: "Yasmin - Pensamento",
        text: "Quando o dia chegou, eu já sabia que seria mais um desafio. Não consegui nem trocar de roupa. Vesti o uniforme de ontem mesmo, sem nem pensar.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 4 }
        ]
    },
    {
        id: 4,
        speaker: "Yasmin - Pensamento",
        text: "Quando cheguei na escola, foi como se tudo estivesse em um turbilhão, uma névoa que não se dissipava.",
        background: "../img/background/frenteescolamaislonge.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 5 }
        ]
    },
    {
        id: 5,
        speaker: "Yasmin - Pensamento",
        text: "Me sentei no meu lugar, tentando me esconder no fundo da sala. Não queria que ninguém me visse, mas era impossível esconder o que eu estava sentindo.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 6 }
        ]
    },
    {
        id: 6,
        speaker: "Karen",
        text: "Yasmin, o que aconteceu com você? Você foi para sua casa ontem ou aconteceu algo?",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_seria4.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 7 }
        ]
    },
    {
        id: 7,
        speaker: "Yasmin",
        text: "Eu… eu não sei, Karen. Não consegui dormir… não tô bem, sabe? Parece que minha cabeça… tá fora de controle.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_seria4.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 8 }
        ]
    },
    {
        id: 8,
        speaker: "Karen",
        text: "Mas você tá bem, Yasmin? Parece… sei lá, parece que você tá fora de si. Não tem nada que você queira falar?",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 9 }
        ]
    },
    {
        id: 9,
        speaker: "Yasmin",
        text: "Eu não sei, Karen. Eu tô... meio que perdendo a noção das coisas. Nada parece real, e eu não consigo entender o que tá acontecendo comigo.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 10 }
        ]
    },
    {
        id: 10,
        speaker: "Karen",
        text: "Yasmin, se precisar conversar, a gente pode tentar entender o que tá acontecendo. Mas você precisa se cuidar, tá? Não tá legal do jeito que você está.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" },
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 11 }
        ]
    },
    {
        id: 11,
        speaker: "Yasmin - Pensamento",
        text: "Eu assenti, sem saber o que dizer, sem saber o que pensar. Eu queria acreditar nela, queria confiar que tudo isso poderia ter uma explicação. ",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
        ],
        choices: [
            { text: "Próximo", nextScene: 12 }
        ]
    },
    {
        id: 12,
        speaker: "Yasmin - Pensamento",
        text: "Mas, no fundo, eu não sabia mais em quem ou no que acreditar.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" },
        ],
        choices: [
            { text: "Próximo", nextScene: 13 }
        ]
    },
    {
        id: 13,
        speaker: "Yasmin - Pensamento",
        text: "Karen ainda estava esperando minha resposta sobre como estou, o que devo responder ?",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" },
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
        ],
        choices: [
            { text: "Fique tranquila, só não dormi direito.", nextScene: 14 },
            { text: "Aconteceu nada não ! Só tropecei no caminho da escola hoje !", nextScene: 14 },
            { text: "... (Ignorar)", nextScene: 14 },
        ]
    },
    {
        id: 13,
        speaker: "Yasmin - Pensamento",
        text: "Karen ainda estava esperando minha resposta sobre como estou, o que devo responder ?",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" },
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
        ],
        choices: [
            { text: "Fique tranquila, só não dormi direito.", nextScene: 14 },
            { text: "Aconteceu nada não ! Só tropecei no caminho da escola hoje !", nextScene: 14 },
            { text: "... (Ignorar)", nextScene: 14 },
        ]
    },
    {
        id: 14,
        speaker: "Professor",
        text: "ALUNOS EM SEUS LUGARES, A AULA JA VAI COMEÇAR!!",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra1.png" },
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 15 },
        ]
    },
    {
        id: 15,
        speaker: "Yasmin - Pensamento",
        text: "Eu não consegui dormir. Meus pensamentos estavam fora de controle, como uma tempestade dentro de mim. O culto, os pesadelos, e aquela... coisa. Algo estava me perseguindo. Cada segundo parecia durar uma eternidade.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 16 }
        ]
    },
    {
        id: 16,
        speaker: "Yasmin - Pensamento",
        text: "A aula começou, mas eu mal conseguia me concentrar. Olhei para os cantos da sala, e então eu vi. A criatura. Não sabia o que era, mas estava ali, do lado de fora, observando-me através do vidro. Eu senti meu coração disparar.",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" } //fazer ela assustada talvez
        ],
        choices: [
            { text: "Próximo", nextScene: 17 }
        ]
    },
    {
        id: 17,
        speaker: "Yasmin - Pensamento",
        text: "Não... não pode ser real. Mas quando olhei novamente, lá estava ela. A figura, imóvel, com aqueles olhos penetrantes que pareciam me ver através da minha alma.",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" } //fazer ela assustada talvez
        ],
        choices: [
            { text: "Próximo", nextScene: 18 }
        ]
    },
    {
        id: 18,
        speaker: "Karen",
        text: "Yasmin, o que está acontecendo com você? Você está bem?",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 19 }
        ]
    },
    {
        id: 19,
        speaker: "Yasmin",
        text: "Eu... eu não sei, Karen. Tem... tem algo no vidro.",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 20 }
        ]
    },
    {
        id: 20,
        speaker: "Karen",
        text: "O quê? Yasmin, não tem nada la fora ué.",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_seria-remove.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 21 }
        ]
    },
    {
        id: 21,
        speaker: "Yasmin - Pensamento",
        text: "Eu respirei fundo e olhei novamente. A criatura estava lá, como uma sombra. Mas ao olhar para Karen, ela ainda estava olhando para mim com uma expressão confusa. Não havia mais ninguém lá fora.",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_seria-remove.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 22 }
        ]
    },
    {
        id: 22,
        speaker: "Yasmin - Pensamento",
        text: "O tempo parecia se arrastar. Eu olhava para o relógio, tentando manter a calma. Cada segundo parecia uma hora. A criatura não sumia. Ela estava ali, me observando.",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_seria-remove.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 23 }
        ]
    },
    {
        id: 23,
        speaker: "Yasmin",
        text: "Por que ela não vai embora?",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
            { name: "Karen", image: "../img/characters/Karen/Karen_seria-remove.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 24 }
        ]
    },
    {
        id: 24,
        speaker: "Yasmin - Pensamento",
        text: "O sinal finalmente soou, indicando o fim da aula. Mas eu mal consegui me mover. O intervalo tinha começado, mas meu corpo estava paralisado pela tensão.",
        background: "../img/background/salaescolabixo.png", //fazer a sala com criatura nos cantos
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" },
        ],
        choices: [
            { text: "Próximo", nextScene: 25 }
        ]
    },
    {
        id: 25,
        speaker: "Yasmin - Pensamento",
        text: "Eu saí da sala, tentando não olhar para trás. Mas a sensação de estar sendo seguida não desapareceu. Era como se ela estivesse atrás de mim, me observando a cada passo.",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 26 }
        ]
    },
    {
        id: 26,
        speaker: "Yasmin - Pensamento",
        text: "Olhei para trás. Nada. Mas a sensação... aquela sensação de estar sendo observada não ia embora. Não conseguia mais distinguir se era real ou se estava imaginando tudo.",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png" } //ela assustada
        ],
        choices: [
            { text: "Próximo", nextScene: 27 }
        ]
    },
    {
        id: 27,
        speaker: "Yasmin",
        text: "Não... não pode ser. Estou ficando maluca, não estou?",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" } //ela doida
        ],
        choices: [
            { text: "Próximo", nextScene: 28 }
        ]
    },
    {
        id: 28,
        speaker: "Yasmin - Pensamento",
        text: "Eu não conseguia mais focar em nada. A criatura parecia estar ali, sempre atrás de mim. Cada vez que eu olhava para trás, nada estava lá, mas eu sabia. Eu sentia.",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" } //ela doida
        ],
        choices: [
            { text: "Próximo", nextScene: 29 }
        ]
    },
    {
        id: 29,
        speaker: "Karen",
        text: "Yasmin, você está bem? Parece... que você está fora de si.",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" }, //ela doida
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 30 }
        ]
    },
    {
        id: 30,
        speaker: "Yasmin",
        text: "Eu só balancei a cabeça. Não conseguia responder, não conseguia explicar. Eu só queria correr. Só queria fugir de tudo.",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" }, //ela doida
            { name: "Karen", image: "../img/characters/Karen/Karen_neutra2.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 31 }
        ]
    },
    {
        id: 31,
        speaker: "Yasmin - Pensamento",
        text: "Quando o sinal tocou de novo, eu saí disparada para fora da escola. Mas não estava sozinha. Jonathan me viu correndo e tentou me alcançar. Ele gritou meu nome, mas eu não parei. Não conseguia parar.",
        background: "../img/background/frenteescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 32 }
        ]
    },
    {
        id: 32,
        speaker: "Jonathan",
        text: "Yasmin! Espera, o que está acontecendo? A Karen me falou que você estava estranha hoje!",
        background: "../img/background/frenteescolaantesportas.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando4.png" },
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao1.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 33 }
        ]
    },
    {
        id: 33,
        speaker: "Yasmin - Pensamento",
        text: "Eu não olhei para trás. Não queria. Só corria, sem parar. O medo, a euforia, a criatura... tudo misturado. O ar estava pesado, e eu sentia que ela estava me seguindo, mesmo quando não olhava.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 34 }
        ]
    },
    {
        id: 34,
        speaker: "Yasmin - Pensamento",
        text: "Finalmente, cheguei em casa e entrei correndo, trancando a porta do meu quarto atrás de mim. Fechei os olhos por um momento, tentando acalmar meu coração, mas não consegui. Eu estava completamente fora de mim.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" } //ela assustada ou doida
        ],
        choices: [
            { text: "Próximo", nextScene: 35 }
        ]
    },
    {
        id: 35,
        speaker: "Yasmin - Pensamento",
        text: "Sentei à mesa. Peguei uma folha de papel e comecei a desenhar. O símbolo... aquele símbolo que aparecia nos meus sonhos. A criatura. Eu tinha que entender. Eu precisava encontrar alguma lógica nisso tudo.",
        background: "../img/background/yasmin-desenhando.png", //fazer mesa com papel e uma mao com caneta perto
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 36 }
        ]
    },
    {
        id: 36,
        speaker: "Yasmin",
        text: "O que está acontecendo comigo... será que é real? Ou estou pirando de vez?",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 37 }
        ]
    },
    {
        id: 37,
        speaker: "Yasmin - Pensamento",
        text: "Cada traço que eu fazia parecia ganhar vida própria. O símbolo, com suas linhas tortas, parecia se mover, como se estivesse se desprendendo do papel. Eu tremia, mas não conseguia parar de desenhar.",
        background: "../img/background/yasmin-desenhando.png", //fazer mesa com papel e uma mao com caneta perto
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 38 }
        ]
    },  
    {
        id: 38,
        speaker: "Yasmin - Pensamento",
        text: "O que devo fazer? Estou cansada, porém mesmo com medo ainda possuo a curiosidade de saber como isso tudo se interliga...",
        background: "../img/background/yasmin-desenhando.png", //fazer mesa com papel e uma mao com caneta perto
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Dormir", nextScene: "" }, //fazer depois
            { text: "Não dormir", nextChapter: "cap5(limiar).html"}
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
  