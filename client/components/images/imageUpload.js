imageUpload = {
  imageId: new ReactiveVar(null),
  progress: new ReactiveVar(0),
  currentImage: new ReactiveVar('')
};

Template.imageUpload.onCreated(function () {
  this.autorun(() => {
    this.subscribe('imageUpload', Meteor.userId());
    $.cookie('X-Auth-Token', Accounts._storedLoginToken());
  });

  imageUpload.progress.set(0);
  imageUpload.imageId.set(null);
  imageUpload.currentImage.set('');
});

Template.imageUpload.onRendered(function () {
  Images.resumable.assignDrop(this.find('.image-upload-resumable'));
  Images.resumable.assignBrowse(this.find('.image-upload-resumable'));

  if (!Images.resumable.isInitialized) {
    Images.resumable.on('fileAdded', (file) => {
      imageUpload.progress.set(0);

      Images.insert({
        _id: file.uniqueIdentifier,
        filename: file.fileName,
        contentType: file.file.type
      }, (err, id) => {
        if (err) {
          console.error('File creation failed!', err);
        }

        Images.resumable.upload();

        imageUpload.imageId.set(id);
        imageUpload.currentImage.set(id.valueOf());
      });
    });

    Images.resumable.on('fileProgress', (file) => {
      imageUpload.progress.set(file.progress());
    });

    Images.resumable.isInitialized = true;
  }
});

Template.imageUpload.helpers({
  image: function () {
    var id = imageUpload.imageId.get();

    if (id) {
      return Images.findOne(id);
    }
    else {
      return {};
    }
  },

  uploadFinished: function () {
    return (this.md5 && this.md5 !== 'd41d8cd98f00b204e9800998ecf8427e'); // Hash for empty string
  },

  progress: function () {
    return imageUpload.progress.get() * 100;
  }
});