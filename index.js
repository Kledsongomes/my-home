const principal = document.getElementById('mode')
const paragrafo = document.querySelector('#user')


principal.addEventListener('click',()=>{
const container = document.getElementById('container')

  if(principal.classList.contains('fa-moon')){
    principal.classList.remove('fa-moon')
    principal.classList.add('fa-sun')
    
    container.classList.add('dark')
    return
  }
  principal.classList.add('fa-moon')
  principal.classList.remove('fa-sun')

  container.classList.remove('dark')
})

nameUser = prompt('Qual o seu nome?').toUpperCase()
paragrafo.textContent = `Hi! ${nameUser}, I'm Francisco. `

