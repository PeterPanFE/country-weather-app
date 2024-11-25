// src/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
        awsRegion
        capital
        code
        continent {
            name
        }
        currencies
        currency
        emoji
        emojiU
        languages {
            name
        }
        name
        native
        phone
        states {
            name
        }
        subdivisions {
            name
        }
    }
  }
`;
