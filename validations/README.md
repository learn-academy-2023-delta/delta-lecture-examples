# Active Record Validations and Specs
- Validations are Active Record statements that check the data when creating or updating an instance and either allow the data to be utilized or rejected if not valid

## Adding Rspec
`$ bundle add rspec-rails`
- bundle: indication that I am interacting with the gem file

`$ rails g rspec:install`

## Model
`$ rails g model Veterinarian name:string patients:integer`

## TDD - Test Driven Development
```ruby
require 'rails_helper'

RSpec.describe Veterinarian, type: :model do
  it 'is valid with valid attributes' do 
    veterinarian = Veterinarian.create(name: 'Dr. Doolitle', patients: 1000)
    expect(veterinarian).to be_valid
  end
  
  it 'is not valid without a name' do 
    veterinarian = Veterinarian.create(patients: 1000)
    expect(veterinarian.errors[:name]).to_not be_empty
  end

  it 'is not valid without patients' do 
    veterinarian = Veterinarian.create(name: 'Dr. Doolitle')
    expect(veterinarian.errors[:patients]).to_not be_empty
  end

  it 'is not valid if name is outside 2-20 characters' do 
    veterinarian = Veterinarian.create(name: 'D', patients: 1000)
    expect(veterinarian.errors[:name]).to_not be_empty

    long_veterinarian = Veterinarian.create(name: 'Dr. Doolitle talks to all the animals', patients: 1000)
    expect(long_veterinarian.errors[:name]).to_not be_empty
  end
end
```

```ruby
class Veterinarian < ApplicationRecord
  validates :name, :patients, presence: true
  validates :name, length: { in: 2..20 }
end
```