Images = new FileCollection('images', {
  resumable: true,
  baseURL: '/images',
  http: [
    {
      method: 'get',
      path: '/hash/:md5',
      lookup: function (params, query) {
        return {
          md5: params.md5
        };
      }
    },
    {
      method: 'get',
      path: '/id/:_id',
      lookup: function (params, query) {
        return {
          '_id': params._id
        };
      }
    }
  ]
});
