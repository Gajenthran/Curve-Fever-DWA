/** Class representing the game and their elements. */
class Game {
  constructor(w, h, players, background) {
    this.w         = w;
    this.h         = h;
    this.players   = players;
    this.canvas    = document.createElement("canvas"); // TODO: Find a better way to create canvas
    this.canvas.id = "game_canvas";     
    document.body.appendChild(this.canvas);
    this.context   = this.canvas.getContext("2d");
  }

  /**
   * @method Initialize values for the background
   */
  init() {
    this.canvas.width  = this.w;
    this.canvas.height = this.h;
  }

  /** 
   * @method Resize the dimension of the game.
   * @param w width
   * @param h height
   */
  resize(w, h) {
    this.canvas.width  = this.w = w;
    this.canvas.height = this.h = h;
  }

  /*
   * @method Update all the event of the game
   */
  update() {
    this.players.map(snake => {
      snake.move(20, this);
    });
  }

  /*
   * @method Display all the elements of the game 
   */
  render() {
    drawSnake(this);
  }
  /**
   * @method Set a new background.
   * @param background new background
   */
  setBackground(background) {
    this.background = background
  }
}