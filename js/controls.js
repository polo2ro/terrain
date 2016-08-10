function addSVG( div ) {
  return div.insert( "svg", ":first-child" )
    .attr( "height", 800 )
    .attr( "width", 800 )
    .attr( "viewBox", "-900 -900 2000 2000" );
  }

var myMap = d3.select( "div#container" );
var svg = addSVG( myMap );

myMap.append( "button" )
  .text( "Generate high resolution map" )
  .on( "click", function () {
    doMap( svg, defaultParams );
  });
