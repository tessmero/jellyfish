
    
    
// Render graphics
function draw(fps, t) {
    
    var ctx = global.ctx
    var canvas = global.canvas
    ctx.fillStyle = global.backgroundColor
    ctx.fillRect( 0, 0, canvas.width, canvas.height )

    var g = ctx
    
    g.fillStyle = global.pColor
    global.jellyfish.forEach(j=>j.drawPoints(g))

    if( false ){
        //debug
        // draw screen corners
        var r = .1
        ctx.fillStyle = 'red'
        global.screenCorners.forEach(c => ctx.fillRect( c.x-r, c.y-r, 2*r, 2*r ))
    }
    
    if( global.debugLines ){
        global.debugLines.forEach(l => {
            let [color,a,b] = l
            g.lineWidth = .001
            g.strokeStyle = color
            g.beginPath()
            g.moveTo(a.x,a.y)
            g.lineTo(b.x,b.y)
            g.stroke()
        })
    }


    //ctx.clearRect( 0, 0, canvas.width, canvas.height )

    //debug
    //drawFilledChunks(ctx)

    //y += 30
    //ctx.fillText(`camera: ${cameraX.toFixed(2)}, ${cameraY.toFixed(2)}, ${zoomLevel.toFixed(2)}`, x, y);
    //y += 30
    //ctx.fillText(gameState, x, y);
    //y += 30 
    //ctx.fillText(`canvas pos: ${canvasMouseX}, ${canvasMouseY}`, x, y);
    //y += 30
    //ctx.fillText(`virtual pos: ${virtualMouseX}, ${virtualMouseY}`, x, y);
}