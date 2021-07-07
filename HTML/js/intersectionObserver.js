const $ = document.querySelector.bind(document)

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.table(entry)
    })
  },
  {
    root: $('#long-container'),
  },
)

observer.observe($('#target'))
