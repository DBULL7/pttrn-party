$( document ).ready(() => {
  let divs = document.querySelectorAll("[data-id]")
  for (let i = 1; i < 4; i++) $(divs[i]).hide()
})

$('.accordion-buttons').on('click', (e) => {
  let buttons = $(e.target).siblings()
  for (let i = 0; i < buttons.length; i++) $(buttons[i]).css('background-color', '')
  $(e.target).css("background-color", "#FFF")
  let clickedTab = e.target.innerText
  let divs = document.querySelectorAll("[data-id]")
  divs.forEach(div => div.dataset.id === clickedTab ? $(div).show() : $(div).hide())
})
