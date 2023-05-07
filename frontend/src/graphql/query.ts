import { gql } from 'urql';

// query
const query = gql`
    query MyQuery {
        factoryCreateds(orderBy: factoryId, orderDirection: asc) {
            factoryId
            factoryAddress
        }
    }
`;

export default query;