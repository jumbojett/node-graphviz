var sys = require('sys'),
	graphviz = require('../lib/graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Hello)
var n1 = g.addNode( "Hello" );
n1.set( "color", "blue" );
n1.set( "style", "filled" );

// Add node (ID: World)
g.addNode( "World" );

// Add edge between the two nodes
var e = g.addEdge( n1, "World" );
e.set( "color", "red" );

// Generate a dot output in-memory
g.render( "dot", function(render) {
	console.log( "-----------------" )
	console.log( render );
	console.log( "-----------------" )
} );

// Generate a PNG output in-file
g.output( "png", "memory.png" );