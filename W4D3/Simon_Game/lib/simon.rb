class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false 
    @seq = []
  end

  def play
    until self.game_over
      take_turn
      sleep 0.75
      system("clear")
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    if !self.game_over
      round_success_message
      self.sequence_length += 1
    end
  end

  def show_sequence
    add_random_color

    self.seq.each do |color|
      puts color 
      sleep 0.75
      system("clear")
      sleep 0.75
    end
  end

  def require_sequence
    print "Enter the colors: "
    input = gets.chomp
    self.game_over = true if input.split(", ") != self.seq
  end

  def add_random_color
    self.seq << COLORS.sample
  end

  def round_success_message
    puts "Correct!"
  end

  def game_over_message
    puts "Game Over!"
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
  end
end

g = Simon.new
g.play