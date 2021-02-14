class GraphNode

  attr_accessor :val, :neighbors

  def initialize(val)
    @val = val 
    @neighbors = []
  end

  def add_neighbor(node)
    self.neighbors << node
  end
end