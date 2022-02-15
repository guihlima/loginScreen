var btnVisible = document.getElementById('icon__passVisible')
var btnUnvisble = document.getElementById('icon__passUnvisible')
var inputUser = document.getElementById('input__user')
var inputPass = document.getElementById('field__pass')

const btn = 'unvisible'
inputUser.onblur = () =>{
    alert("certo")
}

btnVisible.addEventListener('click', function(e){

    const type = inputPass.getAttribute('type') === 'password' ? 'text' : 'password'
    inputPass.setAttribute('type',type)

    const visible = btnVisible.getAttribute('name') === 'eye-outline' ? 'eye-off-outline' : 'eye-outline'
    btnVisible.setAttribute('name', visible)
})
// btnVisible.onclick = ()=>{
//     inputPass.classList.toggle('visible')
//     const visible = ()=> document.inputPass.classList.
        // if('visible')
    //     document.querySelector('.visible').type = 'text'
    // else
    //     btnVisible.type = 'password'
// }