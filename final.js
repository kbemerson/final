function ready () {
    console.log("Page Ready");

    done.onclick = function () {
        let el1 = document.createElement('p');
        let el2 = document.createElement('p');
        let el3 = document.createElement('p');

        let feeling = document.forms.feeling;
        let better = document.forms.better;
        let symptoms = document.forms.symptoms;
                
        if (feeling = "eight" || "nine" || "ten"){
            el1.innerHTML = "You said you were feeling pretty good. Congrats, you're making progress!"
        }
        if (feeling = "six" || "seven"){
            el1.innerHTML = "You said you were feeling okay. It could be a little better, but keep up the good work!"
        }
        if (feeling = "one" || "two" || "three" || "four" || "five"){
            el1.innerHTML = "You said you were feeling pretty bad. Sorry you feel this way! But don't worry, you can do it!"
        }
        
        if (better = "better"){
            el2.innerHTML = "You said you feel better than you did yesterday. Good work, you're improving!"
        }
        if (better = "same"){
            el2.innerHTML = "You said you feel about the same as you did yesterday."
        }
        if (better = "worse"){
            el2.innerHTML = "You said you were feeling worse than you did yesterday. But that's okay, tomorrow will be better."
        }

        if (sympotms = "anxious"){
            el3.innerHTML = 
        }
        if (sympotms = "depressed"){
            el3.innerHTML = 
        }
        if (sympotms = "tired"){
            el3.innerHTML = 
        }
        if (sympotms = "confused"){
            el3.innerHTML = 
        }
        if (sympotms = "distant"){
            el3.innerHTML = 
        }
        if (sympotms = "hurting"){
            el3.innerHTML = 
        }
        if (sympotms = "bored"){
            el3.innerHTML =    
        }
        if (sympotms = "lonely"){
            el3.innerHTML = 
        }
        if (sympotms = "overwhelmed"){
            el3.innerHTML = 
        }

    answers.append(el1)
    answers.append(el2)
    answers.append(el3)
    }

}
document.addEventListener("DOMContentLoaded", ready);