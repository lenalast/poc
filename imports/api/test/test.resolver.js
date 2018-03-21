// import TestData from './test.collection';
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
      console.log(artist);
      const response = await axios.get('http://localhost:3000/twitter?name_like=' + artist.name)
      return response.data[0]
    }
  }
}


// res.data.map(data => {
//   console.log('console 1', data.artist_name, data.id)
//   getArtist(data.artist_name, data.id)
// })

// res => res.data.map(data => {
//   return {
//     id: data.id,
//     name: data.artist_name
//   }
// })