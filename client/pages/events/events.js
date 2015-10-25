Template.eventsPage.onCreated(function () {
  this.subscribe('events');
});

Template.eventsPage.helpers({
  eventItems: function () {
    return Events.find({}, {sort: {createdAt: -1}});
  }
});