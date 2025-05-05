// Lista de pessoas e imagens
const people = [
    { src: 'imagens/img1.jpg', name: 'Rhianna' },
    { src: 'imagens/img2.jpg', name: 'Laura' },
    { src: 'imagens/img3.jpg', name: 'Mirely' },
    { src: 'imagens/img4.jpg', name: 'Graziely' },
    { src: 'imagens/img5.jpg', name: 'Luana' },
    { src: 'imagens/img6.jpg', name: 'Pessoa1' },
    { src: 'imagens/img7.jpg', name: 'Pessoa2' },
    { src: 'imagens/img8.jpg', name: 'Bia' },
    { src: 'imagens/img9.jpg', name: 'Leuda' },
    { src: 'imagens/img10.jpg', name: 'Maria' },
    { src: 'imagens/img11.jpg', name: 'Fernanda' },
    { src: 'imagens/img12.jpg', name: 'DJemily' },
    { src: 'imagens/img13.jpg', name: 'Maria1' },
    { src: 'imagens/img14.jpg', name: 'Vitoria1' },
    { src: 'imagens/img15.jpg', name: 'Vitoria' },
    { src: 'imagens/img16.jpg', name: 'Sofia' },
    { src: 'imagens/img17.jpg', name: 'Laine' },
    { src: 'imagens/img18.jpg', name: 'Pessoa3' },
    { src: 'imagens/img19.jpg', name: 'Ingrid' },
    { src: 'imagens/img20.jpg', name: 'Heloarannia' },
    { src: 'imagens/img21.jpg', name: 'Karla' },
    { src: 'imagens/img22.jpg', name: 'Julia' },
    { src: 'imagens/img23.jpg', name: 'Paola' },
    { src: 'imagens/img24.jpg', name: 'Livy' },
    { src: 'imagens/img25.jpg', name: 'Bianca' },
    { src: 'imagens/img26.jpg', name: 'Camila' },
    { src: 'imagens/img27.jpg', name: 'Eliana' },
    { src: 'imagens/img28.jpg', name: 'Lara' },
    { src: 'imagens/img29.jpg', name: 'Yasmim' },
    { src: 'imagens/img30.jpg', name: 'Camila2' },
    { src: 'imagens/img31.jpg', name: 'Samara' },
    { src: 'imagens/img32.jpg', name: 'Jackline' },
    { src: 'imagens/img33.jpg', name: 'Geisyla' },
    { src: 'imagens/img34.jpg', name: 'Julia Ara' },
    { src: 'imagens/img35.jpg', name: 'Livy Mace' },
    { src: 'imagens/img36.jpg', name: 'Juu' },
    { src: 'imagens/img37.jpg', name: 'Thaila' },
    { src: 'imagens/img38.jpg', name: 'Nick' },
    { src: 'imagens/img39.jpg', name: 'VitoriaX' },
    { src: 'imagens/img40.jpg', name: 'Kaemili' },
    { src: 'imagens/img41.jpg', name: 'Aline' },
    { src: 'imagens/img42.jpg', name: 'Dafine' },
    { src: 'imagens/img43.jpg', name: 'Clara' },
    { src: 'imagens/img44.jpg', name: 'Evilly' }
];

// Lista de pares fixos (22 pares para 44 pessoas) e a escolha "certa" para cada par
const pairs = [
    { person1: 'Rhianna', person2: 'Laura', correct: 'Laura' },
    { person1: 'Mirely', person2: 'Graziely', correct: 'Mirely' },
    { person1: 'Luana', person2: 'Pessoa1', correct: 'Luana' },
    { person1: 'Pessoa2', person2: 'Bia', correct: 'Bia' },
    { person1: 'Leuda', person2: 'Maria', correct: 'Leuda' },
    { person1: 'Fernanda', person2: 'DJemily', correct: 'Fernanda' },
    { person1: 'Maria1', person2: 'Vitoria1', correct: 'Maria1' },
    { person1: 'Vitoria', person2: 'Sofia', correct: 'Vitoria' },
    { person1: 'Laine', person2: 'Pessoa3', correct: 'Laine' },
    { person1: 'Ingrid', person2: 'Heloarannia', correct: 'Ingrid' },
    { person1: 'Karla', person2: 'Julia', correct: 'Julia' },
    { person1: 'Paola', person2: 'Livy', correct: 'Livy' },
    { person1: 'Bianca', person2: 'Camila', correct: 'Bianca' },
    { person1: 'Eliana', person2: 'Lara', correct: 'Lara' },
    { person1: 'Yasmim', person2: 'Camila2', correct: 'Camila2' },
    { person1: 'Samara', person2: 'Jackline', correct: 'Jackline' },
    { person1: 'Geisyla', person2: 'Julia Ara', correct: 'Julia Ara' },
    { person1: 'Livy Mace', person2: 'Juu', correct: 'Livy Mace' },
    { person1: 'Thaila', person2: 'Nick', correct: 'Thaila' },
    { person1: 'VitoriaX', person2: 'Kaemili', correct: 'VitoriaX' },
    { person1: 'Aline', person2: 'Dafine', correct: 'Aline' },
    { person1: 'Clara', person2: 'Evilly', correct: 'Evilly' }
];

