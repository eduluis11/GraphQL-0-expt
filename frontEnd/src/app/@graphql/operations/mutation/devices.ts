import gql from 'graphql-tag';

export const ADD_TESTING_MUTATION = gql `
mutation addTesting($data: DataInput!) {
    addTesting(data: $data) {
      status
      message
      data {
        id
        name
        temp1
        temp2
        volts
        registerDate
      }
    }
  }

`;
