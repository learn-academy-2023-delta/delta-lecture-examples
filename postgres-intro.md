# Postgres Introduction

## Revisit Classes

```ruby
class Student
  def initialize(name, cohort, year)
    @name = name
    @cohort = cohort
    @year = year
  end
end

Student.new("Elyse", "Alpha", 2021)
Student.new("Gene", "Delta", 2022)
Student.new("Paul", "Delta", 2023)
Student.new("Brandon", "Delta", 2023)
```

- Databases is a place to store data
- Model: class or structure of the data
  - Columns will reflect the attributes
  - Rows will reflect the data
- Primary Key: unique identifier (ID)
  - Usually an integer

ID	Name	Cohort	Year
1	Elyse	Alpha	2021
2	Gene	Delta	2022
3	Paul	Delta	2023
4	Brandon	Delta	2023
5	Chris	Delta	2023
6	Chris	Delta	2023


# SQL
General Purpose Languages - JavaScript, Ruby
Domain Specific Languages - HTML, Rspec, Postres
Postgres:
  - domain specific language who's job is to talk to databases
  - open source object relational database management system
  - flavor of SQL with OOP

List databases on local:
`$ psql`
`$ \l` - shows a list of all databases
q and exit to get back to normal terminal file structure

- Query: either a request for data or for action on the data, or both


Select all instances and columns from Country DB:
SELECT *
FROM country;

Select all instances only in the name, region, and continent columns from Country DB:
SELECT name, region, continent
FROM country;

Limit above results to first 10 based on Primary Key:
SELECT name, region, continent
FROM country
LIMIT 10;

Find countries that exist in North America:
SELECT name, continent, population
FROM country
WHERE continent = 'North America';

Find countries that do not exist in North America:
SELECT name, continent, population
FROM country
WHERE continent != 'North America';

Use where to find the countries that have a population less than 1 million:
SELECT name, continent, population
FROM country
WHERE population < 1000000;

Use where to find the countries that have a population less than 1 million and are in North America:
SELECT name, continent, population
FROM country
WHERE population < 1e6
AND continent = 'North America';

Use where to find the countries that have a population less than 1 million or are in North America:
SELECT name, continent, population
FROM country
WHERE population < 1e6
OR continent = 'North America';


Use LIKE to find any countries that exist in any America (use wildcard: % operator):
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America';

Limit last results to 10:
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'
LIMIT 10;

Order countries based on independent year:
SELECT name, region, indepyear
FROM country
ORDER BY indepyear

Reverse the above order:
SELECT name, region, indepyear
FROM country
ORDER BY indepyear DESC
LIMIT 10

Remove null values from above queries:
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10

Create an alias for population density:
SELECT name, surfacearea, population, population/surfacearea AS population_density
FROM country
WHERE population != 0 ;





