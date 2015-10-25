Images.allow({
  insert: function (userId, file) {
    if (userId) {
      file.metadata = file.metadata || {};
      file.metadata.owner = userId;
      return true;
    }
    else {
      return false;
    }
  },

  remove: function (userId, file) {
    return (userId === file.metadata.owner);
  },

  read: function (userId, file) {
    return true;
  },

  write: function (userId, file, fields) {
    return (userId === file.metadata.owner);
  }
});

Meteor.publish('imageUpload', function (clientUserId) {
  return Images.find({});

  if (clientUserId === this.userId) {
    return Images.find({
      'metadata._Resumable': {
        $exists: false
      },
      'metadata.owner': this.userId
    });
  } else {
    return null;
  }
});