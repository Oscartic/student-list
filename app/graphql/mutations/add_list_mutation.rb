module Mutations
  class AddListMutation < Mutations::BaseMutation
    argument :rut, String, required: false
    argument :first_name, String, required: false
    argument :last_name, String, required: false
    argument :course, String, required: false
    argument :number_list, Integer, required: false
    argument :is_present, Boolean, required: false

    field :student, Types::StudentType, null: true

    def resolve(rut:, first_name: nil, last_name: nil, course: nil, number_list: nil, is_present: nil)

      student = Student.new(
          rut: rut,
          first_name: first_name,
          last_name: last_name,
          course: course,
          number_list: number_list,
          is_present: is_present,
      )

      if student.save
        { student: student }
      else
        { errors: "No se puede crear este Estudiante." }
      end
    end
  end
end