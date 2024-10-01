const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();



if (hour < 12) { 
  speak("Good Morning Riku...");
} 
else if (hour < 17) { 
  speak("Good Afternoon Riku....");
} 
else { 
  speak("Good Evening Riku....");
}


}

window.addEventListener('load', ()=>{
    speak("Initializing CYBORG..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }
    else if(message.includes("what is your name")){
        speak("I'm Cyborg, an Artificial Intelligence, created by my BOSS,Riku..")
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }
    else if(message.includes("what is your name")){
        speak("I'm Cyborg, an Artificial Intelligence, created by my BOSS,Riku..")
    }
    else if(message.includes("open instagram")){
        window.open("https://instagram.com", "_blank");
        speak("Opening instagram...")
    }
    else if(message.includes("open github")){
        window.open("https://github.com", "_blank");
        speak("Opening github...")
    }
    
    else if(message.includes("open my instagram")){
        window.open("https://www.instagram.com/riku_xahanii?igsh=YzljYTk1ODg3Zg==", "_blank");
        speak("Opening your instagram...")
    }
    else if(message.includes('what is') ||message.includes('tell me something about')|| message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet";
	    speak(finalText);
  
    }
    else if(message.includes('what is') ||message.includes('tell me something about')|| message.includes('who is') || message.includes('what are')) {
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia ";
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric", year: 'numeric'})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message;
        speak(finalText);
    }
}