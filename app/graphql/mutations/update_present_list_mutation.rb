module Mutations
  class UpdatePresentListMutation < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :is_present, Boolean, required: false

    field :student, Types::StudentType, null: true

    def resolve(id:, is_present: nil)

      student= Student.find(id)

      if student.update(is_present: is_present)
        { student: student }
      else
        { errors: "No es posible actualizar los datos." }
      end
    end
  end
end