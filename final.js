function ready () {
    console.log("Page Ready");

    done.onclick = function () {
        let el1 = document.createElement('p');
        let el2 = document.createElement('p');
        let el3 = document.createElement('p');
        let el4 = document.createElement('p');

        let feeling = feelingselect.value;
        let better = betterselect.value;
        let checked = symptom.checked
        
        if (feeling == "eight" || feeling == "nine" || feeling == "ten"){
            el1.innerHTML = "You said you were feeling pretty good. Congrats, you're making progress!"
        } else if (feeling == "six" || feeling == "seven"){
            el1.innerHTML = "You said you were feeling okay. It could be a little better, but keep up the good work!"
        } else if (feeling == "one" || feeling == "two" || feeling == "three" || feeling == "four" || feeling == "five"){
            el1.innerHTML = "You said you were feeling pretty bad. Sorry you feel this way! But don't worry, you can do it!"
        }
        
        if (better == "Better"){
            el2.innerHTML = "You said you feel better than you did yesterday. Good work, you're improving!"
        } else if (better == "The Same"){
            el2.innerHTML = "You said you feel about the same as you did yesterday."
        } else if (better == "Worse"){
            el2.innerHTML = "You said you were feeling worse than you did yesterday. But that's okay, tomorrow will be better."
        }

        var part1 = ""
        var part2 = ""
        var part3 = ""
        var part4 = ""
        var part5 = ""
        var part6 = ""
        var part7 = ""
        var part8 = ""
        var part9 = ""

        if (anxious.checked == true){
            part1 = "You said you were feeling anxious. Here’s some tips that can help. Try to focus on the present. You can’t change what happened in the past and you have no way of knowing what will happen in the future. If something that is causing you anxiety is bothering you now, ask yourself if there is anything you can do about it right now. If there isn’t, then put it aside for now. Try to relabel the way you’re thinking. Instead of thinking that you won’t do well on your upcoming project, say that you’re nervous, but you’re prepared. Try taking a break. Get up and throw away a piece of trash or go for a short walk to a water fountain. Take a moment to step away from your current task and collect your thoughts so you can approach it in a calmer way."
        }
        if (depressed.checked == true){
            part2 = "You said you were feeling depressed. Here’s some tips that can help. Try to establish a routine. Having a cycle you go through every day can establish a pattern that gives structure to your day and can help you get back on track. It can be simple, like waking up every day at the same time, eating breakfast, going to work, coming home then going to bed. Just a simple cycle to help you get back into the swing of things. Try setting simple goals for yourself. Acknowledge that simple tasks can be difficult, and completing them is a success. For example, set a goal to be done with an assignment by a specific date, and allow yourself to feel good when you complete it. Try to participate in activities you enjoy. Depression tends to make it hard for you to enjoy activities you used to enjoy, but it’s important to keep trying. If the old activities just aren't doing it anymore, try experimenting with new activities. Keep your mind and body busy. "
        }
        if (tired.checked == true){
            part3 = "You said you were feeling tired. Here’s some tips that can help. Even if you can’t get more sleep, at least try to establish a regular sleeping pattern. Lay down to try to sleep at a specific time every night, and wake up at the same time the next morning. Try caffeine, in moderation of course. Start off with a cup of coffee or tea and build from there. Try to eat protein with your breakfast to give your body a quick energy boost. Try drinking water. Dehydration can lead to fatigue, so make sure you drink enough water everyday to avoid being dehydrated in the first place. "
        }
        if (confused.checked == true){
            part4 = "You said you were feeling confused. Here’s some tips that can help. To start off, accept that you are confused. It can be hard to admit defeat, but once you recognize that you’re stuck, you can keep trying in a different way. Focus on what you know. Use the information that has been given to you and try to work out how to use it. Keep in mind that sometimes the simplest options are the best! Don’t be afraid to ask for help. "
        }
        if (distant.checked == true){
            part5 = "You said you were feeling distant. Here’s some tips that can help. If nothing quite feels real at the moment, you may be having a dissociative episode, an episode where you feel disconnected from reality and identity. Try to find a way to ground yourself. Remind yourself of the task at hand. Try keeping a journal of events that trigger these episodes so you can avoid them in the future. Try to reconnect with reality. Name three things experienced by each of your senses. For example, tell yourself that you can hear people talking, yourself breathing, and cars driving outside. Repeat for sight, touch and smell. "
        }
        if (hurting.checked == true){
            part6 = "You said you were thinking about hurting yourself. If you are considering ending your life, please call the National Suicide Prevention Hotline at 1-800-273-8255. If you are not comfortable talking, there is a text only hotline available as well. Text HOME to 741741. If you are considering self harm, here are some safe alternatives. Hold an ice cube in your fist. Run your hands under cold water or take a cold shower. Snap a rubber band against your wrist. Rip or cut a piece of paper. Write or draw on your skin with a non permanent marker. "
        }
        if (bored.checked == true){
            part7 = "You said you were feeling bored. If you are in a situation where you can’t get up and move around, consider daydreaming. Make up a story in your head, or relive some of your favorite memories. If you are able to get up and move, consider teaching yourself a new skill, playing a game or talking with the people around you. If you are working on a dull task, consider listening to music, singing or both. "
        }
        if (lonely.checked == true){
            part8 = "You said you were feeling lonely. Here’s some tips that can help. First off, remember that you are very rarely ever alone. Try reaching out to family or friends. Reconnect with someone you haven’t spoken to in a while. If that isn’t enough, try to make changes in your surroundings. Make your house feel safe and comfortable with art and blankets. Try going to a cafe or other popular place and people watch. Watch comedy or talk shows where the speaker is speaking directly to the audience. Maybe even consider getting a pet! Pets make great companions. "
        }
        if (overwhelmed.checked == true){
            part9 = "You said you were feeling overwhelmed. Here’s some tips that can help. Try to avoid multitasking. While you may be in a rush, trying to complete hours of work in minutes will not only lower your quality of work, but overwhelm you as well. Space it out and take time to complete your tasks. Try to prioritize! Think about what needs to be done first and make sure to complete that first. This can prevent procrastination and being buried by deadlines. Try to change your environment. If you are in a busy place, try to go somewhere quiet so there is less to distract you. If all else fails, accept that sometimes you just can’t get everything done, and that’s okay. Everyone has limits, and it’s important that you respect yours. "
        }

        el3.innerHTML = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8 + part9

    answers.append(el1)
    answers.append(el2)
    answers.append(el3)
    answers.append(el4)
    }
}
document.addEventListener("DOMContentLoaded", ready);