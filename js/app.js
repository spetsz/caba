const dropDownMenu = document.getElementById('navbarSupportedContent')

const bringToView = (e) =>{

    e.parentElement.parentElement.childNodes.forEach(item =>{
        item.classList = "nav-item"
    })
    

    dropDownMenu.classList = "collapse navbar-collapse"
    const element = document.getElementById(e.name)
  
    e.parentElement.classList.add("active")
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

const sliderData = [
    {
        title : "caba investissement",
        description : "Invest est l’une des plus proactives des boites de consulting et assistanat en investissement, depuis 2008",
        src : "./img/new/invest.jpeg",
        link : "https://www.facebook.com/cabainvest"
    },
    {
        title : "caba immobilier",
        description : "Caba immobilier vous accompagne dans toutes transactions immobilières (Achat – Vente – Location – Echange)",
        src : "./img/new/imob.jpeg",
        link : "https://www.facebook.com/profile.php?id=100064823104193"
    },
    {
        title : "caba communication",
        description :"Caba communication est une agence de communications et de design qui mets en place les moyens de communications pour les entreprises et mêmes les particuliers en offrant les meilleures prestations",
        src : "./img/new/com2.jpeg",
        link : "https://www.facebook.com/profile.php?id=100087791501556"
    },
]

const title = document.getElementById("slider_title")
const description = document.getElementById("slider_description")
const img = document.getElementById("slider_img")
const anchorTag = document.querySelector(".discover_btn")
let i = 1


const init = () =>{
    
    gsap.from("#cont",{
        opacity : 0,
        duration : 2,
        y : -200,
        ease : "Power.easeInOut"
    
    })

    setInterval(()=>{

        if(i < sliderData.length){
    
            title.textContent = sliderData[i].title
            description.textContent = sliderData[i].description
            img.src = sliderData[i].src
            anchorTag.href = sliderData[i].link

            i++
    
            slide()
    
    
    
        }else{
            
            i = 0
            title.textContent = sliderData[i].title
            description.textContent = sliderData[i].description
            img.src = sliderData[i].src
            anchorTag.href = sliderData[i].link

            slide()
            i++
    
        }
    
    
    },7000)
}

const slide = () =>{
    gsap.from(title,{
        y : 200,
        duration : 2,
        opacity : 0,
        ease : "Power.easeIn"

    })

    gsap.from(description,{
        y : -200,
        duration : 2,
        opacity : 0,
        ease : "Power.easeIn"

    })

    gsap.from(img,{
        opacity : 0,
        duration : 2
    })
}

init()