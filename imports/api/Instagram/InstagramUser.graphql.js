import gql from 'graphql-tag';

export default gql`

    type Query {
        users: [User]
        user(name: String): User
    }

    type User {
        id: Int
        name: String
        user_name: String
    }
`