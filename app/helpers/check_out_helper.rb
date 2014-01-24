# To change this template, choose Tools | Templates
# and open the template in the editor.

  require 'rubygems'
  require 'active_merchant'

module CheckOutHelper


  class Payment


    @gateway
    @options
    @creditcard
    
    def initialize(gw,card,options)
      @options = options
      @creditcard = card
      @gateway = gw
    end


    
    def check_out_test_mode(cents)
      ActiveMerchant::Billing::Base.mode = :test
      if @creditcard.valid?
        response = @gateway.purchase(cents, @creditcard, @options)
        if response.success?
          status = 'processed'
          return 1
        else
          status = 'failed'
          error_message = response.message
        end
      else
        status = 'failed'
        error_message = 'Invalid credit card'
      end
    end

    def check_out(cents)
      ActiveMerchant::Billing::Base.mode = :production
      if @creditcard.valid?
        response = @gateway.purchase(cents, @creditcard, @options)
        if response.success?
          status = 'processed'
          return 1
        else
          status = 'failed'
          error_message = response.message
        end
      else
        status = 'failed'
        error_message = 'Invalid credit card'
      end
    end


 end

    
  end




  class CheckOut

   status = 0
   error_message = ''

   def self.process_with_active_merchant

     
  end


end
