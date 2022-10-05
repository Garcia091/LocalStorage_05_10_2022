let nombre, apellido, usuario,email,address,country

let formulario = document.getElementById('form')

formulario.addEventListener('submit',(e) =>{
 e.preventDefault()
 LeerData()

} )

function LeerData() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getElementById('username').value
    email = document.getElementById('email').value
    address = document.getElementById('address').value
    country = document.getElementById('country').value

    GuardarLocalStorage(nombre,apellido,usuario,email,address,country)
}

function GuardarLocalStorage(nombre,apellido,usuario,email,address,country) {
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Usuario',usuario)
    localStorage.setItem('Email',email)
    localStorage.setItem('Addrees',address)
    localStorage.setItem('Country',country)
    ExtraerData() 
}

function ExtraerData() {
   let nom = localStorage.getItem('Nombre')
   alert('Bienvenido', nom)
}
