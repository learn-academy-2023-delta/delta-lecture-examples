# Active Record Associations

- has_many belongs_to relationship
- foreign key connects the two tables
  - foreign key lives on the belongs_to table
  - foreign key is primary key of the table you are connecting to

## Create Rails App
`$ rails new associations -d postgresql -T`
`$ cd associations`
`$ rails db:create`

## Create Structure
`$ rails g model Cohort name:string year:string`
`$ rails db:migrate`

`$ rails g model Student name:string cohort_id:integer`
`$ rails db:migrate`

## Setting up Relationship in Models

app/models/cohort.rb
```ruby
class Cohort < ApplicationRecord
  has_many :students
end
```

app/models/student.rb
```ruby
class Student < ApplicationRecord
  belongs_to :cohort
end
```


## Creating Data
```ruby
Cohort.create(name:'Delta', year:'2023')
Cohort.create(name:'Alpha', year:'2021')
Cohort.create(name:'Delta', year:'2022')

delta2023 = Cohort.find(1)
delta2023.students
delta2023.students.create(name:'Miguel')
Cohort.find(1).students.create(name:'Ricky')

Cohort.find(2).students.create(name:'Elyse')

delta22 = Cohort.find(3)
delta22.students.create(name:'Gene')
```

Rails console is for writing Ruby code to query database
To run terminal commands, make sure to exit Rails console
