class Jellyfish {

    constructor(){        
        this.legs = []
        for( let i = 0 ; i < 5 ; i++ ){
            this.legs.push(new Leg())
        }
        
        this.topPos = v(.5,.5)
        this.topVel = v(0,0)
        
        this.botPos = v(.5,.6)
        this.botVel = v(0,0)
        
        this.randomTarget()
    }
    
    randomTarget(){
        this.targetPos = v(randRange(.1,.9),randRange(.1,.9)) 
    }
    
    update(dt){
        
        // move top of head towards target
        var tp = this.targetPos
        var d = tp.sub(this.topPos)
        var dist = d.getMagnitude()
        if( dist > .01 ){
            var accel = d.mul(1e-5*dt)
            this.topVel = this.topVel.add(accel)
        }
        
        // drag bottom of head behind top of head
        d = this.topPos.sub(this.botPos)
        dist = d.getMagnitude()
        if( dist > .02 ){
            var accel = d.mul(2e-5*dt)
            this.botVel = this.botVel.add(accel)
        }
        
        // apply physics to head
        this.topPos = this.topPos.add(this.topVel)
        this.botPos = this.botPos.add(this.botVel)
        this.topVel = this.topVel.mul(1.0 - (dt*2e-3))
        this.botVel = this.botVel.mul(1.0 - (dt*2e-3))
        
        // update legs' anchor points 
        // based on position of top + top/bottom angle
        //global.debugLines = [['green', this.topPos,this.botPos]]
        let dangle = d.getAngle()
        let c = this.topPos.sub(vp(dangle,.01))
        let rad = .01
        let left = c.add(vp(dangle+pio2,rad))
        let right = c.sub(vp(dangle+pio2,rad))
        for( let i = 0 ; i < this.legs.length ; i++ ){
            //var angle = dangle+twopi*i/this.legs.length
            //var p = c.add(vp(angle,rad))
            var p = va(left,right,i/this.legs.length)
            this.legs[i].data[0] = p.x
            this.legs[i].data[1] = p.y
            this.legs[i].data[2] = 0
            this.legs[i].data[3] = 0
        }
        
        this.legs.forEach(l => l.update(dt))
    }
    
    reset(){
        this.legs.forEach(l => l.reset())
    }
    
    drawPoints(g){
        this.legs.forEach(l => l.drawPoints(g))
    }
}