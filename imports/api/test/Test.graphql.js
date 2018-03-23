import gql from 'graphql-tag';

export default gql`

    type Query {
        artist(id: Int): Artist
        artists: [Artist]
        spotifyArtists: [Artist]
        iTunesArtists: [Artist]
    }

    type Artist {
        id: Int
        name: String
        source: String
        twitterUser: TwitterUser
    }

    type TwitterUser {
        id: Int,
        name: String,
        twitterHandle: String
    }
`