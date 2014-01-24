class CreateProductfamilies < ActiveRecord::Migration
  def self.up
    create_table :productfamilies do |t|
      t.integer :id
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :productfamilies
  end
end
