class RemoveConstraintFromUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :full_name, :string, :null => true
  end
end
