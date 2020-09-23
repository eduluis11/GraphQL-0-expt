import { USER_FRAGMENT } from '@graphql/operations/fragment/user';
import gql from 'graphql-tag';


export const LOGIN_QUERY = gql `
    query login($email: String!, $password: String!){
    login(email: $email, password: $password){
      status
      message
      token
    }
  }

`;

export const USER_LIST_QUERY = gql `
  query{
    users{
       status
       message
       users{
        ...UserObject
    }
  }
}
${ USER_FRAGMENT}

`;

export const ME_DATA_QUERY = gql `
     {
       me{
        status
         message
         user{
           id
           name
           email
           registerDate
         }
       }
     }
`;

