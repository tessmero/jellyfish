
const global = {
    
    // total time elapsed in milliseconds
    t: 0,
    resetCountdown: 1000,
    resetDelay: 1000,
    
    
    // graphics context
    canvas: null,
    ctx: null,

    // 
    backgroundColor: 'black',
    pColor: 'white',
    
    //
    pSize: .008,
    spring: 2e-5, // spring force multiplier
    friction: 2e-2, // fraction of speed lost per ms
    gravity: 1e-7,//1e-7, // dist/ms/ms
    
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
    pManager: null, // PointManager instance
    
    // debug
    debugBezierPoints: false,
}