class HomeController < ApplicationController

  def greeter
    render html: 'Hey!'
  end

  def joke
    
  end

  def answer
    render html: 'Because their relationships had too many validations.'
  end

  def current_cohort
    @current = 'The amazing people of Delta 2023!'
    @students = ['Michael', 'Chris', 'Padge', 'Jacob','Jesus', 'Miguel', 'Paul', 'Brandon','Ricky']
  end

  def landing

  end

end
