//roteiro do cap 1
const scenes = [
    {
        id: 1,
        speaker: "Yasmin - Pensamento",
        text: "Eu acordei de um pesadelo...",
        background: "../img/background/black.png",
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
        text: "...mesmo não dormindo acabei tendo um pesadelo acordada.",
        background: "../img/background/black.png",
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
        text: "Não conseguia me lembrar de todos os detalhes, mas podia sentir o peso dele na minha mente. O cansaço me consumindo, e eu sabia que mais uma noite sem dormir iria me levar à beira da loucura.",
        background: "../img/background/quartoyasmin.jpeg",
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
        text: "Sussurros, sempre sussurros… Eles estavam lá, chamando meu nome. Acordei e fiquei ouvindo, como se o som estivesse vindo de algum lugar profundo, como uma voz que se esconde nas sombras.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 5 }
        ]
    },
    {
        id: 5,
        speaker: "Yasmin - Pensamento",
        text: "Olhei pela fresta da porta, mas nada. Nada.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" } //ela coringada
        ],
        choices: [
            { text: "Próximo", nextScene: 6 }
        ]
    },
    {
        id: 6,
        speaker: "Yasmin - Pensamento",
        text: "Eu fiquei ali por alguns segundos, respirando fundo, tentando entender o que estava acontecendo. 'São apenas meus pensamentos, só isso…' Eu me disse. Mas minha cabeça… minha cabeça estava tão cheia de ruídos, de figuras distorcidas e rostos que não deveriam estar ali.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" } //ela coringada
        ],
        choices: [
            { text: "Próximo", nextScene: 7 }
        ]
    },
    {
        id: 7,
        speaker: "Yasmin - Pensamento",
        text: "Eu vi os rostos. Eles estavam nas sombras.",
        background: "../img/background/sonho3.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 8 }
        ]
    },
    {
        id: 8,
        speaker: "Yasmin",
        text: "Eu não vou conseguir fazer isso sozinha…",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //ela coringada
        ],
        choices: [
            { text: "Próximo", nextScene: 9 }
        ]
    },
    {
        id: 9,
        speaker: "Yasmin - Pensamento",
        text: "Mas como posso pedir ajuda? Eles estão sempre lá, não importa o que eu faça, como eu olhe… parece que está tudo se misturando na minha mente. O que era real? O que não era?",
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
        speaker: "Yasmin - Pensamento",
        text: "Quando o sol finalmente apareceu, me senti ainda pior. Não dormi nada, e a sensação de falta de controle estava me sufocando.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" } //ela coringada
        ],
        choices: [
            { text: "Próximo", nextScene: 11 }
        ]
    },
    {
        id: 11,
        speaker: "Yasmin - Pensamento",
        text: "Levantei, sem pensar muito. A sensação de ser observada me consumia, e o silêncio só parecia piorar.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" } //ela coringada
        ],
        choices: [
            { text: "Próximo", nextScene: 12 }
        ]
    },
    {
        id: 12,
        speaker: "Yasmin",
        text: "Eu estou sozinha... não é possível.",
        background: "../img/background/casa-salaestar.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" } //ela coringada
        ],
        choices: [
            { text: "Próximo", nextScene: 13 }
        ]
    },
    {
        id: 13,
        speaker: "Yasmin - Pensamento",
        text: "E eu sabia: precisava provar para mim mesma que nada disso era real. Eu tinha que acreditar que essas alucinações não passavam de um reflexo do meu medo, da minha mente quebrada.",
        background: "../img/background/rua2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png" } //ela coringada
        ],
        choices: [
            { text: "Próximo", nextScene: 14 }
        ]
    },
    {
        id: 14,
        speaker: "Yasmin - Pensamento",
        text: "Cheguei mais cedo na escola, andei pelos corredores, e a cada passo parecia que o mundo ao meu redor se distorcia um pouco mais.",
        background: "../img/background/corredorescola.jpeg",
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
        text: "De tanto andar acabei parando atrás da escola, onde ninguém jamais ia. Onde as coisas estranhas aconteciam. E foi lá que eu vi… a porta.",
        background: "../img/background/frenteescolaportas.jpeg", //fazer isso
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png" } //ela confusa
        ],
        choices: [
            { text: "Próximo", nextScene: 16 }
        ]
    },
    {
        id: 16,
        speaker: "Yasmin - Pensamento",
        text: "Mas… essa porta não estava aqui antes…",
        background: "../img/background/frenteescolaportas.jpeg", //fazer isso
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" } //ela confusa
        ],
        choices: [
            { text: "Próximo", nextScene: 17 }
        ]
    },
    {
        id: 17,
        speaker: "Yasmin",
        text: "Isso não é possível…",
        background: "../img/background/frenteescolaportas.jpeg", //fazer isso
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" } //ela surpresa/confusa
        ],
        choices: [
            { text: "Próximo", nextScene: 18 }
        ]
    },
    {
        id: 18,
        speaker: "Yasmin - Pensamento",
        text: "Eu me aproximei da porta, a maçaneta fria ao toque, como se tivesse estado ali há séculos. Meu coração batia forte, mas eu não conseguia parar de olhar para ela.",
        background: "../img/background/frenteescolaportas.jpeg", //fazer isso
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" } //ela assustada
        ],
        choices: [
            { text: "Próximo", nextScene: 19 }
        ]
    },
    {
        id: 19,
        speaker: "Yasmin - Pensamento",
        text: "Algo estava errado… tudo estava errado. Não consegui evitar.",
        background: "../img/background/frenteescolaportas.jpeg", //fazer isso
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png" } //ela preocupada
        ],
        choices: [
            { text: "Próximo", nextScene: 20 }
        ]
    },
    {
        id: 20,
        speaker: "Sussurro",
        text: "Você foi a escolhida… para a evolução.",
        background: "../img/background/black.png", 
        characters: [
            { name: "nada", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 21 }
        ]
    },
    {
        id: 21,
        speaker: "Yasmin",
        text: "Não… Não pode ser real!",
        background: "../img/background/frenteescolaportas.jpeg", //fazer
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" } //ela desesperada
        ],
        choices: [
            { text: "Próximo", nextScene: 22 }
        ]
    },
    {
        id: 22,
        speaker: "Yasmin - Pensamento",
        text: "Minha respiração se acelerou. Eu queria gritar, correr para longe, mas meus pés estavam presos ao chão.",
        background: "../img/background/frenteescolaportas.jpeg", //fazer
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png" } //ela inshock
        ],
        choices: [
            { text: "Próximo", nextScene: 23 }
        ]
    },
    {
        id: 23,
        speaker: "Yasmin - Pensamento",
        text: "Eu olhei para trás. Nada. Apenas o vazio. O mundo ao meu redor parecia começar a desabar, e eu já não sabia mais o que estava acontecendo.",
        background: "../img/background/frenteescolaportas.jpeg", //fazer
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando2.png" } //ela confusa
        ],
        choices: [
            { text: "Próximo", nextScene: 24 }
        ]
    },
    {
        id: 24,
        speaker: "Yasmin",
        text: "Eu… eu não posso mais…",
        background: "../img/background/frenteescolaportas.jpeg", //fundo da escola porem com bordas pretas, visao ficando turva
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 25 }
        ]
    },
    {
        id: 25,
        speaker: "Yasmin - Pensamento",
        text: "Minha visão começou a escurecer. Meu corpo não respondia, meus músculos pareciam ter se derretido, e tudo se apagou.",
        background: "../img/background/black.png",
        characters: [
            { name: "nada", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 26 }
        ]
    },
    {
        id: 26,
        speaker: "",
        text: "...",
        background: "../img/background/black.png",
        characters: [
            { name: "nada", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 27 }
        ]
    },
    {
        id: 27,
        speaker: "Yasmin - Pensamento",
        text: "Quando acordei, estava sentada em uma cadeira preta.",
        background: "../img/background/sala-branca.jpg", //mudar depois
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 28 }
        ]
    },
    {
        id: 28,
        speaker: "Yasmin - Pensamento",
        text: "A dor no meu corpo era insuportável, mas não conseguia mover os braços. Estava amarrada.",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 29 }
        ]
    },
    {
        id: 29,
        speaker: "Yasmin - Pensamento",
        text: "Tentei gritar, mas minha garganta parecia seca, como se tivesse ficado horas sem falar. O que estava acontecendo?",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //ou ela tensa
        ],
        choices: [
            { text: "Próximo", nextScene: 30 }
        ]
    },
    {
        id: 30,
        speaker: "Yasmin - Pensamento",
        text: "O ambiente ao meu redor era imaculado, todo branco, com paredes que pareciam não ter fim.",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //ou ela meio zonza observando
        ],
        choices: [
            { text: "Próximo", nextScene: 31 }
        ]
    },
    {
        id: 31,
        speaker: "Yasmin - Pensamento",
        text: "Mas as coisas que mais me incomodavam eram as pessoas que estavam ali com roupas longas e escuras, cobrindo seus rostos com máscaras.",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //colocar varias silhuetas de pessoas
        ],
        choices: [
            { text: "Próximo", nextScene: 32 }
        ]
    },
    {
        id: 32,
        speaker: "Vozes",
        text: "Você está apta para a evolução, não tenha medo... evolua para o próximo plano...",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //colocar varias silhuetas de pessoas
        ],
        choices: [
            { text: "Próximo", nextScene: 33 }
        ]
    },
    {
        id: 33,
        speaker: "Yasmin - Pensamento",
        text: "\"O quê?!\" Tentei falar, mas minha voz falhou, e meu corpo, mais uma vez, se recusava a me obedecer.",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //colocar varias silhuetas de pessoas
        ],
        choices: [
            { text: "Próximo", nextScene: 34 }
        ]
    },
    {
        id: 34,
        speaker: "Yasmin - Pensamento",
        text: "Eles falavam em uma voz lenta e constante, como se estivessem me guiando para algum lugar, como se já soubessem o que ia acontecer comigo.",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //colocar varias silhuetas de pessoas
        ],
        choices: [
            { text: "Próximo", nextScene: 35 }
        ]
    },
    {
        id: 35,
        speaker: "Yasmin - Pensamento",
        text: "\"Não! Eu não sou uma delas! Eu não sou uma escolhida!\" Mas eles não me ouviam.",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //colocar varias silhuetas de pessoas
        ],
        choices: [
            { text: "Próximo", nextScene: 36 }
        ]
    },
    {
        id: 36,
        speaker: "Yasmin",
        text: "De repente, uma espada foi posta sob minha nuca. Senti o fio frio contra minha pele.",
        background: "../img/background/sala-branca.jpg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //colocar varias silhuetas de pessoas
        ],
        choices: [
            { text: "Próximo", nextScene: 37 }
        ]
    },
    {
        id: 37,
        speaker: "Yasmin - Pensamento",
        text: "Antes que eu pudesse processar o que estava acontecendo, outra espada foi posta em minhas mãos. Uma lâmina afiada.",
        background: "../img/background/sala-branca-espada.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } //colocar varias silhuetas de pessoas
        ],
        choices: [
            { text: "Próximo", nextScene: 38 }
        ]
    },
    {
        id: 38,
        speaker: "Yasmin - Pensamento",
        text: "Eu sabia o que aquilo significava. A última escolha, o último destino que me aguardava.",
        background: "../img/background/sala-branca-espada.png", //colocar espada
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } 
        ],
        choices: [
            { text: "Próximo", nextScene: 39 }
        ]
    },
    {
        id: 38,
        speaker: "",
        text: "Seppuku",
        background: "../img/background/black.png", 
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } 
        ],
        choices: [
            { text: "Próximo", nextScene: 39 }
        ]
    },
    {
        id: 39,
        speaker: "Yasmin - Pensamento",
        text: "Eles queriam que eu tomasse a decisão, que eu \"evoluísse\", ou morresse tentando. Por que? Eles me fizeram isso… Mas… por quê?",
        background: "../img/background/sala-branca-espada.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } 
        ],
        choices: [
            { text: "Próximo", nextScene: 40 }
        ]
    },
    {
        id: 40,
        speaker: "Yasmin - Pensamento",
        text: "A pressão era insuportável.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } 
        ],
        choices: [
            { text: "Próximo", nextScene: 41 }
        ]
    },
    {
        id: 41,
        speaker: "Yasmin - Pensamento",
        text: "Eu sabia que não tinha escolha. O medo tomou conta de mim. Tentei me mover, tentei lutar, mas era tarde demais.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" } 
        ],
        choices: [
            { text: "Próximo", nextScene: 42 }
        ]
    },
    {
        id: 42,
        speaker: "Yasmin - Pensamento",
        text: "A lâmina nas minhas mãos parecia pesar mais a cada segundo.",
        background: "../img/background/sala-branca-espada.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "Próximo", nextScene: 43 }
        ]
    },
    {
        id: 43,
        speaker: "Yasmin - Pensamento",
        text: "Tudo o que eu queria era entender o que estava acontecendo, mas já não havia tempo.",
        background: "../img/background/sala-branca-escolha.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png" }
        ],
        choices: [
            { text: "NÃO NÃO NÃO", nextChapter: "badending1.html" },
            { text: "NÃO NÃO NÃO", nextChapter: "badending1.html" },
            { text: "NÃO NÃO NÃO", nextChapter: "badending1.html" }
        ]
    },
    

    
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
  