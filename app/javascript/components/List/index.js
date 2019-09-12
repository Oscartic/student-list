import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { ListQuery } from './operations.graphql';
import cs from './styles';

const List = () => {
    const [student, setStudent] = useState(null);
    return(
        <div>
        <Query query={ListQuery}>
            {({data, loading}) => (
                <div className={cs.students}>
                    { loading || !data.students ? "loading..."
                        : data.students.map(({id, rut, fullName, course, isPresent}) =>(
                            <button
                                key={id}
                                className={cs.info}
                                onClick={() => setStudent({id, rut, fullName, course, isPresent})}
                            >
                                <strong>{fullName}</strong>
                                <span>{isPresent ? " Presente" : " Ausente" }</span>

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