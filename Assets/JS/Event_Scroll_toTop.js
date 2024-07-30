// Hiden - Show button Scroll to Top
document.addEventListener('scroll', () => {
  const btnScrollToTop = document.getElementById('shop_scroll-up')
  if(window.scrollY > 300) {
    btnScrollToTop.classList.add('show')
  } else {
    btnScrollToTop.classList.remove('show')
  }

})

// Action scroll to Top
function scrollUpToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}