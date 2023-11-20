
const global = {
    
    // total time elapsed in milliseconds
    t: 0,
    resetCountdown: 5000,
    resetDelay: [5000,8000],
    
    
    // graphics context
    canvas: null,
    ctx: null,

    // 
    backgroundColor: 'black',
    pColor: 'white',
    
    //
    pSize: .002,
    spring: 8e-6, // spring force multiplier
    friction: 4e-4, // fraction of speed lost per ms
    gravity: 2e-9,//1e-7, // dist/ms/ms
    
    // relate screen pixels to virtual 2D units
    canvasOffsetX: 0,
    canvasOffsetY: 0,
    canvasScale: 0,
    centerPos: v(.5,.5),
    screenCorners: null, 
    
    // mouse
    canvasMousePos: v(0,0),     //pixels
    mousePos: v(0,0),           //virtual units
    
    // objects
    jellyfish: [], // Jellyfish instances
    targetPos: v(.5,.5),
    
    // debug
    debugBezierPoints: false,
}