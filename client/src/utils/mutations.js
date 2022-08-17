import {gql} from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username 
      }
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation CreateClient($input: createClientInput!) {
    createClient(input: $input) {
      token
      client {
        _id
        username
      }   
    }
  }
`;