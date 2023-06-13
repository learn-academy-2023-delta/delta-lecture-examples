class GithubAccountController < ApplicationController

  def github_user 
    @logged_in = params[:logged_in]
    if @logged_in == 'true'
      @user = params[:username]
    else
      @user = 'Please log in'
    end
  end

end

# params = {username: 'Sarah'}
