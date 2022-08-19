import { gql } from '@apollo/client';

export const ME_CLIENT = gql`
    query MeClient {
        meClient {
            _id
            username
            email
        
        }
    }
`;

export const ME_SUPPLIER = gql`
    query MeSupplier {
        meSupplier {
            _id
            username
            email
            card {
                _id
                image
            }
        }
    }
`;