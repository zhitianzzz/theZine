let textContent = `The clock reads 7:32 AM as I finish my breakfast and clean the mug. The kitchen, like the rest of my studio, is small and dimly lit, the only light coming from the overhead bulb. I move through my morning routine on autopilot, each action a well-rehearsed step in a dance I perform every day.
I head back to the bathroom, the cold tiles underfoot a stark reminder of the early hour. I put on my makeup with practiced precision, my mind wandering as I apply foundation, eyeliner, and mascara. The mirror reflects a face that looks awake, but inside, I feel numb. The routine is so ingrained that I barely think about what I'm doing, my hands moving on their own.
Curling my hair with a flat iron, I watch the strands transform into soft waves. It's a small act of self-care, a fleeting moment of calm in an otherwise mechanical morning. The smell of heated hair fills the bathroom, mingling with the scent of my face cream. I put on my earrings, small silver hoops that add a touch of brightness to my otherwise dull appearance.
By 8:05 AM, I use the toilet, another step in the unchanging sequence of my morning. The bathroom is cramped, the walls closing in on me as I go through the motions. I apply lipstick, the final touch before I leave the safety of my studio. The color is a bold red, a small act of defiance against the monotony of my day.
I gather my things, the familiar weight of my bag on my shoulder as I head to the entrance. The studio feels even smaller as I prepare to leave, the narrow space a constant reminder of my confined life. I lock the door behind me, the click of the lock echoing in the quiet hallway.
The lift hums as it descends, the mechanical sound a backdrop to my thoughts. I step out into the street, the city already bustling with activity. Tall buildings loom overhead, their windows reflecting the morning light. People rush past, each absorbed in their own routines, their faces a blur of determination and fatigue.
I run to catch the tram, my breath coming in short gasps as I reach the stop just in time. The tram is crowded, the air thick with the scent of perfume, sweat, and the faint smell of coffee. I find a spot to stand, gripping the pole as the tram lurches forward. The city rushes past, a blur of buildings and people, the monotony of the commute settling over me like a heavy blanket.
Changing routes, I navigate the crowded platform, the noise of the city a constant hum in my ears. The second tram is just as packed, the faces around me a mix of boredom and mild anxiety. I stare out the window, watching the cityscape pass by, each building a reminder of the unchanging routine that defines my days.
By the time I arrive at the university, I'm already tired. The walk to the classroom is a familiar path, my feet moving on their own as I navigate the crowded halls. The classroom is bright, the fluorescent lights a harsh contrast to the dimness of my studio. I take my seat, the desk cold and hard under my hands.
Class begins at 9:00 AM, the professor's voice a distant drone as I try to focus. My mind drifts, the fatigue from the early morning and the repetitive nature of my routine making it hard to stay engaged. I glance at the clock, counting down the minutes until the class ends, knowing that the cycle will start all over again tomorrow.
As the hour passes, I feel a fleeting sense of interest, a brief spark that quickly fades. The weight of the city's constant hustle and bustle presses down on me, and I long for something different, something to break the monotony of my days. But for now, all I can do is push through, hoping that one day, things will change.`;

let movement = [];

function setup() {
    noCanvas();
    let container = select('#chapter2Box');
    let sentencesArray = textContent.split('. ');
    for (let i = 0; i < sentencesArray.length; i++) {
        let sentence = createDiv(sentencesArray[i] + (i < sentencesArray.length - 1 ? '.' : ''));
        sentence.class('text');
        sentence.style('font-size', `${random(8, 24)}px`);
        sentence.style('font-weight', `${Math.floor(random(1, 10)) * 100}`);
        container.child(sentence);
        movement.push(new Move(sentence));
    }
    frameRate(30); 
}

function draw() {
    for (let move of movement) {
        move.update();
        move.display();
    }
}

class Move {
    constructor(element) {
        this.element = element;
        this.x = random(windowWidth);
        this.y = random(windowHeight);
        this.angle = random(TWO_PI);
        this.speed = random(0.5, 2);
        this.moving = true;
        this.element.position(this.x, this.y);
    }

    update() {
        if (this.moving) {
            this.angle += this.speed * 0.01;
            this.x += cos(this.angle) * this.speed;
            this.y += sin(this.angle) * this.speed;
            if (this.x > windowWidth) this.x = 0;
            if (this.x < 0) this.x = windowWidth;
            if (this.y > windowHeight) this.y = 0;
            if (this.y < 0) this.y = windowHeight;
            this.element.position(this.x, this.y);
        }
    }

    display() {
        this.element.style('font-size', `${random(8, 24)}px`);
        this.element.style('font-weight', `${Math.floor(random(1, 10)) * 100}`);
    }

    stop() {
        this.moving = false;
    }

    start() {
        this.moving = true;
    }
}

function mousePressed() {
    frameRate(1); 
}

function mouseReleased() {
    frameRate(30);
}
