require 'rspec'
require_relative 'rspec'

# RSpec 6/6/23

# Domain specific language - specialized for a particular task, in this case testing Ruby code

# it is a gem, which is like a code snippet
# rubygems - like yarn for javascript, package manager for Ruby

# Setup
# install RSpec gem
# "import" rspec testing suite
  # require 'rspec' 
# make the connection with the other file
  # require_relative 'rspec'

# TDD test driven development
  # write the test and run it
  # write the code to make the test pass and run it
  # refactor 

# https://rspec.info/features/3-12/rspec-expectations/built-in-matchers/

describe 'Book' do
  it 'has to be real' do
    expect{ Book.new }.to_not raise_error
  end

  it 'has a title' do
    # Arrange
    my_book = Book.new
    # Act
    my_book.title = 'Wealthy Gardener'
    # Assertion
    # Checking data type
    expect(my_book.title).to be_a String
    # Checking specific data
    expect(my_book.title).to eq 'Wealthy Gardener'
  end

  it 'has an author' do
    my_book = Book.new
    expect(my_book.author).to(eq('anonymous'))
    expect(my_book.author).to be_a String
    gardener = Book.new 'John Soforic'
    expect(gardener.author).to eq 'John Soforic'
  end

  it 'can report the current page' do
    my_book = Book.new
    expect(my_book.page).to eq 1
    expect(my_book.page).to be_a Integer
  end

  it 'can read pages' do
    my_book = Book.new
    expect{ my_book.read 10 }.to change{ my_book.page }.from(1).to(11)
  end
end

# To run the test, rspec <filename>
# good failure, expected no Exception, got #<NameError: uninitialized constant Book> with backtrace:

# after writing the code, the test passes
# 1 example, 0 failures

# AAA 
  # Arrange - setup, does it create object or special setting
  # Act - main thing we are testing, focused on behavior
  # Assert - outcomes, verify goodness or badness of responses