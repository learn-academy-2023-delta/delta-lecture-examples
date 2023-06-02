# Ruby Inheritance 6/2/2023

# Object Oriented Programming (OOP):
  # Everything in Ruby is an object which is an instance of a class

# Inheritance: allows classes to have relationships
# Superclass: common behaviors and attributes in a shared class
  # passes information to a subclass

# Subclass: has unique attributes that only this class has + inherits attributes from superclass


class StreamingApp
  attr_accessor :title, :consumed_media
  attr_reader :run_time
  def initialize(title, run_time)
    @title = title
    @run_time = run_time 
    @consumed_media = false
  end

  def update_consumed_media
    @consumed_media = true
  end

  def get_media_data 
    if @consumed_media 
      "You have consumed the media #{@title} which is #{@run_time} long."
    else
      "You have not consumed the media #{@title} which is #{@run_time} long."
    end
  end
end


class YouTube < StreamingApp
  def initialize(title_parameter, run_time_parameter, playlist)
    super(title_parameter, run_time_parameter)
    @playlist = playlist
  end
end

ruby_objects = YouTube.new('2023 - d - Ruby Objects', '60 minutes', '2023 Delta')
p ruby_objects #<YouTube:0x00000001330ae158 @title="2023 - d - Ruby Objects", @run_time="60 minutes", @consumed_media=false, @playlist="2023 Delta">

# ruby_objects.consumed_media = true
# p ruby_objects

ruby_objects.update_consumed_media 
p ruby_objects #<YouTube:0x000000015809dd10 @title="2023 - d - Ruby Objects", @run_time="60 minutes", @consumed_media=true, @playlist="2023 Delta">

p ruby_objects.get_media_data # "You have consumed the media 2023 - d - Ruby Objects which is 60 minutes long."


class Spotify < StreamingApp
  def initialize(title_parameter, run_time_parameter, album, artist)
    super(title_parameter, run_time_parameter)
    @album = album 
    @artist = artist
  end

  def get_spotify_info 
    get_media_data + "  This song was created by #{@artist} and is part of the #{@album} album"
  end
end

has_an_end = Spotify.new('The Ruby Song(has and end)', '2:32 minutes', 'LEARN Learning', 'Mix Master Elyse')

p has_an_end #<Spotify:0x000000011e094718 @title="The Ruby Song(has and end)", @run_time="2:32 minutes", @consumed_media=false, @album="LEARN Learning", @artist="Mix Master Elyse">
p has_an_end.get_spotify_info # "You have not consumed the media The Ruby Song(has and end) which is 2:32 minutes long.This song was created by Mix Master Elyse and is part of the LEARN Learning album"

p has_an_end.get_media_data # "You have not consumed the media The Ruby Song(has and end) which is 2:32 minutes long."