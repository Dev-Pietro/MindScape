let frases = [
    "Uma vez a personagem já esqueceu a mochila em casa na hora de ir para escola",
    "A inspiração dessa narrativa incluí diversos jogos e obras como o jogo Omori",
    "O maior medo dos desenvolvedores da narrativa é virar CLT (estão no 3°EM!)",
    "Apesar do medo soar mais alto em nossa mente, vale mais enfrentá-lo do que fugir para sempre",
    "Mente vazia é oficina do Diabo"
];

function getRandomElement() {
    let randomElement = frases[(Math.floor(Math.random() * frases.length))];
    return randomElement;
};