# out: ../js/graph.js, sourcemap: true

class Graph
  constructor: (@nodes, @edges) ->
    @nodes ?= []
    @edges ?= []

  addNode: (node) ->
    @nodes.push node

  addEdge: (edge) ->
    @edges.push edge

  getNodes: ->
    @nodes

  getEdges: ->
    @edges
