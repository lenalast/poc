import axios from 'axios';

export default {
  Query: {
    artist: async (obj, args) => {
      const response = await axios.get('http://localhost:3000/artists/' + args.id)
      const { id, artist_name } = response.data
      return {
        id,
        name: artist_name
      }
    },

    artists: async () => {
      const response1 = await axios.get('http://localhost:3000/spotify')
      const response2 = await axios.get('http://localhost:3000/itunes')
      const [spotify, iTunes] = await Promise.all([response1, response2])

      const spotifyArtists = spotify.data.map(({id, artist_name})=> ({
        id,
        name: artist_name,
        source: 'Spotify'
      }))

      const iTunesArtists = iTunes.data.map(artist => ({
        id: artist.id,
        name: artist.artist_name,
        source: 'iTunes'
      }))

      return [...spotifyArtists, ...iTunesArtists]
    },

    spotifyArtists: async () => {
      const response = await axios.get('http://localhost:3000/spotify')
      return response.data.map(({id, artist_name})=> ({
        id,
        name: artist_name,
        source: 'Spotify'
      }))
    },

    iTunesArtists: async () => {
      const response = await axios.get('http://localhost:3000/itunes')
      return response.data.map(({id, artist_name})=> ({
        id,
        name: artist_name,
        source: 'iTunes'
      }))
    }
  },

  Artist: {
    twitterUser: async (artist) => {
      const response = await axios.get('http://localhost:3000/twitter?name_like=' + artist.name)
      return response.data[0]
    }
  }
}
