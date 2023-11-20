function updateMousePos(event){
    if( global.t < 5000 ) return
    
    var rect = global.canvas.getBoundingClientRect();
    var scaleX = global.canvas.width / rect.width;
    var scaleY = global.canvas.height / rect.height;
    
    global.canvasMousePos = new Vector( 
        (event.clientX - rect.left) * scaleX, 
        (event.clientY - rect.top) * scaleY 
    
    )
    global.mousePos = new Vector( 
        (global.canvasMousePos.x-global.canvasOffsetX)/global.canvasScale, 
        (global.canvasMousePos.y-global.canvasOffsetY)/global.canvasScale
    )
    
    
    // set target to mouse position
    global.jellyfish.forEach( j => {
        j.targetPos = global.mousePos 
        j.resetCountdown = randRange(...global.resetDelay)
    })
}

function mouseMove(e){
    updateMousePos(e)
}

function mouseClick(e){
    updateMousePos(e)
}