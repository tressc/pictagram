class AddAttachmentsToImages < ActiveRecord::Migration[5.1]
  def change
    remove_column :images, :image_url
    change_table :images do |t|
      t.attachment :image
    end
  end
end
