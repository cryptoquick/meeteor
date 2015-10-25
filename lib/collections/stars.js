Stars = new Mongo.Collection('stars');

_Stars = new SimpleSchema({
  owner: {
    type: String,
    label: 'Owner',
    autoValue: function () {
      return this.userId;
    }
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  },

  updatedAt: {
    type: Date,
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true
  },

  url: {
    type: String,
    label: 'URL',
    optional: true
  },

  title: {
    type: String,
    label: 'Title',
    optional: true
  },

  content: {
    type: String,
    label: 'Content',
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
        rows: 10
      }
    },
    optional: true
  },

  image: {
    type: String,
    label: 'Image ID',
    optional: true
  }
});

Stars.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return true; //(userId && doc.owner === userId);
  },

  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },

  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.owner === userId;
  },

  fetch: ['owner']
});

Stars.attachSchema(_Stars);