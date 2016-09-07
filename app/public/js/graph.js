var Graph;

Graph = (function() {
  function Graph(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    if (this.nodes == null) {
      this.nodes = [];
    }
    if (this.edges == null) {
      this.edges = [];
    }
  }

  Graph.prototype.addNode = function(node) {
    return this.nodes.push(node);
  };

  Graph.prototype.addEdge = function(edge) {
    return this.edges.push(edge);
  };

  Graph.prototype.getNodes = function() {
    return this.nodes;
  };

  Graph.prototype.getEdges = function() {
    return this.edges;
  };

  return Graph;

})();
