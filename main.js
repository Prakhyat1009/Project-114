function preload() {

}

function setup() {
    canvas = createCanvas(450, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 300);
    video.hide();
}

function draw() {
    image(video, 0, 0, 450, 300);
}