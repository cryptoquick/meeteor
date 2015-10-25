AutoForm.hooks({
  addPostForm: {
    before: {
      insert: function (doc) {
        console.log(doc);

        doc.event = Session.get("slug");
        doc.image = imageUpload.currentImage.get();
        this.result(doc);
      }
    },
    onSuccess: function () {
      Materialize.toast('Woot!! Post added!', 4000);
//       Router.go('/events');
    }
  }
});