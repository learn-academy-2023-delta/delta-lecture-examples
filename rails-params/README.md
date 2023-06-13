# Rails Params 6/13/2023

### Request-response cycle

- request
  - location: url
  - action: http verbs - get, post, put, patch, delete
- response
  - status code: 100, 200 (success), 300, 400 (request error), 500 (server-side error)
  - payload: html - can be UI, JSON

### Params

- short for parameters, additional information passed through a url that modifies the way a page is displayed
- params hash data structure, key values
- can be seen in the stack trace in your terminal
  - `Parameters: {"username"=>"Joe", "logged_in"=>"true"}`
- params are always strings
