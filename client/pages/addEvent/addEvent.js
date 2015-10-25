AutoForm.hooks({
  addEventForm: {
    before: {
      insert: function (doc) {
        doc.image = imageUpload.currentImage.get();

        var slug = getSlug(doc.title);

        if (Events.find({
          slug: slug
        }).count(1) === 0) {
          doc.slug = slug;
          this.result(doc);
        }
        else {
          Materialize.toast('Use a different title! Event not added.', 4000);
          this.result(null);
        }
      }
    },

    onSuccess: function () {
      Materialize.toast('Event added!', 4000);
      Router.go('/');
    }
  }
});