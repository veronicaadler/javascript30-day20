window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//creating a new instance of speech recognition

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US'; //allows for speech recognition results while verbalizing,
//as oppose to having to wait for the end of speaking

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results) //grabbing the transcript information
    //from the speech recognition object and making it an array, as it is a list.
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        p.textContent = transcript;
        if(e.results[0].isFinal) {
            p = document.createElement('p')
            words.appendChild(p);
        }


});

recognition.addEventListener('end', recognition.start)

recognition.start()