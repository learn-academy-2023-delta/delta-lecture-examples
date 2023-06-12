class CreateVeterinarians < ActiveRecord::Migration[7.0]
  def change
    create_table :veterinarians do |t|
      t.string :name
      t.integer :patients

      t.timestamps
    end
  end
end
