# Intro to Rails 6/7/2023

- Ruby on Rails is a framework
- Frameworks dictate flow of control
- MVC: Model, View, Controller
  - Model: database layer
  - View: user experience or UI
  - Controller: dictates what data should be collected from the model and how it should be sent to the view

  ## Building a Rails App
  `$ rails new rails-intro -d postgresql -T`

- Rails is open source
- Convention over configuration
- Rails magic


Start Rails server:
`$ rails server` OR `$ rails s`
cnt + C to exit server

Creates a database
`$ rails db:create`

# Rails Tour
- Gemfile: consists of all the gems in a Rails app.  (like package.json in React)
- MVC
  - app/controllers
  - app/models
  - app/views
- config/routes: describes requests that will be used to get to a view
- db: stands for database
- README

