const navbar = document.getElementById('nav-open');
const navigation = document.getElementById('navigation');


navbar.addEventListener('click', () => {
  navigation.style.display = 'flex';
})
navigation.addEventListener('click', () => {
  navigation.style.display = 'none';
})

