module Types
  class MutationType < Types::BaseObject
    field :add_list, mutation: Mutations::AddListMutation
    field :update_list, mutation: Mutations::UpdateListMutation
  end
end
