const rippleElement = document.querySelectorAll('.ripple-effect')

function rippleEffect(e) {
    let target = e.target
    let rect = target.getBoundingClientRect()
    let ripple = target.querySelector('.ripple')
    
    if (!ripple) {
        ripple = document.createElement('span')
        ripple.className = 'ripple'
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
        this.appendChild(ripple)
    }
    
    ripple.classList.remove('show')
    let top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop
    let left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft
    ripple.style.top = top + 'px'
    ripple.style.left = left + 'px'
    ripple.classList.add('show')
    return false
}

rippleElement.forEach(ripple => {
    ripple.addEventListener('click', rippleEffect, false)
})
