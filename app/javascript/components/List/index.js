import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ListQuery = gql`
  {
  students {
    id
    rut
    fullName
    course
    isPresent
  }
}
`;

export default () => (
    <Query query={ListQuery}>
        {({ data, loading }) => (
            <div>
                {loading
                    ? 'loading...'
                    : data.students.map(({ id, rut, fullName, coourse, isPresent }) => (
                        <div key={id}>
                            <b>{id}</b> {isPresent ? `present: ${fullName}` : null}
                        </div>
                    ))}
            </div>
        )}
    </Query>
);