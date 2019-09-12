import React, { useState } from 'react';
import { Query } from 'react-apollo';
// import { ListStudentsQuery } from './operations.graphql';
import cs from './styles';

const List = () => {
    const [student, setStudent] = useState(null);
    return(
        <div>
        <Query query={Query}>
            {({data, loading}) => (
                <div className={cs.students}>
                    { loading || !data.students ? "loading..."
                        : data.students.map(({id, rut, first_name, last_name, course, number_list, is_present}) =>(
                            <button
                                key={id}
                                className={cs.info}
                                onClick={() => setStudent({id, rut, first_name, last_name, course, number_list, is_present})}
                            >
                                <strong>{first_name}</strong>

                            </button>
                        ))
                    }
                </div>
            )

            }
        </Query>
        </div>
    );
};


export default List;