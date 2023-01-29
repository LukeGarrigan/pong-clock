class Paddle{
    constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.height = 80;
        this.width = 15;
        this.startSpeed = 2;
        this.speed = this.startSpeed;
        this.lastChange = new Date();
    }
  
    update() {
      this.move();
    }
     
     
    display() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
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
