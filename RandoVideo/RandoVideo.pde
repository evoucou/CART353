import processing.video.*;

Capture video;

void setup() {
  size(640, 480); 
  video.start();
  video = new Capture(this, 640, 480, 30);
}

void draw() {

  if (video.available()) {
    video.read();
  }
  image(video, 0, 0);
}