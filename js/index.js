// #1 - mouseover event on header intro image
const headerImg = document.querySelector('header img')
headerImg.addEventListener('mouseover', event => event.target.style.border = 'solid red 3px')
headerImg.addEventListener('mouseout', event => event.target.style.border = '')


//#2 - keydown event on body
const bodyEvent = document.querySelector('body')
bodyEvent.addEventListener('keydown', event => event.target.style.backgroundColor = 'purple')

//#3 - dblclick event on html

const dblclickHTMLEvent = document.querySelector('html')
dblclickHTMLEvent.addEventListener('dblclick', event => window.alert('Do it again'))

//#4 - focus on content section image

// NEED TO FINISH

const contentSectionP = document.querySelector('.content-section p')
contentSectionP.addEventListener('focus', event => event.target.style.transform = 'rotate(75deg)')

//#5 load event on window
window.addEventListener('load', event => window.alert('Page is fully loaded!') )

//#6 click even for 'Sign Me Up' buttons'

const signMeUp = document.querySelectorAll('.btn')
signMeUp.forEach(item => item.addEventListener('click', event => prompt('Please Enter Your Name')))

//#7 - dragstart event
const dragOverEvent = document.querySelector('.inverse-content')
dragOverEvent.addEventListener('dragstart', event => {
    alert('Hey! Dont touch that!')
    event.stopImmediatePropagation()
})

//#8 - resize event
const bodyBackground = document.querySelector('body')
window.addEventListener('resize', () => bodyBackground.style.color = 'green')

//#9 - 
 

//#10 - wheel event on 'Welcome to fun bus!'

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.intro h2');
  el.onwheel = zoom;

  //nav prevent default

  const navItems = document.querySelectorAll(nav)
  navItems.forEach(item => item.addEventListener(event => event.preventDefault()))