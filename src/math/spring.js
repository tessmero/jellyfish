// constraint between to points
// i.j are indices in global.pManager.data
class Spring {
    constructor(i, j, restLength) {
        this.i = i;
        this.j = j;
        this.restLength = restLength;
        this.prevLength = restLength;
        this.springConstant = 2e-3;
        this.dampingConstant = 1;
    }

    update(dt) {
        
        // Calculate the vector between the two balls
        let pman = global.pManager
        let xy = pman.data
        let pi = v(xy[this.i],xy[this.i+1])
        let pj = v(xy[this.j],xy[this.j+1])
        let displacement = pj.sub(pi)

        // Calculate the current length of the spring
        let currentLength = displacement.getMagnitude();
        let dAngle = displacement.getAngle()

        // Calculate the force exerted by the spring
        let forceMagnitude = this.springConstant * (currentLength - this.restLength);
        let tooLong = true
        if( forceMagnitude < 0 ){
            tooLong = false
            dAngle += Math.PI
            forceMagnitude *= -1
        }

        // apply damping
        let relativeSpeed = (currentLength - this.prevLength) / dt
        if( tooLong == (relativeSpeed < 0) ){
            let dampingMagnitude = Math.abs(relativeSpeed) * this.dampingConstant
            forceMagnitude = Math.max( 0, forceMagnitude - dampingMagnitude )
        }
        this.prevLength = currentLength
        
        // Calculate the force vector
        let force = Vector.polar( dAngle, forceMagnitude )
        
        // Apply damping
        //let dampingForce = relativeVelocity.mul(this.dampingConstant);
        //force = force.sub(dampingForce);

        // Apply the force to the balls
        this.ball1.applyForce(force,dt);
        this.ball2.applyForce(force.mul(-1),dt);
    }
}






