class Branch {
    constructor(x, y, length, angle) {
        this.angle = angle;
        this.length = length;

        radians = this.angle * (Math.PI / 180);

        this.beginPoint = createVector(x, y);
        this.endPoint = createVector(x + length * Math.cos(radians), y + length * Math.sin(radians));

        this.branch();
    }

    show() {
        stroke(255);
        strokeWeight(this.length / 15)
        line(this.beginPoint.x, this.beginPoint.y, this.endPoint.x, this.endPoint.y)
    }

    branch() {
        if (this.length > 3) {
            let newLength = this.length * 0.67;

            branches.push(new Branch(this.endPoint.x, this.endPoint.y, newLength, this.angle - rate))
            branches.push(new Branch(this.endPoint.x, this.endPoint.y, newLength, this.angle + rate))
        }
    }
}