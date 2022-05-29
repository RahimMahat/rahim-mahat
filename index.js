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