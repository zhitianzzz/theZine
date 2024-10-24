let textContent = `The clock reads 2:30 PM as I take a brief toilet break, the only respite in an otherwise relentless workday. The store is bustling with customers, each one a new face to greet, a new transaction to process. The repetitive nature of my job weighs heavily on me, each “Welcome” feeling more mechanical than the last.
I return to my post, the familiar routine of welcoming customers resuming. The hours blur together, a continuous stream of interactions that leave me feeling drained. The fluorescent lights overhead cast a harsh glow, the constant hum of activity a backdrop to my thoughts. I smile and greet each customer, my voice steady despite the exhaustion that builds with each passing minute.
By 5:00 PM, the end of my shift, I’m running on autopilot. I pack up my things, say goodbye to my colleagues, and leave the store. The city outside is just as busy as it was in the morning, the streets filled with people rushing to their next destination. I head to the grocery store, the routine of shopping for dinner a familiar one.
The aisles of the grocery store are crowded, the shelves stocked with the same items I see every week. I pick up the essentials, my mind numb to the task. The checkout line moves slowly, the minutes ticking by as I wait my turn. By the time I leave the store, the sky is beginning to darken, the city lights flickering on one by one.
I catch the tram home, the ride a blur of faces and noise. The city rushes past, a blur of buildings and people, the monotony of the commute settling over me like a heavy blanket. I get off at my stop, the familiar path to my studio a well-worn one. The lift hums as it ascends, the mechanical sound a backdrop to my thoughts.
By 5:50 PM, I arrive home, the small studio just as dark and narrow as I left it. I put away the groceries and prepare dinner, the routine of cooking a welcome distraction from the day’s exhaustion. The kitchen fills with the smell of food, the warmth of the stove a small comfort in the otherwise cold room.
I lie down at my desk, watching videos to unwind. The screen flickers with images of far-off places, a brief escape from the confines of my studio. The hours pass slowly, the fatigue of the day settling into my bones. 
By 7:20 PM, I clean up and have a rest, the quiet of the studio a stark contrast to the noise of the city outside. The hours blend together, the monotony of my routine a constant presence. I long for something different, something to break the cycle of my days.
As the night wears on, I prepare for bed, the routine of my evening a mirror of my morning. I shower, put on a face mask, and brush my teeth, each action a step closer to the end of the day. I watch videos in bed, the screen a small comfort in the darkness of my studio.
By 1:30 AM, I’m ready to sleep, the exhaustion of the day finally catching up with me. I lie in bed, the weight of the city’s constant hustle and bustle pressing down on me. 
As I drift off to sleep, the city outside continues its relentless pace, the noise and lights a constant reminder of the world beyond my small studio. I close my eyes, the darkness a welcome relief, and hope that tomorrow will bring something new.`;

let sentences = [];

function setup() {
    noCanvas();
    let container = select('#chapter4Box');
    let sentencesArray = textContent.split('. ');
    let totalSentences = sentencesArray.length;
    for (let i = 0; i < totalSentences; i++) {
        let sentence = createDiv(sentencesArray[i] + (i < totalSentences - 1 ? '.' : ''));
        sentence.class('text');
        sentence.style('font-size', `${random(8, 20)}px`);
        sentence.style('font-weight', `${Math.floor(random(1, 10)) * 100}`); 
        container.child(sentence);
        sentences.push(new ScrollingText(sentence, i, totalSentences));
    }
    frameRate(3); 
}

function draw() {
    for (let sentence of sentences) {
        sentence.update();
        sentence.display();
    }
}

class ScrollingText {
    constructor(element, index, totalSentences) {
        this.element = element;
        this.index = index;
        this.x = index === 0 ? windowWidth : random(windowWidth, windowWidth * 2); 
        let availableHeight = windowHeight - 50; 
        let lineHeight = availableHeight / totalSentences;
        this.y = index * lineHeight + 25; 
        this.speed = 10;
        this.words = element.html().split(' ');
        this.element.html('');
        this.wordElements = [];
        for (let word of this.words) {
            let wordSpan = createSpan(word + ' ');
            this.element.child(wordSpan);
            this.wordElements.push(wordSpan);
        }
        this.element.position(this.x, this.y);
    }

    update() {
        this.x -= this.speed;
        if (this.x < -this.element.width) {
            this.x = windowWidth;
        }
        this.element.position(this.x, this.y);
    }

    display() {
    }
}

function mousePressed() {
    frameRate(30); 
}

function mouseReleased() {
    frameRate(3);
}