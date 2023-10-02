let speech = new SpeechSynthesisUtterance();
const btn_element = document.getElementById('btn');
const text_element = document.getElementById('text-area');

let voices = [];
let voiceselect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i)=>{
        voiceselect.options[i] = new Option(voice.name,i);
    })
}

btn_element.addEventListener('click',()=>{
    speech.text = text_element.value;
    window.speechSynthesis.speak(speech);
})

voiceselect.addEventListener('change',()=>{
    speech.voice = voices[voiceselect.value];
});