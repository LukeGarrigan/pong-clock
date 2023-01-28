class Paddle{
    constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.height = 80;
        this.width = 20;
        this.velocity = 1;
        this.isUp = false;
        this.isDown = false;
    }
  
    update() {


      if (this.isUp) {
        this.velocity-=0.5;
        
      } else if (this.isDown) {
        this.velocity+=0.5
      }

      if (this.velocity > 4) {
        this.velocity = 4;
      }
      if (this.velocity < -4) {
        this.velocity = -4;
      }

      this.move();
    }
     
     
    display() {
        fill(255);
        rect(this.x, this.y, 20, 80);
    }

    move() {
        // if (this.y > 0 && this.y < height - this.height) {
            this.y += this.velocity;
        // }
    }
}
