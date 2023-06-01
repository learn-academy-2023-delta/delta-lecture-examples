# Ruby Objects and Classes 6/1/23

# class Hulu
# end

# p Hulu.new #<Hulu:0x000000012f08ccf0>

# We want to be able to hold data in our class
# We want to be able to retrieve data that we've set

#______________
# Setters

# class Hulu
#   def set_show_data(title, description)
#     @title = title
#     @description = description
#   end
# end

# my_hulu = Hulu.new
# my_hulu.set_show_data('Better Call Saul') #<Hulu:0x000000012b82be88 @title="Better Call Saul">

# my_hulu.set_show_data('Better Call Saul', 'Spinoff of Breaking Bad')#<Hulu:0x000000013d9639d8 @title="Better Call Saul", @description="Spinoff of Breaking Bad">
# p my_hulu

#______________
# Getters

# class Hulu
#   def set_show_data(title, description)
#     @title = title
#     @description = description
#   end

#   def get_title 
#     @title
#   end

#   def get_description
#     @description
#   end
# end

# my_hulu = Hulu.new
# # my_hulu.set_show_data('Better Call Saul') #<Hulu:0x000000012b82be88 @title="Better Call Saul">

# my_hulu.set_show_data('Better Call Saul', 'Spin-off of Breaking Bad')#<Hulu:0x000000013d9639d8 @title="Better Call Saul", @description="Spin-off of Breaking Bad">
# p my_hulu

# p my_hulu.get_title # "Better Call Saul"
# p my_hulu.get_description # "Spin-off of Breaking Bad"


# _______________
# Initialize - a method that allows us to pass information to a new instance of a class

# class Hulu
#   def initialize(title, description)
#     @title = title
#     @description = description
#   end

#   def get_title 
#     @title
#   end

#   def get_description
#     @description
#   end
# end

# my_hulu = Hulu.new('Rick and Morty', 'Dark comedy about a family')
# p my_hulu # #<Hulu:0x000000013d89eca0 @title="Rick and Morty", @description="Dark comedy about a family">
# p my_hulu.get_title # "Rick and Morty"

# _______________
# Updating instance variables

# class Hulu
#   def initialize(title, description)
#     @title = title
#     @description = description
#     @watched = false
#   end

#   def get_title 
#     @title
#   end

#   def get_description
#     @description
#   end

#   def has_watched 
#     @watched = true
#   end

#   def show_data 
#     if @watched 
#       "You have watched the show #{@title}, which is about #{@description}."
#     else
#       "You have not watched the show #{@title}, which is about #{@description}."
#     end
#   end
# end

# tiny_world = Hulu.new('Tiny World', 'Nature show about small animals')
# p tiny_world #<Hulu:0x000000013d9317d0 @title="Tiny World", @description="Nature show about small animals", @watched=false>
# p tiny_world.show_data # "You have not watched the show Tiny World, which is about Nature show about small animals."
# tiny_world.has_watched 
# p tiny_world.show_data # "You have watched the show Tiny World, which is about Nature show about small animals."


# ______________
# Attribute Accessor
  # attr_accessor allows us to make more methods. 

class Hulu
  attr_accessor :title, :description, :watched
  def initialize(title, description)
    @title = title
    @description = description
    @watched = false
  end

  # Commented out since attr_accessor is doing this job:
  # def get_title 
  #   @title
  # end

  # def get_description
  #   @description
  # end

  # def has_watched 
  #   @watched = true
  # end

  def show_data 
    if @watched
      "You have watched the show #{@title}, which is about #{@description}."
    else
      "You have not watched the show #{@title}, which is about #{@description}."
    end
  end
end

barry = Hulu.new('Barry', 'Marine becomes hitman while pursuing acting')
p barry.title # "Barry"
barry.title = 'Barry!'
p barry.title # "Barry!"
p barry.show_data # "You have not watched the show Barry!, which is about Marine becomes hitman while pursuing acting."
barry.watched = true
p barry.show_data # "You have watched the show Barry!, which is about Marine becomes hitman while pursuing acting."