// #1 - mouseover event on header intro image
const mouseoverEvent = document.querySelector('header img')
mouseoverEvent.addEventListener('mouseover', event => event.target.style.border = 'solid red 3px')


//#2 - keydown event on body
const keydownEvent = document.querySelector('body')
keydownEvent.addEventListener('keydown', event => event.target.style.backgroundColor = 'purple')

//#3 - dblclick event on 'html!'

const dblclickEvent = document.querySelector('html')
dblclickEvent.addEventListener('dblclick', event => window.alert('Do it again'))

//#4 - focus on content section image

focusEvent = document.querySelector('.content-section p')
focusEvent.addEventListener('focus', event => event.target.style.transform = 'rotate(75deg)')

//#5 load event on window
window.addEventListener('load', event => window.alert('Page is fully loaded!') )








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