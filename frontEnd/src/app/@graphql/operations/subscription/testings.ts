import gql from 'graphql-tag';


export const changeTesting = gql `
    subscription {
        changeTesting {
            id
            name
            temp1
            temp2
            volts
        }
    }
`;

export const changeVotes = gql`
    subscription {
        changeVotes {
            id
            name
            votes
        }
    }
`;
