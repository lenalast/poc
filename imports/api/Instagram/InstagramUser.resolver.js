import axios from 'axios';

export default {
  Query: {
    user: async (obj, args) => {
      const response = await axios.get('http://localhost:2000/instagram?name_like=' + args.name)
      const { id, name, user_name } = response.data[0]
      return {
        id,
        name,
        user_name
      }
    },

    users: async () => {
      const response = await axios.get('http://localhost:2000/instagram')
      return response.data.map(({id, name, user_name}) => ({
        id,
        name,
        user_name
      }))
    }
  }
}