boolean white;
boolean black;
BlackSquare[][] bSquares;
WhiteSquare[][] wSquares;
int rows;
int cols;
int gridSquareSize;

void setup() {

  size(400, 400);
  noStroke();
  rows = 8;
  cols = 8;
  gridSquareSize = 50;

  bSquares = new BlackSquare[cols][rows];
  wSquares = new WhiteSquare[cols][rows];

  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      wSquares[i][j] = new WhiteSquare(i, j, gridSquareSize, white);
    }
  }

  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      bSquares[i][j] = new BlackSquare(i, j, gridSquareSize, black);
    }
  }


  //for (int i = 0; i < cols; i++) {
  //for (int j = 0; j < rows; j++) {
  //  wSquares[i][j] = new WhiteSquare(i, j, gridSquareSize);
  //  black = !black;
  //}
  //black = !black;
}
//}

void draw() {

  // every time daw runs, we want to go through the grid 2d array and update and render each GridSquare object
  // update represents getting hungry
  // render takes care of drawing
  //for (int i = 0; i < cols; i++) {
  //  for (int j = 0; j < rows; j++) {
  //    bSquares[i][j].update();
  //    bSquares[i][j].render();
  //    wSquares[i][j].render();
  //  }
  //}


  // do a double for loop to run through the grid 2D array
  // creating new alternating black and white GridSquare objects
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      this.black = bSquares[i][j].squareColor;
      this.white = wSquares[i][j].squareColor;

      if (white) {
        wSquares[i][j].render();
        white = !black;
      } 
      if (black) {
        bSquares[i][j].update();
        bSquares[i][j].render();
        white = !black;
      }
    }
  }

  //for (int i = 0; i < cols; i++) {
  //for (int j = 0; j < rows; j++) {
  //  wSquares[i][j].render();
  //}
  //}
  //  
  // determine which gid slot mouse is over
  int currentHorizSquare = mouseX / 50;
  int currentVertSquare = mouseY / 50;

  // do mouseOver-based feeding only on **valid** grid slots
  if (currentHorizSquare >= 0 && currentHorizSquare <= 7 && currentVertSquare >= 0 && currentVertSquare <= 7) {
    bSquares[currentHorizSquare][currentVertSquare].feed();
  }
}