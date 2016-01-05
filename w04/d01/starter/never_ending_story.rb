story = [
  'Fry is born without a delta brainwave',
  'As a result, Fry is cryogenically frozen until 2999',
  'In the future, Fry works on a spaceship',
  'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
  'Fry encounters his grandmother, then inadvertently sires his father'
]

# story.each do |x|

#   print x + ". Should we continue? (y/n)"
#   answer = gets.chomp.downcase
#   if answer == "y"
#     print x + ". "
#     if x === 'Fry encounters his grandmother, then inadvertently sires his father'
#       redo
#     end
#   elsif answer == "n"
#     break
#   else
#     redo
#   end
# end


for x in story

  print x + ". Should we continue? (y/n)"
  answer = gets.chomp.downcase
  if answer == "y"
    print x + ". "
    retry if x === 'Fry encounters his grandmother, then inadvertently sires his father'
  elsif answer == "n"
    break
  else
  end
end
