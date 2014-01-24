class FiftyOneIncController < ApplicationController
protect_from_forgery:only=>[:create,:update,:destroy]
  def index
    puts "Hello guys, the index action is being invoked!"
  end
  
   
  def customer_login
    if session[:user]==nil
          @usercito =  User.find_by_username_and_password_and_usertype(params[:user], params[:password],"cust")
	   if (@usercito == nil) and (session[:user]==nil)
	     redirect_to :action => "try_again"
	   else
             if (@usercito.usertype.eql?("cust"))
               session[:user] = @usercito
             else
               session[:user] = nil
             end
	   end
        else
          redirect_to :action => "online"
        end
  end
  
  
   def try_again
	   puts "You are trying again "
   end

   def logout
     session[:user] = nil
     session.delete
     redirect_to :action => "buy"
   end
   
   def buy
     
   end
   def online
   
   end
   def sign_up
    User.create(:username => params[:user],:password => params[:pass],:name => params[:fname],:lastname => params[:lname],:gender => params[:gender],:birthdate => params[:bdate],:country => params[:country],:address => params[:address],:zip => params[:zip],:email => params[:email],:phone => params[:phone], :usertype => "cust",:city => params[:city])
   end
   
   def order_my_product
    @selectedPic = params[:selectedPic]
    if session[:fam] != nil
      @selectedProduct = Product.find_all_by_productfamily_id(session[:fam])[@selectedPic.to_i]
      session[:selectedProduct] = @selectedProduct
      session[:selectedProductID] = @selectedProduct.id
    end
   end

   def load_single_product
     @selectedProduct = Product.find_by_id(params[:selectedProduct])
   end
   
   def load_products
     @familyToLoad = params[:chosenFamily]
     session[:fam] = @familyToLoad
   end

   def sign_up_or_login
     

   end


   def ordered_products
     
   end

   def add_to_shopping_cart
     @productID = params[:productid]
     @amount = params[:amount]
     @comments = params[:comments]
     @usr = session[:user]
     if @usr != nil
       session[:preorder] = Order.create(:customer_id => @usr)
       Order_product.create(:orders_id => session[:preorder].id,:product_id => session[:selectedProductID],:description => @comments )
       redirect_to :action => "ordered_products"
     else
       redirect_to :action => "sign_up_or_login"
     end
   end

   def load_menu
   end

   def check_out
     CheckOut.process_with_active_merchant
   end
end
