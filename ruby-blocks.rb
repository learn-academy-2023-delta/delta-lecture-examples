# Ruby Blocks and Iterables 5/31/2023

# Iteration: repeating a process over and over until a condition is met
  # - For loops
  # - Map
  # - Filter

# While
  # - set a start poin and end point
  # - condition starts as true and will stop once the condition is false

num = 1
while num <= 10
  p num
  num += 1
end

# Methods
  # - methods can take an anonymous function which is called a BLOCK
  #     - keyword do and end
  #     - {}

  # Times - executes a block a certain number of times

5.times do
  p 'hello world'
end

5.times { p 'hello Delta!' }

num = 10
num.times { p 'Howdy!' }

# Each - works on a list of items like an array or object (similar to forEach in JS)

nums = [3, 4, 5, 6, 7]

# nums.each do |value|
#   p value
# end

nums.each do |value|
  p value * 3
end

# This is not mutating the original array
p nums # [3, 4, 5, 6, 7]


# Ranges - list of values with a start and end point that is filled in between

# p 1..10

my_range = 1..10

my_range.each do |value|
  p value + 5
end

letter_range = 'a'..'f'
letter_range.each do |value|
  p value
end

p my_range.to_a # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


# Map - iterator that returns an array of the same length of the array you are acting on

mapped = my_range.map do |num|
  num * 3
end

p mapped # [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

whats_even = my_range.map do |num|
  if num.even?
    'even'
  else
    num
  end
end

p whats_even # [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]


def even_or_odd(array)
  array.map do |num|
    if num.even?
      'even'
    elsif num.odd?
      'odd'
    else
      'huh?'
    end
  end
end

p even_or_odd(2..20) # ["even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even"]


# Select - essentially filter in JS
  # returns a subset
  # has built in if statement

def only_evens(array)
  array.select do |value|
    value.even?
  end
end

# def only_evens(array)
#   array.select { |value| value.even? }
# end

p only_evens(2..20) # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]



# Make it Mutate
names = ['Elyse', 'Gene', 'Jesus', 'Michael', 'Paul']

names.map! do |name|
  name.upcase
end

p names
