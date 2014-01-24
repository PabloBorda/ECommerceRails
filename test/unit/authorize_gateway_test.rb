# To change this template, choose Tools | Templates
# and open the template in the editor.

$:.unshift File.join(File.dirname(__FILE__),'..','lib')

require 'test/unit'
load 'check_out_helper.rb'

class Payment_gateway_test < Test::Unit::TestCase
  

  @creditcard
  @options

  def setup
    @creditcard = ActiveMerchant::Billing::CreditCard.new({
        :number => '4546578000168482',
        :month => '10',
        :year => '2010',
        :first_name => 'Pablo',
        :last_name => 'Borda',
        :verification_value => '743'
      })

     @options = {
        :card_code => '743',
        :name => 'Pablo' + " " + "Borda",
        :address => 'Salguero 568 piso 6 Dep E',
        :city => 'Capital Federal',
        :zip => '1177',
        :country => 'Argentina',
        :email => 'Pablote.20@gmail.com',
        :phone => '5491164507077',
        :customer_ip => '190.17.20.79'
      }
  end


  def test_authorize_net
     authorize_net_gateway = ActiveMerchant::Billing::AuthorizedNetGateway.new({
          :login => "4y5BfuW7jm",
          :password => "4cAmW927n8uLf5J8"
     })
    payment = CheckOutHelper::Payment.new(authorize_net_gateway,@creditcard,@options)
    answer = payment.check_out_test_mode(1239)
    puts answer
  end


  def test_paypal
    paypal_gateway = ActiveMerchant::Billing::PaypalExpressGateway.new(
      :login => 'pablot_1232375838_biz_api1.gmail.com',
      :password => '1232375851',
      :signature => 'ADJIw3nas8rxsETP9LaNHnOOSh8yA.EynVTB.3QvCNaqFyH0jkw9PD3z')
    payment = CheckOutHelper::Payment.new(paypal_gateway,@creditcard,@options)
    answer = payment.check_out_test_mode(1239)
    puts answer

  end






end
