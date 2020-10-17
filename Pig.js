class Pig extends BaseClass{
    constructor(x, y) {
      super(x, y, 50, 50);
      World.add(world, this.body);

      this.image = loadImage("sprites/enemy.png");
    }
  };
  