class Leg {

    constructor(){
        
        let n = Math.floor(randRange(50,100))
        this.n = n
        this.dim = 4
        this.data = new Array(n*this.dim).fill(0)
        
        this.reset()
    }
    
    update(dt){
        
        let i, n=this.n, d=this.data, dim=this.dim
        
        let maxdist = 1e-7
        let fmag = dt*global.spring
        
        let mf = 1.0-(dt*global.friction)
        let gf = dt*global.gravity
        
        for( i = 0 ; i < n ; i++ ){
            // advance positions
            d[i*dim+0] += dt * d[i*dim+2]
            d[i*dim+1] += dt * d[i*dim+3]
            
            // apply friction
            d[i*dim+2] *= mf
            d[i*dim+3] *= mf
            
            // apply gravity
            d[i*dim+3] += gf
            
            // each particle drags the next one
            if( (i+1) < n ){
                var dx = d[(i+1)*dim+0] - d[(i)*dim+0]
                if( Math.abs(dx) > maxdist ){
                    var f = (maxdist-dx)*fmag*dt
                    d[(i+1)*dim+2] += f
                    d[(i)*dim+2] -= f
                }
                var dy = d[(i+1)*dim+1] - d[(i)*dim+1]
                if( Math.abs(dy) > maxdist ){
                    var f = (maxdist-dy)*fmag*dt
                    d[(i+1)*dim+3] += f
                    d[(i)*dim+3] -= f
                }
            }
        }
    }
    
    reset(){
        let i, n=this.n, d=this.data, dim=this.dim
        
        for( i = 0 ; i < n ; i++ ){
            
            // set random position
            d[i*dim+0] = .5//rand()
            d[i*dim+1] = .5//rand()
            
            // set random vel
            let v = vp(randRange(0,twopi),randRange(1e-4,1e-3))
            d[i*dim+2] = 0//v.x
            d[i*dim+3] = 0//v.y
            
        }
    }
    
    drawPoints(g){
        let i, n=this.n, d=this.data, s=global.pSize
        for( i = 0 ; i < n ; i++ ){
            g.fillRect(d[i*4+0],d[i*4+1],s,s)
        }
    }
}