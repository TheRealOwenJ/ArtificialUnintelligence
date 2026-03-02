const input = document.getElementById('question');
const submit = document.getElementById('submit');
const output = document.getElementById('answer');
const answers = ['honestly yes', 'absolutely not', 'maybe', 'think about it', 'could be', 'absolutely 100 percent true', 'nah', 'try asking the wall', 'thats a stupid question', 'why ask me', 'probably', '27', '58', '94', '3', 'thats just straight up mean', 'how am i supposed to know that', 'go back to school they learn it to you', 'did you really forget', 'dude im not your personal ai assistant or something', 'thats just dumb', 'i hope so', 'dear god i hope not', '911? yeah its this guy over here hes threatening me', 'die you fool', 'is this the new standard for questions?', 'maybe your the dumb one here', 'it may say unintelligence but i think im smarter than you', 'america', 'south korea', 'netherlands', 'germany', 'sweden', 'february', 'march', 'in 10 hours', 'in  a few minutes', 'right now'];
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
