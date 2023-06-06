require 'rspec'
require_relative 'rspec_library'
require_relative 'rspec'

describe 'Library' do
  it 'has to be real' do
    expect{ Library.new }.to_not raise_error
  end

  it 'has an array of books' do
    my_library = Library.new
    expect(my_library.book_collection).to be_a Array
  end

  it 'has an array of books that I have added to my collection' do
    giver = Book.new
    harry = Book.new
    my_library = Library.new
    my_library.add_books giver
    my_library.add_books harry
    expect(my_library.book_collection).not_to be_empty
    expect(my_library.book_collection.length).to eq 2
  end
end