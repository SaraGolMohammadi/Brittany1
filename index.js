const toggles = document.querySelectorAll('.menu-toggle');

toggles.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const thisDropdown = btn.nextElementSibling;

    // بستن بقیه منوها
    document.querySelectorAll('.dropdown').forEach((menu) => {
      if (menu !== thisDropdown) menu.classList.add('hidden');
    });

    // باز و بسته کردن منوی جاری
    thisDropdown.classList.toggle('hidden');
  });
});

// بستن منو وقتی بیرون کلیک میشه
window.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach((menu) => {
    menu.classList.add('hidden');
  });
});