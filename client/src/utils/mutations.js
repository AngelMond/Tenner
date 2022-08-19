import {gql} from '@apollo/client';


export const LOGIN_CLIENT = gql`
  mutation LoginClient($email: String!, $password: String!) {
    loginClient(email: $email, password: $password) {
      token
      client {
        _id
        username 
      }
    }
  }
`;

export const LOGIN_SUPPLIER = gql`
  mutation LoginSupplier($email: String!, $password: String!) {
    loginSupplier(email: $email, password: $password) {
      token
      supplier {
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

export const CREATE_SUPPLIER = gql`
  mutation CreateSupplier($input: createSupplierInput!) {
    createSupplier(input: $input) {
      token
      supplier {
        _id
        username
      }   
    }
  }
`;

export const ADD_CARD_SUPPLIER = gql`
  mutation AddCardSupplier($input: cardInput!) {
    addCardSupplier(input: $input) {
      username
      email
      _id
    }
}
`;

export const REMOVE_CARD = gql`

`;