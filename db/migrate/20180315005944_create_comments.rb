class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :img_id, null: false

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :img_id
  end
end
