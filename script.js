const progressBar = document.getElementById('progressBar');
function displayProgressBar() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrolledHeight = scrollHeight - clientHeight;
  
    const progress = (scrollTop / scrolledHeight) * 100;
  
    progressBar.style.width = `${progress}%`;
  }
  
  window.addEventListener('scroll', displayProgressBar);