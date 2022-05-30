// Animated Circles
const circles = document.querySelectorAll(".circle")
const mainImg = document.querySelector(".main-circle img")

let mX = 0
let mY = 0
const z = 100;
const AnimateCircles = (e, x, y) => {

    if (x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        })
        mainImg.style.left = `${z}px`
    } else if (x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        })
        mainImg.style.left = `-${z}px`
    }
    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        })
        mainImg.style.top = `${z}px`
    } else if (y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        })
        mainImg.style.top = `-${z}px`
    }
    mX = e.clientX;
    mY = e.clientY;
}

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    AnimateCircles(e, x, y)
})

// Main Button
const mainBtns = document.querySelectorAll(".main-btn")

mainBtns.forEach((btn) => {
    let ripple;
    btn.addEventListener("mouseenter", (e) => {
        const left = e.clientX - e.target.getBoundingClientRect().left
        const top = e.clientY - e.target.getBoundingClientRect().top
        ripple = document.createElement("div");
        ripple.classList.add("ripple")
        ripple.style.left = `${left}px`
        ripple.style.top = `${top}px`
        btn.prepend(ripple);
    })

    btn.addEventListener("mouseleave", () => {
        btn.removeChild(ripple)
    })
})


// About me text

const AboutMeText = document.querySelector(".about-me-text")
const AboutMeTextContent = `I am a Developer & a Designer i create best websites not just development but also the designing keeping the user experience in mind, also an CyberSecurity enthusiast so can also do the basic pentesting/bug-hunting`

Array.from(AboutMeTextContent).forEach((char) => {
    const span = document.createElement("span")
    span.textContent = char
    AboutMeText.appendChild(span)

    span.addEventListener("mouseenter", (e) => {
        e.target.style.animation = "aboutMeTextAnim 7s infinite"
    })
})


// Projects
const section3 = document.querySelector(".section-3")
const container = document.querySelector(".container")
const projects = document.querySelectorAll(".project")
const projectHideBtn = document.querySelector(".project-hide-btn")

projects.forEach((project, index) => {
    project.addEventListener("mouseenter", () => {
        // to get the top value substract image height and project height + extra space
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight +20}px`
    })

    project.addEventListener("mouseleave", () => {
        project.firstElementChild.style.top = `2rem`;
    })

    // Big prject image animation 
    project.addEventListener("click", () => {
            const bigImgWrapper = document.createElement("div")
            bigImgWrapper.className = 'project-img-wrapper'
            container.appendChild(bigImgWrapper)

            const bigImg = document.createElement("img")
            bigImg.className = 'project-img'
            const imgPath = project.firstElementChild.getAttribute("src").split(".")[0]
            bigImg.setAttribute("src", `${imgPath}-big.jpg`)
            bigImgWrapper.appendChild(bigImg)
            document.body.style.overflowY = "hidden"

            projectHideBtn.classList.add("change")

            projectHideBtn.onclick = () => {
                projectHideBtn.classList.remove("change")
                bigImgWrapper.remove()
                document.body.style.overflowY = "scroll"
            }
        })
        // only show the images till index no. 6
    index >= 6 && (project.style.cssText = "display: none; opacity: 0")
})
const projectsBtn = document.querySelector(".projects-btn")
const projectsBtnText = document.querySelector(".projects-btn span")
let showHideBool = true

projectsBtn.addEventListener("click", (e) => {
    e.preventDefault()


    projects.forEach((project, ind) => {
        if (ind >= 6) {
            if (showHideBool) {
                setTimeout(() => {
                    project.style.display = "flex"
                    section3.scrollIntoView({ block: "end" })
                }, 600)
                setTimeout(() => {
                    project.style.opacity = "1"
                }, ind * 200)
                projectsBtnText.textContent = "Show Less"
            } else {
                setTimeout(() => {
                    project.style.display = "none"
                    section3.scrollIntoView({ block: "end" })
                }, 1200);
                setTimeout(() => {
                    project.style.opacity = "0"
                }, ind * 100);
                projectsBtnText.textContent = "Show More"
            }
        }
    })
    showHideBool = !showHideBool
})

// Section 4
document.querySelectorAll(".service-btn").forEach((service) => {
    service.addEventListener("click", (e) => {
        e.preventDefault()
        const serviceText = service.nextElementSibling;
        serviceText.classList.toggle("change")

        const rightPosition = serviceText.classList.contains("change") ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})` : 0;

        service.firstElementChild.style.right = rightPosition;
    })
})