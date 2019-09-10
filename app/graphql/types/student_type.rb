module Types
  class StudentType < Types::BaseObject
    field :id, ID, null: false
    field :rut, String, null: false
    field :full_name, String, null: false
    field :course, String, null: false
    field :number_list, Integer, null: false
    field :is_present, Boolean, null: false

    def full_name
      [object.first_name, object.last_name].compact.join(" ")
    end
  end
end
