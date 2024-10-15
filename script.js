const progressBar = document.getElementById('progressBar');
function displayProgressBar() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrolledHeight = scrollHeight - clientHeight;
  
    const progress = (scrollTop / scrolledHeight) * 100;
  
    progressBar.style.width = `${progress}%`;
  }
  
  window.addEventListener('scroll', displayProgressBar);

  const menuBtn = document.getElementById('menu')
  const mobileMenu = document.querySelector('.mobile_menu')
  const closeBtn = document.querySelector('.close')
  menuBtn.addEventListener('click', () =>{
    mobileMenu.style.display = 'block'
  })
  closeBtn.addEventListener('click', () =>{
    mobileMenu.style.display = 'none'
  })