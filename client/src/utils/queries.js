import { gql } from '@apollo/client';

export const ME_SUPPLIER = gql`
    query MeSupplier {
        meSupplier {
            _id
            username
            email
            firstName
            lastName
            password
            role
            card {
                _id
                description
                price
                image
            }
        }
    }
`;