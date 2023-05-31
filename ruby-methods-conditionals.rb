# Ruby Methods and Conditionals 5/31/23

# Methods in Ruby are like functions in Javascript
# They can take in an input and will produce an output

# To create a method, we define it using "def"
  # def is a keyword in ruby, short for define
# Every def needs a corresponding end
# Give the method a name in snake_case
# invoke the method

def greeter_example
  'Hey Delta! What is going on?'
end

# This won't do anything without being invoked

p greeter_example
# Output --> "Hey Delta! What is going on?"

# Even without a return, Ruby has an implicit return and outputs the last line in the method

p greeter_example.class
# Output --> String

def greeter name
  "Hello #{name}"
end

# p greeter
# ruby-methods-conditionals.rb:22:in `greeter': wrong number of arguments (given 0, expected 1) (ArgumentError)

p greeter "Elyse"
# Output --> "Hello Elyse"

# We can use () for multiple parameters/arguments for readability 

def multiply(num1, num2)
  num1 * num2
end

p multiply(5, 8)
# just like a function, a method is reuseable 
p multiply(3, 7)
p multiply(1, 100)
p multiply(42, 2)

# A method with conditional logic
# Every if needs an end

def greater_num(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else 
    "#{num1} and #{num2} are equal. Both loved!"
  end
end

p greater_num(27, 22)
p greater_num(6, 25)
p greater_num(42, 42)
# Output -->
# "27 is greater"
# "25 is greater"
# "42 and 42 are equal. Both loved!"

# gets - a method that will stop the execution of the program and wait for input

# my_name = gets
# p my_name
# "Gene Martinez \n"

# \n - a line break seen by the almighty yet reliant on humans computer
# .chomp - gets rid of line breaks

# my_name = gets.chomp
# p my_name
# "Gene Martinez"


# puts 'What is your name?'
# your_name = gets.chomp
# p "Thank you for being great #{your_name}"

# my_name = gets.chomp
# p my_name

# if my_name == 'Gene'
#   p 'Hey there Gene'
# else
#   p "Hi there, #{my_name}"
# end

# gets will result in a string
# need to modify the pushup count to a number, use .to_i

puts 'Enter your name'
user_name = gets.chomp
p user_name
puts 'How many pushups can you do in a minute?'
user_pushups = gets.chomp.to_i
p user_pushups

def go_or_nogo(name, pushup_count)
  if pushup_count >= 40
    "Hey #{name}! #{pushup_count} pushups is a GO!"
  else
    "Hey #{name}! #{pushup_count} pushups is a NO GO! Drop and give me 50 more!"
  end
end

p go_or_nogo(user_name, user_pushups)