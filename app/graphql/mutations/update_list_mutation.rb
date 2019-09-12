module Mutations
  class UpdateListMutation < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :rut, String, required: false
    argument :first_name, String, required: false
    argument :last_name, String, required: false
    argument :course, String, required: false
    argument :number_list, String, required: false
    argument :is_present, Boolean, required: false

    field :student, Types::StudentType, null: true

    def resolve(id:, rut:nil, first_name: nil, last_name: nil, course: nil, number_list: nil, is_present: nil)

      student= Student.find(id)

      if student.update(rut: rut, first_name: first_name, last_name: last_name, course: course, number_list: number_list, is_present: is_present)
        { student: student }
      else
        { errors: "No es posible actualizar los datos." }
      end
    end
  end
end