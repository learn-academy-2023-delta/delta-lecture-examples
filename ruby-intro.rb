# Ruby Intro 5/31/2023

# MINASWAN - "Matz is nice and so we are nice"

# Ruby is:
  # DYNAMIC - Can change the data type of a variable
  # INTERPRETED - Read line by line through an interpreter
  # OPEN SOURCE - Open to anybody to contribute to the code base
  # SCRIPTING LANGUAGE - Makes evaluations and exectures logical operations
  # OBJECT ORIENTED PROGRAMMING - Everything that you interact with is an instance of a class (is an object)

    # The class is the ideal or form
    # The object is the implemtation of the form, the actual thing

# Interactive Ruby (IRB) - can run Ruby commands directly in terminal
  # irb enters the console
  # clear ctrol + l
  # exit will exit IRB

# _____________
# Ruby Data Types
  # Integers - essentially numbers that we can perform mathmatical operations
  # Floats - numbers with decimals

 9 * 9 # 81 
 9.5 * 6.4 # 60.800000000000004 
 5 / 2 # 2 
 5.0 / 2 # 2.5 

  # Strings
    # using single quotes
    'hello!'
    "Hey y'all"

  
  # Boolean
    true 
    false

  # Relational Operators
  7 < 9 # true
  7 > 9 # false
  5.0 <= 5 # true

  # Equality Operators
  # strict equality is the same as equality in Ruby as it does not support type coercion

  3 == 3 # true
  3 == '3' # false

  # Negation
  3 != '3' # true

  # Logical Operators
  'hi' == 'hi' && 6 > 4 # true
  'hi' == 'hi' || 6 <= 4 # true

  # Nil - Ruby version of null (absence of value)
  # Symbol - is a unique key to a value
  # Undefined


# Variables
  # casing convention is snake_case

  my_name = 'Elyse'
  my_name = 7
  my_name = 'Elyse'

# String Interpolation
"Hey there, #{my_name}!" # "Hey there, Elyse!" 

# Built in methods

'Hey Delta!'.length # 10
my_name.length # 5
my_name.upcase # "ELYSE"
my_name.capitalize # "Elyse" 
my_name.downcase! # "elyse" 
my_name.capitalize # "Elyse" 
my_name.reverse # "esyle" 


my_name.delete'y' # "else" 
my_name.delete('y') # "else"

my_name.include?('s') # true 
my_name.include?('e' && 's') # true

3.class # Integer
4.0.class # Float 
my_name.class # String 

4.to_s # "4" 
'9'.to_i # 9

num = 4
num.to_s
num # 4
num = num.to_s 
num # "4"

# Turning accessors into mutators using bang operator!
my_name.upcase!
my_name # "ELYSE"

# Arrays
my_nums = [2, 3, 4, 5, 6]
my_nums.length # 5
my_nums[4] # 6
my_nums[-1] # 6
my_nums.last # 6
my_nums.first # 2
my_nums.reverse # [6, 5, 4, 3, 2]
my_nums.reverse.first # 6

# mutate element in array
my_nums[4] = 9
my_nums # [2, 3, 4, 5, 9] 

# Shovel Operator - mutator that acts like push
my_nums << 99 # [2, 3, 4, 5, 9, 99] 

# stringified output
puts 'hello' # hello
puts 9 # 9
puts my_nums

# raw data output
p my_nums # [2, 3, 4, 5, 9, 99]