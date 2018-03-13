import gql from 'graphql-tag';

export default gql`

    type Query {
        users(id: Int): [User]
    }
    
    type User {
        name: String
        address: String
        id: Int
    }
`