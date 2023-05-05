import { gql } from 'urql';

// query
const query = gql`
    query MyQuery {
        factoryCreateds(
            orderBy: id, 
            orderDirection: desc
        ) {
            factoryId
            factoryAddress
        }
    }
`;

export default query;