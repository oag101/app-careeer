class AddAvatarToClients < ActiveRecord::Migration[5.1]
  def change
    add_column :clients, :avatar, :text
  end
end
