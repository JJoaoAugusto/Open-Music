/* Desenvolva sua lógica aqui ... */


function changeTheme(){
    const buttonDarkMode = document.querySelector('.button__darkMode')
    const html = document.querySelector('html')

    const themePreference = JSON.parse(localStorage.getItem('dark__mode'))

    if(themePreference){
        buttonDarkMode.src = './src/assets/img/sun.svg'
        html.classList.add('dark__mode')
    }
    else{
        buttonDarkMode.src = './src/assets/img/moon.svg'
        html.classList.remove('dark__mode')
    }

    buttonDarkMode.addEventListener('click', (event) => {
        html.classList.toggle('dark__mode')

        if(html.classList.contains('dark__mode')){
            event.target.src = './src/assets/img/sun.svg'
            localStorage.setItem('dark__mode', true)
        }
        else{
            event.target.src = './src/assets/img/moon.svg'
            localStorage.setItem('dark__mode', false)
        }
    })
}
changeTheme()