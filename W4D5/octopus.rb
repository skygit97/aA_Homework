fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# Sluggish Octopus - Find the longest fish in O(n^2) time
def slug_oct(arr)
  sorted = false

  until sorted 
    sorted = true

    (0...arr.length - 1).each do |i|
      if arr[i].length < arr[i + 1].length
        arr[1 + 1], arr[i] = arr[i], arr[i + 1]
        sorted = false
      end
    end
  end

  arr[0]
end

# Dominant Octopus - Find the longest fish in O(n log n) time
def dom_oct(arr)
  prc = Proc.new {|x, y| y.length <=> x.length}
  arr.merge_sort(&prc)[0]
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new {|x, y| x <=> y}

    return self if length <= 1

    mid = length / 2
    left_sort = self.take(mid).merge_sort(&prc)
    right_sort = self.drop(mid).merge_sort(&prc)

    merge(left_sort, right_sort, &prc)
  end

  def merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      if prc.call(left[0], right[0]) == 1
        merged << right.shift 
      else 
        merged << left.shift
      end
    end

    merged + left + right
  end
end

# Clever Octopus = Find the longest fish in O(n) time
def clev_oct(arr)
  longest = arr[0]
  arr.each {|ele| longest = ele if ele.length > longest.length}
  longest
end

# Dancing Octopus - This should take O(n) time
tiles_array = [
  "up",
  "right-up",
  "right",
  "right-down",
  "down",
  "left-down",
  "left", 
  "left-up"
]

def slow_dance(direction, tiles)
  tiles.each.with_index do |tile, i|
    return i if direction == tile 
  end
end

tiles_hash = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6, 
  "left-up" => 7
}

def first_dance(direction, tiles)
  tiles[direction]
end


