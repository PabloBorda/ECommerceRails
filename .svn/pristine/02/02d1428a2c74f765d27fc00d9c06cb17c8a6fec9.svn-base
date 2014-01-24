class BackendController < ApplicationController
  protect_from_forgery:only=>[:create,:update,:destroy]
  def login
    if session[:user] != nil
	    redirect_to :action =>"get_me_in"
     end
  end
  
  def get_me_in
	  @usercito =  User.find_by_username_and_password_and_usertype(params[:user], params[:password],"admin")
	   if (@usercito == nil) and (session[:user]==nil)
	     redirect_to :controller => "fifty_one_inc",:action => "try_again"
	   else
		   session[:user] = @usercito
	   end
   end

   def logout
     session[:user] = nil
     session.delete
     redirect_to :controller => "fifty_one_inc", :action => "buy"
   end

   def show_orders
     if session[:user] != nil
       @orders = Order.find(:all)
     else
       redirect_to action => "login"
     end
   end

   def set_merchant_account
     
   end




end
