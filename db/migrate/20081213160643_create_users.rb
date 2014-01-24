class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.integer :id
      t.string :name
      t.string :lastname
      t.string :address
      t.string :city
      t.string :country
      t.string :email
      t.string :phone
      t.string :zip
      t.char :gender
      t.date :birthdate
      t.string :username
      t.string :password
      t.string :usertype

      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end
