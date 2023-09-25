export const slideOutAnimation = (e: HTMLElement) => {
    const eCover = e.querySelectorAll('.cover')
    eCover.forEach(item => {
        const eGsap = item.querySelector('.gsapt')
        const drop = item.querySelector('.gsapd')
        eGsap?.addEventListener('mouseover', () => {
            gsap.from(drop, {y: 10, opacity: 0, ease: 'power1.in', duration: 0.5})
        })   
        eGsap?.addEventListener('mouseout', () => {
            gsap.from(drop,{y: 0, opacity: '+=1', ease: 'power1.in', duration: 0.5})
        })   
    })
}
