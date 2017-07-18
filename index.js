$('.accordion-tabs').on('click', (e) => {
  let tab = e.target.innerText
  let test = $('.accordion').children()
  for (let i = 0; i < test.length; i++) {
    if (test[i].innerText === tab) {
      $(test[i]).find('div').removeClass('inactive')
      $(test[i]).find('div').addClass('active')
    } else {
      $(test[i]).find('div').removeClass('active')
      $(test[i]).find('div').addClass('inactive')
    }
  }
})
