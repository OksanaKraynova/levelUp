const timer = document.querySelector('.form-timer')
const arrow = document.querySelector('.arrow-wrapper')
const form = document.querySelector('form')
const names = document.querySelector('#name')
const phone = document.querySelector('#phone')
const success = document.querySelector('.success')
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

let time = 1800

const updateTime = () => {
  const minutes = Math.floor(time / 60)
  let seconds = time % 60
  seconds = seconds < 10 ? '0' + seconds : seconds
  timer.innerHTML = `${minutes}:${seconds}`
  time--
}
const sendForm = e => {
  e.preventDefault()
  names.value = ''
  phone.value = ''
  success.innerHTML = 'Заказ успешно отправлен!'
}
arrow.addEventListener('click', () => window.scrollBy(0, window.innerHeight))

form.addEventListener('submit', sendForm)

setInterval(updateTime, 1000)