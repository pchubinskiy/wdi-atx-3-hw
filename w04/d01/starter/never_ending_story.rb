story = [
  'Fry is born without a delta brainwave',
  'As a result, Fry is cryogenically frozen until 2999',
  'In the future, Fry works on a spaceship',
  'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
  'Fry encounters his grandmother, then inadvertently sires his father'
]

begin
  story.each do |x|

    print x + ". Should we continue? (y/n)"
    answer = gets.chomp.downcase
    raise if x === 'Fry encounters his grandmother, then inadvertently sires his father' and answer == "y"
    if answer == "y"
      print x + ". "
    elsif answer == "n"
      break
    else
      redo
    end
  end
rescue
  retry
end
