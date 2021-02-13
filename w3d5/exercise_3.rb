class Map

  attr_reader :array

  def initialize
    @array = []
  end

  def set(key, value)
    pair_idx = array.index {|pair| pair[0] == key}

    if pair_idx
      array[pair_idx][1] = value
    else
      array.push([key, value])
    end

    value
  end

  def get(key)
    array.each {|pair| pair[0] == key ? pair[1] : nil}
  end

  def delete(key)
    value = get(key)
    array.select! {|pair| pair[0] != key}
    value
  end

  def show
    deep_dup(array)
  end
  
  def deep_dup(arr)
    arr.map {|ele| ele.is_a?(Array) ? deep_dup(ele) : ele}
  end 

end