class CreateGameTable < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :p1
      t.string :p2
      t.string :winner
      t.timestamps
    end
  end
end
