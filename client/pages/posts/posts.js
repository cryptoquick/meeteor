Template.postsPage.onCreated(function() {
  let instance = this;
  let slug = Router.current().params.slug;
  console.log(slug)
  instance.subscribe('posts', slug);
  instance.subscribe('event', slug);
})

Template.postsPage.helpers({
  posts: function () {
    return Posts.find({}, {sort: {createdAt: -1}});
 },
  eventDetails: function() {
    let slug = Router.current().params.slug;
    let details = Events.findOne({slug:slug});
    console.log(details);
    return details
  }
});