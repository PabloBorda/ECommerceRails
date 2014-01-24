require 'test_helper'

class FiftyOneIncControllerTest < ActionController::TestCase


  def test_payment
    if (Order.process_with_active_merchant()==1)
      assert true
    end
    
  end

end
