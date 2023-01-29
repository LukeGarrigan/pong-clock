class Score {

	constructor(x, score) {
  	this.x = x;
  	this.score = score;
  }
  
  
  display() {
    textSize(50);
    textAlign(CENTER);
    if (this.score < 10) {
      text(`0${this.score}`, this.x, 60);  
    } else {
      text(this.score, this.x, 60);
    }
  }
  
  increment() {
  	this.score++;
  }

  reset() {
    this.score = 0;
  }
}