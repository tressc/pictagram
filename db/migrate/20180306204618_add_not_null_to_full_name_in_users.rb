class AddNotNullToFullNameInUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :full_name, :string, null: false
  end
end
