//roteiro do cap 1
const scenes = [
    {
        id: 1,
        speaker: "Yasmin",
        text: "Mais um dia tendo que vir para esta escola, eu fico me perguntando se algum dia isso deixará de ser monótono... Enfim, pelo menos está quase chegando no final de semana.",
        background: "../img/background/frenteescolaantesportas.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 2},
        ]
    },
    {
        id: 2,
        speaker: "Yasmin",
        text: "Nossa, que sensação estranha, só foi passar pela porta da escola que senti isso...",
        background: "../img/background/frenteescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 3},
        ]
    },
    {
        id: 3,
        speaker: "Yasmin",
        text: "Depois irei procurar Karen e Jonathan para falar sobre isso.",
        background: "../img/background/frenteescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 4},
        ]
    },
    {
        id: 4,
        speaker: "Yasmin",
        text: "...",
        background: "../img/background/corredorescola.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 5},
        ]
    },
    {
        id: 5,
        speaker: "Yasmin",
        text: "...",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 6},
        ]
    },
    {
        id: 6,
        speaker: "Jonathan",
        text: "Ei, Yasmin! Tá tudo bem?",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png"},
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando1.png"},
            { name: "Karen", image: "../img/characters/Karen/karen-feliz7.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 7},
        ]
    },
    {
        id: 7,
        speaker: "Karen",
        text: "Você parece meio estranha hoje...",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png"},
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando1.png"},
            { name: "Karen", image: "../img/characters/Karen/karen-feliz7.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 8},
        ]
    },
    {
        id: 8,
        speaker: "Yasmin",
        text: "Eu... tive uma sensação estranha quando entrei na escola, mas é difícil explicar.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png"},
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando1.png"},
            { name: "Karen", image: "../img/characters/Karen/karen-feliz7.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 9},
        ]
    },
    {
        id: 9,
        speaker: "Jonathan",
        text: "Ah, não se preocupa, deve ser coisa da sua cabeça.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png"},
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando2.png"},
            { name: "Karen", image: "../img/characters/Karen/karen-feliz7.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 10},
        ]
    },
    {
        id: 10,
        speaker: "Karen",
        text: "Como foi essa experiência?",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando3.png"},
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando2.png"},
            { name: "Karen", image: "../img/characters/Karen/karen-feliz8.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 11},
        ]
    },
    {
        id: 11,
        speaker: "Yasmin",
        text: "Não consigo descrever... foi só um pressentimento.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"},
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando2.png"},
            { name: "Karen", image: "../img/characters/Karen/karen-feliz8.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 12},
        ]
    },
    {
        id: 12,
        speaker: "Professor",
        text: "ALUNOS EM SEUS LUGARES, A AULA JÁ VAI COMEÇAR!!!",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"},
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-acenando2.png"},
            { name: "Karen", image: "../img/characters/Karen/karen-feliz8.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 13},
        ]
    },
    {
        id: 13,
        speaker: "Karen e Jonathan",
        text: "Bom Yasmin, iremos para nossos lugares, nos falamos depois.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"},
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-feliz1.png"},
            { name: "Karen", image: "../img/characters/Karen/karen-feliz5.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 14},
        ]
    },
    {
        id: 14,
        speaker: "Yasmin",
        text: "...",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falando1.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 15},
        ]
    },
    {
        id: 15,
        speaker: "",
        text: "O dia continuou seguindo normalmente, apesar de Yasmin ter ficado com aquela sensação estranha pelo resto do dia.",
        background: "../img/background/black.png",
        characters: [
            {name: "Yasmin", image:"../img/characters/Provisorio/nada.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 16},
        ]
    },
    {
        id: 16,
        speaker: "Yasmin",
        text: "Cheguei em casa.",
        background: "../img/background/casa-salaestar.jpeg",
        characters: [
            {name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 17},
        ]
    },
    {
        id: 17,
        speaker: "Pai de Yasmin",
        text: "Bem vinda de volta ! Como foi seu dia na escola filha ?",
        background: "../img/background/casa-salaestar.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-preocupado2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 18},
        ]
    },
    {
        id: 18,
        speaker: "Yasmin",
        text: "Foi normal, como sempre...",
        background: "../img/background/casa-salaestar.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-preocupado2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 19},
        ]
    },
    {
        id: 19,
        speaker: "Pai de Yasmin",
        text: "Entendi... Que bom então filha ! Mas qualquer coisa pode contar sempre com o pai.",
        background: "../img/background/casa-salaestar.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-feliz2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 20},
        ]
    },
    {
        id: 20,
        speaker: "Yasmin",
        text: "...",
        background: "../img/background/casa-salaestar.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-feliz2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 21},
        ]
    },
    {
        id: 20,
        speaker: "Yasmin - Pensamento",
        text: "(Após esse breve diálogo com meu pai, jantei e fui para meu quarto, afinal estava cansada)",
        background: "../img/background/casa-salaestar.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-feliz2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 21},
        ]
    },
    {
        id: 21,
        speaker: "Yasmin - Pensamento",
        text: "(Fiquei pensando bastante na sensação que estava sentindo desde o começo do dia, tentei me recordar se havia sonhado com algo, porém nada me veio a mente... enfim dormi para ver se aquilo passava)",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 22},
        ]
    },
    {
        id: 22,
        speaker: "",
        text: "Três dias depois daquele pressentimento, Yasmin teve um sonho estranho.",
        background: "../img/background/black.png",
        characters: [
            {name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 23},
        ]
    },
    {
        id: 23,
        speaker: "",
        text: "No sonho, havia pessoas usando mantos (a cor era indistinta) ao redor de um altar.",
        background: "../img/background/sonho1.jpeg",
        characters: [
            {name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 24},
        ]
    },
    {
        id: 24,
        speaker: "",
        text: "Elas estavam cultuando uma figura feita de barro que ainda não estava solidificada.",
        background: "../img/background/sonho1.jpeg",
        characters: [
            {name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 25},
        ]
    },
    {
        id: 25,
        speaker: "",
        text: "A cena mudou rapidamente para o final do culto.",
        background: "../img/background/sonho2.jpeg",
        characters: [
            {name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 26},
        ]
    },
    {
        id: 26,
        speaker: "",
        text: "Vi duas pessoas pegando a figura de barro e começando a moldá-la no chão. Era estranho... estavam moldando na forma de uma adaga.",
        background: "../img/background/sonho4.jpeg",
        characters: [
            {name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 27},
        ]
    },
    {
        id: 27,
        speaker: "",
        text: "De repente, o barro virou argila endurecida. Então, essas duas pessoas encostaram suas cabeças uma na outra, e um terceiro indivíduo pegou a adaga de argila e a fincou nas cabeças deles, unindo-as pela lâmina.",
        background: "../img/background/sonho2.jpeg",
        characters: [
            {name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 28},
        ]
    },
    {
        id: 28,
        speaker: "",
        text: "Após isso Yasmin acordou muito assustada gritando ! Os pais dela ao escutarem foram correndo ao seu quarto.",
        background: "../img/background/black.png",
        characters: [
            {name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 29},
        ]
    },
    {
        id: 29,
        speaker: "Mãe de Yasmin",
        text: "Yasmin! O que aconteceu?",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png"},
            { name: "Mãe de Yasmin", image: "../img/characters/Mae/mae_seria.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-falando2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 30},
        ]
    },
    {
        id: 30,
        speaker: "Pai de Yasmin",
        text: "Foi um pesadelo? Conta pra gente!",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava2.png"},
            { name: "Mãe de Yasmin", image: "../img/characters/Mae/mae_seria2.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-falando2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 31},
        ]
    },
    {
        id: 31,
        speaker: "Yasmin",
        text: "Foi só um sonho ruim, nada demais.",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada1.png"},
            { name: "Mãe de Yasmin", image: "../img/characters/Mae/mae_seria2.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-falando2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 32},
        ]
    },
    {
        id: 32,
        speaker: "Mãe de Yasmin",
        text: "Mas o que você viu? Conta, talvez ajude!",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada1.png"},
            { name: "Mãe de Yasmin", image: "../img/characters/Mae/mae_falando3.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-falando2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 33},
        ]
    },
    {
        id: 33,
        speaker: "Yasmin",
        text: "Não! Eu não quero falar sobre isso. Só quero tentar dormir em paz, tá bom?",
        background: "../img/background/quartoyasmin.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-revoltada2.png"},
            { name: "Mãe de Yasmin", image: "../img/characters/Mae/mae_falando3.png"},
            { name: "Pai de Yasmin", image: "../img/characters/Pai/pai-falando2.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 34},
        ]
    },
    {
        id: 34,
        speaker: "Yasmin - Narrando",
        text: "Eles tentaram insistir, mas eu não queria falar. Não tinha como explicar. Pedi para me deixarem sozinha, e eles saíram do quarto. Eu tentei voltar a dormir, mas o sono simplesmente não vinha.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 35},
        ]
    },
    {
        id: 35,
        speaker: "Yasmin - Narrando",
        text: "Desde aquele primeiro pesadelo, tudo ficou pior. Toda noite... coisas estranhas, perturbadoras. Parece que sempre volto àquele culto. Não consigo entender, mas não consigo parar de sonhar com aquilo. ",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 36},
        ]
    },
    {
        id: 36,
        speaker: "Yasmin - Narrando",
        text: "Estou exausta. Chego na escola e, pelo meu reflexo, vejo minhas olheiras cada vez mais profundas. Jonathan me olha, preocupado.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png"},
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 37},
        ]
    },
    {
        id: 37,
        speaker: "Jonathan",
        text: "Yasmin, tá tudo bem? Você não parece bem...",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"}, //ela com sono temq fazer
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao1.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 38},
        ]
    },
    {
        id: 38,
        speaker: "Yasmin",
        text: "Tá tudo certo. Só não estou conseguindo dormir direito.",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"}, //ela com sono temq fazer
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao1.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 39},
        ]
    },
    {
        id: 39,
        speaker: "Yasmin - Pensamento",
        text: "(Eu acho que ele não acreditou em mim. Ele apenas assentiu e mudou de assunto...)",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"}, //ela com sono temq fazer
            { name: "Jonathan", image: "../img/characters/Jonathan/jonathan-semreacao3.png"}
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 40},
        ]
    },
    {
        id: 40,
        speaker: "Yasmin - Pensamento",
        text: "(...mas o olhar dele me seguiu por um tempo. Eu também não sei como explicar. Eu só queria que isso parasse, que esses sonhos sumissem.)",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"} //ela com sono temq fazer
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 41},
        ]
    },
    {
        id: 41,
        speaker: "Yasmin - Pensamento",
        text: "(Hoje, Karen não apareceu na escola. Jonathan está ocupado com o grêmio estudantil, então estarei sozinha após o término das aulas de hoje. Não sei por que, mas isso me deixa ainda mais angustiada.)",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"} //ela "angustiada" temq fazer
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 42},
        ]
    },
    {
        id: 42,
        speaker: "Yasmin - Pensamento",
        text: "(Preciso me distrair, senão vou enlouquecer com esses pensamentos. Vou tentar estudar... só por algumas horas.)",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-neutra1.png"} //ela "angustiada" temq fazer
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 43},
        ]
    },
    {
        id: 43,
        speaker: "Yasmin - Pensamento",
        text: "O tempo passa devagar. Tento me concentrar nos livros, mas sinto minhas pálpebras pesando. Não consigo evitar... estou caindo no sono.",
        background: "../img/background/black.png",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png"} 
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 44},
        ]
    },
    {
        id: 44,
        speaker: "Yasmin - Pensamento",
        text: "Eu dormi. O sonho... foi horrível. Meu coração ainda está disparado. ",
        background: "../img/background/sonho3.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Provisorio/nada.png"} 
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 45},
        ]
    },
    {
        id: 45,
        speaker: "Yasmin - Pensamento",
        text: "(Acordei de repente, mas não consigo me mover. Estou paralisada de medo, tentando processar o que vi. Aos poucos, meu corpo começa a responder.)",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-falandoesurpresa.png"}  //ela "assustada" fazer
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 46},
        ]
    },
    {
        id: 46,
        speaker: "Yasmin - Pensamento",
        text: "(Respiro fundo, mas algo está errado... Olho ao redor e não há ninguém na sala. Ela está completamente vazia.)",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-brava1.png"} 
        ],
        choices: [
            { text: "Próximo 🢂", nextScene: 47},
        ]
    },
    {
        id: 47,
        speaker: "Yasmin - Pensamento",
        text: "(Que horas são? Olho para o relógio — é tarde, muito tarde. Estou atrasada! Como eu não percebi o tempo passando? Preciso ir embora... agora.)",
        background: "../img/background/salaescola2.jpeg",
        characters: [
            { name: "Yasmin", image: "../img/characters/Yasmin/yasmin-surpresa1.png"} 
        ],
        choices: [
            { text: "Próximo 🢂", nextChapter: "cap2.html"}, //ir pro ato 2
        ]
    },
    //continuar
];

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
  