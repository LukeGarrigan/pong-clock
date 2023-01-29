class Paddle{
    constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.height = 80;
        this.width = 20;
        this.startSpeed = 5;
        this.speed = this.startSpeed;
        this.lastChange = new Date();
    }
  
    update() {
      this.move();
    }
     
     
    display() {
        fill(255);
        rect(this.x, this.y, 20, this.height);
    }

    move() {
      if (this.y < 0) {
        this.speed = this.startSpeed;
      }
      if (this.y > (height - this.height)) {
        this.speed = -this.startSpeed;
      }

      this.y += this.speed;
    }
}
