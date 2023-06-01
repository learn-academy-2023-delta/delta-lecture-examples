# Ruby Hashes 6/1/23

# Boolean
# Integers
# Floats
# Nil
# String
# Undefined
# Symbol

# Ruby hash - a custom key value pair 
# the key is a symbol

my_friends = { dragon: 'Drogon', direwolf: 'Ghost', phoenix: 'Fawkes', hippogriff: 'Buckbeak'}

p my_friends # {:dragon=>"Drogon", :direwolf=>"Ghost", :phoenix=>"Fawkes", :hippogriff=>"Buckbeak"}

# => - hash rocket, older syntax for hashes but still may be used and therefore good to know

people = Hash.new
p people # {} - empty hash

# CRUD 
# Create - create content 
# Read - return the data, or a piece of information
# Update - update existing content
# Delete - remove existing content


# Create 

# people = Hash.new 

# Read
# accessing the data, not making changes

# return all the data
p my_friends
# {:dragon=>"Drogon", :direwolf=>"Ghost", :phoenix=>"Fawkes", :hippogriff=>"Buckbeak"}


# to return a specific value, we use bracket notation and the symbol (:key)
p my_friends[:dragon]
# "Drogon"


# Update
# we can add content in the hash

my_friends[:sponge] = 'Bob'
p my_friends
# {:dragon=>"Drogon", :direwolf=>"Ghost", :phoenix=>"Fawkes", :hippogriff=>"Buckbeak", :sponge=>"Bob"}

# we can update the value in the hash as well

my_friends[:dragon] = 'Viserion'
p my_friends

# {:dragon=>"Viserion", :direwolf=>"Ghost", :phoenix=>"Fawkes", :hippogriff=>"Buckbeak", :sponge=>"Bob"}

# we can also update the key
# we first reference the new key, and .delete the old one

my_friends[:kitchensponge] = my_friends.delete(:sponge)
p my_friends

# Delete

my_friends.delete(:kitchensponge)
p my_friends
# {:dragon=>"Viserion", :direwolf=>"Ghost", :phoenix=>"Fawkes", :hippogriff=>"Buckbeak"}

# Enumerables and duck typing

# Modules - grouping together things that have similar properties
# Enumerables - a grouping of things that we can iterate over
# if it walks like a duck, and quacks like a duck, then you can call it a duck

p my_friends.length
# 4 

bbq = {entree: 'brisket stuffed jalapenos', appetizer: 'baked potaters', side: 'corn bread', drink: 'sweet tea', dessert: 'pecan pie'}

bbq.each do |key, value|
  p "#{value} is a #{key}"
end

# Output
# "brisket stuffed jalapenos is a entree"
# "baked potaters is a appetizer"
# "corn bread is a side"
# "sweet tea is a drink"
# "pecan pie is a dessert"

def bbq_menu hash
  hash.map do |key, value|
    "#{value} is a #{key}"
  end
end

p bbq_menu bbq

# ["brisket stuffed jalapenos is a entree", "baked potaters is a appetizer", "corn bread is a side", "sweet tea is a drink", "pecan pie is a dessert"]

p bbq_menu my_friends
# ["Viserion is a dragon", "Ghost is a direwolf", "Fawkes is a phoenix", "Buckbeak is a hippogriff"]

# Difference when using puts
puts bbq_menu my_friends
# Viserion is a dragon
# Ghost is a direwolf
# Fawkes is a phoenix
# Buckbeak is a hippogriff