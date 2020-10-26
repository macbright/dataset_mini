class CreateDatasets < ActiveRecord::Migration[6.0]
  def change
    create_table :datasets, {id: false}  do |t|
      t.string :id
      t.string :name
      t.string :timestamp
      t.string :header_1
      t.string :header_2
      t.string :header_3
      t.string :header_4

      t.timestamps
    end
  end
end
