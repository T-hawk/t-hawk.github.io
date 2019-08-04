let branches = [];
const WIDTH = 400;
const HEIGHT = 400;
let rate = 45;

function setup() {
    const canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('canvas')
    branches.push(new Branch(width / 2, height, 120, -90))
}

function draw() {
    background(50);
    branches.forEach(function(branch) {
        branch.show();
    })
}

function mouseMoved() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < width) {
        rate = map(mouseX, 0, width, 0, 360, true);
        let length =  map(mouseY, height, 0, 30, 140, true)
        branches = []
        branches.push(new Branch(width / 2, height, length, -90))
    }
}