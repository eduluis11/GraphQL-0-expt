import gql from 'graphql-tag';

export const TESTING_FRAGMENT = gql `

  fragment TestingObject on Data {
    id
    name
    temp1
    temp2
    volts
    registerDate
  }
  `;
