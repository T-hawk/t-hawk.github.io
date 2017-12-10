class Branch {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.d = 10
        this.r = this.d / 2
        this.connectedBranches = []
        this.hasConnectedBranches = false
    }
    show() {
        fill(18, 148, 165)
        noStroke();
        ellipse(this.x, this.y, this.d)
        if (this.hasConnectedBranches) {
            strokeWeight(4)
            stroke(18, 148, 165)
            line(this.x, this.y, this.connectedBranches[0].x, this.connectedBranches[0].y)
            line(this.x, this.y, this.connectedBranches[1].x, this.connectedBranches[1].y)
        }
    }
}