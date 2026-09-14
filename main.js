
document.querySelectorAll('#navButtons .btn').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('#navButtons .btn').forEach(btn => btn.classList.remove('active-custom'));
    this.classList.add('active-custom');
  });
});