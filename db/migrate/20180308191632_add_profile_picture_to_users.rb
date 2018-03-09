class AddProfilePictureToUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :img_url
    change_table :users do |t|
      t.attachment :pro_pic
    end
  end
end
