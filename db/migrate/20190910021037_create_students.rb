class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :rut
      t.string :first_name
      t.string :last_name
      t.string :course
      t.integer :number_list
      t.boolean :is_present

      t.timestamps
    end
  end
end
