let branches = [];
const WIDTH = 400;
const HEIGHT = 400;
let mouseAngle;
let depthOfBranches = 0;

function setup() {
    const canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('canvas')
    branches.push(makeFirstBranch())
    createNewBranches(15, branches[0], 0, 8, 80)
}

function draw() {
    background(50);
    branches = []
    branches.push(makeFirstBranch())
    depthOfBranches += 1;
    createNewBranches(mouseX / 9, branches[0], 0, mouseY / 5, 80)
    branches.forEach(function(branch){
        branch.show()
    })
    if (depthOfBranches == 40) {
        depthOfBranches = 0;
    }
}

function createNewBranches(angle, branch, depth, rate, dist) {
    if (depth < 4) {
        let pos1 = findPointOnCircle(branch, angle, dist, 'add')
        let pos2 = findPointOnCircle(branch, angle, dist, 'sub')
        let branch1 = new Branch(pos1[0], pos1[1])
        let branch2 = new Branch(pos2[0], pos2[1])
        branches.push(branch1)
        branches.push(branch2)
        branch.connectedBranches.push(branch1)
        branch.connectedBranches.push(branch2)
        branch.hasConnectedBranches = true
        createNewBranches(angle + rate, branch1, depth + 1, rate + 2, dist - 15)
        createNewBranches(angle + rate, branch2, depth + 1, rate + 2, dist - 15)
    }
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function findPointOnCircle(branch, angle, dist, operation) {
    let x;
    let y;
    if (operation == 'sub') {
        angle = -angle
    }
    x = cos(toRadians(270 + angle)) * dist + branch.x
    y = sin(toRadians(270 + angle)) * dist + branch.y
    return [x, y]
}

function makeFirstBranch() {
    let branch = new Branch(WIDTH / 2, HEIGHT - 5)
    return branch
}