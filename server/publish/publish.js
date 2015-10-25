Meteor.publish("events", function () {
  if (!this.userId) {
    return [];
  }
  return Events.find({}, {sort: {createdAt: -1}});
});

Meteor.publish("posts", function (slug) {
  if (!this.userId) {
    return [];
  }
  return Posts.find({event:slug}, {sort: {createdAt: -1}});
//   return Posts.find({});
});

Meteor.publish("event", function (slug) {
  if (!this.userId) {
    return [];
  }
  return Events.find({slug:slug}, {sort: {createdAt: -1}});
});
