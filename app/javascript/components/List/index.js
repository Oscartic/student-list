import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { ListQuery } from './operations.graphql';
import cs from './styles';

const List = () => {
    const [student, setStudent] = useState(null);
    const [isPresent, setIsPresent] = useState(true);

    const handleStatus = () => {
        setIsPresent(!isPresent);
    }
    return(
        <div className={cs.container}>
        <Query query={ListQuery}>
            {({data, loading}) => (
                <div className={cs.students}>
                    <div className={cs.studentHead}>
                        <span>Nombre</span><span>Rut</span><span>Curso</span><span>Asistencia</span>
                    </div>
                    { loading || !data.students ? "loading..."
                        : data.students.map(({id, rut, fullName, course, isPresent}) =>(
                            <div
                                key={id}
                                className={cs.studentItem}
                                onClick={() => setStudent({id, rut, fullName, course, isPresent})}
                            >
                                <span>{fullName}</span>
                                <span>{rut}</span>
                                <span>{course}</span>
                                <span onClick={()=> handleStatus()} >{isPresent ? <div className={cs.studentPresent}>Presente</div> : <div className={cs.studentAbsent}>Ausente</div> }</span>
                            </div>
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