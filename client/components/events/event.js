Template.event.events({
 'click [data-action="event-go"]': function (event, template) {
   event.preventDefault();
   let slug = getSlug(this.title);
   Router.go("event", {slug: slug});
 }
});

Template.event.helpers({
  image: function () {
    return this.image ? `/images/id/${this.image}` : null;
  }
})
