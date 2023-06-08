# Active Record Intro 6/8/2023

- Rails uses gems to piece together the application
- Active Record is a gem
  - ORM: Object Relational Mapping (translator for Ruby and SQL)

## Create Rails App
`$ rails new active-record-intro -d postgresql -T`
`$ cd active-record-intro`
`$ rails db:create`

- During Development: databases live on your machine
- Rails app: structure of the database can be accessed on GitHub
- During Production: database will exist on a seperate server

## MVC - Model View Controller
Model: database
- model class defines the structure of the database

### Rails Generate
`$ rails generate model Schedule day:string date:date event:string`

Check to make sure migration file looks good then run
`$ rails db:migrate`

This creates the Schema

Schema is READ ONLY!!! DO NOT MODIFY DIRECTLY
- Schema is a representation of your database structure

## Interacting with the Database
To enter Rails console:
`$ rails console` or `$ rails c`

To get all instance from the model:
```ruby
> Schedule.all
> Schedule.create(day: 'Thursday', date: '2023-06-08', event: 'Active Re
cord Migrations')
> Schedule.create(day: 'Friday', date: '2023-06-09', event: 'weekly assessment')
```

# CRUD
- Create: create method and pass key value pairs to create an instance
- Read: 
  - .all returns all instance in the database
  - .first returns first instance in database
  - .second
  - .last
  - .find() returns instance based on primary key provided as argument
  - .where(event: 'weekly assessment') returns instances in an array that match the key and value passed in as argument
- Update: update instances in the database
  - assign instance we want to update to a variable
  ```ruby
  assessment = Schedule.last
  assessment.update(event: 'Awesome Weekly Assessment')
  assessment # returns the modified instance that has been permanently mutated
  ```
- Delete
  - like update we need to find the instance in the database
  ```ruby
  migrations = Schedule.find(1)
  migrations.destroy
  Schedule.all # shows all instances with migrations removed
  ```