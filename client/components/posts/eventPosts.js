Template.eventPosts.onCreated(function() {
  let instance = this;
  let slug = Router.current().params.slug;

  console.log(slug)
  instance.subscribe('posts', slug);
})

Template.eventPosts.helpers({
  posts: function () {
    return Posts.find({}, {sort: {createdAt: -1}});
 },
  slug: function () {
    return Router.current().params.slug;
  },
  image: function () {
    return this.image ? `/images/id/${this.image}` : null;
  }
})

Template.eventPosts.onRendered(function() {
  this.$('.materialboxed').materialbox();
});