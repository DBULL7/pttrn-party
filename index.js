$('.accordion-buttons').on('click', (e) => {
  let test = e.target.innerText
  console.log(test)
  if (test === 'Tab 1') {
    
  } else if (test === 'Tab 2') {
    let shaka = document.querySelector("[data-id='Tab-2']")
    console.log(shaka)
  }
})
