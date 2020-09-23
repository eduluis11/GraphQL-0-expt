import { TESTING_FRAGMENT } from '../fragment/device';
import gql from 'graphql-tag';

export const TESTING_DATA_QUERY = gql `
query{
    testings{
      status
      message
      datas{
       ...TestingObject
      }
    }
  }
  ${ TESTING_FRAGMENT }

`;
export const listaPersonajes = gql`
query listaPersonajes($skip: Boolean!) {
    characters {
        id
        name
        actor @skip(if: $skip)
        description @skip(if: $skip)
        total_episodes @skip(if: $skip)
        photo @skip(if: $skip)
        url @skip(if: $skip)
        votes
    }
}
`;
