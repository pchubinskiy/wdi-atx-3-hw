class Word
  def initialize(original_word)
    @original_word = original_word
  end

  def get_original_word
    @original_word.downcase
    #puts "hi"
  end

  def piglatinize

    vowels = ["e", "o", "a", "i", "u", "y"]
    consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]

    vowels.each do |x|
      if @original_word.start_with? (x)
        new_word = @original_word.concat("way")
        puts new_word
      end
    end

    consonants.each do |x|
      if @original_word.start_with? (x)
        new_word = @original_word.sub(x, "").concat(x).concat("ay")
        puts new_word
      end
    end
  end
end

word = Word.new("apple")
word.get_original_word
word.piglatinize

word2 = Word.new("hippo")
word2.get_original_word
word2.piglatinize

word3 = Word.new("Levi")
word3.get_original_word
word3.piglatinize


