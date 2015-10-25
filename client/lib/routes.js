Router.configure({
  layoutTemplate: 'layout',

  onAfterAction: function () {
    $(document).scrollTop(0);
  }
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/profile', function () {
  this.render('profile');
});

Router.route('/event/:slug', function () {
  this.render('eventPosts');
}, {
  name: 'event'
});

Router.route('/events', function () {
  this.render('eventsPage');
});

Router.route('/add-event', function () {
  this.render('addEvent');
});

Router.route('/add-post', function () {
  this.render('addPost');
});

