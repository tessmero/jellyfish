// shorthands
var pi = Math.PI
var pio2 = Math.PI/2
var pio4 = Math.PI/4
var twopi = 2*Math.PI
function v(){return new Vector(...arguments)}
function vp(){return Vector.polar(...arguments)}

var rand = Math.random

function randRange(min,max){
    return min + rand()*(max-min)
}

//non-negative mod
function nnmod(a,b){
    var r = a%b
    return (r>=0) ? r : r+b
}

// weighted avg
function avg(a,b,r=.5){
    return (a*(1.0-r)) + (b*r)
}
function va(a,b,r=.5){
    return v(avg(a.x,b.x,r),avg(a.y,b.y,r))
}
function bezier(points,r){
    if( points.length == 1 ) return points[0];
    var ps = []
    for( var i = 1 ; i < points.length ; i++ ){
        ps.push( va(points[i-1],points[i],r) )
    }
    return bezier(ps,r)
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}