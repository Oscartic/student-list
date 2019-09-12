import React from 'react';
import { Mutation } from 'react-apollo';
import { AddListMutation } from './operations.graphql';
import { ListQuery } from '../List/operations.graphql';
import ProcessListForm from '../ProcessListForm';
import cs from './styles';

const AddListForm = () => (
    <Mutation mutation={AddListMutation}>
        {(addList, { loading }) => (
            <ProcessListForm
                buttonText="Agregar Alumno"
                loading={loading}
                onProcessList={({ rut, firstName, lastName }) =>
                    addList({
                        variables: {
                            rut,
                            firstName,
                            lastName
                        },
                        update: (cache, { data: { addList } } ) => {
                            const list = addList.list;
                            if(list) {
                                const currentStudents = cache.readQuery({
                                    query: ListQuery });
                                cache.writeQuery({
                                    query: ListQuery,
                                    data: {
                                        students: [student].concat(currentStudents),
                                    },
                                });
                            }
                        }
                    })
                }
            />
        )}
    </Mutation>
);

export default AddListForm;