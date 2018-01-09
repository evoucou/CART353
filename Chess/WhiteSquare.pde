class WhiteSquare {

  int x;
  int y;
  int size;
  int col;

  WhiteSquare(int x, int y, int size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  void render() {
    fill(255);
    rect(this.x * size, this.y * size, size, size);
  }
}