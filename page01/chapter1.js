let textContent = `The first alarm pierces through the darkness of my narrow studio at 7:00 AM. I groan, rolling over to silence it, my body heavy with the weight of another monotonous day. The window, facing the car park, lets in no natural light, leaving the room in perpetual gloom. I lie there, staring at the ceiling, dreading the routine that awaits me.
Five minutes later, the second alarm goes off. I hit snooze again, clinging to the last vestiges of sleep. The bed, though not particularly comfortable, feels like a sanctuary compared to the relentless pace of the city outside. I know I have to get up, but the thought of facing another identical day fills me with a sense of resignation.
By 7:10 AM, I finally muster the will to get up. The room is cold, and I shiver as I swing my legs over the side of the bed. My feet touch the floor, and I sit there for a moment, gathering the strength to start my day. The small studio feels even more confining in the dim light, the walls closing in on me.
I shuffle to the bathroom, splashing cold water on my face in an attempt to wake up. The mirror reflects a tired face, eyes still heavy with sleep. I move mechanically, brushing my teeth and applying face cream, my mind numb to the routine. The minutes tick by, each action a step closer to the inevitable.
In the kitchen, I boil water and prepare my morning coffee. The process is automatic, my hands moving on their own as I microwave a pita and wrap it in tin foil. I take a sip of the coffee, the warmth spreading through me, but it does little to lift my spirits. Breakfast is a solitary affair, the silence of the studio only broken by the hum of the microwave and the occasional sound of traffic from the street below.
By 7:32 AM, I finish eating and clean my mug, the routine so ingrained that I barely think about it. The small tasks blend into one another, a seamless flow of actions that mark the start of another day. As I put on my makeup and curl my hair, I feel a fleeting sense of calm, a brief respite from the monotony.
But the calm is short-lived. The clock ticks closer to 8:00 AM, and I know I need to hurry. I put on my earrings, use the toilet, and apply lipstick, each step bringing me closer to the moment I have to leave the studio. The sense of dread returns, a heavy weight in my chest as I gather my things and head to the entrance.
Locking the door behind me, I step into the lift, the familiar hum of the machinery a constant companion. The city awaits, with its tall buildings and busy streets, a stark contrast to the confined space of my studio. As I run to catch the tram, I can’t help but feel a sense of frustration. Another day, another routine, and the exhaustion of it all weighs heavily on me.
The tram ride is a blur of faces and noise, the city rushing past in a haze. I change routes, the monotony of the commute only adding to my sense of boredom. By the time I arrive at the university, I’m already tired, the day stretching out before me like an endless road.
Class begins at 9:00 AM, and I try to focus, but my mind drifts. The fatigue from the early morning and the repetitive nature of my routine make it hard to stay engaged. I glance at the clock, counting down the minutes until the class ends, knowing that the cycle will start all over again tomorrow.
As the hour passes, I feel a fleeting sense of interest, a brief spark that quickly fades. The weight of the city’s constant hustle and bustle presses down on me, and I long for something different, something to break the monotony of my days. But for now, all I can do is push through, hoping that one day, things will change.`;

let sentences = [];
let currentFloatingIndex = 0;
let targetX = 0;
let targetY = 0;

// Not working for iframe
// let myCursor;
// let trailingDot;
// let trailX, trailY; 
// let easing = 0.18;

function setup() {
    noCanvas();

    // Not working for iframe
    // trailX = windowWidth / 2;
    // trailY = windowHeight / 2;

    // // Reference custom cursor and trailing dot
    // myCursor = select('#myCursor');
    // trailingDot = select('#trailingDot');
  
    let container = select('#chapter1Box');
    let sentencesArray = textContent.split('. ');
    let radius = 200;
    let angleStep = TWO_PI / sentencesArray.length;
    let centerX = windowWidth / 2;
    let centerY = windowHeight / 2;

    for (let i = 0; i < sentencesArray.length; i++) {
        let angle = i * angleStep;
        let x = centerX + radius * cos(angle);
        let y = centerY + radius * sin(angle);
        let sentence = createDiv(sentencesArray[i] + (i < sentencesArray.length - 1 ? '.' : ''));
        sentence.class('text');
        sentence.style('font-size', `${random(8, 24)}px`);
        sentence.style('font-weight', `${Math.floor(random(1, 10)) * 100}`); 
        sentence.position(x, y);
        sentence.style('transform', `rotate(${angle}rad)`);
        sentences.push(sentence);
    }
}

function draw() {
    for (let i = 0; i <= currentFloatingIndex; i++) {
        let currentX = sentences[i].position().x;
        let currentY = sentences[i].position().y;
        let newX = lerp(currentX, targetX, 0.05);
        let newY = lerp(currentY, targetY + i * 20, 0.05);
        sentences[i].position(newX, newY);
        sentences[i].style('transform', 'rotate(0rad)');
    }

    // Not working for iframe
    // Trailing circle: following cursor effect
    // trailX += (mouseX - trailX) * easing;
    // trailY += (mouseY - trailY) * easing;
    // trailingDot.position(trailX + window.scrollX, trailY + window.scrollY);

    // // Check if the cursor is hovering on the scroll button
    // let buttons = selectAll('.scrollBtn');
    // let isOverButton = false;
    // for (let button of buttons) {
    //     let buttonBounds = button.elt.getBoundingClientRect();
    //     if (
    //     mouseX >= buttonBounds.left &&
    //     mouseX <= buttonBounds.right &&
    //     mouseY >= buttonBounds.top &&
    //     mouseY <= buttonBounds.bottom
    //     ) {
    //     isOverButton = true;
    //     break;
    //     }
    // }
    // if (isOverButton) {
    //     myCursor.style('background-color', 'rgba(255, 69, 0)'); 
    //     trailingDot.style('width', '0px');
    //     trailingDot.style('height', '0px');
    // } else {
    //     myCursor.style('background-color', 'black');
    //     trailingDot.style('width', '30px');
    //     trailingDot.style('height', '30px');
    // }
}

function mousePressed() {
    if (currentFloatingIndex < sentences.length - 1) {
        currentFloatingIndex++;
    }
}

// Not working for iframe
// function moveMyCursor(event) {
//     trailingDot.style('visibility', 'visible');
//     myCursor.position(event.clientX + window.scrollX, event.clientY + window.scrollY);
//   }
  
// function updateCursorPosition() {
//     myCursor.position(trailX + window.scrollX, trailY + window.scrollY);
// }

