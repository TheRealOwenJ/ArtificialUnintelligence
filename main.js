const input = document.getElementById('question');
const submit = document.getElementById('submit');
const output = document.getElementById('answer');
const answers = ['honestly yes', 'absolutely not', 'maybe', 'think about it', 'could be', 'absolutely 100 percent true', 'nah', 'try asking the wall', 'thats a stupid question', 'why ask me', 'probably', '27', '58', '94', '3'];
let previousAnswer;
let currentAnswer;

function getAnswer() {
    return answers[Math.floor(Math.random() * answers.length)];
}

async function setAnswer() {
    previousAnswer = currentAnswer;
    currentAnswer = getAnswer();
    while (currentAnswer === previousAnswer) {
        currentAnswer = getAnswer();
    }
    input.value = ''
    output.innerText = 'Thinking...';
    await new Promise(r => setTimeout(r, Math.random() * (5000 - 1000 + 1) + 1000));
    output.innerText = currentAnswer;
}

submit.addEventListener('click', () => {
    setAnswer()
})