require 'test_helper'

class ProductfamiliesControllerTest < ActionController::TestCase
  def test_should_get_index
    get :index
    assert_response :success
    assert_not_nil assigns(:productfamilies)
  end

  def test_should_get_new
    get :new
    assert_response :success
  end

  def test_should_create_productfamily
    assert_difference('Productfamily.count') do
      post :create, :productfamily => { }
    end

    assert_redirected_to productfamily_path(assigns(:productfamily))
  end

  def test_should_show_productfamily
    get :show, :id => productfamilies(:one).id
    assert_response :success
  end

  def test_should_get_edit
    get :edit, :id => productfamilies(:one).id
    assert_response :success
  end

  def test_should_update_productfamily
    put :update, :id => productfamilies(:one).id, :productfamily => { }
    assert_redirected_to productfamily_path(assigns(:productfamily))
  end

  def test_should_destroy_productfamily
    assert_difference('Productfamily.count', -1) do
      delete :destroy, :id => productfamilies(:one).id
    end

    assert_redirected_to productfamilies_path
  end
end
