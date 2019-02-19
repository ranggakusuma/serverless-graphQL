const axios = require('axios');

module.exports = {
  Query: {
    posts: (obj, args, context) => new Promise(async (resolve, reject) => {
      
      console.log(context)
      try {
        const { data } = await axios({
          method: 'get',
          url: 'http://localhost:3000/posts',
        });
        return resolve(data);
      } catch(err) {
        return reject(err);
      }
    }),
    authors: (obj, args, context) => new Promise(async (resolve, reject) => {
      // console.log('sssss')
      try{
        const { data } = await axios({
          method: 'get',
          url: 'http://localhost:3000/authors'
        })
        return resolve(data)
      } catch(err) {
        return reject(err)
      }
    })
  },
};