class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :img_url
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
