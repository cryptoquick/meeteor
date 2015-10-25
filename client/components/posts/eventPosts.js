Template.eventPosts.onCreated(function() {
  let instance = this;
  let slug = Router.current().params.slug;
  console.log(slug)
  instance.subscribe('posts', slug);
  
})


Template.eventPosts.helpers({
//  dataset: function () {    
//    return dataset.find({})
//  }
})

Template.eventPosts.events({
//  'click [data-action="open-modal"]': function (event, template) {
//    event.preventDefault()
//    var modal = event.currentTarget.dataset.target
//    $('#' + modal).modal('show');
//  }
})

Template.eventPosts.onDestroyed(function () {

 });