print "Name for order: "
name1 = gets.chomp
print "#{name1} wants to order: "
order_1 = gets.chomp

orders = {
    1 => {
      "name1" => "#{name1}",
      "order 1" => "#{order_1}"
    }
  }

print "#{orders[1]["name1"]} ordered a #{orders[1]["order 1"]}" + "\n"

print "Add another item to the order? (y/n)"
reply = gets.chomp

if reply === "y"
  print "#{name1} wants to order: "
  order_2 = gets.chomp

orders = {
    1 => {
      "name1" => "#{name1}",
      "order 1" => "#{order_1}",
      "order 2" => "#{order_2}"
    }
  }
end

if reply === "y"
puts "#{orders[1]["name1"]} ordered #{orders[1]["order 1"]} and #{orders[1]["order 2"]}"
else
puts "#{orders[1]["name1"]} ordered #{orders[1]["order 1"]}"
end

orders = {
    1 => {
      "name1" => "#{name1}",
      "order 1" => "#{order_1}",
      "order 2" => "#{order_2}"
    }
  }

print "Would you like to make another order? (y/n)"
reply2 = gets.chomp

if reply2 === "y"
  print "Name for order: "
  name2 = gets.chomp
  print "#{name2} wants to order: "
  order_3 = gets.chomp

orders = {
    1 => {
      "name1" => "#{name1}",
      "order 1" => "#{order_1}",
      "order 2" => "#{order_2}"
    },
    2 => {
      "name2" => "#{name2}",
      "order 3" => "#{order_3}"
    }
}

puts "#{orders[1]["name1"]} ordered #{orders[1]["order 1"]} and #{orders[1]["order 2"]}" + "\n" + "#{orders[2]["name2"]} ordered a #{orders[2]["order 3"]}" + "\n"

else
  puts "OK"
end



# print "Add another item to the order? (y/n)"
# reply2 = gets.chomp

# if reply2 === "y"
#   print "Name for order: "
#   name3 = gets.chomp
#   print "#{name3} wants to order: "
#   order_3 = gets.chomp

#   orders[name3] = {
#     "order 3" => "#{order_3}"
#   }
# else
#   print "OK"
# end

# print "#{orders}"
