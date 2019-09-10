module Types
  class StudentType < Types::BaseObject
    field :id, ID, null: false
    field :rut, String, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false
    field :course, String, null: false
    field :number_list, Integer, null: false
    field :is_present, Boolean, null: false
  end
end