// Índice do par atual e contadores de acertos/erros
let currentPairIndex = 0;
let correctCount = 0;
let wrongCount = 0;

// Função para encontrar uma pessoa pelo nome
function findPersonByName(name) {
    return people.find(person => person.name === name);
}

// Função para exibir o par atual
function displayPair() {
    const container = document.getElementById('imageContainer');
    const nextButton = document.getElementById('nextButton');
    const restartButton = document.getElementById('restartButton');
    container.innerHTML = '';

    if (currentPairIndex >= pairs.length) {
        container.innerHTML = '<p>Você terminou todos os pares!</p>';
        const resultElement = document.getElementById('result');
        let finalMessage = `Fim do jogo! Você acertou ${correctCount} de ${pairs.length} pares.`;
        if (correctCount >= pairs.length * 0.8) {
            finalMessage += " Excelente desempenho!";
        } else if (correctCount >= pairs.length * 0.5) {
            finalMessage += " Bom trabalho! Quer tentar melhorar?";
        } else {
            finalMessage += " Que pena! Tente novamente!";
        }
        resultElement.textContent = finalMessage;
        nextButton.style.display = 'none';
        restartButton.style.display = 'block';
        return;
    }

    const pair = pairs[currentPairIndex];
    const person1 = findPersonByName(pair.person1);
    const person2 = findPersonByName(pair.person2);

    if (!person1 || !person2) {
        document.getElementById('result').textContent = "Erro: Pessoa não encontrada.";
        return;
    }

    const div1 = document.createElement('div');
    div1.className = 'image-box';
    div1.innerHTML = `
        <img src="${person1.src}" alt="${person1.name}">
        <p>${person1.name}</p>
        <button onclick="vote('${person1.name}')">Votar</button>
    `;
    container.appendChild(div1);

    const div2 = document.createElement('div');
    div2.className = 'image-box';
    div2.innerHTML = `
        <img src="${person2.src}" alt="${person2.name}">
        <p>${person2.name}</p>
        <button onclick="vote('${person2.name}')">Votar</button>
    `;
    container.appendChild(div2);

    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
}

// Função para votar
function vote(person) {
    const pair = pairs[currentPairIndex];
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');
    let message = `Voto registrado para ${person}!`;

    if (!pair.correct) {
        resultElement.textContent = "Erro: A escolha 'certa' não foi definida para este par.";
        return;
    }

    if (person === pair.correct) {
        message += ` - Parabéns, você acertou! A mais gostosa é ${pair.correct}!`;
        resultElement.className = 'correct';
        correctCount++;
    } else {
        message += ` - Você errou! A mais gostosa era ${pair.correct}.`;
        resultElement.className = 'wrong';
        wrongCount++;
    }

    resultElement.textContent = message;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;

    // Desativa os botões de votação e exibe o botão "Próximo Par"
    const buttons = document.querySelectorAll('.image-box button');
    buttons.forEach(button => button.disabled = true);
    nextButton.style.display = 'block';
}

// Função para avançar para o próximo par
function nextPair() {
    currentPairIndex++;
    displayPair();
}

// Função para reiniciar o jogo
function restartGame() {
    currentPairIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    document.getElementById('result').textContent = "Clique em uma das opções para votar...";
    displayPair();
}

// Inicializa a página
displayPair();