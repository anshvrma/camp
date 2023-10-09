
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#explode, #explode1',
        start: '10% top',
        end: '400 top',
        scrub: true,
        markers: true
    }
})

tl.to('#explode', {
    y: 150
})
tl.to('#explode1', {
    y: -150
})

//smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)