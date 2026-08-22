document.addEventListener('DOMContentLoaded', function () {
  var sidebarToggle = document.querySelector('[data-sidebar-toggle]');
  var body = document.body;

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function () {
      body.classList.toggle('sidebar-open');
    });
  }
});
