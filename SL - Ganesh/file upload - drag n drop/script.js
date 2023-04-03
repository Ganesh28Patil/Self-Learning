Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function (button) {
    const hiddenInput = button.parentElement.querySelectorAll(
      ".file-upload__input"
    );
  }
);
