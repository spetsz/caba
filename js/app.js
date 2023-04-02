const dropDownMenu = document.getElementById('navbarSupportedContent')

const bringToView = (e) =>{

    dropDownMenu.classList = "collapse navbar-collapse"
    const element = document.getElementById(e.name)
    const elementMoreBtn = document.querySelector(`#${e.name} > a`)
    
    element.scrollIntoView()

    let prevStyle = element.style.boxShadow
    let btnPrevStyle = elementMoreBtn.style.opacity
    element.style.boxShadow = ' 0px 14px 38px 0px rgba(0, 0, 0, 0.11)'
    elementMoreBtn.style.opacity = 1
    
    setTimeout(()=>{
        element.style.boxShadow = prevStyle
        elementMoreBtn.style.opacity = btnPrevStyle
    }, 1500)

 

}            