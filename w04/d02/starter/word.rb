class Word
  def initialize(original_word)
    @original_word = original_word
  end

  def original_word
    return @original_word.downcase!
  end

  def piglatinize

    vowels = ["a", "e", "i", "o", "u", "y"]
    consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
    #y = "y"
    #splitword = @original_word.split("")

    vowels.each do |x|
      if @original_word.start_with? (x)
        #if splitword[1] != x
          new_word = @original_word.concat("way")
          puts new_word
        #end
      end
    end

    consonants.each do |x|
      if @original_word.start_with? (x)
        new_word = @original_word.sub(x, "").concat(x).concat("ay")
        puts new_word
      end
    end

    # vowels.each do |x|
    #   if @original_word.start_with? y
    #     if splitword[1] === x
    #       new_word = @original_word.sub(y, "").concat(y).concat("ay")
    #       puts new_word
    #     end
    #   end
    # end

  end
end

word = Word.new("apple")
word.piglatinize

word2 = Word.new("hippo")
word2.piglatinize

word3 = Word.new("Levi")
word3.original_word
word3.piglatinize

# word4 = Word.new("yellow")
# word4.get_original_word
# word4.piglatinize


