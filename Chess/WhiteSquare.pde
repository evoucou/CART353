class WhiteSquare {

  int x;
  int y;
  int size;
  boolean squareColor;

  WhiteSquare(int x, int y, int size, boolean squareColor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.squareColor = squareColor;
  }

  void render() {
    fill(255);
    rect(this.x * size, this.y * size, size, size);
  }
}