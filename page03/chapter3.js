let textContent = `The clock reads 8:20 AM as I lock the door behind me and step into the lift. The familiar hum of the machinery accompanies my descent, a constant reminder of the mechanical nature of my mornings. The city awaits outside, with its tall buildings and busy streets, a stark contrast to the confined space of my studio.
I step out into the street, the air filled with the sounds of the city waking up. People rush past, each absorbed in their own routines, their faces a blur of determination and fatigue. I join the flow, my feet moving on their own as I head towards the tram stop. The buildings loom overhead, their windows reflecting the morning light, casting long shadows on the pavement.
I run to catch the tram, my breath coming in short gasps as I reach the stop just in time. The tram is crowded, the air thick with the scent of perfume, sweat, and the faint smell of coffee. I find a spot to stand, gripping the pole as the tram lurches forward. The city rushes past, a blur of buildings and people, the monotony of the commute settling over me like a heavy blanket.
The tram ride is a blur of faces and noise. I stare out the window, watching the cityscape pass by, each building a reminder of the unchanging routine that defines my days. The streets are filled with people, all moving with purpose, their lives intersecting briefly with mine before we part ways again. The monotony of the journey is broken only by the occasional jolt as the tram stops and starts, the doors opening to let more passengers on.
Changing routes, I navigate the crowded platform, the noise of the city a constant hum in my ears. The second tram is just as packed, the faces around me a mix of boredom and mild anxiety. I find another spot to stand, my body swaying with the motion of the tram. The minutes tick by slowly, each one dragging on as I count down the stops to my destination.
The city outside the window is a blur of motion, the buildings and streets blending together in a dizzying array of colors and shapes. I watch as people go about their day, their lives a series of routines and habits, much like my own. The monotony of the commute is a constant reminder of the repetitive nature of my life, each day blending into the next with little to distinguish one from the other.
By the time I arrive at the university, I'm already tired. The walk to the classroom is a familiar path, my feet moving on their own as I navigate the crowded halls. The classroom is bright, the fluorescent lights a harsh contrast to the dimness of my studio. I take my seat, the desk cold and hard under my hands.
Class begins at 9:00 AM, the professor's voice a distant drone as I try to focus. My mind drifts, the fatigue from the early morning and the repetitive nature of my routine making it hard to stay engaged. I glance at the clock, counting down the minutes until the class ends, knowing that the cycle will start all over again tomorrow.
As the hour passes, I feel a fleeting sense of interest, a brief spark that quickly fades. The weight of the city's constant hustle and bustle presses down on me, and I long for something different, something to break the monotony of my days. But for now, all I can do is push through, hoping that one day, things will change.`;

let sentences = [];
let radius = 100;

function setup() {
    noCanvas();
    let container = select('#chapter3Box');
    let sentencesArray = textContent.split('. ');
    for (let i = 0; i < sentencesArray.length; i++) {
        let sentence = createDiv(sentencesArray[i] + (i < sentencesArray.length - 1 ? '.' : ''));
        sentence.class('text');
        container.child(sentence);
        sentences.push(new Circle(sentence, i));
    }
    frameRate(30); 
}

function draw() {
    for (let circle of sentences) {
        circle.update();
        circle.display();
    }
}

class Circle {
    constructor(element, index) {
        this.element = element;
        this.index = index;
        this.angle = 0;
        this.speed = random(0.01, 0.03);
        this.centerX = random(windowWidth);
        this.centerY = random(windowHeight);
        this.radius = radius;
        this.element.position(this.centerX, this.centerY);
    }

    update() {
        this.angle += this.speed;
        let x = this.centerX + this.radius * cos(this.angle);
        let y = this.centerY + this.radius * sin(this.angle);
        this.element.position(x, y);
    }

    display() {
        this.element.style('transform', `rotate(${this.angle}rad)`);
    }
}

function mousePressed() {
    frameRate(1); 
}

function mouseReleased() {
    frameRate(30); 
}
