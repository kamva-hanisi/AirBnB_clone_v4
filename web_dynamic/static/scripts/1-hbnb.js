$(document).ready(() => {
  const amentiesID = {};
  $('li input[type=checkbox]').change(function () {
    if (this.checked) {
      amentiesID[this.dataset.name] = this.dataset.id;
    } else {
      delete amentiesID[this.dataset.name];
    }
    $('.amenities h4').text(Object.keys(amentiesID).sort().join(', '));
  });
});
